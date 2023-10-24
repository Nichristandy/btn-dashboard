import Card from "./Card";

const InformationCard = ({ children, Title, text1, text2 }) => {
  return (
    <Card>
      <div className="px-[6px] py-2 flex flex-col gap-2  avenir">
        <span className="text-[14px] text-btn-dark-grey">{Title}</span>
        <div className="flex flex-row items-center gap-[10px]">
          <span className=" text-4xl font-bold">
            {text1}
            <span className="text-2xl text-btn-light-grey">{text2}</span>
          </span>
          {children}
        </div>
      </div>
    </Card>
  );
};

export default InformationCard;
