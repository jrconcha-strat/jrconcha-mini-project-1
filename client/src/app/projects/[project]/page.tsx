"use client";
import { useParams } from "next/navigation";
import Link from "next/link";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  // CarouselNext,
  // CarouselPrevious,
} from "@/components/ui/carousel";
import { projects } from "../data";
import Image from "next/image";
import { type CarouselApi } from "@/components/ui/carousel";
import { useEffect, useState } from "react";
import SkillPill from "@/components/ui/SkillPill";
// import { Button } from "@/components/ui/button";

export default function ProjectPage() {
  const params = useParams();
  const projectSlug: string = params.project as string;
  const projData = projects[projectSlug];

  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  return (
    <div className="h-full flex flex-col items-center">
      <div className="w-full max-w-[1200px]">
        {/* Breadcrumbs */}
        <div className="flex gap-x-2">
          <Link
            href="/projects"
            className="text-xs font-normal hover:drop-shadow-[0_0_3px_var(--foreground)] duration-150"
          >
            {" "}
            PROJECTS{" "}
          </Link>
          <p className="text-xs font-medium"> / </p>
          <p className="text-xs font-medium underline underline-offset-2">
            {" "}
            {projectSlug.toUpperCase()}{" "}
          </p>
        </div>
        {/* Carousel */}
        <div>
          <Carousel
            setApi={setApi}
            className="flex grow-0 justify-center mt-10"
          >
            <CarouselContent>
              {projData.projectImages.map((element, index) => (
                <CarouselItem
                  key={`${projData.projectSlug}-${index}`}
                  className=""
                >
                  <Image
                    width={200}
                    height={200}
                    src={element}
                    alt={element}
                    className="object-cover rounded-sm w-full w-max-[300px]"
                  ></Image>
                </CarouselItem>
              ))}
            </CarouselContent>
            {/* <CarouselPrevious />
          <CarouselNext /> */}
          </Carousel>
          <p className="w-full flex justify-center mt-2 text-xs opacity-35 font-light">
            {current} | {count}
          </p>
        </div>

        {/* Content Body */}
        <div className="mt-5">
          <p className="text-2xl font-semibold"> {projData.projectTitle}</p>
          <p className="mt-3 text-sm"> {projData.projectExtendedDesc}</p>

          <p className="mt-6 font-semibold text-sm">
            {" "}
            My Roles in this Project:
          </p>
          <div className="flex flex-wrap gap-2 mt-2">
            {projData.projectRoles.map((element) => (
              <SkillPill
                key={element}
                width={12}
                height={12}
                className="text-sm bg-[var(--cambridge-blue)]"
                name={element}
              ></SkillPill>
            ))}
          </div>
          <p className="mt-6 font-semibold text-sm"> Technologies Used:</p>
          <div className="flex flex-wrap gap-2 mt-2">
            {projData.projectTechs.map((element) => (
              <SkillPill
                key={element}
                width={12}
                height={12}
                className="text-sm bg-[var(--charcoal)]"
                name={element}
              ></SkillPill>
            ))}
          </div>
        </div>
        {/* Call to Action */}
        {/* <div className="flex justify-center">
          {projData.projectLink === "" ? (
            <Button
              disabled={true}
              className="mt-4 w-full bg-[var(--foreground)] text-[var(--background)]  hover:drop-shadow-[0_0_6px_var(--foreground)] hover:scale-105 transition-all duration-500]"
            >
              Check it out!
            </Button>
          ) : (
            <Button className="mt-4 w-full md:max-w-[150px] bg-[var(--foreground)] text-[var(--background)]  hover:drop-shadow-[0_0_6px_var(--foreground)] hover:scale-105 transition-all duration-500]">
              Check it out!
            </Button>
          )}
        </div> */}
      </div>
    </div>
  );
}
