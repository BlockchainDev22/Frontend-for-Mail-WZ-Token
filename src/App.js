// App.js
import React from "react";
import { useRoutes } from "react-router-dom";
import Login from "./pages/Auth/Login";
import Home from "./pages/Home";

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
  ]);
 
  return routes;
}

export default App;
