import Link from 'next/link'
import Image from 'next/image'

export default function NotFound() {
  return (
    <div
      className="flex min-h-screen items-center justify-center bg-white bg-cover bg-center"
      style={{ backgroundImage: "url('/pattern.png')" }}
    >
      <div className="text-center">
        <Image src="/404.svg" alt="404 Page Not Found" width={400} height={400} />
        <Link href="/">
          <button className="font-bold">Go Back Home</button>
        </Link>
      </div>
    </div>
  )
}
