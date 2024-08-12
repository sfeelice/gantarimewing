import Image from "next/image";
import CardWithModal from "@/components/cardWithModal";
import Footer from "@/components/footer";

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
              <div className="text-justify">
                Baha Village, located in Mengwi District, Badung Regency, Bali, is a place where tradition and nature blend harmoniously. Just 30 minutes from Denpasar, this village offers a cool
                atmosphere with soothing views of rice fields, surrounded by famous tourist routes like Taman Ayun, Ubud, and Tanah Lot. In Baha, you can experience the tranquil village life, where
                the friendly community still upholds the Subak irrigation system and practices the "Tri Hita Karana" philosophy, maintaining a balance between humans, God, and nature. In this village,
                tourists can enjoy expansive rice field views, water tourism, agro-tourism, and cultural tourism, as well as interact directly with the warm and welcoming villagers.
              </div>
            </div>
            {/* Youtube Video */}
            <div className="h-[50vh] flex items-center my-auto justify-center bg-black">
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/oNWip_cu4_Y"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </div>
      {/* Section 2 */}
      <div
        className="h-screen bg-mengwi flex flex-col items-center justify-center"
        style={{
          backgroundImage: "url('/pattern-white.png')",
          backgroundRepeat: "repeat",
        }}
      >
        <h2 className="text-5xl font-extrabold mb-8">Tourism Map</h2>
        <div className="flex justify-center space-x-8">
          <div className="flex justify-center items-center p-4 rounded-lg">
            <Image src="/tourism-map-baha.svg" alt="Tourism Map Baha" width={400} height={400} />
          </div>
          <div className="flex justify-center items-center bg-gray-200 p-4 rounded-lg">
            <Image src="/tourism-map-baha-desc.svg" alt="Tourism Map Baha Description" width={400} height={400} />
          </div>
        </div>
        <button className="mt-8 px-6 py-2 bg-mengwi text-white font-semibold rounded-full">Download Baha Village Travel Guide PDF</button>
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
      <div className="py-12 bg-bluesky">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6 text-black">Culinary</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <CardWithModal src="/path-to-image-4.jpg" title="Kuliner 1" description="Deskripsi kuliner 1." />
            <CardWithModal src="/path-to-image-5.jpg" title="Kuliner 2" description="Deskripsi kuliner 2." />
            <CardWithModal src="/picture-jogging-track.png" title="Jogging Track Baha" description="Enjoy a refreshing jog at Jogging Track Baha surrounded by nature." />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
export default Baha;
