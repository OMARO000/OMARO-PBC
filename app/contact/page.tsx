import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact OMARO PBC. All addresses are Tuta encrypted. PGP available on request.",
};

function EmailRow({ label, address, note }: { label: string; address: string; note?: string }) {
  return (
    <div
      className="py-5 text-center"
      style={{ borderBottom: "1px solid #4A4A4A" }}
    >
      <p
        className="text-xs tracking-widest uppercase mb-1"
        style={{ fontFamily: "var(--font-ibm-plex-mono)", color: "#4A4A4A" }}
      >
        {label}
      </p>
      <a
        href={`mailto:${address}`}
        className="text-base underline hover:no-underline"
        style={{
          fontFamily: "var(--font-ibm-plex-mono)",
          color: "#1A1A1A",
          textUnderlineOffset: "4px",
        }}
      >
        {address}
      </a>
      {note && (
        <p
          className="text-xs mt-1"
          style={{ fontFamily: "var(--font-ibm-plex-sans)", color: "#4A4A4A" }}
        >
          {note}
        </p>
      )}
    </div>
  );
}

export default function ContactPage() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-16 md:py-24 text-center">
      <h1
        className="text-3xl md:text-5xl font-semibold mb-16"
        style={{ fontFamily: "var(--font-ibm-plex-mono)", color: "#1A1A1A" }}
      >
        Contact.
      </h1>

      {/* Email addresses */}
      <div
        className="mb-12"
        style={{ borderTop: "1px solid #4A4A4A" }}
      >
        <EmailRow label="General" address="hello@omaro-pbc.org" />
        <EmailRow label="Press" address="press@omaro-pbc.org" />
        <EmailRow label="Legal" address="legal@omaro-pbc.org" />
        <EmailRow
          label="Security"
          address="security@omaro-pbc.org"
          note="For vulnerability reports only."
        />
      </div>

      {/* Encryption note */}
      <p
        className="text-sm mb-16"
        style={{ fontFamily: "var(--font-ibm-plex-mono)", color: "#4A4A4A" }}
      >
        All addresses are Tuta encrypted. PGP available on request.
      </p>

      <div style={{ borderTop: "1px solid #4A4A4A" }} />

      {/* What not to contact us about */}
      <section className="mt-16">
        <h2
          className="text-xs font-semibold tracking-widest uppercase mb-8"
          style={{ fontFamily: "var(--font-ibm-plex-mono)", color: "#4A4A4A" }}
        >
          What Not to Contact Us About
        </h2>
        <p
          className="text-base mb-6"
          style={{ fontFamily: "var(--font-ibm-plex-sans)", color: "#1A1A1A" }}
        >
          We do not accept:
        </p>
        <ul className="space-y-3 mb-8 list-none p-0 m-0">
          {[
            "Advertising or sponsorship inquiries.",
            "Paid placement requests.",
            "Requests to remove or modify documented violations.",
            "Unsolicited investment offers.",
          ].map((item, i) => (
            <li
              key={i}
              className="text-base"
              style={{ fontFamily: "var(--font-ibm-plex-sans)", color: "#1A1A1A" }}
            >
              {item}
            </li>
          ))}
        </ul>
        <p
          className="text-base leading-relaxed"
          style={{ fontFamily: "var(--font-ibm-plex-sans)", color: "#4A4A4A" }}
        >
          Correction requests are reviewed only when accompanied by verifiable
          evidence that a documented fact is inaccurate. Corrections are issued
          publicly.
        </p>
      </section>
    </div>
  );
}
