import type { Metadata } from "next";
import LogoHero from "@/components/LogoHero";

export const metadata: Metadata = {
  title: "Products",
  description:
    "OMARO PBC builds open-source tools for people. OMEN, iGITit, and [us] — accountability, transparency, and human connection.",
};

const bodyStyle = {
  fontFamily: "var(--font-ibm-plex-sans)",
  color: "#4A4A4A",
  fontSize: "1rem",
  lineHeight: "1.75",
};

const headingStyle = {
  fontFamily: "var(--font-ibm-plex-mono)",
  color: "#1A1A1A",
};

const linkStyle = {
  fontFamily: "var(--font-ibm-plex-mono)",
  color: "#1A1A1A",
  textUnderlineOffset: "4px",
};

export default function ProductsPage() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-16 md:py-24 text-center">
      <LogoHero />

      <h1
        className="text-3xl md:text-5xl font-semibold mb-16"
        style={headingStyle}
      >
        What we build.
      </h1>

      <div className="space-y-6 mb-20">

        {/* OMEN */}
        <div
          className="border text-center"
          style={{ borderColor: "#4A4A4A", padding: "32px", height: "auto" }}
        >
          <h2 className="text-xl font-semibold mb-6" style={headingStyle}>
            OMEN — Corporate Accountability Ledger
          </h2>
          <div className="space-y-4 mb-6">
            <p style={bodyStyle}>
              Corporations violate the public trust every day. Most of it goes
              undocumented, uncited, and forgotten. Without a permanent record,
              violations disappear into press cycles — companies pay fines, issue
              apologies, and repeat the behavior. The pattern is invisible because
              no one is keeping score.
            </p>
            <p style={bodyStyle}>
              OMEN keeps the receipts. Court-grade documentation of verified
              violations across thousands of companies — permanent, open, and
              citable. The record doesn&apos;t expire.
            </p>
          </div>
          <a
            href="https://omen.xyz"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm underline hover:no-underline"
            style={linkStyle}
          >
            omen.xyz&nbsp;↗
          </a>
        </div>

        {/* iGITit */}
        <div
          className="border text-center"
          style={{ borderColor: "#4A4A4A", padding: "32px", height: "auto" }}
        >
          <h2 className="text-xl font-semibold mb-6" style={headingStyle}>
            iGITit — Open Source Code Analysis
          </h2>
          <div className="space-y-4 mb-6">
            <p style={bodyStyle}>
              Most people can&apos;t read code. The software shaping their lives is
              written in a language they were never taught. When you can&apos;t read
              the code, you can&apos;t know what it collects, what it sends, or who
              it serves. Transparency without comprehension is just theater.
            </p>
            <p style={bodyStyle}>
              iGITit reads the code and tells you what it does — in plain
              language. Any public repository, analyzed and explained. Open
              source, open language.
            </p>
          </div>
          <a
            href="https://igitit.xyz"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm underline hover:no-underline"
            style={linkStyle}
          >
            igitit.xyz&nbsp;↗
          </a>
        </div>

        {/* [us] */}
        <div
          className="border text-center"
          style={{ borderColor: "#4A4A4A", padding: "32px", height: "auto" }}
        >
          <h2 className="text-xl font-semibold mb-6" style={headingStyle}>
            [us] — Authentic Human Connections
          </h2>
          <div className="space-y-4 mb-6">
            <p style={bodyStyle}>
              Every major platform optimizes for engagement. Not connection.
              Engagement. The result is a generation of people who are more
              reachable than ever and more lonely than ever. The infrastructure
              of human connection has been quietly replaced with infrastructure
              for attention capture.
            </p>
            <p style={bodyStyle}>
              [us] is built for connection — not content. Intake handled by [u].
              Genuine platonic, romantic, and professional relationships, built on
              consent and designed for people.
            </p>
          </div>
          <a
            href="https://uniteus.xyz"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm underline hover:no-underline"
            style={linkStyle}
          >
            uniteus.xyz&nbsp;↗
          </a>
        </div>

      </div>

      <div style={{ borderTop: "1px solid #4A4A4A" }} className="pt-10">
        <p
          className="text-sm"
          style={{ fontFamily: "var(--font-ibm-plex-mono)", color: "#4A4A4A" }}
        >
          All OMARO products are open-source.
          <br />
          All are built for people, not advertisers.
        </p>
      </div>
    </div>
  );
}
