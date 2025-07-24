import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Head from "next/head";
import Script from "next/script";
import Profile from "./components/Profile/Profile";
import NavBar from "./components/NavBar/NavBar";
import MobileNav from "./components/MobileNav/MobileNav";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Himanshu's Portfolio",
  description: "Portfolio of Himanshu",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Roboto:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet"></link>
      </Head>
        <Script src="https://kit.fontawesome.com/9fa326583e.js" crossOrigin="anonymous"></Script>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        
        <div className="main-page">

          <section className="left">
            <Profile />
          </section>

          <section className="right">
            <NavBar />
            {children}
          </section>

          <MobileNav />
          
        </div>
        
      </body>
    </html>
  );
}
