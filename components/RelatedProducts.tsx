import React from 'react';
import { client } from "@/sanity/lib/client";
import { RELATED_PRODUCTS_QUERY } from '@/sanity/lib/querites';
import SubRelatedProducts from './subcomponents/SubRelatedProducts';

const RelatedProducts = async ({ categoryName, currentProductId }: { 
  categoryName: string, 
  currentProductId: string 
}) => {
 const relatedProducts = await client.fetch(RELATED_PRODUCTS_QUERY,{category: categoryName,
    currentId: currentProductId});

  

  if (relatedProducts.length === 0) return null;

  return (
    <section className="py-12 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold mb-8 text-gray-900 dark:text-white">
          Related Products
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {relatedProducts.map((product:any) => (
            <SubRelatedProducts key={product._id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default RelatedProducts;
