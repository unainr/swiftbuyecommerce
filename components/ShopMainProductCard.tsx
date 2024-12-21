import Link from 'next/link';
import React from 'react'
import { Button } from './ui/button';
import { Eye, Tag } from 'lucide-react';
import Image from 'next/image';
import AddToBag from './AddToBag';
const ShopMainProductCard = ({ product }: { product: any }) => {
	const { _id, name, description, price, images , CategoryName } = product;

  return (
    <div className="mx-auto mt-4 w-full max-w-[300px] rounded-2xl overflow-hidden  hover:translate-y-[-8px] transition-all duration-300 flex flex-col h-full group border ">
    {/* Image Container with Category Tag */}
    <div className="relative aspect-square w-full h-4/5 overflow-hidden">
      <div className="absolute top-3 left-3 z-10">
        <span className="inline-flex items-center gap-1.5 bg-white/95 backdrop-blur-sm px-4 py-1.5 rounded-full text-sm font-medium shadow-md text-gray-700 hover:bg-gray-50 transition-colors">
          <Tag className="h-3.5 w-3.5" />
          {CategoryName}
        </span>
      </div>
  
      <Image
        className="absolute inset-0 h-full w-full object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out"
        src={images[0]}
        alt={name}
        height={700}
        width={700}
        loading="lazy"
      />
  
      {/* Quick view button overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
      <Link href={`/shop/${_id}`} className="absolute bottom-4 left-1/2 -translate-x-1/2 transform-gpu translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
        <Button variant="secondary" size="lg" className="rounded-full   shadow-xl transform-gpu hover:scale-102 transition-transform duration-200">
          <Eye className="h-5 w-5 " />
           View 
        </Button>
      </Link>
    </div>
  </div>
  
    {/* Content */}
    <div className="p-5 flex flex-col flex-grow">
      {/* Product Info */}
      <h2 className="text-lg font-semibold mb-2 truncate hover:text-blue-600 transition-colors">
        {name}
      </h2>
  
      {/* Price with discount */}
      <div className="flex items-center gap-3 mb-4">
        <p className="text-xl font-bold text-blue-600">
          ${price.toFixed(2)}
        </p>
        <p className="text-sm text-gray-400 line-through">
          ${(price * 1.2).toFixed(2)}
        </p>
      </div>
  
      {/* Action Buttons */}
      <div className="flex gap-3 mt-auto">
        <div className="flex-1">
          <AddToBag
            currency="USD"
            description={description}
            image={images[0]}
            price={price}
            name={name}
            key={_id}
            id={_id}
          />
        </div>
      </div>
    </div>
  </div>
  )
}

export default ShopMainProductCard