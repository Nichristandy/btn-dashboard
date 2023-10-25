import { MdHome, MdHelp, MdOutlineFileUpload, MdMenu } from "react-icons/md";
import { RiCalendar2Fill } from "react-icons/ri";
import { useState } from "react";
import { Transition } from "@headlessui/react";

const Sidebar = () => {
  const [isShow, setIsShow] = useState(false);

  function handleShow() {
    setIsShow((show) => !show);
  }

  return (
    <div
      className={`w-full h-full min-h-screen pt-9 border-r border-r-black/10 font-sans`}
    >
      <div className="w-full flex flex-col pb-10  gap-10 text-base">
        <button className="flex flex-row px-6 items-center gap-3 text-btn-blue">
          <MdHome className="w-6 h-6" />
          <p className="hidden lg:inline-block">Beranda</p>
        </button>
        <button className="flex flex-row pl-6 items-center gap-3 text-btn-dark-grey text-left">
          {" "}
          <img src="../../icon/face-agent.svg" />
          <p className="hidden lg:inline-block">Manajemen Staff</p>
        </button>
        <button className="flex flex-row pl-6 items-center gap-3 text-btn-dark-grey text-left">
          <img src="../../icon/countertop.svg" />
          <p className="hidden lg:inline-block">Manajemen Konter</p>
        </button>
      </div>
      <div className="w-full px-[15px]">
        <div className="w-full h-[1px] bg-black/10"></div>
      </div>
      <div className="w-full flex flex-col pl-6 py-10">
        <button className="flex flex-row items-center gap-3 text-btn-dark-grey text-left">
          <RiCalendar2Fill className="w-6 h-6" />
          <p className="hidden lg:inline-block">Data Log Antrean</p>
        </button>
      </div>
      <div className="w-full px-[15px]">
        <div className="w-full h-[1px] bg-black/10"></div>
      </div>
      <div className="w-full flex flex-col py-10 ">
        <button className="flex flex-row items-center pl-6 gap-3 text-btn-dark-grey text-left">
          <MdHelp className="w-6 h-6" />
          <p className="hidden lg:inline-block">Pusat Bantuan</p>
        </button>
      </div>
      <div className="w-full px-[15px]">
        <div className="w-full h-[1px] bg-black/10"></div>
      </div>
      <div className="w-full flex flex-col py-10">
        <button className="flex flex-row items-center pl-6 gap-3 text-btn-dark-grey text-left">
          <MdOutlineFileUpload className="w-6 h-6" />
          <p className="hidden lg:inline-block">Ekspor Data</p>
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
