'use client'
import Link from 'next/link'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'

export default function Navbar() {

  const [mobile,setMobile] = useState(false);
  const [colorChange, setColorchange] = useState(false);
  const changeNavbarColor = () => {
    if (window.scrollY >= 80) {
      setColorchange(true);
    } else {
      setColorchange(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeNavbarColor);
  });

  return (
    <nav className={`${!colorChange ? 'bg-transparent':' bg-zinc-900'} transition-all fixed w-full z-40`}>
  <div className="max-w-screen-xl flex flex-wrap justify-between mx-auto md:container">
  <Link href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
      <Image src="/img/beyaz.png" className='transition-all sm:w-16 sm:m-4 sm:ml-6' alt="Flowbite Logo" width={!colorChange ? 80:60} height={50}/>
  </Link>
  <div className="flex items-center rtl:space-x-reverse">
      <button data-collapse-toggle="navbar-sticky" type="button" 
      onClick={()=> setMobile(!mobile)}
      className="
      inline-flex items-center p-2 pr-2 w-20 h-20 justify-center text-sm text-white rounded-lg md:hidden
      focus:outline-none" aria-controls="navbar-sticky" aria-expanded="false">
        <span className="sr-only">Open main menu</span>
        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
        </svg>
    </button>
  </div>
  <div className={`${mobile && 'sm:flex absolute items-center justify-center -z-20 sm:h-[calc(100vh-0px)] w-full bg-zinc-800'} 
      items-center justify-between py-2 hidden transition-all w-full md:flex md:w-auto`} id="navbar-sticky">
        <ul className={`flex w-full flex-col items-center justify-center sm:gap-y-8 p-4 md:p-0 mt-4 text-white font-serif md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0`}>
      <li>
        <Link href="/" onClick={()=> setMobile(false)} className={`block py-2 px-3 text-amber-400  hover:text-amber-200 hover:border-b border-amber-200 transition-all text-lg md:bg-transparent md:p-0`} aria-current="page">HOME</Link>
      </li>
      <li>
        <Link href="/about" onClick={()=> setMobile(false)} className={`block py-2 px-3 text-amber-400  hover:text-amber-200 hover:border-b border-amber-200 transition-all text-lg md:bg-transparent md:p-0`}>ABOUT US</Link>
      </li>
      <li>
        <Link href="/our-menu" onClick={()=> setMobile(false)} className={`block py-2 px-3 text-amber-400  hover:text-amber-200 hover:border-b border-amber-200 transition-all text-lg md:bg-transparent md:p-0`}>OUR MENU</Link>
      </li>
      <li>
        <Link href="/gallery" onClick={()=> setMobile(false)} className={`block py-2 px-3 text-amber-400  hover:text-amber-200 hover:border-b border-amber-200 transition-all text-lg md:bg-transparent md:p-0`}>GALLERY</Link>
      </li>
      <li>
        <Link href="#" onClick={()=> setMobile(false)} className={`block py-2 px-3 text-amber-400  hover:text-amber-200 hover:border-b border-amber-200 transition-all text-lg md:bg-transparent md:p-0`}>BLOG</Link>
      </li>
      <li>
        <Link href="/contact" onClick={()=> setMobile(false)} className={`block py-2 px-3 text-amber-400 hover:border-b border-amber-200 hover:text-amber-200 transition-all text-lg md:bg-transparent md:p-0`}>CONTACT</Link>
      </li>
      <li>
        <Link href="https://www.opentable.com/restref/client/?restref=1265287&rid=1265287&datetime=2023-12-29T19%3A00&covers=1&searchdatetime=2023-12-29T19%3A00&partysize=1&corrid=24f03c18-b0ba-477c-96a6-7a8e4567172e" 
          target='_blank' 
          className={`block py-2 px-3 text-lg font-bold bg-amber-600 rounded-xl text-white hover:bg-amber-400 transition-all`}>
          BOOK A TABLE
        </Link>
      </li>
    </ul>
  </div>
  </div>
</nav>
  )
}
