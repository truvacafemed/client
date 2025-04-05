'use client'
import React, { useEffect } from 'react'
import Image from 'next/image'
import { Loader } from '@googlemaps/js-api-loader'
import CincinatiMap from '@/components/CincinatiMap'
import MasonMap from '@/components/MasonMap'
import Link from 'next/link'

export default function page() {

  return (
    <>
    <div className="relative flex sm:h-[calc(100vh-60vh)] md:h-[calc(100vh-350px)] lg:h-[calc(100vh-350px)] flex-col justify-center items-center">
        <div className="ease-linear">
                <Image src={`/img/contact-bg.jpg`} className={`relative z-0 contrast-100 object-fill filter object-center`} alt="..." fill />
        </div>
        <div className='z-30 relative h-screen sm:mt-12 flex flex-col items-center justify-center'>
          <h2 className=' text-slate-300 sm:text-2xl md:text-5xl text-5xl font-serif font-medium'>CONTACT US</h2>
      </div>
      </div>

      <div className='bg-amber-50 py-24'>

        <div className='border-b pb-12 flex flex-col justify-center gap-y-3 items-center text-center sm:px-4'>
            <h3 className='font-bold text-4xl'>Where you can find us ...</h3>
            <h4 className='font-normal text-2xl'>For reservations, please click here:</h4>
            <Link href='https://www.opentable.com/restref/client/?restref=1265287&rid=1265287&datetime=2023-12-29T19%3A00&covers=1&searchdatetime=2023-12-29T19%3A00&partysize=1&corrid=24f03c18-b0ba-477c-96a6-7a8e4567172e' 
                target='_blank'
                className='mt-8 bg-amber-600 hover:bg-amber-500 transition-all rounded-lg sm:px-3 sm:py-2 md:px-4 md:py-3 px-5 py-3 text-white font-normal'>
                Reserve Your Table
            </Link>
            <div className='flex flex-row gap-x-8 mt-12'>
                <Link target='_blank' href={'https://www.facebook.com/truvaturkishkitchen?mibextid=rS40aB7S9Ucbxw6v'}>
                    <Image src={'/img/icon/truva-facebook.png'} width={48} height={48} />
                    </Link>
                    <Link target='_blank' href={'https://www.instagram.com/truvaturkishkitchen?igsh=MXB3YnR1cWs3ZmJtdw%3D%3D&utm_source=qr'}>
                    <Image src={'/img/icon/truva-instagram.png'} width={48} height={48} />
                    </Link>
            </div>
        </div>

        <div className='container flex md:flex-row lg:flex-row sm:flex-col justify-around mt-12'>

        <div className='flex flex-row sm:mb-16 flex-1 md:pr-24 lg:pr-24'>
            <div className='flex flex-col w-full'>
                <h3 className='text-2xl font-serif sm:text-center sm:text-3xl'>KENWOOD</h3>
                <div className='flex flex-col sm:items-center'>
                    <div className='flex flex-row gap-x-3 pt-6'>
                        <Image src={'/img/icon/phoneico.png'} width={25} height={25} />    
                        <span className='font-normal'>(513) 407-6965</span>
                    </div>
                    <div className='flex flex-row gap-x-3 pt-6'>
                        <Image src={'/img/icon/emailico.png'} width={25} height={25} /> 
                        <span className='font-normal'>truvacafemed@gmail.com</span>
                    </div>
                    <div className='flex flex-row gap-x-3 pt-6'>
                        <Image src={'/img/icon/addressico.png'} width={25} height={25} /> 
                        <span className='font-normal'>8060 MONTGOMERY RD. SUITE400</span>
                    </div>
                    <div className='flex flex-row gap-x-3 pt-6'>
                        <Image src={'/img/icon/followico.png'} width={25} height={25} /> 
                        <span className='font-normal'>Cincinnati, Oh 45236</span>
                    </div>
                    <div className='flex flex-col w-full mt-8'>
                    <div className='flex flex-col sm:items-center'>
                        <div className='flex flex-row gap-x-3 pt-1'>
                            <span>Monday:</span>  
                            <span className='font-normal'>11 AM - 10 PM</span>
                        </div>
                        <div className='flex flex-row gap-x-3 pt-1'>
                            <span>Tuesday:</span>  
                            <span className='font-normal'>11 AM - 10 PM</span>
                        </div>
                        <div className='flex flex-row gap-x-3 pt-1'>
                            <span>Wednesday:</span>  
                            <span className='font-normal'>11 AM - 10 PM</span>
                        </div>
                        <div className='flex flex-row gap-x-3 pt-1'>
                            <span>Thursday:</span>  
                            <span className='font-normal'>11 AM - 10 PM</span>
                        </div>
                        <div className='flex flex-row gap-x-3 pt-1'>
                            <span>Friday:</span>  
                            <span className='font-normal'>11 AM - 10:30 PM</span>
                        </div>
                        <div className='flex flex-row gap-x-3 pt-1'>
                            <span>Saturday:</span>  
                            <span className='font-normal'>11 AM - 10:30 PM</span>
                        </div>
                        <div className='flex flex-row gap-x-3 pt-1'>
                            <span>Sunday:</span>  
                            <span className='font-normal'>11 AM - 10 PM</span>
                        </div>
                </div>
            </div>
                    {/* MAP */}
                <CincinatiMap />
                </div>
                
            </div>
        </div>

        <div className='flex flex-row flex-1 container'>
            <div className='flex flex-col w-full'>
                <h3 className='text-2xl font-serif sm:text-center sm:text-3xl'>MASON</h3>
                <div className='flex flex-col sm:items-center'>
                    <div className='flex flex-row gap-x-3 pt-6'>
                    <Image src={'/img/icon/phoneico.png'} width={25} height={25} />   
                        <span className='font-normal'>(513) 486-1856</span>
                    </div>
                    <div className='flex flex-row gap-x-3 pt-6'>
                    <Image src={'/img/icon/emailico.png'} width={25} height={25} /> 
                        <span className='font-normal'>truvacafemed@gmail.com</span>
                    </div>
                    <div className='flex flex-row gap-x-3 pt-6'>
                    <Image src={'/img/icon/addressico.png'} width={25} height={25} /> 
                        <span className='font-normal'>5065 DEERFIELD BLVD</span>
                    </div>
                    <div className='flex flex-row gap-x-3 pt-6'>
                    <Image src={'/img/icon/followico.png'} width={25} height={25} /> 
                        <span className='font-normal'>Mason, Oh 45040</span>
                    </div>

                    <div className='flex flex-col w-full mt-8'>
                    <div className='flex flex-col sm:items-center'>
                        <div className='flex flex-row gap-x-3 pt-1'>
                            <span>Monday:</span>  
                            <span className='font-normal'>11 AM - 10 PM</span>
                        </div>
                        <div className='flex flex-row gap-x-3 pt-1'>
                            <span>Tuesday:</span>  
                            <span className='font-normal'>11 AM - 10 PM</span>
                        </div>
                        <div className='flex flex-row gap-x-3 pt-1'>
                            <span>Wednesday:</span>  
                            <span className='font-normal'>11 AM - 10 PM</span>
                        </div>
                        <div className='flex flex-row gap-x-3 pt-1'>
                            <span>Thursday:</span>  
                            <span className='font-normal'>11 AM - 10 PM</span>
                        </div>
                        <div className='flex flex-row gap-x-3 pt-1'>
                            <span>Friday:</span>  
                            <span className='font-normal'>11 AM - 10:30 PM</span>
                        </div>
                        <div className='flex flex-row gap-x-3 pt-1'>
                            <span>Saturday:</span>  
                            <span className='font-normal'>11 AM - 10:30 PM</span>
                        </div>
                        <div className='flex flex-row gap-x-3 pt-1'>
                            <span>Sunday:</span>  
                            <span className='font-normal'>11 AM - 10 PM</span>
                        </div>
                </div>
            </div>

                    <MasonMap />
                </div>

              

            </div>
            </div>
        </div>

      </div>

      
      </>
  )
}
