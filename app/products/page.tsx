import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Products",
  description:
    "OMARO PBC builds open-source tools for human accountability. OMEN Corporate Accountability Ledger is live now.",
};

export default function ProductsPage() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-16 md:py-24">
      <h1
        className="text-3xl md:text-5xl font-semibold mb-16"
        style={{ fontFamily: "var(--font-ibm-plex-mono)", color: "#1A1A1A" }}
      >
        What we build.
      </h1>

      <div className="space-y-8 max-w-2xl mb-20">
        {/* OMEN — LIVE */}
        <div
          className="border p-8"
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
          <h2
            className="text-xl font-semibold mb-4"
            style={{ fontFamily: "var(--font-ibm-plex-mono)", color: "#1A1A1A" }}
          >
            OMEN Corporate Accountability Ledger
          </h2>
          <p
            className="text-base leading-relaxed mb-6"
            style={{ fontFamily: "var(--font-ibm-plex-sans)", color: "#4A4A4A" }}
          >
            The permanent record of corporate violations. 646 monitored
            companies. Five categories: Privacy, Labor, Ethics, Environment,
            Antitrust. IPFS-immutable. Dual-toned. Sourced.
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

        {/* [us] — COMING */}
        <div
          className="border p-8"
          style={{ borderColor: "#4A4A4A" }}
        >
          <div className="mb-4">
            <span
              className="text-xs font-semibold tracking-widest uppercase px-2 py-1 border"
              style={{
                fontFamily: "var(--font-ibm-plex-mono)",
                color: "#4A4A4A",
                borderColor: "#4A4A4A",
              }}
            >
              COMING
            </span>
          </div>
          <h2
            className="text-xl font-semibold mb-4"
            style={{ fontFamily: "var(--font-ibm-plex-mono)", color: "#1A1A1A" }}
          >
            [us] — Human Connection Platform
          </h2>
          <p
            className="text-base leading-relaxed"
            style={{ fontFamily: "var(--font-ibm-plex-sans)", color: "#4A4A4A" }}
          >
            A voice-first platform for human connection. Built on behavioral
            matching, not algorithms. Intake handled by Sage. Architecture
            complete.
          </p>
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
