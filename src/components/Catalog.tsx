import React from 'react'
import Image from "next/image"
import Link from 'next/link'
const CatalogSection = () => {
  return (
    <div>
      <h1 className='block-inline h-10 bg-pink-200 text-blue-800 text-2xl mt-10 text-center font-bold' >Ladies Aparrel Collection</h1>
    <div className='md:flex md:justify-around m-10 flex flex-wrap '>
      <div className=" card card-compact bg-base-100 w-60 shadow-xl mt-10">
<figure>

      <Image
        src="/images/suit1.jpeg" alt="pic" width={200} height={50}
        className=' w-[100] h-[50] mt-5'/>
    </figure>
    <div className="card-body">
      <h2 className="card-title">Offer!</h2>
      <p>Here is Cotton Aparrel Collection in only Rs 1299/.. </p>
      <div className="card-actions justify-end">
      <button className="btn btn-primary"><Link href="/shopnow">Buy Now</Link></button>
      </div>
    </div>
    </div>

  <div className="card card-compact bg-base-100 w-60 shadow-xl mt-10 ">
<figure>
      <Image
        src="/images/suit2.jpeg" alt="suit" width={200} height={50} 
        className=' w-[100] h-[50] mt-5'/>
  </figure>
    <div className="card-body">
      <h2 className="card-title">Offer!</h2>
      <p>Here is Cotton Aparrel Collection in only Rs 1299/..</p>
      <div className="card-actions justify-end">
        <button className="btn btn-primary"> <Link href="/shopnow">Buy Now</Link></button>
      </div>
    </div>
  </div>
  <div className="card card-compact bg-base-100 w-60 shadow-xl mt-10">
<figure>
      <Image
        src="/images/suit3.jpeg" alt="kurti"width={200} height={50}
        className=' w-[100] h-[50] mt-5'/>
  </figure>
    <div className="card-body">
      <h2 className="card-title">Offer!</h2>
      <p>Here is Cotton Aparrel Collection in only Rs 1299/..</p>
      <div className="card-actions justify-end">
        <button className="btn btn-primary"><Link href="/shopnow">Buy Now</Link></button>
      </div>
   </div>
  </div>
</div>



  <div className='md:flex md:justify-around m-10 flex flex-wrap '>
  <div className="card card-compact bg-base-100 w-60 shadow-xl mt-10">
<figure>
      <Image
        src="/images/suit4.jpeg" alt="kurti"width={200} height={50}
        className=' w-[100] h-[50] mt-5'/>
  </figure>
    <div className="card-body">
      <h2 className="card-title">Offer!</h2>
      <p>Here is Cotton Aparrel Collection in only Rs 1299/..</p>
      <div className="card-actions justify-end">
        <button className="btn btn-primary"><Link href="/shopnow">Buy Now</Link></button>
      </div>
      
    </div>
  </div>
  <div className="card card-compact bg-base-100 w-60 shadow-xl mt-10">
<figure>
      <Image
        src="/images/suit5.jpeg" alt="kurti"width={200} height={50}
        className=' w-[100] h-[50] mt-5'/>
  </figure>
    <div className="card-body">
      <h2 className="card-title">Offer!</h2>
      <p>Here is Cotton Aparrel Collection in only Rs 1299/..</p>
      <div className="card-actions justify-end">
        <button className="btn btn-primary"><Link href="/shopnow">Buy Now</Link></button>
      </div>
      
    </div>
  </div>
  <div className="card card-compact bg-base-100 w-60 shadow-xl mt-10">
<figure>
      <Image
        src="/images/suit6.jpeg" alt="kurti"width={200} height={50}
        className=' w-[100] h-[50] mt-5'/>
  </figure>
    <div className="card-body">
      <h2 className="card-title">Offer!</h2>
      <p>Here is Cotton Aparrel Collection in only Rs 1299/..</p>
      <div className="card-actions justify-end">
        <button className="btn btn-primary"><Link href="/shopnow">Buy Now</Link></button>
      </div>
      
    </div>
  </div>
  </div>

  <div className='md:flex md:justify-around m-10 flex flex-wrap ' >
  
  <div className="card card-compact bg-base-100 w-60 shadow-xl mt-10">
<figure>
      <Image
        src="/images/suit7.jpeg" alt="kurti"width={200} height={50}
        className=' w-[100] h-[50] mt-5'/>
  </figure>
    <div className="card-body">
      <h2 className="card-title">Offer!</h2>
      <p>Here is Cotton Aparrel Collection in only Rs 1299/..</p>
      <div className="card-actions justify-end">
        <button className="btn btn-primary"><Link href="/shopnow">Buy Now</Link></button>
      </div>
      
    </div>
  </div>
  <div className="card card-compact bg-base-100 w-60 shadow-xl mt-10">
<figure>
      <Image
        src="/images/suit8.jpeg" alt="kurti"width={200} height={50}
        className=' w-[100] h-[50] mt-5'/>
  </figure>
    <div className="card-body">
      <h2 className="card-title">Offer!</h2>
      <p>Here is Cotton Aparrel Collection in only Rs 1299/..</p>
      <div className="card-actions justify-end">
        <button className="btn btn-primary"><Link href="/shopnow">Buy Now</Link></button>
      </div>
      
    </div>
  </div>
  <div className="card card-compact bg-base-100 w-60 shadow-xl mt-10">
<figure>
      <Image
        src="/images/suit9.jpeg" alt="kurti"width={200} height={50}
        className=' w-[100] h-[50] mt-5'/>
  </figure>
    <div className="card-body">
      <h2 className="card-title">Offer!</h2>
      <p>Here is Cotton Aparrel Collection in only Rs 1299/..</p>
      <div className="card-actions justify-end">
        <button className="btn btn-primary"><Link href="/shopnow">Buy Now</Link></button>
      </div>
      
    </div>
  </div>
  </div>

  </div>
 
  )
}

export default CatalogSection