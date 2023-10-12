/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
import { Footer } from '@/Components/LayoutComponents/Footer';
import { Header } from '@/Components/LayoutComponents/Header';
import { useUserContext } from '@/hooks/useUserContext';
import { db } from '@/services/firebaseAuth';
import { collection, getDocs, query, where } from 'firebase/firestore';
import Link from 'next/link';
import React, { useEffect, useState } from 'react'

export default function Profile  ()  {
  const {user,} = useUserContext()

  return (
    <div className='w-full'>
      <Header />
        <div className='max-w-7xl m-auto h-screen '>
          <div className='p-2 w-full '>
            <h1 className='text-white text-7xl'>Your Profile</h1>

            <div className='p-10 flex max-w-7xl m-auto items-center justify-center gap-10'>
              {user?.photoURL && 
                // eslint-disable-next-line @next/next/no-img-element
              <img className='rounded-full w-40 h-40' src={user.photoURL} alt="Foto do usuário" />}

              {user?.displayName &&
                <p className='text-5xl text-orangeBase'>{user.displayName}</p>
              }
            </div>

            <div className='flex flex-col items-center justify-center w-full mt-10'>
              <h1 className='text-5xl'>Your Trainnings</h1>

              <div className='mt-14 gap-8 w-full grid grid-cols-4'>
                <Link className='h-96  bg-gradient-to-br from-orange-800 to-orange-300 rounded-md' href={`/trainning/a`}>
                  <div className='h-96  bg-gray-950 rounded-md hover:scale-98 items-center justify-center flex flex-col'>
                    <h2 className='text-2xl'>Card</h2>
                    <h1 className='text-4xl'>A</h1>
                  </div>
                </Link>
                <Link className='h-96  bg-gradient-to-br from-orange-800 to-orange-300 rounded-md' href={`/trainning/b`}>
                  <div className='h-96  bg-gray-950 rounded-md hover:scale-98 items-center justify-center flex flex-col'>
                    <h2 className='text-2xl'>Card</h2>
                    <h1 className='text-4xl'>B</h1>
                  </div>
                </Link>
                <Link className='h-96  bg-gradient-to-br from-orange-800 to-orange-300 rounded-md' href={`/trainning/c`}>
                  <div className='h-96  bg-gray-950 rounded-md hover:scale-98 items-center justify-center flex flex-col'>
                    <h2 className='text-2xl'>Card</h2>
                    <h1 className='text-4xl'>C</h1>
                  </div>
                </Link>
                <Link className='h-96  bg-gradient-to-br from-orange-800 to-orange-300 rounded-md' href={`/trainning/d`}>
                  <div className='h-96  bg-gray-950 duration-200 rounded-md hover:scale-98 items-center justify-center flex flex-col'>
                    <h2 className='text-2xl'>Card</h2>
                    <h1 className='text-4xl'>D</h1>
                  </div>
                </Link>
              </div>
            </div>

          </div>
        </div>
      <Footer />
    </div>
  )
}
