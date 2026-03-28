import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mission",
  description:
    "OMARO exists because power has always moved faster than accountability. We are pro-human, pro-trust, pro-accountability.",
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
          OMARO exists because power has always moved faster than
          accountability.
        </p>
        <p
          className="text-base md:text-lg leading-relaxed"
          style={{ fontFamily: "var(--font-ibm-plex-sans)", color: "#1A1A1A" }}
        >
          We are a Public Benefit Corporation. That means our obligation is to
          the public, not to shareholders. Every product we build, every
          standard we publish, every record we pin to IPFS is in service of one
          idea: people deserve infrastructure that works for them.
        </p>
        <p
          className="text-base md:text-lg leading-relaxed"
          style={{ fontFamily: "var(--font-ibm-plex-sans)", color: "#1A1A1A" }}
        >
          We are pro-human. Pro-trust. Pro-accountability. We are not
          anti-technology — we are anti-extraction. There is a difference, and
          it matters.
        </p>
        <p
          className="text-base md:text-lg leading-relaxed"
          style={{ fontFamily: "var(--font-ibm-plex-sans)", color: "#1A1A1A" }}
        >
          The game we are playing is not beating AI. It is not stopping
          progress. It is making sure that no matter what the future brings,
          humans remain in it — informed, connected, and in control of what
          matters.
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
                className="text-xs mt-1 tabular-nums shrink-0"
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
