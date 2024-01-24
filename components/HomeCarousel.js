'use client'
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link';

export default function HomeCarousel() {

  const [currentIndex,setCurrentIndex] = useState(0);

  useEffect(() => {

    let int = setInterval(() => {
      setCurrentIndex(prev => ((prev+1) >= 3 ? 0 : prev +1))
    }, 8000);
  }, [])
  
  return (

<div className="relative flex sm:h-[calc(100vh-50vh)] md:h-[calc(100vh-0px)] lg:h-[calc(100vh-0px)] flex-col justify-center items-center">
      <div className="ease-linear">
              <Image src={`/img/carousel-img-${currentIndex}.jpg`}
               className={`relative z-0 contrast-100 object-fill object-center`} alt="..." fill />
      </div>
      <div className='z-30 relative h-screen sm:mt-12 flex flex-col items-center justify-center'>
          <h2 className=' text-slate-300 sm:text-2xl md:text-5xl text-5xl font-serif font-medium'>TRUVA</h2>
          <h1 className='text-slate-300 sm:text-3xl md:text-6xl text-7xl font-serif font-semibold'>TURKISH KITCHEN</h1>
          <Link href='/our-menu' className='mt-8 bg-yellow-400 hover:bg-yellow-500 transition-all rounded-lg sm:px-3 sm:py-2 md:px-4 md:py-3 px-5 py-3 text-white font-serif'>VIEW OUR MENU</Link>
      </div>
    
</div>

  )
}
