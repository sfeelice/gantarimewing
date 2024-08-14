import { Urbanist } from 'next/font/google'
import './globals.css'
import { Providers } from '@/components/Providers'
import { Navbar } from '@/components/navbar'

const urbanist = Urbanist({ subsets: ['latin'] })

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={urbanist.className}>
        <Navbar />
        <Providers>
          <main>{children}</main>
        </Providers>
      </body>
    </html>
  )
}
