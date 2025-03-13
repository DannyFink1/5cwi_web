import React from 'react'
import Card from '../components/ui/cars/Card'
import { Car, Motor } from '../lib/types/types'
import CardList from '../components/ui/cars/CardList'

type Props = {}

const motor: Motor = {
    horsepower: 700,
    serialNumber: 3545653
}

const cars: Car[] = [
    {
        name: "Subaru",
        type: "Fast",
        color: "Green",
        motor: motor
    },
    {
        name: "Klaas",
        type: "Slow",
        color: "Blueberry",
        motor: motor
    },
    {
        name: "Baumgartner",
        type: "Sieben",
        color: "Braun",
        motor: motor
    },
    {
        name: "Ferrari",
        type: "Superfast",
        color: "Red",
        motor: motor
    },

]

export default function Cars({}: Props) {
  return (
    <CardList cars={cars}/>
  )
}