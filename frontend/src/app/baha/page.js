import Image from 'next/image'
import CardWithModal from '@/components/cardWithModal'
import Footer from '@/components/footer'

const Baha = () => {
  return (
    <div>
      {/* Section 1 */}
      <div className="relative h-screen">
        <Image
          src="/baha-ai.webp"
          layout="fill"
          objectFit="cover"
          alt="Agritourism Village"
          priority
        />
        <div className="absolute inset-0 flex items-center bg-black bg-opacity-50">
          <div className="mx-[10vw] flex w-full justify-between gap-10">
            {/* Description */}
            <div className="text-white">
              <div className="mb-6 text-5xl font-bold">Baha Village</div>
              <div className="text-justify">
                Baha Village, located in Mengwi District, Badung Regency, Bali, is a place where
                tradition and nature blend harmoniously. Just 30 minutes from Denpasar, this village
                offers a cool atmosphere with soothing views of rice fields, surrounded by famous
                tourist routes like Taman Ayun, Ubud, and Tanah Lot. In Baha, you can experience the
                tranquil village life, where the friendly community still upholds the Subak
                irrigation system and practices the &quot;Tri Hita Karana&quot; philosophy,
                maintaining a balance between humans, God, and nature. In this village, tourists can
                enjoy expansive rice field views, water tourism, agro-tourism, and cultural tourism,
                as well as interact directly with the warm and welcoming villagers.
              </div>
            </div>
            {/* Youtube Video */}
            <div className="my-auto flex h-[50vh] items-center justify-center bg-black">
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
        className="flex h-screen flex-col items-center justify-center bg-mengwi"
        style={{
          backgroundImage: "url('/pattern-white.png')",
          backgroundRepeat: 'repeat',
        }}
      >
        <h2 className="mb-8 text-5xl font-extrabold">Tourism Map</h2>
        <div className="flex justify-center space-x-8">
          <div className="flex items-center justify-center rounded-lg p-4">
            <Image src="/tourism-map-baha.svg" alt="Tourism Map Baha" width={400} height={400} />
          </div>
          <div className="bg-gray-200 flex items-center justify-center rounded-lg p-4">
            <Image
              src="/tourism-map-baha-desc.svg"
              alt="Tourism Map Baha Description"
              width={400}
              height={400}
            />
          </div>
        </div>
        <button className="mt-8 rounded-full bg-mengwi px-6 py-2 font-semibold text-white">
          Download Baha Village Travel Guide PDF
        </button>
      </div>
      {/* Section 3 Village Tourism*/}
      <div className="bg-gray-100 py-12">
        <div className="container mx-auto px-4">
          <h2 className="mb-6 text-3xl font-bold">Village Tourism</h2>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            <CardWithModal
              src="/path-to-image1.jpg"
              title="Pariwisata 1"
              description="Deskripsi Pariwisata 1."
            />
            <CardWithModal
              src="/picture-jogging-track.png"
              title="Jogging Track Baha"
              description="Enjoy a refreshing jog at Jogging Track Baha surrounded by nature."
            />
            <CardWithModal
              src="/path-to-image3.jpg"
              title="Pariwisata 3"
              description="Deskripsi Pariwisata 3."
            />
          </div>
        </div>
      </div>
      {/* Section 4 Culinary*/}
      <div className="bg-bluesky py-12">
        <div className="container mx-auto px-4">
          <h2 className="mb-6 text-3xl font-bold text-black">Culinary</h2>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            <CardWithModal
              src="/path-to-image-4.jpg"
              title="Kuliner 1"
              description="Deskripsi kuliner 1."
            />
            <CardWithModal
              src="/path-to-image-5.jpg"
              title="Kuliner 2"
              description="Deskripsi kuliner 2."
            />
            <CardWithModal
              src="/picture-jogging-track.png"
              title="Jogging Track Baha"
              description="Enjoy a refreshing jog at Jogging Track Baha surrounded by nature."
            />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}
export default Baha
