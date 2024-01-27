'use client'
import React, { useState } from 'react'
import Image from 'next/image'

export default function page() {
    const [imageCount,setImageCount] = useState([
        'g1','g2','g3','g4','g5','g6','g7','g8','g9','g10','g11','g12','g13','g14','g15','g16','g17','g18','g19','g20',
        'g21','g22','g23','g24','g25','g26','g27','g28','g29','g30','g31','g32','g33','g34','g35','g36','g37','g38','g40',
        'g41','g42','g43','g44','g45','g46','g47','g48','g49','g50','g51','g52','g53','g54','g55','g56','g57','g58','g59','g60',
        'g61','g62','g63','g64','g65','g66','g67','g68','g69','g70','g71','g72','g73','g74','g75'
    ])
  return (
    <>
    <div className="relative flex sm:h-[calc(100vh-60vh)] md:h-[calc(100vh-350px)] lg:h-[calc(100vh-350px)] flex-col justify-center items-center">
      <div className="ease-linear">
              <Image src={`/img/N5o8uy.jpg`} className={`relative z-0 contrast-100 brightness-75 filter`} alt="..." fill />
      </div>
      <div className='z-30 relative h-screen sm:mt-12 flex flex-col items-center justify-center'>
          <h2 className=' text-slate-300 sm:text-2xl md:text-7xl font-serif font-medium'>GALLERY</h2>
      </div>
      </div>

      <div className='bg-amber-50'>
        <div className='py-24 md:grid md:grid-cols-4 lg:grid lg:grid-cols-4 container'>
        {
            imageCount.map(element => (
                 <img key={element} src={`/gallery-img/${element}.jpeg`} className=' w-96 p-2 h-auto rounded-lg' />
            ))
        }      
        </div>
      </div>
    </>
  )
}
