import type { Metadata } from "next";
import LogoHero from "@/components/LogoHero";

export const metadata: Metadata = {
  title: "Products",
  description:
    "OMARO PBC builds open-source tools for people. OMEN, iGITit, and [us] — accountability, transparency, and human connection.",
};

interface ProductCardProps {
  status: "LIVE" | "COMING";
  name: string;
  description: string;
  url?: string;
  urlLabel?: string;
}

function ProductCard({ status, name, description, url, urlLabel }: ProductCardProps) {
  const isLive = status === "LIVE";
  return (
    <div className="border p-8 text-center" style={{ borderColor: "#4A4A4A" }}>
      <div className="mb-4">
        <span
          className="text-xs font-semibold tracking-widest uppercase px-2 py-1 border"
          style={{
            fontFamily: "var(--font-ibm-plex-mono)",
            color: isLive ? "#1A1A1A" : "#4A4A4A",
            borderColor: isLive ? "#1A1A1A" : "#4A4A4A",
          }}
        >
          {status}
        </span>
      </div>
      <h2
        className="text-xl font-semibold mb-4"
        style={{ fontFamily: "var(--font-ibm-plex-mono)", color: "#1A1A1A" }}
      >
        {name}
      </h2>
      <p
        className="text-base leading-relaxed mb-6"
        style={{ fontFamily: "var(--font-ibm-plex-sans)", color: "#4A4A4A" }}
      >
        {description}
      </p>
      {url && urlLabel && (
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm underline hover:no-underline"
          style={{
            fontFamily: "var(--font-ibm-plex-mono)",
            color: "#1A1A1A",
            textUnderlineOffset: "4px",
          }}
        >
          {urlLabel}&nbsp;&rarr;
        </a>
      )}
    </div>
  );
}

export default function ProductsPage() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-16 md:py-24 text-center">
      <LogoHero />

      <h1
        className="text-3xl md:text-5xl font-semibold mb-16"
        style={{ fontFamily: "var(--font-ibm-plex-mono)", color: "#1A1A1A" }}
      >
        What we build.
      </h1>

      <div className="space-y-6 mb-20">
        <ProductCard
          status="LIVE"
          name="OMEN — Corporate Accountability Ledger"
          description="We keep the receipts. Court-grade documentation of verified violations across thousands of companies. Permanent. Open. Citable."
          url="https://omen.xyz"
          urlLabel="omen.xyz"
        />
        <ProductCard
          status="LIVE"
          name="iGITit — Open Source Code Analysis"
          description="Open source, open language. AI-generated plain-language analysis of any public GitHub, GitLab, or Radicle repository. What the code does. Who it serves. What it touches."
          url="https://igitit.xyz"
          urlLabel="igitit.xyz"
        />
        <ProductCard
          status="COMING"
          name="[us] — Authentic Human Connections"
          description="Not social media. Intake handled by [u]. A platform for genuine platonic, romantic, and professional connection — built on consent, designed for people."
          url="https://uniteus.xyz"
          urlLabel="uniteus.xyz"
        />
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
