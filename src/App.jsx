import React from "react";
import "./App.scss";
import { RouterProvider } from "react-router-dom";
import { routes } from "./routes/routes";
function App() {
  return (
    <React.StrictMode>
      <RouterProvider router={routes} />
    </React.StrictMode>
  );
}

export default App;
