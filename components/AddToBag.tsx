"use client";
import React from "react";
import { Button } from "./ui/button";
import { useShoppingCart } from "use-shopping-cart";
import { urlFor } from "@/sanity/lib/image";
import { ShoppingBasketIcon } from "lucide-react";

export interface AddToBagProps {
	name: string;
	description: string;
	price: number;
	image: any;
	currency: string;
	id: string;
}

const AddToBag = ({
	name,
	description,
	price,
	image,
	currency,
	id,
}: AddToBagProps) => {
	const { addItem, handleCartClick } = useShoppingCart();
	const product = {
		name,
		description,
		price,
		image: urlFor(image).url(),
		currency,
		id,
	};
	return (
		<Button
			onClick={() => {
				addItem(product);
				handleCartClick();
			}}
			className="whitespace-nowrap border-none text-sm focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 shadow relative inline-flex h-10 items-center justify-center rounded-md border border-slate-800 bg-blue-600 px-6 font-medium text-white transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 hover:bg-blue-700 overflow-hidden">
			<span className="relative z-10 flex flex-row items-center">
				Add to Cart{" "}
			</span>
			<span className="absolute inset-0 z-0 animate-shimmer bg-[linear-gradient(110deg,rgba(255,255,255,0.1),45%,rgba(255,255,255,0.3),55%,rgba(255,255,255,0.1))] bg-[length:200%_100%]"></span>
			<ShoppingBasketIcon className="w-5 h-5" />
		</Button>
	);
};

export default AddToBag;
