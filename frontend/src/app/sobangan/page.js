import Image from "next/image";
import CardWithModal from "@/components/cardWithModal";
import Footer from "@/components/footer";

const Sobangan = () => {
  return (
    <div>
      {/* Section 1 */}
      <div className="relative h-screen">
        <Image src="/sobi-ai.webp" layout="fill" objectFit="cover" alt="Agritourism Village" priority />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center">
          <div className="w-full flex justify-between mx-[10vw] gap-10">
            {/* Description */}
            <div className="text-white shadow-xl">
              <div className="font-bold text-5xl mb-6">Sobangan Village</div>
              <div className="text-justify">
                Sobangan Village, located in Mengwi District, Badung Regency, covers an area of approximately 256.56 hectares. It is bordered by Sembung Village to the north, Ayunan Village to the
                east, Baha Village to the south, and Werdi Bhuwana Village to the west. This village consists of two traditional villages, namely Dukuh Moncos Traditional Village and Sobangan
                Traditional Village, and includes four Banjars: Banjar Dukuh Moncos, Banjar Tegalnarungan, Banjar Tengah, and Banjar Selat. Additionally, Sobangan has four Subaks, namely Subak Babakan
                Sobangan, Subak Abian Manik Sarwa Nadi, Subak Abian Tegal Sari, and Subak Abian Werdi Putra Sedana, highlighting the strong agricultural traditions of the village. The potential of
                Sobangan Village spans various sectors including agriculture, education, livestock farming, human resources, arts, and MSMEs.
              </div>
            </div>
            {/* Youtube Video */}
            <div className="h-[50vh] flex items-center my-auto justify-center">
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/qtNXDkFYWmk"
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
        className="h-screen bg-black flex flex-col items-center justify-center"
        style={{
          backgroundImage: "url('/pattern-tosca.png')",
          backgroundRepeat: "repeat",
        }}
      >
        <div className="relative w-full h-[50vh] flex justify-between items-center px-4">
          {/* Gambar Gapura di Kiri */}
          <div className="flex items-center justify-end h-full w-1/4">
            <Image src="/gapura.svg" alt="Gapura Kiri" layout="intrinsic" width={100} height={100} />
          </div>
          {/* Youtube Video */}
          <div className="h-[50vh] flex items-center justify-center bg-transparent">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/-9d8eqEG1os"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          {/* Gambar Gapura di Kanan (Mirror) */}
          <div className="flex items-center justify-start h-full w-1/4">
            <Image
              src="/gapura.svg"
              alt="Gapura Kanan"
              layout="intrinsic"
              width={100}
              height={100}
              className="transform scale-x-[-1]" // Mirror Horizontal
            />
          </div>
        </div>
        <div className="text-black font-bold text-center text-justify mt-2 w-3/4 mx-auto bg-white p-8 rounded-3xl">
          Welcome to Sobangan Village, a hidden gem in the heart of Bali, rich in history and culture. In this video, we will take you on a journey through Sobangan Village, which was established in
          1993 as a result of the division from Baha Village. This village offers unparalleled natural beauty—from vast expanses of rice fields to eye-catching flower gardens. Enjoy the serenity of
          the jogging track that cuts through the fields, and relish the crystal-clear spring water at Pancoran Solas. Sobangan Village is also home to the Bali cattle breeding center, attracting
          researchers and tourists who wish to delve deeper into its natural and cultural wealth. However, Sobangan Village is not just about nature and culture. Behind its beauty lies an inspiring
          story of struggle, making it a must-visit and learn from this village, which is now known as a struggle-based tourism village.
        </div>
      </div>
      {/* Section 3 Tourism Map */}
      <div
        className="py-12 bg-white"
        style={{
          backgroundImage: "url('/pattern-white.png')",
          backgroundRepeat: "repeat",
        }}
      >
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6 text-center">Tourism Map</h2>
          <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-8">
            {/* Gambar Tourism Map */}
            <div className="flex justify-center">
              <Image src="/tourism-map-sobi.svg" alt="Tourism Map Sobi" width={250} height={250} className="rounded-lg shadow-lg" />
            </div>
            {/* Gambar Tourism Map Description */}
            <div className="flex justify-center">
              <Image src="/tourism-map-sobi-desc.svg" alt="Tourism Map Sobi Description" width={400} height={400} className="rounded-lg shadow-lg" />
            </div>
          </div>
        </div>
      </div>
      <div></div>
      {/* Section 4 Village Tourism*/}
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
      {/* Section 5 Culinary*/}
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
      <Footer />
    </div>
  );
};
export default Sobangan;
