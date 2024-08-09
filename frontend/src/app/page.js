import React from "react";
import Image from "next/image";
import Layout from "./layout";
import CardWithModal from "@/components/cardWithModal";
import Footer from "@/components/footer";

const Home = () => {
  return (
    <Layout>
      {/* Section 1 */}
      <div className="relative h-screen">
        <Image src="/bg-landing.svg" layout="fill" objectFit="cover" alt="Agritourism Village" priority />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-5xl font-bold">Welcome to Our Agritourism Village</h1>
            <p className="text-2xl mt-4">Immerse Yourself in Green Tourism</p>
          </div>
        </div>
      </div>
      {/* Baha Section */}
      <div className="relative bg-bluesky py-[4vw]">
        <div className="flex justify-between px-[10vw] mb-[3vw]">
          <div>
            <div className="text-3xl font-extrabold">Baha Village</div>
            <div className="font-regular text-sm">Making the Most of Your Travel Experience in 2023</div>
          </div>
          <button className="btn rounded-full border-1 border-primary text-primary bg-transparent hover:bg-primary hover:text-white">View All Destination</button>
        </div>
        {/* Cards */}
        <div>
          <div className="container mx-10 px-4">
            <div className="flex items-center justify-center gap-8">
              <CardWithModal src="/picture-jogging-track.png" title="Jogging Track Baha" description="Enjoy a refreshing jog at Jogging Track Baha surrounded by nature." />
              <CardWithModal src="/picture-etno-bali.png" title="Agritourism Bee Ethno Bali" description="Experience the unique agritourism activities at Bee Ethno Bali." />
              <CardWithModal src="/picture-taman-beji.png" title="Beji Manik Segara Garden" description="Relax and unwind at the beautiful Beji Manik Segara Garden." />
            </div>
          </div>
        </div>
      </div>
      {/* Sobangan Section */}
      <div className="relative bg-white py-[4vw]">
        <div className="flex justify-between px-[10vw] mb-[3vw]">
          <div>
            <div className="text-3xl font-extrabold">Sobangan Village</div>
            <div className="font-regular text-sm">Making the Most of Your Travel Experience in 2023</div>
          </div>
          <button className="btn rounded-full border-1 border-primary text-primary bg-transparent hover:bg-primary hover:text-white">View All Destination</button>
        </div>
        {/* Cards */}
        <div>
          <div className="container mx-10 px-4">
            <div className="flex items-center justify-center gap-8">
              <CardWithModal src="/picture-jogging-track.png" title="Jogging Track Baha" />
              <CardWithModal src="/picture-etno-bali.png" title="Agritourism Bee Ethno Bali" />
              <CardWithModal src="/picture-taman-beji.png" title="Beji Manik Segara Garden" />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </Layout>
  );
};

export default Home;
