import type { Metadata } from "next";
import "./globals.css";
import { manrope } from "./fonts/fonts";

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
      <body
        className={manrope.className}
      >
        {children}
      </body>
    </html>
  );
}
