import Link from 'next/link'
import React from 'react'

export default function page() {
  return (
    <div>
     <h1>Home page</h1>
     <Link className='m-2 bg-green-600 px-4 py-1 text-white rounded-lg' href='/product'>product</Link>
     <Link className='m-2 bg-green-600 px-4 py-1 text-white rounded-lg' href='/cabinet'>cabinet</Link>
    </div>
  )
}
