#!/usr/bin/env python3
"""Builds lib/kb.ts, the public knowledge base IRIS answers from on omaro.org.

It reads only pages the site already publishes (the list below), splits each at its headings,
and keeps the text with the page's address. Nothing private goes in: if it isn't on the site,
IRIS can't say it. Run by tools/build-next.py, or alone: python3 tools/build-kb.py
"""
import json, pathlib, re, html
from bs4 import BeautifulSoup

ROOT = pathlib.Path(__file__).resolve().parent.parent
PAGES = [  # (file, address, page name)
    ("index.html", "/", "Home"),
    ("iris.html", "/iris", "IRIS"),
    ("hai-standard.html", "/hai-standard", "HAI Standard"),
    ("transparency.html", "/transparency", "Transparency"),
    ("origins.html", "/origins", "Origins"),
    ("mission.html", "/mission", "Mission"),
    ("connect.html", "/connect", "Connect"),
    ("donate.html", "/donate", "Donate"),
    ("founder.html", "/founder", "Founder"),
    ("methodology.html", "/methodology", "Methodology"),
]
MAX = 1600

def chunks(path, url, page):
    soup = BeautifulSoup(path.read_text(), "html.parser")
    main = soup
    for bad in main.select("script, style, .checker, .hint, .term .copy"):
        bad.decompose()
    out, title, buf, anchor, doc = [], page, [], "", None
    def flush():
        text = re.sub(r"\s+", " ", " ".join(buf)).strip()
        while text:
            part, text = text[:MAX], text[MAX:]
            out.append({"page": page, "title": f"{page}: {title}" if title != page else page,
                        "url": url + (f"#{anchor}" if anchor else ""), "text": part})
    for el in main.find_all(["h1", "h2", "h3", "p", "li", "td", "th", "div"], recursive=True):
        if el.name == "div" and el.find(["p", "li", "h1", "h2", "h3", "div", "td"]):
            continue
        t = el.get_text(" ", strip=True)
        if not t:
            continue
        if el.name in ("h1", "h2"):
            flush(); buf.clear(); title = t; doc = None
            sec = el.find_parent(lambda t: t.name == "section" and t.has_attr("id"))
            anchor = el.get("id") or (sec.get("id") if sec else "")
        elif el.name == "h3" and el.find_parent(class_="doc"):
            # OMARO's policies: one entry per policy section, named "Privacy policy: Children" and so on
            flush(); buf.clear()
            box = el.find_parent(class_="doc")
            if el.find_parent(class_="doc-head"):
                doc = t; title = t
            else:
                title = f"{doc}: {t}" if doc else t
            anchor = box.get("id") or anchor
        else:
            buf.append(t + ("." if el.name in ("h3", "li", "td", "th") and not t.endswith((".", "?", ":", "!")) else ""))
    flush()
    return out

kb = []
for f, url, page in PAGES:
    p = ROOT / "content" / "pages" / f
    if p.exists():
        kb.extend(chunks(p, url, page))
kb.append({"page": "IRIS on this site", "title": "IRIS on this site", "url": "", "always": True,
           "text": "IRIS on OMARO's website answers only from OMARO's public material: this website, published documents, released features and OMARO's policies. "
                   "It doesn't discuss the founder beyond the founder page, finances, investors, internal tools, unreleased plans or security details. "
                   "When it can't answer, it says so and points to support@omaro.org. OMARO keeps only the questions IRIS couldn't answer, as text alone, "
                   "with no address or other identifier, for 30 days, to improve the site. Questions go to Anthropic's model to write the answer."})
(ROOT / "lib" / "kb.ts").write_text("// Built by tools/build-kb.py from the published pages. Do not edit.\nexport type Chunk = { page: string; title: string; url: string; text: string; always?: boolean };\nconst KB: Chunk[] = " + json.dumps(kb, indent=0) + ";\nexport default KB;\n")
print(len(kb), "chunks,", sum(len(c["text"]) for c in kb), "characters")
