"use client";

export default function Footer() {
  const products = [
    { label: "omaro.xyz", href: "https://omaro.xyz" },
    { label: "omen.xyz", href: "https://omen.xyz" },
    { label: "igitit.xyz", href: "https://igitit.xyz" },
    { label: "haiproject.xyz", href: "https://haiproject.xyz" },
    { label: "justjoinus.xyz", href: "https://justjoinus.xyz" },
  ];

  const socials = [
    {
      label: "GitHub",
      href: "https://github.com/OMARO000",
      icon: (
        <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
        </svg>
      ),
    },
    {
      label: "GitLab",
      href: "https://gitlab.com/omaro000-group",
      icon: (
        <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
          <path d="M23.955 13.587l-1.342-4.135-2.664-8.189a.455.455 0 00-.867 0L16.418 9.45H7.582L4.918 1.263a.455.455 0 00-.867 0L1.386 9.45.044 13.587a.924.924 0 00.331 1.023L12 23.054l11.625-8.444a.924.924 0 00.33-1.023" />
        </svg>
      ),
    },
    {
      label: "LinkedIn",
      href: "#",
      icon: (
        <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
      ),
    },
    {
      label: "X / Twitter",
      href: "#",
      icon: (
        <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.746l7.73-8.835L1.254 2.25H8.08l4.253 5.622 5.911-5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      ),
    },
  ];

  return (
    <footer style={{ backgroundColor: "#1A1A1A", color: "#F0EDE8" }}>
      <div className="max-w-6xl mx-auto px-6 py-8">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
          {/* Left: entity + product links */}
          <div className="flex flex-col gap-3">
            <span
              className="text-xs font-semibold"
              style={{ fontFamily: "var(--font-ibm-plex-mono)", color: "#F0EDE8" }}
            >
              OMARO Public Benefit Corporation
            </span>
            <div className="flex flex-wrap gap-x-4 gap-y-1">
              {products.map(({ label, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs hover:underline"
                  style={{
                    fontFamily: "var(--font-ibm-plex-mono)",
                    color: "#B85C38",
                    textUnderlineOffset: "3px",
                  }}
                >
                  {label}
                </a>
              ))}
            </div>
            {/* Social icons */}
            <div className="flex items-center gap-3 mt-1">
              {socials.map(({ label, href, icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  style={{
                    color: "#B85C38",
                    transition: "opacity 0.2s",
                    display: "flex",
                    alignItems: "center",
                  }}
                  onMouseEnter={e => (e.currentTarget.style.opacity = "0.65")}
                  onMouseLeave={e => (e.currentTarget.style.opacity = "1")}
                >
                  {icon}
                </a>
              ))}
            </div>
          </div>

          {/* Right: tagline + donate + copyright */}
          <div className="flex flex-col items-start sm:items-end gap-2">
            <span
              className="text-xs"
              style={{ fontFamily: "var(--font-ibm-plex-mono)", color: "#B85C38" }}
            >
              Sovereign by Design.
            </span>
            <a
              href="https://haiproject.xyz#donate"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                fontFamily: "var(--font-ibm-plex-mono)",
                fontSize: "0.7rem",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                padding: "0.4rem 1rem",
                background: "#B85C38",
                color: "#F0EDE8",
                textDecoration: "none",
                display: "inline-block",
                transition: "background 0.2s",
              }}
              onMouseEnter={e => (e.currentTarget.style.background = "#D4724E")}
              onMouseLeave={e => (e.currentTarget.style.background = "#B85C38")}
            >
              Donate
            </a>
            <span
              className="text-xs"
              style={{ fontFamily: "var(--font-ibm-plex-mono)", color: "#F0EDE8", opacity: 0.4 }}
            >
              &copy; 2026 OMARO PBC
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
