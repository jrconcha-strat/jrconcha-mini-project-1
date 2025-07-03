"use client";

import { faBars } from "@fortawesome/free-solid-svg-icons";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
  DropdownMenuLabel,
} from "@/components/ui/dropdown-menu";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { usePathname } from "next/navigation";
import Link from "next/link";

const pages: { label: string; slug: string }[] = [
  { label: "Home", slug: "" },
  { label: "About Me", slug: "about" },
  { label: "Projects", slug: "projects" },
  { label: "Contact Me", slug: "contact" },
];

export function DropDownNavMenu() {
  const pathname = usePathname();
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="bg-background rounded-full active:bg-[--hookers-green] w-[35px] h-[35px]">
          <FontAwesomeIcon size="xl" icon={faBars} className="" />
      </DropdownMenuTrigger>
      <DropdownMenuContent className="bg-background gap-2">
        {pages.map((item) => {
          const isActive = pathname === `/${item.slug}`;
          // console.log(`Current path: ${pathname} \nCurrent Item Slug : /${item.slug} \nEquality ${isActive}`);

          return (
            <DropdownMenuLabel key={item.label} className={`active:bg-[var(--hookers-green)] rounded-xs px-2 py-1 ${isActive ? "bg-[var(--hookers-green)] " : ""}`}>
              {" "}
              <Link href={item.slug ? item.slug : "/"}>{item.label}</Link>
            </DropdownMenuLabel>
          );
        })}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export default function NavigationMenuCaller() {
  const pathname = usePathname();
  return (
    <NavigationMenu>
      <NavigationMenuList>
        {pages.map((item) => {
          const isActive = pathname === `/${item.slug}`;
          // console.log(`Current path: ${pathname} \nCurrent Item Slug : /${item.slug} \nEquality ${isActive}`);

          return (
            <NavigationMenuItem key={item.label}>
              <NavigationMenuLink
                href={item.slug ? item.slug : "/"}
                data-active={isActive === true ? "true" : "false"}
              >
                {item.label}
              </NavigationMenuLink>
            </NavigationMenuItem>
          );
        })}
      </NavigationMenuList>
    </NavigationMenu>
  );
}
