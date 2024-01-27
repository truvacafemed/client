import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function About() {
  return (
    <>
     <div className="relative flex sm:h-[calc(100vh-60vh)] md:h-[calc(100vh-350px)] lg:h-[calc(100vh-350px)] flex-col justify-center items-center">
      <div className="ease-linear">
              <Image src={`/img/about-us-header.jpeg`} className={`relative z-0 contrast-100 object-fill filter brightness-50 object-center`} alt="..." fill />
      </div>
      <div className='z-30 relative h-screen sm:mt-12 flex flex-col items-center justify-center'>
          <h2 className=' text-slate-300 sm:text-2xl md:text-7xl font-serif font-medium'>ABOUT US</h2>
      </div>
    
    </div>
    <div className='bg-amber-50'>
    <div className='container flex flex-col text-center gap-5 justify-center py-24 items-center'>
        <h4 className='font-thin'>TASTY AND CRUNCHY</h4>
        <h2 className='font-serif text-5xl'>Our Story</h2>
        <p className='font-extralight text-pretty sm:px-1 md:px-12 lg:px-18 text-lg'>
        We love seasons, and gathering around a table,
        the clinking of glasses accompanied by laughter,
        food and naturally, fire…
        We love sharing and equality.
        Understanding. Loving as is. Experimenting,
        Discussing the miracle of food and regionality
          with ingredients provided by the earth, water, sun, and labor. We love learning, changing, and diversity.
        </p>
    </div>

      <div className='flex md:flex-row sm:flex-col xl:flex-row flex-wrap gap-3 container py-8'>
          <div className='flex-1 flex-col'>
            <img src='/img/about-section-1.jpeg' className='w-full h-auto rounded-xl' />
            <h3 className='text-2xl font-serif mt-4'>Turkish Kitchen</h3>
            <p className='font-extralight mt-4'>
            Truva Turkish Kitchen, is a Mediterranean restaurant specializing in authentic Turkish cuisine. 
            The restaurant focuses on offering the freshest ingredients in their signature dishes, inviting 
            guests to enjoy the taste and flavors of traditional Turkish fare.
            </p>
          </div>

          <div className='flex-1 flex-col'>
            <img src='/img/about-section-2.jpeg' className='w-full h-auto rounded-xl' />
            <h3 className='text-2xl font-serif mt-4'>Atmosphere</h3>
            <p className='font-extralight mt-4'>
            Truva Turkish Kitchen has an inviting and casual atmosphere enjoyed by Turkish cuisine
             aficionados and first-timers alike. Aside from our delicious and authentic food, our personable 
             and professional staff as well as the cozy setting will create a memorable experience for every diner.
            </p>
          </div>

          <div className='flex-1 flex-col'>
            <img src='/img/about-section-3.jpeg' className='w-full h-auto rounded-xl' />
            <h3 className='text-2xl font-serif mt-4'>Tasty</h3>
            <p className='font-extralight mt-4'>
            Truva Turkish Kitchen with our long years of management experience, offer you a variety of 
            dishes suitable for all hours of the day, from main courses to appetizers, fish, desserts, 
            in a pleasant and warm atmosphere. Truva Turkish Kitchen promises unforgettable tastes and a 
            unique presentation to its guests. Our goal is to make sure you enjoy being here and leave happy. 
            Because ultimately, It’s you who bring joy to this kitchen
            </p>
          </div>
      </div>
      </div>
    </>
    
  )
}