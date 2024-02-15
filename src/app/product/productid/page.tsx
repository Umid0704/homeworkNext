'use client'
import { useSearchParams } from 'next/navigation'
import React from 'react'

export default function page() {
  const query = useSearchParams()
  const id = query.get('id')
  return (
    <div>
      <h1>ID:{id}</h1>
    </div>
  )
}
