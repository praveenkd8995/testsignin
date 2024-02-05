import { signInWithEmailAndPassword } from "firebase/auth";
import React from "react";
import { auth } from "../firebase";
import { Formik } from 'formik';
import * as Yup from "yup";
import "./Login.css";


const LoginSchema = Yup.object().shape({
  email: Yup.string()
      .email("Invalid email address format")
      .required("Email is required"),
  password: Yup.string()
      .min(3, "Password must be 3 characters at minimum")
      .required("Password is required"),
});

function Login() {

  const handleLogin = (values) => {
    signInWithEmailAndPassword(auth, values.email, values.password);
  };
  return (
    <div>
      <Formik
        initialValues={{ email: '', password: '' }}
        validationSchema={LoginSchema}
        onSubmit={handleLogin}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
        }) => (
          <form onSubmit={handleSubmit}>
          <div className="login">
            <input
              type="email"
              name="email"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.email}
              placeholder="Enter email"
            />
            {errors.email && touched.email && errors.email}
            <input
              type="password"
              name="password"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.password}
              placeholder="Enter password"
            />
            {errors.password && touched.password && errors.password}
            <button type="submit" disabled={isSubmitting}>
              Submit
            </button>
            </div>
          </form>
        )}
      </Formik>
    </div>
  );
}

export default Login;
