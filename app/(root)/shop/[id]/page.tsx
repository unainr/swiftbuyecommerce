import React from "react";
import { PRODUCT_FETCH_QUERY } from "@/sanity/lib/querites";
import { client } from "@/sanity/lib/client";
import { notFound } from "next/navigation";
import AddToBag from "@/components/AddToBag";
import ProductGallery from "@/components/ProductGallery";
import RelatedProducts from "@/components/RelatedProducts";
import HerickyBanner from "@/components/HerickyBanner";
import AddToCart from "@/components/CheckOutNow";
import { Metadata } from "next";
const Products = async ({ params }: { params: Promise<{ id: string }> }) => {
	const id = (await params).id;
	const products = await client.fetch(PRODUCT_FETCH_QUERY);
	if (!products) return notFound();
	const product = products.find((product: any) => product._id === id);
	const { _id, name, CategoryName, description, price, images } = product;
	return (
		<>
		<HerickyBanner heading={name} breadcrumb={CategoryName} />
			<div className="py-10 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
				<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="flex flex-col lg:flex-row gap-12">
						{/* Left: Product Gallery */}
						<div className="lg:flex-1">
							<ProductGallery images={images} name={name} />
						</div>

						{/* Right: Product Details */}
						<div className="lg:flex-1 space-y-8">
							{/* Header Section */}
							<div className="border-b dark:border-gray-700 pb-6">
								<h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">
									{name}
								</h1>
								<div className="flex items-center space-x-2">
									<span className="px-3 py-1 text-sm font-medium bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-100 rounded-full">
										{CategoryName}
									</span>
									<span className="px-3 py-1 text-sm font-medium bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100 rounded-full">
										In Stock
									</span>
								</div>
							</div>

							{/* Price Section */}
							<div className="flex items-baseline space-x-4">
								<span className="text-3xl font-bold text-gray-900 dark:text-white">
									${price.toFixed(2)}
								</span>
								<span className="text-lg text-gray-500 dark:text-gray-400 line-through">
									${(price * 1.2).toFixed(2)}
								</span>
								<span className="text-sm font-semibold text-green-500">
									Save 20%
								</span>
							</div>

							{/* Description Section */}
							<div className="prose prose-sm dark:prose-invert">
								<h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
									Product Description
								</h3>
								<p className="text-gray-600 dark:text-gray-300 leading-relaxed">
									{description}
								</p>
							</div>

							{/* Features/Highlights */}
							<div className="grid grid-cols-2 gap-4">
								<div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg transition-all duration-300 hover:bg-indigo-500 group">
									<span className="block font-medium text-gray-900 dark:text-white mb-1 group-hover:text-white">
										Free Shipping
									</span>
									<span className="text-sm text-gray-500 dark:text-gray-400 group-hover:text-white/90">
										On orders over $100
									</span>
								</div>
								<div className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg transition-all duration-300 hover:bg-indigo-500 group">
									<span className="block font-medium text-gray-900 dark:text-white mb-1 group-hover:text-white">
										Returns
									</span>
									<span className="text-sm text-gray-500 dark:text-gray-400 group-hover:text-white/90">
										30-day money back
									</span>
								</div>
							</div>

							{/* Actions */}
							<div className="flex flex-col sm:flex-row gap-4 pt-6 border-t dark:border-gray-700">
								
								<div className="flex flex-col sm:flex-row gap-4 sm:gap-5">
									<AddToBag
										currency="USD"
										description={description}
										image={images[0]}
										price={price}
										name={name}
										key={_id}
										id={_id}
									/>
									<AddToCart name={name} description={description} price={price} image={images[0]} currency="USD" id={_id}/>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<RelatedProducts categoryName={CategoryName} currentProductId={_id} />
		</>
	);
};

export default Products;

export async function generateMetadata({
    params,
}: {
    params: { id: string };
}): Promise<Metadata> {
	const id = (await params).id;
    const products = await client.fetch(PRODUCT_FETCH_QUERY);
    const product = products.find((product: any) => product._id === id);

    if (!product) {
        return {
            title: "Product Not Found | SwiftBuy",
            description: "We couldn't find the product you're looking for.",
        };
    }

    return {
        title: `${product.name} | SwiftBuy`,
        description: `Discover premium products like ${product.name}. Shop now for the best in ${product.CategoryName}!`,
    };
}
  