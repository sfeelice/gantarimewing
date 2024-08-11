import Image from "next/image";

const Footer = () => {
  return (
    <div className="flex flex-col items-center justify-between w-full h-[25vh] bg-darkmengwi p-4">
      <div className="flex flex-col items-center">
        <Image src="/mengwi-logo-text-white.svg" alt="Footer Logo" width={100} height={100} className="mx-auto" />
        <div className="font-semibold text-white text-sm mt-2">KKN-PPM Universitas Gadjah Mada 2024 Periode II</div>
      </div>
      {/* Contact */}
      <div className="flex gap-10 items-center">
        <div className="flex items-center text-white text-sm">
          <Image src="/footer-ig-logo.svg" alt="Instagram Logo" width={20} height={20} className="mr-2" />
          @gantari.mengwi
        </div>
        <div className="flex items-center text-white text-sm">
          <Image src="/footer-gmail-logo.svg" alt="Email Logo" width={20} height={20} className="mr-2" />
          gantarimengwi2024@gmail.com
        </div>
      </div>
    </div>
  );
};

export default Footer;
