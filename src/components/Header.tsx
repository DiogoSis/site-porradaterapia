"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const navItems = [
  { label: "Início", href: "#inicio" },
  { label: "Sobre", href: "#sobre" },
  { label: "Aulas", href: "#aulas" },
  { label: "Horários", href: "#horarios" },
  { label: "Contato", href: "#contato" },
];

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-bg-dark/95 backdrop-blur-sm border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/logo.jpg"
              alt="Porrada Terapia"
              width={50}
              height={50}
              className="rounded-full"
            />
            <span className="font-[family-name:var(--font-bebas-neue)] text-2xl tracking-wide text-text-light">
              PORRADA TERAPIA
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-text-muted hover:text-orange-primary transition-colors font-medium"
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="#aula-experimental"
              className="bg-gradient-to-r from-orange-primary to-yellow-primary text-bg-dark font-bold px-6 py-2.5 rounded-full hover:opacity-90 transition-opacity"
            >
              Aula Experimental
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-text-light p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 border-t border-white/10">
            <div className="flex flex-col gap-4">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-text-muted hover:text-orange-primary transition-colors font-medium py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <Link
                href="#aula-experimental"
                className="bg-gradient-to-r from-orange-primary to-yellow-primary text-bg-dark font-bold px-6 py-3 rounded-full text-center hover:opacity-90 transition-opacity"
                onClick={() => setIsMenuOpen(false)}
              >
                Aula Experimental
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
