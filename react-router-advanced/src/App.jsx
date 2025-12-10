import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

import Home from "./components/Home";
import Profile from "./components/Profile";
import BlogPost from "./components/BlogPost";
import Login from "./components/Login";
import ProtectedRoute from "./components/ProtectedRoute";

const App = () => {
  return React.createElement(
    Router,
    null,
    React.createElement(
      Routes,
      null,
      React.createElement(Route, { path: "/", element: React.createElement(Home) }),
      React.createElement(Route, { path: "/login", element: React.createElement(Login) }),
      // Protected profile route with nested routes
      React.createElement(
        Route,
        {
          path: "/profile/*",
          element: React.createElement(ProtectedRoute, { children: React.createElement(Profile) }),
        }
      ),
      // Dynamic blog route
      React.createElement(Route, { path: "/blog/:id", element: React.createElement(BlogPost) }),
      // Redirect unknown routes to home
      React.createElement(Route, { path: "*", element: React.createElement(Navigate, { to: "/" }) })
    )
  );
};

export default App;
