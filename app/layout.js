import { Syne } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// Import the Syne font with specific weights and subsets
const syne = Syne({
  subsets: ['latin'],
  weight: ['400', '600', '700'], // choose weights you need
  variable: '--font-syne',       // optional: to use as a CSS variable
})

export const metadata = {
  title: "J&JAY Natural Hairs | Kids Natural Hair Salon & Stylist",
  description:
    "J&JAY Natural Hairs is a haven where young ones embrace their natural curls, coils, kinks, and waves with confidence and joy. We specialize in gentle hair care, afro-textured styles, protective hairstyles for kids, braids, twists, detangling, and natural hair growth routines.",
  keywords: [
    "kids natural hair salon",
    "natural hair care for children",
    "children hairstylist",
    "protective hairstyles for kids",
    "afro-textured hair care",
    "curly hair stylist for kids",
    "kinky hair styling",
    "natural hair growth tips for kids",
    "braids for young girls",
    "twist styles for children",
    "detangling kids hair",
    "black children's hair care",
    "hair care for young black girls",
    "kids hair salon near me",
    "natural hairstylist for kids"
  ],
  metadataBase: new URL("https://jandjaynaturalhairs.vercel.app"), // replace with your actual domain
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "J&JAY Natural Hairs | Kids Natural Hair Salon",
    description:
      "Professional kids natural hair care and styling — braiding, twists, detangling, and afro-textured hair services for confident, joyful young ones.",
    url: "https://jandjaynaturalhairs.vercel.app",
    siteName: "J&JAY Natural Hairs",
    images: [
      {
        url: "https://jandjaynaturalhairs.vercel.app/logo.png", // replace with actual OG image URL
        width: 1200,
        height: 630,
        alt: "J&JAY Natural Hairs - Natural Hair Care for Kids",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "J&JAY Natural Hairs | Kids Natural Hair Stylist",
    description:
      "Gentle, joyful natural hair styling for kids — curls, kinks, and confidence. Book your visit today.",
    images: ["https://jandjaynaturalhairs.vercel.app/logo.png"], // same image or a dedicated one
    creator: "@jnjayhairs", // your Twitter handle if you have one
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="overflow-x-hidden">
      <body className={`${syne.className} antialiased text-base`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
