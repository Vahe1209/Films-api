import React, { useState } from "react";
import { Avatar } from "antd";
import { UserOutlined } from "@ant-design/icons";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import "./Login.css";
import Logo from "../Logo/Logo.jsx";

export default function Login() {
  const [user, setUser] = useState([]);

  return (
    <div className="login">
      <Logo />
      <div className="form">
        <Avatar shape="square" size={64} icon={<UserOutlined />} />

        <h1>Sign In</h1>
        <Formik
          initialValues={{
            userName: "",
            password: "",
          }}
          validationSchema={Yup.object({
            userName: Yup.string()
              .max(15, "Must be 15 characters or less")
              .required("Required"),
            password: Yup.string()
              .min(8, "Must be 8 characters or more")
              .required("Required"),
          })}
          onSubmit={async (values) => {
            await new Promise((r) => setTimeout(r, 500));
            setUser(values);
            localStorage.setItem("login", JSON.stringify(user));
          }}
        >
          <Form>
            <div className="form-item">
              <label htmlFor="userName" className="title">
                Login
              </label>
              <Field
                id="userName"
                className="input"
                name="userName"
                placeholder="Your Name"
              />
              <div className="myError">
                <ErrorMessage name="userName" className="myError" />
              </div>
            </div>
            <div className="form-item">
              <label htmlFor="password" className="title">
                Password
              </label>
              <Field
                id="password"
                name="password"
                placeholder="Password"
                type="password"
                className="input"
              />
              <div className="myError">
                {" "}
                <ErrorMessage name="password" />
              </div>
            </div>

            <button type="submit" className="button">
              Sign In
            </button>
          </Form>
        </Formik>
      </div>
    </div>
  );
}
