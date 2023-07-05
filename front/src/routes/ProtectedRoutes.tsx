import { Outlet } from "react-router-dom";
import Loading from "../components/Loading";
import { useContext } from "react";
import { ContextLogin } from "../contexts/LoginContext/LoginContex";

const ProtectedRoute = () => {
  const { loading, user } = useContext(ContextLogin);

  if (loading || !user) {
    return <Loading />;
  }

  return <Outlet />;
};

export default ProtectedRoute;
