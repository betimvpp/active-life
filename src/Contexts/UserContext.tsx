import { auth} from '@/services/firebaseAuth';
import { GoogleAuthProvider, User, signInWithPopup } from 'firebase/auth'
import React, { ReactNode, createContext, useEffect, useState } from 'react'
import { Navigate } from 'react-router-dom';


interface UserContextType{
  user: User;
  token: string;
  signInGoogle: ()=> void;
  signOut:()=>void;
}

export const UserContext = createContext({} as UserContextType);

interface UserContextProviderProps{
  children: ReactNode;
}

export const UserContextProvider = ({children}:UserContextProviderProps) => {
  const [user, setUser] = useState<User | any>(null); 
  const [token, setToken] = useState<string>('');

  useEffect(() => {
    const loadStorageData = () => {
      const storageUser = localStorage.getItem("@AuthFirebase:user");
      const storageToken = localStorage.getItem("@AuthFirebase:token");
      if (storageToken && storageUser) {
        setUser(JSON.parse(storageUser));
      }
    }; 

    loadStorageData();
  },[]);

  const signInGoogle = () =>{
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const newToken = credential?.accessToken as string;
        const newUser = result.user;

        setToken(newToken);
        setUser(newUser);

        localStorage.setItem("@AuthFirebase:user", JSON.stringify(newUser)),
        localStorage.setItem("@AuthFirebase:token", newToken)
    })  
  }

  function signOut(){
    localStorage.clear();
    setUser(null)
    return <Navigate to={"/"}/>
  }

  return (
    <UserContext.Provider value={{signInGoogle, signOut, user, token}}>
      {children}
    </UserContext.Provider>
  )
}
