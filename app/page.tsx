import type { Metadata } from "next";
import Link from "next/link";
import LogoHero from "@/components/LogoHero";

export const metadata: Metadata = {
  title: "OMARO PBC — You were never supposed to be a user.",
  description:
    "Infrastructure that keeps humans in every room that matters. OMARO PBC is a Public Benefit Corporation building open-source tools for people.",
};

function Divider() {
  return <div style={{ borderTop: "1px solid #4A4A4A" }} />;
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p
      className="text-xs font-semibold tracking-widest uppercase mb-8"
      style={{ fontFamily: "var(--font-ibm-plex-mono)", color: "#4A4A4A" }}
    >
      {children}
    </p>
  );
}

export default function Home() {
  return (
    <>
      {/* ── Logo Hero ── */}
      <div className="max-w-3xl mx-auto px-6 pt-16">
        <LogoHero />
      </div>

      {/* ── Hero ── */}
      <section className="max-w-6xl mx-auto px-6 pb-24 md:pb-36 text-center">
        <h1
          className="text-4xl md:text-6xl lg:text-7xl font-semibold leading-tight mb-8 mx-auto"
          style={{ fontFamily: "var(--font-ibm-plex-mono)", color: "#1A1A1A" }}
        >
          You were never supposed to be a user.
          <br />
          OMARO builds for people.
        </h1>
        <p
          className="text-lg md:text-xl mx-auto max-w-2xl"
          style={{ fontFamily: "var(--font-ibm-plex-sans)", color: "#4A4A4A" }}
        >
          Infrastructure that keeps humans in every room that matters.
        </p>
      </section>

      <Divider />

      {/* ── What We Build ── */}
      <section className="max-w-3xl mx-auto px-6 py-16 md:py-20 text-center">
        <SectionLabel>What We Build</SectionLabel>
        <div className="space-y-6">
          <p
            className="text-base md:text-lg leading-relaxed"
            style={{ fontFamily: "var(--font-ibm-plex-sans)", color: "#1A1A1A" }}
          >
            We build infrastructure for people who refuse to be passive
            participants in systems that weren&apos;t designed for them. Not for
            engagement. Not for extraction. For the humans on the other side of
            every system that was built without them in mind.
          </p>
          <p
            className="text-base md:text-lg leading-relaxed"
            style={{ fontFamily: "var(--font-ibm-plex-sans)", color: "#1A1A1A" }}
          >
            No ads. No data brokers. No optimized outrage. Just infrastructure
            that tells the truth and treats you like a human.
          </p>
        </div>
      </section>

      <Divider />

      {/* ── RESCUE AI ── */}
      <section className="max-w-3xl mx-auto px-6 py-16 md:py-20 text-center">
        <SectionLabel>Rescue AI</SectionLabel>
        <div className="space-y-6">
          <p
            className="text-base md:text-lg leading-relaxed"
            style={{ fontFamily: "var(--font-ibm-plex-sans)", color: "#1A1A1A" }}
          >
            Artificial intelligence is not the threat. Unaccountable artificial
            intelligence is.
          </p>
          <p
            className="text-base md:text-lg leading-relaxed"
            style={{ fontFamily: "var(--font-ibm-plex-sans)", color: "#1A1A1A" }}
          >
            RESCUE AI is OMARO&apos;s grading standard and cultural contract for
            how AI should be built, deployed, and governed. Eight pillars. A
            scoring matrix. A public audit trail pinned to IPFS. Any product,
            company, or system can submit. Scores are permanent. Accountability
            is the point.
          </p>
          <p
            className="text-base md:text-lg leading-relaxed"
            style={{ fontFamily: "var(--font-ibm-plex-sans)", color: "#1A1A1A" }}
          >
            OMARO-supported builders meet the standard. Everyone else is on the
            record.
          </p>
          <Link
            href="/rescue-ai"
            className="inline-block text-sm underline hover:no-underline"
            style={{
              fontFamily: "var(--font-ibm-plex-mono)",
              color: "#1A1A1A",
              textUnderlineOffset: "4px",
            }}
          >
            Learn more &rarr;
          </Link>
        </div>
      </section>

      <Divider />

      {/* ── Products ── */}
      <section className="max-w-3xl mx-auto px-6 py-16 md:py-20 text-center">
        <SectionLabel>Products</SectionLabel>
        <div className="grid gap-6">

          {/* OMEN */}
          <div className="border p-8" style={{ borderColor: "#4A4A4A" }}>
            <h3
              className="text-lg font-semibold mb-3"
              style={{ fontFamily: "var(--font-ibm-plex-mono)", color: "#1A1A1A" }}
            >
              OMEN — Corporate Accountability Ledger
            </h3>
            <p
              className="text-base leading-relaxed mb-5"
              style={{ fontFamily: "var(--font-ibm-plex-sans)", color: "#4A4A4A" }}
            >
              We keep the receipts. Court-grade documentation of verified
              violations across thousands of companies. Permanent. Open.
              Citable.
            </p>
            <a
              href="https://omen.xyz"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm underline hover:no-underline"
              style={{
                fontFamily: "var(--font-ibm-plex-mono)",
                color: "#1A1A1A",
                textUnderlineOffset: "4px",
              }}
            >
              omen.xyz&nbsp;&rarr;
            </a>
          </div>

          {/* iGITit */}
          <div className="border p-8" style={{ borderColor: "#4A4A4A" }}>
            <h3
              className="text-lg font-semibold mb-3"
              style={{ fontFamily: "var(--font-ibm-plex-mono)", color: "#1A1A1A" }}
            >
              iGITit — Open Source Code Analysis
            </h3>
            <p
              className="text-base leading-relaxed mb-5"
              style={{ fontFamily: "var(--font-ibm-plex-sans)", color: "#4A4A4A" }}
            >
              Open source, open language. AI-generated plain-language analysis
              of any public GitHub, GitLab, or Radicle repository. What the
              code does. Who it serves. What it touches.
            </p>
            <a
              href="https://igitit.xyz"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm underline hover:no-underline"
              style={{
                fontFamily: "var(--font-ibm-plex-mono)",
                color: "#1A1A1A",
                textUnderlineOffset: "4px",
              }}
            >
              igitit.xyz&nbsp;&rarr;
            </a>
          </div>

          {/* [us] */}
          <div className="border p-8" style={{ borderColor: "#4A4A4A" }}>
            <h3
              className="text-lg font-semibold mb-3"
              style={{ fontFamily: "var(--font-ibm-plex-mono)", color: "#1A1A1A" }}
            >
              [us] — Authentic Human Connections
            </h3>
            <p
              className="text-base leading-relaxed mb-5"
              style={{ fontFamily: "var(--font-ibm-plex-sans)", color: "#4A4A4A" }}
            >
              Not social media. Intake handled by [u]. A platform for genuine
              platonic, romantic, and professional connection — built on
              consent, designed for people.
            </p>
            <a
              href="https://uniteus.xyz"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm underline hover:no-underline"
              style={{
                fontFamily: "var(--font-ibm-plex-mono)",
                color: "#1A1A1A",
                textUnderlineOffset: "4px",
              }}
            >
              uniteus.xyz&nbsp;&rarr;
            </a>
          </div>
        </div>
      </section>

      <Divider />

      {/* ── The Data Covenant ── */}
      <section className="max-w-3xl mx-auto px-6 py-16 md:py-20 text-center">
        <SectionLabel>The Data Covenant</SectionLabel>
        <div className="space-y-6">
          <h2
            className="text-2xl md:text-3xl font-semibold"
            style={{ fontFamily: "var(--font-ibm-plex-mono)", color: "#1A1A1A" }}
          >
            You own what you bring.
          </h2>
          <p
            className="text-base md:text-lg leading-relaxed"
            style={{ fontFamily: "var(--font-ibm-plex-sans)", color: "#1A1A1A" }}
          >
            Data collected inside OMARO products is used to make those products
            better. Users share in what it produces. Nothing is sold. Nothing
            leaves without your signature. The OMARO Human Connection Institute
            uses anonymized, consented data for research that feeds directly
            back into what we build.
          </p>
          <p
            className="text-base md:text-lg leading-relaxed"
            style={{ fontFamily: "var(--font-ibm-plex-sans)", color: "#1A1A1A" }}
          >
            This is not a policy. It is a promise with infrastructure behind it.
          </p>
        </div>
      </section>
    </>
  );
}
