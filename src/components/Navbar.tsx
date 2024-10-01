import React from "react";
import Link from "next/link";
import Image from "next/image";


function NavbarSection() {
  return (
    <div>
      <div className="navbar">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content text-2xl bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 cursor-pointer shadow"
            >
              <li>
                <Link href="/">Home</Link>
              </li>
              
              <li>
                <details>
                  <summary>Women</summary>
                  <ul className="p-2">
                    
    
                   <li>
                      <Link href="/catalog">Ladies Collection</Link>
                    </li>
                  </ul>
                </details>
              </li>
              
              <li>
                <Link href="/about">About</Link>
              </li>
              
              <li>
                <Link href="/contact">Contact</Link>
              </li>
            </ul>
          </div>
    <Image 
    src={require('../../public/images/frok_logo.jpeg')}
     alt="logo" 
     className="ml-6 rounded-full hidden lg:block"
     width={70} 
     height={70}/>
        </div>
        <div className="navbar-center ">
        <Image 
    src={require('../../public/images/frok_logo.jpeg')}
     alt="logo" 
     className="rounded-full block lg:hidden "
     width={70} 
     height={70}/>
        </div>
        <div className="navbar-center hidden lg:flex">
        
          <ul className="menu menu-horizontal px-1 space-x-7 text-xl">
            <li>
              <Link href="/">Home</Link>
            </li>
            
            <li>
              <Link href="/about">About</Link>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
            </li>
            <li>
                <details>
                  <summary>Women</summary>
                  <ul>
                    <li>
                      <Link href="/catalog">Ladies Collection</Link>
                    </li>
                    </ul>
                  </details>
                </li>
            </ul>
            </div>
        <div className="mr-6 navbar-end">
          <Link href="/shopnow" className="btn">Shop Now</Link>
          
        </div>
      </div>
      </div>
  
  );
}

export default NavbarSection;
