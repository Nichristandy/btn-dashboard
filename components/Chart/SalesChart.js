import { Transition } from "@headlessui/react";
import { useEffect, useState } from "react";

const salesData = [
  {
    cabang: "KC Jakarta Pusat",
    sale: 4823,
  },
  {
    cabang: "KC Jakarta Selatan",
    sale: 3457,
  },
  {
    cabang: "KC Jakarta Utara",
    sale: 2862,
  },
  {
    cabang: "KCP Jakarta Kuningan",
    sale: 2344,
  },
  {
    cabang: "KCP Jakarta Melawai",
    sale: 1988,
  },
  {
    cabang: "KCP Kebon Jeruk",
    sale: 1262,
  },
  {
    cabang: "KC Kelapa Gading Square",
    sale: 562,
  },
  {
    cabang: "KCP Depok Barat",
    sale: 472,
  },
  {
    cabang: "KC Manado Timur",
    sale: 374,
  },
  {
    cabang: "KCP Ambon",
    sale: 322,
  },
  {
    cabang: "KCP Banda Aceh",
    sale: 252,
  },
  {
    cabang: "KCP Bandar Lampung",
    sale: 189,
  },
  {
    cabang: "KCP Bandung Timur",
    sale: 144,
  },
  {
    cabang: "KCP Kediri",
    sale: 126,
  },
  {
    cabang: "KCP Kendari",
    sale: 72,
  },
  {
    cabang: "KCP Mojokerto",
    sale: 52,
  },
  {
    cabang: "KC Mulyosari",
    sale: 32,
  },
  {
    cabang: "KC Padang",
    sale: 18,
  },
  {
    cabang: "KC Medan",
    sale: 12,
  },
];

const label = [0, 1000, 2000, 3000, 4000, 5000];

// "btn-yellow": "#F6B945",
// "btn-blue": "#0067AC",
// "btn-dark-grey": "#5F6368",
// "btn-light-grey": "#A7ADAF",
// "btn-green": "#07C776",
// "btn-red": "#E10000",

function maxValue() {
  return Math.max(...label);
}

function chartColor(data) {
  if (data >= 3000) {
    return "#0067AC";
  } else if (data < 3000 && data >= 1000) {
    return "#07C776";
  } else if (data < 1000 && data >= 200) {
    return "#F6B945";
  } else if (data > 0 && data < 200) {
    return "#E10000";
  }
}

const SalesChart = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isPadding, setIsPadding] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsVisible(true);
    }, 300);
  }, []);

  const progressWidth = (sale) => {
    return `${(sale / maxValue()) * 100}`;
  };

  return (
    <>
      <div className="flex  flex-col gap-[5px] mt-3">
        {salesData.map(({ cabang, sale }) => (
          <div
            key={cabang}
            className="w-full gap-[10px] flex flex-row items-center pb-[5px] border-b border-b-btn-light-grey font-roboto"
          >
            <span className="text-xs text-[#525B66] text-right min-w-3/12 w-3/12 max-w-3/12">
              {cabang}
            </span>

            <div className="w-9/12 flex flex-row items-center gap-[10px]">
              {sale != 0 ? (
                <div
                  style={{
                    width: isVisible ? `${progressWidth(sale)}%` : "0",
                    transition: "width 0.5s ease-in-out",
                    backgroundColor: `${chartColor(sale)}`,
                  }}
                  className={`h-4 flex items-center rounded-r-full`}
                ></div>
              ) : null}
              <span
                style={{
                  opacity: isVisible ? "1" : "0",
                  transition: "opacity 1s ease-in-out ",
                }}
                className="font-bold text-xs"
              >
                {sale}
              </span>
            </div>
          </div>
        ))}
        <div className="flex flex-row  justify-between mt-3 mb-2 text-xs text-[#525B66] items-center">
          <div className="flex flex-row w-1/4 ml-2 justify-end">
            <span>0</span>
          </div>
          <div className="flex flex-row justify-end  gap-8">
            <span>1000</span>
            <span>2000</span>
            <span>3000</span>
            <span>4000</span>
            <span>5000</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default SalesChart;
