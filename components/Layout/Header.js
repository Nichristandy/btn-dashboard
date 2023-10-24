import LocationButton from "../Button/LocationButton";
import User from "../Button/User";

const Header = () => {
  return (
    <div className="border-b-black/10 border-b w-full">
      <div className="flex flex-row items-center">
        <div className="flex flex-row pl-5 w-4/12 lg:w-2/12 gap-4 pt-4 pb-6 items-center border-r border-r-black/10">
          <img src="../../Logo.svg" className="w-auto h-6 lg:h-auto" />
          <span className=" font-bold text-btn-dark-grey text-xs lg:text-[14px] w-1/2">
            Service-level Agreement
          </span>
        </div>
        <div className="pl-6 pr-7 flex flex-row w-full items-center justify-between">
          <LocationButton />
          <User />
        </div>
      </div>
    </div>
  );
};

export default Header;
