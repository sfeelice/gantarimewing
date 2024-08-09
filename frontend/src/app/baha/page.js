import Image from "next/image";
import CardWithModal from "@/components/cardWithModal";
const Baha = () => {
  return (
    <div>
      {/* Section 1 */}
      <div className="relative h-screen">
        <Image src="/baha-ai.webp" layout="fill" objectFit="cover" alt="Agritourism Village" priority />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center">
          <div className="w-full flex justify-between mx-[10vw] gap-10">
            {/* Description */}
            <div className="text-white">
              <div className="font-bold text-5xl mb-6">Baha Village</div>
              <div>
                Ini Deskripsinya Ini Deskripsinya Ini Deskripsinya Ini Deskripsinya Ini Deskripsinya Ini Deskripsinya Ini Deskripsinya Ini Deskripsinya Ini Deskripsinya Ini Deskripsinya Ini
                Deskripsinya Ini Deskripsinya
              </div>
            </div>
            {/* Youtube Video */}
            <div className="h-[50vh] flex items-center justify-center bg-yellow-100">
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/QhSoNpADm7U"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </div>
      {/* Section 2 */}
      <div className="h-screen bg-white flex flex-col items-center justify-center">
        <div className="relative w-full h-[50vh]">
          <Image src="/pw-baha.svg" layout="fill" objectFit="contain" alt="Baha Tourism Map" priority />
        </div>
      </div>
      {/* Section 3 Village Tourism*/}
      <div className="py-12 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6">Village Tourism</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <CardWithModal src="/path-to-image1.jpg" title="Pariwisata 1" description="Deskripsi Pariwisata 1." />
            <CardWithModal src="/picture-jogging-track.png" title="Jogging Track Baha" description="Enjoy a refreshing jog at Jogging Track Baha surrounded by nature." />
            <CardWithModal src="/path-to-image3.jpg" title="Pariwisata 3" description="Deskripsi Pariwisata 3." />
          </div>
        </div>
      </div>
      {/* Section 4 Culinary*/}
      <div className="py-12 bg-accent">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6 text-white">Culinary</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <CardWithModal src="/path-to-image-4.jpg" title="Kuliner 1" description="Deskripsi kuliner 1." />
            <CardWithModal src="/path-to-image-5.jpg" title="Kuliner 2" description="Deskripsi kuliner 2." />
            <CardWithModal src="/picture-jogging-track.png" title="Jogging Track Baha" description="Enjoy a refreshing jog at Jogging Track Baha surrounded by nature." />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Baha;
