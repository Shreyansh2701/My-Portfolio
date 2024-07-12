import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import ActiveSectionContextProvider from "@/context/active-section-context";
import Footer from "@/components/footer";
import { Toaster } from "react-hot-toast";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Shreyansh | Portfolio",
  description: "Shreyansh is a full-stack developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body suppressHydrationWarning={true} className={`${inter.className} relative pt-28 sm:pt-36 bg-gray-900 text-gray-50 text-opacity-90`}>
        <div className="-z-10 absolute top-[-6rem] right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] bg-[#946263]"></div>
        <div className="-z-10 absolute top-[-1rem] left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] bg-[#676394]"></div>
          <ActiveSectionContextProvider >
            <Header/>
            {children}
            <Footer />

            <Toaster position="top-right" />
          </ActiveSectionContextProvider>
      </body>
    </html>
  );
}
