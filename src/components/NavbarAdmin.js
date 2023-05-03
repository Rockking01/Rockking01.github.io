import { useState } from 'react'
import './Navbar.css'
import logo from '../assets/logo.png'
import { Link, useMatch, useResolvedPath } from "react-router-dom";

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

const NavbarAdmin = () => {
  const [showNavbar, setShowNavbar] = useState(false)

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar)
  }

  return (
    <nav className="navbar">
      <div className="container-nav">
        <img className="logo-nav" src={logo} alt="Logo de mi aplicación" />
        <div className="menu-icon" onClick={handleShowNavbar}>
          <svg viewBox="0 0 100 80" width="40" height="40">
            <rect width="100" height="20"></rect>
            <rect y="30" width="100" height="20"></rect>
            <rect y="60" width="100" height="20"></rect>
          </svg>
        </div>
        <div className={`nav-elements  ${showNavbar && 'active'}`}>
          <ul>
            <li>
              <CustomLink to="/">
                <p>Inicio</p>
              </CustomLink>
            </li>
            <li>
              <CustomLink to="/admin_page">
                <p>Dashboard</p>
              </CustomLink>
            </li>
            <li>
              <CustomLink to="/token_email">
                <p>Tokens</p>
              </CustomLink>
            </li>
            <li>
              <CustomLink to="/admin_page">
                <p>Videojuego</p>
              </CustomLink>
            </li>
            <li>
              <CustomLink to="/admin_page">
                <p>Cerrar Sesion</p>
              </CustomLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default NavbarAdmin