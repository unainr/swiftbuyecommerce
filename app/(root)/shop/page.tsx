import React from 'react'
import HerickyBanner from '@/components/HerickyBanner';
import ShopMainProductCard from '@/components/ShopMainProductCard';
import { client } from "@/sanity/lib/client";
import { PRODUCT_FETCH_QUERY } from "@/sanity/lib/querites";
import { Metadata } from "next";

const Shop = async () => {
    const products = await client.fetch(PRODUCT_FETCH_QUERY);
  return (
    <>
    <HerickyBanner heading='Shop' breadcrumb='Shop'/>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 p-6 ">
        {products?.length > 0 ? (
          products.map((product: any) => (
            // Use the individual product's _id as the unique key
            <ShopMainProductCard key={product._id} product={product} />
          ))
        ) : (
          <p className="no-results">No Product found</p>
        )}
      </div>
    </>
  )
}

export default Shop

export const metadata: Metadata = {
  title: 'Shop All Collections | SwiftBuy',
  description: 'Browse our complete collection of premium clothing, accessories and more',
}
