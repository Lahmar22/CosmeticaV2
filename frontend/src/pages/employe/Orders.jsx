import Header from "./Header.jsx";
import Footer from "../../components/Footer.jsx";
import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function EmployeOrders() {
    const [commands, setCommands] = useState([]);
    const [loading, setLoading] = useState(true);
    const [filter, setFilter] = useState("tous");
    const token = localStorage.getItem("token");
    const navigate = useNavigate();

    useEffect(() => {
        fetchOrders();
    }, []);

    const fetchOrders = async () => {
        try {
            setLoading(true);
            const response = await axios.get("http://127.0.0.1:8000/api/allCommands", {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            setCommands(response.data.commands || []);
        } catch (err) {
            console.error(err.response?.data || err);
            alert("Erreur lors du chargement des commandes");
        } finally {
            setLoading(false);
        }
    };

    const prepareOrder = async (commandId) => {
        try {
            const response = await axios.put(
                `http://127.0.0.1:8000/api/valide/${commandId}`,
                {
                    statuts: "en préparation"
                },
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            );

            setCommands((prevCommands) =>
                prevCommands.map((cmd) =>
                    cmd.id === commandId ? { ...cmd, statuts: "préparée" } : cmd
                )
            );
            alert("Commande marquée comme préparée!");

        } catch (error) {
            console.error(error);
            alert("Erreur lors de la mise à jour de la commande");
        }
    };

    const readyForDelivery = async (commandId) => {
        try {
            const response = await axios.put(
                `http://127.0.0.1:8000/api/valide/${commandId}`,
                {
                    statuts: "prête à livrer"
                },
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            );

            setCommands((prevCommands) =>
                prevCommands.map((cmd) =>
                    cmd.id === commandId ? { ...cmd, statuts: "prête à livrer" } : cmd
                )
            );
            alert("Commande marquée comme prête à livrer!");

        } catch (error) {
            console.error(error);
            alert("Erreur lors de la mise à jour de la commande");
        }
    };

    const getStatusColor = (status) => {
        switch (status) {
            case "en attente":
                return "bg-yellow-100 text-yellow-600";
            case "en préparation":
                return "bg-blue-100 text-blue-600";
            case "prête à livrer":
                return "bg-green-100 text-green-600";
            case "livrée":
                return "bg-gray-100 text-gray-600";
            case "annulée":
                return "bg-red-100 text-red-600";
            default:
                return "bg-gray-100 text-gray-600";
        }
    };

    const filteredCommands = filter === "tous" 
        ? commands 
        : filter === "en_attente"
        ? commands.filter(cmd => cmd.statuts === "en attente")
        : filter === "en_preparation"
        ? commands.filter(cmd => cmd.statuts === "en préparation")
        : filter === "annulees"
        ? commands.filter(cmd => cmd.statuts === "annulée")
        : commands;

    return (
        <div className="flex flex-col min-h-screen bg-gray-50">
            <Header />

            <main className="flex-1 container mx-auto px-4 py-10">

                <h1 className="text-3xl font-bold text-rose-600 mb-6">
                    Commandes à Préparer
                </h1>

                {/* Filter Buttons */}
                <div className="mb-6 flex gap-3 flex-wrap">
                    <button
                        onClick={() => setFilter("tous")}
                        className={`px-4 py-2 rounded-full font-medium transition ${filter === "tous" ? "bg-rose-600 text-white" : "bg-white border border-rose-600 text-rose-600 hover:bg-rose-50"}`}
                    >
                        Tous
                    </button>
                    <button
                        onClick={() => setFilter("en_attente")}
                        className={`px-4 py-2 rounded-full font-medium transition ${filter === "en_attente" ? "bg-rose-600 text-white" : "bg-white border border-rose-600 text-rose-600 hover:bg-rose-50"}`}
                    >
                        En attente
                    </button>
                    <button
                        onClick={() => setFilter("en_preparation")}
                        className={`px-4 py-2 rounded-full font-medium transition ${filter === "en_preparation" ? "bg-rose-600 text-white" : "bg-white border border-rose-600 text-rose-600 hover:bg-rose-50"}`}
                    >
                        En préparation
                    </button>
                    <button
                        onClick={() => setFilter("annulees")}
                        className={`px-4 py-2 rounded-full font-medium transition ${filter === "annulees" ? "bg-rose-600 text-white" : "bg-white border border-rose-600 text-rose-600 hover:bg-rose-50"}`}
                    >
                        annulées
                    </button>
                </div>

                {loading ? (
                    <div className="text-center py-12">
                        <p className="text-gray-500 text-lg">Chargement des commandes...</p>
                    </div>
                ) : filteredCommands.length === 0 ? (
                    <p className="text-gray-500 py-12 text-center">Aucune commande trouvée.</p>
                ) : (
                    <div className="overflow-x-auto bg-white rounded-xl shadow">
                        <table className="min-w-full text-sm text-left">

                            {/* Header */}
                            <thead className="bg-rose-100 text-gray-700 uppercase text-xs">
                                <tr>
                                    <th className="px-6 py-3">ID</th>
                                    <th className="px-6 py-3">Client</th>
                                    <th className="px-6 py-3">Produit</th>
                                    <th className="px-6 py-3">Image</th>
                                    <th className="px-6 py-3">Quantité</th>
                                    <th className="px-6 py-3">Prix</th>
                                    <th className="px-6 py-3">Total</th>
                                    <th className="px-6 py-3">Statut</th>
                                    <th className="px-6 py-3">Date</th>
                                    <th className="px-6 py-3">Actions</th>
                                    <th className="px-6 py-3">Détails</th>
                                </tr>
                            </thead>

                            {/* Body */}
                            <tbody>
                                {filteredCommands.map((cmd) => (
                                    <tr key={cmd.id} className="border-b hover:bg-gray-50">

                                        <td className="px-6 py-4 font-bold">
                                            #{cmd.id}
                                        </td>

                                        <td className="px-6 py-4">
                                            {cmd.client?.name || "N/A"}
                                        </td>

                                        <td className="px-6 py-4">
                                            {cmd.produit?.name}
                                        </td>

                                        <td className="px-6 py-4">
                                            <img
                                                src={cmd.produit?.images}
                                                alt={cmd.produit?.name}
                                                className="w-12 h-12 object-cover rounded"
                                            />
                                        </td>

                                        <td className="px-6 py-4">
                                            {cmd.quantite}
                                        </td>

                                        <td className="px-6 py-4">
                                            {cmd.produit?.prix} DH
                                        </td>

                                        <td className="px-6 py-4 font-semibold text-rose-600">
                                            {cmd.prixTotal} DH
                                        </td>

                                        <td className="px-6 py-4">
                                            <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(cmd.statuts)}`}>
                                                {cmd.statuts}
                                            </span>
                                        </td>

                                        <td className="px-6 py-4 text-gray-500">
                                            {new Date(cmd.created_at).toLocaleDateString()}
                                        </td>

                                        <td className="px-6 py-4">
                                            <div className="flex gap-2">
                                                {cmd.statuts === "en attente" && (
                                                    <button
                                                        onClick={() => prepareOrder(cmd.id)}
                                                        className="px-3 py-1 text-sm bg-blue-500 text-white rounded-full hover:bg-blue-600 transition"
                                                    >
                                                        Préparer
                                                    </button>
                                                )}
                                                {cmd.statuts === "en préparation" && (
                                                    <button
                                                        onClick={() => readyForDelivery(cmd.id)}
                                                        className="px-3 py-1 text-sm bg-green-500 text-white rounded-full hover:bg-green-600 transition"
                                                    >
                                                        Prête à livrer
                                                    </button>
                                                )}
                                                {cmd.statuts !== "en attente" && cmd.statuts !== "en préparation" && (
                                                    <span className="text-gray-400 text-sm">-</span>
                                                )}
                                            </div>
                                        </td>
                                        <td className="px-6 py-4">
                                            <button
                                                onClick={() => navigate(`/employe/orders/${cmd.id}`)}   
                                                className="px-3 py-1 text-sm bg-gray-500 text-white rounded-full hover:bg-gray-600 transition"
                                            >
                                                Voir détails
                                            </button>
                                        </td>

                                    </tr>
                                ))}
                            </tbody>

                        </table>
                    </div>
                )}
            </main>

            <Footer />
        </div>
    );
}
