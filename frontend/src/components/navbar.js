'use client'

import Link from 'next/link'
import Image from 'next/image'
import React, { useState, useEffect } from 'react'
import { usePathname, useRouter } from 'next/navigation'

export function Navbar() {
  const [scroll, setScroll] = useState(false)
  const pathname = usePathname()
  const router = useRouter()

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50 && pathname !== '/health') {
        setScroll(true)
      } else {
        setScroll(false)
      }
    }

    // Check scroll position on initial load
    handleScroll()
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [pathname]) // Tambahkan pathname sebagai dependency

  const noNavbarPaths = ['/auth/sign-in', '/auth/sign-up', '/admin/dashboard']
  const showNavbar = !noNavbarPaths.includes(pathname)
  return (
    <>
      {showNavbar && (
        <header
          className={`fixed z-30 w-full transition-all duration-300 ${scroll || pathname === '/health' ? 'bg-black bg-opacity-75 shadow-lg' : 'bg-transparent'}`}
        >
          <nav className="container mx-auto flex items-center justify-between p-5">
            <Link href="/">
              <div className="flex items-center">
                <Image
                  src="/mengwi-logo-text-white.svg"
                  alt="Mengwi Logo"
                  width={100}
                  height={100}
                  className="transition-transform duration-200 ease-in-out hover:scale-105 hover:transform"
                />
              </div>
            </Link>
            <div className={`flex items-center space-x-16 text-lg text-white`}>
              <Link href="/baha">
                <div
                  className={`rounded-full px-4 py-2 ${pathname === '/baha' ? 'bg-mengwi text-white' : 'hover:bg-mengwi'}`}
                >
                  Baha Village
                </div>
              </Link>
              <Link href="/sobangan">
                <div
                  className={`rounded-full px-4 py-2 ${pathname === '/sobangan' ? 'bg-mengwi text-white' : 'hover:bg-mengwi'}`}
                >
                  Sobangan Village
                </div>
              </Link>
              <Link href="/health">
                <div
                  className={`rounded-full px-4 py-2 ${pathname === '/health' ? 'bg-mengwi text-white' : 'hover:bg-mengwi'}`}
                >
                  Health Services
                </div>
              </Link>
            </div>
            <Link href="/contact-us">
              <div
                className={`rounded-full bg-white px-4 py-2 font-semibold hover:bg-primary hover:text-white`}
              >
                Contact Us
              </div>
            </Link>
          </nav>
        </header>
      )}
    </>
  )
}
