# OMARO document style: crimson headings, beige table heads, "OMARO PBC · n / N" footer (matches the founder's PDFs).
import sys, markdown, weasyprint
src, out = sys.argv[1], sys.argv[2]
html = markdown.markdown(open(src, encoding="utf-8").read(), extensions=["tables", "fenced_code"])
css = """@page { size: Letter; margin: 0.75in 0.8in 0.8in; @bottom-center { content: "OMARO PBC · " counter(page) " / " counter(pages); font: 7.5pt "DejaVu Serif", serif; color: #888; } }
body { font: 8.6pt/1.5 "DejaVu Sans", sans-serif; color: #1C1B19; }
h1 { font-size: 17pt; color: #1C1B19; margin: 0 0 6pt; padding-bottom: 6pt; border-bottom: 1.5px solid #8C8984; }
h2 { font-size: 12pt; color: #1C1B19; margin: 16pt 0 5pt; }
h3 { font-size: 10pt; color: #1C1B19; margin: 12pt 0 4pt; }
hr { border: 0; border-top: 1px solid #ddd; margin: 10pt 0; }
table { border-collapse: collapse; width: 100%; margin: 6pt 0 10pt; font-size: 7.8pt; }
th, td { border: 1px solid #c9c3bb; padding: 3.5pt 5pt; vertical-align: top; text-align: left; }
th { background: #efe9e1; }
code { font: 7.8pt "DejaVu Sans Mono", monospace; background: #f3f0ec; padding: 0 2pt; }
li { margin: 1.5pt 0; } blockquote { color: #555; border-left: 2px solid #c9c3bb; margin-left: 0; padding-left: 8pt; }"""
weasyprint.HTML(string=f"<html><body>{html}</body></html>").write_pdf(out, stylesheets=[weasyprint.CSS(string=css)])
