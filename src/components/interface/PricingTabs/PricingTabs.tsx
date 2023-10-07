import React, { useState } from "react";

// const couples = [
//   {
//     id: 1,
//     title: "3 months",
//     pricing: "₦110,000",
//   },
//   {
//     id: 2,
//     title: "6 months",
//     pricing: "₦200,000",
//   },
//   {
//     id: 3,
//     title: "1 year",
//     pricing: "₦320,00",
//   },
// ];

// const singles = [
//   {
//     id: 1,
//     title: "1 day",
//     pricing: " ₦2,000",
//   },
//   {
//     id: 2,
//     title: "2 weeks",
//     pricing: " ₦15,000",
//   },
//   {
//     id: 3,
//     title: "1 month",
//     pricing: " ₦25,000",
//   },
//   {
//     id: 4,
//     title: "3 months",
//     pricing: " ₦60,000",
//   },
//   {
//     id: 5,
//     title: "6 months",
//     pricing: " ₦110,000",
//   },
//   {
//     id: 6,
//     title: "1 day",
//     pricing: " ₦185,000",
//   },
// ];

const PricingTabs = ({singles,couples}:any) => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index:any) => {
    setActiveTab(index);
  };

  return (
    <div className="md:w-auto w-full  mt-20 md:px-10">
      <div className="flex border-white border-opacity-60 border px-2 md:gap-10 md:px-10 md:justify-start justify-between">
        <div className="uppercase font-roboto text-white items-center flex opacity-60 md:text-sm text-xs">
          Categories :
        </div>
        <div className="">
          <button
            className={activeTab === 0 ? "active" : ""}
            onClick={() => handleTabClick(0)}
          >
            Singles
          </button>
          <button
            className={activeTab === 1 ? "active" : ""}
            onClick={() => handleTabClick(1)}
          >
            Couples
          </button>
          {/* <button
            className={activeTab === 2 ? "active" : ""}
            onClick={() => handleTabClick(2)}
          >
            Tab 3
          </button> */}
        </div>
      </div>

      <div className="content md:w-2/3">
        {activeTab === 0 && (
          <div className="text-white font-inter">
            <table className="w-full">
              <thead className="">
                <tr>
                  <th className="text-left md:pl-10 py-8 text-xl uppercase ">
                    Duration
                  </th>
                  <th className="text-right md:pr-10 py-8 text-xl uppercase ">
                    Price
                  </th>
                </tr>
              </thead>
              <tbody>
                {singles?.map((x:any, index:any) => (
                  <tr key={index}>
                    <td className="border text-white py-8 px-10 font-semibold">
                      {x?.duration ?? 'hrr'}
                    </td>
                    <td className="border py-8 px-10 text-right">
                    ₦{x?.pricing}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
        {activeTab === 1 && (
          <div>
            <div className="text-white font-inter">
              <table className="w-full">
                <thead className="">
                  <tr>
                    <th className="text-left md:pl-10 py-8 text-xl uppercase">
                      Duration
                    </th>
                    <th className="text-right md:pr-10 py-8 text-xl uppercase">
                      Price
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {couples.map((x:any, index:any) => (
                    <tr key={index}>
                      <td className="border py-8 px-10 font-semibold">
                        {x.duration}
                      </td>
                      <td className="border py-8 px-10 font-semibold text-right">
                      ₦{x.pricing}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
        {activeTab === 2 && <div>Content for Tab 3</div>}
      </div>

      <style jsx>{`
        .flex {
          display: flex;
        }
        button {
          font-family: "inter";
          padding: 20px 20px;
          margin: 0 4px;
          color: rgba(255, 255, 255, 0.4);
        }
        button.active {
          background-color: none;
          color: white;
          border-bottom: solid rgba(255, 255, 255, 0.4);
          border-opacity: 70;
        }
        .content {
          margin-top: 20px;
        }
      `}</style>
    </div>
  );
};

export default PricingTabs;
