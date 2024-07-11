"use client"

import Image from "next/image"
import { useState } from "react"

const Navbar = () => {
    const [toggleMenu, setToggleMenu] = useState(false)


  return (
    <div className="flex justify-between items-center pt-[50px] px-[30px] md:px-[60px] lg:px-[100px]">
      <div>
        <h2 className="text-primary font-bold">Pineapple Island</h2>
      </div>
      <div className="hidden md:flex text-primary gap-6">
        <h4 className="cursor-pointer">About Us</h4>
        <h4 className="cursor-pointer">What we do</h4>
        <h4 className="cursor-pointer">Project</h4>
      </div>
      <button className="hidden md:block text-white bg-primary px-4 py-2">Get in touch</button>
      <div className="block md:hidden cursor-pointer" onClick={() => setToggleMenu(!toggleMenu)}>
        <Image src="/assets/icons/menu.svg" alt="Menu" height={24} width={24} />
      </div>
      {toggleMenu && (
        <div className="absolute top-0 left-0 h-screen w-full flex flex-col justify-evenly items-center gap-5 bg-black opacity-90 z-50" onClick={() => setToggleMenu(!toggleMenu)}>
            <h4 className="cursor-pointer">About Us</h4>
            <h4 className="cursor-pointer">What we do</h4>
            <h4 className="cursor-pointer">Project</h4>
        </div>
      )}
    </div>
  )
}

export default Navbar
