import Image from "next/image";
import gridIcons from "@/public/img.jpg";

export default function Services() {
    return (
        <div className="w-full py-24" id="services">
            <div className="w-11/12 mx-auto">
                <div className="text-center w-7/12 mx-auto mb-6">
                    <h1 className="text-3xl md:text-5xl font-bold text-orange-500">Our Services</h1>
                    <p>What we offer</p>
                </div>
                <div>
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-3">
                        <div className="shadow-2xl shadow-[#ddd] flex flex-col gap-4 rounded-3xl p-6 items-center justify-center">
                            <div className="h-16 w-16 rounded-full">
                                <Image src={gridIcons}  className="h-full w-full rounded-full object-cover" alt=""/>
                            </div>
                              <div className="text-center">
                                <h1 className="font-bold text-2xl text-orange-500"><q>Gentle Detangling and Washing</q></h1>
                                <p>Expert stylists ensure stress-free kids haircare with gentle detangling.
</p>
                            </div> 
                        </div>
                        <div className="shadow-2xl shadow-[#ddd] flex flex-col gap-4 rounded-3xl p-6 items-center justify-center">
                            <div className="h-16 w-16 rounded-full">
                                <Image src={gridIcons}  className="h-full w-full rounded-full object-cover" alt=""/>
                            </div>
                            <div className="text-center">
                                <h1 className="font-bold text-2xl text-orange-500"><q>Creative Styling</q></h1>
                                <p>Stylists create personalized, age-appropriate hairstyles, from fun braids to stylish twists.</p>
                            </div> 
                        </div>
                        <div className="shadow-2xl shadow-[#ddd] flex flex-col gap-4 rounded-3xl p-6 items-center justify-center">
                            <div className="h-16 w-16 rounded-full">
                                <Image src={gridIcons}  className="h-full w-full rounded-full object-cover" alt=""/>
                            </div>
                            <div className="text-center">
                                <h1 className="font-bold text-2xl text-orange-500"><q>Medicure</q></h1>
                                <p>where passion for beauty meets a commitment to excellence.</p>
                            </div> 
                        </div>
                        <div className="shadow-2xl shadow-[#ddd] flex flex-col gap-4 rounded-3xl p-6 items-center justify-center">
                            <div className="h-16 w-16 rounded-full">
                                <Image src={gridIcons}  className="h-full w-full rounded-full object-cover" alt=""/>
                            </div>
                            <div className="text-center">
                                <h1 className="font-bold text-2xl text-orange-500"><q>Weaving</q></h1>
                                <p>where passion for beauty meets a commitment to excellence.</p>
                            </div> 
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}