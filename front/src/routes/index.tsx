import { Routes, Route } from "react-router-dom";
import { HomePage } from "../pages/Home";
import { LoginPage } from "../pages/Login";
import { RegisterPage } from "../pages/Register";
import AdvertiserPage from "../pages/Advertiser";
import { SendEmailResetPassword } from "../pages/ResetPassword";
import { ResetPassword } from "../pages/ResetPassword/[token]";
import AdsSpecificPage from "../pages/AdsSpecific";
import { DinamicProductPage } from "../pages/Product";

const RoutesMain = () => {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/resetPassword" element={<SendEmailResetPassword />} />
            <Route path="/resetPassword/:token" element={<ResetPassword />} />
            <Route path="/adsSpecific" element={<AdsSpecificPage />} />
            <Route path="/product/:advertId" element={<DinamicProductPage />} />
            <Route path="/advertiser" element={<AdvertiserPage />} />
        </Routes>
    );
};

export { RoutesMain };
