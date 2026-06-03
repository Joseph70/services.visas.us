"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { Icon } from "@/components/Icons";
import { navItems } from "@/components/siteConfig";

export default function Header({ whatsappUrl }) {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("inicio");
  const [theme, setTheme] = useState("light");

  const closeMenu = () => setIsOpen(false);

  useEffect(() => {
    const savedTheme = window.localStorage.getItem("svus-theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const initialTheme = savedTheme || (prefersDark ? "dark" : "light");

    setTheme(initialTheme);
    document.documentElement.dataset.theme = initialTheme;

    const sectionIds = navItems
      .map((item) => item.href.split("#")[1])
      .filter(Boolean);

    const updateActiveSection = () => {
      const currentPosition = window.scrollY + 170;
      const currentSection = sectionIds.reduce((active, id) => {
        const section = document.getElementById(id);
        if (!section) {
          return active;
        }

        return section.offsetTop <= currentPosition ? id : active;
      }, sectionIds[0]);

      setActiveSection(currentSection);
    };

    updateActiveSection();
    window.addEventListener("scroll", updateActiveSection, { passive: true });
    window.addEventListener("resize", updateActiveSection);
    window.addEventListener("hashchange", updateActiveSection);

    return () => {
      window.removeEventListener("scroll", updateActiveSection);
      window.removeEventListener("resize", updateActiveSection);
      window.removeEventListener("hashchange", updateActiveSection);
    };
  }, []);

  const toggleTheme = () => {
    const nextTheme = theme === "dark" ? "light" : "dark";
    setTheme(nextTheme);
    document.documentElement.dataset.theme = nextTheme;
    window.localStorage.setItem("svus-theme", nextTheme);
  };

  return (
    <header className="site-header">
      <a className="brand" href="/#inicio" aria-label="Services Visas US">
        <span className="brand-logo-shell" aria-hidden="true">
          <Image className="brand-logo-mark" src="/logo-symbol.png" alt="" width={72} height={72} priority />
        </span>
        <span className="brand-name">Services Visas US</span>
      </a>

      <button
        className="menu-toggle"
        type="button"
        aria-label={isOpen ? "Cerrar menu" : "Abrir menu"}
        aria-expanded={isOpen}
        onClick={() => setIsOpen((value) => !value)}
      >
        <Icon name={isOpen ? "close" : "menu"} />
      </button>

      <nav className={`main-nav ${isOpen ? "is-open" : ""}`} aria-label="Menu principal">
        <button
          className="theme-toggle icon-only"
          type="button"
          onClick={toggleTheme}
          aria-label={theme === "dark" ? "Activar modo claro" : "Activar modo oscuro"}
        >
          <Icon name={theme === "dark" ? "sun" : "moon"} />
        </button>
        {navItems.map((item) => {
          const itemId = item.href.split("#")[1];
          return (
            <a
              key={item.href}
              className={activeSection === itemId ? "is-active" : undefined}
              href={item.href}
              onClick={closeMenu}
            >
              {item.label}
            </a>
          );
        })}
        <a className="btn btn-small" href={whatsappUrl} target="_blank" rel="noreferrer" onClick={closeMenu}>
          Solicitar asesoria
        </a>
      </nav>
    </header>
  );
}
