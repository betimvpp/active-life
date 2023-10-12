import { useUserContext } from '@/hooks/useUserContext'
import * as DropdownMenu from '@radix-ui/react-dropdown-menu'
import Link from 'next/link';
import { Gauge, Money, UserList } from 'phosphor-react';
import React from 'react'

export const UserLogged = () => {
 const {user, signOut} = useUserContext(); 
  return (
    <div className=''>
    <DropdownMenu.Root>
      <DropdownMenu.Trigger>
        <button aria-label="Customise options" className=' flex items-center justify-center gap-2'>
          {user?.photoURL && 
          // eslint-disable-next-line @next/next/no-img-element
          <img className='rounded-full w-8 h-8' src={user.photoURL} alt="Foto do usuário" />}
          <p>Hello, {user.displayName}!</p>
        </button>
      </DropdownMenu.Trigger>
      <DropdownMenu.Portal>
        <DropdownMenu.Content
          className="min-w-[220px] divide-y bg-gray-900 rounded-md p-[5px] shadow-[0px_10px_38px_-10px_rgba(22,_23,_24,_0.35),_0px_10px_20px_-15px_rgba(22,_23,_24,_0.2)] will-change-[opacity,transform] data-[side=top]:animate-slideDownAndFade data-[side=right]:animate-slideLeftAndFade data-[side=bottom]:animate-slideUpAndFade data-[side=left]:animate-slideRightAndFade"
          sideOffset={5}
        >
          <DropdownMenu.Item className="group text-[13px] mb-2 leading-none text-violet11 rounded-[3px] flex items-center justify-center h-[25px] px-[5px] relative select-none outline-none data-[disabled]:text-mauve data-[disabled]:pointer-events-none data-[highlighted]:bg-violet900 data-[highlighted]:text-violet-100">
             <Link className='text-white group-hover:text-orangeBase w-full text-base font-semibold text-start flex items-center justify-start gap-2' href={`/Profile/${user?.displayName}`}><UserList size={18} /> Your Profile</Link>
          </DropdownMenu.Item>
          <DropdownMenu.Item className="group text-[13px] my-2 pt-2 leading-none text-violet11 rounded-[3px] flex items-center justify-center h-[25px] px-[5px] relative select-none outline-none data-[disabled]:text-mauve data-[disabled]:pointer-events-none data-[highlighted]:bg-violet900 data-[highlighted]:text-violet-100">
             <button className='text-white group-hover:text-orangeBase w-full text-base font-semibold text-start flex items-center justify-start gap-2'><Gauge size={18} /> Dashboard</button>
          </DropdownMenu.Item>
          <DropdownMenu.Item className="group text-[13px] my-2 pt-2 leading-none text-violet11 rounded-[3px] flex items-center justify-center h-[25px] px-[5px] relative select-none outline-none data-[disabled]:text-mauve data-[disabled]:pointer-events-none data-[highlighted]:bg-violet900 data-[highlighted]:text-violet-100">
             <button className='text-white group-hover:text-orangeBase w-full text-base font-semibold text-start flex items-center justify-start gap-2'><Money size={18} /> Your Plan</button>
          </DropdownMenu.Item>
          <DropdownMenu.Item className="group text-[13px] my-2 pt-2 leading-none text-violet11 rounded-[3px] flex items-center justify-center h-[25px] px-[5px] relative select-none outline-none data-[disabled]:text-mauve data-[disabled]:pointer-events-none data-[highlighted]:bg-violet900 data-[highlighted]:text-violet-100">
              <button className='text-orangeBase group-hover:text-white w-full text-lg font-bold divide-y' onClick={signOut}>Logout</button>
          </DropdownMenu.Item>
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>             
  </div>
  )
}
