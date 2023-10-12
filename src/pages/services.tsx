import { Meta } from "@/layouts/Meta";
import { Main } from "@/templates/Main";
import Image from "next/image";
import React from "react";
import landing from "../../public/white-shirt.jpg";
import landing1 from "../../public/servies-mb.png";
import Subline from "@/components/icons/Subline";
import { getServices, getServicesBig, services } from "../../db/Services/services";
import Card from "@/components/common/Card/Card";
import Banner1 from "@/components/common/Banner1/Banner1";
import Faqs from "@/components/interface/Faqs/Faqs";


export const getServerSideProps = async () => {
  const res = await getServices()
  const bigbanners = await getServicesBig()
  return { props: { servicebanner : res , bigbanners} }
  
}


const Services = ({servicebanner, bigbanners } : any) => {
  console.log(bigbanners[0], "big banner")
  // console.log(servicebanner, 'from now')
  return (
    <Main
      meta={
        <Meta
          title="Laguru Health Club - Welcome"
          description="1# Abuja Wellness Center"
        />
      }
    >
      <div className=" top-0 absolute -z-10 hidden md:block">
        <Image priority src={landing} alt="" width={1500} />
      </div>
      <div className=" top-0 -left-[40px] absolute -z-10 md:hidden block bg-dark w-[500px]">
        <Image priority src={landing1} alt=""  className="opacity-60"/>
      </div>
      <div className="h-[250px] md:h-[400px] w-full px-5 flex justify-center flex-col">
        <div className="flex items-center gap-2">
          <Subline />
          <div className="uppercase text-purple font-inter text-xs font-medium tracking-[1.4px]">
            what do we offer
          </div>
        </div>
        <div className="text-white uppercase text-3xl md:text-5xl italic font-bold leading-[80px]">
          our services
        </div>
      </div>

      <Banner1 services={servicebanner}/>

      <section>
        
        {
          bigbanners.map((x:any) => (
            <>
            <Card label={x?.label} key={x?.id} title={x?.title} body={x?.description} img={x?.img}/>
            </>
          ))
        }



      </section>
      <Faqs/>
    </Main>
  );
};

export default Services;
