"use client";

import ParticlesBackground from "@/components/ui/ParticlesBackground";
import TypeWriter from "@/components/ui/TypeWriter";
import { motion } from "framer-motion";

export default function Banner() {
  return (
    <div
      id="banner-section"
      className="relative h-[90vh] overflow-hidden flex flex-auto p-10 justify-center"
    >
      <div className="w-full h-full flex flex-col justify-center items-center">
        <TypeWriter
          duration={0}
          text="Your Shortcut to More Connections."
          className="text-5xl"
        ></TypeWriter>
        <div className="flex gap-x-1">
          <motion.span
            className="pt-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.7 }}
            transition={{ delay: 6, duration: 1 }}
          >
            {" "}
            Interested?{" "}
          </motion.span>
          <motion.span
            className="pt-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.7 }}
            transition={{ delay: 7, duration: 1 }}
          >
            {" "}
            Scroll Down to Learn More.{" "}
          </motion.span>
        </div>
      </div>

      <ParticlesBackground></ParticlesBackground>
    </div>
  );
}
