import React, { useState } from 'react'
import { useRouter } from 'next/router';
import Image from 'next/image';
import { useQuery } from '@tanstack/react-query';
import { api } from '@/services/api';
import { Header } from '@/Components/LayoutComponents/Header';
import { Footer } from '@/Components/LayoutComponents/Footer';
import * as Dialog  from '@radix-ui/react-dialog';
import { X } from 'phosphor-react';
import { addDoc, collection, doc, setDoc, updateDoc } from 'firebase/firestore';
import { db } from '@/services/firebaseAuth';
import { useUserContext } from '@/hooks/useUserContext';
import { SubmitHandler, useForm } from 'react-hook-form'
import { Separator } from '@radix-ui/react-dropdown-menu';

export interface ModelExerciseFB{
  bodyPart: string,
  equipment: string,
  gifUrl: string,
  id: string,
  name: string,
  target: string,
  trainningCard: string,
  userId: string,
  reps: string,
  series: string ,
  documentId: string
}

export default function Part () {
  const [newBodyPart, setNewBodyPart] = useState('');
  const [newEquipment, setNewEquipment] = useState('');
  const [newGifUrl, setNewGifUrl] = useState('');
  const [newId, setNewId] = useState('');
  const [newName, setNewName] = useState('');
  const [newTarget, setNewTarget] = useState('');
  const [isCreated, setIsCreated] = useState(false)
  const {user} = useUserContext();

  const{
    register,
    handleSubmit
  } = useForm<ModelExerciseFB>()

  const router = useRouter();

  const {i} = router.query as any;

  const {data:execise} = useQuery<ModelExerciseFB[]>({
    queryKey: [`/bodyPart/${i}`],
    queryFn: async()=>{
       const response = await api.get(`/bodyPart/${i}`,
      )
      const newResponse = response.data;
      for(let j=0; j< newResponse.length; j++){
        setNewBodyPart(newResponse[j]?.bodyPart)
        setNewEquipment(newResponse[j].equipment)
        setNewGifUrl(newResponse[j].gifUrl)
        setNewId(newResponse[j].id)
        setNewName(newResponse[j].name)
        setNewTarget(newResponse[j].target)
      }
      return response.data     
  },
    refetchOnWindowFocus: false,
    refetchInterval: 1000 * 60 * 60 *24, 
    staleTime: 1000 * 60 * 60 *24
  })

  const onSubmit: SubmitHandler<ModelExerciseFB> = async (data) => {
    const docRef = await addDoc(collection(db, `trainning${data.trainningCard}`),{
      bodyPart: "",
      equipment: "",
      gifUrl: "",
      id: "",
      name: "",
      target: "",
      trainningCard: data.trainningCard,
      userId: "",
      reps: data.reps,
      series: data.series,
      documentId: ""
    })
    
    const newDocRef = doc(db, `trainning${data.trainningCard}`, docRef.id);

    await updateDoc(newDocRef,{
      bodyPart: i,
      equipment: newEquipment,
      gifUrl: newGifUrl,
      id: newId,
      name: newName,
      target: newTarget,

      trainningCard: data.trainningCard,
      userId: user.uid,
      reps: data.reps,
      series: data.series,
      documentId: docRef.id
    })
    setIsCreated(true)
  }
  
  return (
    <>
      <Header />
      <div className='max-w-7xl m-auto h-full grid grid-cols-4'> 
        {execise?.map((part: ModelExerciseFB)=>(
          <div key={part.id} className='max-w-7xl flex flex-col justify-between rounded m-auto w-60 h-80 bg-gradient-to-br from-orange-800 to-orange-300 mb-10'>
            <Dialog.Root>
              <Dialog.Trigger asChild>                
                <div className='rounded-sm w-60 h-80 bg-gray-950 hover:scale-98 hover:rounded cursor-pointer duration-200 overflow-hidden' >
                  <Image  src={part.gifUrl} alt={''} unoptimized={true} width={250} height={250}  className='rounded-t h-64'/>
                  <div className='flex flex-col items-center justify-between p-1 gap-1 overflow-hidden'>
                    <p  className=' text-xs uppercase'>{part.equipment}</p>
                    <p  className='text-sm text-center uppercase'>{part.name}</p>
                  </div>
                </div>
              </Dialog.Trigger>

              <Dialog.Portal>
                <Dialog.Overlay className='bg-gray-950 opacity-95 data-[state=open]:animate-overlayShow fixed inset-0' />
                  <Dialog.Content className='data-[state=open]:animate-contentShow fixed top-[50%] left-[50%] max-h-[85vh] w-[90vw] max-w-[450px] translate-x-[-50%] translate-y-[-50%] rounded-[6px] bg-gray-950 p-[25px] shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] focus:outline-none'>
                    <Dialog.Title className="text-orangeBase m-0 text-[17px] uppercase font-medium text-center">
                      {part.name}
                    </Dialog.Title>
                      <div className='mt-4'>
                        <Image src={part.gifUrl} alt={''} unoptimized={true} width={500} height={500} />
                      </div>

                      <form onSubmit={handleSubmit(onSubmit)} className=' p-2 divide-y-2 divide-orangeBase'>
                          <div className='flex items-center justify-between my-2 p-2'>
                            <p>How much series you did?</p>
                            <input {...register("series")} className='w-20 text-black outline-none pl-2' type="number" id='series' name='series' placeholder='3' minLength={1} maxLength={2} required/>
                          </div>

                          <div className='flex items-center justify-between my-2 p-2'>
                            <p>How much reps you did?</p>
                            <input {...register("reps")}  className='w-20 text-black outline-none pl-2' type="number" id='reps' name='reps' placeholder='12' minLength={1} maxLength={2} required/>
                          </div> 

                          <div className='flex items-center justify-between my-2 p-2'>
                            <p>Which card do you want to add the exercise?</p>
                            <div className='flex gap-1'>
                              A
                              <input {...register("trainningCard")} type="radio" value={'a'}/>
                              B
                              <input {...register("trainningCard")} type="radio" value={'b'}/>
                              C
                              <input {...register("trainningCard")} type="radio" value={'c'}/>
                              D
                              <input {...register("trainningCard")} type="radio" value={'d'}/>
                            </div>
                          </div> 
                          <div className='flex items-center justify-between mt-2 p-1'>
                            <p>Add to your training</p>
                            <button 
                              className='flex items-center justify-center gap-1 px-7 py-2 bg-orangeBase rounded-xl font-semibold duration-200 hover:bg-white hover:text-orangeBase'>Add</button>
                          </div>
                      </form>
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
            
          </div>
        ))}
      </div>
      
      <Footer />
    </>
  )
}
