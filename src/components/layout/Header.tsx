"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { cn } from "@/lib/utils";
import { ThemeSwitch } from "../common/theme-switch";
import { useTranslation } from "@/context/i18n";
import { LanguageSwitch } from "../common/language-switch";
import { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { SITE_CONFIG } from "@/constants/site";


export default function Header() {
  const pathname = usePathname();
  const router = useRouter();
  const { t } = useTranslation();
  const [menuOpen, setMenuOpen] = useState(false);
  const navigation = [
    { name: t('header.home'), href: '/' },
    { name: t('header.projects'), href: '/projects' },
    { name: t('header.skills'), href: '/#skills' },
    { name: t('header.articles'), href: '/#articles' },
    { name: t('header.contact'), href: '/#contact' },
  ];

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();


    if (pathname !== "/" && href.startsWith("/#")) {
      // If we're not on the home page and trying to navigate to a section
      router.push("/");
      setTimeout(() => {
        const element = document.querySelector(href.replace("/#", "#"));
        element?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    } else if (href.startsWith("/#")) {
      // If we're already on the home page
      const element = document.querySelector(href.replace("/#", "#"));
      element?.scrollIntoView({ behavior: "smooth" });
    } else {
      // Regular navigation
      router.push(href);
    }
    setMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="mr-8 flex-1">
          <Link href="/" className="text-xl font-bold hover:text-primary transition-colors">
            {SITE_CONFIG.name}
          </Link>
        </div>
        <nav className="hidden flex-1 items-center justify-between md:flex">
          <div className="flex gap-6">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={(e) => handleClick(e, item.href)}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-primary",
                  (pathname === item.href ||
                    (pathname === "/" && item.href.startsWith("/#"))) &&
                    "text-primary"
                )}
              >
                {item.name}
              </Link>
            ))}
          </div>

          <div className="flex items-center space-x-4">
            <ThemeSwitch />
            <LanguageSwitch />
          </div>
        </nav>
        <button
          className="md:hidden rounded-lg p-2 hover:bg-secondary/80 transition-colors"
          onClick={() => setMenuOpen((p) => !p)}
          aria-label="Toggle menu"
        >
          {menuOpen ? (
            <XMarkIcon className="h-6 w-6" />
          ) : (
            <Bars3Icon className="h-6 w-6" />
          )}
        </button>
      </div>
      {menuOpen && (
        <div className="border-b border-border/40 bg-background md:hidden">
          <div className="container flex flex-col space-y-2 py-4">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={(e) => handleClick(e, item.href)}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-primary",
                  (pathname === item.href ||
                    (pathname === "/" && item.href.startsWith("/#"))) &&
                    "text-primary"
                )}
              >
                {item.name}
              </Link>
            ))}
            <div className="flex items-center space-x-4 pt-2">
              <ThemeSwitch />
              <LanguageSwitch />
            </div>
          </div>
        </div>
      )}
    </header>
  )
}

