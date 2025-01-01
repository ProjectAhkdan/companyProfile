// components/Hero.tsx
import React from "react";
import Link from "next/link";
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
        <div className=" relative z-10 pl-7 grid grid-row-3 text-center md:text-left">
          <div>
            <h1 className="text-4xl font-bold text-white md:text-5xl">
              Welcome
              <br />
              To <span className="text-green-400">Yhoiki</span> Company Profile
            </h1>
          </div>
          <div className=" w-5/6">
            <p className="mt-4 text-lg text-white">
              At Yhoiki you can find all your digital needs. Come on, start
              searching now and see the prices and discounts! Want to learn
              about technology now? Visit the course menu.
            </p>
          </div>
         <div className=" pt-8">
         <Link href="/ContactUs" className="mt-6 px-6 py-3 bg-[linear-gradient(90deg,rgba(117,197,126,1)_0%,rgba(52,168,83,1)_100%)] rounded-full text-white font-medium text-lg hover:opacity-90 transition duration-200">
            Contact us
          </Link>
         </div>
        </div>

        {/* kanan konten */}
        <div className="relative z-20 hidden md:flex justify-center items-center">
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
