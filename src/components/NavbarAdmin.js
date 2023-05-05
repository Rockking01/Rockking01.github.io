import { useState } from 'react'
import './Navbar.css'
import logo from '../assets/logo.png'
import { Link, useMatch, useResolvedPath } from "react-router-dom";

function CustomLink({ to, children, isAdminLink = false, ...props }) {
  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvedPath.pathname, end: true });

  // Si el enlace es para la página de AdminPage y el usuario actual no es admin, no renderizamos el enlace
  if (isAdminLink && !localStorage.getItem('isAdmin')) {
    return null;
  }

  return (
    <li className={isActive ? "active" : ""}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  );
}

const NavbarAdmin = ({ onLogout }) => {
  const [showNavbar, setShowNavbar] = useState(false)

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar)
  }

  const handleLogout = () => {
    onLogout();
  };

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
              <CustomLink to="/videogame">
                <p>Videojuego</p>
              </CustomLink>
            </li>
            <li>
              <CustomLink to="/description">
                <p>Descripcion</p>
              </CustomLink>
            </li>
            <li>
              <CustomLink to="/token_email" isAdminLink={true}>
                <p>Tokens</p>
              </CustomLink>
            </li>
            <li>
              <CustomLink to="/admin_page">
                <p>Dashboard</p>
              </CustomLink>
            </li>
            <li>
              <p className='p-bld' onClick={handleLogout}>Cerrar sesión</p>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default NavbarAdmin