import type { Metadata } from "next";
import { Roboto } from "next/font/google"
import "./globals.css";
import Providers from "./providers";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Footer from "./components/Footer";


const roboto = Roboto({subsets: ["latin"], weight: ["300", "500", "900"]})

export const metadata: Metadata = {
  title: "My Firts blog",
  description: "Created by Geo",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={roboto.className} 
      >
        <Providers>
          <Header />
          <Hero />
          
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
