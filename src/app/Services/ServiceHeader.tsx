interface ServiceHeaderProps {
    title: string;
    subtitle: string;
    description: string[];
    offerText: string;
}

const ServiceHeader = ({
    title,
    subtitle,
    description,
    offerText
}: ServiceHeaderProps) => {
    return (
        <div className="pt-5 mb-12 mx-auto max-w-screen-lg">
            <div className="text-center">
                <h2 className="text-4xl font-bold mb-2">{title}</h2>
                <h3 className="text-3xl font-semibold text-green-500 mb-6">{subtitle}</h3>
            </div>

            {description.map((paragraph, index) => (
                <p key={index} className="text-gray-600 mb-6 text-md ">
                    {paragraph}
                </p>
            ))}

            <p className="text-gray-600">{offerText}</p>
        </div>
    );
};

export default ServiceHeader;