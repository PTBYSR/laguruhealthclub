import Subline from "@/components/icons/Subline";
import Button from "@/components/ui/Button/Button";
import React from "react";
// import img from "../../../../public/white-shirt.jpg";
import Image from "next/image";
import clsx from "clsx";
import Banner1 from "../Banner1/Banner1";

const Card = ({ label, title, body, buttonText, id, img, className }: any) => {
  return (
    <div className={clsx(
      [className],
      "flex  md:h-[540px]  bg-dark flex-col-reverse md:flex-row",
      label === "privacy" && ["md:flex-row"],
      label === "combat" && ["md:flex-row"],
      // @ts-ignore
      label ===  id % 2 === 0 && ["md:flex-row"],
      // label ===  id % 2 !== 0 && ["md:flex-row-reverse"],
      label === "our mission" && ["md:flex-row"],
      label === "fitness" && ["md:flex-row-reverse"],
      label === "group sessions" && ["md:flex-row-reverse"],
      label === "our story" && ["md:flex-row-reverse"],
      title === "classes" && ["flex-row-reverse"],
      label === "our mission" && ["flex-row-reverse"],
    )}>
      <div className="md:w-1/2  p-10 pt-10">
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2">
            <Subline />
            <div className="uppercase text-purple font-inter text-xs font-medium tracking-[1.4px]">
              {label ? label : "welcome"}
            </div>
          </div>
          <div className="text-white uppercase text-2xl md:text-3xl font-semibold italic leading-[39px] md:leading-[45px]">
            {title ? title : "Dedicated to igniting your passion for health"}
          </div>
        </div>
        <div className="text-sm text-white opacity-70 font-light font-inter my-10 leading-[27px] ">
          {body
            ? body
            : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, quaerat! Ducimus facere dolore veritatis alias debitis itaque placeat in est!"}
        </div>
        <div>
          <Button>{buttonText ? buttonText : "get started"}</Button>
        </div>
      </div>
      <div className="md:w-1/2 overflow-hidden relative  md:px-0 px-5 pt-20">
        <Image priority src={img} alt="gym member gyming" className="md:hidden"/>
        <Image priority src={img} alt="gym member gyming" layout="fill" className="md:block hidden"/>
      </div>
    </div>
  );
};

export default Card;
