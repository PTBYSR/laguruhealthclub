import Running from "@/components/icons/Running";
import React from "react";

const BannerItem = ({title,body,icon}:any) => {
  return (
    <div className="pt-10 px-6  bg-white pb-14 border-b border-b-dark md:border-b-0  border-opacity-20 md:border-l md:border-l-darker md:border-opacity-10">
      <div className="flex flex-col justify-center items-center">
        <div>
          <div className="md:block hidden">
            {/* <Icon w="25"/> */}
          </div>
          {/* <Icon w="40" /> */}
        </div>
        {
          icon
        }
        <div className="md:mb-0 mb-4 text-dark leading-8 italic text-xl uppercase font-bold text-center">
          {title}
        </div>
      </div>
      <div className="mt-1">
        <div className="text-sm text-center text-darker opacity-60">
          {body}
        </div>
      </div>
    </div>
  );
};

export default BannerItem;
