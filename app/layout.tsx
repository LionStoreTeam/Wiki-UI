import type { Metadata } from "next";
import "./globals.css";
import { manrope } from "./fonts/fonts";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

export const metadata: Metadata = {
  title: "Wiki UI",
  description: "Wiki UI - Templates, resources and more...",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      </head>
      <body
        className={manrope.className}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
