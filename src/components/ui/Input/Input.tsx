import React from "react";

const Input = ({ label, type, id, name, value, onChange }: any) => {
  return (
    <div className="w-full border flex border-white border-opacity-60 py-4 px-3 bg-dark mb-4 ">
      {/* <label className="text-white text-opacity-60 ">{label}</label> */}
      <input required placeholder={label} className=" bg-dark outline-none text-white" />
    </div>
  );
};

export default Input;
