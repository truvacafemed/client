import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function Footer() {
  return (
    <footer className="bg-zinc-800 bottom-0 shadow text-white dark:bg-zinc-800">
    <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
      <span className="text-sm sm:text-center dark:text-gray-400">© 2024 <a href="https://www.truvaturkishkitchen.com/" className="hover:underline">Truvakitchen</a>. All Rights Reserved.
    </span>
    <ul className="flex flex-wrap items-center mt-3 text-sm font-medium sm:mt-0">
      <li className='hover:underline me-4 md:me-6'>
                <Link target='_blank' href={'https://www.instagram.com/truvaturkishkitchen?igsh=MXB3YnR1cWs3ZmJtdw%3D%3D&utm_source=qr'}>
                    <Image src={'/img/icon/truva-instagram.png'} width={28} height={28} />
                    </Link>
      </li>
      <li className='hover:underline me-4 md:me-6'>
                <Link target='_blank' href={'https://www.facebook.com/truvaturkishkitchen?mibextid=rS40aB7S9Ucbxw6v'}>
                    <Image src={'/img/icon/truva-facebook.png'} width={28} height={28} />
                    </Link>
      </li>
        <li>
            <Link href="/about" className="hover:underline me-4 md:me-6">About</Link>
        </li>
        <li>
            <Link href="/blog" className="hover:underline me-4 md:me-6">Blog</Link>
        </li>
        <li>
            <Link href="/gallery" className="hover:underline me-4 md:me-6">Gallery</Link>
        </li>
        <li>
            <Link href="/contact" className="hover:underline">Contact</Link>
        </li>
    </ul>
    </div>
</footer>
  )
}
