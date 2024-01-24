'use client'
import Link from 'next/link'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'

export default function Navbar() {

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
    <nav className={`${!colorChange ? 'bg-transparent py-4':' bg-zinc-800 py-2'} transition-all fixed w-full z-40`}>
  <div className="max-w-screen-xl flex flex-wrap justify-between mx-auto container">
  <Link href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
      <Image src="/img/beyaz.png" className='transition-all sm:w-14' alt="Flowbite Logo" width={!colorChange ? 80:60} height={50}/>
  </Link>
  <div className="flex items-center rtl:space-x-reverse">
      <button data-collapse-toggle="navbar-sticky" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-white rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-sticky" aria-expanded="false">
        <span className="sr-only">Open main menu</span>
        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
        </svg>
    </button>
  </div>
  <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
        <ul className={`flex flex-col items-center p-4 md:p-0 mt-4 ${'text-white'} font-serif md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0`}>
      <li>
        <Link href="/" className={`block py-2 px-3 hover:text-slate-300 transition-all rounded md:bg-transparent md:p-0`} aria-current="page">HOME</Link>
      </li>
      <li>
        <Link href="/about" className={`block py-2 px-3 hover:text-slate-300 transition-all  rounded md:bg-transparent md:p-0`}>ABOUT US</Link>
      </li>
      <li>
        <Link href="/our-menu" className={`block py-2 px-3 hover:text-slate-300 transition-all  rounded md:bg-transparent md:p-0`}>OUR MENU</Link>
      </li>
      <li>
        <Link href="/gallery" className={`block py-2 px-3 hover:text-slate-300 transition-all  rounded md:bg-transparent md:p-0`}>GALLERY</Link>
      </li>
      <li>
        <Link href="#" className={`block py-2 px-3 hover:text-slate-300 transition-all  rounded md:bg-transparent md:p-0`}>BLOG</Link>
      </li>
      <li>
        <Link href="/contact" className={`block py-2 px-3 hover:text-slate-300 transition-all  rounded md:bg-transparent md:p-0`}>CONTACT</Link>
      </li>
      <li>
        <Link href="https://www.opentable.com/restref/client/?restref=1265287&rid=1265287&datetime=2023-12-29T19%3A00&covers=1&searchdatetime=2023-12-29T19%3A00&partysize=1&corrid=24f03c18-b0ba-477c-96a6-7a8e4567172e" 
          target='_blank' 
          className={`block py-1 px-3 font-bold bg-green-400 hover:bg-green-500 transition-all rounded-xl`}>
          BOOK A TABLE
        </Link>
      </li>
    </ul>
  </div>
  </div>
</nav>
  )
}
