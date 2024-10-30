import { useContext } from "react";
import { Outlet, Navigate } from "react-router-dom";
import { AllDataContext } from "../context";

const PublicRoutes = () => {
  const { currentUser } = useContext(AllDataContext);
  return !currentUser ? <Outlet /> : <Navigate to="/" replace />;
};

export default PublicRoutes;
