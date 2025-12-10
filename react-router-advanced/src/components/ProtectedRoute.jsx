import React from "react";
import { Navigate } from "react-router-dom";

// Simple authentication simulation
const isAuthenticated = () => {
  // For demo purposes, return true or false to simulate login
  // You can replace this with real auth logic later
  return localStorage.getItem("isLoggedIn") === "true";
};

const ProtectedRoute = ({ children }) => {
  if (!isAuthenticated()) {
    // Redirect to login if not authenticated
    return <Navigate to="/login" replace />;
  }
  // Render the children if authenticated
  return children;
};

export default ProtectedRoute;
