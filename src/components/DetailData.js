import React, { useState } from "react";
import API2 from '../utils/API2'
import '../pages/admin_styles.css'

function DetailData() {
  const [id, setPlayerId] = useState("");
  const [sessiones, setSessiones] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();

    API2.post(
      "gameSessions/specificUser/",
      (response) => {
        console.log("User sessions received:", response);
        setSessiones(response.sessiones);
      },
      (error) => {
        console.log("Error retrieving user sessions:", error);
      },
      { id: id }
    );
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          ID Usuario:
          <input
            type="number"
            className="btn-margin-l wid-20"
            value={id}
            onChange={(event) => setPlayerId(event.target.value)}
          />
        </label>
        <button className="btn-margin-l" type="submit">Cargar Sesiones</button>
      </form>
      <ul className="pad-l">
        {sessiones.map((session, index) => (
          <li className="flex-start" key={session.id}>
            Juego: {index + 1}, Modulo: {session.moduloJuego}, Nivel: {session.nivel}, Score: {session.score}, Velocidad: {session.velocidad}, Errores: {session.errores}, Tiempo de sesión: {session.tiempoSesion}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default DetailData;
