"use client"
import React from 'react'

import { Button } from "@/components/ui/button"
import { FaTabletScreenButton } from "react-icons/fa6";
import Link from 'next/link';

function HeroSection() {  
  return (
    <div>
   <div className="hero min-h-[80vh] w-full custom-img  ">
   
    <div className="hero bg-opacity-20"></div>
    <div className="hero-content text-neutral-content text-center">
      <div className="max-w-md">
        <h1 className="mb-5 lg:text-5xl text-white font-bold hover:animate-bounce">
            FASHION IS EVERYWHERE
        </h1>
        <p className="mb-5 text-base lg:text-xl lg:font-semibold  text-white">
        
"Explore our exclusive Ladies' Collection with <br />
 fashion-forward pieces for every occasion. <br />
 Stay effortlessly stylish with our versatile <br />
 designs available year-round!"
        </p>
        <Button className='group rounded-3xl'> <FaTabletScreenButton className='mr-2  group-hover:text-black group-hover:animate-bounce'/><Link href="/tops">Ladies top Collection</Link> </Button>
      </div>
    </div>
  </div>
</div>

  )
}

export default HeroSection