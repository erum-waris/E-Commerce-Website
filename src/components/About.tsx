

import React from 'react'
import Image from 'next/image'
function AboutUs() {
  return (
    <div className="md:flex md:justify-center m-10 flex flex-wrap" >
        <div className="border-2 p-5">
        <h1 className="mb-5 text-5xl bg-slate-500 text-white font-bold text-center">About Us:</h1>
        <p>
        Welcome to <mark> <q>MUHAMMAD FABRICS</q></mark> your one stop destination for stylish and comfortable ladies fashion. We specialize in trendy printed cotton lawn outfits and a wide range of tops and pants designed to suit every occasion. Whether you are looking for casual wear or chic everyday looks, our collection combines quality fabrics, unique prints, and timeless styles to bring you the perfect blend of fashion and comfort. Explore our curated selection and elevate your wardrobe with our versatile and elegant pieces.
        </p>
        </div>
        <div>
            <Image src="/images/web_logo.jpeg" alt="web_logo" width={400} height={400} 
            className="w-[300] h-[300] rounded-full mt-10"/>
        </div>
    </div>
  )
}

export default AboutUs