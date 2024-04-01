import { ErrorMessage, Field, Form, Formik } from "formik";
import React from "react";
import { validationSchema } from "./validations";

export default function InputForm() {
  return (
    <div>
      <h2>Form Validation In ReactJS With Formik And Yup</h2>
      <Formik
        initialValues={{
          username: "",
          password: "",
        }}
        validationSchema={validationSchema}
        onSubmit={(values) => {
          alert(JSON.stringify(values));
        }}
      >
        <Form>
          <h2>LOGIN</h2>
          <hr />
          <label htmlFor="username">Username: </label>
          <Field type="text" name="username" id="username" />
          <ErrorMessage name="username" className="errMsg" component="div" />
          <br />
          <label htmlFor="password">Password: </label>
          <Field type="password" name="password" id="password" />
          <ErrorMessage name="password" className="errMsg" component="div" />
          <br />
          <button type="submit">Login</button>
        </Form>
      </Formik>
    </div>
  );
}
