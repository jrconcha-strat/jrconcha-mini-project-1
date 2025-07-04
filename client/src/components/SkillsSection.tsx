"use client";
import SkillPill from "@/components/ui/SkillPill";
import { motion } from "framer-motion";

export default function SkillsSection() {
  return (
    <motion.div
      id="skills-section"
      // initial={{ opacity: 0 }}
      //   whileInView={{ opacity: 1 }}
      //   transition={{ duration: 2 }}
      //   viewport={{ once: true, amount: 0.5 }}
      className="flex flex-auto flex-col items-center w-full py-8 sm:py-10 md:py-12 lg:py-16"
    >
      <p className="text-3xl lg:text-4xl mt-4 text-center"> Skills & Technologies</p>
      <p className="opacity-70 mt-4 text-sm lg:text-base text-center">
        {" "}
        These are the languages, frameworks, and tools I&apos;ve worked with
        recently or had experience with — and I&apos;m always learning
        more!{" "}
      </p>
      <div className="flex flex-col gap-y-10 md:flex-row md:gap-x-10 mt-10 mx-auto w-full">
        <div className="flex-1 flex flex-col items-center px-4 py-4 outline-2 rounded-3xl bg-[var(--card-background)] hover:drop-shadow-[0_0_3px_var(--foreground)] duration-150">
          <p className="text-xl lg:text-2xl"> Frontend </p>
          <div className="flex flex-wrap gap-4 mt-6 justify-center">
            <SkillPill image="/css.png" name="CSS"></SkillPill>
            <SkillPill image="/html.png" name="HTML"></SkillPill>
            <SkillPill image="/javascript.png" name="JavaScript"></SkillPill>
            <SkillPill image="/react.png" name="React"></SkillPill>
            <SkillPill image="/nextjs.png" name="Next.js"></SkillPill>
            <SkillPill image="/flutter.png" name="Flutter"></SkillPill>
          </div>
        </div>
        <div className="flex-1 flex flex-col items-center px-4 py-4 outline-2 rounded-3xl bg-[var(--card-background)] hover:drop-shadow-[0_0_3px_var(--foreground)] duration-150">
          <p className="text-xl lg:text-2xl"> Backend </p>
          <div className="flex flex-wrap gap-4 mt-6 justify-center">
            <SkillPill image="/node-js.png" name="Node.js"></SkillPill>
            <SkillPill image="/express.png" name="Express.js"></SkillPill>
            <SkillPill image="/django.png" name="Django"></SkillPill>
            <SkillPill image="/djangorest.png" name="Django Rest"></SkillPill>
            <SkillPill image="/mariadb.png" name="MariaDB"></SkillPill>
            <SkillPill image="/firebase.png" name="Firebase"></SkillPill>
          </div>
        </div>
        <div className="flex-1 flex flex-col items-center px-4 py-4 outline-2 rounded-3xl bg-[var(--card-background)] hover:drop-shadow-[0_0_3px_var(--foreground)] duration-150">
          <p className="text-xl lg:text-2xl"> Others </p>
          <div className="flex flex-wrap gap-4 mt-6 justify-center">
            <SkillPill image="/figma.png" name="Figma"></SkillPill>
            <SkillPill image="/bruno.png" name="Bruno"></SkillPill>
            <SkillPill image="/git.png" name="Git"></SkillPill>
            <SkillPill image="/github.png" name="GitHub"></SkillPill>
            <SkillPill image="/canva.png" name="Canva"></SkillPill>
            <SkillPill image="/vercel.svg" name="Vercel"></SkillPill>
            <SkillPill image="/pythonanywhere.png" name="Pythonanywhere"></SkillPill>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
