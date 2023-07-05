import { Navigate, Outlet } from "react-router-dom";
import { useContext } from "react";
import { ContextLogin } from "../contexts/LoginContext/LoginContex";

const ProtectedRoute = () => {
  const { loading, user } = useContext(ContextLogin);

  const token = localStorage.getItem("@token");
  if (!token) {
    return <Navigate to={"/login"} replace />;
  }

  if (loading || !user) {
    return null;
  }

  return <Outlet />;
};

export default ProtectedRoute;
