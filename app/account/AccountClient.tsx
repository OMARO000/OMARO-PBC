"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { generateAccountNumber } from "@/lib/account";

const MONO = "var(--font-ibm-plex-mono)";
const SANS = "var(--font-ibm-plex-sans)";
const TERRA = "#9b1b30";
const DARK = "#1A1A1A";
const BG = "#ffffff";

function PrimaryButton({
  children,
  onClick,
  disabled,
}: {
  children: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
}) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      style={{
        fontFamily: MONO,
        fontSize: "12px",
        letterSpacing: "0.1em",
        textTransform: "uppercase",
        padding: "12px 28px",
        background: disabled ? "#ccc" : TERRA,
        color: BG,
        border: "none",
        borderRadius: "2px",
        cursor: disabled ? "not-allowed" : "pointer",
        transition: "background 0.15s",
      }}
      onMouseEnter={(e) => {
        if (!disabled) e.currentTarget.style.background = "#9A4A2E";
      }}
      onMouseLeave={(e) => {
        if (!disabled) e.currentTarget.style.background = TERRA;
      }}
    >
      {children}
    </button>
  );
}

export default function AccountClient() {
  const router = useRouter();
  const [mode, setMode] = useState<"create" | "login">("create");

  // Create flow state
  const [generatedNumber, setGeneratedNumber] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);
  const [saved, setSaved] = useState(false);
  const [activating, setActivating] = useState(false);
  const [createError, setCreateError] = useState<string | null>(null);

  // Login flow state
  const [loginInput, setLoginInput] = useState("");
  const [loggingIn, setLoggingIn] = useState(false);
  const [loginError, setLoginError] = useState<string | null>(null);

  function handleGenerate() {
    setGeneratedNumber(generateAccountNumber());
    setCopied(false);
    setSaved(false);
    setCreateError(null);
  }

  async function handleCopy() {
    if (!generatedNumber) return;
    await navigator.clipboard.writeText(generatedNumber);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  async function handleActivate() {
    if (!generatedNumber || !saved) return;
    setActivating(true);
    setCreateError(null);
    try {
      const res = await fetch("/api/account/create", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ number: generatedNumber }),
      });
      if (!res.ok) {
        const data = await res.json();
        setCreateError(data.error ?? "Something went wrong.");
        setActivating(false);
        return;
      }
      router.push("/account/dashboard");
    } catch {
      setCreateError("Network error. Please try again.");
      setActivating(false);
    }
  }

  async function handleLogin(e: React.FormEvent) {
    e.preventDefault();
    setLoggingIn(true);
    setLoginError(null);
    try {
      const res = await fetch("/api/account/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ number: loginInput }),
      });
      if (!res.ok) {
        setLoginError("Account number not found.");
        setLoggingIn(false);
        return;
      }
      router.push("/account/dashboard");
    } catch {
      setLoginError("Network error. Please try again.");
      setLoggingIn(false);
    }
  }

  return (
    <div
      className="max-w-xl mx-auto px-6 py-16 md:py-24 text-center"
      style={{ fontFamily: MONO }}
    >
      <p
        className="text-xs tracking-widest uppercase mb-6"
        style={{ color: TERRA }}
      >
        Your OMARO Account
      </p>

      {mode === "create" ? (
        <>
          <p
            className="text-base leading-relaxed mb-12"
            style={{ fontFamily: SANS, color: DARK }}
          >
            One account number works across every OMARO product — [us], OMEN,
            HAI Project, and everything we build. There is no email address. No
            password. Just a number that is yours. We cannot recover it if you
            lose it.
          </p>

          {!generatedNumber ? (
            <PrimaryButton onClick={handleGenerate}>
              Generate My Account Number
            </PrimaryButton>
          ) : (
            <div className="space-y-6">
              {/* Number display */}
              <button
                onClick={handleCopy}
                title="Click to copy"
                style={{
                  fontFamily: MONO,
                  fontSize: "clamp(20px, 5vw, 32px)",
                  letterSpacing: "0.15em",
                  color: DARK,
                  background: "none",
                  border: `2px solid ${DARK}`,
                  borderRadius: "2px",
                  padding: "20px 28px",
                  cursor: "pointer",
                  display: "block",
                  width: "100%",
                  textAlign: "center",
                  transition: "border-color 0.15s",
                }}
              >
                {generatedNumber}
                <span
                  style={{
                    display: "block",
                    fontSize: "10px",
                    letterSpacing: "0.08em",
                    color: TERRA,
                    marginTop: "8px",
                  }}
                >
                  {copied ? "COPIED" : "CLICK TO COPY"}
                </span>
              </button>

              <p style={{ fontSize: "11px", color: TERRA, letterSpacing: "0.05em" }}>
                Write this down. Screenshot it. Store it somewhere safe.
                This is the only time it will be shown in full.
              </p>

              <label
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "10px",
                  fontSize: "12px",
                  letterSpacing: "0.05em",
                  color: DARK,
                  cursor: "pointer",
                }}
              >
                <input
                  type="checkbox"
                  checked={saved}
                  onChange={(e) => setSaved(e.target.checked)}
                  style={{ width: "16px", height: "16px", accentColor: TERRA }}
                />
                I have saved my account number
              </label>

              {createError && (
                <p style={{ fontSize: "12px", color: TERRA }}>{createError}</p>
              )}

              <PrimaryButton onClick={handleActivate} disabled={!saved || activating}>
                {activating ? "Activating…" : "Activate Account"}
              </PrimaryButton>
            </div>
          )}

          <p style={{ marginTop: "40px", fontSize: "11px", color: TERRA }}>
            <button
              onClick={() => setMode("login")}
              style={{
                background: "none",
                border: "none",
                cursor: "pointer",
                fontFamily: MONO,
                fontSize: "11px",
                color: TERRA,
                textDecoration: "underline",
                textUnderlineOffset: "3px",
              }}
            >
              Already have an account? Login
            </button>
          </p>
        </>
      ) : (
        <>
          <p
            className="text-base leading-relaxed mb-12"
            style={{ fontFamily: SANS, color: DARK }}
          >
            Enter your 16-digit account number to access your OMARO account.
          </p>

          <form onSubmit={handleLogin} className="space-y-6">
            <input
              type="text"
              value={loginInput}
              onChange={(e) => setLoginInput(e.target.value)}
              placeholder="0000 0000 0000 0000"
              maxLength={19}
              style={{
                fontFamily: MONO,
                fontSize: "20px",
                letterSpacing: "0.15em",
                color: DARK,
                background: "none",
                border: `1px solid ${DARK}`,
                borderRadius: "2px",
                padding: "14px 20px",
                width: "100%",
                textAlign: "center",
                outline: "none",
              }}
            />

            {loginError && (
              <p style={{ fontSize: "12px", color: TERRA }}>{loginError}</p>
            )}

            <PrimaryButton disabled={loggingIn}>
              {loggingIn ? "Checking…" : "Enter"}
            </PrimaryButton>
          </form>

          <p style={{ marginTop: "40px", fontSize: "11px", color: TERRA }}>
            <button
              onClick={() => {
                setMode("create");
                setLoginError(null);
                setLoginInput("");
              }}
              style={{
                background: "none",
                border: "none",
                cursor: "pointer",
                fontFamily: MONO,
                fontSize: "11px",
                color: TERRA,
                textDecoration: "underline",
                textUnderlineOffset: "3px",
              }}
            >
              Need an account? Create one
            </button>
          </p>
        </>
      )}
    </div>
  );
}
