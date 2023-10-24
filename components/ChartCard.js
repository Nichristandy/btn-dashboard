import Card from "./Card";

const ChartCard = ({ title, detail, children, subTitle, legend1, legend2 }) => {
  return (
    <div>
      <Card>
        <div className="px-[10px] pr-3">
          <div className="w-full flex  flex-row items items-center justify-between pt-[5px] pb-5 border-b border-black/10 font-sans font-bold">
            <span className="flex flex-row items-center">
              <h1 className="text-[##27333C] mr-1">{title}</h1>
              {subTitle ? (
                <span className="text-btn-light-grey font-normal">
                  {subTitle}
                </span>
              ) : null}{" "}
            </span>
            <button className="text-btn-blue text-[14px]">{detail}</button>
          </div>
          <div className="w-full mt-5 flex flex-row flex-start items-start gap-6">
            {legend1 ? (
              <div className="w-1/4 flex flex-row items-center gap-2">
                <div className="w-2/12 bg-btn-blue rounded-2xl h-[2px]"></div>
                <span className="text-[14px] avenir font-medium">
                  {legend1}
                </span>
              </div>
            ) : null}
            {legend2 ? (
              <div className="w-1/4 flex flex-row items-center gap-2">
                <div className="w-2/12 bg-btn-yellow rounded-2xl h-[2px]"></div>
                <span className="text-[14px] avenir font-medium">
                  {legend2}
                </span>
              </div>
            ) : null}
          </div>
          {children}
        </div>
      </Card>
    </div>
  );
};

export default ChartCard;
