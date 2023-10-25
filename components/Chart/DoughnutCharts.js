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
      cutout: "80%",
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
    const xCoor = chart.getDatasetMeta(0).data[0].x;
    const yCoor = chart.getDatasetMeta(0).data[0].y;
    ctx.save();
    ctx.font = "bold 48px avenir";
    ctx.fillStyle = "black";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillText("15", xCoor, yCoor - 24);

    ctx.font = "bold 16px sans-serif";
    ctx.fillStyle = "black";
    ctx.fillText("menit", xCoor, yCoor);

    ctx.font = "14px sans-serif";
    ctx.fillStyle = "#AFAFAF";
    ctx.fillText("dari 552 jam", xCoor, yCoor + 36);
  },
};

const DoughnutChart = () => {
  return (
    <>
      <Doughnut data={data} options={options} plugins={[textCenter]} />
    </>
  );
};

export default DoughnutChart;
