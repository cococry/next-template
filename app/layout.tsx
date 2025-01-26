import type { Metadata } from "next";
import { Lora } from "@next/font/google";
import "./globals.css";

const lora = Lora({
  subsets: ["latin"], 
  variable: "--font-lora", 
  weight: ["500", "700"],
  style: "italic"
});


import { Poppins } from '@next/font/google';
import { Playfair_Display, Lato } from '@next/font/google';

// Define font styles
const playfairDisplay = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '700'], 
  variable: "--font-playfair", 
});

const lato = Lato({
  subsets: ['latin'],
  weight: ['400', '700'], 
  variable: "--font-lato", 
});


const poppins = Poppins({
  subsets: ['latin'], 
  weight: ['400', '500', '600', '700'], 
  display: 'swap', 
  variable: "--font-poppins", 
});

import { Inter } from 'next/font/google';

const inter = Inter({
  subsets: ['latin'], 
  weight: ['400', '700'], 
  display: 'swap', 
  variable: "--font-inter", 
});


export const metadata: Metadata = {
  title: "Next Site",
  description: "The industrial revolution and it's consequences have been a disaster to the human race.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${lora.variable} ${lato.variable} ${playfairDisplay.variable} ${inter.variable} ${poppins.variable}  antialiased bg-black`}>
        {children}
      </body>
    </html>
  );
}

