import React from 'react'
import Image from 'next/image'
import Layout from './layout'
import CardWithModal from '@/components/cardWithModal'
import Footer from '@/components/footer'
import Link from 'next/link'

const Home = () => {
  return (
    <Layout>
      {/* Section 1 */}
      <div className="relative h-screen">
        <Image
          src="/bg-landing.svg"
          layout="fill"
          objectFit="cover"
          alt="Agritourism Village"
          priority
        />
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="text-center text-white">
            <h1 className="text-5xl font-bold">Welcome to Our Agritourism Village</h1>
            <p className="mt-4 text-2xl">Immerse Yourself in Green Tourism</p>
          </div>
        </div>
      </div>
      {/* Baha Section */}
      <div className="relative bg-bluesky py-[4vw]">
        <div className="mb-[3vw] flex justify-between px-[10vw]">
          <div>
            <div className="text-3xl font-extrabold">Baha Village</div>
            <div className="font-regular text-sm">
              Making the Most of Your Travel Experience in 2024
            </div>
          </div>
          <Link href="/baha">
            <button className="border-1 btn rounded-full border-primary bg-transparent text-primary hover:bg-primary hover:text-white">
              View All Destination
            </button>
          </Link>
        </div>
        {/* Cards */}
        <div>
          <div className="container mx-10 px-4">
            <div className="flex items-center justify-center gap-8">
              <CardWithModal
                src="/picture-jogging-track.png"
                title="Jogging Track Baha"
                description="The Subak Lepud Jogging Track is a prime destination in Baha Village Tourism, offering a jogging path that stretches between lush green rice fields and beautiful gumitir flower gardens. Visitors can enjoy fresh air and breathtaking natural views throughout their journey. Midway along the jogging route, there is Warung Uma Sana, a perfect rest stop for tourists to savor local dishes. If you visit at 07:00 WITA, you can witness farmers planting rice or picking flowers, providing an authentic experience that combines exercise with cultural insights."
                contact="081234567890"
                price="200000"
              />
              <CardWithModal
                src="/picture-etno-bali.png"
                title="Agritourism Bee Ethno Bali"
                description="Etno Bali Honey is an agro-tourism destination located at Jl. Rampai No.43, Baha, Mengwi District, Badung Regency, Bali. Here, visitors can enjoy a unique and educational experience by touring a beekeeping farm. You can learn about honey extraction techniques, taste fresh pure honey straight from the hive, and purchase naturally produced, pure honey products. Additionally, visitors can take in the pristine natural scenery and fresh air, making Etno Bali Honey the perfect spot to combine nature tourism with education and healthy cuisine."
                price="200000"
                contact="081234567890"
              />
              <CardWithModal
                src="/picture-taman-beji.png"
                title="Beji Manik Segara Garden"
                description="Taman Beji Manik Segara in Baha Village, Bali, is a sacred site for Hindus, used for purification rituals and meditation. According to its owner, I Ketut Kerta, the name of the garden was inspired by guidance received by two individuals in different locations. The garden is also known as pancoran gulingan and features three water springs from the west, north, and south, believed to have healing properties for various ailments. Additionally, there is a temple on the site used for ceremonies during the full moon of Kesada. As part of the village tourism initiative, Taman Beji Manik Segara has become one of the popular tourist destinations in Baha Village."
                contact="081234567890"
                price="200000"
              />
            </div>
          </div>
        </div>
      </div>
      {/* Sobangan Section */}
      <div className="relative bg-white py-[4vw]">
        <div className="mb-[3vw] flex justify-between px-[10vw]">
          <div>
            <div className="text-3xl font-extrabold">Sobangan Village</div>
            <div className="font-regular text-sm">
              Making the Most of Your Travel Experience in 2024
            </div>
          </div>
          <Link href="/sobangan">
            <button className="border-1 btn rounded-full border-primary bg-transparent text-primary hover:bg-primary hover:text-white">
              View All Destination
            </button>
          </Link>
        </div>
        {/* Cards */}
        <div>
          <div className="container mx-10 px-4">
            <div className="flex items-center justify-center gap-8">
              <CardWithModal
                src="/picture-jogtrack-sobi.png"
                title="Jogging Track Sobangan"
                description="new sobangan jogging track"
                price="200000"
                contact="081234567890"
              />
              <CardWithModal
                src="/picture-tjok-tresna.png"
                title="Monumen Tjok Agung Tresna"
                description="The Tugu Pahlawan Tjok Agung Tresna in Sobangan Traditional Village, Mengwi District, Badung, honors the independence fighter Tjokorda Agung Tresna with its palinggih padmasana form. Situated near the mystical sugar palm tree by Pura Puseh Gunung Agung Sobangan, it reflects the site's sacredness. Sobangan, a key site during Indonesia's independence struggle, housed the Indonesian People's Struggle Council (MBDPRI) Pandawa led by Tjok Agung Tresna. The monument represents both a historical landmark and Sobangan's role in safeguarding Indonesia's independence."
                price="200000"
                contact="081234567890"
              />
              <CardWithModal
                src="/picture-solas.JPG"
                title="Pancoran Solas"
                description="Pancoran Solas Pura Ulun Carik, located in the Sobangan Traditional Village, Mengwi District, is the oldest water source offering stunning river views. This site holds significant spiritual value, used by the local community for the Ngusaba Nini and Ngusaba Desa ceremonies, where holy water (tirtha) is collected for rituals believed to promote a prosperous life and uphold truth. In addition to being a source of clean water, Pancoran Solas is also a site for melukat, a traditional Hindu purification ceremony for the mind and soul. Visitors can experience spiritual peace while participating in melukat by the river. When visiting, please ensure to maintain cleanliness and preserve the sanctity of this sacred place."
                price="200000"
                contact="081234567890"
              />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </Layout>
  )
}

export default Home
