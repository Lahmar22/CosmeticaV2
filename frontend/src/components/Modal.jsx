import { useEffect } from "react";

export default function Modal({ isOpen, onClose, children }) {

    // fermer avec ESC
    useEffect(() => {
        const handleEsc = (e) => {
            if (e.key === "Escape") onClose();
        };
        window.addEventListener("keydown", handleEsc);
        return () => window.removeEventListener("keydown", handleEsc);
    }, [onClose]);

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
            
            {/* overlay */}
            <div 
                className="absolute inset-0 bg-opacity-50"
                onClick={onClose}
            ></div>

            {/* modal content */}
            <div className="relative bg-white rounded-2xl shadow-xl p-6 w-full max-w-md z-10 animate-fadeIn">
                
                <button
                    onClick={onClose}
                    className="absolute top-3 right-3 text-gray-500 hover:text-gray-800"
                >
                    ✕
                </button>

                {children}
            </div>
        </div>
    );
}