import React from 'react'
import customerProducts from '@/public/data/products.json'

export default function CustomersMenu() {
  return (
    <div className='flex flex-col py-24 container'>
        <div className='flex flex-col gap-y-4 text-center'>
            <h1 className=' font-bold font-serif text-4xl'>QUICK LOOK AT OUR MENU</h1>
            <h4 className='font-extralight'>Best selection for our customers.</h4>
        </div>


        <div className='flex sm:flex-col md:flex-row flex-row mt-24 max-w-full'>
        <div className='flex-1 flex-col'>
            {
                customerProducts.filter(i => i.category === 'customers').splice(0,4).map((item,index) => (
                    <>
                <div key={index} className='flex flex-row justify-between mt-6'>
                    <div className='flex-1 border-b font-normal'>
                        <h5>{item.name}</h5>
                    </div>
                    <div className='w-32'>
                    <span>$ {item.prica}</span>
                    </div>
                </div>
                <div className='mt-2'>
                    <span className='font-thin text-slate-800'>{item.description}</span>
                </div>
                </>
                ))
            }
            </div>

            <div className='flex-1 sm:pl-0 md:pl-4 flex-col'>
            {
                customerProducts.filter(i => i.category === 'customers').splice(4,8).map((item,index) => (
                    <>
                <div key={index} className='flex flex-row justify-between mt-6'>
                    <div className='flex-1 border-b font-normal'>
                        <h5>{item.name}</h5>
                    </div>
                    <div className='w-32'>
                    <span>$ {item.prica}</span>
                    </div>
                </div>
                <div className='mt-2'>
                    <span className='font-thin text-slate-800'>{item.description}</span>
                </div>
                </>
                ))
            }
            </div>
        </div>

    </div>
  )
}
