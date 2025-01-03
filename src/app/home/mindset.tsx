import Image from "next/image";
import { goalsData } from "@/data/dataHome";
import { Services } from "@/data/dataHome";

const Mindset = () => {
  return (
    <div>
      <div className="p-20 bg-white">
        <div className="mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
          <div>
            <h2 className="text-5xl font-bold text-black mb-4">
              The Company's <span className="text-green-600">Mindset</span>
            </h2>
            <p className="text-gray-700 mb-6">
              Driving businesses towards better digitization and delivering
              progressive solutions together as a team is what we aspire for
              each day.
            </p>
            <div className="flex">
              <Image
                src="/assets/company-team.png"
                alt="Team Discussion"
                width={350}
                height={350}
                className="rounded-lg"
              />
            </div>
          </div>

          <div>
            <div className="space-y-8">
              {goalsData.map((goal, index) => (
                <div key={index} className="items-start">
                  <div className="w-20 h-20">{goal.icon}</div>
                  <div>
                    <h3 className="text-lg font-bold text-black">{goal.title}</h3>
                    <p className="text-gray-700">{goal.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="w-full p-20 text-center">
        <h2 className="text-3xl font-bold text-black mb-4">Our Services</h2>
        <p className="text-gray-600 text-lg mb-10">
          We provide services in the form of web creation, design, and
          applications/software.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {Services.map((service, index) => (
            <div
              key={index}
              className="border border-gray-300 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow duration-200 text-center"
            >
              <div className="flex justify-center mb-4">{service.icon}</div>
              <h3 className="text-lg font-semibold text-black mb-2">
                {service.title}
              </h3>
              <p className="text-gray-600 text-sm">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Mindset;
