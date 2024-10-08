import Image from "next/image";
import logo from '@/public/logo-bl.png'

export default function About() {
    return (
        <div className="w-full py-32 bg-black text-white" id="aboutus">
            <div className="w-11/12 mx-auto flex flex-col-reverse md:flex-row gap-5">
                <div className='w-full md:w-6/12 flex justify-start md:justify-center items-center'>
                    <div className='w-6/12 border rounded-3xl border-black'>
                        <Image src={logo} className='w-full' alt='' />
                    </div>
                </div>
                
                <div className="w-full md:w-6/12">
                    <div className="mb-6">
                        <h1 className="text-3xl md:text-5xl font-bold text-orange-500">About Us</h1>
                    </div>
                    <p>
                        At J&Jay Natural Hair, we celebrate the beauty and diversity of natural hair. Our journey began with a passion to empower individuals to embrace their unique textures and patterns. Our mission is to provide high-quality, effective, and sustainable natural hair care products that nourish and protect your crowning glory.
                    </p>
                </div>
            </div>
        </div>
    );
}