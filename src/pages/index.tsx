import Image from "next/image";
import { Inter } from "next/font/google";
import Navbar from "@/components/layouts/Navbar/Navbar";
import Banner1 from "@/components/common/Banner1/Banner1";
import Button from "@/components/ui/Button/Button";
import Card from "@/components/common/Card/Card";
import { cardItems } from "../../db/homepage/Card.utils";
import Banner2 from "@/components/common/Banner2/Banner2";
import Subline from "@/components/icons/Subline";
import BlogCard from "@/components/common/BlogCard/BlogCard";
import Footer from "@/components/layouts/Footer/Footer";
import { Main } from "@/templates/Main";
import { Meta } from "@/layouts/Meta";
import Faqs from "@/components/interface/Faqs/Faqs";
import landing from "../../public/landing.jpg";
import landing1 from "../../public/home-mb.png";
import map from "../../public/map.png";
import PricingCalc from "@/components/common/PricingCalc/PricingCalc";
import { getServices, getLocation, getSingles, getCouples } from "../../db/Services/services";
import PricingTabs from "@/components/interface/PricingTabs/PricingTabs";

const inter = Inter({ subsets: ["latin"] });

export const getServerSideProps = async () => {
  const res = await getServices()
  const res2 = await getLocation()
  const res3 = await getSingles()
  const res4 = await getCouples()
  console.log("singles from getserver", res3)
  return { props: { servicebanner : res, location : res2 , singles : res3, couples : res4} }


}



export default function Home({ servicebanner, location, singles, couples } : any) {

  console.log(servicebanner, "hkkkhkhkkhkhkhkhkhk")
  console.log(singles, "singggg")
  console.log(location.attributes.address, "locationnnn")
  return (
    <Main
      meta={
        <Meta
          title="Laguru Health Club - Welcome"
          description="1# Abuja Wellness Center"
        />
      }
    >
      <div className=" top-0 absolute -z-10 hidden  md:block">
        <Image priority src={landing} alt="" width={1500} />
      </div>
      <div className=" top-0 -left-[40px] absolute -z-10 md:hidden block bg-dark w-[500px]">
        <Image priority src={landing1} alt="" className="opacity-60" />
      </div>
      <main className="relative ">
        <section id="landing" className="bg-darker bg-opacity-60">
          <div className="h-[600px] px-5 flex gap-10 flex-col justify-center">
            <h1 className="italic text-white text-3xl md:text-5xl uppercase font-bold leading-[48px] md:leading-[70px]">
              empower your <br />
              wellness journey
              <br /> at laguru
            </h1>
            <div className="md:w-1/2">
              <p className="text-white opacity-75 text-lg leading-[31px]">
                Get real results at Laguru Health Club with a plan tailored to
                your needs. Your fitness and health are important to us.
              </p>
            </div>
            <div>
              <Button>Get Started</Button>
            </div>
          </div>
          <Banner1 services={servicebanner}/>
        </section>

        <section id="services">
          {cardItems.map((x) => (
            <Card
              key={x.id}
              label={x.label}
              title={x.title}
              body={x.body}
              buttonText={x.buttonText}
              img={x.img}
            />
          ))}
        </section>

        <section id="banner2">
          <Banner2 />
        </section>

        <Faqs />

        <section id="blogs" className="bg-darker py-24 md:py-40 px-5">
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2">
              <Subline />
              <div className="uppercase text-purple font-inter text-xs font-medium tracking-[1.4px]">
                pricing
              </div>
            </div>
            <div className="text-white uppercase text-3xl font-semibold italic leading-[45px]">
              pricing tailored <br /> to your needs
            </div>
          </div>
          {/* <div className="flex justify-between mt-20 md:flex-row flex-col md:gap-0 gap-10">
            <BlogCard />
            <BlogCard />
            <BlogCard />

            
          </div> */}
          <PricingTabs singles={singles}  couples={couples}/>
        </section>

        <section>
          <div className=" bg-dark py-24 px-5 flex md:flex-row flex-col-reverse justify-center gap-20">
            <div className="md:w-[450px]">
              <Image src={map} alt="map" />
            </div>
            <div className="flex flex-col gap-2 justify-center md:w-[400px]">
              <div className="flex items-center gap-2">
                <Subline />
                <div className="uppercase text-purple font-inter text-xs font-medium tracking-[1.4px]">
                  location
                </div>
              </div>
              <div className="text-white uppercase text-3xl font-semibold italic leading-[45px]">
                find your gym
              </div>
              <div className="text-sm text-white opacity-70 font-light font-inter my-5 leading-[27px] ">
              Prime location, accessible and convenient for your fitness journey.
              </div>
              <div className="border-white border border-opacity-60 py-7 px-8">
                <div className="text-lg text-white mb-4">
                 {location.attributes.address}
                </div>
                <div className="text-white opacity-60">{location.attributes.city}</div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </Main>
  );
}
