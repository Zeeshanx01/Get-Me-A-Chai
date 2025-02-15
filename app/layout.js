import localFont from "next/font/local";
import { Inter } from "next/font/google"
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SessionWrapper from "@/components/SessionWrapper";
import NextTopLoader from 'nextjs-toploader';


const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Get Me A Chai",
  description: "Generated by create next app",
};
// `${geistSans.variable} ${geistMono.variable} antialiased`
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased text-white bg-[#000000] bg-[radial-gradient(#ffffff33_1px,#00091d_1px)] bg-[size:20px_20px] `}>

        <SessionWrapper>

          <Navbar />
          <div className="min-h-[80vh] text-white bg-[#000000] bg-[radial-gradient(#ffffff33_1px,#00091d_1px)] bg-[size:20px_20px]">
            <NextTopLoader />
            {children}
          </div>
          <Footer />
        </SessionWrapper>



      </body>
    </html>
  );
}
