"use client";
import { Car } from '@/app/lib/types/types'
import React, { useState } from 'react'

type Props = {car: Car}


export default function Card({car}: Props) {

    const [isActive, SetIsActive] = useState(false);


  return (
    <div className= {`p-4 m-2 w-[15vw] border shadow-lg hover:cursor-pointer ${isActive? "bg-amber-400": "bg-gray-300"}`} onClick={()=>SetIsActive(!isActive)}>
        <h2 className='font-bold text-xl'>{car.name}</h2>
        <div>{car.type}</div>
        <div>{isActive? "active": "inactive"}</div>
    </div>
  )
}