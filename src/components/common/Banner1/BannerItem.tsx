import Running from "@/components/icons/Running";
import Image from "next/image";
import React from "react";
 
const BannerItem = ({ icon, title, body }:any) => {
  return (
    <div className="flex-1 py-10 px-5 md:bg-white md:border-b-dark border-b-white border-b  border-opacity-25 md:border-l md:border-l-darker md:border-opacity-10">
      <div className="flex flex-row gap-3 items-center">
        <div>
          
          {
            icon ? (
              icon
            ) : (

              <Running w="25" />
            )
          }
        </div>
        <div>
          <div>

          </div>
          <div className="md:text-darker text-white italic text-xl uppercase font-bold">
            {title}
          </div>
        </div>
      </div>
      <div className="mt-2">
        <div className="text-xs md:w-auto text-white md:text-dark md:text-opacity-60 text-opacity-75 ">
          {body}
          
        </div>
      </div>
    </div>
  );
};
 
export default BannerItem;
