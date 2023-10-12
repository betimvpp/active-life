import { Copyright, FacebookLogo, InstagramLogo, TwitterLogo } from 'phosphor-react'
import React from 'react'
import Logo from '@/assets/Logo.svg'
import Image from 'next/image';
import Link from 'next/link';

export const Footer = () => {
  return (
    <div className='bottom-0 static mt-6 border-t-2 border-orangeBase'>
      <div className='max-w-7xl m-auto py-6 flex flex-row items-center justify-between '>
        <div className='flex flex-col gap-4 max-w-240'>
          <div className='flex flex-row items-center justify-start gap-2'>
          <Link href={''}><Image src={Logo} alt={''} /></Link>
          <p className='text-xl text-white'>Active Life</p>
          </div>
          <p className='text-white text-base leading-5'>Highlight benefits of each exercise, both physical and mental</p>
        </div>

        <div className='flex flex-row gap-10 '>
          <div>
            <p className='text-xl text-white pb-2 font-bold'>Sitemap</p>
            <div className='gap-1 flex flex-col'>
              <Link href={''}>About us</Link>
              <Link href={''}>Promos</Link>
              <Link href={''}>News & Blog</Link>
              <Link href={''}>Help Center</Link>
            </div>
          </div>

          <div>
            <p className='text-xl text-white pb-2 font-bold'>Support</p>
            <div className='gap-1 flex flex-col'>
              <Link href={''}>FAQ </Link>
              <Link href={''}>Support Center</Link>
            </div>
          </div>

          <div>
            <p className='text-xl text-white pb-2 font-bold'>Social Media</p>
            <div className='flex flex-row items-center justify-around'>
              <Link href={''}><InstagramLogo size={24} /></Link>
              <Link href={''}><TwitterLogo size={24}/></Link>
              <Link href={''}> <FacebookLogo size={24}/></Link>
            </div>
          </div>
        </div>
      </div>

      <div className=''>
        <div className='max-w-7xl m-auto py-6 flex flex-row items-center justify-between'>
          <div className='flex flex-row items-center justify-center gap-2'>
            <Copyright size={14} className='text-gray-300'/>
            <p className='text-xs text-gray-300'>all rights reserved to ACTIVE LIFE co</p>
          </div>
          
          <div className='flex flex-row items-center justify-center gap-2'>
            <p className='text-xs text-gray-300'>Terms of use</p>
            <p className='text-xs text-gray-300'>Private Policy</p>
          </div>
        </div>
        
      </div>
    </div>
  )
}

