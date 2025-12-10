import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return React.createElement(
    "div",
    null,
    React.createElement("h2", null, "Home Page"),
    React.createElement(Link, { to: "/profile" }, "Go to Profile"),
    React.createElement("br", null),
    React.createElement(Link, { to: "/posts/1" }, "View Post 1")
  );
};

export default Home;
