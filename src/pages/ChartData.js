import React, { useState } from "react";
import API2 from '../utils/API2'

function ChartData() {
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
      <h1>Get User Sessions</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Player ID:
          <input
            type="number"
            value={id}
            onChange={(event) => setPlayerId(event.target.value)}
          />
        </label>
        <button type="submit">Get Sessions</button>
      </form>
      <ul>
        {sessiones.map((session) => (
          <li key={session.id}>
            Modulo: {session.moduloJuego}, Nivel: {session.nivel}, Score: {session.score}, Velocidad: {session.velocidad}, Errores: {session.errores}, Tiempo de sesión: {session.tiempoSesion}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ChartData;
