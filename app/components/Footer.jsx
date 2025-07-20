import Link from "next/link";
import logo from '@/public/logo-bl.png';
import Image from "next/image";

export default function Footer() {
    return (
        <div className="w-full bg-black text-white absolute">
            <div className="w-11/12 mx-auto py-6 flex flex-col md:flex-row justify-between items-center gap-5 md:gap-0">
                <Link href={'#'} className="text-orange-500 font-bold text-3xl"><Image src={logo} className="h-16 w-[7.5rem]" alt="" /> </Link>
                <div className="flex flex-col md:flex-row gap-16">
                    <div className="flex flex-col leading-tight items-center md:items-start">
                        <h1 className="text-orange-500">Contact Us</h1>
                        <div className="flex gap-6">
                            <Link target="_blank" href={'tel:08025320396'} className="font-bold leading-loose hover:text-orange-500 duration-500" title="Call">
                                Call
                            </Link>
                            <Link target="_blank" href={'https://wa.link/oz66dt'} className="font-bold leading-loose hover:text-orange-500 duration-500" title="Whatsapp">
                                Whatsapp
                            </Link>
                            <Link target="_blank" href={'mailto:jandjaynaturalhairs@gmail.com'} className="font-bold leading-loose hover:text-orange-500 duration-500" title="Send Email">
                                Email
                            </Link>
                        </div>
                    </div> 
                    <div className="flex flex-col leading-tight items-center md:items-start">
                        <h1 className="text-orange-500">Socials</h1>
                        <div className="flex gap-6">
                            <Link target="_blank" href={'https://www.facebook.com/chimdinma.jane'} className="font-bold leading-loose hover:text-orange-500 duration-500" title="Facebook">
                                FB
                            </Link>
                            <Link target="_blank" href={'https://www.instagram.com/jojane351?igsh=YzljYTk1ODg3Zg== '} className="font-bold leading-loose hover:text-orange-500 duration-500" title="Instagram">
                                IG
                            </Link>
                            <Link target="_blank" href={'#'} className="font-bold leading-loose hover:text-orange-500 duration-500" title="Twitter">X</Link>
                            <Link target="_blank" href={'#'} className="font-bold leading-loose hover:text-orange-500 duration-500" title="SnapChat">SC</Link>
                        </div>
                        <span className="text-xs">Made with ❤️ by <Link target="_blank" href={'https://adgxdev.vercel.app'} className="hover:text-orange-500 duration-500">ADGXDEV.</Link></span> 
                    </div>
                </div>
            </div>
        </div>
    );
}