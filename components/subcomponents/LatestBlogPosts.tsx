'use client';
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
export const LatestBlogPosts = () => {
    const posts = [
      {
        title: "Spring Fashion Trends 2024",
        image: "https://images.unsplash.com/photo-1483985988355-763728e1935b",
        excerpt: "Discover the hottest trends for this spring season...",
        date: "Mar 15, 2024",
        
      },
      {
        title: "Sustainable Fashion Guide",
        image: "https://images.unsplash.com/photo-1489987707025-afc232f7ea0f",
        excerpt: "How to build an eco-friendly wardrobe...",
        date: "Mar 12, 2024",
       
      },
      {
        title: "Accessorizing 101",
        image: "https://images.unsplash.com/photo-1492707892479-7bc8d5a4ee93",
        excerpt: "Master the art of completing your outfit...",
        date: "Mar 10, 2024",
       
      }
    ];
  
    return (
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Latest Style Tips</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {posts.map((post, index) => (
              <motion.article 
                key={index}
                whileHover={{ y: -10 }}
                className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg"
              >
                <div className="relative h-48">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-semibold text-xl mb-2">{post.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">{post.excerpt}</p>
                  <div className="flex items-center text-sm text-gray-500">
                    <span>{post.date}</span>
                    <span className="mx-2">•</span>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    );
  };
  