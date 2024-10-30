import { Outlet, Navigate } from "react-router-dom";
import { useContext } from "react";
import { AllDataContext } from "../context";

const ProtectedRoutes = () => {
  const { currentUser } = useContext(AllDataContext);

  if (currentUser === undefined) {
    // Optionally add a loading spinner here
    return null; // Or a loading component
  }

  return currentUser ? <Outlet /> : <Navigate to="/login" replace />;
};

export default ProtectedRoutes;
