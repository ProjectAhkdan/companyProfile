// components/Hero.tsx
import React from "react";
import Image from "next/image";
import bg from "../../../public/assets/bg.png";
import { IconYhoikihero } from "../components/icon/icon";

const Hero: React.FC = () => {
  return (
   <div className=" flex overflow-hidden">
     <div className="relative h-screen grid grid-cols-1 md:grid-cols-2 items-center ">
      {/* Background */}
      <div className="absolute inset-0">
        <Image
          src={bg}
          alt="Background"
          layout="fill"
          objectFit="cover"
          quality={75}
          priority
        />
      </div>

      {/* Overlay bg nya*/}
      <div className="absolute inset-0 bg-[linear-gradient(150deg,rgba(34,193,195,0)_70%,rgba(58,171,87,0.31)_70%)]"></div>

      {/* kiri konten */}
      <div className="relative z-10 px-8 md:px-16 lg:px-24 text-center md:text-left">
        <h1 className="text-4xl font-bold text-white md:text-5xl">
          Welcome
          <br />
          <span className="text-green-400">To Yhoiki Company Profile</span>
        </h1>
        <p className="mt-4 text-lg text-white">
          At Yhoiki you can find all your digital needs. Come on, start
          searching now and see the prices and discounts! Want to learn about
          technology now? Visit the course menu.
        </p>
        <button className="mt-6 px-6 py-3 bg-green-500 text-white font-medium text-lg rounded-lg hover:bg-green-600 transition duration-200">
          Contact us
        </button>
      </div>

      {/* kanan konten */}
      <div className="relative z-10 hidden md:flex justify-center items-center">
        <div className="w-48 h-48 flex justify-center items-center shadow-lg">
          <div className=" w-fit h-fit p-10">
            <IconYhoikihero />
          </div>
        </div>
      </div>
    </div>
   </div>
  );
};

export default Hero;
