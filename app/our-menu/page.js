'use client'
import React from 'react'
import Image from 'next/image'
import menu from '@/public/data/our-menu.json'
import bg from '@/public/img/gorsel-9.jpg'
import bgdrink from '@/public/img/coffee_milk_tea_2.jpg'
import bgdesert from '@/public/img/baklava.jpg'
import coctailimg from '@/public/img/coctail-beer.jpeg'

export default function page() {
  return (
    <>
      <div className="relative flex sm:h-[calc(100vh-60vh)] md:h-[calc(100vh-350px)] lg:h-[calc(100vh-350px)] flex-col justify-center items-center">
        <div className="ease-linear">
                <Image src={`/img/video-bckg.jpg`} className={`relative z-0 contrast-100 object-fill filter brightness-50 object-center`} alt="..." fill />
        </div>
      </div>


      <div className='flex flex-col py-12 sm:gap-y-16 md:gap-y-12 bg-amber-50 lg:gap-y-44'>

        {/** BREAKFAST */}
        <div className='container'>
            <div className='flex flex-col text-center justify-center gap-y-3 mt-24'>
              <h1 className='text-5xl font-serif' style={{fontWeight:'bold'}}>BREAKFAST</h1>
              <h1 className='text-2xl text-red-300'>* Breakfast serving is only at the Kenwood location *</h1>
              <h5 className='text-md text-gray-400 font-bold'>EVERY DAY 9:00AM - 2:00PM</h5>
              <h6 className=' font-extralight text-gray-600'>Our menu from Turkish selection</h6>
            </div>

            <div className='sm:flex sm:flex-col md:grid md:grid-cols-2 lg:grid lg:grid-cols-2'>
                {
                  menu.filter(p => p.category === 'breakfast').map((item,index) => (
                    <>
                    <div key={index} className='flex flex-col gap-y-3 mt-6'>
                      <div className='flex flex-row'>
                      <div className='flex-1 border-b font-normal'>
                            <h5>{item.name}</h5>
                        </div>
                        <div className='w-32'>
                        <span>$ {item.price}</span>
                        </div>
                      </div>
                      <div className='max-w-xl'>
                        <span className='font-thin text-slate-800'>{item.description}</span>
                        </div>
                    </div>
                    
                    </>
                  ))
                }
            </div>
        </div>

        {/** OMELETTES */}
        
        <div className='container'>
            <div className='flex flex-col text-center justify-center gap-y-3'>
              <span>TASTY</span>
              <h1 className='text-5xl font-serif' style={{fontWeight:'bold'}}>OMELETTES</h1>
              <h6 className=' font-extralight text-gray-600'>Our menu from Turkish selection</h6>
            </div>

            <div className='sm:flex sm:flex-col md:grid md:grid-cols-2 lg:grid lg:grid-cols-2'>
                {
                  menu.filter(p => p.category === 'omelettes').map((item,index) => (
                    <>
                    <div key={index} className='flex flex-col gap-y-3 mt-6'>
                      <div className='flex flex-row'>
                      <div className='flex-1 border-b font-normal'>
                            <h5>{item.name}</h5>
                        </div>
                        <div className='w-32'>
                        <span>$ {item.price}</span>
                        </div>
                      </div>
                      <div className='max-w-xl'>
                        <span className='font-thin text-slate-800'>{item.description}</span>
                        </div>
                    </div>
                    
                    </>
                  ))
                }
            </div>
        </div>

        {/** BAKKERY */}

        <div className='container'>
            <div className='flex flex-col text-center justify-center gap-y-3'>
              <span>TASTY</span>
              <h1 className='text-5xl font-serif' style={{fontWeight:'bold'}}>BAKERY</h1>
              <h6 className=' font-extralight text-gray-600'>Our menu from Turkish selection</h6>
            </div>

            <div className='sm:flex sm:flex-col md:grid md:grid-cols-2 lg:grid lg:grid-cols-2'>
                {
                  menu.filter(p => p.category === 'bakery').map((item,index) => (
                    <>
                    <div key={index} className='flex flex-col gap-y-3 mt-6'>
                      <div className='flex flex-row'>
                      <div className='flex-1 border-b font-normal'>
                            <h5>{item.name}</h5>
                        </div>
                        <div className='w-32'>
                        <span>$ {item.price}</span>
                        </div>
                      </div>
                      <div className='max-w-xl'>
                        <span className='font-thin text-slate-800'>{item.description}</span>
                        </div>
                    </div>
                    
                    </>
                  ))
                }
            </div>
        </div>

        {/** CREPES & PANCAKES */}

        <div className='container'>
            <div className='flex flex-col text-center justify-center gap-y-3'>
              <span>TASTY</span>
              <h1 className='text-5xl font-serif' style={{fontWeight:'bold'}}>CREPES & PANCAKES</h1>
              <h6 className=' font-extralight text-gray-600'>Our menu from Turkish selection</h6>
            </div>

            <div className='sm:flex sm:flex-col md:grid md:grid-cols-2 lg:grid lg:grid-cols-2'>
                {
                  menu.filter(p => p.category === 'crepes-pancakes').map((item,index) => (
                    <>
                    <div key={index} className='flex flex-col gap-y-3 mt-6'>
                      <div className='flex flex-row'>
                      <div className='flex-1 border-b font-normal'>
                            <h5>{item.name}</h5>
                        </div>
                        <div className='w-32'>
                        <span>$ {item.price}</span>
                        </div>
                      </div>
                      <div className='max-w-xl'>
                        <span className='font-thin text-slate-800'>{item.description}</span>
                        </div>
                    </div>
                    
                    </>
                  ))
                }
            </div>
        </div>
        

        {/** DINNER TITLE */}
        <div className='text-center flex justify-center items-center sm:h-64 md:h-96 lg:h-96 max-w-full' 
          style={{backgroundImage:`url(${bg.src})`,
          backgroundRepeat:'no-repeat',
          backgroundAttachment:'fixed',
          backgroundPosition:'center',
          filter:'grayscale(40%)',
          backgroundSize:'cover'
        }}>
              <h1 className='text-6xl font-extrabold text-white'>DINNER</h1>
        </div>


        {/** SOUPS */}

        <div className='container'>
            <div className='flex flex-col text-center justify-center gap-y-3'>
              <span>TASTY</span>
              <h1 className='text-5xl font-serif' style={{fontWeight:'bold'}}>SOUPS</h1>
            </div>

            <div className='sm:flex sm:flex-col md:grid md:grid-cols-2 lg:grid lg:grid-cols-2'>
                {
                  menu.filter(p => p.category === 'soups').map((item,index) => (
                    <>
                    <div key={index} className='flex flex-col gap-y-3 mt-6'>
                      <div className='flex flex-row'>
                      <div className='flex-1 border-b font-normal'>
                            <h5>{item.name}</h5>
                        </div>
                        <div className='w-32'>
                        <span>$ {item.price}</span>
                        </div>
                      </div>
                      <div className='max-w-xl'>
                        <span className='font-thin text-slate-800'>{item.description}</span>
                        </div>
                    </div>
                    
                    </>
                  ))
                }
            </div>
        </div>


        {/** SALADS */}

        <div className='container'>
            <div className='flex flex-col text-center justify-center gap-y-3'>
              <span>TASTY</span>
              <h1 className='text-5xl font-serif' style={{fontWeight:'bold'}}>SALADS</h1>
              <span className='text-extralight text-md text-gray-400'>SALAD ADD-ONS</span>
              <span className='text-thin text-sm text-gray-400'>DONER KEBAB, ADANA KEBAB, CHICKEN KEBAB, CHICKEN ADANA KEBAB $9.99</span>
              <span className='text-thin text-sm text-gray-400'>SHISH KEBAB $11.99</span>
              <span className='text-thin text-sm text-gray-400'>GRILLED SHRIMP $11.99</span>
            </div>

            <div className='sm:flex sm:flex-col md:grid md:grid-cols-2 lg:grid lg:grid-cols-2'>
                {
                  menu.filter(p => p.category === 'salads').map((item,index) => (
                    <>
                    <div key={index} className='flex flex-col gap-y-3 mt-6'>
                      <div className='flex flex-row'>
                      <div className='flex-1 border-b font-normal'>
                            <h5>{item.name}</h5>
                        </div>
                        <div className='w-32'>
                        <span>$ {item.price}</span>
                        </div>
                      </div>
                      <div className='max-w-xl'>
                        <span className='font-thin text-slate-800'>{item.description}</span>
                        </div>
                    </div>
                    
                    </>
                  ))
                }
            </div>
        </div>


        {/** COLD STARTERS */}

        <div className='container'>
            <div className='flex flex-col text-center justify-center gap-y-3'>
              <span>TASTY & CRUNCHY</span>
              <h1 className='text-5xl font-serif' style={{fontWeight:'bold'}}>COLD STARTERS</h1>
              <h6 className=' font-extralight text-gray-600'>Our menu from Turkish selection</h6>
            </div>

            <div className='sm:flex sm:flex-col md:grid md:grid-cols-2 lg:grid lg:grid-cols-2'>
                {
                  menu.filter(p => p.category === 'cold-starters').map((item,index) => (
                    <>
                    <div key={index} className='flex flex-col gap-y-3 mt-6'>
                      <div className='flex flex-row'>
                      <div className='flex-1 border-b font-normal'>
                            <h5>{item.name}</h5>
                        </div>
                        <div className='w-32'>
                        <span>$ {item.price}</span>
                        </div>
                      </div>
                      <div className='max-w-xl'>
                        <span className='font-thin text-slate-800'>{item.description}</span>
                        </div>
                    </div>
                    
                    </>
                  ))
                }
            </div>
        </div>


        {/** HOT MEZZES */}

        <div className='container'>
            <div className='flex flex-col text-center justify-center gap-y-3'>
              <span>TASTY & CRUNCHY</span>
              <h1 className='text-5xl font-serif' style={{fontWeight:'bold'}}>HOT MEZZES</h1>
              <h6 className=' font-extralight text-gray-600'>Our menu from Turkish selection</h6>
            </div>

            <div className='sm:flex sm:flex-col md:grid md:grid-cols-2 lg:grid lg:grid-cols-2'>
                {
                  menu.filter(p => p.category === 'hot-mezzes').map((item,index) => (
                    <>
                    <div key={index} className='flex flex-col gap-y-3 mt-6'>
                      <div className='flex flex-row'>
                      <div className='flex-1 border-b font-normal'>
                            <h5>{item.name}</h5>
                        </div>
                        <div className='w-32'>
                        <span>$ {item.price}</span>
                        </div>
                      </div>
                      <div className='max-w-xl'>
                        <span className='font-thin text-slate-800'>{item.description}</span>
                        </div>
                    </div>
                    
                    </>
                  ))
                }
            </div>
        </div>


        {/** KEBABS */}

        <div className='container'>
            <div className='flex flex-col text-center justify-center gap-y-3'>
              <span>TASTY & CRUNCHY</span>
              <h1 className='text-5xl font-serif' style={{fontWeight:'bold'}}>KEBABS</h1>
              <h6 className=' font-extralight text-gray-600'>Our menu from Turkish selection</h6>
            </div>

            <div className='sm:flex sm:flex-col md:grid md:grid-cols-2 lg:grid lg:grid-cols-2'>
                {
                  menu.filter(p => p.category === 'kebabs').map((item,index) => (
                    <>
                    <div key={index} className='flex flex-col gap-y-3 mt-6'>
                      <div className='flex flex-row'>
                      <div className='flex-1 border-b font-normal'>
                            <h5>{item.name}</h5>
                        </div>
                        <div className='w-32'>
                        <span>$ {item.price}</span>
                        </div>
                      </div>
                      <div className='max-w-xl'>
                        <span className='font-thin text-slate-800'>{item.description}</span>
                        </div>
                    </div>
                    
                    </>
                  ))
                }
            </div>
        </div>



        {/** CHEF'S SPECIALS */}

        <div className='container'>
            <div className='flex flex-col text-center justify-center gap-y-3'>
              <span>TASTY & CRUNCHY</span>
              <h1 className='text-5xl font-serif' style={{fontWeight:'bold'}}>CHEF'S SPECIALS</h1>
              <h6 className=' font-extralight text-gray-600'>Our menu from Turkish selection</h6>
            </div>

            <div className='sm:flex sm:flex-col md:grid md:grid-cols-2 lg:grid lg:grid-cols-2'>
                {
                  menu.filter(p => p.category === 'chefs-specials').map((item,index) => (
                    <>
                    <div key={index} className='flex flex-col gap-y-3 mt-6'>
                      <div className='flex flex-row'>
                      <div className='flex-1 border-b font-normal'>
                            <h5>{item.name}</h5>
                        </div>
                        <div className='w-32'>
                        <span>$ {item.price}</span>
                        </div>
                      </div>
                        <div className='max-w-xl'>
                        <span className='font-thin text-slate-800'>{item.description}</span>
                        </div>
                    </div>
                    
                    </>
                  ))
                }
            </div>
        </div>


        {/** SEAFOOD */}

        <div className='container'>
            <div className='flex flex-col text-center justify-center gap-y-3'>
              <span>TASTY & CRUNCHY</span>
              <h1 className='text-5xl font-serif' style={{fontWeight:'bold'}}>SEAFOOD</h1>
              <h6 className=' font-extralight text-gray-600'>Our menu from Turkish selection</h6>
            </div>

            <div className='sm:flex sm:flex-col md:grid md:grid-cols-2 lg:grid lg:grid-cols-2'>
                {
                  menu.filter(p => p.category === 'seafood').map((item,index) => (
                    <>
                    <div key={index} className='flex flex-col gap-y-3 mt-6'>
                      <div className='flex flex-row'>
                      <div className='flex-1 border-b font-normal'>
                            <h5>{item.name}</h5>
                        </div>
                        <div className='w-32'>
                        <span>$ {item.price}</span>
                        </div>
                      </div>
                      <div className='max-w-xl'>
                        <span className='font-thin text-slate-800'>{item.description}</span>
                        </div>
                    </div>
                    
                    </>
                  ))
                }
            </div>
        </div>


        {/** STEAKS */}

        <div className='container'>
            <div className='flex flex-col text-center justify-center gap-y-3'>
              <span>TASTY & CRUNCHY</span>
              <h1 className='text-5xl font-serif' style={{fontWeight:'bold'}}>STEAKS</h1>
              <h6 className=' font-extralight text-gray-600'>Our menu from Turkish selection</h6>
            </div>

            <div className='sm:flex sm:flex-col md:grid md:grid-cols-2 lg:grid lg:grid-cols-2'>
                {
                  menu.filter(p => p.category === 'steaks').map((item,index) => (
                    <>
                    <div key={index} className='flex flex-col gap-y-3 mt-6'>
                      <div className='flex flex-row'>
                      <div className='flex-1 border-b font-normal'>
                            <h5>{item.name}</h5>
                        </div>
                        <div className='w-32'>
                        <span>$ {item.price}</span>
                        </div>
                      </div>
                      <div className='max-w-xl'>
                        <span className='font-thin text-slate-800'>{item.description}</span>
                        </div>
                    </div>
                    
                    </>
                  ))
                }
            </div>
        </div>


        {/** PASTA */}

        <div className='container'>
            <div className='flex flex-col text-center justify-center gap-y-3'>
              <span>TASTY & CRUNCHY</span>
              <h1 className='text-5xl font-serif' style={{fontWeight:'bold'}}>PASTA</h1>
              <h6 className=' font-extralight text-gray-600'>Our menu from Turkish selection</h6>
            </div>

            <div className='sm:flex sm:flex-col md:grid md:grid-cols-2 lg:grid lg:grid-cols-2'>
                {
                  menu.filter(p => p.category === 'pasta').map((item,index) => (
                    <>
                    <div key={index} className='flex flex-col gap-y-3 mt-6'>
                      <div className='flex flex-row'>
                      <div className='flex-1 border-b font-normal'>
                            <h5>{item.name}</h5>
                        </div>
                        <div className='w-32'>
                        <span>$ {item.price}</span>
                        </div>
                      </div>
                      <div className='max-w-xl'>
                        <span className='font-thin text-slate-800'>{item.description}</span>
                        </div>
                    </div>
                    
                    </>
                  ))
                }
            </div>
        </div>


        {/** FROM THE OVEN */}

        <div className='container'>
            <div className='flex flex-col text-center justify-center gap-y-3'>
              <span>TASTY & CRUNCHY</span>
              <h1 className='text-5xl font-serif' style={{fontWeight:'bold'}}>FROM THE OVEN</h1>
              <h6 className=' font-extralight text-gray-600'>Our menu from Turkish selection</h6>
            </div>

            <div className='sm:flex sm:flex-col md:grid md:grid-cols-2 lg:grid lg:grid-cols-2'>
                {
                  menu.filter(p => p.category === 'from-the-oven').map((item,index) => (
                    <>
                    <div key={index} className='flex flex-col gap-y-3 mt-6'>
                      <div className='flex flex-row'>
                      <div className='flex-1 border-b font-normal'>
                            <h5>{item.name}</h5>
                        </div>
                        <div className='w-32'>
                        <span>$ {item.price}</span>
                        </div>
                      </div>
                      <div className='max-w-xl'>
                        <span className='font-thin text-slate-800'>{item.description}</span>
                        </div>
                    </div>
                    
                    </>
                  ))
                }
            </div>
        </div>

        {/** DESERT TITLE */}
        <div className='text-center flex justify-center items-center sm:h-64 md:h-96 lg:h-96 max-w-full' 
          style={{backgroundImage:`url(${bgdesert.src})`,
          backgroundRepeat:'no-repeat',
          backgroundAttachment:'fixed',
          backgroundPosition:'center',
          filter:'grayscale(40%)',
          backgroundSize:'cover'
        }}>
              <h1 className='text-6xl font-extrabold text-white'>DESSERT</h1>
        </div>


        {/** DESSERT */}

        <div className='container'>
            <div className='flex flex-col text-center justify-center gap-y-3'>
              <span>TASTY & CRUNCHY</span>
              <h1 className='text-5xl font-serif' style={{fontWeight:'bold'}}>DESSERT</h1>
              <h6 className=' font-extralight text-gray-600'>Our menu from Turkish selection</h6>
            </div>

            <div className='sm:flex sm:flex-col md:grid md:grid-cols-2 lg:grid lg:grid-cols-2'>
                {
                  menu.filter(p => p.category === 'dessert').map((item,index) => (
                    <>
                    <div key={index} className='flex flex-col gap-y-3 mt-6'>
                      <div className='flex flex-row'>
                      <div className='flex-1 border-b font-normal'>
                            <h5>{item.name}</h5>
                        </div>
                        <div className='w-32'>
                        <span>$ {item.price}</span>
                        </div>
                      </div>
                      <div className='max-w-xl'>
                        <span className='font-thin text-slate-800'>{item.description}</span>
                        </div>
                    </div>
                    
                    </>
                  ))
                }
            </div>
        </div>


        {/** LUNCH ENTREES & SANDWICHES */}

        <div className='container'>
            <div className='flex flex-col text-center justify-center gap-y-3'>
              <span>MONDAY-FRIDAY 11:00AM - 3:00PM</span>
              <h1 className='text-5xl font-serif' style={{fontWeight:'bold'}}>LUNCH ENTREES & <br/> SANDWICHES</h1>
              <h6 className=' font-extralight text-gray-600'>(All sandwiches come with lettuce, tomatoes and onions. Served with French Fries.)</h6>
            </div>

            <div className='sm:flex sm:flex-col md:grid md:grid-cols-2 lg:grid lg:grid-cols-2'>
                {
                  menu.filter(p => p.category === 'sandwiches').map((item,index) => (
                    <>
                    <div key={index} className='flex flex-col gap-y-3 mt-6'>
                      <div className='flex flex-row'>
                      <div className='flex-1 border-b font-normal'>
                            <h5>{item.name}</h5>
                        </div>
                        <div className='w-32'>
                        <span>$ {item.price}</span>
                        </div>
                      </div>
                        <div className='max-w-xl'>
                        <span className='font-thin text-slate-800'>{item.description}</span>
                        </div>
                    </div>
                    
                    </>
                  ))
                }
            </div>
        </div>


        {/** SIDES */}

        <div className='container'>
            <div className='flex flex-col text-center justify-center gap-y-3'>
              <h1 className='text-5xl font-serif' style={{fontWeight:'bold'}}>SIDES</h1>
            </div>

            <div className='sm:flex sm:flex-col md:grid md:grid-cols-2 lg:grid lg:grid-cols-2'>
                {
                  menu.filter(p => p.category === 'sides').map((item,index) => (
                    <>
                    <div key={index} className='flex flex-col gap-y-3 mt-6'>
                      <div className='flex flex-row'>
                      <div className='flex-1 border-b font-normal'>
                            <h5>{item.name}</h5>
                        </div>
                        <div className='w-32'>
                        <span>$ {item.price}</span>
                        </div>
                      </div>
                      <div className='max-w-xl'>
                        <span className='font-thin text-slate-800'>{item.description}</span>
                        </div>
                    </div>
                    
                    </>
                  ))
                }
            </div>
        </div>

        {/** DRINKS TITLE */}
        <div className='text-center flex justify-center items-center sm:h-64 md:h-96 lg:h-96 max-w-full' 
          style={{backgroundImage:`url(${bgdrink.src})`,
          backgroundRepeat:'no-repeat',
          backgroundAttachment:'fixed',
          backgroundPosition:'center',
          filter:'grayscale(40%)',
          backgroundSize:'cover'
        }}>
              <h1 className='text-6xl font-extrabold text-white'>DRINKS</h1>
        </div>


        {/** DRINKS */}

        <div className='container'>
            <div className='flex flex-col text-center justify-center gap-y-3'>
              <h1 className='text-5xl font-serif' style={{fontWeight:'bold'}}>DRINKS</h1>
            </div>

            <div className='sm:flex sm:flex-col md:grid md:grid-cols-2 lg:grid lg:grid-cols-2'>
                {
                  menu.filter(p => p.category === 'drinks').map((item,index) => (
                    <>
                    <div key={index} className='flex flex-col gap-y-3 mt-6'>
                      <div className='flex flex-row'>
                      <div className='flex-1 border-b font-normal'>
                            <h5>{item.name}</h5>
                        </div>
                        <div className='w-32'>
                        <span>$ {item.price}</span>
                        </div>
                      </div>
                      <div className='max-w-xl'>
                        <span className='font-thin text-slate-800'>{item.description}</span>
                        </div>
                    </div>
                    
                    </>
                  ))
                }
            </div>
        </div>


        {/** COCTAIL & BEER TITLE */}
        <div className='text-center flex justify-center items-center sm:h-64 md:h-96 lg:h-96 max-w-full' 
          style={{backgroundImage:`url(${coctailimg.src})`,
          backgroundRepeat:'no-repeat',
          backgroundAttachment:'fixed',
          backgroundPosition:'center',
          filter:'grayscale(40%)',
          backgroundSize:'cover'
        }}>
              <h1 className='text-6xl font-extrabold text-white'>ALCOHOLS</h1>
        </div>


        {/** COCTAIL */}

        <div className='container'>
            <div className='flex flex-col text-center justify-center gap-y-3'>
              <h1 className='text-5xl font-serif' style={{fontWeight:'bold'}}>COCTAILS</h1>
            </div>

            <div className='sm:flex sm:flex-col md:grid md:grid-cols-2 lg:grid lg:grid-cols-2'>
                {
                  menu.filter(p => p.category === 'coctail').map((item,index) => (
                    <>
                    <div key={index} className='flex flex-col gap-y-3 mt-6'>
                      <div className='flex flex-row'>
                      <div className='flex-1 border-b font-normal'>
                            <h5>{item.name}</h5>
                        </div>
                        <div className='w-32'>
                        <span>$ {item.price}</span>
                        </div>
                      </div>
                      <div className='max-w-xl'>
                        <span className='font-thin text-slate-800'>{item.description}</span>
                        </div>
                    </div>
                    
                    </>
                  ))
                }
            </div>
        </div>


        {/** BEERS */}

        <div className='container'>
            <div className='flex flex-col text-center justify-center gap-y-3'>
              <h1 className='text-5xl font-serif' style={{fontWeight:'bold'}}>BEERS</h1>
            </div>

            <div className='sm:flex sm:flex-col md:grid md:grid-cols-2 lg:grid lg:grid-cols-2'>
                {
                  menu.filter(p => p.category === 'beer').map((item,index) => (
                    <>
                    <div key={index} className='flex flex-col gap-y-3 mt-6'>
                      <div className='flex flex-row'>
                      <div className='flex-1 border-b font-normal'>
                            <h5>{item.name}</h5>
                        </div>
                        <div className='w-32'>
                        <span>$ {item.price}</span>
                        </div>
                      </div>
                      <div className='max-w-xl'>
                        <span className='font-thin text-slate-800'>{item.description}</span>
                        </div>
                    </div>
                    
                    </>
                  ))
                }
            </div>
        </div>
        

      </div>
    </>
  )
}
