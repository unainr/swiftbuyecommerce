"use client";
import React, { useState } from "react";
import { ModeToggle } from "./ui/modetoggle";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import Link from "next/link";
import { Button } from "./ui/button";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { X, ShoppingBag } from "lucide-react";
import { useShoppingCart } from "use-shopping-cart";
import SDropDownM from "./subcomponents/SDropDownM";
export default function SNavbar() {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const pathname = usePathname();

	const ActiveBar = (path: string): boolean => pathname === path;

	const { handleCartClick, cartCount } = useShoppingCart();

	return (
		<nav className=" py-2.5   border-b bg-background/50  sticky top-0 backdrop-blur  z-30 scroll-p-16 scroll-smooth ">
			<div className="flex flex-wrap items-center justify-between max-w-screen-xl px-4 mx-auto">
				{/* Logo */}
				<Link href="/" className="flex items-center">
					<Image
						src="/images/logo2.png"
						className="h-8 mr-3 sm:h-12 invert dark:invert-0"
						alt="swift buy Logo"
						width={150}
						height={100}
					/>
				</Link>

				{/* Right-side items */}
				<div className="flex items-center lg:order-2">
					{/* Hidden content for alignment */}
					<div className="hidden mt-2 mr-4 sm:inline-block">
						<span />
					</div>
					<div className="relative flex items-center justify-center">
						{/* Cart Count Badge */}
						<div className="absolute -top-1 -right-1 h-5 w-5 rounded-full bg-red-500 z-10 text-white text-[10px] font-semibold flex items-center justify-center shadow-sm">
							{cartCount ?? 0}
						</div>

						{/* Shopping Cart Button */}
						<Button
							variant="ghost"
							className="relative p-3 md:p-2 rounded-full hover:bg-gray-100 focus:ring-2 focus:ring-indigo-500 transition-all duration-200 ease-in-out"
							onClick={() => handleCartClick()}
							aria-label="Toggle Cart">
							<ShoppingBag className="h-5 w-5 text-gray-600 hover:text-indigo-500 transition-colors duration-200" />
						</Button>
					</div>
					<div className="flex items-center gap-4">
						<ModeToggle />

						{/* Download Button */}

						<span className="hidden lg:block md:hidden mx-auto">
							<SignedIn>
								<UserButton />
							</SignedIn>

							<SignedOut>
								<Button
									asChild
									className="inline-flex  animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium dark:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
									<Link href="/sign-in">Login</Link>
								</Button>
							</SignedOut>
						</span>
					</div>
					{/* Mobile Menu Button */}
					<button
						onClick={() => setIsMenuOpen(!isMenuOpen)}
						className="inline-flex items-center p-2 ml-1 text-sm  rounded-lg lg:hidden "
						aria-controls="mobile-menu"
						aria-expanded={isMenuOpen}>
						<span className="sr-only">Open main menu</span>
						{isMenuOpen ? (
							<X />
						) : (
							<svg
								className="w-6 h-6"
								fill="currentColor"
								viewBox="0 0 20 20"
								xmlns="http://www.w3.org/2000/svg">
								<path
									fillRule="evenodd"
									d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
									clipRule="evenodd"
								/>
							</svg>
						)}
					</button>
				</div>

				{/* Main Navigation */}
				<div
					className={`items-center justify-between w-full lg:flex lg:w-auto lg:order-1 ${
						isMenuOpen ? "block" : "hidden"
					}`}
					id="mobile-menu">
					<ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
						<li>
							<Link
								href="/"
								className={`block py-2 pl-3 pr-4  rounded lg:bg-transparent  lg:p-0 ${
									ActiveBar("/") ? "text-blue-600 underline underline-offset-4" : "text-gray-700"
								}  `}
								aria-current="page">
								Home
							</Link>
						</li>
						<li>
							<Link
								href="/about"
								className={`block py-2 pl-3 pr-4 rounded lg:bg-transparent  lg:p-0 ${
									ActiveBar("/about") ? "text-blue-600 underline underline-offset-4" : "text-gray-700"
								}  `}>
								About
							</Link>
						</li>
						<li>
							<Link
								href="/shop"
								className={`block py-2 pl-3 pr-4 rounded lg:bg-transparent  lg:p-0 ${
									ActiveBar("/shop") ? "text-blue-600 underline underline-offset-4" : "text-gray-700"
								}  `}>
								Shop
							</Link>
						</li>
						<li className="text-gray-700">
							<SDropDownM />
						</li>
						{/* <li>
							<Link
								href="/contact"
								className={`block py-2 pl-3 pr-4 rounded lg:bg-transparent  lg:p-0 ${
									ActiveBar("/contact") ? "text-blue-600 underline underline-offset-4" : "text-gray-700"
								}  `}>
								Contact
							</Link>
						</li> */}

						<li className="block md:hidden">
							<SignedIn>
								<UserButton />
							</SignedIn>

							<SignedOut>
								<Button asChild className="rounded-full ml-2">
									<Link href="/sign-in">Login</Link>
								</Button>
							</SignedOut>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
}
