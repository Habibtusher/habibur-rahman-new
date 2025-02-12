"use client";

import React, { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { Menu, MenuItem, ProductItem } from "./ui/navbar-menu";
import { useTheme } from "next-themes";
import { IconMenu2, IconX } from "@tabler/icons-react"; // Import Tabler Icons

export function NavbarDemo() {
  return (
    <div className="relative w-full flex items-center justify-center">
      <Navbar className="md:top-2" />
    </div>
  );
}

function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [isOpen, setIsOpen] = useState(false); // Mobile menu state

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className={cn("fixed top-4 inset-x-0 max-w-2xl mx-auto z-50", className)}>
      {/* Mobile Navbar */}
      <div className="sm:hidden flex items-center justify-between px-4 py-2 bg-white dark:bg-black shadow-lg rounded-lg">
        <button onClick={() => setIsOpen(!isOpen)} className="p-2">
          {isOpen ? <IconX size={24} /> : <IconMenu2 size={24} />}
        </button>
        <button onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
          {theme === "dark" ? "🌞" : "🌙"}
        </button>
      </div>

      {/* Full Navbar (Hidden on small screens) */}
      <div className="hidden sm:flex justify-center items-center">
        <Menu setActive={setActive}>
          <MenuItem setActive={setActive} active={active} item="Home" href="/" />
          <MenuItem setActive={setActive} active={active} item="Projects" href="/projects">
            <div className="text-sm grid grid-cols-2 gap-10 p-4">
              <ProductItem
                title="Algochurn"
                href="https://algochurn.com"
                src="https://assets.aceternity.com/demos/algochurn.webp"
                description="Prepare for tech interviews like never before."
              />
              <ProductItem
                title="Tailwind Master Kit"
                href="https://tailwindmasterkit.com"
                src="https://assets.aceternity.com/demos/tailwindmasterkit.webp"
                description="Production ready Tailwind CSS components for your next project"
              />
              <ProductItem
                title="Moonbeam"
                href="https://gomoonbeam.com"
                src="https://assets.aceternity.com/demos/Screenshot+2024-02-21+at+11.51.31%E2%80%AFPM.png"
                description="Never write from scratch again. Go from idea to blog in minutes."
              />
              <ProductItem
                title="Rogue"
                href="https://userogue.com"
                src="https://assets.aceternity.com/demos/Screenshot+2024-02-21+at+11.47.07%E2%80%AFPM.png"
                description="Respond to government RFPs, RFIs and RFQs 10x faster using AI"
              />
            </div>
          </MenuItem>
          <MenuItem setActive={setActive} active={active} item="Blog" href="/blogs" />
          <MenuItem setActive={setActive} active={active} item="Contact" href="/contact" />
          <button onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
            {theme === "dark" ? "🌞 Light Mode" : "🌙 Dark Mode"}
          </button>
        </Menu>
      </div>

      {/* Mobile Menu Drawer */}
      {isOpen && (
        <div className="sm:hidden absolute top-14 left-0 w-full bg-white dark:bg-black p-4 shadow-lg rounded-lg">
          <MenuItem setActive={setActive} active={active} item="Home" href="/" />
          <MenuItem setActive={setActive} active={active} item="Projects" href="/projects" />
          <MenuItem setActive={setActive} active={active} item="Blog" href="/blogs" />
          <MenuItem setActive={setActive} active={active} item="Contact" href="/contact" />
          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="w-full text-left mt-2"
          >
            {theme === "dark" ? "🌞 Light Mode" : "🌙 Dark Mode"}
          </button>
        </div>
      )}
    </div>
  );
}
