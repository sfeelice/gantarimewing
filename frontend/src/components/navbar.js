// src/components/Navbar.js
"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
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
    <header className={`fixed w-full z-30 transition-all duration-300 ${scroll ? "bg-opacity-75 bg-white shadow-lg" : "bg-transparent"}`}>
      <nav className="container mx-auto flex items-center justify-between p-5">
        <Link href="/">
          <div className="flex items-center">
            <Image src="/mengwi-logo.svg" alt="Mengwi Logo" width={50} height={50} />
          </div>
        </Link>
        <div className={`flex items-center space-x-16 text-lg ${scroll ? "text-black" : "text-white"}`}>
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
          <div className={`px-4 py-2 rounded-full ${scroll ? "bg-primary text-black" : "bg-white text-white"}`}>Contact Us</div>
        </Link>
      </nav>
    </header>
  );
};

export default Navbar;
