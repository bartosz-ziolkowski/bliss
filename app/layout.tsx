import "./globals.css";

import { Baskervville, MuseoModerno } from "next/font/google";

import Footer from "../components/layout/Footer";
import Head from "./head";
import Header from "../components/layout/Header";
import type { Metadata } from "next";
import { Toaster } from "react-hot-toast";
import type { Viewport } from "next";
import localFont from "next/font/local";

const depotNew = localFont({
  src: [
    {
      path: "../public/fonts/DepotNew-Regular.woff2",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-depot-new",
});

const museoModerno = MuseoModerno({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-museo-moderno",
});
const baskerVille = Baskervville({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-basker-ville",
});

export const metadata: Metadata = {
  title: "bliss - redefined banking",
  description: "Banking Application",
};

export const viewport: Viewport = {
  themeColor: "#000000",
  initialScale: 1,
  width: "device-width",
  maximumScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${museoModerno.variable} ${baskerVille.variable} ${depotNew.variable}`}
    >
      <Head />
      <body>
        <Header />
        <Toaster />
        {children}
        <Footer />
      </body>
    </html>
  );
}
