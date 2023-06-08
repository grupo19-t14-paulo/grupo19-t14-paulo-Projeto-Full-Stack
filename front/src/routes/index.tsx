import { Routes, Route } from "react-router-dom";
import { HomePage } from "../pages/Home";
import { LoginPage } from "../pages/Login";
import { RegisterPage } from "../pages/Register";
import { ProductPage } from "../pages/Product";

const RoutesMain = () => {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/product" element={<ProductPage />} />
        </Routes>
    );
};

export { RoutesMain };
