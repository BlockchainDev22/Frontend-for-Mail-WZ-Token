// App.js
import React from "react";
import { useRoutes } from "react-router-dom";
import Login from "./pages/Auth/Login";
import Home from "./pages/Home";
import Payments from "./pages/Payments";

function App() {
  const routes = useRoutes([
    {
      path: "auth/login",
      element: <Login />,
    },
    {
      path: "/home",
      element: <Home />,
    },
    {
      path: "/payments",
      element: <Payments/>
    }
  ]);
 
  return routes;
}

export default App;
