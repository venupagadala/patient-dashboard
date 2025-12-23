import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Tooltip } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Tooltip);

export default function BPChart({ history }) {
  // Use last 6 months
  const chartData = [...history].slice(0, 6).reverse();

  const data = {
    labels: chartData.map(h => `${h.month.substring(0, 3)}, ${h.year}`),
    datasets: [
      {
        data: chartData.map(h => h.blood_pressure.systolic.value),
        borderColor: '#E66FD2',
        backgroundColor: '#E66FD2',
        tension: 0.4,
        pointRadius: 6,
      },
      {
        data: chartData.map(h => h.blood_pressure.diastolic.value),
        borderColor: '#8C6FE6',
        backgroundColor: '#8C6FE6',
        tension: 0.4,
        pointRadius: 6,
      }
    ]
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: { legend: { display: false } },
    scales: {
      y: { min: 60, max: 180, grid: { borderDash: [5, 5] } },
      x: { grid: { display: false } }
    }
  };

  return <Line data={data} options={options} />;
}