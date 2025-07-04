// app/projects/data.ts

export type ProjectProps = {
  projectImage: string;
  projectTitle: string;
  projectDesc: string;
  projectDesc2: string;
  projectAlt: string;
  projectTechs: string[];
  projectLink: string;
  projectSlug: string;
};

export const projects: { [key: string]: ProjectProps } = {
  analytiqa: {
    projectTitle: "Analytiqa",
    projectImage: "/analytiqa.png",
    projectAlt: "Landing page of Analytiqa website",
    projectDesc:
      "Analytiqa is a data report generator built with Django and Next.js that lets users turn CSV datasets into clean, interactive visualizations.",
    projectDesc2: "Deployed using PythonAnywhere and Vercel.",
    projectTechs: ["Next.js", "Django", "MariaDB", "Vercel", "Pythonanywhere"],
    projectLink: "https://analytiqa-report-generator.vercel.app/home",
    projectSlug: "analytiqa",
  },
  "paws-n-promises": {
    projectTitle: "Paws and Promises",
    projectImage: "/pawspromises.png",
    projectAlt: "Landing page of Paws and Promises website",
    projectDesc:
      "Paws and Promises is a pet adoption and donation platform built for animal welfare organizations to connect with potential pet owners and donors.",
    projectDesc2: "Deployed using PythonAnywhere and Vercel.",
    projectTechs: ["Next.js", "Django", "MariaDB", "Vercel", "Pythonanywhere"],
    projectLink: "https://paws-n-promises-2msa.vercel.app/home",
    projectSlug: "paws-n-promises",
  },
  "document-routing-system": {
    projectTitle: "Document Routing System ERP Module",
    projectImage: "/drs.png",
    projectAlt: "Landing page of the Document Routing System Module",
    projectDesc:
      "The DRS is a Laravel-based document tracking system that streamlines the routing and management of documents across university departments, integrating seamlessly with ERP modules to support both student and employee services.",
    projectDesc2: "Deployed using Hostinger.",
    projectTechs: ["Laravel", "MariaDB", "PHP", "HTML", "CSS"],
    projectLink: "",
    projectSlug: "document-routing-system",
  },
  "plm-app": {
    projectTitle: "PLM App",
    projectImage: "/plmapp2.png",
    projectAlt: "An image of the login screen of the PLM App",
    projectDesc:
      "The PLM Mobile is the Official mobile application of Pamantasan ng Lungsod ng Maynila. It is designed to provide easy access to important information for students, faculty, staff and visitors.",
    projectDesc2: "Deployed on local servers.",
    projectTechs: ["Dart", "Flutter", "Webhost", "MariaDB", "PHP"],
    projectLink: "",
    projectSlug: "plm-app",
  },
  "project-v": {
    projectTitle: "Project V",
    projectImage: "/valdo.png",
    projectAlt: "A trio-collage of the screens of the Project V app",
    projectDesc:
      "Project Valdopena or Project V in short, is an ecommerce mobile application developed in Flutter for Android devices. It offers a wide selection of eye solutions to customers at the convenience of their mobile devices.",
    projectDesc2: "",
    projectTechs: [
      "Dart",
      "Cloud Firestore",
      "Firebase",
      "Flutter",
      "Webhost",
      "MariaDB",
      "PHP",
    ],
    projectLink: "",
    projectSlug: "project-v",
  },
  "stellarsynth-compiler": {
    projectTitle: "StellarSynth Compiler",
    projectImage: "/stellarsynth.png",
    projectAlt: "Landing page of the Document Routing System Module",
    projectDesc:
      "StellarSynth Compiler is a customized compiler utilizing a custom programming language based on C++ Syntax with some inspirations of Python.",
    projectDesc2: "",
    projectTechs: ["Python", "CTKinter", "C++"],
    projectLink: "",
    projectSlug: "stellarsynth-compiler",
  },
};
