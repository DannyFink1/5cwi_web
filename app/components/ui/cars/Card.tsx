import { Car } from '@/app/lib/types/types'
import React from 'react'

type Props = {car: Car}

export default function Card({car}: Props) {
  return (
    <div className='bg-fuchsia-200 p-4 border'>Card: {car.name}</div>
  )
}