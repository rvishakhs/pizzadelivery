import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import cherry from "./assets/Cherry.png"
import pizza from "./assets/pizza.png"

type Props = {}

function Hero ({}: Props) {
  return (
    <section className='sticky  mx-auto flex items-center justify-between top-0 h-screen mx-w-[1350px] px-8 lg:px-12 '>
        {/* Left side */}

        <div className='space-y-4 -mt-16'>
            <div className='border-none  bg-white/40 flex ml-26 md:ml-16 mx-auto
              rounded-full xl py-1 px-6 gap-2 items-center w-fit border-gray-500'>
                <h2 className='font-medium text-xs'>Welcome to Pettite Pizza</h2>
                <div className='relative h-10 w-10 justify-center pl-2 items-center cursor-pointer flex'>
                    <Image
                            src={cherry}
                            layout='fill'
                            objectFit='contain'
                            alt='text'
                            className=''
                        />
                </div>
            </div>

        <h1 className='space-y-3 px-16 text-5xl md:text-5xl lg:text-7xl font-semibold tracking-wide'>
          <span className='block   '>
            It's Not Just  
          </span>
          <span className='block'>
            Pizza, It's an 
           </span>
          <span className=''>
            experience
          </span>
          
        </h1>
        <div className='flex items-center justify-center px-6 md:px-12 py-4 gap-6'>
            <div className='relative h-10 w-10 justify-center flex items-center rounded-full border border-gray-500'>
                <Image
                    src={cherry}
                    layout='fill'
                    objectFit='contain'
                    alt='text'
                    className=''
                />
            </div>
            <div className='w-[340px] lg:w-[550px]'>
            <span className='text-gray-500 text-justify font-medium text-sm'>Are you Pizza Lover? If your answer is yes, then in pizza spot for you. We serve pizzas for reasonable price.  </span>
            </div>
        </div>
        <div className='space-x-4 mx-8 lg:mx-16 flex flex-col space-y-4  md:flex-row'>
          <Link href="#products">
            <button 
                className='border-none  py-4 px-20  bg-red-400/90 hover:bg-black text-white rounded-full' 
              >
                Explore Menu
              </button>
          </Link>
          <button className='w-72 link md:link  '> Learn More </button>
        </div>
      </div>
        {/* Right Side */}
        <div className='hidden md:inline-flex -mt-16'>
                <div className='relative h-[700px] w-[550px] justify-center pl-2 items-center cursor-pointer flex'>
                    <Image
                            src={pizza}
                            layout='fill'
                            objectFit='contain'
                            alt='text'
                            className=''
                        />
                </div>
        </div>
    </section>
  )
}

export default Hero
