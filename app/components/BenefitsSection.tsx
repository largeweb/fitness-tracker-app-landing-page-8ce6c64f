// app/components/BenefitsSection.tsx
"use client";

import React from "react";
import { motion } from "framer-motion";
import { useIntersectionObserver } from "@/app/hooks/useIntersectionObserver";
import { useRef } from "react";

interface Benefit {
  title: string;
  description: string;
}

interface Props {
  benefits: Benefit[];
}

const BenefitsSection: React.FC<Props> = ({ benefits }) => {
  const sectionRef = useRef(null);
  const entry = useIntersectionObserver(sectionRef, { threshold: 0.2 });

  const fadeInVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeInOut",
      },
    },
  };

  return (
    <motion.section
      ref={sectionRef}
      className="py-12 bg-gray-50"
      variants={fadeInVariants}
      initial="hidden"
      animate={entry?.isIntersecting ? "visible" : "hidden"}
    >
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8 text-gray-800">
          Unlock Your Fitness Potential
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="p-6 bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300"
            >
              <h3 className="text-xl font-semibold mb-2 text-gray-700">
                {benefit.title}
              </h3>
              <p className="text-gray-600">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

return BenefitsSection;