import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import ProfileDetails from "./ProfileDetails";
import ProfileSettings from "./ProfileSettings";

const Profile = () => {
  return React.createElement("div", null,
    React.createElement("h2", null, "Profile Page"),
    React.createElement(Link, { to: "details" }, "Profile Details"),
    React.createElement("br", null),
    React.createElement(Link, { to: "settings" }, "Profile Settings"),
    React.createElement(
      Routes,
      null,
      React.createElement(Route, { path: "details", element: React.createElement(ProfileDetails) }),
      React.createElement(Route, { path: "settings", element: React.createElement(ProfileSettings) })
    )
  );
};

export default Profile;
