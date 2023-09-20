import React from "react";
import { faqItem } from "../../../../db/homepage/Faqs.utils";
import Plus from "@/components/icons/Plus";

const Faqs = () => {
  return (
    <div className=" w-full bg-purple py-24 md:py-32 px-5">
      <div className="text-white italic uppercase text-2xl font-bold text-center">
        Frequently asked questions
      </div>
      <div className="mt-10 flex flex-col gap-5  items-center justify-center font-inter">
        {faqItem.map((x) => (
          <div
            key={x.id}
            className="flex  justify-between items-center flex-row w-full md:w-[550px] border border-white border-opacity-60 py-4 px-5 text-white"
          >
            <div>{x.title}</div>
            <Plus />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Faqs;
