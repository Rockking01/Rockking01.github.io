import "./login.css";
import API from "../utils/API";
import { Link, useMatch, useResolvedPath } from "react-router-dom";
import React, { useState } from "react";
import Input from "../components/Input";
import Button from "../components/Button";

function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvedPath.pathname, end: true });
  return (
    <li className={isActive ? "active" : ""}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  );
}

function Login_Admin() {
  const [msg, setMsg] = useState("");
  const [data, setData] = useState({});

  const onChangeValue = (name, value) => {
    setData({ ...data, [name]: value });
  };
  const onSubmit = (response) => {
    console.log(data);
    setMsg(response);

    API.call(
      "users/login/",
      (response) => {
        localStorage.setItem("token", response.token);
        window.location.href = "/admin_page";
      },
      (response) => {
        console.log(response);
        setMsg(response.error);
      },
      {
        method: "post",
        body: JSON.stringify(data),
      }
    );
  };

  return (
    <div className="login-container">
      <div className="signup-section">
        <h2>Bienvenido</h2>
        <p className="text">Si aun no tienes una cuenta registrate</p>
        <CustomLink to="/signup">
          <button className="max-btn">Registrarse</button>
        </CustomLink>
        <p className="text">Usuario General</p>
        <CustomLink to="/login">
          <button className="btn-admin max-btn">Inicio General</button>
        </CustomLink>
      </div>
      <div className="login-section">
        <h1>Iniciar Sesion</h1>
        <div className="login-form">
          <Input
            name="email"
            onChangeValue={onChangeValue}
            label="Email"
            labelClassName="label-login"
          />
          <Input
            name="password"
            type={"password"}
            onChangeValue={onChangeValue}
            label="Password"
          />

          <Button onClick={onSubmit} type="primary">
            Login
          </Button>
        </div>
      </div>
    </div>
  );
}
export default Login_Admin;
