import Footer from "../../components/Footer.jsx";
import Header from "./Header.jsx";
import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Dashboard() {
    const [stats, setStats] = useState({
        pending: 0,
        prepared: 0,
        readyForDelivery: 0,
        total: 0
    });
    const [loading, setLoading] = useState(true);
    const token = localStorage.getItem("token");
    const navigate = useNavigate();

    useEffect(() => {
        fetchStats();
    }, []);

    const fetchStats = async () => {
        try {
            setLoading(true);
            const response = await axios.get("http://127.0.0.1:8000/api/allCommands", {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });

            const commands = response.data.commands || [];
            setStats({
                pending: commands.filter(cmd => cmd.statuts === "en attente").length,
                prepared: commands.filter(cmd => cmd.statuts === "préparée").length,
                readyForDelivery: commands.filter(cmd => cmd.statuts === "prête à livrer").length,
                total: commands.length
            });
        } catch (err) {
            console.error(err.response?.data || err);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="flex flex-col min-h-screen bg-linear-to-br from-rose-50 via-white to-pink-50 font-sans text-gray-800">

            <Header />

            {/* Main Layout */}
            <div className="flex flex-1 container mx-auto px-4 sm:px-6 lg:px-8 py-8">

                {/* Content */}
                <main className="flex-1">

                    {/* Title Area */}
                    <div className="mb-10 flex items-center justify-between">
                        <div>
                            <h1 className="text-4xl font-extrabold tracking-tight text-transparent bg-clip-text bg-linear-to-r from-rose-600 to-pink-500 mb-2">
                                Bonjour, Employé 👋
                            </h1>
                            <p className="text-gray-500 text-lg">
                                Bienvenue dans votre espace de gestion des commandes.
                            </p>
                        </div>
                        <div className="hidden sm:block">
                            <span className="inline-flex items-center justify-center h-12 w-12 rounded-full bg-rose-100 text-rose-600 ring-4 ring-white shadow-sm">
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"></path>
                                </svg>
                            </span>
                        </div>
                    </div>

                    {/* Stats Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-10">

                        {/* Card 1 - Total Orders */}
                        <div className="group relative bg-white/70 backdrop-blur-xl p-8 rounded-3xl shadow-lg shadow-rose-100/40 border border-white/60 hover:-translate-y-1 hover:shadow-xl hover:shadow-rose-200/50 transition-all duration-300 cursor-pointer"
                            onClick={() => navigate("/employe/orders")}
                        >
                            <div className="absolute top-0 right-0 p-6 opacity-20 group-hover:opacity-40 transition-opacity">
                                <svg className="w-12 h-12 text-rose-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                                </svg>
                            </div>
                            <h2 className="text-gray-500 font-medium tracking-wide text-sm uppercase mb-2">
                                Total Commandes
                            </h2>
                            <p className="text-4xl font-bold text-gray-900">
                                {stats.total}
                            </p>
                            <div className="mt-4 text-sm text-rose-600 font-medium flex items-center">
                                <span>Voir les commandes</span>
                                <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
                            </div>
                        </div>

                        {/* Card 2 - Pending */}
                        <div className="group relative bg-white/70 backdrop-blur-xl p-8 rounded-3xl shadow-lg shadow-yellow-100/40 border border-white/60 hover:-translate-y-1 hover:shadow-xl hover:shadow-yellow-200/50 transition-all duration-300 cursor-pointer"
                            onClick={() => navigate("/employe/orders")}
                        >
                            <div className="absolute top-0 right-0 p-6 opacity-20 group-hover:opacity-40 transition-opacity">
                                <svg className="w-12 h-12 text-yellow-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                            <h2 className="text-gray-500 font-medium tracking-wide text-sm uppercase mb-2">
                                En Attente
                            </h2>
                            <p className="text-4xl font-bold text-yellow-600">
                                {stats.pending}
                            </p>
                            <div className="mt-4 text-sm text-yellow-600 font-medium flex items-center">
                                <span>À préparer</span>
                                <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
                            </div>
                        </div>

                        {/* Card 3 - Prepared */}
                        <div className="group relative bg-white/70 backdrop-blur-xl p-8 rounded-3xl shadow-lg shadow-blue-100/40 border border-white/60 hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-200/50 transition-all duration-300 cursor-pointer"
                            onClick={() => navigate("/employe/orders")}
                        >
                            <div className="absolute top-0 right-0 p-6 opacity-20 group-hover:opacity-40 transition-opacity">
                                <svg className="w-12 h-12 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                            <h2 className="text-gray-500 font-medium tracking-wide text-sm uppercase mb-2">
                                Préparées
                            </h2>
                            <p className="text-4xl font-bold text-blue-600">
                                {stats.prepared}
                            </p>
                            <div className="mt-4 text-sm text-blue-600 font-medium flex items-center">
                                <span>En attente de livraison</span>
                                <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
                            </div>
                        </div>

                        {/* Card 4 - Ready for Delivery */}
                        <div className="group relative bg-white/70 backdrop-blur-xl p-8 rounded-3xl shadow-lg shadow-green-100/40 border border-white/60 hover:-translate-y-1 hover:shadow-xl hover:shadow-green-200/50 transition-all duration-300 cursor-pointer"
                            onClick={() => navigate("/employe/orders")}
                        >
                            <div className="absolute top-0 right-0 p-6 opacity-20 group-hover:opacity-40 transition-opacity">
                                <svg className="w-12 h-12 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
                                </svg>
                            </div>
                            <h2 className="text-gray-500 font-medium tracking-wide text-sm uppercase mb-2">
                                Prêtes à Livrer
                            </h2>
                            <p className="text-4xl font-bold text-green-600">
                                {stats.readyForDelivery}
                            </p>
                            <div className="mt-4 text-sm text-green-600 font-medium flex items-center">
                                <span>En attente de livraison</span>
                                <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
                            </div>
                        </div>

                    </div>

                    {/* Quick Action */}
                    <div className="bg-white/80 backdrop-blur-xl p-8 rounded-3xl shadow-lg shadow-rose-100/30 border border-white/60">
                        <div className="flex items-center justify-between">
                            <div>
                                <h2 className="text-2xl font-bold text-gray-900 mb-2">Besoin de préparer des commandes?</h2>
                                <p className="text-gray-600">Accédez à la liste complète des commandes et mettez-les à jour.</p>
                            </div>
                            <button
                                onClick={() => navigate("/employe/orders")}
                                className="px-8 py-3 bg-rose-600 text-white font-bold rounded-full hover:bg-rose-700 transition"
                            >
                                Gérer les Commandes →
                            </button>
                        </div>
                    </div>

                </main>

            </div>

            <Footer />
        </div>
    );
}