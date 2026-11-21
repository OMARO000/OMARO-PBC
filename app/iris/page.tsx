import type { Metadata } from "next";
import { LAYERS, CHANNELS } from "@/lib/iris";

export const metadata: Metadata = {
  title: "IRIS",
  description:
    "IRIS, the co-operating system for the internet. It reads privacy policies, terms and code for you, on your own device, and tells you in plain words what each app and site does with your data.",
};

const MONO = "var(--font-ibm-plex-mono)";
const SANS = "var(--font-ibm-plex-sans)";

function H2({ children }: { children: React.ReactNode }) {
  return <h2 style={{ fontFamily: MONO, fontSize: "20px", fontWeight: 500, color: "var(--foreground)", margin: "56px 0 20px" }}>{children}</h2>;
}
function P({ children }: { children: React.ReactNode }) {
  return <p style={{ fontFamily: SANS, fontSize: "16px", lineHeight: 1.75, color: "var(--foreground)", marginBottom: "16px" }}>{children}</p>;
}

export default function IrisPage() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-16 md:py-24">
      <svg viewBox="0 0 32 32" width="56" height="56" aria-hidden="true" style={{ marginBottom: "24px" }}>
        <path d="M11 7 4 16l7 9M21 7l7 9-7 9" fill="none" stroke="#3478E0" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="16" cy="16" r="4" fill="#3478E0" />
      </svg>
      <h1 style={{ fontFamily: MONO, fontSize: "2.5rem", fontWeight: 600, color: "var(--foreground)", marginBottom: "32px" }}>
        IRIS, the co-operating system for the internet.
      </h1>
      <P>
        Every app and website comes with promises you never read and behavior you never see. IRIS reads the privacy
        policy and terms for you, watches which companies each page and app talks to, and reads public code when there
        is some. Then it tells you, in plain words, what you agreed to and what is really happening.
      </P>
      <P>
        Every answer shows the sentence it came from. When a policy says nothing, IRIS says so instead of guessing.
      </P>

      <H2>What IRIS reads</H2>
      <div className="grid gap-4 md:grid-cols-2">
        {LAYERS.map((l) => (
          <div key={l.name} className="border p-6" style={{ borderColor: "var(--border)" }}>
            <h3 style={{ fontFamily: MONO, fontSize: "16px", fontWeight: 600, color: "var(--foreground)", marginBottom: "8px" }}>
              {l.name}{l.status ? <span style={{ color: "var(--muted)", fontWeight: 400 }}> · {l.status}</span> : null}
            </h3>
            <p style={{ fontFamily: SANS, fontSize: "14px", lineHeight: 1.7, color: "var(--foreground)" }}>{l.what}</p>
          </div>
        ))}
      </div>

      <H2>What stays with you</H2>
      <P>
        IRIS reads on your own device. When it fetches a maker&apos;s policy, only that page&apos;s address goes, to the
        maker&apos;s own website. Read the code sends only the repository&apos;s address to OMARO&apos;s code server.
        Each part has its own switch, and a part that&apos;s off reads nothing and sends nothing.
      </P>
      <P>
        Seeing is free. Acting for you, such as opt-outs and deletion requests with proof that they were sent, will be
        part of a paid plan.
      </P>

      <H2>Where it runs</H2>
      <ul style={{ fontFamily: SANS, fontSize: "16px", lineHeight: 1.9, color: "var(--foreground)", paddingLeft: "20px", listStyle: "disc" }}>
        {CHANNELS.map((c) => <li key={c.name}>{c.name}: {c.status}</li>)}
      </ul>
      <P>IRIS stays out of the Apple and Google app stores.</P>

      <H2>How it&apos;s measured</H2>
      <P>
        OMARO checks IRIS against policies labelled by hand and publishes the results, including the runs that
        didn&apos;t pass.
      </P>
      <a href="https://omaro-home-site.vercel.app/methodology.html" style={{ fontFamily: MONO, fontSize: "14px", color: "var(--accent)", textDecoration: "underline", textUnderlineOffset: "4px" }}>
        The IRIS methodology &rarr;
      </a>
    </div>
  );
}
