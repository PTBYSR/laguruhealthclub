import Subline from "@/components/icons/Subline";
import Button from "@/components/ui/Button/Button";
import Input from "@/components/ui/Input/Input";
import { Meta } from "@/layouts/Meta";
import { Main } from "@/templates/Main";
import landing from "../../public/join-landing.png";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { useRouter } from "next/router";
import { useFormspark } from "@formspark/use-formspark";

const Join = () => {
  const router = useRouter();
  const currentRoute = router.pathname;
  const [isSuccess, setSuccess] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    phoneNumber: "",
    firstName: "",
    lastName: "",
  });
  const [submit, submitting] = useFormspark({
    formId: "mboU3Aa2",
  });

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    console.log(formData.firstName);
    console.log([
      formData.firstName,
      formData.lastName,
      formData.email,
      formData.phoneNumber,
    ]);
    if (
      !formData.firstName ||
      !formData.lastName ||
      !formData.email ||
      !formData.phoneNumber
    ) {
      alert("Please fill all the fields.");
      return;
    }
    // Handle form submission here (e.g., send data to the server)
    console.log("Form Data:", formData);
    setSuccess(true);
    await submit({ formData });
    alert("Form submitted");
    router.push("https://paystack.com/pay/0x82xw1ex7");
    setTimeout(() => {
      setSuccess(false);
    }, 3000);
  };

  console.log(currentRoute, "currrrr");

  return (
    <Main
      meta={
        <Meta
          title="Laguru Health Club - Welcome"
          description="1# Abuja Wellness Center"
        />
      }
    >
      <div className="bg-dark flex md:flex-row flex-col-reverse">
        <div className="md:w-1/2 flex flex-col gap-10 py-20 px-5 md:px-14">
          <div>
            <div className="flex items-center gap-2">
              <Subline />
              <div className="uppercase text-purple font-inter text-xs font-medium tracking-[1.4px]">
                membership
              </div>
            </div>
            <div className="text-white uppercase md:text-5xl text-3xl font-semibold italic leading-[39px] md:leading-[75px] md:w-2/3">
              start your wellness journey today!
            </div>
          </div>
          <div className="text-white opacity-60 text-lg md:w-2/3">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Recusandae
            pariatur nihil inventore, temporibus illo beatae!
          </div>
          <div>
            <form className="w-full">
              <div className="flex md:gap-4 md:flex-row flex-col w-full">
                <input
                  className="w-full border flex border-white border-opacity-60 py-4 px-3 bg-dark mb-4"
                  placeholder="First Name"
                  type="firstName"
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                />
                <input
                  className="w-full border flex border-white border-opacity-60 py-4 px-3 bg-dark mb-4"
                  placeholder="Last Name"
                  type="lastName"
                  id="lastName"
                  name="lastName"
                  value={formData.firstName}
                  onChange={handleChange}
                />
              </div>

              <div>
                <input
                  placeholder="Email"
                  className="w-full border flex border-white border-opacity-60 py-4 px-3 bg-dark mb-4"
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
              <div>
                <input
                  placeholder="Phone Number"
                  className="w-full border flex border-white border-opacity-60 py-4 px-3 bg-dark mb-4"
                  type="phoneNumber"
                  id="phoneNumber"
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                />
              </div>
              <button
                className=" z-[10] inline-block hover:text-black text-white  border-white border-2 py-4 px-6 inter text-xs text-white font-medium tracking-[1.4px] uppercase mt-3"
                onClick={handleSubmit}
                type="submit"
              >
                sign up now
              </button>
            </form>
            <div
              className={`${
                isSuccess ? "block" : "hidden"
              } mt-5 text-xs bg-[#36cf28] text-white p-5 font-semibold`}
            >
              Form submitted succesfully!
            </div>
          </div>
          {/* <div>
            <Button signup={true} onClick={handleSubmit}>sign up now</Button>
          </div> */}
          <div>
            <div className="mt-10 text-white uppercase md:text-5xl text-3xl font-semibold italic leading-[39px] md:leading-[75px] md:w-2/3">
              still unsure?
            </div>
            <div className="mt-5 text-white opacity-60 text-lg md:w-2/3">
              <Link href="" className="underline">
                Click here
              </Link>{" "}
              to chat directly with our customer service.
            </div>
          </div>
        </div>
        <div className="md:w-1/2 overflow-hidden flex justify-center items-center">
          <Image priority src={landing} alt="" />
        </div>
        <div></div>
      </div>
    </Main>
  );
};

export default Join;
