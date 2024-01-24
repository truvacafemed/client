import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function HomeContent() {
  return (
    <div className='flex flex-col items-center justify-center bg-zinc-950 py-16 rounded-b-3xl'>
        <div className='container'>
        <div className='flex flex-col items-center justify-center gap-y-4 text-white'>
            <h1 className='font-bold text-4xl'>NOW SERVING</h1>
            <h1 className='font-semibold text-3xl'>ALCOHOL !</h1>
            <p className='font-extralight sm:text-center'>
                Ask you server a drink menu and don’t forget to try our delicious Turkish wines! We have more coming very soon!
            </p>
        </div>

        <div className='flex flex-col md:py-24 sm:py-12 items-center justify-center gap-y-4 text-white mt-2'>
            <h1 className=' font-thin text-2xl'>TASTY AND CHURCHY</h1>
            <h1 className='font-semibold text-4xl'>OUR STORY</h1>
            <p className=' font-extralight sm:text-center md:px-44'>
            We love seasons, and gathering around a table,
            the clinking of glasses accompanied by laughter, food–and, naturally, fire…
            We love sharing and equality.
            Understanding. Loving as is. Experimenting,
            Discussing the miracle of food and regionality
            with ingredients provided by the earth, water, sun, and labor. We love learning, changing, and diversity
            </p>
        </div>
        <div className='flex justify-between sm:gap-y-6 items-center md:flex-row sm:flex-col'>
            <div className='col-auto px-4'>
            <img src='/img/homecontent1.jpeg' className='h-auto max-w-full rounded-xl' />
            </div>
            <div className='col-auto px-4'>
            <img src='/img/homecontent2.jpeg' className='h-auto max-w-full rounded-xl' />
            </div>
        </div>

        <div className='flex sm:flex-col md:flex-row flex-row text-white mt-12'>
            <div className='flex col-auto p-4 flex-col justify-center text-start gap-y-6'>
              <h4 className=' font-thin sm:text-center md:text-left'>TASTY AND ELEGANT</h4>
              <h1 className='font-bold sm:text-2xl sm:text-center md:text-left text-5xl'>TURKISH KITCHEN</h1>
              <p className=' font-thin sm:text-center md:text-left'>
              Truva Turkish Kitchen, is a Mediterranean restaurant specializing in
              authentic Turkish cuisine. The restaurant focuses on offering the freshest 
              ingredients in their signature dishes, inviting guests to enjoy the taste and flavors of traditional Turkish fare.
              </p>
              <div className='sm:flex sm:justify-center md:justify-start'>
              <Link href='/our-menu' className='p-3 bg-slate-200 hover:bg-slate-400 transition-all w-2/4 text-black font-serif text-center'>VIEW OUR MENU</Link>
              </div>
            </div>
            <div className='p-4 col-auto'>
                <img src='/img/Pepperoni-Flatbread.jpg' className='h-auto max-w-full rounded-xl' />
            </div>
        </div>
        </div>
      
    </div>
  )
}
