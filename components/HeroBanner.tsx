import Image from 'next/image'

const HeroBanner = () => {
  return (
    <section className=" bg-gray-50 mx-auto px-12 md:px-6 pt-16 mt-12">
      <div className="relative rounded-2xl overflow-hidden shadow-xl">

        <Image
          src="https://minio-wgg8os0ks4og8gog0wgosckk.snext.in/generic-images/fg-hello.jpg"
          alt="Ganesh Shawl Emporium Banner"
          width={1920}
          height={1080}
          priority
          className="w-full h-auto object-cover"
          style={{
            maxWidth: '100%',
            height: 'auto',
          }}
        />

        {/* <div className="absolute inset-0 bg-black bg-opacity-20 md:bg-opacity-10"></div> */}

      </div>
    </section>
  )
}

export default HeroBanner