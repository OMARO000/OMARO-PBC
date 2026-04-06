import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Data Co-op",
  description: "You own what you bring. The OMARO Data Co-op returns value to the people whose data makes the research possible.",
}

function Divider() {
  return <div style={{ borderTop: "1px solid #4A4A4A" }} />
}

export default function DataCoopPage() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-16 md:py-24 text-center">
      <div className="mb-16">
        <p className="text-xs font-semibold tracking-widest uppercase mb-6" style={{ fontFamily: "var(--font-ibm-plex-mono)", color: "#B85C38" }}>
          Data Co-op
        </p>
        <h1 className="text-3xl md:text-5xl font-semibold leading-tight" style={{ fontFamily: "var(--font-ibm-plex-mono)", color: "#1A1A1A" }}>
          You own what you bring.
        </h1>
      </div>
      <Divider />
      <section className="py-16 space-y-8">
        <p className="text-base md:text-lg leading-relaxed" style={{ fontFamily: "var(--font-ibm-plex-sans)", color: "#1A1A1A" }}>
          Every OMARO product collects data with your knowledge and consent. That data funds research at the OMARO Human Research Institute. The research feeds back into what we build. You are not a source. You are a participant.
        </p>
        <p className="text-base md:text-lg leading-relaxed" style={{ fontFamily: "var(--font-ibm-plex-sans)", color: "#1A1A1A" }}>
          The Data Co-op is the mechanism. You choose what to share, from which products, for which purposes. You can withdraw at any time. Deletion is real. Nothing is retained beyond what you authorize.
        </p>
        <p className="text-base md:text-lg leading-relaxed" style={{ fontFamily: "var(--font-ibm-plex-sans)", color: "#1A1A1A" }}>
          Consent management and research participation requires an OMARO account. Log in below to manage your data preferences.
        </p>
        <div className="pt-4">
          <span className="inline-block text-sm tracking-widest uppercase" style={{ fontFamily: "var(--font-ibm-plex-mono)", color: "#B85C38" }}>
            Account login — coming soon
          </span>
        </div>
      </section>
    </div>
  )
}
