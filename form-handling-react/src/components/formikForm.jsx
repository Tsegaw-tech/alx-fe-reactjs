import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const validationSchema = Yup.object({
  username: Yup.string().required("Username is required."),
  email: Yup.string().email("Invalid email").required("Email is required."),
  password: Yup.string().required("Password is required."),
});

const FormikForm = () => {
  return (
    <div>
      <h2>Formik Registration Form</h2>

      <Formik
        initialValues={{ username: "", email: "", password: "" }}
        validationSchema={validationSchema}
        onSubmit={(values, { resetForm }) => {
          console.log("Formik Submitted:", values);

          fetch("https://mock-api.example.com/register", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(values),
          })
            .then(() => alert("Formik user registered (mock)!"))
            .catch(() => alert("API error"));

          resetForm();
        }}
      >
        <Form>
          <div>
            <label>Username:</label>
            <Field name="username" type="text" />
            <ErrorMessage name="username" component="p" style={{ color: "red" }} />
          </div>

          <div>
            <label>Email:</label>
            <Field name="email" type="email" />
            <ErrorMessage name="email" component="p" style={{ color: "red" }} />
          </div>

          <div>
            <label>Password:</label>
            <Field name="password" type="password" />
            <ErrorMessage name="password" component="p" style={{ color: "red" }} />
          </div>

          <button type="submit">Register with Formik</button>
        </Form>
      </Formik>
    </div>
  );
};

export default FormikForm;
