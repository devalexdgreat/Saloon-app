import Image from "next/image";
import gridIcons from "@/public/img.jpg";
import Link from "next/link";

export default function Services() {
    return (
        <div className="w-full py-24" id="services">
            <div className="w-11/12 mx-auto">
                <div className="text-center w-7/12 mx-auto mb-8">
                    <h1 className="text-3xl md:text-5xl font-bold text-orange-500">Our Services</h1>
                    <p>What we offer</p>
                </div>
                <div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 justify-center text-white">
                        <div className="border border-black bg-orange-500 shadow-2xl shadow-black/50 flex flex-col rounded-3xl items-center justify-start">
                            <div className='bg-orange-600 w-full rounded-t-3xl px-4 pt-3 pb-2 flex justify-between border-b border-black'>
                                <h1 className="font-bold text-xl text-white">Natural Hair Care</h1>
                                <Link href={'https://wa.link/d00m0e'} className='border border-black bg-white text-black rounded-full px-2 py-0.5 text-sm flex items-center justify-center duration-500 hover:bg-black hover:text-white'><span>Need this!</span></Link>
                            </div>
                            <ul className="flex flex-col w-full px-4 pt-2 pb-4 list-disc ms-7">
                                <li>Braids</li>
                                <li>Twists</li>
                                <li>Locs</li>
                                <li>Cornrows</li>
                                <li>Bantu knots</li>
                            </ul>
                        </div>
                        <div className="border border-black bg-orange-500 shadow-2xl shadow-black/50 flex flex-col rounded-3xl items-center justify-start">
                            <div className='bg-orange-600 w-full rounded-t-3xl px-4 pt-3 pb-2 flex justify-between border-b border-black'>
                                <h1 className="font-bold text-xl text-white">Hair Treatments</h1>
                                <Link href={'https://wa.link/d00m0e'} className='border border-black bg-white text-black rounded-full px-2 py-0.5 text-sm flex items-center justify-center duration-500 hover:bg-black hover:text-white'><span>Need this!</span></Link>
                            </div>
                            <ul className="flex flex-col w-full px-4 pt-2 pb-4 list-disc ms-7">
                                <li>Hair Butter Treatment</li>
                                <li>Hot Oil Treatment</li>
                                <li>Natural Hair Herbs Treatment</li>
                                <li>Protein Treatment</li>
                                <li>Deep Conditioning</li>
                            </ul>
                        </div>
                        <div className="border border-black bg-orange-500 shadow-2xl shadow-black/50 flex flex-col rounded-3xl items-center justify-start">
                            <div className='bg-orange-600 w-full rounded-t-3xl px-4 pt-3 pb-2 flex justify-between border-b border-black'>
                                <h1 className="font-bold text-xl text-white">Hair Maintenance</h1>
                                <Link href={'https://wa.link/d00m0e'} className='border border-black bg-white text-black rounded-full px-2 py-0.5 text-sm flex items-center justify-center duration-500 hover:bg-black hover:text-white'><span>Need this!</span></Link>
                            </div>
                            <ul className="flex flex-col w-full px-4 pt-2 pb-4 list-disc ms-7">
                                <li>Shampoo</li>
                                <li>Conditioner</li>
                                <li>Detangler</li>
                                <li>Hair Oil</li>
                                <li>Hair butter</li>
                            </ul>
                        </div>
                        <div className="border border-black bg-orange-500 shadow-2xl shadow-black/50 flex flex-col rounded-3xl items-center justify-start">
                            <div className='bg-orange-600 w-full rounded-t-3xl px-4 pt-3 pb-2 flex justify-between border-b border-black'>
                                <h1 className="font-bold text-xl text-white">Consultations</h1>
                                <Link href={'https://wa.link/d00m0e'} className='border border-black bg-white text-black rounded-full px-2 py-0.5 text-sm flex items-center justify-center duration-500 hover:bg-black hover:text-white'><span>Need this!</span></Link>
                            </div>
                            <ul className="flex flex-col w-full px-4 pt-2 pb-4 list-disc ms-7">
                                <li>Natural Hair Consultations</li>
                                <li>Hair Care Advice</li>
                                <li>Personalized Hair Plan</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}