import { Line } from "react-chartjs-2";
import { Chart as ChartJS, LineElement, CategoryScale, LinearScale, PointElement } from 'chart.js';

ChartJS.register(
  ChartJS, 
  LineElement, 
  CategoryScale, 
  LinearScale, 
  PointElement
)

function DataChart() {

  const data = {
    labels: ['Mon', 'Tue', 'Wed'],
    datasets: [{
      labels: 'Sales of the week',
      data: [3, 6, 9],
      backgroundColor: 'aqua',
      borderColor: 'black',
      pointBorderColor: 'aqua',
      fill: true,
      tension: 0.4
      }
    ]
  }

  const options = {
    plugins: {
      legend: true
    },
    scales: {
      y: {
        min: 3,
        max: 6
      }
    }
  }

  return(
    <div>
      <Line data={data} options={options}>

      </Line>
    </div>
  )
}

export default DataChart