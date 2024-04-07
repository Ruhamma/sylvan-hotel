import type { Metadata } from "next";
import { Golos_Text, Cinzel } from "next/font/google";
import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

const cinzel = Cinzel({
  subsets: ["latin"],
  variable: "--secondary-font",
});
const golos = Golos_Text({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--primary-font",
});
export const metadata: Metadata = {
  title: "The Sylvan",
  description: "Immerse yourself in nature's luxury at The Sylvan Sanctuary",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${golos.variable} ${cinzel.variable}`}>
      <body className="bg-primary font-primary max-w-screen-2xl mx-auto">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
