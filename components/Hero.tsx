import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import cherry from "./assets/Cherry.png"
import pizza from "./assets/pizza.png"
import pizza2 from "./assets/pizza2.png"
import oppizza from "./assets/oppizza.png"
import { AiFillStar } from "react-icons/ai";
import { FiPhoneCall } from "react-icons/fi";

type Props = {}

function Hero ({}: Props) {


  return (
    <section className=' mx-auto flex items-center justify-between top-0 h-screen mx-w-[1350px] px-8 md:px-8 lg:px-28 '>

        <div 
            className='w-full absolute top-[30%] bg-[#F7AB0A]/10 left-0 h-[300px] -skew-y-12'
        />

        {/* Left side */}
        <div className='space-y-4 -mt-16'>
            <div className='border-none  bg-white/40 flex ml-12 md:ml-16 mx-auto
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
        <div className='space-x-4 mx-8 md:mx-8 lg:mx-16 flex flex-col space-y-4  md:flex-row'>
          <Link href="#products">
            <button 
                className='border-none  py-4 px-10 lg:px-20 cursor-pointer  bg-yellow-400/90 hover:bg-black text-white rounded-full' 
              >
                Explore Menu
              </button>
          </Link>
          <button className='w-40 link md:link  '> Learn More </button>
        </div>
      </div>
        {/* Right Side */}
        <div className=' hidden md:inline-flex -mt-16'>
                <div className='relative md:h-[450px] md:w-[300px] lg:h-[700px] lg:w-[550px] justify-center pl-2 items-center cursor-pointer flex'>
                    <Image
                        src={pizza}
                        layout='fill'
                        objectFit='contain'
                        alt='text'
                        className=''
                    />
                {/* Top side card component about rating   */}
                <div className='absolute hover:scale-105 transition duration-200 border md:left-1 md:top-6 lg:-left-20 lg:top-28 flex item-center gap-2 justify-center px-4 rounded-2xl border-white/80 bg-white p-2'>
                    <div className ="relative h-[80px] w-[80px]  pl-1 items-center cursor-pointer flex">
                        <Image
                            src={pizza2}
                            layout='fill'
                            objectFit='contain'
                            alt='text'
                            className=''
                        />  
                    </div>
                    <div className='flex flex-col items-center'>
                           <p className='font-bold'>Italian Pizzaa</p> 
                           <div className='flex text-left mr-4'>
                           {[...Array(5)].map((star) => {        
                                return (      
                                        <AiFillStar className='mt-1 text-left text-yellow-400'/>  
                                );
                            })}
                           </div>

                           
                           <p className='text-left font-bold mt-2 mr-3 pr-10'> $ 6.75</p> 
                    </div>
                </div>
                {/* Bottom side component for coustomer  */}
                <div className='absolute  border md:right-1 md:bottom-2 lg:right-1 lg:bottom-28 flex item-center space-x-10 justify-between px-2 rounded-full border-white/80 bg-white py-1 '>
                    <div className='relative h-10 w-10 mt-1  justify-center flex items-center rounded-full border border-gray-500'>
                        <Image
                            src={cherry}
                            layout='fill'
                            objectFit='contain'
                            alt='text'
                            className=''
                    />
                    </div>  
                    <div className='flex flex-col items-center justify-start text-left'>
                        <p className='font-bold text-sm'>Richard Jacson</p>   
                        <p className='text-left items-center text-gray-500 text-sm '> Food Courier </p> 
                    </div>
                    <div className='h-12 w-12 hover:scale-110 flex items-center justify-center rounded-full border-none border-gray-300 bg-red-400/90'>
                      <FiPhoneCall className='items-center hover:scale-95 justify-center text-xl'/>     
                    </div>

                </div>
                </div>
                </div>
    </section>
  )
}

export default Hero
