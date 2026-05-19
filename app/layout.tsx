import type { Metadata } from "next";
import { Fraunces, Inter, Roboto } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "700", "900"],
  variable: "--font-roboto",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Boutique Pilates Studio",
  description:
    "Strengthen your body, calm your mind — Pilates classes with expert instructors in a space designed for your transformation.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${inter.variable} ${roboto.variable} h-full scroll-smooth antialiased`}
    >
      <body className="flex min-h-screen flex-col bg-white text-dark font-sans">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
