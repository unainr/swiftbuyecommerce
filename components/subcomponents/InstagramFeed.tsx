"use client";
import React from 'react';
import { motion } from "framer-motion";
import Image from "next/image";

export const InstagramFeed = () => {
    const instaPosts = [
      "/images/instragram/insta1.jpeg",
      "/images/instragram/insta6.jpeg",
      "/images/instragram/insta3.jpeg",
      "/images/instragram/insta2.jpeg",
      "/images/instragram/insta4.jpeg",
      "/images/instragram/insta5.jpeg",
    ];
  
    return (
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            @SwiftBuy on Instagram
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {instaPosts.map((post, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className="relative aspect-square group cursor-pointer"
              >
                <Image
                  src={post}
                  alt="Instagram post"
                  fill
                  className="object-cover rounded-xl"
                />
                <div className="absolute inset-0 bg-black/50 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  {/* <Instagram className="w-8 h-8 text-white" /> */}
                 <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-instagram text-white"><rect width={20} height={20} x={2} y={2} rx={5} ry={5} /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" x2="17.51" y1="6.5" y2="6.5" /></svg>

                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    );
  };
  