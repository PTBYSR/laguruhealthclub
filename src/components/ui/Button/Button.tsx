import Link from "next/link";
import React from "react";

const Button = ({ children, href }: any) => {
  return (
    <>
      <Link
        href={href ? href : "/member"}
        className="z-[10] hover:text-black hover:bg-white hover:text-darker border-white border-2 py-4 px-6 inter text-xs text-white font-medium tracking-[1.4px]"
      >
        <button className="uppercase">{children}</button>
      </Link>
    </>
  );
};

export default Button;
