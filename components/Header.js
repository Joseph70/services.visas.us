"use client";

import Image from "next/image";
import { useState } from "react";
import { Icon } from "@/components/Icons";
import { navItems } from "@/components/siteConfig";

export default function Header({ whatsappUrl }) {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  return (
    <header className="site-header">
      <a className="brand" href="#inicio" aria-label="Services Visas US">
        <Image src="/logo.png" alt="Logo Services Visas US" width={72} height={72} priority />
        <span>Services Visas US</span>
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
        {navItems.map((item) => (
          <a key={item.href} href={item.href} onClick={closeMenu}>
            {item.label}
          </a>
        ))}
        <a className="btn btn-small" href={whatsappUrl} target="_blank" rel="noreferrer" onClick={closeMenu}>
          Solicitar asesoria
        </a>
      </nav>
    </header>
  );
}
