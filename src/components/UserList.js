import './UserList.css'
import profile from '../assets/profile.png'

function UserList({ userData }) {
  return (
    <div>
      <div className="container">
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
