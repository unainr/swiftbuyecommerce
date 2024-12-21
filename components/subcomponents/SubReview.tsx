"use client";

import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "../ui/infinite-moving-cards";

export function InfiniteMovingCardsDemo() {
  return (
    <div className=" rounded-md flex flex-col items-center justify-center relative overflow-hidden my-8 ">
       <div className="py-5 text-center">
  <h1 className="text-sm uppercase tracking-wider text-indigo-500 mb-3">Customer Reviews</h1>
  <h2 className="text-4xl font-semibold text-primary mb-2">Product Reviews</h2>
  <p className="text-gray-600 max-w-2xl mx-auto">
    Our references are very valuable, the result of a great effort. We take pride in delivering exceptional products and services that earn the trust and satisfaction of our customers.
  </p>
</div>

      <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="slow"
      />
    </div>
  );
}

const testimonials = [
  {
    quote: "The quality of this camera exceeded my expectations! The image clarity is outstanding, and the battery life lasts for days. Perfect for both professional shoots and everyday photography.",
    name: "Sarah Chen",
    title: "Professional Photographer",
    rating: 5,
    
  },
  {
    quote: "These wireless earbuds are a game-changer. The noise cancellation is incredible, and they're so comfortable I forget I'm wearing them. Best purchase I've made this year!",
    name: "Michael Rodriguez",
    title: "Music Producer",
    rating: 4,
  },
  {
    quote: "The smartwatch's fitness tracking features are spot-on. It's water-resistant, has great battery life, and the sleep tracking data has helped me improve my rest schedule.",
    name: "Emma Thompson",
    title: "Fitness Instructor",
    rating: 4,
  },
  {
    quote: "This laptop's performance is outstanding. I can run multiple design programs simultaneously without any lag. The display colors are vibrant and true to life.",
    name: "David Park",
    title: "Graphic Designer",
    rating: 5,
  },
  {
    quote: "The coffee maker's programmable features are perfect for my morning routine. The temperature control is precise, and it makes the best-tasting coffee I've had at home.",
    name: "Lisa Martinez",
    title: "Coffee Enthusiast",
    rating: 3,
  }
];

