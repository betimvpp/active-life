import Link from 'next/link'
import { CheckCircle } from 'phosphor-react'
import React from 'react'

export const Pricing = () => {
  return (
    <div className=' max-w-7xl w-full m-auto gap-8 h-650'>
      <div className='flex flex-col items-center justify-center gap-4 mb-8'>
        <p className='text-orangeBase text-lg'>Pricing</p>
        <h1 className=' font-bold text-5xl'>Our List Packages</h1>
      </div>

      <div className='flex flex-row items-center justify-center gap-4 w-full max-w-7xl m-auto '>
        <div className='bg-gray-950 p-6 rounded-xl cursor-pointer hover:scale-125 hover:m-6 hover:bg-orangeBase duration-200 group'>
          <p className='text-xl text-orangeBase group-hover:text-white'>Basic Package</p>
          <div className='flex flex-row items-center mb-4'>
            <h1 className='font-semibold text-56'>$25</h1>
            <p className='text-gray-500 group-hover:text-white'>/month</p>
          </div>
          <div className='flex flex-col gap-1 mb-8'>
            <p className='flex text-base'><CheckCircle size={26} className=' text-white mr-2'/>Unlimited Gym Access</p>
            <p className='flex text-base'><CheckCircle size={26} className=' text-white mr-2'/>2x Fitness Consultant</p>
            <p className='flex text-base'><CheckCircle size={26} className=' text-white mr-2'/>Nutrition Tracking</p>
            <p className='flex text-base'><CheckCircle size={26} className=' text-white mr-2'/>1x Free Suplement</p>
            <p className='flex text-base'><CheckCircle size={26} className=' text-white mr-2'/>3 Days per Week</p>
            <p className='flex text-base'><CheckCircle size={26} className=' text-white mr-2'/>Personal Trainer</p>
          </div>
          <div className=' flex items-center justify-center'>
            <Link href={''} className='px-7 py-2 bg-orangeBase rounded-xl font-semibold duration-200 group-hover:bg-gray-900 group-hover:text-white hover:bg-gray-900'>Register Now</Link>
          </div>
        </div>

        <div className='bg-gray-950 p-6 rounded-xl cursor-pointer hover:scale-125 hover:m-6 hover:bg-orangeBase duration-200 group'>
          <p className='text-xl text-orangeBase group-hover:text-white'>Basic Package</p>
          <div className='flex flex-row items-center mb-4'>
            <h1 className='font-semibold text-56'>$55</h1>
            <p className='text-gray-500 group-hover:text-white'>/month</p>
          </div>
          <div className='flex flex-col gap-1 mb-8'>
            <p className='flex text-base'><CheckCircle size={26} className=' text-white mr-2'/>Unlimited Gym Access</p>
            <p className='flex text-base'><CheckCircle size={26} className=' text-white mr-2'/>4x Fitness Consultant</p>
            <p className='flex text-base'><CheckCircle size={26} className=' text-white mr-2'/>Nutrition Tracking</p>
            <p className='flex text-base'><CheckCircle size={26} className=' text-white mr-2'/>3x Free Suplement</p>
            <p className='flex text-base'><CheckCircle size={26} className=' text-white mr-2'/>5 Days Per Week</p>
            <p className='flex text-base'><CheckCircle size={26} className=' text-white mr-2'/>Personal Trainer</p>
          </div>
          <div className=' flex items-center justify-center'>
            <Link href={''} className='px-7 py-2 bg-orangeBase rounded-xl font-semibold duration-200 group-hover:bg-gray-900 group-hover:text-white hover:bg-gray-900'>Register Now</Link>
          </div>
          
        </div>

        <div className='bg-gray-950 p-6 rounded-xl cursor-pointer hover:scale-125 hover:m-6  hover:bg-orangeBase duration-200 group'>
          <p className='text-xl text-orangeBase group-hover:text-white'>Basic Package</p>
          <div className='flex flex-row items-center mb-4'>
            <h1 className='font-semibold text-56'>$75</h1>
            <p className='text-gray-500 group-hover:text-white'>/month</p>
          </div>
          <div className='flex flex-col gap-1 mb-8'>
            <p className='flex text-base'><CheckCircle size={26} className=' text-white mr-2'/>Unlimited Gym Access</p>
            <p className='flex text-base'><CheckCircle size={26} className=' text-white mr-2'/>7x Fitness Consultant</p>
            <p className='flex text-base'><CheckCircle size={26} className=' text-white mr-2'/>Nutrition Tracking</p>
            <p className='flex text-base'><CheckCircle size={26} className=' text-white mr-2'/>5x Free Suplement</p>
            <p className='flex text-base'><CheckCircle size={26} className=' text-white mr-2'/>Gym Card</p>
            <p className='flex text-base'><CheckCircle size={26} className=' text-white mr-2'/>Personal Trainer</p>
          </div>
          <div className=' flex items-center justify-center'>
            <Link href={''} className='px-7 py-2 bg-orangeBase rounded-xl font-semibold duration-200 group-hover:bg-gray-900 group-hover:text-white hover:bg-gray-900'>Register Now</Link>
          </div>   
        </div>

        <div className='bg-gray-950 p-6 rounded-xl cursor-pointer hover:scale-125 hover:m-6 hover:bg-orangeBase hover:duration-500 group'>
          <p className='text-xl text-orangeBase group-hover:text-white'>Basic Package</p>
          <div className='flex flex-row items-center mb-4'>
            <h1 className='font-semibold text-56'>$105</h1>
            <p className='text-gray-500 group-hover:text-white'>/month</p>
          </div>
          <div className='flex flex-col gap-1 mb-8'>
            <p className='flex text-base'><CheckCircle size={26} className=' text-white mr-2'/>Unlimited Gym Access</p>
            <p className='flex text-base'><CheckCircle size={26} className=' text-white mr-2'/>Free Fitness Consultant</p>
            <p className='flex text-base'><CheckCircle size={26} className=' text-white mr-2'/>All Training Program</p>
            <p className='flex text-base'><CheckCircle size={26} className=' text-white mr-2'/>Free Suplement</p>
            <p className='flex text-base'><CheckCircle size={26} className=' text-white mr-2'/>Free Clothes</p>
            <p className='flex text-base'><CheckCircle size={26} className=' text-white mr-2'/>Gym Card</p>
          </div>
          <div className=' flex items-center justify-center'>
            <Link href={''} className='px-7 py-2 bg-orangeBase rounded-xl font-semibold duration-200 group-hover:bg-gray-900 group-hover:text-white hover:bg-gray-900'>Register Now</Link>
          </div> 
        </div>
      </div>
    </div>
  )
}
