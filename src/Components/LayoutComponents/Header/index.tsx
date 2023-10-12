import React from 'react'
import Image from 'next/image';
import Logo from '@/assets/Logo.svg'
import Link from 'next/link';

import { UserLogged } from './UserLogged';
import { useUserContext } from '@/hooks/useUserContext';
import { Login } from './Login';
import { Register } from './Register';

export const Header = () => {
  const {user, token} = useUserContext();

  return (
    <header className="static w-screen h-24 max-w-7xl m-auto flex flex-row items-center justify-between">
        <Link href={'/'}><Image src={Logo} alt={''} /></Link>
        
        <div className='flex flex-row items-center gap-11 justify-around'>
          <div className='flex flex-row gap-4 text-base'>
            <Link href={''} className='hover:text-orangeBase duration-200'>Home</Link>
            <Link href={''} className='hover:text-orangeBase duration-200'>Program</Link>
            <Link href={''} className='hover:text-orangeBase duration-200'>Price</Link>
            <Link href={''} className='hover:text-orangeBase duration-200'>Comunity</Link>
          </div>
          
          {user ? 
          <UserLogged />
          :
          <div className='flex flex-row gap-4 text-lg'>
            <Login />
            <Register />
          </div>
          }
        </div>
      </header>
  )
}


