// app/page.tsx
"use client";

import React from "react";
import { motion } from "framer-motion";
import HeroSection from "./components/HeroSection";
import FeaturesSection from "./components/FeaturesSection";
import BenefitsSection from "./components/BenefitsSection";
import CallToAction from "./components/CallToAction";

const transition = { duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99] };

return function Home() {
  return (
    <div className="bg-gray-50">
      <motion.div
        initial="initial"
        animate="animate"
        exit="exit"
      >
        <HeroSection
          headline="Track Your Fitness, Achieve Your Goals"
          description="Reach your fitness goals with our intuitive and powerful fitness tracker app."
          imageSrc="/hero-image.png"
        />
        <FeaturesSection
          features={[
            {
              title: "Step Tracking",
              description: "Monitor your daily steps and activity levels.",
            },
            {
              title: "Workout Logging",
              description: "Record your workouts and track your progress.",
            },
            {
              title: "Goal Setting",
              description: "Set personalized goals and stay motivated.",
            },
          ]}
        />
        <BenefitsSection
          benefits={[
            {
              title: "Improved Fitness",
              description: "Achieve a healthier and more active lifestyle.",
            },
            {
              title: "Increased Motivation",
              description: "Stay motivated with personalized insights and progress tracking.",
            },
            {
              title: "Better Health",
              description: "Make informed decisions about your health and wellness.",
            },
          ]}
        />
        <CallToAction
          buttonText="Download the App"
          buttonLink="#"
        />
      </motion.div>
    </div>
  );
}