"use client";
import React from "react";

import { IconGlassGin, IconHome, IconMessage, IconUser } from "@tabler/icons-react";
import { FloatingNav } from "./ui/navbar-menu";
export function FloatingNavDemo() {
  const navItems = [
    {
      name: "Home",
      link: "#home",
      icon: <IconHome className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "About",
      link: "#about",
      icon: <IconUser className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
        name: "Skills",
        link: "#skills",
        icon: <IconGlassGin className="h-4 w-4 text-neutral-500 dark:text-white" />,
      },
      {
        name: "Projects",
        link: "#projects",
        icon: <IconGlassGin className="h-4 w-4 text-neutral-500 dark:text-white" />,
      },
      {
        name: "Blogs",
        link: "#blogs",
        icon: <IconGlassGin className="h-4 w-4 text-neutral-500 dark:text-white" />,
      },
    {
      name: "Contact",
      link: "/contact",
      icon: (
        <IconMessage className="h-4 w-4 text-neutral-500 dark:text-white" />
      ),
    },
  ];
  return (
    <div className="relative  w-full">
      <FloatingNav navItems={navItems} />
      {/* <DummyContent /> */}
    </div>
  );
}
const DummyContent = () => {
  return (
    <div className="grid grid-cols-1 h-[40rem] w-full bg-white dark:bg-black relative border border-neutral-200 dark:border-white/[0.2] rounded-md">
      <p className="dark:text-white text-neutral-600 text-center text-4xl mt-40 font-bold">
        Scroll back up to reveal Navbar
      </p>
      <div className="inset-0 absolute bg-grid-black/[0.1] dark:bg-grid-white/[0.2]" />
    </div>
  );
};
