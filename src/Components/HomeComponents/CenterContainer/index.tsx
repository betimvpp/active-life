import React from 'react'
import Image from 'next/image';

import background from '@/assets/Container.svg'
import diadora from '@/assets/diadora 1.svg'
import nike from '@/assets/Logo_NIKE 1.svg'
import adidas from '@/assets/layer1.svg'
import under from '@/assets/Group.svg'

import Link from "next/link";
import { PlayCircle } from "phosphor-react";

export const CenterContainer = () => {
  return (
    <section className="h-814 object-right grid grid-rows-1 m-auto max-w-7xl overflow-x-hidden">
        <div className=" w-full max-w-lg flex items-center justify-between flex-col gap-3 h-814 sticky">
          <div className="overflow-hidden">
            <div className="mb-3">
              <h1 className="text-7xl">Helps for your ideal body fitness</h1>
            </div>

            <div className="flex flex-col gap-8 overflow-hidden">
              <p >Motivate users with benefits and positive reinforcement, and offer modifications and progress tracking.</p>
              <div className="flex flex-row gap-6">
                <Link href={''} className='px-7 py-2 bg-orangeBase rounded-xl text-lg leading-10 cursor-pointer font-semibold duration-200 hover:bg-white hover:text-orangeBase'>Start Training</Link>
                <button className="flex flex-row items-center justify-center gap-3 hover:text-orangeBase duration-200">
                  <PlayCircle size={44} className="text-orangeBase "/> 
                  Watch Demo
                </button>
              </div>
            </div>
          </div>

          <div className="flex flex-col w-full mb-16 gap-6 font-semibold text-xl">
            <p>Trusted By</p>
            <div className="flex flex-row gap-6">
              <Image src={adidas} alt={""} />
              <Image src={under} alt={""} />
              <Image src={nike} alt={""} />
              <Image src={diadora} alt={""} />
            </div>
          </div>
        </div>
        <Image className="m-auto " src={background} alt={""} priority={true}/>
      </section>
  )
}
