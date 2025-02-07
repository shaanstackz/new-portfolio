import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./styles/globals.css";
import Head from 'next/head';


export const metadata: Metadata = {
  title: "Shaan Kohli",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&family=Fira+Code:wght@400;700&family=Press+Start+2P&display=swap" rel="stylesheet" />
      </Head>
      <body className={`overflow-y-scroll overflow-x-hidden font-roboto`}>
        {children}
      </body>
    </html>
  );
}
