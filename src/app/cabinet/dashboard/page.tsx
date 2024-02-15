import Link from 'next/link'
import React from 'react'

export default function Dashboard() {
  return (
    <div>
        <h1>Dashboard</h1>
      <Link className='m-2 bg-green-600 px-4 py-1 text-white rounded-lg' href='/cabinet/dashboard/balance'> balance</Link>
    </div>
  )
}
