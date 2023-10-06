import React, { useState } from "react";
import logo from "../../../../public/logo.png";
import Image from "next/image";
import Link from "next/link";
import { navLinks } from "./Navlinks";
import Hamburger from "@/components/icons/Hamburger";
import clsx from "clsx";
import { useRouter } from "next/router";

const Navbar = () => {
  const router = useRouter();
  const currentRoute = router.pathname
  console.log(currentRoute, "fjadjfdofahdufhafduhafioudhfiasufhduifshaiufdh")
  const [open, isOpen] = useState(false);
  const toggleMenu = () => {
    isOpen(!open);
  };
  return (
    <nav className={`${currentRoute === '/join' ? 'bg-darker text-white' : ' md:bg-opacity-60'} sticky top-0 bg-purple md:bg-darker  z-[100000] flex  justify-between h-[70px] md:h-[115px] pl-4 md:pl-10 items-center md:border-b-white border-b-white border-b border-opacity-60  `}>
      <div
        onClick={() => {
          isOpen(false);
          console.log("hihii");
        }}
        className={clsx(
          [
            " w-screen absolute bg-darker h-screen top-0 right-0 opacity-25 z-20 md:hidden",
          ],
          !open ? ["hidden"] : ["block"]
        )}
      ></div>

      <Link href="/">
        <div className="md:w-[100px] w-[60px] ">
          <div className="text-white font-black">LHC</div>
        </div>
      </Link>

      <div
        className={clsx(
          ["h-full items-center md:bg-opacity-0 bg-darker md:hidden flex"],
          !open ? ["hidden"] : ["block"]
        )}
      >
        <ul className="mt-[70px] md:mt-0 md:h-full flex md:flex-row flex-col md:w-auto w-full md:border-none right-0 md:static absolute top-0 items-center z-20">
          {navLinks?.map((navlink) => (
            <>
              <li
                key={navlink.id}
                className="md:border-l  md:border-b-0  border-b w-full md:border-darker border-opacity-60 border-white md:w-auto  md:py-0 h-[70px] justify-center  px-6 md:h-full flex items-center bg-dark md:bg-opacity-0"
              >
                <Link href={navlink.href}>
                  <div className="uppercase text-white font-inter flex  text-xs font-medium tracking-[1.4px] font-semibold">
                    {navlink.title}
                  </div>
                </Link>
              </li>
            </>
          ))}
          <li className="md:hidden md:border-l  md:border-b-0   w-full md:border-white border-opacity-60 border-white md:w-auto  md:py-0 h-[70px] justify-center  px-6 md:h-full flex items-center bg-purple md:bg-opacity-0">
            <Link href="/join">
              <div className="uppercase text-white font-inter flex  text-xs font-medium tracking-[1.4px] font-semibold">
                become a member
              </div>
            </Link>
          </li>
        </ul>
        <button className="bg-purple h-full px-6 md:block hidden">
          <Link href={"/join"}>
            <div className="uppercase text-white font-inter text-xs font-medium tracking-[1.4px] ">
              become a member
            </div>
          </Link>
        </button>
      </div>

      <button
        onClick={toggleMenu}
        className="md:hidden flex justify-center items-center border-l border-white border-opacity-60 h-full w-[70px]"
      >
        <Hamburger />
      </button>
      <div
        className={clsx([
          "h-full items-center md:bg-opacity-0 bg-darker md:flex hidden",
        ])}
      >
        <ul className="mt-[70px] md:mt-0 md:h-full flex md:flex-row flex-col md:w-auto w-full md:border-none right-0 md:static absolute top-0 items-center z-20">
          {navLinks?.map((navlink) => (
            <>
              <Link href={navlink.href} className="hover:text-white hover:bg-darker md:border-l  md:border-b-0  border-b w-full md:border-white border-opacity-60 border-white md:w-auto  md:py-0 h-[70px] justify-center  px-6 md:h-full flex items-center bg-dark md:bg-opacity-0">
                <li
                  key={navlink.id}
                  className=""
                >
                  <div className="uppercase  font-inter flex  text-xs font-medium tracking-[1.4px] font-semibold text-white">
                    {navlink.title}
                  </div>
                </li>
              </Link>
            </>
          ))}
          <Link href="/join">
            <li className="md:hidden md:border-l  md:border-b-0   w-full md:border-darker border-opacity-60 border-white md:w-auto  md:py-0 h-[70px] justify-center  px-6 md:h-full flex items-center bg-purple md:bg-opacity-0">
              <div className="uppercase text-darker font-inter flex  text-xs font-medium tracking-[1.4px] ">
                become a member
              </div>
            </li>
          </Link>
        </ul>
        <button className="bg-purple h-full px-6 md:block hidden">
          <Link href={"/join"}>
            <div className="uppercase text-white font-inter text-xs font-medium tracking-[1.4px] ">
              become a member
            </div>
          </Link>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
