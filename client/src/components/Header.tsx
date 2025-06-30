"use client";
import Image from "next/image";
import styles from "./Header.module.css";

const pages: string[] = [
  "Home",
  "About Me",
  "Skills & Technologies",
  "Projects",
  "Contact Me",
];

const navItems = pages.map((item) => (
  <li className={styles.navItem} key={item}>
    <a href="">{item}</a>
  </li>
));

export default function Header() {
  return (
    <header className="h-[80px] bg-[var(--dark-slate-gray)] p-4 shadow-md">
      <div className="navbar flex flex-[1_1_auto] justify-between h-full mx-10 items-center">
        <a className="logo">
          <Image
            src="@/../public/vercel/globe.svg"
            width={50}
            height={50}
            alt="Logo"
          ></Image>
        </a>
        <ul className="navList flex flex-[0_1_auto] gap-x-[2rem]">
          {navItems}
        </ul>
      </div>
    </header>
  );
}
