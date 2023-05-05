import "./login.css";
import API2 from "../utils/API2";
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

function LoginView() {
  const [msg, setMsg] = useState("");
  const [data, setData] = useState({});

  const onChangeValue = (name, value) => {
    setData({ ...data, [name]: value });
  };

  const onSuccessLogin = (response) => {
    localStorage.setItem("token", response.token);
    API2.get("users/current_user/", onSuccessGetCurrentUser, onError);
  };

  const onSuccessGetCurrentUser = (response) => {
    localStorage.setItem('isAdmin', response.role)
    if (response.role) {
      // console.log(response.role)
      window.location.href = "/admin_page";
    } else {
      window.location.href = "/profile/" + response.id;
    }
  };

  const onError = (response) => {
    console.log(response);
    setMsg(response.error);
  };

  const onSubmit = () => {
    console.log(data);
    setMsg("");

    API2.post("users/login/", onSuccessLogin, onError, data);
  };

  return (
    <div className="login-container">
      <div className="signup-section">
        <h2>Bienvenido</h2>
        <p className="text">Si aun no tienes una cuenta registrate</p>
        <CustomLink to="/signup">
          <button className="max-btn">Registrarse</button>
        </CustomLink>
      </div>
      <div className="login-section">
        <h1>Iniciar Sesion</h1>
        <div className="login-form">
          <Input
            name="email"
            onChangeValue={onChangeValue}
            placeholder="jorge@tec.mx"
            label="Email"
          />
          <Input
            name="password"
            type="password"
            placeholder="********"
            onChangeValue={onChangeValue}
            label="Password"
          />

          <Button onClick={onSubmit} type="primary">
            Login
          </Button>
          <p>{msg}</p>
        </div>
      </div>
    </div>
  );
}

export default LoginView;
