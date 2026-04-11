"use client";

import { useState, useEffect } from "react";
import { socialPosts } from "@/lib/socialPosts";

const MONO = "var(--font-ibm-plex-mono)";
const SANS = "var(--font-ibm-plex-sans)";
const TERRA = "#B85C38";
const DARK = "#1A1A1A";
const BG = "#F0EDE8";

const PLATFORM_ICONS: Record<string, React.ReactNode> = {
  x: (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.746l7.73-8.835L1.254 2.25H8.08l4.253 5.622 5.911-5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  ),
  linkedin: (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  ),
  bluesky: (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 10.8c-1.087-2.114-4.046-6.053-6.798-7.995C2.566.944 1.561 1.266.902 1.565.139 1.908 0 3.08 0 3.768c0 .69.378 5.65.624 6.479.815 2.958 3.816 3.844 6.914 3.503 3.732-.413 6.462 2.709 3.462 6.25z M12 10.8c1.087-2.114 4.046-6.053 6.798-7.995 2.636-1.861 3.641-1.539 4.3-1.24.763.343.902 1.515.902 2.203 0 .69-.378 5.65-.624 6.479-.815 2.958-3.816 3.844-6.914 3.503-3.732-.413-6.462 2.709-3.462 6.25z" />
    </svg>
  ),
};

export default function SocialFeed() {
  const [active, setActive] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisible(false);
      setTimeout(() => {
        setActive((prev) => (prev + 1) % socialPosts.length);
        setVisible(true);
      }, 300);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  function goTo(idx: number) {
    if (idx === active) return;
    setVisible(false);
    setTimeout(() => {
      setActive(idx);
      setVisible(true);
    }, 200);
  }

  const post = socialPosts[active];

  return (
    <div style={{ maxWidth: "480px", margin: "0 auto 24px" }}>
      {/* Card */}
      <div
        style={{
          border: `1px solid rgba(26,26,26,0.2)`,
          borderRadius: "2px",
          background: BG,
          padding: "14px 18px",
          opacity: visible ? 1 : 0,
          transition: "opacity 0.3s ease",
          minHeight: "130px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        {/* Top: icon + handle */}
        <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "12px" }}>
          <span style={{ color: TERRA }}>{PLATFORM_ICONS[post.platform]}</span>
          <span style={{ fontFamily: MONO, fontSize: "11px", color: TERRA, letterSpacing: "0.05em" }}>
            {post.handle}
          </span>
        </div>

        {/* Content */}
        <p style={{ fontFamily: SANS, fontSize: "14px", color: DARK, lineHeight: 1.6, flexGrow: 1 }}>
          {post.content}
        </p>

        {/* Bottom: view post + date */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginTop: "16px",
          }}
        >
          <a
            href={post.url}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              fontFamily: MONO,
              fontSize: "10px",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              color: TERRA,
              textDecoration: "underline",
              textUnderlineOffset: "3px",
            }}
          >
            View Post &rarr;
          </a>
          <span style={{ fontFamily: MONO, fontSize: "10px", color: DARK, opacity: 0.5 }}>
            {post.date}
          </span>
        </div>
      </div>

      {/* Dot indicators */}
      <div style={{ display: "flex", justifyContent: "center", gap: "8px", marginTop: "8px" }}>
        {socialPosts.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            aria-label={`Go to post ${i + 1}`}
            style={{
              width: "6px",
              height: "6px",
              borderRadius: "50%",
              border: "none",
              background: i === active ? TERRA : `rgba(26,26,26,0.25)`,
              cursor: "pointer",
              padding: 0,
              transition: "background 0.2s",
            }}
          />
        ))}
      </div>
    </div>
  );
}
