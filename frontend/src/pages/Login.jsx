import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Login() {

    const [form, setForm] = useState({
        email: "",
        password: "",
    });
    const [message, setMessage] = useState("");

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        });
    }; 
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post("http://127.0.0.1:8000/api/login", form);
            console.log(response.data.user);
            localStorage.setItem("token", response.data.token);
            if (response.data.user.role === "admin") {
                navigate("/admin/dashboard");
            }else if (response.data.user.role === "employe") {
                navigate("/employe/dashboard");
            }else if (response.data.user.role === "client") {
                navigate("/client/dashboard");
            }else {
                setMessage("Invalid role");
            }
            

           
        } catch (error) {
            if (error.response) {
                setMessage(error.response.data.message);
            }
        }
    };
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            
            {/* Card */}
            <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md">
                
                {/* Title */}
                <h1 className="text-2xl font-bold text-center mb-6">
                    Login
                </h1>

                {/* Form */}
                <form className="space-y-4" onSubmit={handleSubmit}>
                    
                    {/* Email */}
                    <div>
                        <label className="block text-sm font-medium mb-1">
                            Email
                        </label>
                        <input
                            type="email"
                            name="email"
                            placeholder="example@email.com"
                            onChange={handleChange}
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    {/* Password */}
                    <div>
                        <label className="block text-sm font-medium mb-1">
                            Password
                        </label>
                        <input
                            type="password"
                            name="password"
                            placeholder="********"
                            onChange={handleChange}
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    {/* Button */}
                    <button
                        type="submit"
                        className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition"
                    >
                        Sign In
                    </button>
                </form>

                {/* Footer */}
                <p className="text-sm text-center mt-6">
                    Don’t have an account?{" "}
                    <a href="#" className="text-blue-500 hover:underline">
                        Register
                    </a>
                </p>
            </div>
        </div>
    );
}