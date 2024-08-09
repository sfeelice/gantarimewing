import Image from "next/image";
import Footer from "@/components/footer";

const HealthPage = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Mobile view */}
      <div className="block sm:hidden w-full h-full overflow-y-auto">
        <div className="relative w-full h-[200vh]">
          <Image src="/health-corner-portrait.svg" alt="Health Corner Portrait" layout="fill" objectFit="cover" />
        </div>
      </div>
      {/* Web view */}
      <div className="hidden sm:block w-full h-full">
        <Image src="/health-corner.svg" alt="Health Corner" layout="fill" objectFit="cover" />
      </div>
      <Footer />
    </div>
  );
};

export default HealthPage;
