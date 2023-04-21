import React, { useState, useEffect } from "react";
import API from "../utils/API";

function Home() {
  <div>

  </div>
  
  const [scores, setScores] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    API.call(
      'scores/',
      (response) => {
        setScores(response);
        setLoading(false);
      },
      (response) => {
        setError("Error al cargar los scores");
        setLoading(false);
      }
    );
  }, []);

  if (loading) {
    return <div>Cargando...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div>
      <h1>Scoreboard</h1>
      <ul>
        {scores.map((score) => (
          <li key={score.id}>
            <strong>{score.user}</strong>: {score.score}
          </li>
        ))}
      </ul>
    </div>
  );
};


export default Home;
