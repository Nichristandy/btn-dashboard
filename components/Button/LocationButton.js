import { MdPinDrop } from "react-icons/md";

const LocationButton = () => {
  return (
    <button className="py-1 md:py-[10px] px-3 rounded-[5px] bg-white border border-black/10 w-1/2 md:w-8/12 lg:w-7/12 flex flex-row items-center gap-[10px]">
      <img src="../../pin.svg" />
      <span className=" text-[8px] md:text-[14px] font-bold font-[#16191D]">
        BTN KCP Kebayoran lama,{" "}
        <span className="text-btn-light-grey font-normal">Jakarta selatan</span>
      </span>
    </button>
  );
};

export default LocationButton;
