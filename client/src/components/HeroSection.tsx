"use client";

import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
// import TechStackMarquee from "@/components/ui/TechStackMarquee";

export default function HeroSection() {
  return (
    <div className="h-full py-8 sm:py-10 md:py-12 lg:py-16">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 2 }}
        viewport={{ once: true, amount: 0.5 }}
        className="h-full flex flex-col md:flex-row flex-auto justify-center gap-x-15"
      >
        {" "}
        <div className="flex flex-col items-center justify-center h-50 md:h-64 lg:h-80">
          <Avatar className="w-50 h-50 md:w-64 md:h-64 lg:w-80 lg:h-80">
            <AvatarImage
              src="/picture.png"
              className="w-50 h-50 md:w-64 md:h-64 lg:w-80 lg:h-80 rounded-full object-cover drop-shadow-[0_0_10px_var(--foreground)]"
            />
            <AvatarFallback>
              A smiling picture of Jhack in a formal outfit, slightly tilted
              towards the right.
            </AvatarFallback>
          </Avatar>
        </div>
        <div className="flex flex-col justify-center">
          <p className="text-3xl md:text-4xl lg:text-5xl mt-5 md:mt-0">
            {" "}
            Hi, I&apos;m Jhack{" "}
          </p>
          <p className="opacity-70 text-sm md:text-base pt-2">
            {" "}
            Your friendly neighborhood Software Engineer from the Philippines!
          </p>
          <p className="text-sm md:text-base lg:text-lg pt-6">
            {" "}
            I make stuff that works, probably looks good, and makes life a
            little easier.
          </p>
          <p className="text-sm md:text-base lg:text-lg">
            {" "}
            Got an idea you&apos;d like to bring to life? Click the button below
            and let&apos;s make it happen.
          </p>
          <div className="flex gap-4">
            <Link href="/contact" className="pt-4">
              <Button className="drop-shadow-[0_0_2px_var(--foreground)] hover:drop-shadow-[0_0_6px_var(--foreground)] hover:scale-105">
                {" "}
                Contact Me{" "}
              </Button>
            </Link>
            <Link href="/resume.pdf" download={true} className="pt-4">
              <Button className="bg-[var(--cambridge-blue)] hover:bg-[var(--cambridge-blue)] drop-shadow-[0_0_2px_var(--foreground)] hover:drop-shadow-[0_0_6px_var(--foreground)] hover:scale-105">
                {" "}
                Download Resume{" "}
              </Button>
            </Link>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
