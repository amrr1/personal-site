"use client";

import { motion } from "framer-motion";
import Image from "next/image";

interface AnimatedMascotProps {
  src: string;
  alt: string;
  className?: string;
}

export function AnimatedMascot({ src, alt, className = "" }: AnimatedMascotProps) {
  return (
    <motion.div
      className={className}
      animate={{ y: [0, -8, 0] }}
      transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
    >
      <Image src={src} alt={alt} width={64} height={64} />
    </motion.div>
  );
}
