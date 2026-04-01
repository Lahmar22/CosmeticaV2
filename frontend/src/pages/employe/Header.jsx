import { useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { CgProfile } from "react-icons/cg";

export default function Header() {
    const [openProfile, setOpenProfile] = useState(false);
    const [openMobile, setOpenMobile] = useState(false);
    const [cart, setCart] = useState([]);
    const menuRef = useRef();
    const navigate = useNavigate();

    useEffect(() => {
        const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
        setCart(storedCart);
    }, []);

    // Close profile dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (e) => {
            if (menuRef.current && !menuRef.current.contains(e.target)) {
                setOpenProfile(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    const handleLogout = () => {
        localStorage.removeItem("token");
        navigate("/login");
    };

    return (
        <header className="bg-white shadow-md">
            <div className="container mx-auto px-6 py-4 flex justify-between items-center">

                {/* Logo */}
                <h1 className="text-2xl font-bold text-rose-600">
                    Cosmetica
                </h1>

                

                {/* Right Icons */}
                <div className="flex space-x-4 relative" ref={menuRef}>

                    {/* Profile */}
                    <div className="hidden md:block">
                        <button onClick={() => setOpenProfile(!openProfile)}>
                            <CgProfile className="w-6 h-6 text-gray-600 hover:text-rose-500" />
                        </button>

                        {openProfile && (
                            <div className="absolute right-0 mt-3 w-48 bg-white rounded-xl shadow-lg border z-50">
                                <Link to="/client/profile" className="block px-4 py-2 hover:bg-gray-100">
                                    Profil
                                </Link>
                                
                                <button
                                    onClick={handleLogout}
                                    className="w-full text-left px-4 py-2 hover:bg-red-100 text-red-500"
                                >
                                    Déconnexion
                                </button>
                            </div>
                        )}
                    </div>

                    {/* Mobile Button */}
                    <button
                        onClick={() => setOpenMobile(!openMobile)}
                        className="md:hidden text-2xl"
                    >
                        ☰
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {openMobile && (
                <div className="md:hidden bg-white border-t px-6 py-4 space-y-4">

                    <Link to="/client/dashboard" onClick={() => setOpenMobile(false)} className="block">
                        Accueil
                    </Link>

                    <Link to="/client/products" onClick={() => setOpenMobile(false)} className="block">
                        Produits
                    </Link>

                    <Link to="/client/about" onClick={() => setOpenMobile(false)} className="block">
                        À propos
                    </Link>

                    <hr />

                    {/* Profile options in mobile */}
                    <Link to="/profile" onClick={() => setOpenMobile(false)} className="block">
                        Profil
                    </Link>

                    <Link to="/mes-commandes" onClick={() => setOpenMobile(false)} className="block">
                        Mes commandes
                    </Link>

                    <button
                        onClick={handleLogout}
                        className="block text-left text-red-500"
                    >
                        Déconnexion
                    </button>
                </div>
            )}
        </header>
    );
}