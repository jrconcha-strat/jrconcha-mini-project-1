"use client";
import dynamic from "next/dynamic";
import Image from "next/image";
import { motion } from "framer-motion";

const Marquee = dynamic(() => import("react-fast-marquee"), { ssr: false });

export default function TechStackMarquee() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 2 }}
      viewport={{ once: true, amount: 0.5 }}
    >
      <Marquee
        speed={10}
        gradient={true}
        loop={0}
        autoFill={true}
        gradientColor="#36363D"
      >
        <Image
          src="/html.png"
          width={48}
          height={48}
          className="mx-4"
          alt="HTML"
        />
        <Image
          src="/css.png"
          width={48}
          height={48}
          className="mx-4"
          alt="CSS"
        />
        <Image
          src="/js.png"
          width={48}
          height={48}
          className="mx-4"
          alt="JavaScript"
        />
        {/* <Image src="/react.png" className="h-12 mx-4" alt="React" /> */}
      </Marquee>
    </motion.div>
  );
}
