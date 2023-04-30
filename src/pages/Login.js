import "./login.css";
import API from "../utils/API";
import { Link, useMatch, useResolvedPath } from "react-router-dom";
import React, { useState } from "react";
import Input from "../components/Input";
import Button from "../components/Button";

/*<div className=" container">
  <h1>Login</h1>
  <Input name=" email" onChangeValue={onChangeValue} label="Email" />
  <Input
    name=" password"
    type={"password"}
    onChangeValue={onChangeValue}
    label="Password"
  />
  <div className=" text-danger">{msg}</div>
  <Button onClick={onSubmit} type="primary">
    Login
  </Button>
</div>;*/

function Login() {
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
        <form className="login-form">
          <label className="label-login" for="email">
            Ingresa tu correo electronico
          </label>
          <input
            className="max-btn margin-some"
            type="text"
            name="email"
            id="email"
            placeholder="regalrexnord@regalrexnord.com"
          />
          <label className="label-login" for="password">
            Ingresa tu correo contraseña
          </label>
          <input
            className="max-btn"
            type="password"
            name="password"
            id="password"
          />
          <CustomLink to="/home">
            <button className="max-btn">Iniciar Sesion</button>
          </CustomLink>
        </form>
      </div>
    </div>
  );
}

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
  const onSubmit = (response) => {
    console.log(data);
    setMsg(response);

    API.call(
      "users/login/",
      (response) => {
        localStorage.setItem("token", response.token);
        API.call(
          "users/current_user/",
          (response) => {
            if (response.role) {
              window.location.href = "/admin_page";
            } else {
              window.location.href = "/profile";
            }
          },
          (response) => {
            console.log(response);
            setMsg(response.error);
          }
        );
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
        <p className="text">administrador</p>
        <CustomLink to="/login_admin">
          <button className="btn-admin max-btn">Inicio Admin</button>
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
export default LoginView;
