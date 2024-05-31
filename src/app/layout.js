import { Inter } from "next/font/google";
import "./globals.css";
import Head from "next/head";
import Image from "next/image";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Hardik's Portfolio Website",
  description: "Portfolio Website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <link rel="icon" href="./favicon.ico" />
        {/* <Image src="/images/tab1.png"  /> */}
      </Head>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}
