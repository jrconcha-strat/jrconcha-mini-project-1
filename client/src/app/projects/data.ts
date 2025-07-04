// app/projects/data.ts

import type { ProjectProps } from "@/components/ui/ProjectCard";

export const projects: ProjectProps[] = [
  {
    projectTitle: "Analytiqa",
    projectImage: "/analytiqa.png",
    projectAlt: "Landing page of Analytiqa website",
    projectDesc:
      "Analytiqa is a data report generator built with Django and Next.js that lets users turn CSV datasets into clean, interactive visualizations.",
    projectDesc2: "Deployed using PythonAnywhere and Vercel.",
    projectTechs: ["Next.js", "Django", "MariaDB", "Vercel", "Pythonanywhere"],
    projectLink: "https://analytiqa-report-generator.vercel.app/home",
  },
  {
    projectTitle: "Paws and Promises",
    projectImage: "/pawspromises.png",
    projectAlt: "Landing page of Paws and Promises website",
    projectDesc:
      "Paws and Promises is a pet adoption and donation platform built for animal welfare organizations to connect with potential pet owners and donors.",
    projectDesc2: "Deployed using PythonAnywhere and Vercel.",
    projectTechs: ["Next.js", "Django", "MariaDB", "Vercel", "Pythonanywhere"],
    projectLink: "https://paws-n-promises-2msa.vercel.app/home",
  },
    {
    projectTitle: "Document Routing System ERP Module",
    projectImage: "/drs.png",
    projectAlt: "Landing page of the Document Routing System Module",
    projectDesc:
      "The DRS is a Laravel-based document tracking system that streamlines the routing and management of documents across university departments, integrating seamlessly with ERP modules to support both student and employee services.",
    projectDesc2: "Deployed using Hostinger",
    projectTechs: ["Laravel", "MariaDB", "PHP", "HTML", "CSS"],
    projectLink: "",
  },
  
];
