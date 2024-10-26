import React from "react";
import "./App.scss";
import { RouterProvider } from "react-router-dom";
import { routes } from "./routes/routes";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <React.StrictMode>
      <RouterProvider router={routes} />
      <ToastContainer />
    </React.StrictMode>
  );
}

export default App;
