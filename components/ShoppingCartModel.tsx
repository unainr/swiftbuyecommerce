"use client";
import React from "react";
import {
	Sheet,
	SheetContent,
	SheetHeader,
	SheetTitle,
} from "@/components/ui/sheet";
import { useShoppingCart } from "use-shopping-cart";
import Image from "next/image";
import { Button } from "./ui/button";
import { createStripeSession } from "@/serverActions";
import { ShoppingBag, Minus, Plus, ShoppingCart } from "lucide-react";
import { useAuth } from "@clerk/nextjs";
import { useRouter } from "next/navigation";

const ShoppingCartModel = () => {
	const { isSignedIn } = useAuth()
    const router = useRouter()
	const {
		cartCount,
		shouldDisplayCart,
		handleCartClick,
		cartDetails,
		removeItem,
		totalPrice,
		incrementItem,
		decrementItem,
	} = useShoppingCart();
	// checkout code
	const handleCheckout = async () => {
		if (!isSignedIn) {
            handleCartClick()
            router.push('/sign-in')
            return
        }
		try {
			const cartItems = Object.values(cartDetails ?? {}).map((item) => ({
				name: item.name,
				description: item.description,
				image: item.image,
				price: item.price,
				quantity: item.quantity,
			}));

			const sessionUrl = await createStripeSession(cartItems);

			if (sessionUrl) {
				window.location.href = sessionUrl; // Redirect to Stripe Checkout
			} else {
				console.error("Error: No session URL returned");
			}
		} catch (error) {
			console.error("Error during checkout:", error);
		}
	};

	return (
		<>
			<Sheet open={shouldDisplayCart} onOpenChange={() => handleCartClick()}>
			<SheetContent className="sm:max-w-lg w-full flex flex-col h-[100dvh] ">

					{/* Header with Icon */}
					<SheetHeader className="px-2  border-b">
						<div className="flex items-center justify-between">
							<SheetTitle className="flex items-center gap-2 text-xl font-bold sm:text-2xl">
								<ShoppingBag className="w-6 h-6" />
								Cart ({cartCount})
							</SheetTitle>
						</div>
					</SheetHeader>

					{/* Cart Content */}
					<div className="flex flex-col flex-1 overflow-y-auto ">
						<div className="flex-1 overflow-y-auto py-4">
							{cartCount === 0 ? (
								<div className="flex flex-col items-center justify-center h-full py-8">
									<ShoppingCart className="w-16 h-16 text-gray-300 mb-4" />
									<h1 className="text-xl font-medium text-gray-700">
										Your cart is empty
									</h1>
									<p className="text-sm text-gray-500 mt-2">
										Start adding items to your cart
									</p>
								</div>
							) : (
								<ul className="divide-y ">
									{Object.values(cartDetails ?? {}).map((entry: any) => (
										<li key={entry.id} className="py-4">
											<div className="flex gap-4">
												{/* Product Image */}
												<div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border">
													<Image
														src={entry.image}
														alt={entry.name}
														width={100}
														height={100}
														className="h-full w-full object-cover"
													/>
												</div>

												{/* Product Details */}
												<div className="flex flex-1 flex-col">
													<div className="flex justify-between">
														<h3 className="text-base font-medium">
															{entry.name}
														</h3>
														<p className="text-base font-semibold">
															${entry.price}
														</p>
													</div>
													<p className="mt-1 text-sm text-gray-500 line-clamp-1">
														{entry.description}
													</p>

													{/* Quantity Controls */}
													<div className="flex items-center justify-between mt-4">
														<div className="flex items-center gap-2 border rounded-lg p-1">
															<button
																onClick={() => decrementItem(entry.id)}
																className="p-1 hover:bg-gray-100 rounded-md">
																<Minus className="w-4 h-4" />
															</button>
															<span className="w-8 text-center font-medium">
																{entry.quantity}
															</span>
															<button
																onClick={() => incrementItem(entry.id)}
																className="p-1 hover:bg-gray-100 rounded-md">
																<Plus className="w-4 h-4" />
															</button>
														</div>
														<button
															onClick={() => removeItem(entry.id)}
															className="text-sm text-red-500 hover:text-red-600">
															Remove
														</button>
													</div>
												</div>
											</div>
										</li>
									))}
								</ul>
							)}
						</div>

						{/* Footer */}
						<div className="border-t bg-gray-50 dark: dark:bg-black">
							<div className="p-6 space-y-4">
								<div className="flex justify-between items-center">
									<span className="text-base font-medium">Subtotal</span>
									<span className="text-lg font-semibold">
										${(totalPrice ?? 0).toFixed(2)}
									</span>
								</div>
								<p className="text-sm text-gray-500">
									Shipping and taxes calculated at checkout
								</p>
								<Button
									className="w-full h-11 text-base font-medium"
									onClick={handleCheckout}
									disabled={cartCount === 0}>
									Proceed to Checkout
								</Button>
								<button
									onClick={() => handleCartClick()}
									className="w-full text-sm text-gray-600 ">
									Continue Shopping
								</button>
							</div>
						</div>
					</div>
				</SheetContent>
			</Sheet>
		</>
	);
};

export default ShoppingCartModel;
