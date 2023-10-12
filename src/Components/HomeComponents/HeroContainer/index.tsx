import React from 'react'
import Image from 'next/image';
import Hero from '@/assets/Frame 75.svg'
import { CheckCircle } from 'phosphor-react';
import Link from 'next/link';

export const HeroContainer = () => {
  return (
    <div className='flex flex-row items-center justify-between max-w-7xl w-full m-auto p-8'>
      <Image src={Hero} alt={''} />
      <div className='flex flex-col items-center justify-center gap-6 h-full'>
        <h1 className='text-56 leading-tight'>Transform your physique with our  fitness plan.</h1>
        
        <div className=' w-full flex flex-col items-center justify-center gap-4'>
          <p className=' w-full flex flex-row text-base'>
            <CheckCircle size={26} className=' text-orangeBase mr-2'/> Increase Muscle and Strength
          </p>
          <p className=' w-full flex flex-row text-base'>
            <CheckCircle size={26} className=' text-orangeBase mr-2'/> Be Healthier than before
          </p>
          <p className=' w-full flex flex-row text-base'>
            <CheckCircle size={26} className=' text-orangeBase mr-2'/> Increase Stamina
          </p>
        </div>

        <div className='flex flex-row items-center justify-start w-full h-20 gap-1'>
          <Link href={''} className='px-7 py-2 bg-orangeBase rounded-xl font-semibold duration-200 hover:bg-white hover:text-orangeBase'>Join Now</Link>
          <Link href={''} className='px-7 py-2  hover:text-orangeBase duration-200 '>Contact Us</Link>
        </div>
      </div>
    </div>
  )
}
