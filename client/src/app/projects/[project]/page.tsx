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
import { Button } from "@/components/ui/button";

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
            className="flex grow-1 justify-center mt-10"
          >
            <CarouselContent className="w-full ml-0">
              {projData.projectImages.map((element, index) => (
                <CarouselItem
                  key={`${projData.projectSlug}-${index}`}
                  className="flex grow-1 h-[200px] w-[400px] md:h-[300px] md:w-[600px] lg:h-[400px] lg:w-[800px] relative max-w-[900px] border-2 rounded-sm"
                >
                  <Image
                    src={element}
                    alt={element}
                    sizes="100vw"
                    fill={true}
                    style={{ objectFit: "cover", aspectRatio: 16 / 9 }}
                    className="rounded-sm"
                  />
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
          <p className="text-2xl lg:text-3xl font-semibold">
            {" "}
            {projData.projectTitle}
          </p>
          <p className="mt-3 text-sm lg:text-base">
            {" "}
            {projData.projectExtendedDesc}
          </p>

          <p className="mt-6 font-semibold text-sm lg:text-xl">
            {" "}
            My Roles in this Project:
          </p>
          <div className="flex flex-wrap gap-2 mt-2">
            {projData.projectRoles.map((element) => (
              <SkillPill
                key={element}
                width={12}
                height={12}
                className="text-sm lg:text-base bg-[var(--cambridge-blue)]"
                name={element}
              ></SkillPill>
            ))}
          </div>
          <p className="mt-6 font-semibold text-sm lg:text-xl">
            {" "}
            Technologies Used:
          </p>
          <div className="flex flex-wrap gap-2 mt-2">
            {projData.projectTechs.map((element) => (
              <SkillPill
                key={element}
                width={12}
                height={12}
                className="text-sm lg:text-base bg-[var(--charcoal)]"
                name={element}
              ></SkillPill>
            ))}
          </div>
        </div>
        {/* Call to Action */}
        {projData.projectLink === "" ? <></>: (
          <div className="flex mt-10 w-full bg-[url(/cta.jpg)] bg-cover rounded-sm px-4 py-8 md:px-8">
            <div className="flex flex-col grow-1">
              <p className="font-semibold text-2xl md:text-3xl">
                See for Yourself{" "}
              </p>
              <p className="text-base opacity-70 md:text-xl">
                Don&apos;t let me stop you.
              </p>
              <div>
                <Button className="mt-4 p-2 text-xs md:text-sm w-full md:max-w-[150px] bg-[var(--foreground)] text-[var(--background)]  drop-shadow-[0_0_6px_var(--foreground)] hover:scale-105 transition-all duration-500]">
                  Check it out!
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
