#!/usr/bin/env python3
"""Turns content/pages/*.html into Next.js pages (app/<route>/page.tsx), then rebuilds the knowledge base.

Each source page starts with a JSON comment: {"title", "desc", "nav", "out"}. "out": "index.html" is the home page;
"iris.html" becomes /iris. The header, tabs and footer live once, in app/layout.tsx.
Run from the repository root: python3 tools/build-next.py [file.html ...]
"""
import json, pathlib, re, subprocess, sys

ROOT = pathlib.Path(__file__).resolve().parent.parent
SRC = ROOT / "content" / "pages"


def build(path: pathlib.Path) -> str:
    raw = path.read_text()
    m = re.match(r"\s*<!--(\{.*?\})-->\s*", raw, re.S)
    if not m:
        sys.exit(f"{path.name}: missing the JSON header")
    meta = json.loads(m.group(1))
    body = raw[m.end():].strip()
    scripts = re.findall(r'<script src="([^"]+)"[^>]*></script>', body)
    body = re.sub(r'<script src="[^"]+"[^>]*></script>\s*', "", body)
    route = meta["out"][:-5]
    out = ROOT / "app" / ("page.tsx" if route == "index" else f"{route}/page.tsx")
    out.parent.mkdir(parents=True, exist_ok=True)
    title = {"absolute": meta["title"]} if meta.get("nav") == "home" else meta["title"]
    tsx = [
        "// Built by tools/build-next.py from content/pages/" + path.name + ". Edit the source, then rerun the tool.",
        'import type { Metadata } from "next";',
        'import Script from "next/script";' if scripts else "",
        "",
        "export const metadata: Metadata = " + json.dumps({"title": title, "description": meta["desc"]}) + ";",
        "",
        "const html = " + json.dumps(body) + ";",
        "",
        "export default function Page() {",
        "  return (",
        "    <>",
        "      <div dangerouslySetInnerHTML={{ __html: html }} />",
        *[f'      <Script src="{s}" strategy="afterInteractive" />' for s in scripts],
        "    </>",
        "  );",
        "}",
        "",
    ]
    out.write_text("\n".join(l for l in tsx if l is not None))
    return str(out.relative_to(ROOT))


if __name__ == "__main__":
    names = sys.argv[1:]
    files = [SRC / n for n in names] if names else sorted(SRC.glob("*.html"))
    for f in files:
        print("built", build(f))
    subprocess.run([sys.executable, str(ROOT / "tools" / "build-kb.py")], check=True)
