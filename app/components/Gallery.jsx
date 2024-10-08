import Image from "next/image";
import heroImg from '@/public/img.jpg';
import heroImg2 from '@/public/img2.jpg';
import heroImg3 from '@/public/img3.jpg';
import heroImg4 from '@/public/img4.jpg';
import heroImg5 from '@/public/img5.jpg';
import heroImg6 from '@/public/img6.jpg';

export default function Gallery() {
    return(
        <div className="w-full py-32" id="gallery">
            <div className="w-11/12 mx-auto">
                <div className="w-7/12 mx-auto mb-6">
                    <h1 className="text-3xl md:text-5xl font-bold text-center text-orange-500 mb-1">Gallery</h1>
                    <p className="text-center">FInd your choice, from our finest works</p>
                </div>
                <div className="w-full columns-2 md:columns-3 [&>img:not(:first-child)]:mt-5 md:[&>img:not(first-child)]:mt-8">
                    <Image src={heroImg5} className="border border-black rounded-3xl shadow-2xl shadow-black/50" alt="" />
                    <Image src={heroImg} className="border border-black rounded-3xl shadow-2xl shadow-black/50" alt="" />
                    <Image src={heroImg3} className="border border-black rounded-3xl shadow-2xl shadow-black/50" alt="" />
                    <Image src={heroImg4} className="border border-black rounded-3xl shadow-2xl shadow-black/50" alt="" />
                    <Image src={heroImg2} className="border border-black rounded-3xl shadow-2xl shadow-black/50" alt="" />
                    <Image src={heroImg6} className="border border-black rounded-3xl shadow-2xl shadow-black/50" alt="" />
                </div>

                {/* <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
  <div class="relative">
    <Image src={heroImg} alt="Image 1" class="w-full h-full object-cover rounded-md"/>
  </div>
  <div class="relative">
    <Image src={heroImg2} alt="Image 2" class="w-full h-full object-cover rounded-md"/>
  </div>

  <div class="relative col-span-2">
    <Image src={heroImg3} alt="Image 3" class="w-full h-full object-cover rounded-md"/>
  </div>

  <div class="relative col-span-3">
    <Image src={heroImg} alt="Image 4" class="w-full h-full object-cover rounded-md"/>
  </div>

</div> */}

            </div>
        </div>
    );
}