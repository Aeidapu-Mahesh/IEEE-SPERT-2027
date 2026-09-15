"use client";

import Link from "next/link";
import { useTheme } from "next-themes";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { ChevronDown, Sun, Moon, Menu, X } from "lucide-react";
import { useState } from "react";
import Image from "next/image";
import { LogoFull } from "@/app/components/Logo";

type NavChild = { name: string; href: string };
type NavItem = {
  name: string;
  href: string;
  children?: NavChild[];
  isImportant?: boolean;
};

const navItems: NavItem[] = [
  {
    name: "About",
    href: "/about",
    children: [
      { name: "About Us", href: "/about/about-us" },
    ],
  },
  { name: "Organizing Committee", href: "/about/organizing-committee" },
  {
    name: "Authors",
    href: "/authors",
    children: [
      { name: "Call for Papers", href: "/authors/call-for-papers" },
    ],
  },
  {
    name: "Travel",
    href: "/travel",
    children: [
      { name: "Visa Information", href: "/travel/visa-information" },
      { name: "Hotel Booking", href: "/travel/hotel-booking" },
      { name: "Tour", href: "/travel/tour" },
      { name: "Food", href: "/travel/food" },
      { name: "Location", href: "/travel/location" },
    ],
  },
  { name: "Sponsorships", href: "/sponsorships" },
  { name: "Contact", href: "/contact" },
];

const Navbar = () => {
  const { theme, setTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);

  const toggleTheme = () => setTheme(theme === "dark" ? "light" : "dark");

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-emerald-900/10 bg-white/85 backdrop-blur-xl dark:border-white/10 dark:bg-slate-950/85">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center">
          <LogoFull className="h-14 w-auto" />
        </Link>

        <button
          onClick={() => setIsOpen((v) => !v)}
          className="text-slate-700 dark:text-slate-200 lg:hidden"
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="size-6" /> : <Menu className="size-6" />}
        </button>

        <div className="hidden items-center gap-5 lg:flex">
          {navItems.map((item, index) => (
            <div key={index} className="relative">
              {item.children ? (
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <button
                      className={`flex items-center gap-1 text-sm font-medium transition-colors ${
                        item.name === "Registration"
                          ? "rounded-full bg-emerald-600 px-4 py-1.5 text-white hover:bg-emerald-700"
                          : "text-slate-700 hover:text-emerald-700 dark:text-slate-200 dark:hover:text-emerald-400"
                      }`}
                    >
                      {item.name}
                      <ChevronDown className="size-4" />
                    </button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="start" className="w-56">
                    {item.children.map((child, childIndex) => (
                      <DropdownMenuItem key={childIndex} asChild>
                        <Link href={child.href} className="text-sm">{child.name}</Link>
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              ) : (
                <Link
                  href={item.href}
                  className={`text-sm font-medium transition-colors ${
                    item.name === "Registration"
                      ? "rounded-full bg-emerald-600 px-4 py-1.5 text-white hover:bg-emerald-700"
                      : item.isImportant
                        ? "rounded-full border border-amber-500/40 bg-amber-500/10 px-3 py-1.5 text-amber-700 hover:border-amber-500/70 hover:bg-amber-500/20 dark:text-amber-400"
                        : "text-slate-700 hover:text-emerald-700 dark:text-slate-200 dark:hover:text-emerald-400"
                  }`}
                >
                  {item.name}
                </Link>
              )}
            </div>
          ))}
        </div>

        <div className="hidden items-center gap-3 lg:flex">
          <button
            onClick={toggleTheme}
            className="rounded-full p-2 text-slate-700 hover:bg-emerald-50 dark:text-slate-200 dark:hover:bg-white/10"
          >
            {theme === "dark" ? <Sun className="size-5" /> : <Moon className="size-5" />}
            <span className="sr-only">Toggle theme</span>
          </button>
          <Link href="https://www.svnit.ac.in/" target="_blank" rel="noopener noreferrer">
            <Image
              src="https://imgs.search.brave.com/WFSCJ_QtSA6WBJR7nTNYbUyHylRSHAaK-XBDbUO7FZc/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly93d3cu/c3ZuaXQuYWMuaW4v/aW1hZ2VzL2xvZ28u/cG5n"
              alt="SVNIT Logo"
              width={36}
              height={36}
              className="object-contain"
            />
          </Link>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="border-t border-emerald-900/10 bg-white lg:hidden dark:border-white/10 dark:bg-slate-950">
          <div className="container flex flex-col gap-1 py-3">
            {navItems.map((item, index) => (
              <div key={index}>
                {item.children ? (
                  <details className="group">
                    <summary className="flex cursor-pointer list-none items-center justify-between rounded-md px-2 py-2.5 text-sm font-medium text-slate-700 hover:bg-emerald-50 dark:text-slate-200 dark:hover:bg-white/5">
                      {item.name}
                      <ChevronDown className="size-4 transition-transform group-open:rotate-180" />
                    </summary>
                    <div className="ml-3 flex flex-col border-l border-emerald-900/10 pl-3 dark:border-white/10">
                      {item.children.map((child, childIndex) => (
                        <Link
                          key={childIndex}
                          href={child.href}
                          className="rounded-md px-2 py-2 text-sm text-slate-600 hover:bg-emerald-50 hover:text-emerald-700 dark:text-slate-300 dark:hover:bg-white/5"
                          onClick={() => setIsOpen(false)}
                        >
                          {child.name}
                        </Link>
                      ))}
                    </div>
                  </details>
                ) : (
                  <Link
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className={`block rounded-md px-2 py-2.5 text-sm font-medium ${
                      item.name === "Registration"
                        ? "text-emerald-700 dark:text-emerald-400"
                        : item.isImportant
                          ? "text-amber-700 dark:text-amber-400"
                          : "text-slate-700 hover:bg-emerald-50 dark:text-slate-200 dark:hover:bg-white/5"
                    }`}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
            <button
              onClick={toggleTheme}
              className="mt-1 flex items-center gap-2 rounded-md px-2 py-2.5 text-sm font-medium text-slate-700 hover:bg-emerald-50 dark:text-slate-200 dark:hover:bg-white/5"
            >
              {theme === "dark" ? <Sun className="size-4" /> : <Moon className="size-4" />}
              Toggle theme
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
