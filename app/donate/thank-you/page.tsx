import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Thank You",
  description: "Thank you for supporting OMARO.",
};

export default function ThankYouPage() {
  return (
    <div className="max-w-xl mx-auto px-6 py-16 md:py-24 text-center">
      <h1
        className="text-3xl md:text-5xl font-semibold mb-8"
        style={{ fontFamily: "var(--font-ibm-plex-mono)", color: "var(--foreground)" }}
      >
        Thank You.
      </h1>
      <p
        className="text-base leading-relaxed mb-12"
        style={{ fontFamily: "var(--font-ibm-plex-sans)", color: "var(--foreground)" }}
      >
        Your support keeps OMARO independent.
      </p>
      <Link
        href="/"
        style={{
          fontFamily: "var(--font-ibm-plex-mono)",
          fontSize: "12px",
          letterSpacing: "0.08em",
          textTransform: "uppercase",
          color: "#9b1b30",
          textDecoration: "underline",
          textUnderlineOffset: "4px",
        }}
      >
        Back to home &rarr;
      </Link>
    </div>
  );
}
