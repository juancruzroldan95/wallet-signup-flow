"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import { motion, useAnimation } from "framer-motion";

export default function HeroImageBounce() {
  const controls = useAnimation();
  useEffect(() => {
    const sequence = async () => {
      await controls.start({
        y: 0,
        opacity: 1,
        transition: { duration: 1.8 },
      });
      await controls.start({
        y: [0, 15, 0],
        transition: { repeat: Infinity, duration: 8 },
      });
    };

    sequence();
  }, [controls]);

  return (
    <motion.div
      initial={{ y: 30, opacity: 0 }}
      animate={controls}
      className="lg:relative lg:w-1/2 lg:flex lg:items-center lg:justify-center bg-gray-50"
    >
      <Image
        className="h-auto max-w-full object-cover"
        src="/images/hero.webp"
        alt="Wallet signup illustration"
        width={500}
        height={500}
      />
    </motion.div>
  );
}
