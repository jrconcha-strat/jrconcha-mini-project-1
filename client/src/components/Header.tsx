"use client";
import Image from "next/image";
import { usePathname } from "next/navigation";
import styles from "./Header.module.css";
import LogoImage from "public/light-temp-logo.png";
//import Link from "next/link";

const pages: { label: string; slug: string }[] = [
  { label: "Home", slug: "" },
  { label: "About Me", slug: "about" },
  { label: "Projects", slug: "projects" },
  { label: "Contact Me", slug: "contact" },
];

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="h-[80px] bg-[var(--dark-slate-gray)] p-4 shadow-md">
      <div className="navbar flex flex-[1_1_auto] justify-between h-full mx-10 items-center">
        <a className="logo" href="#">
          <Image src={LogoImage} height={50} alt="Logo"></Image>
        </a>
        <ul className="navList flex flex-[0_1_auto] gap-x-[2rem]">
          {pages.map((item) => {
            const isActive = pathname === `/${item.slug}`;

            return (
              <li
                className={`${isActive ? styles.navItemActive : styles.navItem}`}
                key={item.label}
              >
                <a href={item.slug ? item.slug : "/"}>{item.label}</a>
              </li>
            );
          })}
        </ul>
      </div>
    </header>
  );
}
