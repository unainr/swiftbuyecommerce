"use client";
import React from "react";
import HerickyBanner from "@/components/HerickyBanner";
import { motion } from "framer-motion";
import {
	Headphones,
	ShoppingBag,
	Truck,
} from "lucide-react";
import Image from "next/image";
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
	{
		question: "What makes StyleStore unique?",
		answer:
			"We offer carefully curated premium fashion items with guaranteed authenticity and exceptional customer service.",
	},
	{
		question: "Do you ship internationally?",
		answer:
			"Yes, we ship worldwide with tracked delivery options to ensure your items reach you safely.",
	},
	{
		question: "What is your return policy?",
		answer:
			"We offer a hassle-free 30-day return policy for all unused items in original packaging.",
	},
	{
		question: "How can I track my order?",
		answer:
			"Once your order ships, you'll receive a tracking number via email to monitor your delivery.",
	},
	{
		question: "Are your products authentic?",
		answer:
			"Yes, we guarantee 100% authenticity for all our products and work directly with authorized suppliers.",
	},
];
const About = () => {
	return (
		<>
			<div className="overflow-x-hidden">
  <HerickyBanner heading="About Us" breadcrumb="About Us" />

  {/* Story Section */}
  <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-20">
    <motion.div
      initial={{ y: 50, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true }}
      className="grid md:grid-cols-2 gap-8 lg:gap-16 items-center"
    >
      <div className="relative h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] w-full group">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-blue-500 rounded-xl sm:rounded-2xl transform rotate-3 transition-transform duration-300 group-hover:rotate-6" />
        <Image
          src="/images/aboutus.jpeg"
          alt="Our Story"
          fill
          className="object-cover rounded-xl sm:rounded-2xl -rotate-3 transition-transform duration-300 group-hover:-rotate-6"
        />
      </div>

      <div className="space-y-6 sm:space-y-8">
        <motion.h2
          initial={{ x: 50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          className="text-3xl sm:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 text-transparent bg-clip-text"
        >
          Our Journey
        </motion.h2>
        <p className="text-base sm:text-lg leading-relaxed">
        Since our founding in 2024, StyleStore has redefined the digital fashion landscape with our innovative approach. We've curated an exclusive collection that brings together timeless elegance and contemporary trends. Our commitment to authenticity and sustainability has made us a trusted destination for fashion enthusiasts worldwide. </p>

        <div className="grid grid-cols-3 gap-3 sm:gap-6">
          {[
            {
              number: "50K+",
              label: "Happy Customers",
              gradient: "from-purple-500 to-purple-700",
            },
            {
              number: "1000+",
              label: "Products",
              gradient: "from-blue-500 to-blue-700",
            },
            {
              number: "100%",
              label: "Authentic Items",
              gradient: "from-indigo-500 to-indigo-700",
            },
          ].map((stat, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -5 }}
              className={`p-3 sm:p-6 rounded-lg sm:rounded-xl bg-gradient-to-br ${stat.gradient} text-white`}
            >
              <h3 className="font-bold text-xl sm:text-2xl lg:text-3xl">{stat.number}</h3>
              <p className="text-xs sm:text-sm mt-1 sm:mt-2 opacity-90">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  </div>

  {/* Values Section */}
  <div className="py-12 sm:py-20 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
    <div className="max-w-7xl mx-auto px-4 sm:px-6">
      <motion.h2
        initial={{ y: 30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-8 sm:mb-16"
      >
        Why Choose Us
      </motion.h2>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-10">
  {[
    {
      icon: ShoppingBag,
      title: "Premium Selection",
      desc: "Carefully curated collection of the finest fashion items from trusted brands.",
    },
    {
      icon: Truck,
      title: "Global Shipping",
      desc: "Fast and secure worldwide delivery with real-time tracking.",
    },
    {
      icon: Headphones,
      title: "24/7 Support",
      desc: "Dedicated customer service team ready to assist you anytime.",
    },
  ].map((feature, index) => (
    <motion.div
      key={index}
      initial={{ y: 50, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      whileHover={{ y: -10 }}
      transition={{ delay: index * 0.2 }}
      className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300"
    >
      <div className="w-20 h-20 mx-auto mb-8 bg-gradient-to-br from-purple-500 to-blue-500 rounded-full flex items-center justify-center">
        <feature.icon className="h-10 w-10 text-white" />
      </div>
      <h3 className="text-2xl font-semibold mb-4 text-center">
        {feature.title}
      </h3>
      <p className="text-gray-600 dark:text-gray-300 text-center">
        {feature.desc}
      </p>
    </motion.div>
  ))}
</div>

    </div>
  </div>

  {/* FAQ Section */}
  <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12 sm:py-20">
    <motion.h2
      initial={{ y: 30, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-8 sm:mb-16 bg-gradient-to-r from-purple-600 to-blue-600 text-transparent bg-clip-text"
    >
      Frequently Asked Questions
    </motion.h2>

    <motion.div
      initial={{ y: 50, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      className="space-y-4 sm:space-y-6"
    >
      <Accordion type="single" collapsible>
        {faqs.map((faq, index) => (
          <AccordionItem
            key={index}
            value={`item-${index}`}
            className="border border-gray-200 dark:border-gray-700 rounded-lg sm:rounded-xl px-4 sm:px-6 my-2 sm:my-4 shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <AccordionTrigger className="text-left font-semibold text-base sm:text-lg py-4 sm:py-6">
              {faq.question}
            </AccordionTrigger>
            <AccordionContent className="text-gray-600 dark:text-gray-300 text-sm sm:text-base pb-4 sm:pb-6">
              {faq.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </motion.div>
  </div>
</div>

		</>
	);
};

export default About;


