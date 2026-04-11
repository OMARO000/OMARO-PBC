"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const MONO = "var(--font-ibm-plex-mono)";
const TERRA = "#B85C38";
const DARK = "#1A1A1A";
const BG = "#F0EDE8";

function parseAccountCookie(): string | null {
  if (typeof document === "undefined") return null;
  const match = document.cookie.match(/(?:^|;\s*)omaro_account=([^;]+)/);
  return match ? decodeURIComponent(match[1]) : null;
}

function maskNumber(digits: string): string {
  const d = digits.replace(/\s/g, "");
  if (d.length < 16) return digits;
  return `${d.slice(0, 4)}  ****  ****  ${d.slice(12, 16)}`;
}

export default function AccountCTA() {
  const [accountDigits, setAccountDigits] = useState<string | null>(null);

  useEffect(() => {
    setAccountDigits(parseAccountCookie());
  }, []);

  const btnBase: React.CSSProperties = {
    fontFamily: MONO,
    fontSize: "11px",
    letterSpacing: "0.08em",
    textTransform: "uppercase",
    padding: "8px 18px",
    borderRadius: "2px",
    textDecoration: "none",
    display: "inline-block",
    transition: "background 0.15s, color 0.15s",
  };

  return (
    <div
      style={{
        border: `1px solid ${TERRA}`,
        borderRadius: "2px",
        padding: "14px 18px",
        background: BG,
        textAlign: "left",
        marginBottom: "40px",
        maxWidth: "50%",
        margin: "0 auto 40px",
      }}
    >
      <p
        style={{
          fontFamily: MONO,
          fontSize: "11px",
          letterSpacing: "0.1em",
          textTransform: "uppercase",
          color: TERRA,
          marginBottom: "6px",
        }}
      >
        Your OMARO Account
      </p>
      <p
        style={{
          fontFamily: MONO,
          fontSize: "13px",
          color: DARK,
          marginBottom: "16px",
        }}
      >
        One number. Every OMARO product.
      </p>

      {accountDigits ? (
        <p
          style={{
            fontFamily: MONO,
            fontSize: "14px",
            letterSpacing: "0.12em",
            color: TERRA,
          }}
        >
          ACCOUNT ACTIVE — {maskNumber(accountDigits)}
        </p>
      ) : (
        <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
          <Link
            href="/account"
            style={{
              ...btnBase,
              border: `1px solid ${TERRA}`,
              color: TERRA,
              background: "transparent",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.background = TERRA;
              (e.currentTarget as HTMLElement).style.color = BG;
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.background = "transparent";
              (e.currentTarget as HTMLElement).style.color = TERRA;
            }}
          >
            Login
          </Link>
          <Link
            href="/account"
            style={{
              ...btnBase,
              border: `1px solid ${TERRA}`,
              color: BG,
              background: TERRA,
            }}
            onMouseEnter={(e) =>
              ((e.currentTarget as HTMLElement).style.background = "#9A4A2E")
            }
            onMouseLeave={(e) =>
              ((e.currentTarget as HTMLElement).style.background = TERRA)
            }
          >
            Create Account
          </Link>
        </div>
      )}
    </div>
  );
}
