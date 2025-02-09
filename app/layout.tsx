import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import "./globals.css";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Tidal Sites Template",
  description: "A template for Tidal Sites websites",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
