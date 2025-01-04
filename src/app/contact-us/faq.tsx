"use client";

import Image from "next/image";
import { useState } from "react";
import bg from "../../../public/assets/bg-FAQ.png";
import { IconAccordion } from "@/components/icon/iconHome";
import { FAQ_DATA as faqData } from "@/data/faqData";

interface AccordionItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
}

const AccordionItem = ({
  question,
  answer,
  isOpen,
  onClick,
}: AccordionItemProps) => {
  return (
    <div className="border rounded-md overflow-hidden">
      <button
        className="p-6 w-full flex justify-between items-center text-gray-700 text-left"
        onClick={onClick}
      >
        <span>{question}</span>
        <div
          className={`transform transition-transform duration-200 ${
            isOpen ? "rotate-180" : ""
          }`}
        >
          <IconAccordion />
        </div>
      </button>
      <div
        className={`transition-all duration-200 ${
          isOpen ? "max-h-48 opacity-100" : "max-h-0 opacity-0"
        } overflow-hidden`}
      >
        <div className="p-6 pt-0 text-gray-600">{answer}</div>
      </div>
    </div>
  );
};

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="py-12">
      <div className="mx-auto w-1/3 text-center tracking-wider">
        <h2 className="text-3xl font-bold mb-4">
          Your <span className="text-green-400">Common</span> Queries{" "}
          <span className="text-green-400 underline">Answered</span> with
          Additional <span className="text-green-400">FAQs</span>
        </h2>
      </div>

      <div className="grid grid-cols-2 gap-32 mx-auto w-4/6 mt-20">
        {/* Accordion section */}
        <div className="w-full pt-4 h-full space-y-6">
          {faqData.map((faq, index) => (
            <AccordionItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === index}
              onClick={() => handleToggle(index)}
            />
          ))}
        </div>

        {/* Image section */}
        <div>
          <Image src={bg} alt="FAQ illustration" width={460} height={400} />
        </div>
      </div>
    </div>
  );
}
