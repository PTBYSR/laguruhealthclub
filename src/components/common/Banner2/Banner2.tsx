import Subline from "@/components/icons/Subline";
import React from "react";
import BannerItem from "./BannerItem";
import Running from "@/components/icons/Running";
import Ride from "@/components/icons/Ride";
import Cardio from "@/components/icons/Cardio";
import Lift from "@/components/icons/Lift";
import Monk from "@/components/icons/Monk";



const items = [
  {
    id: 1,
    title: "The Ride",
    body: "",
    icon: <Ride  fill="#624C7B"/>,

  },
  {
    id: 2,
    title: "Yoga",
    body: "",
    icon: <Monk  fill="#624C7B"/>,

  },
  {
    id: 3,
    title: "Cardio",
    body: "",
    icon: <Cardio fill="#624C7B"/>,

  },
  {
    id: 4,
    title: "Spot",
    body: "",
    icon: <Lift  fill="#624C7B"/>

  },
]

const Banner2 = () => {
  return (
    <div className="py-28 mx-5">
      <div className="mb-20">
        <div className="flex justify-center items-center gap-2 mb-2">
          <Subline />
          <div className="uppercase text-purple font-inter text-xs font-medium tracking-[1.4px]">
              group
            </div>
          <Subline/>
        </div>
        <div className="text-center text-dark uppercase text-3xl font-bold italic leading-[45px]">
        Energy is for Everyone
        </div>
      </div>
      <div className="flex w-full md:flex-row flex-col md:gap-0 ">
        {
          items.map((x) => (
            <>
            <BannerItem key={x.id} title={x.title} icon={x.icon}/>
            </>
          ))
        }
      </div>
    </div>
  );
};

export default Banner2;
