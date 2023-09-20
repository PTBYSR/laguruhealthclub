import Button from "@/components/ui/Button/Button";
import React from "react";
import img from "../../../../public/dumbell.jpg"
import Image from "next/image";

const BlogCard = () => {
  return (
    <div className="flex flex-col w-full md:w-[370px] border-white border-opacity-60 border">
      <div className="h-[275px] border w-full overflow-hidden relative">
        <div className="w-[490px] h-[490px] absolute -left-[55px]">

        <Image priority src={img} alt="man carrying dumbell"/>
        </div>
      </div>
      <div className="h-[290px] border w-full bg-darker px-9 py-6 flex flex-col justify-between">
        <div>
            <div className="leading-8 italic text-xl text-white uppercase font-bold ">
              membership
            </div>
          <div className="flex items-baseline gap-2">
            <div className="uppercase text-purple italic font-bold text-lg">$99.00 USD</div>
            <div className="text-xs font-inter text-white opacity-50 ">per month</div>
          </div>
        </div>
        <div className="text-sm opacity-60 text-white font-inter font-light">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore, quisquam.
        </div>
        <div>
            <Button>
                learn more
            </Button>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
