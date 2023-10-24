const DateButton = ({ date }) => {
  return (
    <button className="py-[10px] px-3 rounded-[5px] bg-white border border-black/10 w-7/12 flex flex-row items-center gap-[10px]">
      <span className="text-[#16191D] font-sans font-medium">{date}</span>
    </button>
  );
};

export default DateButton;
