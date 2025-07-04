import Image from "next/image";
import Link from "next/link";
import SkillPill from "./SkillPill";
import {Button} from "@/components/ui/button";

export type ProjectProps = {
    projectImage: string,
    projectTitle: string,
    projectDesc: string,
    projectDesc2: string,
    projectAlt: string,
    projectTechs: string[],
    projectLink: string,
}

export default function ProjectCard({projectTitle, projectImage, projectDesc, projectDesc2, projectAlt, projectTechs} : ProjectProps){
    return (<div
          id="project-card"
          className="rounded-2xl w-full md:max-w-[320px] lg:max-w-[380px] bg-[var(--card-background)] p-4 shadow hover:drop-shadow-[0_0_6px_var(--foreground)] transition-all duration-200"
        >
          <Image
            src={projectImage}
            width={500}
            height={200}
            alt={projectAlt}
            className="rounded-xl object-cover w-full h-[200px] aspect-square-[4/3]"
          />

          <p className="text-xl font-bold mt-4 text-[var(--foreground)]">
            {projectTitle}
          </p>

          <p className="mt-2 text-sm text-[var(--foreground)]">
            {projectDesc}
          </p>

          <p className="mt-2 text-sm text-[var(--foreground)]">
            {projectDesc2}
          </p>
          <Link href="https://analytiqa-report-generator.vercel.app/home">
            <Button className="mt-4 bg-[var(--foreground)] text-[var(--background)]  hover:drop-shadow-[0_0_6px_var(--foreground)] hover:scale-105 transition-all duration-500]">
              Visit
            </Button>
          </Link>

          <div className="flex flex-wrap gap-1 mt-10">
            {projectTechs.map((element) => <SkillPill key={element} width={12} height={12} className="text-sm" name={element}></SkillPill>)}
          </div>
        </div>);
}