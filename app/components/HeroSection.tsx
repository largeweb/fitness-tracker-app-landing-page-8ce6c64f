// app/components/HeroSection.tsx
"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

interface Props {
  headline: string;
  description: string;
  imageSrc: string;
}

const HeroSection: React.FC<Props> = ({ headline, description, imageSrc }) => {
  return (
    <motion.div
      className="relative py-24 bg-gray-50 overflow-hidden" // Adjust bg color and padding as needed
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <div className="container mx-auto px-4">
        <div className="lg:flex lg:items-center">
          <div className="lg:w-1/2 text-center lg:text-left">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-4">
              {headline}
            </h1>
            <p className="text-lg text-gray-700 mb-8">{description}</p>
            <a
              href="#" // Replace with actual link
              className="inline-block bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition-colors duration-300"
            >
              Learn More
            </a>
          </div>
          <div className="lg:w-1/2 mt-12 lg:mt-0">
            <Image
              src={imageSrc}
              alt="Fitness Tracker App"
              width={768} // Adjust as needed
              height={432} // Adjust as needed
              className="rounded-lg shadow-xl"
              priority // Helpful for hero images
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

return HeroSection;