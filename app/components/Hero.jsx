import Image from "next/image";
import heroImg from '@/public/img5.jpg';
import heroImgTwo from '@/public/img6.jpg';
import Link from "next/link";

export default function Hero() {
    return(
        <div className="w-full h-[90vh] md:h-screen flex justify-start relative">
            <div class="absolute top-0 -z-10 h-full w-full bg-white"><div class="absolute bottom-auto left-auto right-0 top-0 h-[500px] w-[500px] -translate-x-[30%] translate-y-[20%] rounded-full bg-[rgba(236,163,104,0.5)] opacity-50 blur-[80px]"></div></div>
            <div className='h-full md:pt-12 pt-24 w-11/12 mx-auto flex flex-col md:flex-row justify-center gap-16'>
                <div className='w-full md:w-6/12 flex items-center'>
                    <div className='text-center md:text-left'>
                        <h1 className="leading-tight text-4xl md:text-7xl w-full md:w-11/12 mb-8 border-black">
                            Your <span className="text-orange-500 font-bold">Hair</span>, your <span className="text-orange-500 font-bold">Style</span>, our <span className="text-orange-500 font-bold stroke-2 stroke-black">Story</span>
                        </h1>
                        <Link href={'https://wa.link/d00m0e'} className="py-2.5 px-4 text-white  bg-orange-500 hover:bg-orange-400 rounded-full border border-black">Book Appointment</Link>
                    </div>
                </div>
                <div className='w-full md:w-6/12 flex items-center justify-center'>
                    <div className='flex w-11/12'>
                        <div className='hover:rotate-12 duration-500 rounded-3xl border border-black -rotate-12 w-6/12 h-64 shadow-2xl shadow-black/60'>
                            <Image src={heroImg} className="object-cover h-full object-top rounded-3xl" alt="" />
                        </div>
                        <div className='hover:-rotate-12 duration-500 rounded-3xl border border-black rotate-12 w-6/12 h-64 shadow-2xl shadow-black/60'>
                            <Image src={heroImgTwo} className="object-cover h-full object-top rounded-3xl" alt="" />
                        </div>
                    </div>
                </div>
            </div>
            {/* <div className="w-11/12 mx-auto flex flex-col md:flex-row md:items-center gap-12 md:gap-0">
                <div className="w-full md:w-6/12 text-center md:text-left">
                    <h1 className="leading-tight text-4xl md:text-5xl w-full md:w-9/12 font-bold mb-6"><span className="text-orange-500 font-bold">Discover</span> Your Style, Unleash Your Confidence at <span className="text-orange-500 font-bold">J&JAY</span></h1>
                    <p></p>
                    <Link href={'https://wa.link/d00m0e'} className="py-2 px-4 text-white  bg-orange-500 hover:bg-orange-400">Book Appointment</Link>
                </div>
                <div className="w-full md:w-6/12 h-[24rem] md:h-[28rem]">
                    <Image src={heroImg} className="object-cover h-full object-top" alt="" />
                </div>
            </div> */}
        </div>
    );
}