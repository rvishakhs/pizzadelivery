import Image from 'next/image'
import React from 'react'
import icon from "../public/favicon.png"
import { SocialIcon } from 'react-social-icons';

type Props = {}

export default function Footer({}: Props) {
  return (
    <div className=' shadow-lg '
    >
        <div className='flex flex-col items-center justify-center p-2 font-medium'>
            <p className='text-sm '>
                © 2022 Petite Pizza Co (UK) Ltd. All rights reserved.
            </p>
            <div className='flex items-center gap-3'>    
                <div className='relative flex h-24 w-24 cursor-pointer '>
                    <Image
                        src={icon}
                        layout='fill'
                        objectFit='contain'
                        alt='text'
                        className='pt-2'
                    />
                </div>
                    <SocialIcon bgColor="#f76060" style={{ height: 40, width: 40 }} url="https://github.com/rvishakhs" />
                    <SocialIcon bgColor="#f76060" style={{ height: 40, width: 40 }} url="https://www.linkedin.com/in/visakh-sr-6766b4142/" />
                    <SocialIcon bgColor="#f76060" style={{ height: 40, width: 40 }} url="https://www.facebook.com/rvishakhs/" />
                    <SocialIcon bgColor="#f76060" style={{ height: 40, width: 40 }} url="https://www.instagram.com/visakhsr1996/" />
            </div>
        </div>
    </div>
  )
}