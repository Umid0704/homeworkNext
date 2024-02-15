import Link from 'next/link'
import React from 'react'

export default function Cabinet() {
  return (
    <div>
      <h1>Cabinet</h1>
      <Link className='m-2 bg-green-600 px-4 py-1 text-white rounded-lg' href='/cabinet/dashboard'>dashboard</Link>
      <Link className='m-2 bg-green-600 px-4 py-1 text-white rounded-lg' href='/cabinet/settings'>settings</Link>
    </div>
  )
}
