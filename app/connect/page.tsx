"use client";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Connect",
  description: "Connect with OMARO PBC.",
};

const socials = [
  {
    label: "GitHub",
    href: "https://github.com/OMARO000",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
      </svg>
    ),
  },
  {
    label: "GitLab",
    href: "https://gitlab.com/omaro000-group",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
        <path d="M23.955 13.587l-1.342-4.135-2.664-8.189a.455.455 0 00-.867 0L16.418 9.45H7.582L4.918 1.263a.455.455 0 00-.867 0L1.386 9.45.044 13.587a.924.924 0 00.331 1.023L12 23.054l11.625-8.444a.924.924 0 00.33-1.023" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "#",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    label: "X / Twitter",
    href: "#",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.746l7.73-8.835L1.254 2.25H8.08l4.253 5.622 5.911-5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
];

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

      {/* Social icons */}
      <div className="flex items-center justify-center gap-8 mb-16">
        {socials.map(({ label, href, icon }) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
            style={{
              color: "#1A1A1A",
              transition: "color 0.2s",
              display: "flex",
              alignItems: "center",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "#B85C38")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "#1A1A1A")}
          >
            {icon}
          </a>
        ))}
      </div>

      {/* Divider */}
      <div style={{ borderTop: "1px solid #1A1A1A", marginBottom: "0" }} />

      {/* Email */}
      <div className="mb-12">
        <EmailRow
          label="General Inquiries"
          address="support@omaro.xyz"
          note="Email not yet active — launching with omaro.xyz domain."
        />
      </div>

      <div style={{ borderTop: "1px solid #1A1A1A" }} />

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
