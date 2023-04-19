import { Link, useMatch, useResolvedPath } from "react-router-dom";
import logo from './assets/logo.png'
import './App.css'

function Landing() {
    return(
        <div className="landing">
            <img className="img-logo" src={logo} alt="Logo de mi aplicación" />
            <h1>Bienvenido a Regal Rexnord</h1>
            <p>Inicia sesion o registrate para continuar</p>
            <div className='buttons'>
                <CustomLink to='/login'>
                    <button>Iniciar Sesion</button>
                </CustomLink>
                <CustomLink to='/signup'>
                    <button>Registrarse</button>
                </CustomLink>
            </div>
        </div>
    )
}

function CustomLink({to, children, ...props}) {
    const resolvedPath = useResolvedPath(to)
    const isActive = useMatch({path: resolvedPath.pathname, end: true})
    return(
        <li className={isActive ? 'active' : ''}>
            <Link to={to} {...props}>{children}</Link>
        </li>
    )
}

export default Landing