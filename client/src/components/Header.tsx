"use client";
import Image from "next/image";
import LogoImage from "public/light-temp-logo.png";
import NavigationMenuCaller from "./ui/NavigationMenuCaller";
import { DropDownNavMenu } from "./ui/NavigationMenuCaller";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function Header() {
  const [isDesktop, setDesktop] = useState(false);
  const [isTablet, setTablet] = useState(false);
  const [isMobile, setMobile] = useState(false);

  useEffect(() => {
    const updateMedia = () => {
      setDesktop(window.innerWidth > 1024);
      setTablet(window.innerWidth > 768 && window.innerWidth < 1024);
      setMobile(window.innerWidth > 360 && window.innerWidth < 768);
    };
    updateMedia();
    window.addEventListener("resize", updateMedia);
    return () => window.removeEventListener("resize", updateMedia);
  });

  return (
    <header className="h-[80px] bg-[var(--background)] filter brightness-115 px-6 md:px-12 lg:px-20 shadow-md sticky top-0 z-50">
      <div className="navbar flex flex-[1_1_auto] justify-between h-full items-center">
        <Link className="logo" href={{ pathname: "/" }}>
          <Image
            src={LogoImage}
            height={50}
            alt="Logo"
            className="inline-block transition duration-300 hover:drop-shadow-[0_0_6px_var(--ash-gray)] min-w-[100px]"
          ></Image>
        </Link>
        {(isTablet || isDesktop) && (
          <NavigationMenuCaller></NavigationMenuCaller>
        )}
        {isMobile && <DropDownNavMenu></DropDownNavMenu>}
      </div>
    </header>
  );
}
