"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navLinks = [
  { href: "/mission", label: "Mission" },
  { href: "/products", label: "Products" },
  { href: "/rescue-ai", label: "Rescue AI" },
  { href: "/transparency", label: "Transparency" },
  { href: "/press", label: "Press" },
  { href: "/contact", label: "Contact" },
];

export default function Nav() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header
      style={{
        backgroundColor: "#F0EDE8",
        borderBottom: "1px solid #4A4A4A",
      }}
    >
      <nav
        className="max-w-6xl mx-auto px-6 py-3 flex items-center"
        aria-label="Main navigation"
      >
        {/* Logo — left anchor */}
        <Link
          href="/"
          className="shrink-0 hover:opacity-75 transition-opacity"
          aria-label="OMARO PBC home"
        >
          <Image
            src="/omaro-logo.png"
            alt="OMARO"
            width={44}
            height={44}
            priority
            style={{ display: "block" }}
          />
        </Link>

        {/* Desktop links — horizontally centered */}
        <ul className="hidden md:flex flex-1 items-center justify-center gap-7 list-none m-0 p-0">
          {navLinks.map(({ href, label }) => {
            const isActive = pathname === href;
            return (
              <li key={href}>
                <Link
                  href={href}
                  style={{
                    fontFamily: "var(--font-ibm-plex-mono)",
                    color: "#1A1A1A",
                    textDecoration: isActive ? "underline" : "none",
                    textUnderlineOffset: "4px",
                  }}
                  className="text-sm tracking-wide hover:underline transition-all"
                  aria-current={isActive ? "page" : undefined}
                >
                  {label}
                </Link>
              </li>
            );
          })}

          {/* Founder — destination TBA */}
          <li>
            <span
              style={{
                fontFamily: "var(--font-ibm-plex-mono)",
                color: "#4A4A4A",
                cursor: "default",
              }}
              className="text-sm tracking-wide"
              title="Founder site — coming soon"
              aria-label="Founder (link coming soon)"
            >
              Founder&nbsp;↗
            </span>
          </li>
        </ul>

        {/* Right side — spacer (desktop) / hamburger (mobile) */}
        <div className="shrink-0 flex items-center justify-end" style={{ width: 44 }}>
          <button
            className="md:hidden flex flex-col gap-1.5 p-1"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
          >
            <span
              className="block w-5 h-px transition-transform"
              style={{
                backgroundColor: "#1A1A1A",
                transform: menuOpen ? "translateY(5px) rotate(45deg)" : "none",
              }}
            />
            <span
              className="block w-5 h-px transition-opacity"
              style={{
                backgroundColor: "#1A1A1A",
                opacity: menuOpen ? 0 : 1,
              }}
            />
            <span
              className="block w-5 h-px transition-transform"
              style={{
                backgroundColor: "#1A1A1A",
                transform: menuOpen ? "translateY(-5px) rotate(-45deg)" : "none",
              }}
            />
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div
          id="mobile-menu"
          style={{ borderTop: "1px solid #4A4A4A" }}
        >
          <ul className="max-w-6xl mx-auto px-6 py-4 flex flex-col gap-4 list-none m-0 text-center">
            {navLinks.map(({ href, label }) => {
              const isActive = pathname === href;
              return (
                <li key={href}>
                  <Link
                    href={href}
                    style={{
                      fontFamily: "var(--font-ibm-plex-mono)",
                      color: "#1A1A1A",
                      textDecoration: isActive ? "underline" : "none",
                      textUnderlineOffset: "4px",
                    }}
                    className="text-sm tracking-wide hover:underline"
                    onClick={() => setMenuOpen(false)}
                    aria-current={isActive ? "page" : undefined}
                  >
                    {label}
                  </Link>
                </li>
              );
            })}
            <li>
              <span
                style={{
                  fontFamily: "var(--font-ibm-plex-mono)",
                  color: "#4A4A4A",
                }}
                className="text-sm tracking-wide"
              >
                Founder&nbsp;↗
              </span>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
