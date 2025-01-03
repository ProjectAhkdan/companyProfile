
interface Service {
    title: string;
    description: string;
}

interface ServicesGridProps {
    services: Service[];
}

const ServicesGrid = ({ services }: ServicesGridProps) => {
    return (
        <div className="w-full max-w-screen-xl px-6 mx-auto grid grid-cols-1 md:grid-cols-2">
            {services.map((service, index) => (
                <div
                    key={index}
                    className={`pb-10 bg-white rounded-lg w-4/6 mx-auto leading-tight ${
                        index % 2 === 0 ? 'text-start' : 'text-end'
                    }`}
                >
                    <h3 className="text-xl font-medium mb-4 text-gray-800">{service.title}</h3>
                    <p className="text-gray-600">{service.description}</p>
                </div>
            ))}
        </div>
    );
};

export default ServicesGrid;