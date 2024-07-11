import Image from "next/image"

const Choose = () => {
  return (
    <div className="bg-white mt-[100px] relative flex flex-col items-center md:flex-row md:h-[450px] max-w-full overflow-hidden px-[30px] md:px-0">
      <div className="md:bg-primary md:h-[450px] w-[100%] flex justify-center md:justify-start items-center relative md:absolute -z-25 polygon pb-4 md:pb-0">
        <div className="relative md:h-[200px] md:w-[80px] flex  items-center md:left-[30px] lg:left-[100px]">
            <h1 className="text-primary md:text-white text-xl md:text-3xl font-bold">Why Choose Pineapple Island</h1>
        </div>
      </div>
        <div className=" md:mt-12 flex flex-col md:flex-row justify-center items-center relative md:left-1/4 bg-white ">
            
            <div className="relative flex justify-center items-center text-primary w-full h-[300px] md:w-[300px] md:h-[380px] md:shadow-2xl">
                <p className="md:my-14 md:mx-6 text-center md:text-start">
                Pineapple Island is the most sought-after  community in Ibadan that values and puts the needs of their clients first. It is a territory with loft complexes that creates a country life and homely feeling that is integrated with industrial development. A perfect, professional built  abode that gives you the true taste of beauty and happiness.
                </p>
            </div>
            <div className="w-[500px] h-[380px] mt-5 md:mt-0 relative">
                <Image src="/assets/images/choise.png" alt="Your choise" layout="fill" objectFit="cover" />
            </div>
        </div>
      
    </div>
  )
}

export default Choose
