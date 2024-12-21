import React from 'react'
import Link from 'next/link'
import { Button } from './ui/button'
const BannerDesign = () => {
  return (
    <div className="relative h-[400px] w-full my-9">
    <div 
      className="absolute inset-0 bg-[url('/images/banner.jpg')] bg-cover bg-center bg-no-repeat"
    />
    
    <div className="absolute inset-0" />
    
    <div className="relative h-[400px] w-full flex flex-col items-center justify-center  sm:pl-10 md:pl-16">
    <p className="text-sm md:text-base tracking-widest font-semibold uppercase mb-2 text-blue-400">
      Winter Essentials
    </p>
    <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-2 ">
      Winter
    </h1>
    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6  ">
      Collection 2024
    </h2>
    <Link href="/collection/Women">
    <Button className="whitespace-nowrap border-none rounded-full text-sm focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 shadow relative inline-flex h-11 items-center justify-center  border border-slate-800 bg-blue-600 px-6 font-medium text-white transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 hover:bg-blue-700 overflow-hidden"
    
    >
      <span className="relative z-10 flex flex-row items-center">Shop Collection </span>
      <span className="absolute inset-0 z-0 animate-shimmer bg-[linear-gradient(110deg,rgba(255,255,255,0.1),45%,rgba(255,255,255,0.3),55%,rgba(255,255,255,0.1))] bg-[length:200%_100%]"></span>
      </Button>
    </Link>
  </div>
  </div>
  
  
  
  
  )
}

export default BannerDesign