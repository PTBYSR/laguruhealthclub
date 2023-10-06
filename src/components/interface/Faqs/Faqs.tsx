import React, {useState} from "react";
import { faqItem } from "../../../../db/homepage/Faqs.utils";
import Plus from "@/components/icons/Plus";

const Faqs = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const toggleAccordion = (index:any) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };
  
  return (
    <div className=" w-full bg-purple py-24 md:py-32 px-5">
      <div className="text-white italic uppercase text-2xl font-bold text-center">
        Frequently asked questions
      </div>
      <div className="mt-10 flex flex-col gap-5  items-center justify-center font-inter">
        {faqItem.map((x,index) => (
          <>
            <div
            onClick={() => toggleAccordion(index)}
              key={index}
              className="flex  justify-between items-center flex-row w-full md:w-[550px] border border-white border-opacity-60 py-4 px-5 text-white"
            >
              <div>{x.title}</div>
              <div >
                <Plus />
              </div>
            
            </div>
            <div className={`
            ${
              openIndex === index ? 'h-auto p-5' : 'h-0'
            }
            bg-[#8e7ba5] text-white text-xs w-full transition-height ease-in-out duration-300 overflow-hidden`}>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure, dicta.
            </div>
          </>
        ))}
      </div>
    </div>
  );
};

export default Faqs;
