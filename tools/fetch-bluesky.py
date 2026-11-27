#!/usr/bin/env python3
"""Adds OMARO's latest Bluesky posts to content/posts.json and public/posts.json (Connect).
Uses Bluesky's public read API (no key). Run daily by .github/workflows/site-data.yml."""
import json, pathlib, urllib.request

ROOT = pathlib.Path(__file__).resolve().parent.parent
HANDLE = "omaroxyz.bsky.social"
url = f"https://public.api.bsky.app/xrpc/app.bsky.feed.getAuthorFeed?actor={HANDLE}&limit=20&filter=posts_no_replies"
feed = json.load(urllib.request.urlopen(url, timeout=20))
src = ROOT / "content" / "posts.json"
data = json.loads(src.read_text())
have = {p["url"] for p in data["posts"]}
for item in feed.get("feed", []):
    post = item.get("post", {})
    if item.get("reason"):  # skip reposts
        continue
    rec = post.get("record", {})
    rkey = post.get("uri", "").rsplit("/", 1)[-1]
    link = f"https://bsky.app/profile/{HANDLE}/post/{rkey}"
    if not rkey or link in have or not rec.get("text"):
        continue
    data["posts"].append({"platform": "Bluesky", "handle": "@" + HANDLE, "url": link,
                          "date": rec.get("createdAt", "")[:10], "text": rec["text"]})
data["posts"].sort(key=lambda p: p["date"], reverse=True)
data["posts"] = data["posts"][:30]
for path in (src, ROOT / "public" / "posts.json"):
    path.write_text(json.dumps(data, indent=1, ensure_ascii=False) + "\n")
print(len(data["posts"]), "posts")
