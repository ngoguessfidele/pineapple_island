import Image from "next/image"

const Gallery = () => {
  return (
    <div className="flex flex-col gap-8 mt-12 mx-[100xp] items-center">
      <div>
        <h1 className="text-primary font-bold">Galleries</h1>
      </div>
      <div>
        <p className="text-primary text-center">
        A community that gives you a taste of happiness, a place you’ll love to live and<br /> an opportunity to build a home.
        </p>
      </div>
      <div className="relative flex flex-col gap-4 w-full px-[50px] lg:px-[100px]">
        <div className="h-[250px] relative w-full flex gap-4">
            <div className="flex-1 relative">
                <Image src="/assets/images/1.png" alt="gallery" layout="fill" objectFit="cover" />
            </div>
            <div className="flex-1 relative">
                <Image src="/assets/images/2.png" alt="gallery" layout="fill" objectFit="cover" />
            </div>
            <div className="flex-1 relative">
                <Image src="/assets/images/3.png" alt="gallery" layout="fill" objectFit="cover" />
            </div>
        </div>
        <div className="h-[250px] relative w-full flex gap-4">
            <div className="flex-1 relative">
                <Image src="/assets/images/4.png" alt="gallery" layout="fill" objectFit="cover" />
            </div>
            <div className="flex-1 relative">
                <Image src="/assets/images/5.png" alt="gallery" layout="fill" objectFit="cover" />
            </div>
            <div className="flex-1 relative">
                <Image src="/assets/images/6.png" alt="gallery" layout="fill" objectFit="cover" />
            </div>
        </div>
        <div className="h-[250px] relative w-full flex gap-4">
            <div className="flex-1 relative">
                <Image src="/assets/images/7.png" alt="gallery" layout="fill" objectFit="cover" />
            </div>
            <div className="flex-1 relative">
                <Image src="/assets/images/8.png" alt="gallery" layout="fill" objectFit="cover" />
            </div>
            <div className="flex-1 relative">
                <Image src="/assets/images/9.png" alt="gallery" layout="fill" objectFit="cover" />
            </div>
        </div>
      </div>
    </div>
  )
}

export default Gallery
