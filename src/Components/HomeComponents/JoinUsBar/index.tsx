import Link from 'next/link'
import React from 'react'

export const JoinUsBar = () => {
  return (
    <div className='max-w-7xl mx-auto my-10 flex flex-row items-center justify-between bg-gray-950 rounded-xl p-10 gap-x-10'>
      <p className='text-3xl'>Enhance user experience with healthy nutrition tips, support resources, and social elements.</p>
      <Link href={''} className='px-7 py-2 bg-orangeBase rounded-xl font-semibold duration-200 hover:bg-white hover:text-orangeBase whitespace-nowrap'>Join Us</Link>
    </div>
  )
}
