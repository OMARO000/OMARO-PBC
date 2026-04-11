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
    <>
      <header
        style={{
          position: "sticky",
          top: 0,
          left: 0,
          right: 0,
          width: "100%",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          padding: 0,
          height: "96px",
          background: BG,
          borderBottom: "1px solid rgba(26,26,26,0.12)",
          zIndex: 100,
          boxSizing: "border-box",
        }}
        aria-label="Main navigation"
      >
        {/* Child 1 — Logo LEFT */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            paddingLeft: "24px",
            flexShrink: 0,
            width: "140px",
          }}
        >
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

        {/* Child 2 — Nav links CENTER (desktop only) */}
        <div
          className="hidden md:flex"
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            flex: 1,
            gap: "28px",
            flexWrap: "nowrap",
            overflow: "hidden",
          }}
        >
          <ul
            style={{
              display: "flex",
              flexDirection: "row",
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
                fontSize: "15px",
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
        </div>

        {/* Child 3 — Account buttons RIGHT (desktop) + hamburger (mobile) */}
        <div
          style={{
            flexShrink: 0,
            width: "140px",
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-end",
          }}
        >
          {/* Stacked account buttons — desktop only */}
          <div
            className="hidden md:flex"
            style={{
              flexDirection: "column",
              alignItems: "stretch",
              justifyContent: "center",
              gap: "4px",
              paddingRight: "24px",
              paddingTop: "8px",
              width: "100%",
            }}
          >
            <Link
              href="/account"
              style={{
                fontFamily: MONO,
                fontSize: "13px",
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                padding: "5px 0",
                borderRadius: "2px",
                textDecoration: "none",
                textAlign: "center",
                width: "100%",
                border: `1px solid ${TERRA}`,
                color: TERRA,
                background: "transparent",
                transition: "background 0.15s, color 0.15s",
                display: "block",
                boxSizing: "border-box",
              }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLElement).style.background = TERRA;
                (e.currentTarget as HTMLElement).style.color = BG;
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLElement).style.background = "transparent";
                (e.currentTarget as HTMLElement).style.color = TERRA;
              }}
            >
              Login
            </Link>
            <Link
              href="/account"
              style={{
                fontFamily: MONO,
                fontSize: "13px",
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                padding: "5px 0",
                borderRadius: "2px",
                textDecoration: "none",
                textAlign: "center",
                width: "100%",
                border: `1px solid ${TERRA}`,
                color: "#FFFFFF",
                background: TERRA,
                transition: "background 0.15s",
                display: "block",
                boxSizing: "border-box",
              }}
              onMouseEnter={e => ((e.currentTarget as HTMLElement).style.background = "#9A4A2E")}
              onMouseLeave={e => ((e.currentTarget as HTMLElement).style.background = TERRA)}
            >
              Create Account
            </Link>
          </div>

          {/* Hamburger — mobile only */}
          <button
            className="md:hidden flex flex-col gap-1.5 p-1"
            style={{ marginRight: "16px" }}
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
      </header>

      {/* Mobile menu */}
      {menuOpen && (
        <div id="mobile-menu" style={{ borderBottom: `1px solid rgba(26,26,26,0.12)`, background: BG, zIndex: 99, position: "sticky", top: "96px" }}>
          <ul
            style={{
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
                fontSize: "15px",
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
    </>
  );
}
