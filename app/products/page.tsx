import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Products",
  description:
    "OMARO PBC builds open-source tools for people. OMEN, iGITit, and [us] — accountability, transparency, and human connection.",
};

export default function ProductsPage() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-16 md:py-24 text-center">

      <h1
        style={{
          fontFamily: "var(--font-ibm-plex-mono)",
          fontSize: "2.5rem",
          fontWeight: 600,
          color: "var(--foreground)",
          marginBottom: "64px",
        }}
      >
        What we build.
      </h1>

      {/* OMEN */}
      <div style={{ border: "1px solid #1A1A1A", padding: "32px", marginBottom: "24px", height: "auto" }}>
        <h3 style={{ fontFamily: "var(--font-ibm-plex-mono)", fontSize: "16px", fontWeight: 500, color: "var(--foreground)", marginBottom: "20px" }}>
          OMEN — Corporate Accountability Ledger
        </h3>
        <p style={{ fontFamily: "var(--font-ibm-plex-sans)", fontSize: "16px", lineHeight: 1.75, color: "var(--foreground)", marginBottom: "16px" }}>
          Corporations violate the public trust every day. Most of it goes undocumented, uncited, and forgotten. Without a permanent record, violations disappear into press cycles — companies pay fines, issue apologies, and repeat the behavior. The pattern is invisible because no one is keeping score.
        </p>
        <p style={{ fontFamily: "var(--font-ibm-plex-sans)", fontSize: "16px", lineHeight: 1.75, color: "var(--foreground)", marginBottom: "20px" }}>
          OMEN keeps the receipts. Court-grade documentation of verified violations across thousands of companies — permanent, open, and citable. The record doesn&apos;t expire.
        </p>
        <a href="https://omen.xyz" target="_blank" rel="noopener noreferrer" style={{ fontFamily: "var(--font-ibm-plex-mono)", fontSize: "13px", color: "#9b1b30" }}>omen.xyz ↗</a>
      </div>

      {/* iGITit */}
      <div style={{ border: "1px solid #1A1A1A", padding: "32px", marginBottom: "24px", height: "auto" }}>
        <h3 style={{ fontFamily: "var(--font-ibm-plex-mono)", fontSize: "16px", fontWeight: 500, color: "var(--foreground)", marginBottom: "20px" }}>
          iGITit — Open Source Code Analysis
        </h3>
        <p style={{ fontFamily: "var(--font-ibm-plex-sans)", fontSize: "16px", lineHeight: 1.75, color: "var(--foreground)", marginBottom: "16px" }}>
          Most people can&apos;t read code. The software shaping their lives is written in a language they were never taught. When you can&apos;t read the code, you can&apos;t know what it collects, what it sends, or who it serves. Transparency without comprehension is just theater.
        </p>
        <p style={{ fontFamily: "var(--font-ibm-plex-sans)", fontSize: "16px", lineHeight: 1.75, color: "var(--foreground)", marginBottom: "20px" }}>
          iGITit reads the code and tells you what it does — in plain language. Any public repository, analyzed and explained. Open source, open language.
        </p>
        <a href="https://igitit.xyz" target="_blank" rel="noopener noreferrer" style={{ fontFamily: "var(--font-ibm-plex-mono)", fontSize: "13px", color: "#9b1b30" }}>igitit.xyz ↗</a>
      </div>

      {/* HAI Project */}
      <div style={{ border: "1px solid #1A1A1A", padding: "32px", marginBottom: "24px", height: "auto" }}>
        <h3 style={{ fontFamily: "var(--font-ibm-plex-mono)", fontSize: "16px", fontWeight: 500, color: "var(--foreground)", marginBottom: "20px" }}>
          HAI Project — Honorable AI Standard
        </h3>
        <p style={{ fontFamily: "var(--font-ibm-plex-sans)", fontSize: "16px", lineHeight: 1.75, color: "var(--foreground)", marginBottom: "16px" }}>
          The standard is public. The record is permanent. HAI Project is OMARO&apos;s public accountability infrastructure for artificial intelligence — a nine-pillar framework that defines what it means to build AI that is transparent, human-controlled, and genuinely built for people. Not a checklist. A contract with the public.
        </p>
        <p style={{ fontFamily: "var(--font-ibm-plex-sans)", fontSize: "16px", lineHeight: 1.75, color: "var(--foreground)", marginBottom: "20px" }}>
          Any company can apply. Findings are published to a permanent public registry. Organizations that meet the standard earn a record of that commitment. Those that don&apos;t earn a record of that too.
        </p>
        <a href="https://haiproject.xyz" target="_blank" rel="noopener noreferrer" style={{ fontFamily: "var(--font-ibm-plex-mono)", fontSize: "13px", color: "#9b1b30" }}>haiproject.xyz ↗</a>
      </div>

      <div style={{ borderTop: "1px solid #1A1A1A", paddingTop: "40px", marginTop: "16px" }}>
        <p style={{ fontFamily: "var(--font-ibm-plex-mono)", fontSize: "13px", color: "#9b1b30" }}>
          All OMARO products are open-source.
          <br />
          All are built for people, not advertisers.
        </p>
      </div>
    </div>
  );
}
