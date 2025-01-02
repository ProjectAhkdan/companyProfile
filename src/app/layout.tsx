import type { Metadata } from "next";
import "./globals.css";
<<<<<<< HEAD
import Navbar from "./components/Navbar";
import { Poppins } from 'next/font/google';
import Footer from "./components/Footer";


=======
import { Poppins } from "next/font/google";
import Navbar from "../components/Navbar";
>>>>>>> dd546a100c0e9c3cf73296d6a9e84f4d628d2afa

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
<<<<<<< HEAD
    <html lang="en">
      <body
        className={poppins.className}
      >
        <Navbar />
        {children}
        <Footer
          companyName="YHOIKI"
          description="Mengasah proses unik yang memberikan hasil luar biasa dengan efisiensi menakjubkan untuk memenuhi sasaran pendapatan."
          mapUrl="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126646.20750910861!2d110.33468368494506!3d-7.024721091850458!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e708b4d3f0d024d%3A0x1e0432b9da5cb9f2!2sSemarang%2C%20Central%20Java!5e0!3m2!1sen!2sid!4v1703720391495!5m2!1sen!2sid"
        />
=======
    <html lang="en" suppressHydrationWarning>
      <body className={poppins.className}>
        <Navbar />
          {children}
>>>>>>> dd546a100c0e9c3cf73296d6a9e84f4d628d2afa
      </body>
    </html>
  );
}
