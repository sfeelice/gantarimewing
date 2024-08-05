"use client";
import { Urbanist } from "next/font/google";
import Link from "next/link";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import "./globals.css";

const urbanist = Urbanist({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <html lang="en">
      <body className={urbanist.className}>
        <header className={`fixed w-full z-30 transition-all duration-300 ${scroll ? "bg-opacity-75 bg-white shadow-lg" : "bg-transparent"}`}>
          <nav className="container mx-auto flex items-center justify-between p-5">
            <Link href="/">
              <div className="flex items-center">
                <Image src="/mengwi-logo.svg" alt="Mengwi Logo" width={50} height={50} />
              </div>
            </Link>
            <div className="flex items-center space-x-16 text-white text-lg">
              <Link href="/baha">
                <div>Baha Village</div>
              </Link>
              <Link href="/sobangan">
                <div>Sobangan Village</div>
              </Link>
              <Link href="/health">
                <div>Health Services</div>
              </Link>
            </div>
            <Link href="/contact-us">
              <button class="btn btn-primary">Button</button>
              {/* <button className="btn bg-primary text-white px-4 py-2 rounded-full">Contact Us</button> */}
            </Link>
          </nav>
        </header>
        {children}
      </body>
    </html>
  );
}
