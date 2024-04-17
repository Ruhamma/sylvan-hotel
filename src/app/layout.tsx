"use client";
import { Golos_Text, Cinzel } from "next/font/google";
import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Toaster, toast } from "sonner";
const cinzel = Cinzel({
  subsets: ["latin"],
  variable: "--secondary-font",
});
const golos = Golos_Text({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--primary-font",
  display: "swap",
  adjustFontFallback: false,
});

import Head from "next/head";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>My Website</title>
        <meta name="description" content="Welcome to my website" />
        <meta name="keywords" content="website, react, next.js" />
      </Head>
      <html lang="en" className={`${golos.variable} ${cinzel.variable}`}>
        <body className="bg-primary font-primary max-w-screen-2xl mx-auto">
          <Header />
          {children}
          <Footer />
          <Toaster
            position="top-left"
            toastOptions={{
              classNames: {
                toast: "bg-secondary",
                title: "text-white",
                description: "text-white",
                actionButton: "bg-zinc-400",
                cancelButton: "bg-orange-400",
                closeButton: "bg-lime-400",
              },
            }}
          />
        </body>
      </html>
    </>
  );
}
