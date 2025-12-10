import React from "react";
import { Navigate } from "react-router-dom";

// Simulated authentication
const isAuthenticated = () => {
  return localStorage.getItem("auth") === "true";
};

const ProtectedRoute = ({ children }) => {
  if (!isAuthenticated()) {
    return React.createElement(Navigate, { to: "/login" });
  }
  return children;
};

export default ProtectedRoute;
