import Image from "next/image"

const Hero = () => {
  return (
    <div className="relative flex justify-end ml-[30px] md:ml-[60px] lg:ml-[100px] mt-4 mr-[30px] md:[60px] lg:mr-0">
        <div className="md:relative w-full md:w-[70%] h-[600px] flex items-center justify-center">
            <Image src="/assets/images/hero.png" alt="hero" layout="fill" objectFit="cover"/>
        </div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 md:translate-x-0 md:translate-y-0 md:left-0 md:top-1/4 font-bold md:bg-primary text-white md:w-[40%] h-[400px] md:h-[360px] p-6 flex flex-col justify-center items-center md:items-start">
            <h1 className="text-2xl md:text-3xl text-center">Pineapple Island:GenZ and Millenial Abode
            </h1>
            <p className="mt-3 text-center">A community that gives you a taste of happiness, a place you’ll love to live and an opportunity to build a home.</p>
            <button className="block md:hidden text-primary bg-white mt-6 px-4 py-2">Get in touch</button>
        </div>
    </div>
  )
}

export default Hero
