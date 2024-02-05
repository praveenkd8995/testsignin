import React from "react";
import "./Signup.css";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../firebase";
import { Formik } from 'formik';
import * as Yup from "yup";

const SignUpSchema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email address format")
    .required("Email is required"),
  username: Yup.string()
    .required("username is required"),
  password: Yup.string()
    .min(3, "Password must be 3 characters at minimum")
    .required("Password is required"),
});

function Signup() {

  const handleSignUp = (values) => {
    createUserWithEmailAndPassword(auth, values.email, values.password)
      .then((authUser) => {
        signInWithEmailAndPassword(auth, values.email, values.password).then(
          updateProfile(auth.currentUser, {
            displayName: values.username,
          })
        );
      })
      .catch((err) => {
        alert(err);
      });
  };
  return (
    <div>
      <Formik
        initialValues={{ email: '', username: '', password: '' }}
        validationSchema={SignUpSchema}
        onSubmit={handleSignUp}
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
            <div className="signup">
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
                type="text"
                name="username"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.username}
                placeholder="Enter username"
              />
              {errors.username && touched.username && errors.username}
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

export default Signup;
