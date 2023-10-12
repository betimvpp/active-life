import { useUserContext } from '@/hooks/useUserContext'
import * as Dialog  from '@radix-ui/react-dialog'
import { GoogleLogo, X } from 'phosphor-react'
import React from 'react'
import LoginPhoto from '@/assets/Logo.svg'
import Image from 'next/image';

export const Register = () => {
  const {signInGoogle} = useUserContext();
  return (
    <Dialog.Root>
              <Dialog.Trigger asChild>
                <button className="px-7 py-2 bg-orangeBase rounded-xl font-semibold duration-200 hover:bg-white hover:text-orangeBase">
                  Register
                </button>
              </Dialog.Trigger>
              <Dialog.Portal>
                <Dialog.Overlay className="opacity-90 bg-black data-[state=open]:animate-overlayShow fixed inset-0" />
                <Dialog.Content className="data-[state=open]:animate-contentShow fixed top-[50%] left-[50%] max-h-[85vh] w-[90vw] max-w-[450px] translate-x-[-50%] translate-y-[-50%] rounded-[6px] bg-gray-950 p-[25px] shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] focus:outline-none">
                <Dialog.Title className="text-orangeBase m-0 text-[17px] font-medium">
                    Create your account
                  </Dialog.Title>
                  <div className='flex items-center justify-between w-full gap-8 mt-8 h-full'>
                    <div>
                      <Image src={LoginPhoto} alt={''} width={400} height={400}/>
                    </div>
                    <div className='h-full'>
                    <Dialog.Description className="text-orangeBase mt-[10px] mb-5 text-[15px] leading-normal flex items-center justify-start h-full">
                      Create your account with Google
                    </Dialog.Description>
                    <div className='mt-[25px] flex flex-col justify-center text-center gap-6'>
                      <button onClick={signInGoogle} className='flex items-center justify-center  m-auto gap-1 px-7 py-2 bg-orangeBase rounded-xl font-semibold duration-200 hover:bg-white hover:text-orangeBase'>
                        <GoogleLogo size={32} className='font-bold'/>
                        <p>Authenticate with google</p>   
                      </button>
                    </div>
                    </div>
                  </div>   
                  <Dialog.Close asChild>
                    <button
                      className=" absolute top-[10px] right-[10px] inline-flex h-[25px] w-[25px] appearance-none items-center justify-center rounded-full focus:shadow-[0_0_0_2px] focus:outline-none"
                      aria-label="Close"
                    >
                      <X size={24} className='text-orangeBase'/>
                    </button>
                  </Dialog.Close>
                </Dialog.Content>
              </Dialog.Portal>
            </Dialog.Root>
  )
}
