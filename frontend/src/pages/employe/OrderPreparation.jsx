import Header from "./Header.jsx";
import Footer from "../../components/Footer.jsx";
import { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

export default function OrderPreparation() {
    const [command, setCommand] = useState(null);
    const [loading, setLoading] = useState(true);
    const [updating, setUpdating] = useState(false);
    const [notes, setNotes] = useState("");
    const { id } = useParams();
    const navigate = useNavigate();
    const token = localStorage.getItem("token");

    useEffect(() => {
        fetchOrderDetails();
    }, [id]);

    const fetchOrderDetails = async () => {
        try {
            setLoading(true);
            const response = await axios.get(`http://127.0.0.1:8000/api/commands/${id}`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            setCommand(response.data.command || response.data);
        } catch (err) {
            console.error(err.response?.data || err);
            alert("Erreur lors du chargement de la commande");
            navigate("/employe/orders");
        } finally {
            setLoading(false);
        }
    };

    const markAsPrepared = async () => {
        if (!window.confirm("Confirmer que la commande est préparée?")) return;

        try {
            setUpdating(true);
            await axios.put(
                `http://127.0.0.1:8000/api/commands/${id}`,
                {
                    statuts: "préparée",
                    notes: notes
                },
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            );

            setCommand(prev => ({ ...prev, statuts: "préparée" }));
            alert("Commande marquée comme préparée!");

        } catch (error) {
            console.error(error);
            alert("Erreur lors de la mise à jour de la commande");
        } finally {
            setUpdating(false);
        }
    };

    const markAsReadyForDelivery = async () => {
        if (!window.confirm("Confirmer que la commande est prête à livrer?")) return;

        try {
            setUpdating(true);
            await axios.put(
                `http://127.0.0.1:8000/api/commands/${id}`,
                {
                    statuts: "prête à livrer",
                    notes: notes
                },
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            );

            setCommand(prev => ({ ...prev, statuts: "prête à livrer" }));
            alert("Commande marquée comme prête à livrer!");

        } catch (error) {
            console.error(error);
            alert("Erreur lors de la mise à jour de la commande");
        } finally {
            setUpdating(false);
        }
    };

    const getStatusColor = (status) => {
        switch (status) {
            case "en attente":
                return "bg-yellow-100 text-yellow-700 border-yellow-300";
            case "en préparation":
                return "bg-blue-100 text-blue-700 border-blue-300";
            case "prête à livrer":
                return "bg-green-100 text-green-700 border-green-300";
            case "livrée":
                return "bg-gray-100 text-gray-700 border-gray-300";
            case "annulée":
                return "bg-red-100 text-red-700 border-red-300";
            default:
                return "bg-gray-100 text-gray-700 border-gray-300";
        }
    };

    if (loading) {
        return (
            <div className="flex flex-col min-h-screen bg-gray-50">
                <Header />
                <main className="flex-1 container mx-auto px-4 py-10">
                    <div className="text-center py-12">
                        <p className="text-gray-500 text-lg">Chargement de la commande...</p>
                    </div>
                </main>
                <Footer />
            </div>
        );
    }

    if (!command) {
        return (
            <div className="flex flex-col min-h-screen bg-gray-50">
                <Header />
                <main className="flex-1 container mx-auto px-4 py-10">
                    <div className="text-center py-12">
                        <p className="text-gray-500 text-lg">Commande introuvable</p>
                    </div>
                </main>
                <Footer />
            </div>
        );
    }

    return (
        <div className="flex flex-col min-h-screen bg-gray-50">
            <Header />

            <main className="flex-1 container mx-auto px-4 py-10">

                <div className="mb-8 flex items-center justify-between">
                    <h1 className="text-3xl font-bold text-rose-600">
                        Préparation de Commande #{command.id}
                    </h1>
                    <button
                        onClick={() => navigate("/employe/orders")}
                        className="px-4 py-2 text-gray-600 border border-gray-300 rounded-full hover:bg-gray-100 transition"
                    >
                        ← Retour
                    </button>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

                    {/* Main Order Details */}
                    <div className="lg:col-span-2">

                        {/* Product Card */}
                        <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
                            <h2 className="text-xl font-bold text-gray-900 mb-6">Détails du Produit</h2>

                            <div className="flex gap-6">
                                <div className="shrink-0">
                                    <img
                                        src={command.produit?.images}
                                        alt={command.produit?.name}
                                        className="w-32 h-32 object-cover rounded-lg"
                                    />
                                </div>

                                <div className="flex-1">
                                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                                        {command.produit?.name}
                                    </h3>

                                    <div className="grid grid-cols-2 gap-4">
                                        <div>
                                            <p className="text-gray-500 text-sm">Quantité</p>
                                            <p className="text-2xl font-bold text-rose-600">{command.quantite}</p>
                                        </div>
                                        <div>
                                            <p className="text-gray-500 text-sm">Prix unitaire</p>
                                            <p className="text-2xl font-bold text-gray-900">{command.produit?.prix} DH</p>
                                        </div>
                                        <div>
                                            <p className="text-gray-500 text-sm">Prix total</p>
                                            <p className="text-2xl font-bold text-rose-600">{command.prixTotal} DH</p>
                                        </div>
                                        <div>
                                            <p className="text-gray-500 text-sm">Catégorie</p>
                                            <p className="text-lg font-semibold text-gray-900">{command.produit?.categorie?.nom}</p>
                                        </div>
                                    </div>

                                    <p className="text-gray-600 mt-4 text-sm">
                                        {command.produit?.description}
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Client Information */}
                        <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
                            <h2 className="text-xl font-bold text-gray-900 mb-6">Informations Client</h2>

                            <div className="grid grid-cols-2 gap-6">
                                <div>
                                    <p className="text-gray-500 text-sm uppercase tracking-wide">Nom</p>
                                    <p className="text-lg font-semibold text-gray-900">{command.client?.name}</p>
                                </div>
                                <div>
                                    <p className="text-gray-500 text-sm uppercase tracking-wide">Email</p>
                                    <p className="text-lg font-semibold text-gray-900">{command.client?.email}</p>
                                </div>
                                <div>
                                    <p className="text-gray-500 text-sm uppercase tracking-wide">Téléphone</p>
                                    <p className="text-lg font-semibold text-gray-900">{command.client?.telephone || "N/A"}</p>
                                </div>
                                <div>
                                    <p className="text-gray-500 text-sm uppercase tracking-wide">Date de Commande</p>
                                    <p className="text-lg font-semibold text-gray-900">
                                        {new Date(command.created_at).toLocaleDateString()}
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Notes Section */}
                        <div className="bg-white rounded-xl shadow-lg p-8">
                            <h2 className="text-xl font-bold text-gray-900 mb-4">Notes de Préparation</h2>
                            <textarea
                                value={notes}
                                onChange={(e) => setNotes(e.target.value)}
                                placeholder="Ajouter des notes sur la préparation de cette commande..."
                                className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-rose-500 resize-none"
                                rows="4"
                            />
                        </div>

                    </div>

                    {/* Status & Actions */}
                    <div>

                        {/* Status Card */}
                        <div className={`rounded-xl shadow-lg p-8 mb-8 border-2 ${getStatusColor(command.statuts)}`}>
                            <h3 className="text-sm font-semibold uppercase tracking-wide mb-2 opacity-75">Statut Actuel</h3>
                            <p className="text-3xl font-bold capitalize">{command.statuts}</p>
                        </div>

                        {/* Action Buttons */}
                        <div className="space-y-4">

                            {command.statuts === "en attente" && (
                                <button
                                    onClick={markAsPrepared}
                                    disabled={updating}
                                    className="w-full px-6 py-4 bg-blue-500 text-white font-bold rounded-xl hover:bg-blue-600 transition disabled:opacity-50 disabled:cursor-not-allowed"
                                >
                                    {updating ? "Mise à jour..." : "✓ Marquer comme Préparée"}
                                </button>
                            )}

                            {command.statuts === "préparée" && (
                                <button
                                    onClick={markAsReadyForDelivery}
                                    disabled={updating}
                                    className="w-full px-6 py-4 bg-green-500 text-white font-bold rounded-xl hover:bg-green-600 transition disabled:opacity-50 disabled:cursor-not-allowed"
                                >
                                    {updating ? "Mise à jour..." : "🚚 Prête à Livrer"}
                                </button>
                            )}

                            {command.statuts === "prête à livrer" && (
                                <div className="text-center py-4 bg-green-50 border-2 border-green-200 rounded-xl">
                                    <p className="text-green-700 font-semibold">✓ Commande prête à livrer</p>
                                </div>
                            )}

                            {command.statuts === "livrée" && (
                                <div className="text-center py-4 bg-gray-50 border-2 border-gray-200 rounded-xl">
                                    <p className="text-gray-700 font-semibold">✓ Commande livrée</p>
                                </div>
                            )}

                            {command.statuts === "annulée" && (
                                <div className="text-center py-4 bg-red-50 border-2 border-red-200 rounded-xl">
                                    <p className="text-red-700 font-semibold">✗ Commande annulée</p>
                                </div>
                            )}

                        </div>

                        {/* Timeline */}
                        <div className="mt-8 bg-white rounded-xl shadow-lg p-6">
                            <h3 className="text-lg font-bold text-gray-900 mb-4">Historique</h3>
                            <div className="space-y-6">

                                {/* Étape 1 : Création */}
                                <div className="flex gap-4">
                                    <div className="flex flex-col items-center">
                                        <div className="w-3 h-3 bg-rose-600 rounded-full"></div>
                                        <div className="w-1 h-full bg-gray-300 mt-1"></div>
                                    </div>

                                    <div>
                                        <p className="font-semibold text-gray-900">Commande créée</p>
                                        <p className="text-sm text-gray-500">
                                            {new Date(command.created_at).toLocaleString()}
                                        </p>
                                    </div>
                                </div>

                                {/* Étape 2 : En préparation */}    
                                {["en préparation", "prête à livrer", "livrée"].includes(command.statuts) && (
                                    <div className="flex gap-4">
                                        <div className="flex flex-col items-center">
                                            <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                                            <div className="w-1 h-full bg-gray-300 mt-1"></div>
                                        </div>

                                        <div>
                                            <p className="font-semibold text-gray-900">En préparation</p>
                                            <p className="text-sm text-gray-500">
                                                {new Date(command.updated_at).toLocaleString()}
                                            </p>
                                        </div>
                                    </div>
                                )}
                                
                                {command.statuts === "annulée" && (
                                    <div className="flex gap-4">
                                        <div className="flex flex-col items-center">
                                            <div className="w-3 h-3 bg-red-600 rounded-full"></div>
                                            <div className="w-1 h-full bg-gray-300 mt-1"></div>
                                        </div>

                                        <div>
                                            <p className="font-semibold text-gray-900">Annulée</p>
                                            
                                            <p className="text-sm text-gray-500">
                                                {new Date(command.updated_at).toLocaleString()}
                                            </p>
                                        </div>
                                    </div>
                                )}

                                {/* Étape 3 : Expédiée */}
                                {["prête à livrer", "livrée"].includes(command.statuts) && (
                                    <div className="flex gap-4">
                                        <div className="flex flex-col items-center">
                                            <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                                            <div className="w-1 h-full bg-gray-300 mt-1"></div>
                                        </div>

                                        <div>
                                            <p className="font-semibold text-gray-900">Prête à livrer</p>
                                            <p className="text-sm text-gray-500">
                                                {new Date(command.updated_at).toLocaleString()}
                                            </p>
                                        </div>
                                    </div>
                                )}

                                {/* Étape 4 : Livrée */}
                                {command.statuts === "livrée" && (
                                    <div className="flex gap-4">
                                        <div className="flex flex-col items-center">
                                            <div className="w-3 h-3 bg-green-600 rounded-full"></div>
                                        </div>

                                        <div>
                                            <p className="font-semibold text-gray-900">Livrée</p>
                                            <p className="text-sm text-gray-500">
                                                {new Date(command.updated_at).toLocaleString()}
                                            </p>
                                        </div>
                                    </div>
                                )}

                            </div>
                        </div>

                    </div>

                </div>

            </main>

            <Footer />
        </div>
    );
}
