import Image from "next/image";
import bg from "../../../public/assets/Section 2.png";
import Founder from "../../../public/assets/founder.png";

export default function ProfileCompany() {
  return (
    <div className="flex h-[838px] w-full overflow-hidden">
      <div className="relative w-full h-full grid grid-cols-1 md:grid-cols-2 items-center">
        {/* Background */}
        <div className="absolute inset-0 -z-10">
          <Image src={bg} alt="Background" layout="responsive" objectFit="cover" />
        </div>

        {/* Left Content */}
        <div className="flex flex-col pt-20 items-center justify-center relative z-10 px-6 md:px-16">
            <Image src={Founder} alt="Founder" />
        </div>

        {/* Right Content */}
        <div className="relative z-20 flex h-full w-full items-center justify-center">
          <div className="bg-gray-100 p-10 shadow-lg rounded-md">
            <p className="text-gray-700 text-lg font-medium text-center md:text-left">
              We offer technology solutions specific to your business needs
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
