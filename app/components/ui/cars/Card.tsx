import { Car } from '@/app/lib/types/types'
import React from 'react'

type Props = {car: Car}

export default function Card({car}: Props) {
  return (
    <div className='bg-blue-900 p-4 m-2 border'>Card: {car.name}</div>
  )
}