import './UserList.css'
import profile from '../assets/profile.png'

function UserList({ userData }) {
  return (
    <div>
      <div className="container">
        <p className='text-user'>
        El software de capacitación de Regal Rexnord es un videojuego interactivo diseñado para brindar 
        una capacitación amigable y efectiva a los empleados de almacén, fábrica y oficina sobre 
        situaciones de riesgo, especialmente en caso de incendios en un edificio. A través de la 
        herramienta de videojuego, los empleados pueden aprender de manera visual y práctica cómo 
        reaccionar en situaciones de emergencia, identificar y prevenir situaciones de riesgo en su 
        lugar de trabajo y evaluar su progreso mediante un sistema de puntuación. Regal Rexnord está 
        comprometido a seguir desarrollando y mejorando esta plataforma para brindar una experiencia 
        de aprendizaje única y efectiva para los empleados.
        </p>
        <ul className='user-list'>
          <li className='err-img'>
            <img className="img-profile" src={profile} alt="Logo de mi aplicación" />
          </li>
          <li className='even'>
            <span>ID:</span>
          </li>
          <li className='odd'>
            {userData.id}
          </li>
          <li className='even'>
            <span>Nombre:</span>
          </li>
          <li className='odd'>
            {userData.first_name}
          </li>
          <li className='even'>
            <span>Apellido:</span>
          </li>
          <li className='odd'>
            {userData.last_name}
          </li>
          <li className='even'>
            <span>Puntuación promedio:</span>
          </li>
          <li className='odd'>
            {userData.average_score}
          </li>
          <li className='even'>
            <span>Puntuación total:</span>
          </li>
          <li className='odd'>
            {userData.total_score}
          </li>
        </ul>
      </div>
    </div>
  );
}

export default UserList;
