import Image from "next/image"

const Offer = () => {
  return (
    <div className="relative px-[30px] md:px-0 flex flex-col items-center mt-20">
      <div>
        <h1 className="text-primary font-bold">What Pineapple Land Offers</h1>
      </div>
      <div className="mt-10 relative flex  md:grid grid-cols-2 grid-rows-2">
        
        <div className="relative w-[450px] md:w-[350px] h-[500px] md:h-[200px] lg:w-[500px] lg:h-[350px]">
        <div className="hidden md:block absolute h-[60%] w-1/2 left-1/2 top-[20%] bg-primary" />
            <div className="relative h-full w-full md:w-[80%]">
                <Image src="/assets/images/offer1.png" alt="offer" layout="fill" objectFit="cover" />
            </div>
        </div>
        <div className="relative w-[350px] h-[200px] lg:w-[500px] lg:h-[350px] hidden md:flex justify-end items-center gap-12">
            <Image src="/assets/icons/1.svg" alt="icon" width={48} height={48} />
            <Image src="/assets/icons/2.svg" alt="icon" width={48} height={48} />
            <Image src="/assets/icons/3.svg" alt="icon" width={48} height={48} />
        </div>
        <div className="relative w-[350px] h-[200px] lg:w-[500px] lg:h-[350px] hidden md:flex justify-start items-center gap-12">
            <Image src="/assets/icons/4.svg" alt="icon" width={48} height={48} />
            <Image src="/assets/icons/5.svg" alt="icon" width={48} height={48} />
            <Image src="/assets/icons/6.svg" alt="icon" width={48} height={48} />

        </div>
        <div className="hidden md:block relative w-[350px] h-[200px] lg:w-[500px] lg:h-[350px]">
            <div className="absolute h-[60%] w-1/2 left-0 top-[20%] bg-primary" />
        <div className="relative h-full w-[80%] left-1/4">
                <Image src="/assets/images/offer1.png" alt="offer" layout="fill" objectFit="cover" />
            </div>
        </div>
      </div>
      <div className="md:hidden flex justify-center items-center flex-wrap gap-12 bg-primary w-[350px] h-[250px] relative -top-[100px] py-4">
        <Image src="/assets/icons/11.svg" alt="offers" width={74} height={74} />
        <Image src="/assets/icons/22.svg" alt="offers" width={74} height={74} />
        <Image src="/assets/icons/33.svg" alt="offers" width={74} height={74} />
        <Image src="/assets/icons/44.svg" alt="offers" width={74} height={74} />
        <Image src="/assets/icons/55.svg" alt="offers" width={74} height={74} />
        <Image src="/assets/icons/66.svg" alt="offers" width={74} height={74} />
      </div>
    </div>
  )
}

export default Offer
