"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const MotionCheckCircle = motion(CheckCircle2);

export default function AnimatedCheckCircle() {
  return (
    <MotionCheckCircle
      className="h-16 w-16 text-green-500"
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        delay: 0.2,
        duration: 0.4,
        scale: { type: "spring", bounce: 0.5 },
      }}
    />
  );
}
