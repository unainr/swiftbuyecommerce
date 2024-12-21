import React from "react";
import { CATEGORY_FETCH_QUERY } from "@/sanity/lib/querites";
import { client } from "@/sanity/lib/client";
import { notFound } from "next/navigation";
import Image from "next/image";
import AddToBag from "@/components/AddToBag";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Eye, Tag } from "lucide-react";
import HerickyBanner from "@/components/HerickyBanner";
import { Metadata } from "next";
const Category = async ({
	params,
}: {
	params: { category: string };
}) => {
	const { category } = params;
	const categorymain = await client.fetch(CATEGORY_FETCH_QUERY, { category });
	if (!categorymain || categorymain.length === 0) return notFound();

	return (
		<>
		<HerickyBanner heading={category} breadcrumb={category} />
		<div className="container mx-auto  ">
			<div className="px-4 mt-10">
				<h1 className="text-3xl sm:text-4xl sm:text-start font-bold  mt-6 mb-4 tracking-wide text-center">
					Our Products for <span className="text-indigo-600">{category}</span>
				</h1>
			</div>

			<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 p-6 ">
				{categorymain.map((product: any) => (
					<div key={product._id} className="mx-auto mt-4 w-full max-w-[300px] rounded-2xl overflow-hidden  hover:translate-y-[-8px] transition-all duration-300 flex flex-col h-full group border ">
					{/* Image Container with Category Tag */}
					<div className="relative aspect-square w-full h-4/5 overflow-hidden">
					  <div className="absolute top-3 left-3 z-10">
						<span className="inline-flex items-center gap-1.5 bg-white/95 backdrop-blur-sm px-4 py-1.5 rounded-full text-sm font-medium shadow-md text-gray-700 hover:bg-gray-50 transition-colors">
						  <Tag className="h-3.5 w-3.5" />
						  {product.CategoryName}
						</span>
					  </div>
				  
					  <Image
						className="absolute inset-0 h-full w-full object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out"
						src={product.images[0]}
						alt={product.name}
						height={700}
						width={700}
						loading="lazy"
					  />
				  
					  {/* Quick view button overlay */}
					  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
					  <Link href={`/shop/${product._id}`} className="absolute bottom-4 left-1/2 -translate-x-1/2 transform-gpu translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
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
						{product.name}
					  </h2>
				  
					  {/* Price with discount */}
					  <div className="flex items-center gap-3 mb-4">
						<p className="text-xl font-bold text-blue-600">
						  ${product.price.toFixed(2)}
						</p>
						<p className="text-sm text-gray-400 line-through">
						  ${(product.price * 1.2).toFixed(2)}
						</p>
					  </div>
				  
					  {/* Action Buttons */}
					  <div className="flex gap-3 mt-auto">
						<div className="flex-1">
						  <AddToBag
							currency="USD"
							description={product.description}
							image={product.images[0]}
							price={product.price}
							name={product.name}
							key={product._id}
							id={product._id}
						  />
						</div>
					  </div>
					</div>
				  </div>
				))}
			</div>
		</div>
							</>
	);
};

export default Category;

export async function generateMetadata({
    params,
}: {
    params: { category: string };
}): Promise<Metadata> {
    const { category } = params; // Await the `params` object if required
    return {
        title: `${category} | SwiftBuy`,
        description: `Browse our ${category} collection`,
    };
}


