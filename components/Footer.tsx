export default function Footer() {
  return (
    <footer
      style={{ backgroundColor: "#1A1A1A", color: "#F0EDE8" }}
    >
      <div className="max-w-6xl mx-auto px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
        <span style={{ fontFamily: "var(--font-ibm-plex-mono)" }}>
          &copy; 2026 OMARO PBC. All rights reserved.
        </span>
        <span style={{ fontFamily: "var(--font-ibm-plex-mono)", color: "#4A4A4A" }}>
          AGPL-3.0 licensed
        </span>
        <a
          href="mailto:hello@omaro-pbc.org"
          style={{ fontFamily: "var(--font-ibm-plex-mono)", color: "#F0EDE8" }}
          className="hover:underline"
        >
          hello@omaro-pbc.org
        </a>
      </div>
    </footer>
  );
}
