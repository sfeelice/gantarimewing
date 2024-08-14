import Image from 'next/image'
import Footer from '@/components/footer'

const HealthPage = () => {
  return (
    <div
      className="flex min-h-screen flex-col items-center justify-center bg-mengwi pt-[15vh]"
      style={{
        backgroundImage: "url('/pattern-white.png')",
        backgroundRepeat: 'repeat',
      }}
    >
      <h1 className="my-12 text-center text-4xl font-bold">Health Corner Location</h1>
      <div className="flex justify-around space-x-8">
        <div className="flex flex-col items-center">
          <div className="mb-2 text-lg font-semibold">Baha</div>
          <div className="bg-gray-200 rounded-lg p-4">
            <Image src="/hc-baha.svg" alt="Baha Location" width={300} height={300} />
          </div>
        </div>
        <div className="flex flex-col items-center">
          <div className="mb-2 text-lg font-semibold">Sobangan</div>
          <div className="bg-gray-200 rounded-lg p-4">
            <Image src="/hc-sobi.svg" alt="Sobangan Location" width={300} height={300} />
          </div>
        </div>
        <div className="flex flex-col items-center">
          <div className="mb-2 text-lg font-semibold">Simbol</div>
          <div className="bg-gray-200 rounded-lg p-4">
            <Image src="/hc-simbol.svg" alt="Simbol Location" width={200} height={200} />
          </div>
        </div>
      </div>
      <div className="m-10 flex justify-around space-x-8">
        <div className="rounded-lg p-4">
          <Image src="/hc-isi.svg" alt="Isi Location" width={300} height={300} />
        </div>
        <div className="rounded-lg p-4">
          <Image src="/hc-step.svg" alt="Step Location" width={800} height={150} />
        </div>
        <div className="rounded-lg p-4">
          <Image src="/hc-agroot.svg" alt="Agroot Location" width={150} height={150} />
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default HealthPage
