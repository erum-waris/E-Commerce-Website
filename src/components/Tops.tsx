import React from 'react'
import Image from "next/image"
import Link from 'next/link'
const  TopsCollection = () => {
  return (
    <div>
      <h1 className='block-inline h-20 lg:h-10 bg-pink-200 text-blue-800 font-bold text-2xl mt-5 text-center' >Ladies Western Tops Collection</h1>
    <div className='md:flex md:justify-around m-10 flex flex-wrap '>
      <div className=" card card-compact bg-base-100 w-60 shadow-xl mt-10">
<figure>

      <Image
        src="/assets/top1.jpg" alt="pic" width={200} height={50}
        className=' w-[100] h-[50] mt-5'/>
    </figure>
    <div className="card-body">
      <h2 className="card-title">Offer!</h2>
      <p>Here is Western Top Collection in only $150 </p>
      <div className="card-actions justify-end">
      <button className="btn btn-primary"><Link href="/shopnow">Order Now</Link></button>
      </div>
    </div>
    </div>

  <div className="card card-compact bg-base-100 w-60 shadow-xl mt-10 ">
<figure>
      <Image
        src="/images/top2.jpg" alt="suit" width={200} height={50} 
        className=' w-[100] h-[50] mt-5'/>
  </figure>
    <div className="card-body">
      <h2 className="card-title">Offer!</h2>
      <p>Here is Western Top Collection in only $150</p>
      <div className="card-actions justify-end">
        <button className="btn btn-primary"> <Link href="/shopnow">Order Now</Link></button>
      </div>
    </div>
  </div>
  <div className="card card-compact bg-base-100 w-60 shadow-xl mt-10">
<figure>
      <Image
        src="/images/top3.jpg" alt="kurti"width={200} height={50}
        className=' w-[100] h-[50] mt-5'/>
  </figure>
    <div className="card-body">
      <h2 className="card-title">Offer!</h2>
      <p>Here is Western Top Collection in only $150</p>
      <div className="card-actions justify-end">
        <button className="btn btn-primary"><Link href="/shopnow">Order Now</Link></button>
      </div>
   </div>
  </div>
</div>



  <div className='md:flex md:justify-around m-10 flex flex-wrap '>
  <div className="card card-compact bg-base-100 w-60 shadow-xl mt-10">
<figure>
      <Image
        src="/images/top4.jpg" alt="kurti"width={200} height={50}
        className=' w-[100] h-[50] mt-5'/>
  </figure>
    <div className="card-body">
      <h2 className="card-title">Offer!</h2>
      <p>Here is Western Top Collection in only $150</p>
      <div className="card-actions justify-end">
        <button className="btn btn-primary"><Link href="/shopnow">Order Now</Link></button>
      </div>
      
    </div>
  </div>
  <div className="card card-compact bg-base-100 w-60 shadow-xl mt-10">
<figure>
      <Image
        src="/images/top5.jpg" alt="kurti"width={200} height={50}
        className=' w-[100] h-[50] mt-5'/>
  </figure>
    <div className="card-body">
      <h2 className="card-title">Offer!</h2>
      <p>Here is Western Top Collection in only $150</p>
      <div className="card-actions justify-end">
        <button className="btn btn-primary"><Link href="/shopnow">Order Now</Link></button>
      </div>
      
    </div>
  </div>
  <div className="card card-compact bg-base-100 w-60 shadow-xl mt-10">
<figure>
      <Image
        src="/images/top6.jpg" alt="kurti"width={200} height={50}
        className=' w-[100] h-[50] mt-5'/>
  </figure>
    <div className="card-body">
      <h2 className="card-title">Offer!</h2>
      <p>Here is Western Top Collection in only $150</p>
      <div className="card-actions justify-end">
        <button className="btn btn-primary"><Link href="/shopnow">Order Now</Link></button>
      </div>
      
    </div>
  </div>
  </div>

  

  </div>
 
  )
}

export default TopsCollection