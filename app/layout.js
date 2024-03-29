
import localFont from 'next/font/local';
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const font = localFont({ src: './fonts/syne.ttf', weight: '400',
style: 'normal', })

export const metadata = {
  title: "J&JAY Natural Hairs",
  description: "A haven where young ones can embrace their natural curls, coils, kinks, and waves with confidence and joy",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="overflow-x-hidden">
      <body className={font.className}>
        <Navbar />
        {/* <div class="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]"><div class="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-orange-500 opacity-20 blur-[100px]"></div></div> */}

        {/* <div class="relative h-full w-full"><div class="absolute bottom-0 left-[-20%] right-0 top-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]"></div><div class="absolute bottom-0 right-[-20%] top-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]"></div></div> */}

        {children}
        <Footer />
      </body>
    </html>
  );
}
