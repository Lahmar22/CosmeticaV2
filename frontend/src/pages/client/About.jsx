import Header from "../../components/Header.jsx";
import Footer from "../../components/Footer.jsx";

export default function About() {

    return (
        <div className="flex flex-col min-h-screen bg-gradient-to-br from-rose-50 via-white to-pink-50 font-sans text-gray-800">
            <Header />

            <main className="flex-1 container mx-auto px-4 sm:px-6 lg:px-8 py-12">

                {/* Hero Section */}
                <div className="max-w-4xl mx-auto text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-rose-600 to-pink-500 mb-6">
                        Notre Histoire
                    </h1>
                    <p className="text-xl text-gray-600 leading-relaxed">
                        Bienvenue chez <span className="font-semibold text-rose-500">La Cosmetica</span>, votre nouvelle destination beauté de confiance. Nous croyons que chaque personne mérite des produits d'exception pour sublimer sa véritable nature.
                    </p>
                </div>

                {/* Content Sections */}
                <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">

                    {/* Image Placeholder */}
                    <div className="relative group">
                        <div className="absolute inset-0 bg-gradient-to-r from-rose-300 to-pink-300 rounded-3xl blur-xl opacity-50 group-hover:opacity-75 transition duration-500"></div>
                        <div className="relative h-96 bg-white/60 backdrop-blur-xl rounded-3xl border border-white/80 shadow-2xl overflow-hidden flex items-center justify-center p-8">
                            <div className="absolute inset-0 bg-gradient-to-br from-rose-100 to-pink-50 opacity-80"></div>
                            <svg className="w-32 h-32 text-rose-300 relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                        </div>
                    </div>

                    {/* Text block */}
                    <div className="space-y-6">
                        <h2 className="text-3xl font-bold text-gray-900">Une vision moderne de la beauté</h2>
                        <p className="text-lg text-gray-600">
                            Notre startup a vu le jour avec une mission simple : rendre les soins de la peau et les cosmétiques de haute qualité accessibles à tous, avec une transparence totale sur nos ingrédients.
                        </p>
                        <p className="text-lg text-gray-600">
                            De la conception de notre API pointue à cette application intuitive, notre objectif est de vous offrir une expérience fluide, où que vous soyez.
                        </p>
                        <div className="pt-4">
                            <ul className="space-y-3">
                                <li className="flex items-center text-rose-700 font-medium">
                                    <svg className="w-6 h-6 mr-3 text-rose-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                                    Ingrédients certifiés
                                </li>
                                <li className="flex items-center text-rose-700 font-medium">
                                    <svg className="w-6 h-6 mr-3 text-rose-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                                    Non testé sur les animaux
                                </li>
                                <li className="flex items-center text-rose-700 font-medium">
                                    <svg className="w-6 h-6 mr-3 text-rose-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                                    Emballages éco-responsables
                                </li>
                            </ul>
                        </div>
                    </div>

                </div>

                {/* Contact CTA */}
                <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-10 text-center shadow-lg shadow-rose-100/40 border border-white/60 max-w-3xl mx-auto">
                    <h2 className="text-2xl font-bold text-gray-800 mb-4">Besoin d'aide ou de conseils ?</h2>
                    <p className="text-gray-600 mb-8">Notre équipe d'experts en cosmétique est là pour vous accompagner dans votre routine beauté.</p>
                    <button className="bg-rose-500 text-white font-bold py-3 px-8 rounded-full shadow-lg shadow-rose-200 hover:bg-rose-600 hover:shadow-rose-300 transition-all hover:-translate-y-1">
                        Contactez-nous
                    </button>
                </div>

            </main>

            <Footer />
        </div>
    );
}
