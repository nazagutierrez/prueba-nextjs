import { titleFont } from '@/app/fonts'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import HeroButton from './HeroButton'

const HomePage = () => {
  return (
    <>
      <div className='flex flex-col items-center justify-center pt-52 h-[70vh]'>
        <div className='absolute top-1/4 right-60 h-32 w-32 bg-white/10 blur-3xl'></div>
        <div className='absolute bottom-1/4 left-60 h-32 w-32 bg-white/10 blur-3xl'></div>
        <h1 className={`${titleFont.className} text-6xl mb-4`}>Crypto tracker</h1> 
        <h2 className='mb-20'>Track <span className='underline underline-offset-4 decoration-yellow-500/80'>all</span> your cryptos in one list</h2> 
        <HeroButton />
      </div>
      <div className='relative flex flex-col items-center justify-center h-screen'>
        <Image src="/image.avif" alt="crypto market" className='border border-t-yellow-500/40 border-[#2f2500] rounded-sm overflow-hidden z-20' width={1000} height={500} />
        <div className='absolute mx-auto h-[630px] w-[350px] bg-yellow-400/20 blur-3xl'></div>
        <h2 className='mt-5 text-white'>Preview of the tool</h2> 
      </div>
    </>
  )
}

export default HomePage