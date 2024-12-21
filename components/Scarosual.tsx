"use client";
import * as React from "react";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";

import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from "@/components/ui/carousel";
import { Button } from "./ui/button";

export function CarouselPlugin() {
	const plugin = React.useRef(
		Autoplay({ delay: 2000, stopOnInteraction: true })
	);

	const slides = [
		{
			image: "/1.jpg",
			title: "Discover the Latest Fashion Trends",
			description:
				"Explore our new arrivals and elevate your wardrobe with style.",
		},
		{
			image: "/3.jpg",
			title: "Big Discounts on Electronics",
			description:
				"Shop the best gadgets with up to 50% off, only for a limited time.",
		},
	];

	return (
		<Carousel
			plugins={[plugin.current]}
			className="w-full"
			onMouseEnter={plugin.current.stop}
			onMouseLeave={plugin.current.reset}>
			<CarouselContent>
				{slides.map((slide, index) => (
					<CarouselItem key={index}>
						<div className="relative w-full h-[400px] sm:h-[600px] lg:h-[500px]">
							<Image
								src={slide.image}
								alt={`Slide ${index + 1}`}
								className="w-full h-full object-cover"
								width={900}
								height={200}
							/>
							{/* Overlay for text */}
							<div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-start justify-center text-left p-4 sm:p-8 lg:p-12">
								<h2 className="text-white text-2xl sm:text-4xl lg:text-4xl font-bold">
									{slide.title}
								</h2>
								<p className="text-white text-base sm:text-lg  mt-2 max-w-lg">
									{slide.description}
								</p>

								<Button className="whitespace-nowrap border-none my-4 text-sm focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 shadow relative inline-flex h-11 items-center justify-center rounded-md border border-slate-800 bg-blue-600 px-6 font-medium text-white transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 hover:bg-blue-700 overflow-hidden">
								<span className="relative z-10 flex flex-row items-center">Shop Now </span>
								<span className="absolute inset-0 z-0 animate-shimmer bg-[linear-gradient(110deg,rgba(255,255,255,0.1),45%,rgba(255,255,255,0.3),55%,rgba(255,255,255,0.1))] bg-[length:200%_100%]"></span>
								</Button>
							</div>
						</div>
					</CarouselItem>
				))}
			</CarouselContent>
			<CarouselPrevious className="absolute left-4 top-1/2 transform -translate-y-1/2 p-2 rounded-full shadow-md cursor-pointer ">
				&#8249;
			</CarouselPrevious>
			<CarouselNext className="absolute right-4 top-1/2 transform -translate-y-1/2  p-2 rounded-full shadow-md cursor-pointer ">
				&#8250;
			</CarouselNext>
		</Carousel>
	);
}
