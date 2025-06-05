import { titleFont } from '@/app/fonts'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const HomePage = () => {
  return (
    <>
      <div className='flex flex-col items-center justify-center pt-52 h-[70vh]'>
        <div className='absolute top-1/4 right-60 h-32 w-32 bg-white/20 blur-3xl'></div>
        <h1 className={`${titleFont.className} text-6xl mb-4`}>Crypto market viewer</h1> 
        <h2 className='mb-20'>Check the <span className='underline underline-offset-4 decoration-yellow-500/80'>entire</span> crypto market in one list</h2> 
        <Link href="/crypto" className="bg-white/80 px-3 rounded py-1 text-black">Get started</Link>
      </div>
      <div className='relative flex flex-col items-center justify-center h-screen'>
        <Image src="/image.avif" alt="crypto market" className='border border-t-neutral-600 border-neutral-800/90 rounded-sm overflow-hidden z-20' width={1000} height={500} />
        <div className='absolute mx-auto h-[630px] w-[350px] bg-white/40 blur-3xl'></div>
        <h2 className='mt-5'>Preview of the tool</h2> 
      </div>
    </>
  )
}

export default HomePage