import Link from "next/link";
import React from "react";

const Button = ({ children, href, signup }: any) => {
  return (
    <>
      {signup ? (
        <div
          
          className="z-[10] inline-block hover:text-black hover:bg-white hover:text-darker border-white border-2 py-4 px-6 inter text-xs text-white font-medium tracking-[1.4px]"
        >
          <button className="uppercase">{children}</button>
        </div>
      ) : (
        <Link
          href={href ? href : "/join"}
          className="z-[10] hover:text-black hover:bg-white hover:text-darker border-white border-2 py-4 px-6 inter text-xs text-white font-medium tracking-[1.4px]"
        >
          <button className="uppercase">{children}</button>
        </Link>
      )}
    </>
  );
};

export default Button;
