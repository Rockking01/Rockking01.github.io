import "./login.css";
import React, { useEffect, useState } from "react";
import API from "../utils/API";
import { Link, useMatch, useResolvedPath } from "react-router-dom";

const getValue = (o, s) => {
  if (!o) {
    return null;
  }
  s = s.replace(/\[(\w+)\]/g, ".$1");
  s = s.replace(/^\./, "");
  var a = s.split(".");
  for (var i = 0, n = a.lenght; i < n; ++i) {
    var k = a[i];
    if (k in o) {
      o = o[k];
    } else {
      return;
    }
  }
  return o;
};

function SignUpView() {
  const [isLoading, setLoading] = useState(false);
  const [userList, setUserList] = useState([]);

  const loadData = () => {
    setLoading(true);
    API.call(
      "users/",
      (response) => {
        console.log(response);
        setUserList(response);
        setLoading(false);
      },
      (error) => {
        console.log(error);
        setLoading(false);
      }
    );
  };
}

function Signup() {
  return (
    <div className="login-container">
      <div className="signup-section">
        <h2>Bienvenido</h2>
        <p className="text">Si ya estas registrado inicia sesion</p>
        <CustomLink to="/login">
          <button className="max-btn">Iniciar Sesion</button>
        </CustomLink>
      </div>
      <div className="login-section">
        <h1>Registrarse</h1>
        <form className="login-form">
          <label className="label-login" for="name">
            Ingresa tu nombre
          </label>
          <input
            className="max-btn margin-some"
            type="text"
            name="name"
            id="name"
            placeholder="Jose Perez"
          />
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
          <label className="label-login" for="id_empleado">
            Ingresa tu numero de trabajador
          </label>
          <input
            className="max-btn margin-some"
            type="number"
            name="id_empleado"
            id="id_empleado"
            placeholder="12345"
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
            <button className="max-btn">Registrarse</button>
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

export default Signup;
