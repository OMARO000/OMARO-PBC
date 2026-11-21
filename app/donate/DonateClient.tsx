"use client";

import { useState } from "react";
import { QRCodeCanvas } from "qrcode.react";

const MONO = "var(--font-ibm-plex-mono)";
const SANS = "var(--font-ibm-plex-sans)";
const TERRA = "var(--accent)";
const DARK = "var(--foreground)";
const BG = "var(--background)";

const PRESET_AMOUNTS = [5, 25, 100];

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p
      style={{
        fontFamily: MONO,
        fontSize: "11px",
        letterSpacing: "0.12em",
        textTransform: "uppercase",
        color: TERRA,
        marginBottom: "20px",
      }}
    >
      {children}
    </p>
  );
}

function Divider() {
  return <div style={{ borderTop: `1px solid ${DARK}`, margin: "48px 0" }} />;
}

function WalletAddress({
  address,
  label,
}: {
  address: string;
  label: string;
}) {
  const [copied, setCopied] = useState(false);

  async function handleCopy() {
    await navigator.clipboard.writeText(address);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "20px" }}>
      <QRCodeCanvas value={address} size={160} bgColor={BG} fgColor={DARK} />
      <button
        onClick={handleCopy}
        title="Click to copy"
        style={{
          fontFamily: MONO,
          fontSize: "12px",
          letterSpacing: "0.05em",
          color: DARK,
          background: "none",
          border: `1px solid ${DARK}`,
          borderRadius: "2px",
          padding: "10px 16px",
          cursor: "pointer",
          wordBreak: "break-all",
          textAlign: "center",
          maxWidth: "480px",
        }}
      >
        {address}
        <span
          style={{
            display: "block",
            fontSize: "10px",
            color: TERRA,
            marginTop: "6px",
            letterSpacing: "0.08em",
          }}
        >
          {copied ? "COPIED" : "CLICK TO COPY"}
        </span>
      </button>
      <p style={{ fontFamily: SANS, fontSize: "13px", color: DARK }}>{label}</p>
    </div>
  );
}

export default function DonateClient() {
  const [selectedAmount, setSelectedAmount] = useState<number>(25);
  const [customAmount, setCustomAmount] = useState("");
  const [loadingStripe, setLoadingStripe] = useState(false);
  const [stripeError, setStripeError] = useState<string | null>(null);

  const btcAddress = process.env.NEXT_PUBLIC_BTC_ADDRESS ?? "BTC_ADDRESS_NOT_SET";
  const xmrAddress = process.env.NEXT_PUBLIC_XMR_ADDRESS ?? "XMR_ADDRESS_NOT_SET";

  const effectiveAmount = customAmount ? parseFloat(customAmount) : selectedAmount;

  async function handleStripe() {
    if (!effectiveAmount || effectiveAmount <= 0) return;
    setLoadingStripe(true);
    setStripeError(null);
    try {
      const res = await fetch("/api/donate/stripe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ amountCents: Math.round(effectiveAmount * 100) }),
      });
      const data = await res.json();
      if (!res.ok || !data.url) {
        setStripeError(data.error ?? "Failed to start checkout.");
        setLoadingStripe(false);
        return;
      }
      window.location.href = data.url;
    } catch {
      setStripeError("Network error. Please try again.");
      setLoadingStripe(false);
    }
  }

  return (
    <div className="max-w-2xl mx-auto px-6 py-16 md:py-24">
      <h1
        className="text-3xl md:text-5xl font-semibold mb-8 text-center"
        style={{ fontFamily: MONO, color: DARK }}
      >
        Support the Mission.
      </h1>
      <p
        className="text-base leading-relaxed mb-16 text-center"
        style={{ fontFamily: SANS, color: DARK }}
      >
        OMARO builds IRIS with no ads and nothing sold about the people who use
        it. If this matters to you, this is how you keep the work going.
      </p>

      {/* ── Stripe ── */}
      <SectionLabel>Credit or Debit Card</SectionLabel>
      <div style={{ display: "flex", gap: "8px", flexWrap: "wrap", marginBottom: "16px" }}>
        {PRESET_AMOUNTS.map((amt) => (
          <button
            key={amt}
            onClick={() => {
              setSelectedAmount(amt);
              setCustomAmount("");
            }}
            style={{
              fontFamily: MONO,
              fontSize: "13px",
              letterSpacing: "0.05em",
              padding: "10px 20px",
              border: `1px solid ${TERRA}`,
              borderRadius: "2px",
              background: selectedAmount === amt && !customAmount ? TERRA : "transparent",
              color: selectedAmount === amt && !customAmount ? BG : TERRA,
              cursor: "pointer",
              transition: "background 0.15s, color 0.15s",
            }}
          >
            ${amt}
          </button>
        ))}
        <input
          type="number"
          min="1"
          placeholder="Custom"
          value={customAmount}
          onChange={(e) => {
            setCustomAmount(e.target.value);
            setSelectedAmount(0);
          }}
          style={{
            fontFamily: MONO,
            fontSize: "13px",
            padding: "10px 14px",
            border: `1px solid ${customAmount ? TERRA : DARK}`,
            borderRadius: "2px",
            background: customAmount ? TERRA : "transparent",
            color: customAmount ? BG : DARK,
            width: "100px",
            outline: "none",
          }}
        />
      </div>
      <button
        onClick={handleStripe}
        disabled={loadingStripe || !effectiveAmount}
        style={{
          fontFamily: MONO,
          fontSize: "12px",
          letterSpacing: "0.1em",
          textTransform: "uppercase",
          padding: "14px 32px",
          background: loadingStripe ? "#ccc" : TERRA,
          color: BG,
          border: "none",
          borderRadius: "2px",
          cursor: loadingStripe ? "not-allowed" : "pointer",
          display: "block",
          marginBottom: "12px",
          transition: "background 0.15s",
        }}
      >
        {loadingStripe ? "Redirecting…" : `Donate $${effectiveAmount || "—"} with Card`}
      </button>
      {stripeError && (
        <p style={{ fontFamily: SANS, fontSize: "12px", color: TERRA, marginBottom: "8px" }}>
          {stripeError}
        </p>
      )}
      <p style={{ fontFamily: MONO, fontSize: "11px", color: DARK, opacity: 0.6 }}>
        Processed securely by Stripe. OMARO never stores card details.
      </p>

      <Divider />

      {/* ── Bitcoin ── */}
      <SectionLabel>Bitcoin (BTC)</SectionLabel>
      <WalletAddress address={btcAddress} label="On-chain only. No Lightning yet." />

      <Divider />

      {/* ── Monero ── */}
      <SectionLabel>Monero (XMR)</SectionLabel>
      <WalletAddress
        address={xmrAddress}
        label="Monero is private by design. Preferred for privacy-conscious supporters."
      />

      <Divider />

      <p
        className="text-center text-sm leading-relaxed"
        style={{ fontFamily: SANS, color: DARK, opacity: 0.7 }}
      >
        All contributions go directly to infrastructure, development, and
        operations. OMARO is a Public Benefit Corporation — donations are not
        tax-deductible.
      </p>
    </div>
  );
}
