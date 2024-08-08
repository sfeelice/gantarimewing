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
    // Check scroll position on initial load
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <html lang="en">
      <body className={urbanist.className}>
        <header className={`fixed w-full z-30 transition-all duration-300 ${scroll ? "bg-opacity-75 bg-black shadow-lg" : "bg-transparent"}`}>
          <nav className="container mx-auto flex items-center justify-between p-5">
            <a href="/">
              <div className="flex items-center">
                <Image src="/mengwi-logo-text-white.svg" alt="Mengwi Logo" width={100} height={100} />
              </div>
            </a>
            <div className={`flex items-center space-x-16 text-white text-lg`}>
              <a href="/baha">
                <div>Baha Village</div>
              </a>
              <a href="/sobangan">
                <div>Sobangan Village</div>
              </a>
              <a href="/health">
                <div>Health Services</div>
              </a>
            </div>
            <a href="/contact-us">
              <div className={`px-4 py-2 rounded-full bg-white font-semibold hover:bg-primary hover:text-white`}>Contact Us</div>
            </a>
          </nav>
        </header>
        {children}
      </body>
    </html>
  );
}
