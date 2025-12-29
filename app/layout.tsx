import type { Metadata } from "next";
import { Roboto } from "next/font/google"
import Script from "next/script"
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "../styles/main.scss";

const roboto = Roboto({
  subsets: ["latin"],
  variable: "--font--body",
})

export const metadata: Metadata = {
  title: "The News Website",
  description: "News of Security, Politics, Health and Sport",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <Script
          src="https://kit.fontawesome.com/3fffe4c1b5.js"
          crossOrigin="anonymous"
          strategy="beforeInteractive"
        />
      </head>
      <body className={roboto.variable}>
        <Header />
        <main>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
