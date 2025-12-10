import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const FormikForm = () => {
  const validationSchema = Yup.object().shape({
    username: Yup.string().required("Username is required"),
    email: Yup.string().email("Invalid email format").required("Email is required"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
  });

  const initialValues = {
    username: "",
    email: "",
    password: "",
  };

  const handleSubmit = (values, { resetForm }) => {
    console.log("Form Submitted:", values);
    setTimeout(() => {
      alert("User registered successfully!");
      resetForm();
    }, 800);
  };

  return React.createElement(
    "div",
    { style: { maxWidth: "400px", margin: "20px auto" } },
    React.createElement("h2", null, "Registration Form (Formik)"),
    React.createElement(
      Formik,
      { initialValues, validationSchema, onSubmit: handleSubmit },
      React.createElement(
        Form,
        { className: "form" },
        React.createElement(
          "div",
          { className: "input-group" },
          React.createElement("label", null, "Username"),
          React.createElement(Field, { type: "text", name: "username" }),
          React.createElement(ErrorMessage, { name: "username", component: "div", className: "error" })
        ),
        React.createElement(
          "div",
          { className: "input-group" },
          React.createElement("label", null, "Email"),
          React.createElement(Field, { type: "email", name: "email" }),
          React.createElement(ErrorMessage, { name: "email", component: "div", className: "error" })
        ),
        React.createElement(
          "div",
          { className: "input-group" },
          React.createElement("label", null, "Password"),
          React.createElement(Field, { type: "password", name: "password" }),
          React.createElement(ErrorMessage, { name: "password", component: "div", className: "error" })
        ),
        React.createElement("button", { type: "submit" }, "Register")
      )
    )
  );
};

export default FormikForm;
