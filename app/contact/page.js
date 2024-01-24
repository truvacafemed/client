'use client'
import React, { useEffect } from 'react'
import Image from 'next/image'
import { Loader } from '@googlemaps/js-api-loader'
import CincinatiMap from '@/components/CincinatiMap'
import MasonMap from '@/components/MasonMap'

export default function page() {

  return (
    <>
    <div className="relative flex sm:h-[calc(100vh-80vh)] md:h-[calc(100vh-350px)] lg:h-[calc(100vh-350px)] flex-col justify-center items-center">
        <div className="ease-linear">
                <Image src={`/img/contact-bg.png`} className={`relative z-0 contrast-100 object-fill filter object-center`} alt="..." fill />
        </div>
      </div>

      <div className='flex md:flex-row lg:flex-row sm:flex-col justify-around container py-24'>
        <div className='flex flex-row sm:mb-16 flex-1 md:pr-24 lg:pr-24'>
            <div className='flex flex-col w-full'>
                <h3 className='text-2xl font-serif'>CINCINNATI, OH 45236</h3>
                <div className='flex flex-col'>
                    <div className='flex justify-between flex-row'>
                        <span className=' font-thin'>Contact us for any inquiries and questions.</span>
                    </div>
                    <div className='flex flex-row justify-between pt-6'>
                        <span className='font-bold'>PHONE</span>
                        <span className='font-thin'>(513) 407-6965</span>
                    </div>
                    <div className='flex flex-row justify-between pt-6'>
                        <span className='font-bold'>EMAIL</span>
                        <span className='font-thin'>truvacafemed@gmail.com</span>
                    </div>
                    <div className='flex flex-row justify-between pt-6'>
                        <span className='font-bold'>ADDRESS</span>
                        <span className='font-thin'>8060 MONTGOMERY RD. SUITE400</span>
                    </div>
                    <div className='flex flex-row justify-between pt-6'>
                        <span className='font-bold'>FOLLOW</span>
                        <span className='font-thin'>CINCINNATI, OH 45236</span>
                    </div>
                </div>
                {/* MAP */}
                <CincinatiMap />
            </div>
        </div>

        <div className='flex flex-row flex-1'>
            <div className='flex flex-col w-full'>
                <h3 className='text-2xl font-serif'>MASON, OH 45040</h3>
                <div className='flex flex-col'>
                    <div className='flex justify-between flex-row'>
                        <span className=' font-thin'>Contact us for any inquiries and questions.</span>
                    </div>
                    <div className='flex flex-row justify-between pt-6'>
                        <span className='font-bold'>PHONE</span>
                        <span className='font-thin'>(513) 407-6965</span>
                    </div>
                    <div className='flex flex-row justify-between pt-6'>
                        <span className='font-bold'>EMAIL</span>
                        <span className='font-thin'>truvacafemed@gmail.com</span>
                    </div>
                    <div className='flex flex-row justify-between pt-6'>
                        <span className='font-bold'>ADDRESS</span>
                        <span className='font-thin'>5065 DEERFIELD BLVD</span>
                    </div>
                    <div className='flex flex-row justify-between pt-6'>
                        <span className='font-bold'>FOLLOW</span>
                        <span className='font-thin'>CINCINNATI, OH 45236</span>
                    </div>
                </div>

              <MasonMap />

            </div>
        </div>

      </div>
      </>
  )
}