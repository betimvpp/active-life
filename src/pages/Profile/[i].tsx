/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
import { Footer } from '@/Components/LayoutComponents/Footer';
import { Header } from '@/Components/LayoutComponents/Header';
import { useUserContext } from '@/hooks/useUserContext';
import { db } from '@/services/firebaseAuth';
import { collection, getDocs, query, where } from 'firebase/firestore';
import React, { useEffect } from 'react'


export default function Profile  ()  {
  const {user,} = useUserContext(); 
  
  async function getTreinoByUserId(userId: unknown) {
    const treinoQuery = query(collection(db, 'trainningA'), where('userId', '==', userId));
  
    const treinoSnapshot = await getDocs(treinoQuery);
  
    const treinos: any[] = [];
    treinoSnapshot.forEach((doc) => {
      treinos.push({ id: doc.id, ...doc.data() });
    });
  
    return treinos;
  }
  
  // Exemplo de uso:
  async function outraFuncao() {
    const userId = user.uid; // Substitua pelo userId desejado
    const treinos = await getTreinoByUserId(userId);
    console.log('Treinos do usuário:', treinos);
  }

  useEffect(() => {
    outraFuncao()
  }, [])
  

  return (
    <div className='w-full'>
      <Header />
        <div className='max-w-7xl m-auto h-screen'>
          <div className='p-2'>
            <h1 className='text-white text-7xl'>Your Profile</h1>

            <div className='p-10 flex max-w-5xl m-auto items-center justify-center gap-10'>
              {user?.photoURL && 
                // eslint-disable-next-line @next/next/no-img-element
              <img className='rounded-full w-40 h-40' src={user.photoURL} alt="Foto do usuário" />}

              {user?.displayName &&
                <p className='text-5xl text-orangeBase'>{user.displayName}</p>
              }
            </div>

            <div className='flex flex-col items-center justify-center w-full mt-10'>
              <h1 className='text-5xl'>Your Trainnings</h1>

              <div className=' mt-14'>bla bla bla</div>
            </div>

          </div>
        </div>
      <Footer />
    </div>
  )
}
