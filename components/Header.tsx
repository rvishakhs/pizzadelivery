import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

type Props = {}

function Header({}: Props) {
  return (
    <header className="sticky top-0 z-30 flex items-center ">
        <div className='flex items-center justify-center'>
            <Link href="/">
                <div className='relative h-20 w-10 cursor-pointer opacity-80 transition hover:opacity-100'>
                    <Image
                        src="https://1000logos.net/wp-content/uploads/2016/10/Colors-Air-Jordan-Logo.jpg"
                        layout='fill'
                        objectFit='contain'
                        alt='text'
                    />
                </div>
            </Link>
        </div>

        <div>
            <p>Home</p>
            <p>Products</p>
            <p>Contact</p>
        </div>
        <div>

        </div>
    </header>
  )
}

export default Header