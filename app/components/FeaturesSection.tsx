// app/components/FeaturesSection.tsx
import React from "react";
import { motion } from "framer-motion";
import { FaHeartbeat, FaRunning, FaChartLine } from "react-icons/fa"; // Example icons

interface Feature {
  title: string;
  description: string;
}

interface Props {
  features: Feature[];
}

const FeaturesSection: React.FC<Props> = ({ features }) => {
  // Animation variants for the slide-in effect
  const variants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <motion.div
      className="bg-white py-12 px-4 sm:px-6 lg:py-16 lg:px-8"
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 0.7, ease: "easeInOut" }}
    >
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl text-center mb-8">
          Key Features
        </h2>
        <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300"
            >
              <div className="mb-4">
                {index === 0 && <FaHeartbeat className="text-2xl text-blue-500 mb-2" />}
                {index === 1 && <FaRunning className="text-2xl text-green-500 mb-2" />}
                {index === 2 && <FaChartLine className="text-2xl text-red-500 mb-2" />}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

return FeaturesSection;