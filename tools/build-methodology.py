#!/usr/bin/env python3
"""Builds the methodology page from the IRIS methodology (docs/methodology/*.md in the IRIS repository).

Usage: python3 tools/build-methodology.py <path to IRIS>/docs/methodology
Writes content/pages/methodology.html, then builds methodology.html with the site's header and footer.
Rebuild downloads/iris-methodology.pdf first (OMARO-IRIS-PRI/tools/mkpdf.py on the joined parts);
the page links it and prints its SHA-256 so a downloaded copy can be checked."""
import re, sys, pathlib, hashlib, subprocess, markdown

here = pathlib.Path(__file__).resolve().parent.parent
src = pathlib.Path(sys.argv[1])

pdf = here / "public" / "downloads" / "iris-methodology.pdf"
download = ""
if pdf.exists():
    digest = hashlib.sha256(pdf.read_bytes()).hexdigest()
    download = (f'<p class="row"><a class="btn" href="/downloads/iris-methodology.pdf" download>Download the PDF</a></p>'
                f'<p class="mono small muted" style="overflow-wrap:anywhere">SHA-256 of the PDF: {digest}</p>')
parts, toc = [], []
for i, f in enumerate(sorted(src.glob("*.md"))):
    md = f.read_text()
    title = md.splitlines()[0].lstrip("# ").strip().replace("IRIS Methodology: ", "")
    body = markdown.markdown("\n".join(md.splitlines()[1:]), extensions=["tables", "sane_lists"])
    body = re.sub(r"<table>", '<div class="table-wrap"><table>', body).replace("</table>", "</table></div>")
    body = body.replace("<h2", "<h3").replace("</h2>", "</h3>")
    anchor = f"part-{i}"
    toc.append(f'<a class="btn" href="#{anchor}">{title}</a>')
    parts.append(f'<section class="section" id="{anchor}"><div class="wrap read prose"><h2>{title}</h2>\n{body}</div></section>')

page = f"""<!--{{"title": "How IRIS reads", "desc": "How IRIS reads privacy policies and terms: the commitments, the rules behind each answer, how accuracy is measured, and where IRIS can be wrong.", "nav": "iris", "out": "methodology.html"}}-->
<section class="section">
  <div class="wrap">
    <p class="eyebrow">IRIS · Methodology</p>
    <h1>How IRIS reads.</h1>
    <p class="lede">The full method behind every answer IRIS gives: what it promises, how it finds and reads a policy, the rules that decide each answer, how accuracy is measured, and where it can be wrong. It's published before IRIS shows anyone a rating.</p>
    {download}
    <div class="row" style="margin-top:24px">{''.join(toc)}</div>
  </div>
</section>
{chr(10).join(parts)}
"""
(here / "content" / "pages" / "methodology.html").write_text(page)
subprocess.run([sys.executable, str(here / "tools" / "build-next.py"), "methodology.html"], check=True)
print("methodology page written,", len(parts), "parts")
