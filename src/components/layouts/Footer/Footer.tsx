import React from "react";
import { navLinks } from "../Navbar/Navlinks";
import { services } from "../../../../db/Services/services";
import Link from "next/link";

const socials = [
  {
    id: 1,
    title: "Instagram",
    href: "",
  },
  {
    id: 1,
    title: "Linkedin",
    href: "",
  },
  {
    id: 1,
    title: "Facebook",
    href: "",
  },
];

const Footer = () => {
  return (
    <footer className=" bg-darker  border-t-white border-opacity-50 border-t ">
      <div className="flex md:flex-row flex-col text-center">
        <div className="border-opacity-50 border-b border-white md:border-none md:mr-40 py-20 md:pl-10">
          <div className=" text-white uppercase text-xl font-semibold italic leading-[45px]">
            Quick Links
          </div>
          <ul className="h-full  flex flex-col gap-5 mt-10">
            {navLinks?.map((navlink) => (
              <li key={navlink.id} className="">
                <Link href={navlink.href}>
                  <div className="uppercase font-light text-white font-inter opacity-60 text-sm tracking-[2.2px] ">
                    {navlink.title}
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="md:mr-40 border-b border-white py-20 md:pl-16 md:border-l-white border-opacity-50 md:border-l">
          <div className="text-white uppercase text-xl font-semibold italic leading-[45px]">
            Services
          </div>
          <ul className="h-full  flex flex-col gap-5 mt-10">
            {services?.map((x) => (
              <li key={x.id} className="">
                <Link href={x.href}>
                  <div className="uppercase font-light text-white font-inter opacity-60 text-sm tracking-[2.2px] ">
                    {x.title}
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="py-20 md:pl-16 md:border-l-white border-opacity-50 md:border-l">
          <div className="text-white uppercase text-xl font-semibold italic leading-[45px]">
            Socials
          </div>
          <ul className="h-full  flex flex-col gap-5 mt-10">
            {socials?.map((x) => (
              <li key={x.id} className="">
                <Link href={x.href}>
                  <div className="uppercase font-light text-white font-inter opacity-60 text-sm tracking-[2.2px] ">
                    {x.title}
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="px-5 md:flex-row md:gap-0 gap-10 md:py-0 py-10 flex-col justify-between border-t-white border-t border-opacity-50 md:h-[70px] flex items-center">
        <div className="flex gap-2 md:flex-row flex-col text-center">
            <div className="uppercase font-light text-white font-inter opacity-60 text-sm tracking-[2.2px] ">
              all rights reserved 2023 lhc.
            </div>
            <div className="opacity-100 uppercase font-light text-white font-inter  text-sm tracking-[2.2px] ">
              {" "}
              powered by pasedigital
            </div>
        </div>
        <div className="flex gap-2 md:flex-row flex-col text-center">
            <div className="uppercase font-light text-white font-inter opacity-60 text-sm tracking-[2.2px] ">
              tel no.
            </div>
            <div className="opacity-100 uppercase font-light text-white font-inter  text-sm tracking-[2.2px] ">
              {" "}
              070-664-995-37
            </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
