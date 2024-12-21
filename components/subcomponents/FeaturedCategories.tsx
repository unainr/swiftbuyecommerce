"use client";
import React from 'react';
import { motion } from "framer-motion";
import Image from "next/image";
import Link from 'next/link';

export const FeaturedCategories = () => {
  const categories = [
    {
      name: "Men's Fashion",
      image: "/images/feat.jpeg",
      Links:"/collection/Mens",
    },
    {
      name: "Women's Collection",
      image: "/images/feat1.jpeg",
      Links:"/collection/Women",
    },
    {
      name: "Accessories",
      image: "/images/feat2.jpeg",
      Links: "/collection/accessories",
    },
    {
      name: "Footwear",
      image: "/images/feat3.jpeg",
      Links: "/collection/footwear",
    },
  ];

  return (
    <section className=" py-2 px-4 max-w-7xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
        Shop by Category
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {categories.map((category, index) => (
          <motion.div
            key={index}
            whileHover={{ y: -10 }}
            className="relative group cursor-pointer"
          >
            <div className="relative h-[400px] rounded-2xl overflow-hidden">
              <Image
                src={category.image}
                alt={category.name}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
              <div className="absolute bottom-6 left-6 text-white">
                <Link href={category.Links} className="text-lg font-semibold">
                <h3 className="text-xl font-semibold">{category.name}</h3>
                </Link>
          
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
