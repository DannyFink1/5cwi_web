"use client";
import React, { useEffect, useState } from 'react'
import Card from './Card';

type Props = {}

export default function PersonList({}: Props) {
    const [persons, setPersons] = useState([]);

    useEffect(()=>{
        fetch("https://657b3f25394ca9e4af140d28.mockapi.io/people")
        .then(res=>res.json())
        .then(data=>setPersons(data))
    },[])
  return (
    <div className='grid grid-cols-4 lg:grid-cols-4 gap-2'>{persons.map((person: any)=><Card name={person.name} title={person.title}/>)}</div>
  )
}