import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js/auto';
import { Line } from 'react-chartjs-2';
import "chartjs-adapter-date-fns";
import '../styles/components/HistoricalSolarChart.css';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const HistoricalSolarChart = ({ data }) => {
    data = [
        { date: "2025-08-10", sunrise: "04:08:33", sunset: "19:08:01", golden_hour: "19:08:01" },
        { date: "2025-08-11", sunrise: "04:08:08", sunset: "19:08:09", golden_hour: "19:08:09" },
        { date: "2025-08-12", sunrise: "04:08:43", sunset: "19:08:16", golden_hour: "19:08:16" },
        { date: "2025-08-13", sunrise: "04:08:19", sunset: "19:08:21", golden_hour: "19:08:21" }
    ];

    const toSeconds = (timeStr) => {
        const [h, m, s] = timeStr.split(":").map(Number);
        return h * 3600 + m * 60 + s;
    };

    const formatTime = (seconds) => {
        const h = String(Math.floor(seconds / 3600)).padStart(2, "0");
        const m = String(Math.floor((seconds % 3600) / 60)).padStart(2, "0");
        const s = String(Math.floor(seconds % 60)).padStart(2, "0");
        return `${h}:${m}:${s}`;
    };

    const chartData = {
        labels: data.map(d => d.date),
        datasets: [
            {
                label: "Sunrise",
                data: data.map(d => toSeconds(d.sunrise)),
                borderColor: "orange",
            },
            {
                label: "Sunset",
                data: data.map(d => toSeconds(d.sunset)),
                borderColor: "purple",
            },
            {
                label: "Golden Hour",
                data: data.map(d => toSeconds(d.golden_hour)),
                borderColor: "gold",
            }
        ]
    };

    const options = {
        responsive: true,
        plugins: {
            tooltip: {
                callbacks: {
                    label: (context) => `${context.dataset.label}: ${formatTime(context.raw)}`
                }
            }
        },
        scales: {
            y: {
                type: "linear",
                ticks: {
                    callback: (value) => formatTime(value)
                },
            },
        }
    };

  return (
    <div className="chart-container">
      <Line options={options} data={chartData} />
    </div>
  );
};

export default HistoricalSolarChart;