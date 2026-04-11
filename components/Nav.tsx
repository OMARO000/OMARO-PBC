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
  { href: "/connect", label: "Connect" },
];

const MONO = "var(--font-ibm-plex-mono)";
const TERRA = "#B85C38";
const DARK = "#1A1A1A";
const BG = "#F0EDE8";

export default function Nav() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header style={{ backgroundColor: BG, borderBottom: `1px solid ${DARK}` }}>
      <nav
        style={{
          maxWidth: "1152px",
          margin: "0 auto",
          padding: "0 24px",
          height: "52px",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
        aria-label="Main navigation"
      >
        {/* LEFT — wordmark */}
        <div style={{ flexShrink: 0 }}>
          <Link
            href="/"
            style={{
              fontFamily: MONO,
              fontWeight: 500,
              fontSize: "40px",
              color: DARK,
              textDecoration: "none",
              letterSpacing: "0.15em",
            }}
            className="uppercase hover:opacity-70 transition-opacity"
            aria-label="OMARO PBC home"
          >
            OMARO
          </Link>
        </div>

        {/* CENTER — nav links (desktop only) */}
        <ul
          className="hidden md:flex"
          style={{
            flex: 1,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "28px",
            flexWrap: "nowrap",
            listStyle: "none",
            margin: 0,
            padding: 0,
          }}
        >
          {navLinks.map(({ href, label, external }) => {
            const isActive = !external && pathname === href;
            const linkStyle: React.CSSProperties = {
              fontFamily: MONO,
              fontSize: "11px",
              textTransform: "uppercase",
              letterSpacing: "0.06em",
              color: isActive ? TERRA : DARK,
              textDecoration: isActive ? "underline" : "none",
              textUnderlineOffset: "4px",
              whiteSpace: "nowrap",
            };
            return (
              <li key={href}>
                {external ? (
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={linkStyle}
                    className="hover:underline transition-all"
                  >
                    {label}
                  </a>
                ) : (
                  <Link
                    href={href}
                    style={linkStyle}
                    className="hover:underline transition-all"
                    aria-current={isActive ? "page" : undefined}
                  >
                    {label}
                  </Link>
                )}
              </li>
            );
          })}
        </ul>

        {/* RIGHT — account buttons (desktop) + hamburger (mobile) */}
        <div style={{ flexShrink: 0, display: "flex", alignItems: "center", gap: "8px" }}>
          {/* Stacked account buttons — desktop only */}
          <div
            className="hidden md:flex"
            style={{ flexDirection: "column", alignItems: "stretch", gap: "4px" }}
          >
            <a
              href="/account"
              style={{
                fontFamily: MONO,
                fontSize: "10px",
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                padding: "5px 12px",
                borderRadius: "2px",
                textDecoration: "none",
                textAlign: "center",
                whiteSpace: "nowrap",
                minWidth: "120px",
                border: `1px solid ${TERRA}`,
                color: TERRA,
                background: "transparent",
                transition: "background 0.15s, color 0.15s",
                display: "block",
              }}
              onMouseEnter={e => {
                e.currentTarget.style.background = TERRA;
                e.currentTarget.style.color = BG;
              }}
              onMouseLeave={e => {
                e.currentTarget.style.background = "transparent";
                e.currentTarget.style.color = TERRA;
              }}
            >
              Login
            </a>
            <a
              href="/account"
              style={{
                fontFamily: MONO,
                fontSize: "10px",
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                padding: "5px 12px",
                borderRadius: "2px",
                textDecoration: "none",
                textAlign: "center",
                whiteSpace: "nowrap",
                minWidth: "120px",
                border: `1px solid ${TERRA}`,
                color: BG,
                background: TERRA,
                transition: "background 0.15s",
                display: "block",
              }}
              onMouseEnter={e => (e.currentTarget.style.background = "#9A4A2E")}
              onMouseLeave={e => (e.currentTarget.style.background = TERRA)}
            >
              Create Account
            </a>
          </div>

          {/* Hamburger — mobile only */}
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
                backgroundColor: DARK,
                transform: menuOpen ? "translateY(5px) rotate(45deg)" : "none",
              }}
            />
            <span
              className="block w-5 h-px transition-opacity"
              style={{ backgroundColor: DARK, opacity: menuOpen ? 0 : 1 }}
            />
            <span
              className="block w-5 h-px transition-transform"
              style={{
                backgroundColor: DARK,
                transform: menuOpen ? "translateY(-5px) rotate(-45deg)" : "none",
              }}
            />
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div id="mobile-menu" style={{ borderTop: `1px solid ${DARK}` }}>
          <ul
            style={{
              maxWidth: "1152px",
              margin: "0 auto",
              padding: "16px 24px",
              display: "flex",
              flexDirection: "column",
              gap: "16px",
              listStyle: "none",
              textAlign: "center",
            }}
          >
            {navLinks.map(({ href, label, external }) => {
              const isActive = !external && pathname === href;
              const linkStyle: React.CSSProperties = {
                fontFamily: MONO,
                fontSize: "11px",
                textTransform: "uppercase",
                letterSpacing: "0.06em",
                color: DARK,
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
                      className="hover:underline"
                      onClick={() => setMenuOpen(false)}
                    >
                      {label}
                    </a>
                  ) : (
                    <Link
                      href={href}
                      style={linkStyle}
                      className="hover:underline"
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
