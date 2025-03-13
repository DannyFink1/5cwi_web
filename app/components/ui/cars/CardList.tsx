import { Car } from '@/app/lib/types/types'
import React from 'react'
import Card from './Card'

type Props = {cars: Car[]}

export default function CardList({cars}: Props) {
  return (
     <div className='flex'>
            {cars.map((car: Car)=><Card car={car}/>)}
        </div>
  )
}