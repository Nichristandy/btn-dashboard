import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";
import { Faker } from "@faker-js/faker";

ChartJS.register(ArcElement, Tooltip, Legend);

const labels = ["Penyimpanan", "Kartu", "Pinjaman", "red", "Orange"];

const data = {
  labels,
  datasets: [
    {
      data: [70, 30, 60, 10, 20],
      backgroundColor: ["#4B9CFD", "#3F37FB", "#B2C2FE", "#F15E5E", "#F6B945"],
      borderColor: ["#4B9CFD", "#3F37FB", "#B2C2FE", "#F15E5E", "#F6B945"],
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
};

const PieChart = () => {
  return <Pie data={data} options={options} />;
};

export default PieChart;
