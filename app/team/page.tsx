import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Team",
  description:
    "OMARO PBC is a one-person operation. Built by one, for everyone.",
};

export default function TeamPage() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-16 md:py-24">
      <h1
        className="text-3xl md:text-5xl font-semibold mb-16"
        style={{ fontFamily: "var(--font-ibm-plex-mono)", color: "#1A1A1A" }}
      >
        Built by one.
      </h1>

      {/* Founder */}
      <section className="mb-16 max-w-2xl">
        <h2
          className="text-xs font-semibold tracking-widest uppercase mb-8"
          style={{ fontFamily: "var(--font-ibm-plex-mono)", color: "#4A4A4A" }}
        >
          Founder
        </h2>
        <div style={{ borderTop: "1px solid #4A4A4A" }} className="pt-8">
          <h3
            className="text-2xl font-semibold mb-2"
            style={{ fontFamily: "var(--font-ibm-plex-mono)", color: "#1A1A1A" }}
          >
            BEAST
          </h3>
          <p
            className="text-sm mb-6"
            style={{ fontFamily: "var(--font-ibm-plex-mono)", color: "#4A4A4A" }}
          >
            Founder &amp; Architect, OMARO PBC
          </p>
          <p
            className="text-base leading-relaxed"
            style={{ fontFamily: "var(--font-ibm-plex-sans)", color: "#1A1A1A" }}
          >
            OMARO PBC is a one-person operation. The infrastructure is built in
            public. The mission is permanent.
          </p>
        </div>
      </section>

      <div style={{ borderTop: "1px solid #4A4A4A" }} />

      {/* Operations */}
      <section className="my-16 max-w-2xl">
        <h2
          className="text-xs font-semibold tracking-widest uppercase mb-8"
          style={{ fontFamily: "var(--font-ibm-plex-mono)", color: "#4A4A4A" }}
        >
          Operations
        </h2>
        <p
          className="text-base leading-relaxed"
          style={{ fontFamily: "var(--font-ibm-plex-sans)", color: "#1A1A1A" }}
        >
          OMARO operates with open-source contributors and Data Co-op members
          worldwide. There is no VC. There is no board. There is the mission.
        </p>
      </section>

      <div style={{ borderTop: "1px solid #4A4A4A" }} />

      {/* Open positions */}
      <section className="mt-16 max-w-2xl">
        <h2
          className="text-xs font-semibold tracking-widest uppercase mb-8"
          style={{ fontFamily: "var(--font-ibm-plex-mono)", color: "#4A4A4A" }}
        >
          Open Positions
        </h2>
        <p
          className="text-base leading-relaxed mb-4"
          style={{ fontFamily: "var(--font-ibm-plex-sans)", color: "#1A1A1A" }}
        >
          No open positions currently. Contribute via GitHub or join the Data
          Co-op.
        </p>
        <a
          href="https://github.com/OMARO000"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm underline hover:no-underline"
          style={{
            fontFamily: "var(--font-ibm-plex-mono)",
            color: "#1A1A1A",
            textUnderlineOffset: "4px",
          }}
        >
          github.com/OMARO000 &rarr;
        </a>
      </section>
    </div>
  );
}
