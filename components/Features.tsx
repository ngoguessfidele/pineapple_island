import Image from "next/image"

const Features = () => {
  return (
    <div className="mt-16 hidden md:flex md:px-[60px] lg:px-[100px] px-[200px] w-full relative">
      <div className="relative flex-1 h-[500px]">
        <div className="absolute h-[60%] w-[50%] left-1/2 top-[20%] bg-primary -z-1" />
        <div className="relative h-full w-2/3">
            <Image src="/assets/images/feature.png" alt="feature" layout="fill" objectFit="cover" />
        </div>
      </div>
      <div className="relative flex-1 h-[500px]">
        <div className="relative flex ml-6 flex-col w-full h-full py-8 pl-8 gap-3 items-center">
          <h1 className="text-primary font-bold">Amazing Features</h1>
          <div className="flex justify-between items-center bg-secondary px-4 w-full">
            <p className="text-primary">Feature one</p>
            <input type="checkbox" checked className="bg-primary h-5 w-5" />
          </div>
          <div className="flex justify-between items-center px-4 w-full">
            <p className="text-primary">Feature one</p>
            <input type="checkbox" checked className="bg-primary h-5 w-5" />
          </div>
          <div className="flex justify-between items-center bg-secondary px-4 w-full">
            <p className="text-primary">Feature one</p>
            <input type="checkbox" checked className="bg-primary h-5 w-5" />
          </div>
          <div className="flex justify-between items-center px-4 w-full">
            <p className="text-primary">Feature one</p>
            <input type="checkbox" checked className="bg-primary h-5 w-5" />
          </div>
          <div className="flex justify-between items-center bg-secondary px-4 w-full">
            <p className="text-primary">Feature one</p>
            <input type="checkbox" checked className="bg-primary h-5 w-5" />
          </div>
          <div className="flex justify-between items-center px-4 w-full">
            <p className="text-primary">Feature one</p>
            <input type="checkbox" checked className="bg-primary h-5 w-5" />
          </div>
          <div className="flex justify-between items-center bg-secondary px-4 w-full">
            <p className="text-primary">Feature one</p>
            <input type="checkbox" checked className="bg-primary h-5 w-5" />
          </div>
          <div className="flex justify-between items-center px-4 w-full">
            <p className="text-primary">Feature one</p>
            <input type="checkbox" checked className="bg-primary h-5 w-5" />
          </div>
          <div className="flex justify-between items-center bg-secondary px-4 w-full">
            <p className="text-primary">Feature one</p>
            <input type="checkbox" checked className="bg-primary h-5 w-5" />
          </div>
          <div className="flex justify-between items-center px-4 w-full">
            <p className="text-primary">Feature one</p>
            <input type="checkbox" checked className="bg-primary h-5 w-5" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Features
