import React from "react";

const Plus = ({w="16",h="15",fill="white", className}:any) => {
  return (
    <svg
      width="16"
      height="15"
      viewBox="0 0 16 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M15.0299 8.53624L15.0299 6.68616L8.92504 6.68616L8.92504 0.58129H7.07496L7.07496 6.68616L0.970087 6.68616L0.970088 8.53624L7.07496 8.53624V14.6411H8.92504V8.53624L15.0299 8.53624Z"
        fill="white"
      />
    </svg>
  );
};

export default Plus;
