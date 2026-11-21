import type { Metadata } from "next";
import Link from "next/link";
import { LAYERS, CHANNELS } from "@/lib/iris";

export const metadata: Metadata = {
  title: "OMARO",
  description:
    "Agency By Design. OMARO PBC builds IRIS, the co-operating system for the internet: it reads what you agree to, sees what each app and page does, and tells you in plain words.",
};

const MONO = "var(--font-ibm-plex-mono)";
const SANS = "var(--font-ibm-plex-sans)";
const ACCENT = "var(--accent)";

function Divider() {
  return <div style={{ borderTop: "1px solid var(--border)" }} />;
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-xs font-semibold tracking-widest uppercase mb-8" style={{ fontFamily: MONO, color: ACCENT }}>
      {children}
    </p>
  );
}

function Body({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-base md:text-lg leading-relaxed" style={{ fontFamily: SANS, color: "var(--foreground)" }}>
      {children}
    </p>
  );
}

export default function Home() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="max-w-6xl mx-auto px-6 pt-16 text-center" style={{ paddingBottom: "48px" }}>
        <h1
          className="text-4xl md:text-6xl lg:text-7xl font-semibold leading-tight mb-8 mx-auto"
          style={{ fontFamily: MONO, color: "var(--foreground)" }}
        >
          Agency By Design.
          <span style={{
            display: "inline-block",
            width: "3px",
            height: "1em",
            background: ACCENT,
            marginLeft: "4px",
            verticalAlign: "text-bottom",
            animation: "blink 1.2s step-end infinite"
          }}></span>
        </h1>
        <p className="text-lg md:text-xl mx-auto max-w-2xl" style={{ fontFamily: SANS, color: "var(--foreground)" }}>
          IRIS, the co-operating system for the internet. It reads what you agree to, sees what each app and page
          does, and tells you in plain words.
        </p>
        <div className="mt-6 flex justify-center gap-6 flex-wrap">
          <Link href="/iris" style={{ fontFamily: MONO, fontSize: "0.75rem", letterSpacing: "0.1em", textTransform: "uppercase", color: ACCENT, textDecoration: "underline", textUnderlineOffset: "4px" }}>
            Meet IRIS &rarr;
          </Link>
          <a href="/donate" style={{ fontFamily: MONO, fontSize: "0.75rem", letterSpacing: "0.1em", textTransform: "uppercase", color: ACCENT, textDecoration: "underline", textUnderlineOffset: "4px" }}>
            Support the work &rarr;
          </a>
        </div>
      </section>

      <Divider />

      {/* ── IRIS ── */}
      <section className="max-w-3xl mx-auto px-6 py-16 md:py-20 text-center">
        <SectionLabel>What we build</SectionLabel>
        <div className="space-y-6">
          <Body>
            You agreed to policies nobody has time to read. Apps reach for your files, your screen and your typing, and
            nothing tells you. IRIS reads all of it for you, on your own device, and answers in plain language.
          </Body>
          <Body>
            Every answer shows the sentence it came from, so you can check it. No ads, no data brokers, and nothing about
            you is sold.
          </Body>
        </div>
        <div className="grid gap-4 mt-10 text-left md:grid-cols-2">
          {LAYERS.map((l) => (
            <div key={l.name} className="border p-6" style={{ borderColor: "var(--border)" }}>
              <h3 className="text-base font-semibold mb-2" style={{ fontFamily: MONO, color: "var(--foreground)" }}>
                {l.name}{l.status ? <span style={{ color: "var(--muted)", fontWeight: 400 }}> · {l.status}</span> : null}
              </h3>
              <p className="text-sm leading-relaxed" style={{ fontFamily: SANS, color: "var(--foreground)" }}>{l.what}</p>
            </div>
          ))}
        </div>
        <p className="text-sm mt-8" style={{ fontFamily: MONO, color: "var(--muted)" }}>
          {CHANNELS.map((c) => `${c.name}: ${c.status}`).join(" · ")}
        </p>
        <Link href="/iris" className="inline-block text-sm underline hover:no-underline mt-6" style={{ fontFamily: MONO, color: ACCENT, textUnderlineOffset: "4px" }}>
          More about IRIS &rarr;
        </Link>
      </section>

      <Divider />

      {/* ── HAI Standard ── */}
      <section className="max-w-3xl mx-auto px-6 py-16 md:py-20 text-center">
        <SectionLabel>HAI Standard</SectionLabel>
        <div className="space-y-6">
          <Body>
            The risk in artificial intelligence sits in the parts nobody answers for. The HAI Standard names each one.
          </Body>
          <Body>
            It is OMARO&apos;s standard for how AI should be built, deployed and governed: nine pillars, a scoring
            matrix, and a public audit trail. Any product, company or system can be scored, and every score stays on the
            record. IRIS uses the same nine pillars when it reads an AI product&apos;s code.
          </Body>
          <Link href="/hai-standard" className="inline-block text-sm underline hover:no-underline" style={{ fontFamily: MONO, color: ACCENT, textUnderlineOffset: "4px" }}>
            The nine pillars &rarr;
          </Link>
        </div>
      </section>

      <Divider />

      {/* ── OMARO ── */}
      <section className="max-w-3xl mx-auto px-6 py-16 md:py-20 text-center">
        <SectionLabel>Who we are</SectionLabel>
        <div className="space-y-6">
          <Body>
            OMARO is a public benefit corporation, in formation, building technology that returns authority to the
            people who use it. We publish how IRIS is measured, including where it still falls short.
          </Body>
          <a href="https://omaro-home-site.vercel.app/methodology.html" className="inline-block text-sm underline hover:no-underline" style={{ fontFamily: MONO, color: ACCENT, textUnderlineOffset: "4px" }}>
            How IRIS is measured &rarr;
          </a>
        </div>
      </section>
    </>
  );
}
