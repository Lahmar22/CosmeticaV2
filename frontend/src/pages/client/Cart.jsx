import { useState, useEffect } from "react";
import Header from "../../components/Header.jsx";
import Footer from "../../components/Footer.jsx";
import { MdDelete } from "react-icons/md";
import axios from "axios";

export default function Cart() {
    const [cart, setCart] = useState([]);


    useEffect(() => {
        const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
        setCart(storedCart);
    }, []);

    const removeItem = (id) => {
        const updatedCart = cart.filter(item => item.id !== id);

        setCart(updatedCart);
        localStorage.setItem("cart", JSON.stringify(updatedCart));
    };

    const total = cart.reduce(
        (sum, item) => sum + item.prix * item.quantity,
        0
    );

    const handleCheckout = async () => {
        try {
            const token = localStorage.getItem("token"); 

            const response = await axios.post(
                "http://127.0.0.1:8000/api/commandes", 
                {
                    produits: cart
                },
                {
                    headers: {
                        Authorization: `Bearer ${token}`, 
                    },
                }
            );

            console.log(response.data);

            // clear cart after success
            localStorage.removeItem("cart");
            setCart([]);

            alert("Commande envoyée avec succès !");
        } catch (error) {
            console.error(error);
            alert("Erreur lors de la commande");
        }
    };

    return (
        <div className="flex flex-col min-h-screen bg-linear-to-br from-rose-50 via-white to-pink-50 font-sans text-gray-800">
            <Header />

            <main className="flex-1 container mx-auto px-4 sm:px-6 lg:px-8 py-10">
                <h1 className="text-3xl font-bold mb-8">Votre Panier</h1>

                {cart.length === 0 ? (
                    <p className="text-gray-600 text-lg">
                        Votre panier est vide.
                    </p>
                ) : (
                    <div className="grid gap-6">

                        {/* Cart Items */}
                        {cart.map((item) => (
                            <div
                                key={item.id}
                                className="flex items-center justify-between bg-white shadow-md rounded-2xl p-4"
                            >
                                <div className="flex items-center gap-4">
                                    <img
                                        src={item.images}
                                        alt={item.name}
                                        className="w-20 h-20 object-cover rounded-xl"
                                    />
                                    <div>
                                        <h2 className="font-semibold text-lg">
                                            {item.name}
                                        </h2>
                                        <p className="text-gray-500">
                                            {item.prix} DH
                                        </p>
                                        <p className="text-sm text-gray-400">
                                            Quantité: {item.quantity}
                                        </p>
                                    </div>
                                </div>

                                <button
                                    onClick={() => removeItem(item.id)}
                                    className=" text-red-500 hover:text-red-700 px-4 py-2 border rounded-lg transition"
                                >
                                    <MdDelete className="w-5 h-5" />
                                </button>
                            </div>
                        ))}

                        {/* Total */}
                        <div className="bg-white shadow-md rounded-2xl p-6 flex justify-between items-center">
                            <h2 className="text-xl font-bold">Total</h2>
                            <p className="text-2xl font-bold text-pink-600">
                                {total} DH
                            </p>
                        </div>

                        <button onClick={handleCheckout} className="w-full bg-pink-600 hover:bg-pink-700 text-white py-3 rounded-xl text-lg font-semibold transition">
                            Passer la commande
                        </button>
                    </div>
                )}
            </main>

            <Footer />
        </div>
    );
}