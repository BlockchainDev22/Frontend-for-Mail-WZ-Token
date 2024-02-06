// App.js
import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Login from "./pages/Auth/Login";
import Home from "./pages/Home";
import Payments from "./pages/Payments";
import ApprovePayout from "./pages/ApprovePayout";
import Register from "./pages/Auth/Register";
import {NotificationContainer} from 'react-notifications';
import Loading from "./components/Loading";

function App() {
 
  return (
    <>
      <Loading/>
      <NotificationContainer/>
      <Routes>
        <Route path="/auth/login" element={<Login />}/>
        <Route path="/auth/register" element={<Register />}/>
        <Route path="/home" element={<Home />}/>
        <Route path="/payments" element={<Payments/>}/>
        <Route path="/approve-payout" element={<ApprovePayout/>}/>
        <Route path="*" element={<Navigate to="auth/login"/>}/>
      </Routes>
    </>
  )
}

export default App;
