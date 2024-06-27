"use client";
import Logo from "@/images/logo.png";
import Image from "next/image";
const Header = () => {
  const menu = ["Home", "About", "Service", "Contact"];
  return (
    <div className=" flex justify-between items-center py-2 px-5 sm:px-10">
      <div>
        <Image src={Logo} alt="Logo-image" className=" w-36 sm:w-60" />
      </div>
      <div className="hidden sm:flex space-x-10  ">
        {menu?.map((val, index) => (
          <div key={index} className=" font-semibold text-lg cursor-pointer hover:underline">
            {val}
          </div>
        ))}
      </div>
      <div>
        <button className=" bg-blue-500 sm:px-4 sm:py-2 px-2 py-1 rounded-lg text-white  hover:bg-black">
            Appointment
        </button>
      </div>
    </div>
  );
};

export default Header;
