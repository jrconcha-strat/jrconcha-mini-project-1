import Image from "next/image";
import SkillPill from "./ui/SkillPill";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function ProjectsSection() {
  return (
    <div
      id="projects-section"
      className="flex flex-auto flex-col items-center w-full py-8 sm:py-10 md:py-12 lg:py-16"
    >
      <p className="text-4xl mt-4"> Projects</p>
      <p className="opacity-70 mt-4 text-center">
        {" "}
        Here are some of the projects I&apos;ve made. Each one reflects my
        journey as a developer — learning new tools, refining my skills, and
        building things that I love.{" "}
      </p>
      {/* Projects Section */}
      <div className="flex flex-col gap-x-15 gap-y-10 mt-10 mx-10 lg:flex-row lg:gap-x-10">
        <div
          id="project-card"
          className="rounded-2xl w-full max-w-[500px] bg-[var(--card-background)] p-4 shadow hover:drop-shadow-[0_0_6px_var(--foreground)] transition-all duration-200"
        >
        <Image
            src="/analytiqa.png"
            width={500}
            height={200}
            alt="Landing page of Analytiqa website"
            className="rounded-xl object-fill w-full h-[200px]"
          />

          <p className="text-xl font-semibold mt-4 text-[var(--foreground)]">
            Analytiqa
          </p>

          <p className="mt-2 text-sm text-[var(--foreground)] opacity-70">
            Analytiqa is a data report generator built with Django and Next.js
            that lets users turn CSV datasets into clean, interactive
            visualizations.
          </p>

          <p className="mt-2 text-sm text-[var(--foreground)] opacity-70">
            Deployed using PythonAnywhere and Vercel.
          </p>
          <Link href="https://analytiqa-report-generator.vercel.app/home">
            <Button className="mt-4 bg-[var(--foreground)] text-[var(--background)]  hover:drop-shadow-[0_0_6px_var(--foreground)] hover:scale-105 transition-all duration-500]">
              Visit
            </Button>
          </Link>

          <div className="flex flex-wrap gap-2 mt-10">
            <SkillPill
              width={12}
              height={12}
              className="text-sm"
              name="Next.js"
            />
            <SkillPill
              width={12}
              height={12}
              className="text-sm"
              name="Django"
            />
            <SkillPill
              width={12}
              height={12}
              className="text-sm"
              name="MariaDB"
            />
            <SkillPill
              width={12}
              height={12}
              className="text-sm"
              name="Vercel"
            />
            <SkillPill
              width={12}
              height={12}
              className="text-sm"
              name="Pythonanywhere"
            />
          </div>
        </div>
        <div
          id="project-card"
          className="rounded-2xl w-full max-w-[500px] bg-[var(--card-background)] p-4 shadow hover:drop-shadow-[0_0_6px_var(--ash-gray)] transition-all duration-200"
        >
          <Image
            src="/pawspromises.png"
            width={500}
            height={200}
            alt="Landing page of Paws and Promises website"
            className="rounded-xl object-fill w-full h-[200px]"
          />

          <p className="text-xl font-semibold mt-4 text-[var(--foreground)]">
            Paws and Promises
          </p>

          <p className="mt-2 text-sm text-[var(--foreground)] opacity-70">
            Analytiqa is a data report generator built with Django and Next.js
            that lets users turn CSV datasets into clean, interactive
            visualizations.
          </p>

          <p className="mt-2 text-sm text-[var(--foreground)] opacity-70">
            Deployed using PythonAnywhere and Vercel.
          </p>
          <Link href="https://paws-n-promises-2msa.vercel.app/home">
            <Button className="mt-4 bg-[var(--foreground)] text-[var(--background)] hover:drop-shadow-[0_0_6px_var(--foreground)] hover:scale-105 transition-all duration-500]">
              Visit
            </Button>
          </Link>

          <div className="flex flex-wrap gap-2 mt-10">
            <SkillPill
              width={12}
              height={12}
              className="text-sm"
              name="Next.js"
            />
            <SkillPill
              width={12}
              height={12}
              className="text-sm"
              name="Django"
            />
            <SkillPill
              width={12}
              height={12}
              className="text-sm"
              name="MariaDB"
            />
            <SkillPill
              width={12}
              height={12}
              className="text-sm"
              name="Vercel"
            />
            <SkillPill
              width={12}
              height={12}
              className="text-sm"
              name="Pythonanywhere"
            />
          </div>
        </div>
      </div>
      <Link href="/projects">
        <Button className="mt-6 lg:mt-10 rounded-full outline-[var(--foreground)] outline-solid outline-1 text-[var(--foreground)] bg-[var(--background)] hover:bg-[var(--background)] hover:drop-shadow-[0_0_6px_var(--ash-gray)] hover:scale-105 transition-all duration-500">
          See More
        </Button>
      </Link>
    </div>
  );
}
