import Link from 'next/link'
import React from 'react'

export default function Product() {
  return (
    <div>
      <h1>Product</h1>
      <Link className='m-2 bg-green-600 px-4 py-1 text-white rounded-lg' href={{pathname:'/product/productid', query:{id:1}}} >Product Id</Link>
    </div>
  )
}
