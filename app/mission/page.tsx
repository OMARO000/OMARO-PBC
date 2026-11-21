import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mission",
  description:
    "Every race needs a finish line. This one doesn't have one. OMARO builds infrastructure for the humans who will live in the future.",
};

function Divider() {
  return <div style={{ borderTop: "1px solid #4A4A4A" }} />;
}

export default function MissionPage() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-16 md:py-24 text-center">


      <h1
        className="text-3xl md:text-5xl font-semibold leading-tight mb-16"
        style={{ fontFamily: "var(--font-ibm-plex-mono)", color: "var(--foreground)" }}
      >
        Every race needs a finish line.
        <br />
        This one doesn&apos;t have one.
      </h1>

      <div className="space-y-16">

        {/* Section 1 */}
        <div className="space-y-6">
          <p
            className="text-base md:text-lg leading-relaxed"
            style={{ fontFamily: "var(--font-ibm-plex-sans)", color: "var(--foreground)" }}
          >
            Somewhere along the way, progress became a competition. Not a
            competition with a clear opponent or a defined prize — just a
            forward motion that nobody agreed to and nobody can stop. Build
            faster. Adopt earlier. Automate more. Fall behind and lose. Lose
            what, exactly? Nobody says.
          </p>
          <p
            className="text-base md:text-lg leading-relaxed"
            style={{ fontFamily: "var(--font-ibm-plex-sans)", color: "var(--foreground)" }}
          >
            We think this is worth pausing on.
          </p>
        </div>

        <Divider />

        {/* Section 2 */}
        <p
          className="text-base md:text-lg leading-relaxed"
          style={{ fontFamily: "var(--font-ibm-plex-sans)", color: "var(--foreground)" }}
        >
          The things that make us worth building for — judgment, conscience,
          connection, the capacity to be accountable to one another — these are
          not inefficiencies to be engineered away. They are the point. They are
          what separates a civilization from a machine optimizing for its own
          continuation.
          <br /><br />
          Speed can be automated. Scale can be automated. Pattern recognition
          can be automated. The question of whether any of it was worth doing —
          that still requires a human being willing to answer for it.
        </p>

        <Divider />

        {/* Section 3 */}
        <p
          className="text-base md:text-lg leading-relaxed"
          style={{ fontFamily: "var(--font-ibm-plex-sans)", color: "var(--foreground)" }}
        >
          OMARO was built on a simple conviction: you were never supposed to be
          a user. You were supposed to be a person. The systems being built
          around you were supposed to serve you — not study you, not monetize
          you, not quietly remove you from decisions that shape your life.
          <br /><br />
          We are not nostalgic. We are not afraid of technology. We are paying
          attention to what gets lost when nobody is watching.
        </p>

        <Divider />

        {/* Section 4 */}
        <p
          className="text-base md:text-lg leading-relaxed"
          style={{ fontFamily: "var(--font-ibm-plex-sans)", color: "var(--foreground)" }}
        >
          What gets lost is trust. What gets lost is accountability. What gets
          lost is the belief that the infrastructure of daily life — the
          platforms, the institutions, the systems — was built with you in mind.
          <br /><br />
          We build infrastructure to recover that ground. Permanent records.
          Plain analysis. Real connection. Tools that treat the people using
          them as the point of the exercise.
        </p>

        <Divider />

        {/* Closing */}
        <p
          className="text-xl md:text-2xl font-semibold leading-snug"
          style={{ fontFamily: "var(--font-ibm-plex-mono)", color: "var(--accent)" }}
        >
          We are not building against the future.
          <br />
          We are building for the humans who will live in it.
        </p>

      </div>
    </div>
  );
}
