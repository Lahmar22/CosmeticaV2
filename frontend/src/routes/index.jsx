import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home.jsx";
import Login from "../pages/Login.jsx";
import Register from "../pages/Register.jsx";
import DashboardAdmin from "../pages/admin/Dashboard.jsx";
import DashboardEmploye from "../pages/employe/Dashboard.jsx";
import DashboardClient from "../pages/client/Dashboard.jsx";
import ClientProducts from "../pages/client/Products.jsx";
import ClientAbout from "../pages/client/About.jsx";
import Cart from "../pages/client/Cart.jsx";
import Commands from "../pages/client/Commands.jsx";

export default function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register/>} />
                <Route path="/admin/dashboard" element={<DashboardAdmin />} />
                <Route path="/employe/dashboard" element={<DashboardEmploye />} />
                <Route path="/client/dashboard" element={<DashboardClient />} />
                <Route path="/client/products" element={<ClientProducts />} />
                <Route path="/client/about" element={<ClientAbout />} />
                <Route path="/client/cart" element={<Cart />} />
                <Route path="/client/commands" element={<Commands />} />
            </Routes>
        </BrowserRouter>
    );
}