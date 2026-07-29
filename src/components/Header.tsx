"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const NAV_ITEMS = [
  { href: "/projects", label: "Projects" },
  { href: "/experience", label: "Experience" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-ink/5 bg-paper/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-8 py-4 lg:px-12">
        {/* Logo */}
        <Link 
          href="/" 
          className="group flex items-center gap-3 transition-opacity hover:opacity-80"
        >
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blueprint/10 text-blueprint transition-all group-hover:bg-blueprint/20">
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4" />
            </svg>
          </div>
          <div>
            <span className="font-display text-base font-semibold tracking-tight text-ink">
              Pallavi Mishra
            </span>
            <span className="ml-2 hidden text-xs font-medium uppercase tracking-wider text-blueprint/70 sm:inline-block">
              Full-Stack Dev
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav aria-label="Primary" className="hidden items-center gap-1 md:flex">
          {NAV_ITEMS.map((item) => {
            const isActive = pathname === item.href || pathname.startsWith(`${item.href}/`);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`relative rounded-lg px-4 py-2 text-sm font-medium transition-all ${
                  isActive
                    ? "text-blueprint"
                    : "text-graphite/70 hover:text-ink hover:bg-ink/5"
                }`}
              >
                {item.label}
                {isActive && (
                  <span className="absolute bottom-1 left-1/2 h-0.5 w-4 -translate-x-1/2 rounded-full bg-blueprint"></span>
                )}
              </Link>
            );
          })}
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="rounded-lg p-2 text-graphite/70 transition-colors hover:bg-ink/5 hover:text-ink md:hidden"
          aria-label="Toggle menu"
          aria-expanded={isMobileMenuOpen}
        >
          <div className="relative h-5 w-5">
            <span
              className={`absolute left-0 top-1 h-0.5 w-5 bg-current transition-all ${
                isMobileMenuOpen ? "top-2 rotate-45" : ""
              }`}
            ></span>
            <span
              className={`absolute left-0 top-2 h-0.5 w-5 bg-current transition-all ${
                isMobileMenuOpen ? "opacity-0" : ""
              }`}
            ></span>
            <span
              className={`absolute left-0 top-3 h-0.5 w-5 bg-current transition-all ${
                isMobileMenuOpen ? "top-2 -rotate-45" : ""
              }`}
            ></span>
          </div>
        </button>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out md:hidden ${
          isMobileMenuOpen ? "max-h-[300px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="flex flex-col border-t border-ink/5 bg-paper/95 px-8 py-4">
          {NAV_ITEMS.map((item) => {
            const isActive = pathname === item.href || pathname.startsWith(`${item.href}/`);
            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`rounded-lg px-4 py-3 text-sm font-medium transition-all ${
                  isActive
                    ? "text-blueprint bg-blueprint/5"
                    : "text-graphite/70 hover:text-ink hover:bg-ink/5"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}