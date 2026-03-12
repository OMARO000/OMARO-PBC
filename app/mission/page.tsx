import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mission",
  description:
    "OMARO PBC exists to build the accountability infrastructure that should have been built alongside the internet.",
};

export default function MissionPage() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-16 md:py-24">
      <h1
        className="text-3xl md:text-5xl font-semibold mb-16"
        style={{ fontFamily: "var(--font-ibm-plex-mono)", color: "#1A1A1A" }}
      >
        The mission.
      </h1>

      <div className="max-w-2xl space-y-8 mb-20">
        <p
          className="text-base md:text-lg leading-relaxed"
          style={{ fontFamily: "var(--font-ibm-plex-sans)", color: "#1A1A1A" }}
        >
          The accountability infrastructure that should have been built alongside
          the internet wasn&apos;t. OMARO exists to build it now.
        </p>
        <p
          className="text-base md:text-lg leading-relaxed"
          style={{ fontFamily: "var(--font-ibm-plex-sans)", color: "#1A1A1A" }}
        >
          We start with corporations. We document violations using primary
          sources only — court records, regulatory decisions, SEC filings.
          No secondhand accounts. No social media. No speculation.
        </p>
        <p
          className="text-base md:text-lg leading-relaxed"
          style={{ fontFamily: "var(--font-ibm-plex-sans)", color: "#1A1A1A" }}
        >
          Every block in the ledger is sourced, dual-toned (formal legal
          language and plain English), and permanently pinned to IPFS.
          The record does not change. It only grows.
        </p>
        <p
          className="text-base md:text-lg leading-relaxed"
          style={{ fontFamily: "var(--font-ibm-plex-sans)", color: "#1A1A1A" }}
        >
          We document Anthropic too. Independence is non-negotiable.
        </p>
      </div>

      <div style={{ borderTop: "1px solid #4A4A4A" }} className="pt-16">
        <h2
          className="text-xs font-semibold tracking-widest uppercase mb-10"
          style={{ fontFamily: "var(--font-ibm-plex-mono)", color: "#4A4A4A" }}
        >
          Principles
        </h2>
        <ol className="space-y-5 list-none p-0 m-0">
          {[
            "Primary sources only.",
            "Permanent and immutable.",
            "Open source and auditable.",
            "Independent — including from our own products.",
          ].map((principle, i) => (
            <li key={i} className="flex items-start gap-5">
              <span
                className="text-xs mt-1 tabular-nums"
                style={{ fontFamily: "var(--font-ibm-plex-mono)", color: "#4A4A4A" }}
              >
                {String(i + 1).padStart(2, "0")}.
              </span>
              <span
                className="text-base md:text-lg"
                style={{ fontFamily: "var(--font-ibm-plex-sans)", color: "#1A1A1A" }}
              >
                {principle}
              </span>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}
