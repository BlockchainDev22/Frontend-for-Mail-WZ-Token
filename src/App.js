// App.js
import React from "react";
import { Navigate, useRoutes } from "react-router-dom";
import Login from "./pages/Auth/Login";
import Home from "./pages/Home";
import Payments from "./pages/Payments";
import ApprovePayout from "./pages/ApprovePayout";
import Register from "./pages/Auth/Register";

function App() {
  const routes = useRoutes([
    {
      path: "auth/login",
      element: <Login />,
    },
    {
      path: "auth/register",
      element: <Register />,
    },
    {
      path: "/home",
      element: <Home />,
    },
    {
      path: "/payments",
      element: <Payments/>
    },
    {
      path: "/approve-payout",
      element: <ApprovePayout/>
    },
    {
      path: "*",
      element: <Navigate to="auth/login"/>
    }
  ]);
 
  return routes;
}

export default App;
