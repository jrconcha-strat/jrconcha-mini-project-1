// import { Button } from "@/components/ui/button";
// import SkillPill from "@/components/ui/SkillPill";
// import Link from "next/link";
// import Image from "next/image";
import ProjectCard from "@/components/ui/ProjectCard";
import { projects } from "./data";

export default function Projects() {
  return (
    <div className="h-full flex flex-col items-center">
      <div className="w-full max-w-[1200px]">
        <p className="text-3xl lg:text-6xl mt-4 font-semibold">My Projects.</p>
        <p className="opacity-70 mt-4 text-sm lg:text-base">
          {" "}
          Here are a few projects of mine that demonstrate my experience with
          development using various modern technologies.{" "}
        </p>
        {/* Projects Section */}
        <div className="flex flex-wrap gap-x-5 gap-y-10 mt-10 lg:flex-row">
          {Object.keys(projects).map((projectKey) => (
            <ProjectCard
              key={projects[projectKey].projectTitle}
              {...projects[projectKey]}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
