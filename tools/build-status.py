#!/usr/bin/env python3
"""Writes releases.json and metrics.json for omaro.org from IRIS's release feed (status/feed.json).

Usage: python3 tools/build-status.py <path to IRIS's status/feed.json>
Run daily by .github/workflows/status.yml. Only public fields are copied: channel, version and date.
Change notes stay out, because they describe unreleased work. A channel turns public when
data/published.json gives its download address.
"""
import json, pathlib, sys, datetime

ROOT = pathlib.Path(__file__).resolve().parent.parent
feed = json.loads(pathlib.Path(sys.argv[1]).read_text())
pub = json.loads((ROOT / "data" / "published.json").read_text())

by_id = {c["id"]: c for c in feed.get("channels", [])}

def chan(cid, name):
    c = by_id.get(cid, {})
    rel = (c.get("releases") or [{}])[0]
    url = pub.get(f"{cid}_url")
    out = {"id": cid, "name": name, "version": c.get("version"), "date": rel.get("date"), "public": bool(url)}
    if url:
        out["url"] = url
        if rel.get("sha256"):
            out["sha256"] = rel["sha256"]
    return out

channels = [chan("firefox", "IRIS Lite for Firefox"), chan("linux", "IRIS Co-OS for Linux")]
channels.append({"id": "grapheneos", "name": "IRIS Co-OS for GrapheneOS", "version": None, "date": None,
                 "public": bool(pub.get("grapheneos_url")), "note": pub.get("grapheneos_note", "")})

now = datetime.datetime.now(datetime.timezone.utc).strftime("%Y-%m-%dT%H:%MZ")
releases = {"format": "omaro-releases/1", "written": now, "channels": channels}

tests = feed.get("tests", {})
total = sum(v for k, v in tests.items() if isinstance(v, int))
lin, ff = by_id.get("linux", {}).get("version"), by_id.get("firefox", {}).get("version")
metrics = {
    "format": "omaro-metrics/1",
    "as_of": tests.get("counted") or feed.get("written"),
    "note": "Counted from IRIS's own builds and published tests. this site counts no visitors.",
    "figures": {
        "tests": total,
        "accuracy": pub.get("accuracy"),
        "accuracy_run": pub.get("accuracy_run"),
        "gold_sites": pub.get("gold_sites"),
        "latest_linux": lin,
        "latest_firefox": ff,
        "latest_build": f"{lin} · {ff}" if lin and ff else None,
        "accounts": None,
        "downloads": None,
    },
}
(ROOT / "public" / "releases.json").write_text(json.dumps(releases, indent=1) + "\n")
(ROOT / "public" / "metrics.json").write_text(json.dumps(metrics, indent=1) + "\n")
print("releases.json and metrics.json written")
