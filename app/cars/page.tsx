import React from 'react'
import Card from '../components/ui/cars/Card'
import { Car, Motor } from '../lib/types/types'

type Props = {}

const motor: Motor = {
    horsepower: 700,
    serialNumber: 3545653
}

const car: Car = {
    name: "Subaru",
    type: "Fast",
    color: "Green",
    motor: motor
}

export default function Cars({}: Props) {
  return (
    <div>
        <Card car={car}/>



    </div>
  )
}