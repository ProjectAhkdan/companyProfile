import Image from "next/image";



export default function ProfileCompany() {
    return (
        <div className="w-full h-[838px]">
            <div className="grid grid-cols-2">
                <div className="flex w-fit px-10 py-20">
                    <Image
                        src="/images/profile.png"
                        alt="Profile"
                        width={600}
                        height={600}
                        className="object-cover"
                    />
                </div>

                <div className="py-20 w-full px-5 bg-gray-100 rounded-xl -z-[100]">
                    <h3 className="text-gray-500 text-[40px] font-semibold leading-tight let italic w-[75%]">We offer technology solutions specific to your business needs</h3>
                </div>
            </div>
        </div>
    );
}
