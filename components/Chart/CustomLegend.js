const CustomLegend = ({ boxColor, title, percentage, minutes }) => {
  return (
    <div className="w-full flex flex-col gap-1 font-nunitoSans">
      <div className="flex flex-row items-center gap-2">
        <div className={`w-3 h-3 rounded-[3px] bg-[${boxColor}]`}></div>
        <span className="text-btn-dark-grey">{title}</span>
      </div>
      {percentage ? (
        <span className="text-base font-bold">
          {percentage} %,
          <span className="text-sm font-normal"> total 552 jam</span>
        </span>
      ) : null}
      {minutes ? <span className="text-sm">{minutes}</span> : null}
    </div>
  );
};

export default CustomLegend;
