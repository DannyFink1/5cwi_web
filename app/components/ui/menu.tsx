import Link from 'next/link'
import React from 'react'

type Props = {}

export default function Menu({}: Props) {
  return (
    <div>
        <ul className='flex p-4'>
            <li className='p-1 hover:bg-amber-600'>
                <Link href="/" >Main</Link>
            </li>
            <li className='p-1 hover:bg-amber-600'>
                <Link href="/cars">Cars</Link>
            </li>
            <li className='p-1 hover:bg-amber-600'>
                <Link href="/trucks" >Trucks</Link>
            </li>
        </ul>
    </div>
  )
}