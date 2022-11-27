import Image from 'next/image'
import React from 'react'
import s1 from "./assets/s1.png"
import s2 from "./assets/s2.png"
import s3 from "./assets/s3.png"

type Props = {}

function service({}: Props) {
  return (
    <div className='py-8 '>
        <div className='flex space-y-3 items-center justify-center flex-col'>
            <h1 className='text-3xl font-bold text-red-400/90'> What we serving</h1>
            <h1 className='text-5xl  font-bold font-serif '> Your Favourite </h1>
            <h1 className='text-5xl font-bold font-serif' > Delivery Partner</h1>
        </div>
        <div className='flex flex-col md:flex-row items-center mt-12 justify-center gap-12'>
            <div className='flex flex-col  space-y-6   py-6 px-4 w-[250px] items-center' >
                <div className='relative h-56 w-44 justify-center pl-2 items-center cursor-pointer flex'>
                        <Image
                                src={s1}
                                layout='fill'
                                objectFit='contain'
                                alt='text'
                                className=''
                            />
                </div>
                <p className='text-2xl font-bold'>Easy to Order</p>
                <p className='text-lg font-medium text-gray-400'>You only need a few steps in food ordering</p>
            </div>
            <div className='flex flex-col  space-y-6  py-6 px-4 w-[250px] items-center' >
                <div className='relative h-56 w-44 justify-center pl-2 items-center cursor-pointer flex'>
                        <Image
                                src={s2}
                                layout='fill'
                                objectFit='contain'
                                alt='text'
                                className=''
                            />
                </div>
                <p className='text-2xl font-bold'>Easy to Order</p>
                <p className='text-lg font-medium text-gray-400'>Delivery that is always on time even faster</p>
            </div>
            <div className='flex flex-col  space-y-6  py-6 px-4 w-[250px] items-center' >
                <div className='relative h-56 w-44 justify-center pl-2 items-center cursor-pointer flex'>
                        <Image
                                src={s3}
                                layout='fill'
                                objectFit='contain'
                                alt='text'
                                className=''
                            />
                </div>
                <p className='text-2xl font-bold'>Easy to Order</p>
                <p className='text-lg font-medium text-gray-400'>Not Only fast for us, quality is also number one</p>
            </div>
        </div>
    </div>
  )
}

export default service