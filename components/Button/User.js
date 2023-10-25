import { TbTriangleInvertedFilled } from "react-icons/tb";
import { useState } from "react";
import { MdLogout, MdPerson } from "react-icons/md";
import { Transition } from "@headlessui/react";

const User = () => {
  const [isShowing, setIsShowing] = useState(false);

  function handleShow() {
    setIsShowing((show) => !show);
  }

  return (
    <div>
      <button
        onClick={handleShow}
        className="w-full flex flex-row gap-2 md:gap-3 py-2 justify-end items-center"
      >
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
        <img
          style={{
            transform: isShowing ? "rotate(180deg)" : "rotate(0)",
            transition: "transform 0.3s ease-in-out",
          }}
          src="../../triangle.svg"
        />
      </button>
      {isShowing ? (
        <div className="w-full relative">
          <Transition
            show={isShowing}
            enter="transition-opacity ease-in-out duration-1000"
            enterFrom="opacity-0"
            enterTo="opacity-100"
          >
            <div className="absolute bg-white rounded-lg px-3 py-2 w-full shadow">
              <div className="flex flex-row gap-2 items-center border-b border-b-black/10 py-1">
                <MdLogout />
                <span className="font-medium text-sm font-sans">Sign Out</span>
              </div>
              <div className="flex flex-row gap-2 items-center pt-2">
                <MdPerson />
                <span className="font-medium text-sm font-sans">Profile</span>
              </div>
            </div>
          </Transition>
        </div>
      ) : null}
    </div>
  );
};

export default User;
