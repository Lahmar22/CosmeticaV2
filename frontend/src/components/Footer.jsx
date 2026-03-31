import { Link } from "react-router-dom";

export default function Footer() {
    return (
        <footer className="bg-gray-900 text-gray-300 mt-10">
            <div className="container mx-auto px-6 py-10">

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

                    {/* Brand */}
                    <div>
                        <h2 className="text-xl font-bold text-white mb-3">
                            Cosmetica
                        </h2>
                        <p className="text-sm">
                            Votre pharmacie en ligne pour produits cosmétiques,
                            soins et bien-être.
                        </p>
                    </div>

                    {/* Links */}
                    <div>
                        <h3 className="text-white font-semibold mb-3">
                            Navigation
                        </h3>
                        <ul className="space-y-2 text-sm">
                            <li>
                                <Link to="/" className="hover:text-white">
                                    Accueil
                                </Link>
                            </li>
                            <li>
                                <Link to="/products" className="hover:text-white">
                                    Produits
                                </Link>
                            </li>
                            <li>
                                <Link to="/about" className="hover:text-white">
                                    À propos
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h3 className="text-white font-semibold mb-3">
                            Contact
                        </h3>
                        <p className="text-sm">📍 Casablanca, Maroc</p>
                        <p className="text-sm">📧 contact@cosmetica.com</p>
                        <p className="text-sm">📞 +212 6 00 00 00 00</p>
                    </div>

                </div>

                {/* Bottom */}
                <div className="border-t border-gray-700 mt-8 pt-4 text-center text-sm">
                    © {new Date().getFullYear()} Cosmetica. All rights reserved.
                </div>

            </div>
        </footer>
    );
}