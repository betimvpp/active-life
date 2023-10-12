/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
import { Footer } from '@/Components/LayoutComponents/Footer';
import { Header } from '@/Components/LayoutComponents/Header';
import { useUserContext } from '@/hooks/useUserContext';
import { db } from '@/services/firebaseAuth';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react'
import { ModelExerciseFB } from '../Parts/[i]';
import Image from 'next/image';

export default function Profile  ()  {
  const {user,} = useUserContext()
  const [treino, setTreino] = useState<any>()
  const router = useRouter();

  const {i} = router.query as any;
  
  async function getTreinoByUserId(userId: unknown) {
    const treinoQuery = query(collection(db, `trainning${i}`), where('userId', '==', userId));
  
    const treinoSnapshot = await getDocs(treinoQuery);
  
    const treinos: any[] = [];
    treinoSnapshot.forEach((doc) => {
      treinos.push({ id: doc.id, ...doc.data()});
    });
  
    return treinos;
  }
  
  // Exemplo de uso:
  async function outraFuncao() {
    const userId = user.uid; // Substitua pelo userId desejado
    const treinos = await getTreinoByUserId(userId);
    setTreino(treinos)
    console.log(treino)
  }

  useEffect(() => {
    outraFuncao()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  

  return (
    <div className='w-full'>
      <Header />
        <div className='max-w-7xl m-auto h-screen'>
          <div className='p-2 w-full'>
            <h1 className='text-white text-7xl uppercase'>Your Trainning: {i}</h1>

            <div className='w-full mt-10 grid grid-cols-4'> 
              {treino?.map((part: ModelExerciseFB)=>{
                return(
                  <div className='flex flex-col justify-between rounded m-auto w-60 h-80 bg-gradient-to-br from-orange-800 to-orange-300 mb-10' key={part.id}>
                    <div className='rounded-sm w-60 h-80 bg-gray-950 hover:scale-98 hover:rounded cursor-pointer duration-200 overflow-hidden'  key={part.id}>
                      <Image  src={part.gifUrl} alt={''} unoptimized={true} width={250} height={250}  className='rounded-t h-64'/>
                      <div className='flex flex-col items-center justify-between p-1 gap-1 overflow-hidden'>
                        <p  className=' text-xs uppercase'>{part.equipment}</p>
                        <p  className='text-sm text-center uppercase'>{part.name}</p>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>  
          </div>
        </div>
      <Footer />
    </div>
  )
}
