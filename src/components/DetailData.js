import React, { useState } from "react";
import API2 from '../utils/API2';
import '../pages/admin_styles.css';
import './Table_Styles.css'

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
    <div className="grid-max">
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
      <div>
        <table className="table">
          <thead>
            <tr>
              <th>Juego</th>
              <th>Modulo</th>
              <th>Nivel</th>
              <th>Score</th>
              <th>Velocidad</th>
              <th>Errores</th>
            </tr>
          </thead>
          <tbody>
            {sessiones.map((session, index) => (
              <tr key={session.id}>
                <td>{index + 1}</td>
                <td>{session.moduloJuego}</td>
                <td>{session.nivel}</td>
                <td>{session.score}</td>
                <td>{session.velocidad}</td>
                <td>{session.errores}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default DetailData;
