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
        className="h-full flex flex-auto justify-center gap-x-15"
      >
        {" "}
        <div className="flex flex-col items-center justify-center">
          <Avatar className="w-50 h-50 lg:w-72 lg:h-72">
            <AvatarImage
              src="/picture.png"
              className="w-full h-full rounded-full object-cover drop-shadow-[0_0_10px_var(--foreground)]"
            />
            <AvatarFallback>
              A smiling picture of Jhack in a formal outfit, slightly tilted
              towards the right.
            </AvatarFallback>
          </Avatar>
        </div>
        <div className="flex flex-col justify-center">
          <p className="text-5xl"> Hi, I&apos;m Jhack </p>
          <p className="opacity-70 pt-2">
            {" "}
            Your friendly neighborhood Software Engineer from the Philippines!
          </p>
          <p className="opacity-100 pt-6">
            {" "}
            I make stuff that works, probably looks good, and makes life a
            little easier.
          </p>
          <p className="opacity-100">
            {" "}
            Got an idea you&apos;d like to bring to life? Click the button below
            and let&apos;s make it happen.
          </p>
          <Link href="/contact" className="pt-4">
            <Button className="hover:drop-shadow-[0_0_6px_var(--foreground)] hover:scale-105">
              {" "}
              Contact Me{" "}
            </Button>
          </Link>
        </div>
      </motion.div>
    </div>
  );
}
