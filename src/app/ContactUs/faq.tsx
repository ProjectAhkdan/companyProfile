import Image from "next/image";
import bg from "../../../public/assets/bg-FAQ.png";

export default function Faq() {
    return (
        <div className="py-12">
            <div className="mx-auto w-1/3 text-center tracking-wider">
                <h2 className="text-3xl font-bold mb-4">
                    Your <span className="text-green-400">Common</span> Queries <span className="text-green-400 underline">Answered </span>
                    with Additional <span className="text-green-400">FAQs</span>
                </h2>
            </div>

            <div className="grid grid-cols-2 gap-32 mx-auto w-4/6 mt-20">
                {/* kiri konten */}
                <div className="w-full pt-4 h-full">
                    <form action="" className="space-y-6">
                        <input
                            type="text"
                            className="p-6 border rounded-md w-full text-gray-700 focus:outline-none focus:ring-2 focus:ring-green-500"
                        />
                        <input
                            type="text"
                            className="p-6 border rounded-md w-full text-gray-700 focus:outline-none focus:ring-2 focus:ring-green-500"
                        />
                        <input
                            type="text"
                            className="p-6 border rounded-md w-full text-gray-700 focus:outline-none focus:ring-2 focus:ring-green-500"
                        />
                        <input
                            type="text"
                            className="p-6 border rounded-md w-full text-gray-700 focus:outline-none focus:ring-2 focus:ring-green-500"
                        />
                        <input
                            type="text"
                            className="p-6 border rounded-md w-full text-gray-700 focus:outline-none focus:ring-2 focus:ring-green-500"
                        />
                    </form>
                </div>

                {/* kanan konten*/}
                <div className="">
                    <Image
                        src={bg}
                        alt="Founder"
                        width={460}
                        height={400}
                    />
                </div>
            </div>
        </div>
    )
}