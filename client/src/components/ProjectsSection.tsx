"use client";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { projects } from "@/app/projects/data.ts";
import ProjectCard from "./ui/ProjectCard";

export default function ProjectsSection() {
  return (
    <motion.div
      id="projects-section"
      // initial={{ opacity: 0 }}
      //   whileInView={{ opacity: 1 }}
      //   transition={{ duration: 2 }}
      //   viewport={{ once: true, amount: 0.5 }}
      className="flex flex-auto flex-col items-center w-full py-8 sm:py-10 md:py-12 lg:py-16"
    >
      <p className="text-3xl lg:text-4xl mt-4"> Projects</p>
      <p className="opacity-70 mt-4 text-sm lg:text-base text-center">
        {" "}
        Here are some of the projects I&apos;ve made. Each one reflects my
        journey as a developer — learning new tools, refining my skills, and
        building things that I love.{" "}
      </p>
      {/* Projects Section */}
      <div className="flex flex-wrap gap-x-5 gap-y-10 mt-10 lg:flex-row lg:gap-x-10">

        {projects.slice(0, 2).map((project) => (
          <ProjectCard key={project.projectTitle} {...project} />
        ))}

      </div>
      <Link href="/projects">
        <Button className="mt-6 lg:mt-10 rounded-full outline-[var(--foreground)] outline-solid outline-1 text-[var(--foreground)] bg-[var(--background)] hover:bg-[var(--background)] hover:drop-shadow-[0_0_6px_var(--ash-gray)] hover:scale-105 transition-all duration-500">
          See More
        </Button>
      </Link>
    </motion.div>
  );
}
