import CustomersMenu from '@/components/CustomersMenu'
import HomeCarousel from '@/components/HomeCarousel'
import HomeContent from '@/components/HomeContent'
import bg from '@/public/img/stars-background.jpg'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-amber-50">
        <HomeCarousel />
        <HomeContent />
        <CustomersMenu />
        <div className='py-12 mt-6 max-w-full' style={{backgroundImage:`url(${bg.src})`}}>
        <div className='flex sm:flex-col md:flex-row container flex-row text-white mt-12 items-center'>
            <div className='flex-1 col-auto p-4 flex-col justify-center text-start gap-y-6'>
              <h4 className=' font-thin'>TASTY AND CHURCHY</h4>
              <h1 className='font-bold text-5xl pt-4'>ABOUT US</h1>
              <p className=' font-thin pt-4'>
              Truva Turkish Kitchen has an inviting and casual atmosphere enjoyed by Turkish cuisine aficionados 
              and first-timers alike. Aside from our delicious and authentic food, our personable and professional 
              staff as well as the cozy setting will create a memorable experience for every diner.
              </p>
            </div>
            <div className='flex-1 p-4 col-auto'>
                <img src='/img/home-about-img.jpeg' className='h-auto max-w-full rounded-2xl' />
            </div>
        </div>
        </div>
    </main>
  )
}
