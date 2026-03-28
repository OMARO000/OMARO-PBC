"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navLinks = [
  { href: "/mission", label: "Mission", external: false },
  { href: "/products", label: "Products", external: false },
  { href: "/rescue-ai", label: "Rescue AI", external: false },
  { href: "/transparency", label: "Transparency", external: false },
  { href: "/press", label: "Press", external: false },
  { href: "/contact", label: "Contact", external: false },
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
        className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between"
        aria-label="Main navigation"
      >
        {/* Wordmark */}
        <Link
          href="/"
          style={{ fontFamily: "var(--font-ibm-plex-mono)", color: "#1A1A1A" }}
          className="text-xl font-semibold tracking-widest uppercase hover:opacity-70 transition-opacity"
          aria-label="OMARO PBC home"
        >
          OMARO
        </Link>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-7 list-none m-0 p-0">
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

          {/* Founder — external, destination TBA */}
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

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
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
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div
          id="mobile-menu"
          style={{ borderTop: "1px solid #4A4A4A" }}
        >
          <ul className="max-w-6xl mx-auto px-6 py-4 flex flex-col gap-4 list-none m-0">
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
