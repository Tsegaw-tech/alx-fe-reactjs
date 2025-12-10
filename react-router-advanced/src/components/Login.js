import React from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  
  const handleLogin = () => {
    localStorage.setItem("auth", "true");
    navigate("/profile");
  };

  return React.createElement(
    "div",
    null,
    React.createElement("h2", null, "Login Page"),
    React.createElement("button", { onClick: handleLogin }, "Login")
  );
};

export default Login;
