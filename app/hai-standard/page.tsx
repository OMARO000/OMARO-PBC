import type { Metadata } from "next";
import LogoHero from "@/components/LogoHero";

export const metadata: Metadata = {
  title: "HAI Standard",
  description:
    "The HAI Standard is OMARO's grading standard and cultural contract for how AI should be built, deployed, and governed. Nine pillars. A scoring matrix. A public audit trail.",
};

const pillars = [
  {
    number: "I",
    name: "Integrity & Transparency",
    risk: "Opaque systems that cannot be examined or challenged.",
    requirements:
      "Disclosed training data sources, methods, known gaps, and known failure conditions. Minimum: public model card. Standard: IPFS-pinned disclosure document updated at each major version. Retroactive disclosure of changes required.",
  },
  {
    number: "II",
    name: "Accountability Chain",
    risk: "Diffuse responsibility enabling no one to be held liable.",
    requirements:
      "Named responsible parties for every deployment, publicly documented. When the system causes harm, there is a person. When that person is accountable, there is a record. Chain of accountability must include both the builder and the deployer.",
  },
  {
    number: "III",
    name: "Safety & Robustness",
    risk: "Catastrophic failures with no warning and no record.",
    requirements:
      "Documented known failure modes before launch. Ongoing public incident log. Registry updated within 72 hours of any identified failure. Systems affecting health, finance, or legal status require formal failure mode analysis before deployment.",
  },
  {
    number: "IV",
    name: "Equality & Non-Discrimination",
    risk: "Systemic discrimination embedded in automated decisions.",
    requirements:
      "Known biases identified, tested, and disclosed prior to deployment. Testing methodology disclosed alongside results. Updates to bias documentation triggered within 30 days of any reported incident. Disparate impact testing required for systems affecting access to services.",
  },
  {
    number: "V",
    name: "Human Override & Control",
    risk: "Automated decisions with no exit ramp.",
    requirements:
      "Every AI-assisted decision pathway affecting a human must include a documented, accessible, and functional human override mechanism. Overrides must be logged. Logs must be auditable. No system may be architected to make override prohibitively difficult.",
  },
  {
    number: "VI",
    name: "Use Limits & Proportionality",
    risk: "Data extraction disguised as service delivery.",
    requirements:
      "Explicit opt-in for all data collection. Clear disclosure of what is collected and why. Functional opt-out that results in actual deletion within 30 days. No dark patterns. Consent must be re-obtained when purpose changes.",
  },
  {
    number: "VII",
    name: "Data Sovereignty & Empowerment",
    risk: "Users treated as a resource, not a party.",
    requirements:
      "Users own their data. Export is functional, complete, and machine-readable. Deletion is real and verifiable, not archival. No data retained after deletion request beyond the legal minimum. Users may not be penalized for exercising data rights.",
  },
  {
    number: "VIII",
    name: "Independent Audit",
    risk: "Self-certification from parties with financial interest in passing.",
    requirements:
      "Third-party audit by an entity with no financial relationship to the deployer. Audit results pinned to IPFS with immutable timestamp. Full audit triggered at deployment. Annual re-audit thereafter, or upon any major version change. Audit refusal is a public record.",
  },
  {
    number: "IX",
    name: "Human Dignity Across the Full Stack",
    risk: "Vulnerable populations unprotected, and the human cost of AI production made invisible.",
    requirements:
      "Heightened design requirements and audit scrutiny for AI deployed toward children, elderly people, those in mental health crisis, and those without meaningful exit options. No dark patterns, no engagement optimization, no profiling that exploits diminished capacity. Mandatory human escalation pathways that cannot be gated behind friction. Organizations building AI must disclose labor conditions of data production pipelines, commit to fair compensation and safe working conditions for annotation workers, and account for environmental costs of their infrastructure. Accountability begins at the training pipeline, not at the product launch.",
  },
];

function Divider() {
  return <div style={{ borderTop: "1px solid #4A4A4A" }} />;
}

export default function RescueAIPage() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-16 md:py-24 text-center">

      <LogoHero />

      {/* Header */}
      <div className="mb-16">
        <p
          className="text-xs font-semibold tracking-widest uppercase mb-6"
          style={{ fontFamily: "var(--font-ibm-plex-mono)", color: "#B85C38" }}
        >
          HAI STANDARD
        </p>
        <h1
          className="text-3xl md:text-5xl font-semibold leading-tight"
          style={{ fontFamily: "var(--font-ibm-plex-mono)", color: "#1A1A1A" }}
        >
          Artificial intelligence is not the threat.
          <br />
          Unaccountable artificial intelligence is.
        </h1>
      </div>

      <Divider />

      {/* The argument */}
      <section className="py-16 space-y-8">
        <p
          className="text-base md:text-lg leading-relaxed"
          style={{ fontFamily: "var(--font-ibm-plex-sans)", color: "#1A1A1A" }}
        >
          We are not in a race against AI. We are in a race against the version
          of the future where humans forgot to keep a seat at the table.
        </p>
        <p
          className="text-base md:text-lg leading-relaxed"
          style={{ fontFamily: "var(--font-ibm-plex-sans)", color: "#1A1A1A" }}
        >
          The argument for pure AI maximalism is serious and worth engaging
          honestly. The competitive pressure is real. Nations and corporations
          that adopt AI faster will have advantages. This is not in dispute.
        </p>
        <p
          className="text-base md:text-lg leading-relaxed"
          style={{ fontFamily: "var(--font-ibm-plex-sans)", color: "#1A1A1A" }}
        >
          But the race argument has a flaw at its core: there is no finish line.
          Optimizing purely for AI adoption means continuously ceding human
          judgment, human roles, and human agency to systems you do not control.
          Winning the race means becoming the most efficiently dependent. That is
          not winning.
        </p>
        <p
          className="text-base md:text-lg leading-relaxed"
          style={{ fontFamily: "var(--font-ibm-plex-sans)", color: "#1A1A1A" }}
        >
          AI already outperforms humans at speed, scale, and pattern
          recognition. It cannot outperform humans at contextual moral judgment,
          genuine relationship, creative synthesis, or accountability — because
          those things require being human. The race framing assumes we are
          competing on AI&apos;s terms. OMARO proposes competing on human terms
          instead.
        </p>
        <p
          className="text-base md:text-lg leading-relaxed"
          style={{ fontFamily: "var(--font-ibm-plex-sans)", color: "#1A1A1A" }}
        >
          You do not have to choose between using AI and remaining human.
          Your phone&apos;s GPS knows every turn. You still decide where you&apos;re going.
          A system with human oversight degrades gracefully. A
          fully automated system fails catastrophically. Oversight is not
          friction. It is the architecture of resilience.
        </p>
        <p
          className="text-base md:text-lg leading-relaxed font-medium"
          style={{ fontFamily: "var(--font-ibm-plex-sans)", color: "#1A1A1A" }}
        >
          The HAI Standard is that architecture.
        </p>
      </section>

      <Divider />

      {/* The 8 Pillars */}
      <section className="py-16">
        <h2
          className="text-xs font-semibold tracking-widest uppercase mb-12"
          style={{ fontFamily: "var(--font-ibm-plex-mono)", color: "#B85C38" }}
        >
          The Nine Pillars
        </h2>

        <div className="space-y-0">
          {pillars.map((pillar, i) => (
            <div key={pillar.number}>
              <div className="py-10 text-center">
                <p
                  className="text-xs tabular-nums mb-2"
                  style={{ fontFamily: "var(--font-ibm-plex-mono)", color: "#B85C38" }}
                >
                  Pillar {pillar.number}
                </p>
                <h3
                  className="text-xl md:text-2xl font-semibold mb-6"
                  style={{ fontFamily: "var(--font-ibm-plex-mono)", color: "#1A1A1A" }}
                >
                  {pillar.name}
                </h3>

                <div className="space-y-4">
                  <div>
                    <p
                      className="text-xs font-semibold tracking-widest uppercase mb-2"
                      style={{ fontFamily: "var(--font-ibm-plex-mono)", color: "#B85C38" }}
                    >
                      Risk Addressed
                    </p>
                    <p
                      className="text-base leading-relaxed"
                      style={{ fontFamily: "var(--font-ibm-plex-sans)", color: "#4A4A4A" }}
                    >
                      {pillar.risk}
                    </p>
                  </div>
                  <div>
                    <p
                      className="text-xs font-semibold tracking-widest uppercase mb-2"
                      style={{ fontFamily: "var(--font-ibm-plex-mono)", color: "#B85C38" }}
                    >
                      Requirements
                    </p>
                    <p
                      className="text-base leading-relaxed"
                      style={{ fontFamily: "var(--font-ibm-plex-sans)", color: "#1A1A1A" }}
                    >
                      {pillar.requirements}
                    </p>
                  </div>
                </div>
              </div>
              {i < pillars.length - 1 && (
                <div style={{ borderTop: "1px solid #4A4A4A" }} />
              )}
            </div>
          ))}
        </div>
      </section>

      <Divider />

      {/* Version / registry */}
      <section className="py-12 space-y-2">
        <p
          className="text-xs tracking-wide"
          style={{ fontFamily: "var(--font-ibm-plex-mono)", color: "#B85C38" }}
        >
          HAI Standard v1.1 · 2026 · Published by OMARO Origins
        </p>
        <p
          className="text-xs tracking-wide"
          style={{ fontFamily: "var(--font-ibm-plex-mono)", color: "#B85C38" }}
        >
          Full documentation, scoring methodology, and compliance resources at omaro.xyz/hai-standard
        </p>
        <p
          className="text-xs tracking-wide"
          style={{ fontFamily: "var(--font-ibm-plex-mono)", color: "#B85C38" }}
        >
          The HAI Project public registry — track organizational commitments and audit status — at haiproject.xyz
        </p>
      </section>

      {/* Link to Origins */}
      <div className="py-4">
        <a
          href="/origins"
          style={{
            display: "inline-block",
            fontFamily: "var(--font-ibm-plex-mono)",
            fontSize: "13px",
            letterSpacing: "0.08em",
            color: "#B85C38",
            border: "1px solid #B85C38",
            padding: "10px 24px",
            textDecoration: "none",
          }}
        >
          Read the White Papers →
        </a>
      </div>

      <Divider />

      {/* Closing */}
      <section className="py-16">
        <p
          className="text-2xl md:text-3xl font-semibold"
          style={{ fontFamily: "var(--font-ibm-plex-mono)", color: "#1A1A1A" }}
        >
          OMARO builds the table.
          <br />
          You keep your seat.
        </p>
      </section>
    </div>
  );
}
