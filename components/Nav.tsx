"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

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
const TERRA = "#9b1b30";

export default function Nav() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [dark, setDark] = useState(false);

  useEffect(() => {
    localStorage.removeItem("omaro-theme"); const stored = null;
    if (stored === "dark") {
      setDark(true);
      document.documentElement.setAttribute("data-theme", "dark");
    }
  }, []);

  const toggleTheme = () => {
    const next = !dark;
    setDark(next);
    document.documentElement.setAttribute("data-theme", next ? "dark" : "light");
    localStorage.setItem("omaro-theme", next ? "dark" : "light");
  };

  const DARK = "var(--foreground)";
  const BG = "var(--background)";
  const BORDER = "var(--border)";

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
          borderBottom: `1px solid ${BORDER}`,
          zIndex: 100,
          boxSizing: "border-box",
        }}
        aria-label="Main navigation"
      >
        <div style={{ display: "flex", alignItems: "center", paddingLeft: "24px", flexShrink: 0, width: "140px" }}>
          <Link href="/" style={{ fontFamily: MONO, fontWeight: 500, fontSize: "40px", color: TERRA, textDecoration: "none", letterSpacing: "0.15em" }} className="uppercase hover:opacity-70 transition-opacity" aria-label="OMARO PBC home">OMARO</Link>
        </div>

        <div className="hidden md:flex" style={{ flexDirection: "row", alignItems: "center", justifyContent: "center", flex: 1, gap: "28px", flexWrap: "nowrap", overflow: "hidden" }}>
          <ul style={{ display: "flex", flexDirection: "row", alignItems: "center", gap: "28px", flexWrap: "nowrap", listStyle: "none", margin: 0, padding: 0 }}>
            {navLinks.map(({ href, label, external }) => {
              const isActive = !external && pathname === href;
              const linkStyle: React.CSSProperties = { fontFamily: MONO, fontSize: "15px", textTransform: "uppercase", letterSpacing: "0.06em", color: isActive ? TERRA : DARK, textDecoration: isActive ? "underline" : "none", textUnderlineOffset: "4px", whiteSpace: "nowrap" };
              return (
                <li key={href}>
                  {external ? (
                    <a href={href} target="_blank" rel="noopener noreferrer" style={linkStyle} className="hover:underline transition-all">{label}</a>
                  ) : (
                    <Link href={href} style={linkStyle} className="hover:underline transition-all" aria-current={isActive ? "page" : undefined}>{label}</Link>
                  )}
                </li>
              );
            })}
          </ul>
        </div>

        <div style={{ flexShrink: 0, width: "180px", display: "flex", alignItems: "center", justifyContent: "flex-end", gap: "8px", paddingRight: "24px" }}>
          <div onClick={toggleTheme} role="button" aria-label={dark ? "Switch to light mode" : "Switch to dark mode"} className="hidden md:flex" style={{ cursor: "pointer", flexShrink: 0, alignItems: "center", fontSize: "10px", letterSpacing: "0.12em", fontFamily: MONO }}>
            <span style={{ padding: "4px 7px", border: `0.5px solid ${dark ? "transparent" : TERRA}`, color: dark ? "var(--muted)" : TERRA, background: dark ? "transparent" : "rgba(155,27,48,0.06)" }}>LIGHT</span>
            <span style={{ padding: "4px 7px", border: `0.5px solid ${dark ? TERRA : "transparent"}`, color: dark ? TERRA : "var(--muted)", background: dark ? "rgba(155,27,48,0.06)" : "transparent" }}>DARK</span>
          </div>

          <div className="hidden md:flex" style={{ flexDirection: "column", alignItems: "stretch", justifyContent: "center", gap: "4px", paddingTop: "8px", width: "110px" }}>
            <Link href="/account" style={{ fontFamily: MONO, fontSize: "13px", letterSpacing: "0.08em", textTransform: "uppercase", padding: "5px 0", borderRadius: "2px", textDecoration: "none", textAlign: "center", width: "100%", border: `1px solid ${TERRA}`, color: TERRA, background: "transparent", transition: "background 0.15s, color 0.15s", display: "block", boxSizing: "border-box" }} onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = TERRA; (e.currentTarget as HTMLElement).style.color = "#ffffff"; }} onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = "transparent"; (e.currentTarget as HTMLElement).style.color = TERRA; }}>Login</Link>
            <Link href="/account" style={{ fontFamily: MONO, fontSize: "13px", letterSpacing: "0.08em", textTransform: "uppercase", padding: "5px 0", borderRadius: "2px", textDecoration: "none", textAlign: "center", width: "100%", border: `1px solid ${TERRA}`, color: "#ffffff", background: TERRA, transition: "background 0.15s", display: "block", boxSizing: "border-box" }} onMouseEnter={e => ((e.currentTarget as HTMLElement).style.background = "#7a1526")} onMouseLeave={e => ((e.currentTarget as HTMLElement).style.background = TERRA)}>Create Account</Link>
          </div>

          <button className="md:hidden flex flex-col gap-1.5 p-1" onClick={() => setMenuOpen(!menuOpen)} aria-expanded={menuOpen} aria-controls="mobile-menu" aria-label={menuOpen ? "Close menu" : "Open menu"}>
            <span className="block w-5 h-px transition-transform" style={{ backgroundColor: DARK, transform: menuOpen ? "translateY(5px) rotate(45deg)" : "none" }} />
            <span className="block w-5 h-px transition-opacity" style={{ backgroundColor: DARK, opacity: menuOpen ? 0 : 1 }} />
            <span className="block w-5 h-px transition-transform" style={{ backgroundColor: DARK, transform: menuOpen ? "translateY(-5px) rotate(-45deg)" : "none" }} />
          </button>
        </div>
      </header>

      {menuOpen && (
        <div id="mobile-menu" style={{ borderBottom: `1px solid ${BORDER}`, background: BG, zIndex: 99, position: "sticky", top: "96px" }}>
          <ul style={{ margin: "0 auto", padding: "16px 24px", display: "flex", flexDirection: "column", gap: "16px", listStyle: "none", textAlign: "center" }}>
            {navLinks.map(({ href, label, external }) => {
              const isActive = !external && pathname === href;
              const linkStyle: React.CSSProperties = { fontFamily: MONO, fontSize: "15px", textTransform: "uppercase", letterSpacing: "0.06em", color: DARK, textDecoration: isActive ? "underline" : "none", textUnderlineOffset: "4px" };
              return (
                <li key={href}>
                  {external ? (
                    <a href={href} target="_blank" rel="noopener noreferrer" style={linkStyle} className="hover:underline" onClick={() => setMenuOpen(false)}>{label}</a>
                  ) : (
                    <Link href={href} style={linkStyle} className="hover:underline" onClick={() => setMenuOpen(false)} aria-current={isActive ? "page" : undefined}>{label}</Link>
                  )}
                </li>
              );
            })}
            <li>
              <button onClick={toggleTheme} style={{ fontFamily: MONO, fontSize: "15px", textTransform: "uppercase", letterSpacing: "0.06em", color: DARK, background: "transparent", border: "none", cursor: "pointer", padding: 0 }}>
                {dark ? "Light Mode" : "Dark Mode"}
              </button>
            </li>
          </ul>
        </div>
      )}
    </>
  );
}