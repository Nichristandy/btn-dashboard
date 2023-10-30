const DoughnutLegend = ({ boxColor, title, percentage, minutes }) => {
  return (
    <div className="w-full flex flex-col gap-1 font-nunitoSans">
      <div className="flex flex-row items-center gap-2">
        <div
          style={{ backgroundColor: `${boxColor}` }}
          className={`w-3 h-3 rounded-[3px]`}
        ></div>
        <span className="text-btn-dark-grey text-xs md:text-base">{title}</span>
      </div>
      {percentage ? (
        <span className="hidden md:blocktext-base font-bold">
          {percentage} %,
          <span className="text-sm font-normal"> total 552 jam</span>
        </span>
      ) : null}
      {minutes ? (
        <span className="text-xs md:text-sm">
          rata-rata: <span className="font-bold">{minutes}</span>
        </span>
      ) : null}
    </div>
  );
};

export default DoughnutLegend;
