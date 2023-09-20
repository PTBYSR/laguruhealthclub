import Subline from "@/components/icons/Subline";
import Button from "@/components/ui/Button/Button";
import Input from "@/components/ui/Input/Input";
import { Meta } from "@/layouts/Meta";
import { Main } from "@/templates/Main";
import React from "react";
import landing from '../../public/join-landing.png'
import Image from "next/image";

const Join = () => {
  return (
    <Main
      meta={
        <Meta
          title="Laguru Health Club - Welcome"
          description="1# Abuja Wellness Center"
        />
      }
    >
      <div className="bg-dark flex md:flex-row flex-col-reverse">
        <div className="md:w-1/2 flex flex-col gap-10 py-20 px-5 md:px-14">
          <div>
            <div className="flex items-center gap-2">
              <Subline />
              <div className="uppercase text-purple font-inter text-xs font-medium tracking-[1.4px]">
                membership
              </div>
            </div>
            <div className="text-white uppercase md:text-5xl text-3xl font-semibold italic leading-[39px] md:leading-[45px] md:w-2/3">
              start your wellness journey today!
            </div>
          </div>
          <div className="text-white opacity-60 text-lg md:w-2/3">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Recusandae
            pariatur nihil inventore, temporibus illo beatae!
          </div>
          <div>
            <form className="w-full">
              <div className="flex md:gap-4 md:flex-row flex-col w-full">
                <Input label="First Name" />
                <Input label="Last Name" />
              </div>
              
              <div>
                <Input label="Email" />
              </div>
              <div>
                <Input label="Phone Number" />
              </div>
            </form>
          </div>
          <div>
            <Button>submit</Button>
          </div>
        </div>
        <div className="md:w-1/2 overflow-hidden flex justify-center items-center">
          <Image priority src={landing} alt="" />
        </div>
      </div>
    </Main>
  );
};

export default Join;
