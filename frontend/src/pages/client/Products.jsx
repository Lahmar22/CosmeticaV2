import Header from "../../components/Header.jsx";
import Footer from "../../components/Footer.jsx";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Products() {
    const [products, setProducts] = useState([]);
    const token = localStorage.getItem("token");
    useEffect(() => {
        axios.get("http://127.0.0.1:8000/api/produits", {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
            .then(res => {
                setProducts(res.data.produits)
            })
            .catch(err => console.log(err));
    }, []);

    const [searchTerm, setSearchTerm] = useState("");

    const filteredProducts = products.filter(product =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.categorie.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="flex flex-col min-h-screen bg-gradient-to-br from-rose-50 via-white to-pink-50 font-sans text-gray-800">
            <Header />

            <main className="flex-1 container mx-auto px-4 sm:px-6 lg:px-8 py-10">
                {/* Header Section */}
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-12 gap-6">
                    <div>
                        <h1 className="text-4xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-rose-600 to-pink-500 mb-3">
                            Nos Produits
                        </h1>
                        <p className="text-gray-500 text-lg max-w-2xl">
                            Découvrez notre collection exclusive de soins beauté. Des formules uniques pour sublimer votre peau au quotidien.
                        </p>
                    </div>

                    {/* Search Bar */}
                    <div className="relative w-full md:w-72 mt-4 md:mt-0">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                        </div>
                        <input
                            type="text"
                            placeholder="Rechercher..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="w-full pl-10 pr-4 py-3 border border-rose-100 rounded-full bg-white/50 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-rose-300 focus:border-transparent transition-all shadow-sm"
                        />
                    </div>
                </div>

                {/* Products Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                    {filteredProducts.map((product) => (
                        <div key={product.id} className="group flex flex-col bg-white/70 backdrop-blur-md rounded-3xl border border-white shadow-lg shadow-rose-100/50 overflow-hidden hover:-translate-y-2 hover:shadow-2xl hover:shadow-rose-200/50 transition-all duration-300">

                            {/* Product Image Placeholder */}
                            <div className={`h-56 relative bg-gradient-to-b ${product.color} flex items-center justify-center p-6`}>
                                {product.categorie.name && (
                                    <span className="absolute top-4 left-4 inline-flex items-center px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-white/90 text-rose-600 shadow-sm backdrop-blur-sm">
                                        {product.categorie.name}
                                    </span>
                                )}
                                <div className="absolute top-4 right-4">
                                    <button className="p-2 rounded-full bg-white/50 hover:bg-white text-gray-400 hover:text-rose-500 transition-colors shadow-sm">
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>
                                    </button>
                                </div>
                                <div className="w-24 h-32 bg-white/40 rounded-xl border border-white/60 shadow-inner rotate-3 group-hover:rotate-0 transition-transform duration-500"></div>
                            </div>

                            {/* Product Info */}
                            <div className="p-6 flex flex-col flex-1">
                                <span className="text-xs font-medium uppercase tracking-wider text-rose-500 mb-1">
                                    {product.categorie.name}
                                </span>
                                <h3 className="text-lg font-bold text-gray-900 mb-2 leading-tight">
                                    {product.name}
                                </h3>

                                <div className="mt-auto pt-4 flex items-center justify-between">
                                    <span className="text-2xl font-extrabold text-gray-900">
                                        {product.prix} €
                                    </span>
                                    <button className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-rose-500 text-white hover:bg-rose-600 hover:shadow-lg hover:shadow-rose-300 transition-all active:scale-95">
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path></svg>
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {filteredProducts.length === 0 && (
                    <div className="text-center py-20 bg-white/50 backdrop-blur-sm rounded-3xl border border-white">
                        <p className="text-gray-500 text-lg">Aucun produit ne correspond à votre recherche.</p>
                    </div>
                )}
            </main>

            <Footer />
        </div>
    );
}
