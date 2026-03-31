import Header from "../../components/Header.jsx";
import Footer from "../../components/Footer.jsx";

export default function Dashboard() {
    return (
        <div className="flex flex-col min-h-screen bg-linear-to-br from-rose-50 via-white to-pink-50 font-sans text-gray-800">

            {/* Header */}
            <Header />

            {/* Main Layout */}
            <div className="flex flex-1 container mx-auto px-4 sm:px-6 lg:px-8 py-8">

                {/* Content */}
                <main className="flex-1">

                    {/* Title Area */}
                    <div className="mb-10 flex items-center justify-between">
                        <div>
                            <h1 className="text-4xl font-extrabold tracking-tight text-transparent bg-clip-text bg-linear-to-r from-rose-600 to-pink-500 mb-2">
                                Bonjour, Client ✨
                            </h1>
                            <p className="text-gray-500 text-lg">
                                Bienvenue dans votre univers beauté La Cosmetica.
                            </p>
                        </div>
                        <div className="hidden sm:block">
                            <span className="inline-flex items-center justify-center h-12 w-12 rounded-full bg-rose-100 text-rose-600 ring-4 ring-white shadow-sm">
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                                </svg>
                            </span>
                        </div>
                    </div>

                    {/* Stats Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">

                        {/* Card 1 */}
                        <div className="group relative bg-white/70 backdrop-blur-xl p-8 rounded-3xl shadow-lg shadow-rose-100/40 border border-white/60 hover:-translate-y-1 hover:shadow-xl hover:shadow-rose-200/50 transition-all duration-300">
                            <div className="absolute top-0 right-0 p-6 opacity-20 group-hover:opacity-40 transition-opacity">
                                <svg className="w-12 h-12 text-rose-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                                </svg>
                            </div>
                            <h2 className="text-gray-500 font-medium tracking-wide text-sm uppercase mb-2">
                                Mes Commandes
                            </h2>
                            <p className="text-4xl font-bold text-gray-900">
                                12
                            </p>
                            <div className="mt-4 text-sm text-rose-600 font-medium flex items-center">
                                <span>Voir l'historique</span>
                                <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
                            </div>
                        </div>

                        {/* Card 2 */}
                        <div className="group relative bg-white/70 backdrop-blur-xl p-8 rounded-3xl shadow-lg shadow-rose-100/40 border border-white/60 hover:-translate-y-1 hover:shadow-xl hover:shadow-rose-200/50 transition-all duration-300">
                            <div className="absolute top-0 right-0 p-6 opacity-20 group-hover:opacity-40 transition-opacity">
                                <svg className="w-12 h-12 text-pink-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                                </svg>
                            </div>
                            <h2 className="text-gray-500 font-medium tracking-wide text-sm uppercase mb-2">
                                Produits favoris
                            </h2>
                            <p className="text-4xl font-bold text-gray-900">
                                5
                            </p>
                            <div className="mt-4 text-sm text-pink-600 font-medium flex items-center">
                                <span>Découvrir plus</span>
                                <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
                            </div>
                        </div>

                        {/* Card 3 */}
                        <div className="group relative bg-white/70 backdrop-blur-xl p-8 rounded-3xl shadow-lg shadow-rose-100/40 border border-white/60 hover:-translate-y-1 hover:shadow-xl hover:shadow-rose-200/50 transition-all duration-300">
                            <div className="absolute top-0 right-0 p-6 opacity-20 group-hover:opacity-40 transition-opacity">
                                <svg className="w-12 h-12 text-purple-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                                </svg>
                            </div>
                            <h2 className="text-gray-500 font-medium tracking-wide text-sm uppercase mb-2">
                                Notifications
                            </h2>
                            <p className="text-4xl font-bold text-gray-900">
                                3
                            </p>
                            <div className="mt-4 text-sm text-purple-600 font-medium flex items-center">
                                <span>Voir les alertes</span>
                                <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path></svg>
                            </div>
                        </div>

                    </div>

                    {/* Recent Orders */}
                    <div className="bg-white/80 backdrop-blur-xl p-8 rounded-3xl shadow-lg shadow-rose-100/30 border border-white/60">
                        <div className="flex items-center justify-between mb-6">
                            <h2 className="text-2xl font-bold text-gray-800">
                                Dernières commandes
                            </h2>
                            <button className="text-sm font-medium text-rose-500 hover:text-rose-600 bg-rose-50 px-4 py-2 rounded-full transition-colors">
                                Tout voir
                            </button>
                        </div>

                        <div className="overflow-x-auto">
                            <table className="w-full text-left border-collapse">
                                <thead>
                                    <tr className="text-gray-400 text-sm uppercase tracking-wider border-b border-rose-100">
                                        <th className="pb-4 font-medium">#</th>
                                        <th className="pb-4 font-medium">Produit</th>
                                        <th className="pb-4 font-medium">Date</th>
                                        <th className="pb-4 font-medium">Status</th>
                                        <th className="pb-4 font-medium"></th>
                                    </tr>
                                </thead>
                                <tbody className="text-gray-700">
                                    <tr className="border-b border-rose-50 hover:bg-rose-50/50 transition-colors">
                                        <td className="py-5 font-semibold text-gray-900">1</td>
                                        <td className="py-5">
                                            <div className="flex items-center">
                                                <div className="h-10 w-10 shrink-0 bg-pink-100 rounded-lg flex items-center justify-center mr-4 text-xl">
                                                    🧴
                                                </div>
                                                <span className="font-medium text-gray-800">Crème Hydratante Éclat</span>
                                            </div>
                                        </td>
                                        <td className="py-5 text-gray-500">25/03/2026</td>
                                        <td className="py-5">
                                            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-green-100 text-green-700">
                                                <span className="w-2 h-2 rounded-full bg-green-500 mr-2"></span>
                                                Livré
                                            </span>
                                        </td>
                                        <td className="py-5 text-right">
                                            <button className="text-gray-400 hover:text-rose-500 transition-colors">
                                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"></path></svg>
                                            </button>
                                        </td>
                                    </tr>

                                    <tr className="hover:bg-rose-50/50 transition-colors">
                                        <td className="py-5 font-semibold text-gray-900">2</td>
                                        <td className="py-5">
                                            <div className="flex items-center">
                                                <div className="h-10 w-10 shrink-0 bg-purple-100 rounded-lg flex items-center justify-center mr-4 text-xl">
                                                    ✨
                                                </div>
                                                <span className="font-medium text-gray-800">Sérum Visage Anti-Âge</span>
                                            </div>
                                        </td>
                                        <td className="py-5 text-gray-500">20/03/2026</td>
                                        <td className="py-5">
                                            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-yellow-100 text-yellow-700">
                                                <span className="w-2 h-2 rounded-full bg-yellow-500 mr-2"></span>
                                                En cours
                                            </span>
                                        </td>
                                        <td className="py-5 text-right">
                                            <button className="text-gray-400 hover:text-rose-500 transition-colors">
                                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"></path></svg>
                                            </button>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>

                </main>
            </div>

            {/* Footer */}
            <Footer />
        </div>
    );
}