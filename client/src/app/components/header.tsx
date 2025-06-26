"use client";
import Image from "next/image";
import styles from './Header.module.css';

export default function Header() {
  return (
    <header className="h-[80px] bg-[var(--dark-slate-gray)] p-4 shadow-md">
      <div className="navbar flex flex-[1_1_auto] justify-between h-full mx-10 items-center">
        <a className="logo">
          <Image src="" alt="Logo"></Image>
        </a>
        <ul className="navList flex flex-[0_1_auto] gap-x-[2rem]">
          <li className={styles.navItem}><a href="">Home</a></li>
          <li className={styles.navItem}><a href="">About Me</a></li>
          <li className={styles.navItem}><a href="">Skills & Technologies</a></li>
          <li className={styles.navItem}><a href="">Projects</a></li>
          <li className={styles.navItem}><a href="">Contact Me</a></li>
        </ul>
      </div>
    </header>
  );
}
