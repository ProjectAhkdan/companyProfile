// components/Hero.tsx
import React from "react";
import Image from "next/image";
import bg from "../../../public/assets/bg.png";

const HeroContact: React.FC = () => {
    return (
        <div className=" flex overflow-hidden">
            <div className="w-full relative h-screen grid grid-cols-1 md:grid-cols-2 items-center">
                {/* Background */}
                <div className="absolute inset-0">
                    <Image
                        src={bg}
                        alt="Background"
                        layout="fill"
                        objectFit="cover"
                        objectPosition="left"
                        quality={75}
                        priority
                    />
                </div>

                {/* Overlay bg nya*/}
                <div className="absolute inset-0 bg-[linear-gradient(150deg,rgba(34,193,195,0)_70%,rgba(58,171,87,0.31)_70%)]"></div>

                <div className=" relative z-10 pl-10 grid grid-row-3 text-center md:text-left">
                    <div>
                        <h1 className="text-5xl md:text-6xl font-bold text-white lg:text-8xl">
                            Contact Us
                        </h1>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeroContact;
