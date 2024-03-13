import type { Metadata } from "next";
import "./globals.css";
import { poppins } from "./ui/fonts";
import Head from "next/head";

export const metadata: Metadata = {
  title: "Friendly Betting",
  icons: {
    icon: "./favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="cs">
      <body className={poppins.className}>{children}</body>
    </html>
  );
}
