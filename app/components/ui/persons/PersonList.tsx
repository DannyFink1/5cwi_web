"use client";
import React, { useEffect, useState } from 'react'
import Card from './Card';

type Props = {}

export default function PersonList({}: Props) {
    const [persons, setPersons] = useState([]);
    const [showFiltered, setShowFiltered] = useState(false);

    useEffect(()=>{
        fetch("https://657b3f25394ca9e4af140d28.mockapi.io/people")
        .then(res=>res.json())
        .then(data=>setPersons(data))
    },[])

    const displayedPersons = showFiltered ? persons.slice(0, 3) : persons;

    return (
        <div>
            <button 
                onClick={() => setShowFiltered(!showFiltered)}
                className={`p-4 m-2 border shadow-lg hover:cursor-pointer ${showFiltered ? "bg-amber-400" : "bg-gray-300"}`}
            >
                <span className='font-bold text-xl'>{showFiltered ? 'Show All' : 'Show First 3'}</span>
            </button>
            <div className='grid grid-cols-4 lg:grid-cols-4 gap-2'>
                {displayedPersons.map((person: any) => (
                    <Card key={person.id} name={person.name} title={person.title}/>
                ))}
            </div>
        </div>
    )
}