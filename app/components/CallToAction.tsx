// app/components/CallToAction.tsx

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

interface Props {
  buttonText: string;
  buttonLink: string;
}

const CallToAction: React.FC<Props> = ({ buttonText, buttonLink }) => {
  return (
    <div className="flex justify-center mt-8">
      <Link href={buttonLink} passHref>
        <motion.button
          className="bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 text-white font-bold py-3 px-6 rounded-full shadow-md hover:shadow-xl transition-all duration-300"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {buttonText}
        </motion.button>
      </Link>
    </div>
  );
};

export default CallToAction;