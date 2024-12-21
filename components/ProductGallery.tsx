"use client";
import React, { useState } from "react";
import Image from "next/image";

interface ProductGalleryProps {
	images: string[];
	name: string;
}

const ProductGallery = ({ images, name }: ProductGalleryProps) => {
	const [selectedImage, setSelectedImage] = useState(images[0]);

	return (
		<div className="flex flex-col-reverse md:flex-row gap-4">
  {/* Thumbnails Section */}
  <div className="flex md:flex-col gap-4 overflow-x-auto md:overflow-visible justify-center sm:justify-start">
    {images.map((image: string, idx: number) => (
      <div
        key={idx}
        className={`w-16 h-16 md:w-20 md:h-20 cursor-pointer rounded-lg overflow-hidden border-2 ${
          selectedImage === image ? "border-indigo-500" : "border-transparent"
        }`}
        onClick={() => setSelectedImage(image)}
      >
        <Image
          src={image}
          alt={`${name} Thumbnail ${idx + 1}`}
          width={80}
          height={80}
          className="w-full h-full object-cover hover:opacity-75 transition"
        />
      </div>
    ))}
  </div>

  {/* Main Image Section */}
  <div className="flex-1 rounded-xl overflow-hidden bg-gray-100 dark:bg-gray-800 relative">
    <Image
      src={selectedImage}
      alt={name}
      layout="responsive"
      width={900}
      height={900}
      className="object-contain"
      priority
    />
  </div>
</div>

	);
};

export default ProductGallery;
