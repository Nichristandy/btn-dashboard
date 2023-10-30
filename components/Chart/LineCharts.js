import { Line } from "react-chartjs-2";
import { faker } from "@faker-js/faker";
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale, //x axis
  LinearScale, //y axis
  PointElement,
  Tooltip,
} from "chart.js";

ChartJS.register(
  LineElement,
  CategoryScale, //x axis
  LinearScale, //y axis
  PointElement,
  Tooltip
);

const LineCharts = ({ label }) => {
  let labels = [...label];

  const data = {
    labels,
    datasets: [
      {
        label: "dataset 1",
        data: labels.map(() => faker.number.int({ min: 0, max: 100 })),
        borderColor: "#F6B945",
        backgroundColor: "#F6B945",
        pointBackgroundColor: "#fff",
        pointBorderColor: "#F6B945",
      },
      {
        label: "dataset 2",
        data: labels.map(() => faker.number.int({ min: 0, max: 100 })),
        borderColor: "#5E9DE9",
        backgroundColor: "#5E9DE9",
        pointBackgroundColor: "#fff",
        pointBorderColor: "#5E9DE9",
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      y: { min: 0, max: 100, ticks: { stepSize: 20 } },
    },
    // maintainAspectRatio: false,
    // aspectRatio: 2 | 1,
  };

  return <Line data={data} options={options}></Line>;
};

export default LineCharts;
