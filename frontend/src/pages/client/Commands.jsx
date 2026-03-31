import Header from "../../components/Header.jsx";
import Footer from "../../components/Footer.jsx";
import { useEffect, useState } from "react";
import axios from "axios";

export default function MesCommandes() {
    const [commands, setCommands] = useState([]);
    const token = localStorage.getItem("token");

    useEffect(() => {
        axios.get("http://127.0.0.1:8000/api/commands", {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        .then(res => {
            setCommands(res.data.commands);
        })
        .catch(err => console.log(err.response?.data || err));
    }, []);

    return (
        <div className="flex flex-col min-h-screen bg-gray-50">
            <Header />

            <main className="flex-1 container mx-auto px-4 py-10">

                <h1 className="text-3xl font-bold text-rose-600 mb-6">
                    Mes Commandes
                </h1>

                {commands.length === 0 ? (
                    <p className="text-gray-500">Aucune commande trouvée.</p>
                ) : (
                    <div className="overflow-x-auto bg-white rounded-xl shadow">
                        <table className="min-w-full text-sm text-left">

                            {/* Header */}
                            <thead className="bg-rose-100 text-gray-700 uppercase text-xs">
                                <tr>
                                    <th className="px-6 py-3">ID</th>
                                    <th className="px-6 py-3">Produit</th>
                                    <th className="px-6 py-3">Image</th>
                                    <th className="px-6 py-3">Quantité</th>
                                    <th className="px-6 py-3">Prix</th>
                                    <th className="px-6 py-3">Total</th>
                                    <th className="px-6 py-3">Statut</th>
                                    <th className="px-6 py-3">Date</th>
                                </tr>
                            </thead>

                            {/* Body */}
                            <tbody>
                                {commands.map((cmd) => (
                                    <tr key={cmd.id} className="border-b hover:bg-gray-50">

                                        <td className="px-6 py-4 font-bold">
                                            #{cmd.id}
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
                                            <span className="px-3 py-1 bg-yellow-100 text-yellow-600 rounded-full text-xs">
                                                {cmd.statuts}
                                            </span>
                                        </td>

                                        <td className="px-6 py-4 text-gray-500">
                                            {new Date(cmd.created_at).toLocaleDateString()}
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