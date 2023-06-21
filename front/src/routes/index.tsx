import { Routes, Route } from "react-router-dom";
import { HomePage } from "../pages/Home";
import { LoginPage } from "../pages/Login";
import { RegisterPage } from "../pages/Register";
import { ProductPage } from "../pages/Product";
import AdvertiserPage from "../pages/Advertiser";
import AdsSpecificPage from "../pages/AdsSpecific";

const RoutesMain = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/adsSpecific" element={<AdsSpecificPage />} />
      <Route path="/product" element={<ProductPage />} />
      <Route path="/advertiser" element={<AdvertiserPage />} />
    </Routes>
  );
};

export { RoutesMain };
