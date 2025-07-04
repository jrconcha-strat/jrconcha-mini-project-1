// app/projects/data.ts

export type ProjectProps = {
  projectImages: string[];
  projectTitle: string;
  projectDesc: string;
  projectDesc2: string;
  projectAlt: string;
  projectTechs: string[];
  projectLink: string;
  projectSlug: string;
  projectRoles: string[];
  projectExtendedDesc: string;
};

export const projects: { [key: string]: ProjectProps } = {
  analytiqa: {
    projectTitle: "Analytiqa",
    projectImages: ["/analytiqa.png", "/analytiqa2.jpg", "/analytiqa3.jpg", "/analytiqa4.jpg", "/analytiqa5.jpg"],
    projectAlt: "Landing page of Analytiqa website",
    projectDesc:
      "Analytiqa is a data report generator built with Django and Next.js that lets users turn CSV datasets into clean, interactive visualizations.",
    projectDesc2: "Deployed using PythonAnywhere and Vercel.",
    projectTechs: ["Next.js", "Django", "MariaDB", "Vercel", "Pythonanywhere"],
    projectLink: "https://analytiqa-report-generator.vercel.app/home",
    projectSlug: "analytiqa",
    projectRoles: [
      "Backend Developer",
      "Frontend Developer",
      "Project Manager",
      "UI/UX Designer",
    ],
    projectExtendedDesc:
      "Analytiqa is a dynamic data report generator website built with Django and Next.js that empowers users to turn CSV datasets into beautiful, interactive visualizations with ease. I took on the role of both backend and frontend developer—building secure and efficient RESTful APIs, crafting the SQL database schema, and collaborating closely with the UI/UX team to brainstorm ideas and create initial mock-ups. The project is fully deployed using PythonAnywhere for the backend and Vercel for the frontend, offering a smooth and responsive user experience. It’s a great showcase of my skills in Python, Django REST Framework, MySQL, TypeScript, HTML, Tailwind CSS, and Next.js.",
  },
  "paws-n-promises": {
    projectTitle: "Paws and Promises",
    projectImages: ["/pawspromises.png"],
    projectAlt: "Landing page of Paws and Promises website",
    projectDesc:
      "Paws and Promises is a pet adoption and donation platform built for animal welfare organizations to connect with potential pet owners and donors.",
    projectDesc2: "Deployed using PythonAnywhere and Vercel.",
    projectTechs: ["Next.js", "Django", "MariaDB", "Vercel", "Pythonanywhere"],
    projectLink: "https://paws-n-promises-2msa.vercel.app/home",
    projectSlug: "paws-n-promises",
    projectRoles: ["Backend Developer", "Project Manager", "UI/UX Designer"],
    projectExtendedDesc:
      "Paws and Promises is a heartwarming web platform built with Django and Next.js that connects pet shelters with prospective adopters, making the adoption process for stray cats and dogs in Metro Manila easier and more efficient. I contributed as a backend developer, building secure APIs using Django REST Framework to ensure a smooth and safe user experience. I also designed the final UI, collaborated with the team on the SQL database schema, and helped deploy the project using PythonAnywhere and Vercel. This project highlights my skills in Python, Django REST Framework, MySQL, TypeScript, HTML, CSS, Next.js, and project management.",
  },
  "document-routing-system": {
    projectTitle: "Document Routing System ERP Module",
    projectImages: ["/drs.png"],
    projectAlt: "Landing page of the Document Routing System Module",
    projectDesc:
      "An ERP-integrated module - document tracking system that streamlines the routing and management of documents across university departments.",
    projectDesc2: "Deployed using Hostinger.",
    projectTechs: ["Laravel", "MariaDB", "PHP", "HTML", "CSS"],
    projectLink: "",
    projectSlug: "document-routing-system",
    projectRoles: ["Business Analyst"],
    projectExtendedDesc:
      "The Document Routing System (DRS) is a Laravel-based module integrated into a university ERP system that streamlines the tracking and routing of documents across departments, enabling accurate and efficient handling of high-volume document workflows. As a Business Analyst, I contributed to the system’s development by conducting in-depth business process analysis to gather requirements, ensuring alignment between client needs and development outputs. I also helped design and execute test cases for quality assurance and contributed to the creation and integration of the database model and schema. This project demonstrates my skills in business and requirements analysis, along with technical experience in HTML, CSS, PHP, XAMPP, and MariaDB.",
  },
  "plm-app": {
    projectTitle: "PLM App",
    projectImages: ["/plmapp2.png"],
    projectAlt: "An image of the login screen of the PLM App",
    projectDesc:
      "The PLM Mobile is the Official mobile application of Pamantasan ng Lungsod ng Maynila. It is designed to provide easy access to important information for students, faculty, staff and visitors.",
    projectDesc2: "Deployed on local servers.",
    projectTechs: ["Dart", "Flutter", "Webhost", "MariaDB", "PHP"],
    projectLink: "",
    projectSlug: "plm-app",
    projectRoles: ["Developer", "Tester"],
    projectExtendedDesc:
      "The PLM Mobile Application is the official app of Pamantasan ng Lungsod ng Maynila, developed using Flutter and PHP to provide students, faculty, staff, and visitors with convenient access to a wide range of university-related services. As a Flutter developer, I contributed to enhancing the existing application by implementing new features in my assigned submodule—significantly improving both user experience and accessibility. I also debugged multiple system issues, resulting in smoother and more efficient app performance. This project highlights my skills in Dart, Flutter, PHP, MariaDB, and web hosting.",
  },
  "project-v": {
    projectTitle: "Project V",
    projectImages: ["/valdo.png"],
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
    projectRoles: ["Project Manager", "Developer", "Business Analyst"],
    projectExtendedDesc:
      "Project Valdopena, or Project V, is a Flutter-based e-commerce mobile application built for Android that allows customers to conveniently browse and purchase a wide range of eye care products and solutions. I led the development of the app for an optical clinic, handling everything from gathering requirements to designing and implementing the user interface, user experience, and overall functionality. I also designed and structured the Firebase database schema and model using Cloud Firestore to ensure smooth data management and real-time syncing. This project showcases my expertise in Dart, Flutter, Firebase, Cloud Firestore, web hosting, and requirements gathering.",
  },
  "stellarsynth-compiler": {
    projectTitle: "StellarSynth Compiler",
    projectImages: ["/stellarsynth.png",],
    projectAlt: "Landing page of the Document Routing System Module",
    projectDesc:
      "StellarSynth Compiler is a customized compiler utilizing a custom programming language based on C++ Syntax with some inspirations of Python.",
    projectDesc2: "Covering the Lexical, Syntactical, Semantic and Code Generator phases.",
    projectTechs: ["Python", "CTKinter", "C++"],
    projectLink: "",
    projectSlug: "stellarsynth-compiler",
    projectRoles: ["Project Manager", "Developer"],
    projectExtendedDesc:
      "StellarSynth Compiler is a custom-built compiler designed around a proprietary programming language that blends C++-style syntax with Python-inspired elements. I led the development of the language and compiler, creating the lexical parser and code generator while also contributing to the syntax and semantic parsing logic. Additionally, I designed and built the user interface using Python and CustomTkinter, ensuring a clean and intuitive experience for users. This project reflects my strengths in Python, C++, UI/UX design, and leadership in software development.",
  },
};
