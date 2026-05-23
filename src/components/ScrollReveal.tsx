"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

export default function ScrollReveal({
  children,
  delay = 0,
  yOffset = 30,
}: {
  children: ReactNode;
  delay?: number;
  yOffset?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: yOffset }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.8, delay, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}
