import { Meta } from "@/layouts/Meta";
import { Main } from "@/templates/Main";
import React from "react";
import landing from "../../public/dumbell.png";
import landing1 from "../../public/dumbell.jpg";
import Image from "next/image";
import Subline from "@/components/icons/Subline";
import Card from "@/components/common/Card/Card";
import Testimonial from "@/components/interface/Testimonial/Testimonial";
import Faqs from "@/components/interface/Faqs/Faqs";
import tyre from '../../public/tyre.png'
import hand from '../../public/hand.png'

const About = () => {
  return (
    <Main
      meta={
        <Meta
          title="Laguru Health Club - Welcome"
          description="1# Abuja Wellness Center"
        />
      }
    >
      <div className="border  bg-darker md:hidden  md:top-0 absolute -z-10">
        <Image priority src={landing} alt=""  />
      </div>
      <div className="border md:block hidden top-[45px] md:top-0 absolute -z-10">
        <Image priority src={landing1} alt="" width={1500} />
      </div>
      <header className="h-[250px] md:h-[400px] w-full px-5 flex justify-center flex-col">
        <div className="flex items-center gap-2">
          <Subline />
          <div className="uppercase text-purple font-inter text-xs font-medium tracking-[1.4px]">
            what do we offer
          </div>
        </div>
        <div className="text-white uppercase text-3xl md:text-5xl italic font-bold leading-[80px]">
          About us
        </div>
      </header>

      <div className="bg-dark md:py-20">
        <Card
        img={tyre}
          label="our story"
          title="The Laguru Health Club training story"
          body={
            <p>
              Neque ornare pellentesque mus in nisi, mi, ac. Morbi volutpat
              velit id adipiscing mollis. Quisque bibendum vehicula eget ac
              fringilla non nec. <br />
              Sed vitae faucibus tristique nisl, tincidunt nec consequat
              ullamcorper. Eu volutpat lacus lacus porttitor sed nunc. Sed nunc
              vel massa eget egestas. Non sapien cursus risus lorem. Adipiscing
              eu a penatibus ac viverra cras diam feugiat ornare. Gravida nibh
              at bibendum cras massa. Vitae proin convallis enim nunc libero.
              Lacus aenean vestibulum.
            </p>
          }
        />
      </div>

      <Testimonial />
      <Faqs />
      <div  className="bg-dark py-20">

      <Card img={hand} label="our mission" title="Wellness is the mission"/>
      </div>
    </Main>
  );
};

export default About;
