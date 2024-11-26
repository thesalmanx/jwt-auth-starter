import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import ProtectedRoute from "./components/ProtectedRoute";
import PublicRoute from "./components/PublicRoute.js";
import Profile from "./components/Profile";
import SignUp from "./components/SignUp";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<PublicRoute> <Login /> </PublicRoute>}/>
        <Route path="/signup" element={<PublicRoute> <SignUp /> </PublicRoute>}/>
        <Route path="/dashboard" element={<ProtectedRoute> <Dashboard /> </ProtectedRoute>}/>
        <Route path="/profile" element={<ProtectedRoute> <Profile /> </ProtectedRoute>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;