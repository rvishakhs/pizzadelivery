import Image from 'next/image'
import React from 'react'
import cherry from "./assets/Cherry.png"

type Props = {}

function Hero ({}: Props) {
  return (
    <section className='mx-auto flex items-center justify-between top-0  mx-w-[1350px] px-8 lg:px-12'>
        {/* Left side */}
        <div className='mt-6 ' >
            <div className='relative h-4 w-4 flex flex-rowgi items-center'>
                <span>More faster than </span>
                    <Image
                            src={cherry}
                            layout='fill'
                            objectFit='contain'
                            alt='text'
                            className=''
                    />
            </div>
        </div>
        {/* Right Side */}
    </section>
  )
}

export default Hero
