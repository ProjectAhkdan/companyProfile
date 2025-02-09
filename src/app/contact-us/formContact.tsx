
import { IconRespect } from "@/components/icon/iconHome";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import React from "react";

interface ContactInfoProps {
    title: string;
    content: string;
}

const ContactInfo: React.FC<ContactInfoProps> = ({ title, content }) => (
    <div className="flex lg:justify-start sm:px-44 px-14 lg:px-0  mt-10 items-center md:px-0">
        <span className="outline outline-1 outline-gray-300 rounded-full p-3">
            <IconRespect />
        </span>
        <div className="ml-4 flex text-start flex-col">
            <h4 className="font-bold text-base">{title}</h4>
            <p>{content}</p>
        </div>
    </div>
);

const SocialMediaSection = () => (
    <div className="flex flex-col lg:text-start">
        <h2 className="me-12 font-bold lg:text-2xl md:text-4xl text-5xl mt-10">Follow Me</h2>
        <div className="flex md:justify-start lg:justify-start mt-5 gap-5 justify-center">
            {[...Array(3)].map((_, index) => (
                <span
                    key={index}
                    className="outline outline-1 outline-gray-300 rounded-full p-3 hover:outline-green-500 hover:cursor-pointer"
                >
                    <IconRespect />
                </span>
            ))}
        </div>
    </div>
);

const ContactForm = () => (
    <form className="space-y-5 mt-20 pb-5 lg:pb-0">
        <div className="grid grid-cols-2 gap-5">
            <LabelInputContainer>
                <label htmlFor="name" className="text-sm leading-3 text-gray-400">
                    Email
                </label>
                <Input
                    type="email"
                    placeholder="johndoe@gmail.com"
                    className="p-2 border rounded-md w-full text-gray-700 focus:outline-none focus:ring-2 focus:ring-green-500"
                />
            </LabelInputContainer>

            <LabelInputContainer>
                <label htmlFor="name" className="text-sm leading-3 text-gray-400">
                    Telepon
                </label>
                <Input
                    type="text"
                    placeholder="021-xxx-xxx"
                    className="p-2 border rounded-md w-full text-gray-700 focus:outline-none focus:ring-2 focus:ring-green-500"
                />
            </LabelInputContainer>
        </div>
        <LabelInputContainer>
            <label htmlFor="name" className="text-sm leading-3 text-gray-400">
                Name
            </label>
            <Input
                type="text"
                placeholder="John Doe"
                className="p-2 border rounded-md w-full text-gray-700 focus:outline-none focus:ring-2 focus:ring-green-500"
            />
        </LabelInputContainer>
        <textarea
            placeholder="Message"
            rows={5}
            className="p-2 border rounded-md w-full text-gray-700 focus:outline-none focus:ring-2 focus:ring-green-500"
        />
        <button
            type="submit"
            className="w-full bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600 transition-colors"
        >
            Submit
        </button>
    </form>
);

const MapSection = () => (
    <div className="w-full flex justify-center lg:mt-32 mt-10 lg:px-20 mb-8">
        <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63421.50594488516!2d111.03575509999999!3d-6.54135985!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e712c79c993aa6b%3A0x1c00c5eb5b53dd70!2sKabupaten%20Pati%2C%20Jawa%20Tengah%2059155!5e0!3m2!1sid!2sid!4v1735742927732!5m2!1sid!2sid"
            className="w-[80%] lg:h-[800px] h-[400px] rounded-lg border-0"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
        />
    </div>
);

const FormContact = () => {
    const contactInfo = [
        { title: "Address", content: "Indonesia" },
        { title: "Telepon", content: "(021)-xxx-xxx" },
        { title: "Email", content: "Yhoiki@gmail.com" },
    ];

    return (
        <div className="flex flex-col">
            <div className="lg:flex md:flex mt-10">
                <div className="text-center md:text-start md:px-10 md:w-1/2 lg:w-1/2 lg:px-36 flex-col leading-2">
                    <h1 className=" md:text-4xl text-5xl font-semibold">Get In Touch</h1>
                    {contactInfo.map((info, index) => (
                        <ContactInfo key={index} {...info} />
                    ))}
                    <SocialMediaSection />
                </div>

                <div className="lg:ml-36 lg:w-1/3 md:w-1/2 w-5/6 mx-auto px-10 outline outline-3 outline-gray-300 rounded-3xl md:mr-10">
                    <h2 className="font-semibold lg:text-4xl pt-5 md:pt-0 text-2xl mt-10 text-center">
                        Send a Message
                    </h2>
                    <ContactForm />
                </div>
            </div>
            <MapSection />
        </div>
    );
};

export default FormContact;

const LabelInputContainer = ({
    children,
    className,
}: {
    children: React.ReactNode;
    className?: string;
}) => {
    return (
        <div className={cn("flex flex-col space-y-2 w-full", className)}>
            {children}
        </div>
    );
};
