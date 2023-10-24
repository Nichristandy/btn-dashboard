import { MdHome, MdHelp, MdOutlineFileUpload } from "react-icons/md";
import { RiCalendar2Fill } from "react-icons/ri";

const Sidebar = () => {
  return (
    <div
      className={`w-full h-full min-h-screen pt-9 border-r border-r-black/10 font-sans hidden lg:block`}
    >
      <div className="w-full flex flex-col pb-10  gap-10 text-base">
        <button className="flex flex-row px-6 items-center gap-3 text-btn-blue">
          <MdHome className="w-6 h-6" />
          <p>Beranda</p>
        </button>
        <button className="flex flex-row pl-6 items-center gap-3 text-btn-dark-grey">
          {" "}
          <img src="../../icon/face-agent.svg" />
          <p>Manajemen Staff</p>
        </button>
        <button className="flex flex-row pl-6 items-center gap-3 text-btn-dark-grey text-left">
          <img src="../../icon/countertop.svg" />
          <p>Manajemen Konter</p>
        </button>
      </div>
      <div className="w-full px-[15px]">
        <div className="w-full h-[1px] bg-black/10"></div>
      </div>
      <div className="w-full flex flex-col pl-6 py-10">
        <button className="flex flex-row items-center gap-3 text-btn-dark-grey text-left">
          <RiCalendar2Fill className="w-6 h-6" />
          <p>Data Log Antrean</p>
        </button>
      </div>
      <div className="w-full px-[15px]">
        <div className="w-full h-[1px] bg-black/10"></div>
      </div>
      <div className="w-full flex flex-col py-10 ">
        <button className="flex flex-row items-center pl-6 gap-3 text-btn-dark-grey text-left">
          <MdHelp className="w-6 h-6" />
          <p>Pusat Bantuan</p>
        </button>
      </div>
      <div className="w-full px-[15px]">
        <div className="w-full h-[1px] bg-black/10"></div>
      </div>
      <div className="w-full flex flex-col py-10">
        <button className="flex flex-row items-center pl-6 gap-3 text-btn-dark-grey text-left">
          <MdOutlineFileUpload className="w-6 h-6" />
          <p>Ekspor Data</p>
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
