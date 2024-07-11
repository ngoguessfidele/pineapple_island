import Image from "next/image"

const About = () => {
  return (
    <div className="relative flex flex-col md:flex-row px-[30px] md:px-[70px] lg:px-[110px] mt-6 md:mt-12 lg:mt-24 w-full">
      <div className="px-3 flex justify-center items-center">
        <h1 className="text-center md:text-start text-2xl text-primary font-bold">About<br/> Pineapple<br className="hidden md:block"/> Island</h1>
      </div>

      <div className="relative flex flex-1">
      <div className="relative h-[400px] w-5/6 flex-1">
        <Image src="/assets/images/about.png" alt="About us" layout="fill" objectFit="cover" />
      </div>
      <div className="flex-1 absolute top-16 left-0 md:relative md:top-0 md:left-0 text-white md:bg-primary flex justify-center items-center px-9">
        <p className="text-center md:text-start font-bold">
        Pineapple Island is the most sought-after  community in Ibadan that values and puts the needs of their clients first. It is a territory with loft complexes that creates a country life and homely feeling that is integrated with industrial development. A perfect, professional built  abode that gives you the true taste of beauty and happiness.
        </p>
      </div>
      </div>
    </div>
  )
}

export default About
