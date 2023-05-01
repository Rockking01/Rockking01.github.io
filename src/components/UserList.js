import './UserList.css'
import profile from '../assets/profile.png'

function UserList({ userData }) {
  return (
    <div className="container">
      <ul className='user-list'>
        <li className='err-img'>
          <img className="img-profile" src={profile} alt="Logo de mi aplicación" />
        </li>
        <li>
          <span>ID:</span>
        </li>
        <li>
          {userData.id}
        </li>
        <li>
          <span>Nombre:</span>
        </li>
        <li>
          {userData.first_name}
        </li>
        <li>
          <span>Apellido:</span>
        </li>
        <li>
          {userData.last_name}
        </li>
        <li>
          <span>Puntuación promedio:</span>
        </li>
        <li>
          {userData.average_score}
        </li>
        <li>
          <span>Puntuación total:</span>
        </li>
        <li>
          {userData.total_score}
        </li>
      </ul>
    </div>
  );
}

export default UserList;
