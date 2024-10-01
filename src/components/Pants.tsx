import React from 'react'
import Image from 'next/image'
import Link from 'next/link'



const PantsCollection = () => {
  return (
   
        <div>
             <h1 className='block-inline h-10 font-bold bg-pink-200 text-blue-800 text-2xl text-center' >Ladies Pants Collection</h1>

        <div className='md:flex md:justify-around m-10 flex flex-wrap sm:flex sm:flex-wrap '>
          <div className=" card card-compact bg-base-100 w-60 shadow-xl mt-10">
    <figure>
    
          <Image
            src="/images/lady-trouser1.jpg" alt="pic" width={200} height={100}
            className=' w-[100] h-[100] mt-5'/>
        </figure>
        <div className="card-body ">
          <h2 className="card-title">Offer!</h2>
          <p>Here is Comfortable Girls Pants in only Rs 999/.. </p>
          <div className="card-actions justify-end">
          <button className="btn btn-primary"><Link href="/shopnow">Order Now</Link></button>
          </div>
        </div>
        </div>
    
      <div className="card card-compact bg-base-100 w-60 shadow-xl mt-10 ">
    <figure>
          <Image
            src="/images/pant.jpg" alt="suit" width={200} height={50} 
            className=' w-[100] h-[50] mt-5'/>
      </figure>
        <div className="card-body">
          <h2 className="card-title">Offer!</h2>
          <p>Here is Comfortable Girls Pants in only Rs 999/..</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary"> <Link href="/shopnow">Order Now</Link></button>
          </div>
        </div>
      </div>
      <div className="card card-compact bg-base-100 w-60 shadow-xl mt-10">
    <figure>
          <Image
            src="/images/lady-pant.png" alt="kurti"width={200} height={100}
            className=' w-[150] h-[150] bg-blue-200 mt-5'/>
      </figure>
        <div className="card-body">
          <h2 className="card-title mt-10">Offer!</h2>
          <p>Here is Comfortable Girls Pants in only Rs 999/..</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary"><Link href="/shopnow">Order Now</Link></button>
          </div>
       </div>
      </div>
    </div>
    
    
    
      </div>
     
      )
    }
    

export default PantsCollection