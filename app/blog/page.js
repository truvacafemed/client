'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import blogs from '@/public/data/blogs.json'

export default function page() {

  return (
    <>
     <div className={`relative flex sm:h-[calc(100vh-60vh)] md:h-[calc(100vh-350px)] lg:h-[calc(100vh-350px)] flex-col justify-center items-center`}>
      <div className="ease-linear">
              <Image src={`/img/kizkulesi.jpg`} className={`relative z-0 contrast-100 object-fill filter brightness-50 object-center`} alt="..." fill />
      </div>
      <div className='z-30 relative h-screen sm:mt-12 flex flex-col items-center justify-center'>
          <h2 className=' text-slate-300 sm:text-5xl md:text-7xl font-serif font-medium'>BLOG</h2>
      </div>
      </div>


      <div className='bg-amber-50 py-24'>
      <div className='grid grid-cols-2 sm:grid-cols-1 md:grid-cols-2 gap-24 flex-wrap container'>
        {
            blogs?.map((item,index) => (
              <div className='flex flex-col'>
            <img src={`/img/${item.img}`} className='w-full h-auto rounded-xl' />
            <h4 className='font-serif text-3xl mt-8'>{item.title}</h4>
            <p className='mt-6'>
                {item.content}
            </p>
          </div>
            ))
        }

      </div>
      </div>
      </>
  )
}