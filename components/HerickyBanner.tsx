import Link from 'next/link'
import React from 'react'

const HerickyBanner = ({heading,breadcrumb}:{heading:string,breadcrumb:string}) => {
  return (
    <div className="relative h-[250px] overflow-hidden bg-[url('/images/hbanner.png')] bg-cover bg-[50%] bg-no-repeat">
    <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full">
      <div className="flex h-full items-center justify-center">
        <div className="px-6 text-center text-white md:px-12">
          <h1 className="mb-4 text-5xl font-bold">{heading}</h1>
          <nav className="text-sm font-medium">
            <ul className="inline-flex space-x-2 text-neutral-50">
              <li><Link href="/" className="hover:underline">Home</Link></li>
              <li>/</li>
              <li><span>{breadcrumb}</span></li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  </div>
  
  
  
  )
}

export default HerickyBanner