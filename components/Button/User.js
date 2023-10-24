import { TbTriangleInvertedFilled } from "react-icons/tb";

const User = () => {
  return (
    <div className="w-full flex flex-row gap-3 justify-end items-center">
      <div className="border-[4px]  flex border-white rounded-[20px]">
        <img src="../../user.png" className=" w-8 h-8 lg:w-14 lg:h-14" />
      </div>
      <div className="flex flex-col">
        <h1 className="font-bold text-xs lg:text-base text-btn-dark-grey">
          Admin_John
        </h1>
        <span className="text-btn-light-grey text-xs lg:text-base">
          Administrator
        </span>
      </div>
      <img src="../../triangle.svg" />
    </div>
  );
};

export default User;
