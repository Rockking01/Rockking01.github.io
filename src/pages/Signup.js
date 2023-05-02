import './login.css'
import React, { useEffect, useState } from "react";
import API2 from "../utils/API2";
import { Link, useMatch, useResolvedPath } from "react-router-dom";

import Input from "../components/Input";
import Button from "../components/Button";

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

function SignUpView() {
  const [msg, setMsg] = useState("");
  const [data, setData] = useState({});
  const [auth, setAuth] = useState({});

  const onChangeValue = (name, value) => {
    setData({ ...data, [name]: value });
  };

  const onChangeValueAuth = (name, value) => {
    setAuth({ ...auth, [name]: value });
  };

  const onSuccessAuth = (response) => {
    API2.get("users/current_user/", onSuccessGetCurrentUser, onError);
  };

  const onSuccessGetCurrentUser = (response) => {
    if (response.role) {
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

    API2.post("token/", onSuccessAuth, onError, auth);
  };

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
        <div className="login-form">
          <Input
            name="first_name"
            placeholder="Jose"
            onChangeValue={onChangeValue}
            label="Ingresa tu nombre"
          />
          <Input
            name="last_name"
            placeholder="perez"
            onChangeValue={onChangeValue}
            label="Ingresa tus apellidos"
          />

          <Input
            name="email"
            onChangeValue={onChangeValue}
            placeholder="regalrexnord@regalrexnord.com"
            label="Ingresa tu correo electronico"
          />
          <Input
            name="password"
            type="password"
            onChangeValue={onChangeValue}
            placeholder="********"
            label="Ingresa tu contraseña"
          />
          <Input
            name="birthday"
            type="date"
            onChangeValue={onChangeValue}
            label="Ingresa tu fecha de nacimiento"
          />
          <Input
            name="authKey"
            onChangeValue={onChangeValueAuth}
            type="number"
            placeholder="12345"
            label="Ingresa tu token de registro"
          />
          <Button onClick={onSubmit} type="primary">
            Registrarse
          </Button>
        </div>
      </div>
    </div>
  );
}

export default SignUpView;
