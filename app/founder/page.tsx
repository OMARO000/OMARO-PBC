import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Founder",
  description: "BEAST — Founder & Architect, OMARO PBC.",
};

export default function FounderPage() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-16 md:py-24 text-center">
      <p
        className="text-xs font-semibold tracking-widest uppercase mb-6"
        style={{ fontFamily: "var(--font-ibm-plex-mono)", color: "#4A4A4A" }}
      >
        Founder
      </p>
      <h1
        className="text-3xl md:text-5xl font-semibold mb-4"
        style={{ fontFamily: "var(--font-ibm-plex-mono)", color: "#1A1A1A" }}
      >
        BEAST
      </h1>
      <p
        className="text-base mb-12"
        style={{ fontFamily: "var(--font-ibm-plex-mono)", color: "#4A4A4A" }}
      >
        Founder &amp; Architect, OMARO PBC
      </p>

      <div style={{ borderTop: "1px solid #4A4A4A" }} className="pt-12">
        <p
          className="text-base md:text-lg leading-relaxed"
          style={{ fontFamily: "var(--font-ibm-plex-sans)", color: "#4A4A4A" }}
        >
          Personal site — coming soon.
        </p>
      </div>
    </div>
  );
}
