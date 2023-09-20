import React from "react";

const Subline = ({h,w,fill="#624C7B"}:any) => {
  return (
    <svg
      width={w | 26}
      height={h | 3}
      viewBox="0 0 26 3"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect y="0.0898438" width="26" height="2" fill={fill} />
    </svg>
  );
};

export default Subline;
