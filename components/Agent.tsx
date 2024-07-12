import Image from "next/image"

const Agent = () => {
  return (
    <div className="mt-20 relative flex w-full md:px-[60px] lg:px-[100px] xl:px-[200px]">
      <div className="flex-1 h-[400px] flex flex-col gap-7 md:gap-5 justify-center items-center md:items-start bg-primary md:bg-white">
        <h1 className="text-white md:text-primary font-bold text-3xl text-center md:text-start">Become an<br /> Agent</h1>
        <p className="text-white md:text-primary text-center md:text-start">
        A community that gives you<br /> a taste of happiness, a place <br /> you’ll love to live and <br/> an opportunity to build a home.
        </p>
        <button className="bg-white md:bg-primary w-1/2 text-primary md:text-white">Join Now</button>
      </div>
      <div className="flex-1 h-[400px] relative hidden md:flex">
        <div className="absolute h-[60%] w-1/2 top-[20%] -left-[10%] bg-primary" />
        <div className="relative left-[20%] w-[80%] h-full">
            <Image src="/assets/images/agent.jpeg" alt="agent" layout="fill" objectFit="cover" />
        </div>
      </div>
    </div>
  )
}

export default Agent
