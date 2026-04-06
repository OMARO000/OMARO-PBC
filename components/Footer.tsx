export default function Footer() {
  const products = [
    { label: "omaro.xyz", href: "https://omaro.xyz" },
    { label: "omen.xyz", href: "https://omen.xyz" },
    { label: "igitit.xyz", href: "https://igitit.xyz" },
    { label: "uniteus.xyz", href: "https://uniteus.xyz" },
  ];

  return (
    <footer style={{ backgroundColor: "#1A1A1A", color: "#F0EDE8" }}>
      <div className="max-w-6xl mx-auto px-6 py-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        {/* Left: entity + product links */}
        <div className="flex flex-col gap-2">
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
        </div>

        {/* Right: tagline + copyright */}
        <div className="flex flex-col items-start sm:items-end gap-1">
          <span
            className="text-xs"
            style={{ fontFamily: "var(--font-ibm-plex-mono)", color: "#B85C38" }}
          >
            Sovereign by Design.
          </span>
          <span
            className="text-xs"
            style={{ fontFamily: "var(--font-ibm-plex-mono)", color: "#4A4A4A" }}
          >
            &copy; 2026 OMARO PBC
          </span>
        </div>
      </div>
    </footer>
  );
}
