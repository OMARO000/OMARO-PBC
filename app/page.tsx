import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "OMARO PBC — Sovereign by design.",
  description:
    "Building tools for human evolution. OMARO PBC is a Public Benefit Corporation building open-source accountability infrastructure.",
};

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="max-w-6xl mx-auto px-6 py-24 md:py-36">
        <h1
          className="text-4xl md:text-6xl lg:text-7xl font-semibold leading-tight mb-6"
          style={{ fontFamily: "var(--font-ibm-plex-mono)", color: "#1A1A1A" }}
        >
          Sovereign by design.
        </h1>
        <p
          className="text-lg md:text-xl"
          style={{ fontFamily: "var(--font-ibm-plex-sans)", color: "#4A4A4A" }}
        >
          Building tools for human evolution.
        </p>
      </section>

      <div style={{ borderTop: "1px solid #4A4A4A" }} />

      {/* What We Build */}
      <section className="max-w-6xl mx-auto px-6 py-16 md:py-20">
        <h2
          className="text-xs font-semibold tracking-widest uppercase mb-8"
          style={{ fontFamily: "var(--font-ibm-plex-mono)", color: "#4A4A4A" }}
        >
          What We Build
        </h2>
        <p
          className="text-base md:text-lg leading-relaxed max-w-2xl"
          style={{ fontFamily: "var(--font-ibm-plex-sans)", color: "#1A1A1A" }}
        >
          OMARO PBC builds open-source tools that return power to individuals.
          We document what corporations do. We build what people need.
          We publish everything.
        </p>
      </section>

      <div style={{ borderTop: "1px solid #4A4A4A" }} />

      {/* Our First Tool */}
      <section className="max-w-6xl mx-auto px-6 py-16 md:py-20">
        <h2
          className="text-xs font-semibold tracking-widest uppercase mb-8"
          style={{ fontFamily: "var(--font-ibm-plex-mono)", color: "#4A4A4A" }}
        >
          Our First Tool
        </h2>

        <div
          className="border p-8 max-w-2xl"
          style={{ borderColor: "#4A4A4A" }}
        >
          <div className="mb-4">
            <span
              className="text-xs font-semibold tracking-widest uppercase px-2 py-1 border"
              style={{
                fontFamily: "var(--font-ibm-plex-mono)",
                color: "#1A1A1A",
                borderColor: "#1A1A1A",
              }}
            >
              LIVE
            </span>
          </div>
          <h3
            className="text-xl font-semibold mb-4"
            style={{ fontFamily: "var(--font-ibm-plex-mono)", color: "#1A1A1A" }}
          >
            OMEN Corporate Accountability Ledger
          </h3>
          <p
            className="text-base leading-relaxed mb-6"
            style={{ fontFamily: "var(--font-ibm-plex-sans)", color: "#4A4A4A" }}
          >
            A permanent, open-source ledger of corporate violations.
            Court records. Regulatory filings. SEC documents.
            Immutable. Sourced. Free.
          </p>
          <a
            href="https://omen-os.org"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm underline hover:no-underline"
            style={{
              fontFamily: "var(--font-ibm-plex-mono)",
              color: "#1A1A1A",
              textUnderlineOffset: "4px",
            }}
          >
            omen-os.org &rarr;
          </a>
        </div>
      </section>

      <div style={{ borderTop: "1px solid #4A4A4A" }} />

      {/* Why a PBC */}
      <section className="max-w-6xl mx-auto px-6 py-16 md:py-20">
        <h2
          className="text-xs font-semibold tracking-widest uppercase mb-8"
          style={{ fontFamily: "var(--font-ibm-plex-mono)", color: "#4A4A4A" }}
        >
          Why a PBC
        </h2>
        <p
          className="text-base md:text-lg leading-relaxed max-w-2xl"
          style={{ fontFamily: "var(--font-ibm-plex-sans)", color: "#1A1A1A" }}
        >
          OMARO is incorporated as a Public Benefit Corporation.
          Our legal obligation is to the public, not to shareholders.
          The mission is the product.
        </p>
      </section>
    </>
  );
}
