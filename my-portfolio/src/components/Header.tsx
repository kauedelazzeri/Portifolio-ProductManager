"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { cn } from "@/lib/utils";
import { ThemeSwitch } from "./theme-switch";

const navigation = [
  { name: "Home", href: "/" },
  { name: "Projects", href: "/projects" },
  { name: "Skills", href: "/#skills" },
  { name: "Articles", href: "/#articles" },
  { name: "Contact", href: "/#contact" },
];

export default function Header() {
  const pathname = usePathname();
  const router = useRouter();
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
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <div className="mr-8">
          <Link href="/" className="text-xl font-bold hover:text-primary transition-colors">
            Kaue Delazzeri
          </Link>
        </div>
        <nav className="flex flex-1 items-center justify-between">
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
          </div>
        </nav>
      </div>
    </header>
  )
}
