import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { CiSearch, CiShoppingBasket, CiUser  } from "react-icons/ci";

type Props = {}

function Header({}: Props) {
  return (
    <header className="sticky top-0 z-30 flex items-center justify-between px-6 md:px-10 lg:px-16">
        <div className='flex items-center justify-center space-x-3'>
            <Link href="/">
                <div className='relative h-20 w-10 cursor-pointer flex  opacity-80 transition hover:opacity-100'>
                    <Image
                        src="https://1000logos.net/wp-content/uploads/2016/10/Colors-Air-Jordan-Logo.jpg"
                        layout='fill'
                        objectFit='contain'
                        alt='text'
                    />
                </div>
            </Link>
            <div className='mt-2 '>
                <h1 className='font-serif text-red-600/70 font-extrabold text-xl md:text-2xl' >Petite Pizza </h1>
                <h1 className='font-serif text-red-600/70 font-extrabold text-xl md:text-2xl' >Co</h1>
            </div>
        </div>

        <div className='hidden md:flex space-x-4 items-center justify-center'>
            <p className='header link'>Home</p>
            <p className='header link'>Products</p>
            <p className='header link'>Contact</p>
        </div>
        <div className='flex space-x-4 items-center'>
        <Link href='/cartdetails'>
                <div className='cursor-pointer relative'>
                    <span className=' text-xs font-medium animate-bounce absolute -right-1 -top-1 z-50 flex h-4 w-4 
                    items-center justify-center rounded-full bg-gradient-to-r from-pink-500 to-purple-500'>5</span>
                    <CiShoppingBasket className='h-6 w-6 cursor-pointer transition hover:scale-110'/>
                </div>
            </Link>
            <CiUser className='h-6 w-6 cursor-pointer transition hover:scale-110'/> 
        </div>
    </header>
  )
}

export default Header