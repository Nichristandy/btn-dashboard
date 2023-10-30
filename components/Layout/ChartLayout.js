import LineCharts from "../Chart/LineCharts";
import ChartCard from "../ChartCard";

const ChartLayout = () => {
  return (
    <div className={`w-full flex flex-col gap-[10px]`}>
      <ChartCard
        title={"Statistik Kunjungan Nasabah"}
        detail={"Lihat Data Log"}
        legend1={"Customer Service"}
        legend2={"Teller"}
      >
        <div className="w-full max-h-[150px] md:max-h-0 md:min-h-[350px] flex justify-center mt-5">
          <LineCharts label={[23, 24, 25, 26, 27, 28, 29, 31]} />
        </div>
      </ChartCard>

      <ChartCard
        title={"Statistik Waktu Tunggu"}
        detail={"Lihat Data Log"}
        subTitle={"(rata-rata / peak hour)"}
        legend1={"Customer Service"}
        legend2={"Teller"}
      >
        <div className="w-full max-h-[150px] md:min-h-[350px] flex justify-center mt-5">
          <LineCharts
            label={[
              "Jan",
              "Feb",
              "Mar",
              "Apr",
              "Mei",
              "Jun",
              "Jul",
              "Aug",
              "Sep",
            ]}
          />
        </div>
      </ChartCard>
    </div>
  );
};

export default ChartLayout;
