import Image from 'next/image'
import React from 'react'

const NewArrival = () => {
  return (
    <div className="container mx-auto p-4 my-5">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
      {/* First Section */}
      <div className="relative group overflow-hidden">
        <div className="relative h-[300px] w-full">
          <Image
            src="/images/new1.jpg"
            alt="New Arrival"
            fill
            className="object-cover transform transition-transform duration-300 group-hover:scale-110"
          />
          {/* Text Overlay */}
          <div className="absolute inset-0  flex flex-col items-start justify-center px-10">
            <h2 className="text-3xl font-bold mb-3 ">New Arrivals</h2>
            <p className="text-sm ">Check out our latest collection</p>
          </div>
        </div>
      </div>
  
      {/* Second Section */}
      <div className="relative group overflow-hidden">
        <div className="relative h-[300px] w-full">
          <Image
            src="/images/r4.jpg"
            alt="Featured"
            fill
            className="object-cover transform transition-transform duration-300 group-hover:scale-110"
          />
          {/* Text Overlay */}
          <div className="absolute inset-0 flex flex-col items-start justify-center px-10">
            <h2 className="text-3xl font-bold mb-3 ">Featured Items</h2>
            <p className="text-sm ">Discover our popular picks</p>
          </div>
        </div>
      </div>
    </div>
  </div>
  
  )
}

export default NewArrival