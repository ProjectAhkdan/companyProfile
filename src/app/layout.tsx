import type { Metadata } from "next";
import "./globals.css";


import { Poppins } from "next/font/google";
import Navbar from "../components/Navbar";
import Footer from "@/components/Footer";


const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: {
    template: "Yhoiki",
    default: "Yhoiki",
  },
  description:
    "YHOIKI is a professional web development team combining sleek design and cutting-edge technology to deliver top-notch digital solutions. Your ideal partner for all things web!",
  metadataBase: new URL("https://yhoikiteam.my.id"),
  openGraph: {
    title: {
      template: "Yhoiki",
      default: "Yhoiki",
    },
    description:
      "YHOIKI is a professional web development team combining sleek design and cutting-edge technology to deliver top-notch digital solutions. Your ideal partner for all things web!",
    url: "https://yhoiki.my.id",
    siteName: "Yhoiki Team",
    images: [
      {
        url: "/public/assets/founder.png",
        width: 1000,
        height: 1200,
      },
    ],
    locale: "eng_US",
    type: "website",
  },
  keywords: [
    "yhoiki team",
    "web development",
    "website creation",
    "responsive design",
    "modern web solutions",
    "creative web team",
    "business websites",
    "professional web design",
    "custom web development",
    "SEO-friendly websites",
    "user-centric design",
    "frontend development",
    "UI/UX design",
    "digital solutions",
    "website optimization",
    "interactive websites",
    "innovative web solutions",
    "mobile-friendly websites",
    "full-stack development",
    "JavaScript frameworks",
    "HTML/CSS experts",
    "ecommerce websites",
    "scalable web apps",
    "performance-driven websites",
    "web agency services",
    "online branding",
    "startup web solutions",
    "dynamic web experiences",
    "indonesia",
    "indonesian",
    "custom web design",
    "web design agency",
    "professional web development",
    "website redesign",
    "cutting-edge web development",
    "high-performance websites",
    "SEO web design",
    "creative digital agency",
    "interactive user interfaces",
    "web development experts",
    "web optimization services",
    "advanced web solutions",
    "technology-driven websites",
    "online presence solutions",
    "user-friendly websites",
    "agile web development",
    "customizable websites",
    "brand-driven web design",
    "growth-oriented web solutions",
    "website user experience",
    "business growth websites",
    "high-conversion websites",
    "custom CMS development",
    "website speed optimization",
    "future-proof web design",
  ],
  icons: {
    icon: "/assets/Yhoiki 4.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (

    <html lang="en" suppressHydrationWarning>
      <body
        className={poppins.className}
      >
        <Navbar />
        {children}
        
      </body >
    </html >
  );
}
