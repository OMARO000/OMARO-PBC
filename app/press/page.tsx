import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Press",
  description:
    "Press contact and brand assets for OMARO PBC. All press communications are encrypted.",
};

export default function PressPage() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-16 md:py-24 text-center">
      <h1
        className="text-3xl md:text-5xl font-semibold mb-16"
        style={{ fontFamily: "var(--font-ibm-plex-mono)", color: "#1A1A1A" }}
      >
        Press.
      </h1>

      {/* Press contact */}
      <section className="mb-16">
        <h2
          className="text-xs font-semibold tracking-widest uppercase mb-8"
          style={{ fontFamily: "var(--font-ibm-plex-mono)", color: "#4A4A4A" }}
        >
          Press Contact
        </h2>
        <div style={{ borderTop: "1px solid #4A4A4A" }} className="pt-8 space-y-3">
          <p
            className="text-sm"
            style={{ fontFamily: "var(--font-ibm-plex-mono)", color: "#4A4A4A" }}
          >
            Press contact
          </p>
          <a
            href="mailto:press@omaro-pbc.org"
            className="block text-base underline hover:no-underline"
            style={{
              fontFamily: "var(--font-ibm-plex-mono)",
              color: "#1A1A1A",
              textUnderlineOffset: "4px",
            }}
          >
            press@omaro-pbc.org
          </a>
          <p
            className="text-sm"
            style={{ fontFamily: "var(--font-ibm-plex-sans)", color: "#4A4A4A" }}
          >
            All press communications are encrypted. Use Tuta or PGP.
          </p>
        </div>
      </section>

      <div style={{ borderTop: "1px solid #4A4A4A" }} />

      {/* Brand assets */}
      <section className="my-16">
        <h2
          className="text-xs font-semibold tracking-widest uppercase mb-8"
          style={{ fontFamily: "var(--font-ibm-plex-mono)", color: "#4A4A4A" }}
        >
          Brand Assets
        </h2>
        <p
          className="text-base leading-relaxed"
          style={{ fontFamily: "var(--font-ibm-plex-sans)", color: "#1A1A1A" }}
        >
          Logo files, brand guidelines, and approved descriptions available on
          request. Email{" "}
          <a
            href="mailto:press@omaro-pbc.org"
            className="underline hover:no-underline"
            style={{ color: "#1A1A1A", textUnderlineOffset: "4px" }}
          >
            press@omaro-pbc.org
          </a>
          .
        </p>
      </section>

      <div style={{ borderTop: "1px solid #4A4A4A" }} />

      {/* Coverage */}
      <section className="my-16">
        <h2
          className="text-xs font-semibold tracking-widest uppercase mb-8"
          style={{ fontFamily: "var(--font-ibm-plex-mono)", color: "#4A4A4A" }}
        >
          Coverage
        </h2>
        <p
          className="text-sm"
          style={{ fontFamily: "var(--font-ibm-plex-sans)", color: "#4A4A4A" }}
        >
          No coverage yet. Launch coverage will appear here.
        </p>
      </section>

      <div style={{ borderTop: "1px solid #4A4A4A" }} />

      {/* Press releases */}
      <section className="my-16">
        <h2
          className="text-xs font-semibold tracking-widest uppercase mb-8"
          style={{ fontFamily: "var(--font-ibm-plex-mono)", color: "#4A4A4A" }}
        >
          Press Releases
        </h2>
        <p
          className="text-sm"
          style={{ fontFamily: "var(--font-ibm-plex-sans)", color: "#4A4A4A" }}
        >
          No press releases yet.
        </p>
      </section>

      <div style={{ borderTop: "1px solid #4A4A4A" }} />

      {/* Note */}
      <section className="mt-16">
        <p
          className="text-sm"
          style={{ fontFamily: "var(--font-ibm-plex-mono)", color: "#4A4A4A" }}
        >
          OMARO does not accept advertising, sponsorship, or paid placement
          inquiries.
        </p>
      </section>
    </div>
  );
}
