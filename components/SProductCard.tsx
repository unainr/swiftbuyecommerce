import React from "react";
import { client } from "@/sanity/lib/client";
import { PRODUCT_FETCH_QUERY } from "@/sanity/lib/querites";
import ProductCardMain from "./subcomponents/ProductCardMain";

const SProductCard = async () => {
	const products = await client.fetch(PRODUCT_FETCH_QUERY);

	return (
		<>
			<div className="flex flex-col items-center my-8">
				<h1 className="text-4xl font-bold text-center relative">
					<span className="bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">
						New Arrivals
					</span>
					<div className="absolute  left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r  from-blue-600 to-blue-300 rounded-full mt-2"></div>
				</h1>
				<p className="text-gray-600 mt-4 text-center">
					Discover our latest collection
				</p>
			</div>

			<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 p-6 ">
				{products?.length > 0 ? (
					products.slice(0, 8).map((product: any) => (
						// Use the individual product's _id as the unique key
						<ProductCardMain key={product._id} product={product} />
					))
				) : (
					<p className="no-results">No Product found</p>
				)}
			</div>
		</>
	);
};

export default SProductCard;
