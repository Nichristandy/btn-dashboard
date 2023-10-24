import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

const data = {
  labels: ["Customer Service", "Teller", "Layanan Prioritas"],
  datasets: [
    {
      data: [60, 35, 5],
      backgroundColor: ["#4B9CFD", "#F6B945", "#E31B23"],
      borderColor: ["#4B9CFD", "#F6B945", "#E31B23"],
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

const textCenter = {
  id: "textCenter",
  beforeDatasetsDraw(chart, args, pluginOptions) {
    const { ctx, data } = chart;

    ctx.save();
    ctx.font = "bolder 30px sans-serif";
    ctx.fillStyle = "red";
    ctx.fillText(
      "text",
      chart.getDatasetMeta(0).data[0].x,
      chart.getDatasetMeta(0).data[0].y
    );
  },
};

const DoughnutChart = () => {
  return (
    <>
      <Doughnut data={data} options={options} plugins={{ textCenter }} />
    </>
  );
};

export default DoughnutChart;
