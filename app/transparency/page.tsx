import type { Metadata } from "next";
import LogoHero from "@/components/LogoHero";

export const metadata: Metadata = {
  title: "Transparency",
  description:
    "OMARO PBC publishes annual benefit reports, platform metrics, and enforcement actions. The record includes us.",
};

function MetricRow({ label, value }: { label: string; value: string }) {
  return (
    <div
      className="flex justify-between items-baseline py-4"
      style={{ borderBottom: "1px solid #4A4A4A" }}
    >
      <span
        className="text-sm text-left"
        style={{ fontFamily: "var(--font-ibm-plex-sans)", color: "#4A4A4A" }}
      >
        {label}
      </span>
      <span
        className="text-sm font-semibold tabular-nums text-right"
        style={{ fontFamily: "var(--font-ibm-plex-mono)", color: "#1A1A1A" }}
      >
        {value}
      </span>
    </div>
  );
}

export default function TransparencyPage() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-16 md:py-24 text-center">
      <LogoHero />

      <h1
        className="text-3xl md:text-5xl font-semibold mb-10"
        style={{ fontFamily: "var(--font-ibm-plex-mono)", color: "#1A1A1A" }}
      >
        The record includes us.
      </h1>

      <p
        className="text-base md:text-lg leading-relaxed mb-16"
        style={{ fontFamily: "var(--font-ibm-plex-sans)", color: "#1A1A1A" }}
      >
        OMARO PBC publishes annual benefit reports, platform metrics, and
        enforcement actions. We hold corporations accountable. We hold
        ourselves to the same standard.
      </p>

      {/* Annual Benefit Reports */}
      <section className="mb-16">
        <h2
          className="text-xs font-semibold tracking-widest uppercase mb-8"
          style={{ fontFamily: "var(--font-ibm-plex-mono)", color: "#4A4A4A" }}
        >
          Annual Benefit Reports
        </h2>
        <div className="mx-auto">
          <div
            className="flex justify-between items-baseline py-4"
            style={{ borderBottom: "1px solid #4A4A4A" }}
          >
            <span
              className="text-sm text-left"
              style={{ fontFamily: "var(--font-ibm-plex-sans)", color: "#1A1A1A" }}
            >
              2026
            </span>
            <span
              className="text-sm text-right"
              style={{ fontFamily: "var(--font-ibm-plex-mono)", color: "#4A4A4A" }}
            >
              Publishing Q4 2026
            </span>
          </div>
          <p
            className="text-xs mt-4"
            style={{ fontFamily: "var(--font-ibm-plex-mono)", color: "#4A4A4A" }}
          >
            All reports pinned to IPFS. Dual links: hosted + immutable.
          </p>
        </div>
      </section>

      {/* Platform Metrics */}
      <section className="mb-16">
        <h2
          className="text-xs font-semibold tracking-widest uppercase mb-8"
          style={{ fontFamily: "var(--font-ibm-plex-mono)", color: "#4A4A4A" }}
        >
          Platform Metrics
        </h2>
        <div style={{ borderTop: "1px solid #4A4A4A" }}>
          <MetricRow label="Companies monitored" value="646" />
          <MetricRow label="Violations documented" value="Pending agent run" />
          <MetricRow label="IPFS-pinned blocks" value="Pending" />
          <MetricRow label="API clients" value="0" />
          <MetricRow label="Data Co-op members" value="0" />
        </div>
      </section>

      {/* Enforcement Actions */}
      <section className="mb-16">
        <h2
          className="text-xs font-semibold tracking-widest uppercase mb-8"
          style={{ fontFamily: "var(--font-ibm-plex-mono)", color: "#4A4A4A" }}
        >
          Enforcement Actions
        </h2>
        <div style={{ borderTop: "1px solid #4A4A4A" }}>
          <MetricRow label="API clients terminated" value="0" />
          <MetricRow label="Correction requests received" value="0" />
          <MetricRow label="Corrections issued" value="0" />
        </div>
        <p
          className="text-xs mt-6"
          style={{ fontFamily: "var(--font-ibm-plex-mono)", color: "#4A4A4A" }}
        >
          All corrections are public. Nothing is silently removed.
        </p>
      </section>

      {/* RESCUE AI Audit Framework */}
      <section>
        <h2
          className="text-xs font-semibold tracking-widest uppercase mb-8"
          style={{ fontFamily: "var(--font-ibm-plex-mono)", color: "#4A4A4A" }}
        >
          RESCUE AI Audit Framework
        </h2>
        <div className="space-y-4">
          <p
            className="text-base leading-relaxed"
            style={{ fontFamily: "var(--font-ibm-plex-sans)", color: "#1A1A1A" }}
          >
            OMARO products are evaluated against the RESCUE AI standard —
            eight pillars covering human override, training transparency,
            consent architecture, accountability chain, bias documentation,
            failure mode registry, data sovereignty, and independent audit.
          </p>
          <p
            className="text-base leading-relaxed"
            style={{ fontFamily: "var(--font-ibm-plex-sans)", color: "#1A1A1A" }}
          >
            All audit results are pinned to IPFS. Dual links: hosted +
            immutable. OMARO holds itself to the same standard it publishes.
          </p>
          <div style={{ borderTop: "1px solid #4A4A4A" }}>
            <MetricRow label="RESCUE AI audits completed" value="Pending" />
            <MetricRow label="RESCUE AI audits pinned to IPFS" value="Pending" />
          </div>
        </div>
      </section>
    </div>
  );
}
