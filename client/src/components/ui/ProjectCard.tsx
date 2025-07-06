import Image from "next/image";
import Link from "next/link";
import SkillPill from "./SkillPill";
import { Button } from "@/components/ui/button";

import type { ProjectProps } from "@/app/projects/data";

export default function ProjectCard({
  projectTitle,
  projectImages,
  projectDesc,
  projectDesc2,
  projectAlt,
  projectTechs,
  projectLink,
  projectSlug,
}: ProjectProps) {
  return (
    <div
      id="project-card"
      className="rounded-2xl h-full w-full md:max-w-[320px] lg:max-w-[380px] bg-[var(--card-background)] p-4 shadow hover:drop-shadow-[0_0_6px_var(--foreground)] transition-all duration-200"
    >
      <Image
        src={projectImages[0]}
        width={500}
        height={200}
        alt={projectAlt}
        className="rounded-xl object-cover w-full h-[200px] aspect-square-[4/3]"
      />

      <p className="text-xl font-bold mt-4 text-[var(--foreground)]">
        {projectTitle}
      </p>

      <p className="mt-2 text-sm text-[var(--foreground)]">{projectDesc}</p>

      <p className="mt-2 text-sm text-[var(--foreground)]">{projectDesc2}</p>

      <div className="flex justify-between">
        <Link href={`/projects/${projectSlug}`}>
          <Button className="mt-4 bg-[var(--hookers-green)] text-[var(--foreground)] hover:bg-[var(--cambridge-blue)] hover:drop-shadow-[0_0_6px_var(--hookers-green)] hover:scale-105 transition-all duration-500]">
            Read More
          </Button>
        </Link>
        {projectLink ? (
          <Link href={projectLink}>
            <Button className="mt-4 bg-[var(--foreground)] text-[var(--background)]  hover:drop-shadow-[0_0_6px_var(--foreground)] hover:scale-105 transition-all duration-500]">
              Visit
            </Button>
          </Link>
        ) : (
          <></>
        )}
      </div>

      <div className="flex flex-wrap gap-1 mt-10">
        {projectTechs.map((element) => (
          <SkillPill
            key={element}
            width={12}
            height={12}
            className="text-sm"
            name={element}
          ></SkillPill>
        ))}
      </div>
    </div>
  );
}
