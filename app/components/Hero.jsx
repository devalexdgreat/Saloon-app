import Image from "next/image";
import heroImg from '@/public/img.jpg';
import Link from "next/link";

export default function Hero() {
    return(
        <div className="w-full mt-28">
            <div className="w-11/12 mx-auto flex flex-col md:flex-row md:items-center gap-12 md:gap-0">
                <div className="w-full md:w-6/12 text-center md:text-left">
                    <h1 className="leading-tight text-4xl md:text-5xl w-full md:w-9/12 font-bold mb-6"><span className="text-orange-500 font-bold">Discover</span> Your Style, Unleash Your Confidence at <span className="text-orange-500 font-bold">J&JAY</span></h1>
                    <p></p>
                    <Link href={'#'} className="py-2 px-4 text-white  bg-orange-500 hover:bg-orange-400">Book Appointment</Link>
                </div>
                <div className="w-full md:w-6/12 h-[24rem] md:h-[28rem]">
                    <Image src={heroImg} className="object-cover h-full object-top" alt="" />
                </div>
            </div>
        </div>
    );
}