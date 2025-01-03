"use client";

import React from "react";
import { IconYhoikinav } from "./icon/iconHome";

interface FooterSection {
  title: string;
  items?: string[];
  content?: string;
}

interface FooterProps {
  companyName: string;
  description: string;
  mapUrl: string;
}

const Footer: React.FC<FooterProps> = ({ companyName, description }) => {
  const sections: FooterSection[] = [
    {
      title: companyName,
      content: description,
    },
    {
      title: "Layanan",
      items: [
        "Designer",
        "Pembuatan website",
        "Digital Marketing",
        "Applications/Software",
      ],
    },
    {
      title: "Produk",
      items: [
        "Designer",
        "Pembuatan Website",
        "Digital Marketing",
        "Applications/Software",
      ],
    },
  ];

  const FooterContent = ({ title, items, content }: FooterSection) => (
    <div>
      {title === companyName ? (
        <div className="flex items-center gap-2 mb-4">
          <IconYhoikinav />
          <h2 className="text-3xl font-bold hover:cursor-pointer">{title}</h2>
        </div>
      ) : (
        <h2 className="text-3xl font-bold mb-4">{title}</h2>
      )}
      {items ? (
        <ul className="space-y-2 text-sm">
          {items.map((item, index) => (
            <li key={index} className="hover:text-gray-200 cursor-pointer">
              {item}
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-sm w-4/6">{content}</p>
      )}
    </div>
  );

  const MapSection = () => (
    <div className="bg-white p-1 rounded-lg w-full h-60">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63421.50594488516!2d111.03575509999999!3d-6.54135985!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e712c79c993aa6b%3A0x1c00c5eb5b53dd70!2sKabupaten%20Pati%2C%20Jawa%20Tengah%2059155!5e0!3m2!1sid!2sid!4v1735742927732!5m2!1sid!2sid"
        className="w-full h-full rounded-md"
        loading="lazy"
        allowFullScreen
      />
    </div>
  );

  return (
    <footer className="bg-green-500 text-white px-4 md:px-8 pt-8 pb-32">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {sections.map((section, index) => (
          <FooterContent key={index} {...section} />
        ))}
        <MapSection />
      </div>
    </footer>
  );
};

export default Footer;
