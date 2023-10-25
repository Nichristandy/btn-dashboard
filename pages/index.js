import SalesChart from "@/components/Chart/SalesChart";
import Card from "@/components/Card";
import Layout from "@/components/Layout/Layout";
import DateButton from "@/components/Button/Date";
import { MdPerson, MdDataUsage } from "react-icons/md";
import { AiFillStar } from "react-icons/ai";
import InformationCard from "@/components/InformationCard";
import ChartLayout from "@/components/Layout/ChartLayout";
import ChartCard from "@/components/ChartCard";
import DoughnutChart from "@/components/Chart/DoughnutCharts";
import PieChart from "@/components/Chart/PieChart";
import CustomLegend from "@/components/Chart/CustomLegend";
import DoughnutLegend from "@/components/Chart/DoughnutLegend";

export default function Home() {
  return (
    <Layout>
      <div className="grid grid-cols-1">
        {/* Header content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 justify-between mb-5 lg:mb-[35px]">
          <h1 className="font-bold font-sans text-2xl">Tinjauan Umum</h1>
          <div className="flex w-full justify-start mt-3 lg:mt-0 lg:justify-end font-sans">
            <div className="w-3/4 flex flex-row gap-2 items-center">
              <span className="text-btn-dark-grey">Periode:</span>
              <DateButton date={"Januari 2021"} />
              <span className="text-btn-dark-grey">s/d</span>
              <DateButton date={"September 2021"} />
            </div>
          </div>
        </div>
        {/* 4 row card table */}
        <div className="w-full grid md:grid-cols-2 lg:grid-cols-4 gap-[10px] mb-[9px]">
          {/* realisasi */}
          <InformationCard
            Title={"Realisasi / Kunjungan"}
            text1={"3299"}
            text2={"/4255"}
          >
            <MdPerson className="w-6 h-6 text-btn-blue" />
          </InformationCard>
          {/* peak hour */}
          <InformationCard Title={"Peak Hour"} text1={"12:23"} text2={"/senin"}>
            <MdDataUsage className="w-6 h-6 text-btn-blue" />
          </InformationCard>
          {/* Branch Growth */}
          <Card>
            <div className="px-[6px] py-2 flex flex-col gap-2  avenir">
              <span className="text-[14px] text-btn-dark-grey">
                Branch Growth
              </span>
              <div className="flex flex-row items-center gap-[10px]">
                <span className=" text-4xl font-bold">
                  <span className="text-btn-yellow">+ </span>
                  25
                  <span className="text-2xl text-btn-light-grey">%</span>
                </span>
              </div>
            </div>
          </Card>
          {/* Rata-rata */}
          <InformationCard
            Title={"Rata-rata Penilaian"}
            text1={"4.2"}
            text2={"/5"}
          >
            <AiFillStar className="w-6 h-6 text-btn-blue" />
          </InformationCard>
        </div>
        {/* Main table content */}
        <div
          className="flex flex-col lg:flex-row items-start w-full gap-[10px]
        "
        >
          <div className="flex flex-col w-full lg:w-7/12 max-h-screen hide-scrollbar overflow-scroll">
            <ChartLayout />
          </div>
          <div className="flex flex-col w-full  lg:w-5/12 gap-5 hide-scrollbar max-h-screen overflow-scroll">
            <ChartCard title={"Top 20 Sales"} detail={"Lihat Cabang"}>
              <SalesChart />
            </ChartCard>
            <ChartCard title={"Statistik Waktu Tunggu / Konter"}>
              <div className="w-full flex flex-row mt-5 mb-6 gap-[30px] items-center">
                <div className="w-1/2">
                  <DoughnutChart />
                </div>
                <div className="w-1/2 flex flex-col gap-6">
                  <DoughnutLegend
                    boxColor={"btn-blue"}
                    percentage={"60"}
                    title={"Customer Service"}
                    minutes={"15 menit"}
                  />
                  <DoughnutLegend
                    boxColor={"btn-yellow"}
                    percentage={"35"}
                    title={"Teller"}
                    minutes={"25 menit"}
                  />
                  <DoughnutLegend
                    boxColor={"btn-red"}
                    percentage={"5"}
                    title={"Layanan Prioritas"}
                    minutes={"5 menit"}
                  />
                </div>
              </div>
            </ChartCard>
            <ChartCard title={"Statistik Waktu Tunggu / Konter"}>
              <div className="w-full flex flex-row items-center mt-5 mb-6 gap-[30px]">
                <div className="w-1/2">
                  <PieChart />
                </div>

                <div className="w-1/2 flex flex-col gap-6">
                  <CustomLegend
                    boxColor={"#4B9CFD"}
                    percentage={"42"}
                    title={"Penyimpanan"}
                    minutes={"15 menit / transaksi"}
                  />
                  <CustomLegend
                    boxColor={"#3F37FB"}
                    percentage={"25"}
                    title={"Kartu"}
                    minutes={"25 menit / transaksi"}
                  />
                  <div className="w-full flex flex-col gap-1">
                    <div className="flex flex-row items-center gap-2">
                      <div
                        className={`w-3 h-3 rounded-[3px] bg-[#B2C2FE]`}
                      ></div>
                      <span className="text-btn-dark-grey">Pinjaman</span>
                    </div>
                    <span className="font-bold">1225</span>
                  </div>
                </div>
              </div>
            </ChartCard>
          </div>
        </div>
      </div>
    </Layout>
  );
}
