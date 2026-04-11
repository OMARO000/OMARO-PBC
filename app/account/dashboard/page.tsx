import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Account Dashboard",
  description: "Your OMARO account dashboard.",
};

export default function DashboardPage() {
  return (
    <div className="max-w-xl mx-auto px-6 py-16 md:py-24 text-center">
      <p
        className="text-xs tracking-widest uppercase mb-6"
        style={{ fontFamily: "var(--font-ibm-plex-mono)", color: "#B85C38" }}
      >
        Your OMARO Account
      </p>
      <h1
        className="text-2xl md:text-4xl font-semibold"
        style={{ fontFamily: "var(--font-ibm-plex-mono)", color: "#1A1A1A" }}
      >
        Account Dashboard — Coming Soon.
      </h1>
    </div>
  );
}
