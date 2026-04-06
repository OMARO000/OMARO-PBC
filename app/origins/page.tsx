"use client";

import { useState, useRef, useEffect } from "react";
import LogoHero from "@/components/LogoHero";

const GOLD = "#C4974A";
const BG = "#0f0e0c";
const TEXT = "#F0EDE8";
const MUTED = "#6a6a62";
const BORDER = "#2a2a26";

const TTR_BODY = `Most books about trust tell you it was broken by someone else. This one doesn't.

The Trust Renaissance begins with a different premise — that the erosion of trust is not something that happened to you, but something you participated in. Not because you were weak or foolish. Because you were human. Because the hunger for something solid, something outside yourself that would hold, is one of the most ancient and understandable drives a person can have. And because the systems, relationships, and beliefs that presented themselves as solid were very good at looking like what you needed.

The book moves through four rooms in the order most people enter them. The first is the most intimate — the people who were supposed to know you before you had language for being known, and what you learned to do with yourself when they couldn't. The second is institutional — the schools, religions, governments, workplaces, and ideologies you walked into already carrying the bruise of the first room, already practiced at the art of handing your center to something outside yourself and hoping it would hold. The third is the hardest — the morning you couldn't blame anyone else, when the receipts pointed inward, when the voice you had been negotiating with your whole life refused to be quiet any longer. The fourth is not a resolution. It is a discovery. Something that was always there. Something that does not collapse.

Woven throughout are twenty-one voices — strangers, friends, family members, people at the edges of society and at its center — each of them circling, without knowing it, the same question the book never stops asking: have you heard the voice? The one that speaks before your reasons do. The one you've been feeding excuses and asking to wait. The one that kept speaking anyway.

The Trust Renaissance does not offer a system to replace the last system. It does not promise healing on a timeline or transformation through steps. It offers something rarer and more difficult — a way of seeing your own participation in the things that cost you, not as indictment, but as the only doorway back to yourself that has ever actually worked.

The renaissance is not an event. It is not waiting for you at the end of the book. It is what becomes possible the moment you stop pretending you don't hear it.`;

const OMARO_WP_BODY = `The OMARO White Paper lays out the philosophical and structural foundation of OMARO PBC — why it was built, how it operates, and what it is building toward. It begins with the human condition: the ancient pattern of outsourcing authority to people, institutions, and eventually technology.

OMARO's products reflect radical transparency, data belonging to the person, and permanent public accountability — principles that align with and inform the HAI Standard. It introduces each product as a coherent answer to the same question expressed in different domains. And it closes with a vision of sovereign culture: not a future event, but what becomes possible one person at a time when inner work meets infrastructure built to receive it.`;

function Divider() {
  return <div style={{ borderTop: `1px solid ${BORDER}`, margin: "60px 0" }} />;
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p style={{ fontFamily: "var(--font-ibm-plex-mono)", fontSize: "11px", letterSpacing: "0.15em", color: GOLD, marginBottom: "24px", textTransform: "uppercase" }}>
      {children}
    </p>
  );
}

function DownloadButton({ label, href, download }: { label: string; href: string; download?: boolean }) {
  return (
    <a
      href={href}
      download={download || undefined}
      style={{
        display: "inline-block",
        fontFamily: "var(--font-ibm-plex-mono)",
        fontSize: "12px",
        letterSpacing: "0.08em",
        color: GOLD,
        border: `1px solid ${GOLD}`,
        padding: "8px 20px",
        textDecoration: "none",
        marginTop: "32px",
        transition: "background 0.2s, color 0.2s",
      }}
      onMouseEnter={e => {
        (e.currentTarget as HTMLAnchorElement).style.background = GOLD;
        (e.currentTarget as HTMLAnchorElement).style.color = BG;
      }}
      onMouseLeave={e => {
        (e.currentTarget as HTMLAnchorElement).style.background = "transparent";
        (e.currentTarget as HTMLAnchorElement).style.color = GOLD;
      }}
    >
      {label}
    </a>
  );
}

const LIST_RE = /^(\*\*)?([IVXLCDM]+\.|[0-9]+\.)\s*/;

function stripMd(text: string): string {
  return text.replace(/\*\*(.+?)\*\*/g, "$1");
}

function AssistantBubbles({ content }: { content: string }) {
  const bubbleStyle = {
    maxWidth: "80%",
    padding: "10px 16px",
    background: BORDER,
    color: TEXT,
    fontFamily: "var(--font-ibm-plex-sans)",
    fontSize: "14px",
    lineHeight: 1.6,
  };

  const paragraphs = content.split(/\n\n+/);

  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", gap: "0.25rem" }}>
      {paragraphs.map((para, i) => {
        const lines = para.split(/\n/).filter(l => l.trim());
        const isList = lines.length > 1 && lines.every(l => LIST_RE.test(l.trim()));

        if (isList) {
          return (
            <div key={i} style={bubbleStyle}>
              <ul style={{ margin: 0, padding: "0 0 0 1.2em" }}>
                {lines.map((line, j) => (
                  <li key={j}>{stripMd(line.replace(LIST_RE, "").trim())}</li>
                ))}
              </ul>
            </div>
          );
        }

        return (
          <div key={i} style={bubbleStyle}>
            {stripMd(para.trim())}
          </div>
        );
      })}
    </div>
  );
}

function ChatUI() {
  const [messages, setMessages] = useState<{ role: "user" | "assistant"; content: string }[]>([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [streamingResponse, setStreamingResponse] = useState("");
  const bottomRef = useRef<HTMLDivElement>(null);
  const messageCount = messages.length;

  useEffect(() => {
    if (messageCount === 0 && !streamingResponse) return;
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messageCount, streamingResponse]);

  async function handleSend() {
    const trimmed = input.trim();
    if (!trimmed || loading) return;
    const userMessage = { role: "user" as const, content: trimmed };
    const updatedMessages = [...messages, userMessage];
    setMessages(updatedMessages);
    setInput("");
    setLoading(true);
    setStreamingResponse("");

    try {
      const res = await fetch("/api/chat/origins", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: updatedMessages }),
      });

      if (!res.ok || !res.body) throw new Error("Request failed");

      const reader = res.body.getReader();
      const decoder = new TextDecoder();
      let full = "";

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        const chunk = decoder.decode(value, { stream: true });
        full += chunk;
        setStreamingResponse(full);
      }

      setMessages(prev => [...prev, { role: "assistant", content: full }]);
    } catch {
      setMessages(prev => [...prev, { role: "assistant", content: "Something went wrong. Please try again." }]);
    } finally {
      setLoading(false);
      setStreamingResponse("");
    }
  }

  function handleKey(e: React.KeyboardEvent) {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  }

  return (
    <div style={{ border: `1px solid ${BORDER}`, marginTop: "24px" }}>
      {/* Message area */}
      <div style={{ minHeight: "280px", maxHeight: "400px", overflowY: "auto", padding: "24px", display: "flex", flexDirection: "column", gap: "16px" }}>
        {messages.length === 0 && !streamingResponse && (
          <p style={{ fontFamily: "var(--font-ibm-plex-sans)", fontSize: "14px", color: MUTED, fontStyle: "italic" }}>
            Ask a question about OMARO, the HAI Standard, or The Trust Renaissance.
          </p>
        )}
        {messages.map((msg, i) =>
          msg.role === "user" ? (
            <div key={i} style={{ display: "flex", flexDirection: "column", alignItems: "flex-end" }}>
              <div style={{
                maxWidth: "80%",
                padding: "10px 16px",
                border: `1px solid ${GOLD}`,
                background: "transparent",
                color: GOLD,
                fontFamily: "var(--font-ibm-plex-sans)",
                fontSize: "14px",
                lineHeight: 1.6,
              }}>
                {msg.content}
              </div>
            </div>
          ) : (
            <AssistantBubbles key={i} content={msg.content} />
          )
        )}
        {streamingResponse && <AssistantBubbles content={streamingResponse} />}
        <div ref={bottomRef} />
      </div>

      {/* Input row */}
      <div style={{ borderTop: `1px solid ${BORDER}`, display: "flex", gap: "0" }}>
        <textarea
          value={input}
          onChange={e => setInput(e.target.value)}
          onKeyDown={handleKey}
          placeholder="Type your question…"
          rows={2}
          disabled={loading}
          style={{
            flex: 1,
            background: "transparent",
            border: "none",
            outline: "none",
            color: TEXT,
            fontFamily: "var(--font-ibm-plex-sans)",
            fontSize: "14px",
            padding: "16px",
            resize: "none",
            opacity: loading ? 0.5 : 1,
          }}
        />
        <button
          onClick={handleSend}
          disabled={loading}
          style={{
            background: "none",
            border: "none",
            borderLeft: `1px solid ${BORDER}`,
            cursor: loading ? "not-allowed" : "pointer",
            color: GOLD,
            fontFamily: "var(--font-ibm-plex-mono)",
            fontSize: "12px",
            letterSpacing: "0.08em",
            padding: "0 20px",
            whiteSpace: "nowrap",
            opacity: loading ? 0.5 : 1,
          }}
        >
          {loading ? "[ sending... ]" : "[ send ]"}
        </button>
      </div>
      <p style={{ fontFamily: "var(--font-ibm-plex-mono)", fontSize: "10px", color: MUTED, letterSpacing: "0.06em", padding: "10px 16px", borderTop: `1px solid ${BORDER}` }}>
        Responses draw from the OMARO White Paper, HAI Standard, and The Trust Renaissance framework.
      </p>
    </div>
  );
}

export default function OriginsPage() {
  return (
    <div style={{ background: BG, color: TEXT, minHeight: "100vh" }}>
      <div style={{ maxWidth: "780px", margin: "0 auto", padding: "60px 40px" }}>
        <LogoHero />

        <h1 style={{ fontFamily: "var(--font-ibm-plex-mono)", fontSize: "2.5rem", fontWeight: 600, color: TEXT, marginBottom: "64px" }}>
          OMARO Origins
        </h1>

        {/* The Trust Renaissance */}
        <section>
          <SectionLabel>The Trust Renaissance</SectionLabel>
          <h2 style={{ fontFamily: "var(--font-ibm-plex-mono)", fontSize: "20px", fontWeight: 500, color: TEXT, marginBottom: "32px" }}>
            The Trust Renaissance
          </h2>
          {TTR_BODY.split("\n\n").map((para, i) => (
            <p key={i} style={{ fontFamily: "var(--font-ibm-plex-sans)", fontSize: "16px", lineHeight: 1.8, color: MUTED, marginBottom: "20px" }}>
              {para}
            </p>
          ))}
          <DownloadButton label="Buy Now →" href="#" />
        </section>

        <Divider />

        {/* OMARO White Paper */}
        <section>
          <SectionLabel>OMARO White Paper</SectionLabel>
          <h2 style={{ fontFamily: "var(--font-ibm-plex-mono)", fontSize: "20px", fontWeight: 500, color: TEXT, marginBottom: "32px" }}>
            OMARO White Paper
          </h2>
          {OMARO_WP_BODY.split("\n\n").map((para, i) => (
            <p key={i} style={{ fontFamily: "var(--font-ibm-plex-sans)", fontSize: "16px", lineHeight: 1.8, color: MUTED, marginBottom: "20px" }}>
              {para}
            </p>
          ))}
          <DownloadButton label="Download →" href="/OMARO_WP_2026.pdf" download />
        </section>

        <Divider />

        {/* HAI Standard White Paper */}
        <section>
          <SectionLabel>HAI Standard White Paper</SectionLabel>
          <h2 style={{ fontFamily: "var(--font-ibm-plex-mono)", fontSize: "20px", fontWeight: 500, color: TEXT, marginBottom: "32px" }}>
            HAI Standard White Paper
          </h2>
          <p style={{ fontFamily: "var(--font-ibm-plex-sans)", fontSize: "16px", lineHeight: 1.8, color: MUTED, marginBottom: "20px" }}>
            The HAI Standard is a framework for building artificial intelligence that restores trust, protects dignity, and returns sovereignty to the individual. It begins where the OMARO White Paper ends — with the question of what technology must look like once a person has decided they are worth more than what the extractive model offers. Nine structural pillars define the answer: from transparency and accountability chains to data sovereignty, independent audit, and human dignity across the full stack — including the people whose labor makes AI possible before a product ever ships. The HAI Standard is not a regulation. It is a cultural instrument — a precise articulation of what accountability looks like, available to anyone who wants to use it.
          </p>
          <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
            <DownloadButton label="Download →" href="/OMARO_HAI_WP.pdf" download />
            <DownloadButton label="Download Executive Edition →" href="/OMARO_HAI_EXEC_WP_2026_.pdf" download />
          </div>
        </section>

        <Divider />

        {/* AI Chat */}
        <section>
          <SectionLabel>Ask OMARO</SectionLabel>
          <h2 style={{ fontFamily: "var(--font-ibm-plex-mono)", fontSize: "20px", fontWeight: 500, color: TEXT, marginBottom: "8px" }}>
            Ask anything about our work.
          </h2>
          <ChatUI />
        </section>
      </div>
    </div>
  );
}
