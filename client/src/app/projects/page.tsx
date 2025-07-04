"use client";
import ProjectCard from "@/components/ui/ProjectCard";
import { projects } from "./data";
import { motion } from "framer-motion";

export default function Projects() {
  return (
    <div className="h-full flex flex-col items-center">
      <motion.div
        className="w-full max-w-[1200px]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
      >
        <p className="text-3xl lg:text-6xl mt-4 font-semibold">My Projects.</p>
        <p className="opacity-70 mt-4 text-sm lg:text-base">
          {" "}
          Here are a few projects of mine that demonstrate my experience with
          development using various modern technologies.{" "}
        </p>
        {/* Projects Section */}
        <div className="flex flex-wrap gap-5 mt-10 lg:flex-row">
          {Object.keys(projects).map((projectKey) => (
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 2 }}
              viewport={{ once: true, amount: 0.1 }}
              key={projects[projectKey].projectTitle}
            >
              <ProjectCard {...projects[projectKey]} />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
