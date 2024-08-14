import Image from 'next/image'

const Footer = () => {
  return (
    <div className="flex h-[25vh] w-full flex-col items-center justify-between bg-darkmengwi p-4">
      <div className="flex flex-col items-center">
        <Image
          src="/mengwi-logo-text-white.svg"
          alt="Footer Logo"
          width={100}
          height={100}
          className="mx-auto"
        />
        <div className="mt-2 text-sm font-semibold text-white">
          KKN-PPM Universitas Gadjah Mada 2024 Periode II
        </div>
      </div>
      {/* Contact */}
      <div className="flex items-center gap-10">
        <div className="flex items-center text-sm text-white">
          <Image
            src="/footer-ig-logo.svg"
            alt="Instagram Logo"
            width={20}
            height={20}
            className="mr-2"
          />
          @gantari.mengwi
        </div>
        <div className="flex items-center text-sm text-white">
          <Image
            src="/footer-gmail-logo.svg"
            alt="Email Logo"
            width={20}
            height={20}
            className="mr-2"
          />
          gantarimengwi2024@gmail.com
        </div>
      </div>
    </div>
  )
}

export default Footer
