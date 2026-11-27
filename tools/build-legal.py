#!/usr/bin/env python3
"""Puts OMARO's privacy policy, cookie policy and terms on the Transparency page, each readable in full and as a PDF.

Usage: python3 tools/build-legal.py <path to IRIS>/docs/legal
The source is IRIS's docs/legal: the same words IRIS for Linux carries inside the app, so the site, the app and the
add-on (which links here) always say the same thing. Run by .github/workflows/legal.yml every day and by hand in each
round that changes a document; it rewrites only what changed.

Writes downloads/omaro-<name>.pdf for each document (tools/mkpdf.py, the OMARO document style) and the section between
<!-- documents:start --> and <!-- documents:end --> in content/pages/transparency.html (then builds the page), with each PDF's SHA-256 so a downloaded
copy can be checked. Anchors: #documents, #privacy, #cookies, #terms."""
import hashlib, html, pathlib, re, subprocess, sys, markdown

here = pathlib.Path(__file__).resolve().parent.parent
src = pathlib.Path(sys.argv[1])
DOCS = [("privacy", "PRIVACY-POLICY.md", "omaro-privacy-policy.pdf"),
        ("cookies", "COOKIE-POLICY.md", "omaro-cookie-policy.pdf"),
        ("terms", "TERMS.md", "omaro-terms.pdf")]
START, END = "<!-- documents:start -->", "<!-- documents:end -->"

items = []
for anchor, name, pdf in DOCS:
    md = (src / name).read_text(encoding="utf-8")
    title = md.splitlines()[0].lstrip("# ").strip()
    first = next((l for l in md.splitlines()[1:] if l.strip()), "")
    m = re.match(r"\*\*(Draft[^*]*)\*\*", first)
    draft = (m.group(1) if m else "").strip().rstrip(".")
    out = here / "public" / "downloads" / pdf
    old = out.read_bytes() if out.exists() else None
    tmp = out.with_suffix(".new.pdf")
    subprocess.run([sys.executable, str(here / "tools" / "mkpdf.py"), str(src / name), str(tmp)], check=True)
    # weasyprint stamps a creation date: keep the old file when only that changed, so the hash and the commit stay put.
    srcsum = hashlib.sha256(md.encode()).hexdigest()
    stamp = here / "public" / "downloads" / f".{pdf}.source"
    if old is not None and stamp.exists() and stamp.read_text().strip() == srcsum:
        tmp.unlink()
    else:
        tmp.replace(out)
        stamp.write_text(srcsum + "\n")
    digest = hashlib.sha256(out.read_bytes()).hexdigest()
    body = markdown.markdown("\n".join(md.splitlines()[1:]), extensions=["tables", "sane_lists"])
    body = body.replace("<h2", "<h3").replace("</h2>", "</h3>")
    items.append(f'''  <div class="doc" id="{anchor}">
    <div class="doc-head"><h3>{html.escape(title.split(":")[0])}</h3><span class="muted small">{html.escape(draft)}</span></div>
    <p class="row"><a class="btn" href="/downloads/{pdf}" download>Download the PDF</a></p>
    <p class="mono small muted" style="overflow-wrap:anywhere">SHA-256 of the PDF: {digest}</p>
    <details><summary>Read it here</summary><div class="prose">{body}</div></details>
  </div>''')

section = f"""{START}
<h2 id="documents">Company documents</h2>
<p class="muted">OMARO's privacy policy, cookie policy and terms of use. They cover IRIS for Firefox, IRIS for Linux and this site. IRIS for Linux carries the same words inside the app; the Firefox add-on opens this page. These are drafts until an attorney has read them. Every change shows here the day it's made.</p>
{chr(10).join(items)}
{END}"""

target = here / "content" / "pages" / "transparency.html"
page = target.read_text(encoding="utf-8")
page = page[: page.index(START)] + section + page[page.index(END) + len(END):]
target.write_text(page, encoding="utf-8")
subprocess.run([sys.executable, str(here / "tools" / "build-next.py"), "transparency.html"], check=True)

print("transparency.html: company documents written,", ", ".join(d[2] for d in DOCS))
