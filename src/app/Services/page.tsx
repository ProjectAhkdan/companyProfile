import { SERVICES_DATA } from "@/data/serviceData";
import ServicesGrid from "./ServiceGrid";
import ServiceHeader from "./ServiceHeader";

export default function ServicesPage() {
  const { header, services } = SERVICES_DATA;

  return (
    <section className="py-16 px-4 md:px-8">
      <div className="mx-auto">
        <ServiceHeader {...header} />
        <ServicesGrid services={services} />
      </div>
    </section>
  );
}
