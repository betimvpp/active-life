"use client"

import Link from "next/link";

import { useKeenSlider } from 'keen-slider/react'
import 'keen-slider/keen-slider.min.css'

import { useQuery } from "@tanstack/react-query";

import { api } from "@/services/api";

type AllBodyParts = {
  id: string;
  i: number;
}

export default function AllBodyParts() {
  const {data} = useQuery<AllBodyParts[]>({
    queryKey: ['allBodyPart'],
    queryFn: async()=>{
       const response = await api.get('/bodyPartList',
      )
      return response.data
  },
    refetchOnWindowFocus: false,
    refetchInterval: 1000 * 60 * 60 *24, 
    staleTime: 1000 * 60 * 60 *24
})

  const [sliderRef] = useKeenSlider({
    slides:{
      perView:5
    },
  })

  return (
    <div className="flex flex-col justify-center  gap-8 max-w-7xl w-full m-auto"> 
    <h1 className="text-6xl to uppercase">Select your exercise by Body Part</h1>
    <div className="w-full bg-orangeBase h-1"></div>
    <div ref={sliderRef} className="keen-slider gap-10 w-full flex max-w-7xl m-auto h-52 pb-4 overflow-hidden">
      {data?.map((bodyPart, i)=>(
        <div className="keen-slider__slide bg-gray-950 group duration-200 hover:bg-orangeBase group rounded-md flex flex-col items-center justify-start h-full px-4 overflow-hidden min-w-250"  key={`${data[i]}`}>  
          <Link  href={`/Parts/${data[i]}`} >
            <h1 className="group text-orangeBase group-hover:text-white p-2 w-full text-xl font-bold uppercase">{`${data[i]}`}</h1>
            <p className="group text-white">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut venenatis, nunc a pretium viverra.</p>
          </Link>
        </div>
      ))}
    </div>
      
    </div>
  )
}

