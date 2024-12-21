"use client";
import React from 'react';
import { HeadphonesIcon, RotateCcw, Shield, Truck } from 'lucide-react';
export const TrustBadges = () => {
    const badges = [
      {
        icon: Shield,
        title: "Secure Payment",
        desc: "100% secure payment"
      },
      {
        icon: Truck,
        title: "Fast Delivery",
        desc: "Free on orders over $50"
      },
      {
        icon: RotateCcw,
        title: "Easy Returns",
        desc: "30-day return policy"
      },
      {
        icon: HeadphonesIcon,
        title: "24/7 Support",
        desc: "Dedicated support"
      }
    ];
  
    return (
      <section className="py-12 ">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {badges.map((badge, index) => (
              <div key={index} className="flex flex-col items-center text-center">
                <badge.icon className="w-12 h-12 mb-4 text-blue-600" />
                <h3 className="font-semibold mb-2">{badge.title}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">{badge.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };
  