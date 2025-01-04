"use client"

import Homes from "./home/page"
import Footer from "@/components/Footer"

export default function Home() {
  return (
    <main data-scroll-container className="flex flex-col items-center">
      <Homes />
      <Footer
        companyName="YHOIKI"
        description="Mengasah proses unik yang memberikan hasil luar biasa dengan efisiensi menakjubkan untuk memenuhi sasaran pendapatan."
        mapUrl="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126646.20750910861!2d110.33468368494506!3d-7.024721091850458!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e708b4d3f0d024d%3A0x1e0432b9da5cb9f2!2sSemarang%2C%20Central%20Java!5e0!3m2!1sen!2sid!4v1703720391495!5m2!1sen!2sid"
      />
    </main>
  )
}
