import React from 'react'
import PersonList from '../components/ui/persons/PersonList'

type Props = {}

export default function page({}: Props) {
  return (
    <div >
        <div>Header</div>
        <PersonList/>  
    </div>  
)
}