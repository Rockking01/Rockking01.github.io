import React, { useState } from "react";
import '../pages/admin_styles.css'
import API2 from '../utils/API2'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

function IdChart() {
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

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top"
      },
      title: {
        display: true,
        text: "Puntuaciones"
      },
      scales: {
        yAxes: [{
          ticks: {
            beginAtZero: true
          }
        }],
      },
    }
  };

  const labels = sessiones.map((session, index) => `Juego ${index + 1}`)

  const data = {
    labels,
    datasets: [
      {
        label: "Puntuacion",
        data: sessiones.map((session) => session.score),
        borderColor: "#FF6600",
        backgroundColor: "#ff983f",
        tension: 0.4,
      },
      {
        label: "Errores",
        data: sessiones.map((session) => session.errores),
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "rgba(255, 99, 132, 0.5)",
        tension: 0.4,
      },
    ]
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          ID Usuario:
          <input
            className="btn-margin-l wid-20"
            type="number"
            value={id}
            onChange={(event) => setPlayerId(event.target.value)}
          />
        </label>
        <button className="btn-margin-l" type="submit">Cargar Sesiones</button>
      </form>
      <div>
        <Line options={options} data={data} />
      </div>
    </div>
  )
}

export default IdChart;