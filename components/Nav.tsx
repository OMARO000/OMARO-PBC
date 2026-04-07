"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navLinks = [
  { href: "/mission", label: "Mission" },
  { href: "/products", label: "Products" },
  { href: "/data-coop", label: "Data Co-op" },
  { href: "/hai-standard", label: "HAI Standard" },
  { href: "/transparency", label: "Transparency" },
  { href: "https://trentonwroberts.com", label: "Founder", external: true },
  { href: "/press", label: "Press" },
  { href: "/origins", label: "Origins" },
  { href: "/contact", label: "Contact" },
];

export default function Nav() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header
      style={{
        backgroundColor: "#F0EDE8",
        borderBottom: "1px solid #1A1A1A",
      }}
    >
      <nav
        className="max-w-6xl mx-auto px-6 py-4 flex items-center"
        aria-label="Main navigation"
      >
        {/* Wordmark — text only */}
        <Link
          href="/"
          style={{
            fontFamily: "var(--font-ibm-plex-mono)",
            fontWeight: 500,
            fontSize: "40px",
            color: "#1A1A1A",
            textDecoration: "none",
            letterSpacing: "0.15em",
          }}
          className="shrink-0 uppercase hover:opacity-70 transition-opacity"
          aria-label="OMARO PBC home"
        >
          OMARO
        </Link>

        {/* Desktop links — horizontally centered */}
        <ul className="hidden md:flex flex-1 items-center justify-center gap-7 list-none m-0 p-0">
          {navLinks.map(({ href, label, external }) => {
            const isActive = !external && pathname === href;
            const linkStyle = {
              fontFamily: "var(--font-ibm-plex-mono)",
              color: isActive ? "#B85C38" : "#1A1A1A",
              textDecoration: isActive ? "underline" : "none",
              textUnderlineOffset: "4px",
            };
            return (
              <li key={href}>
                {external ? (
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={linkStyle}
                    className="text-sm tracking-wide hover:underline transition-all"
                  >
                    {label}
                  </a>
                ) : (
                  <Link
                    href={href}
                    style={linkStyle}
                    className="text-sm tracking-wide hover:underline transition-all"
                    aria-current={isActive ? "page" : undefined}
                  >
                    {label}
                  </Link>
                )}
              </li>
            );
          })}

        </ul>

        {/* Right — spacer (desktop) / hamburger (mobile) */}
        <div className="shrink-0 flex items-center justify-end" style={{ minWidth: 60 }}>
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
          style={{ borderTop: "1px solid #1A1A1A" }}
        >
          <ul className="max-w-6xl mx-auto px-6 py-4 flex flex-col gap-4 list-none m-0 text-center">
            {navLinks.map(({ href, label, external }) => {
              const isActive = !external && pathname === href;
              const linkStyle = {
                fontFamily: "var(--font-ibm-plex-mono)",
                color: "#1A1A1A",
                textDecoration: isActive ? "underline" : "none",
                textUnderlineOffset: "4px",
              };
              return (
                <li key={href}>
                  {external ? (
                    <a
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={linkStyle}
                      className="text-sm tracking-wide hover:underline"
                      onClick={() => setMenuOpen(false)}
                    >
                      {label}
                    </a>
                  ) : (
                    <Link
                      href={href}
                      style={linkStyle}
                      className="text-sm tracking-wide hover:underline"
                      onClick={() => setMenuOpen(false)}
                      aria-current={isActive ? "page" : undefined}
                    >
                      {label}
                    </Link>
                  )}
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </header>
  );
}
