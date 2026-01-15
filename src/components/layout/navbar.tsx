import { Link, useLocation } from "wouter";
import { useLanguage } from "@/lib/i18n";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

export function Navbar() {
  const [location] = useLocation();
  const { language, setLanguage } = useLanguage();
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const root = document.documentElement;
    const dark = root.classList.contains("dark");
    setIsDark(dark);
  }, []);

  function toggleDark() {
    const root = document.documentElement;
    root.classList.toggle("dark");
    setIsDark(root.classList.contains("dark"));
  }

  const nav = language === "en"
    ? { home: "Home", about: "About", services: "Services", projects: "Projects", contact: "Contact" }
    : { home: "الرئيسية", about: "حول", services: "الخدمات", projects: "المشاريع", contact: "تواصل" };

  const links = [
    { href: "/", label: nav.home },
    { href: "/about", label: nav.about },
    { href: "/services", label: nav.services },
    { href: "/projects", label: nav.projects },
    { href: "/contact", label: nav.contact },
  ];

  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-background/80 backdrop-blur border-b border-border">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/">
          <div className="cursor-pointer flex items-center gap-3">
            <img src="/logo.jpg" alt="NURDAR Al Faisal Logo" className="h-10 w-auto object-contain rounded-md" />
            <span className="font-heading font-extrabold tracking-wide leading-none">
              NURDAR <span className="text-primary">AL FAISAL</span>
            </span>
          </div>
        </Link>

        <nav className={cn("hidden md:flex items-center gap-6", language === "ar" && "flex-row-reverse")}>
          {links.map((l) => (
            <Link key={l.href} href={l.href}>
              <span
                className={cn(
                  "cursor-pointer text-sm font-semibold transition-colors hover:text-primary",
                  location === l.href ? "text-primary" : "text-foreground/80"
                )}
              >
                {l.label}
              </span>
            </Link>
          ))}
        </nav>

        <div className={cn("flex items-center gap-2", language === "ar" && "flex-row-reverse")}>
          <Button
            variant="secondary"
            size="sm"
            onClick={() => setLanguage(language === "en" ? "ar" : "en")}
            className="px-3"
          >
            {language === "en" ? "AR" : "EN"}
          </Button>
          <button
            onClick={toggleDark}
            className="h-9 w-9 grid place-items-center rounded-md border border-border hover:bg-secondary transition-colors"
            aria-label="Toggle theme"
          >
            {isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </button>
        </div>
      </div>
    </header>
  );
}
