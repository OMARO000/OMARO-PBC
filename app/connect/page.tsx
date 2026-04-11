import type { Metadata } from "next";
import ConnectClient from "@/components/ConnectClient";
import SocialFeed from "@/components/SocialFeed";

export const metadata: Metadata = {
  title: "Connect",
  description: "Connect with OMARO PBC.",
};

function EmailRow({ label, address, note }: { label: string; address: string; note?: string }) {
  return (
    <div
      className="py-5 text-center"
      style={{ borderBottom: "1px solid #1A1A1A" }}
    >
      <p
        className="text-xs tracking-widest uppercase mb-1"
        style={{ fontFamily: "var(--font-ibm-plex-mono)", color: "#B85C38" }}
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
          style={{ fontFamily: "var(--font-ibm-plex-sans)", color: "#B85C38" }}
        >
          {note}
        </p>
      )}
    </div>
  );
}

export default function ConnectPage() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-16 md:py-24 text-center">
      <h1
        className="text-3xl md:text-5xl font-semibold mb-16"
        style={{ fontFamily: "var(--font-ibm-plex-mono)", color: "#1A1A1A" }}
      >
        Connect.
      </h1>

      {/* Social icons — client component for hover handlers */}
      <ConnectClient />

      {/* Social feed widget */}
      <SocialFeed />

      {/* Divider */}
      <div style={{ borderTop: "1px solid #1A1A1A" }} />

      {/* Email */}
      <div className="mb-12">
        <EmailRow
          label="General Inquiries"
          address="support@omaro.xyz"
        />
        <EmailRow
          label="Legal"
          address="legal@omaro.xyz"
        />
      </div>

      {/* What not to contact us about */}
      <section className="mt-16">
        <h2
          className="text-xs font-semibold tracking-widest uppercase mb-8"
          style={{ fontFamily: "var(--font-ibm-plex-mono)", color: "#B85C38" }}
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
          style={{ fontFamily: "var(--font-ibm-plex-sans)", color: "#1A1A1A" }}
        >
          Correction requests are reviewed only when accompanied by verifiable
          evidence that a documented fact is inaccurate. Corrections are issued
          publicly.
        </p>
      </section>
    </div>
  );
}
