import Footer from "@/components/layouts/Footer/Footer";
import Navbar from "@/components/layouts/Navbar/Navbar";
import Image from "next/image";
import type { ReactNode } from "react";
import React from "react";
import landing from "../../public/landing.jpg";

type IMainProps = {
  meta: ReactNode;
  children: ReactNode;
};

const Main = (props: IMainProps) => (
  <div className=" overflow-hidden relative">
    <Navbar />
    {props.meta}
    <main>{props.children}</main>
    <Footer />
  </div>
);

export { Main };
