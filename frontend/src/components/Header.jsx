import { useState } from "react";
import { Link } from "react-router-dom";
import { IoNotificationsOutline } from "react-icons/io5";


export default function Header() {
    const [open, setOpen] = useState(false);

    return (
        <header className="bg-white shadow-md">
            <div className="container mx-auto px-6 py-4 flex justify-between items-center">

                {/* Logo */}
                <h1 className="text-2xl font-bold text-rose-600">
                    Cosmetica
                </h1>

                {/* Desktop Nav */}
                <nav className="hidden md:flex space-x-6 text-gray-700 font-medium">
                    <Link to="/client/dashboard" className="hover:text-rose-500 transition-colors">Accueil</Link>
                    <Link to="/client/products" className="hover:text-rose-500 transition-colors">Produits</Link>
                    <Link to="/client/about" className="hover:text-rose-500 transition-colors">À propos</Link>
                </nav>

                <div className="flex items-center space-x-4">
                    <button className="relative">
                        <IoNotificationsOutline className="w-6 h-6 text-gray-600 hover:text-rose-500 transition-colors" />
                        <span className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full"></span>
                    </button>
                </div>


                {/* Mobile Button */}
                <button
                    onClick={() => setOpen(!open)}
                    className="md:hidden text-gray-700"
                >
                    ☰
                </button>
            </div>

            {/* Mobile Menu */}
            {open && (
                <div className="md:hidden bg-white border-t px-6 py-4 space-y-4">

                    <Link to="/" onClick={() => setOpen(false)} className="block hover:text-rose-500">
                        Accueil
                    </Link>

                    <Link to="/client/products" onClick={() => setOpen(false)} className="block hover:text-rose-500">
                        Produits
                    </Link>

                    <Link to="/client/about" onClick={() => setOpen(false)} className="block hover:text-rose-500">
                        À propos
                    </Link>
                </div>
            )}
        </header>
    );
}