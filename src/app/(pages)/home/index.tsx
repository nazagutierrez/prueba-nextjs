import Link from 'next/link'
import React from 'react'

const HomePage = () => {
  return (
    <div className='flex flex-col items-center justify-center h-screen'>
      <h1 className='text-5xl mb-4'>Cypto market viewer</h1>
      <h2 className='mb-20'>Check the entire crypto market in one site</h2> 
      <div className='flex gap-4'>
        <Link href="/auth" className="bg-white px-2 rounded py-0.5 text-black">Login</Link>
        <Link href="/crypto" className="bg-white px-2 rounded py-0.5 text-black">Get started</Link>
      </div>
    </div>
  )
}

export default HomePage