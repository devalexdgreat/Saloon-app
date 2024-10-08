
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
        {children}
        <Footer />
      </body>
    </html>
  );
}
