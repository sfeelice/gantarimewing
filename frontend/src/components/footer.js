import Image from "next/image";

const Footer = () => {
  return (
    <div className="flex flex-col items-center justify-between w-full h-[25vh] bg-mengwi p-4">
      <div className="flex flex-col items-center">
        <Image src="/mengwi-logo-text-white.svg" alt="Footer Logo" width={100} height={100} className="mx-auto" />
        <div className="font-semibold text-white text-sm mt-2">KKN-PPM Universitas Gadjah Mada 2024 Periode II</div>
      </div>
      <div className="text-white text-sm mb-2">gantari@gmail</div>
    </div>
  );
};

export default Footer;
