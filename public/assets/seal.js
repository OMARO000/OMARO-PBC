// Seal checker: canonical JSON (keys sorted, no spaces, missing values dropped) and SHA-256, in this browser only.
(function () {
  function canon(v) {
    if (v === null) return "null";
    if (typeof v === "string" || typeof v === "boolean") return JSON.stringify(v);
    if (typeof v === "number") { if (!isFinite(v)) throw new Error("bad number"); return JSON.stringify(v); }
    if (Array.isArray(v)) return "[" + v.map(function (x) { return x === undefined || typeof x === "function" ? "null" : canon(x); }).join(",") + "]";
    if (typeof v === "object") {
      var keys = Object.keys(v).filter(function (k) { return v[k] !== undefined && typeof v[k] !== "function"; }).sort();
      return "{" + keys.map(function (k) { return JSON.stringify(k) + ":" + canon(v[k]); }).join(",") + "}";
    }
    throw new Error("bad value");
  }
  async function sha(text) {
    var buf = await crypto.subtle.digest("SHA-256", new TextEncoder().encode(text));
    return Array.from(new Uint8Array(buf)).map(function (b) { return b.toString(16).padStart(2, "0"); }).join("");
  }
  // A saved IRIS file holds the sealed JSON after its "SEALED READING" heading; a record is JSON on its own.
  function findJson(text) {
    var t = text.trim();
    try { return JSON.parse(t); } catch (e) { /* look inside */ }
    var at = text.lastIndexOf("SEALED READING");
    var from = text.indexOf("\n{", at < 0 ? 0 : at);
    if (from < 0) return null;
    var body = text.slice(from + 1), depth = 0, end = -1, inStr = false, esc = false;
    for (var i = 0; i < body.length; i++) {
      var c = body[i];
      if (inStr) { if (esc) esc = false; else if (c === "\\") esc = true; else if (c === '"') inStr = false; continue; }
      if (c === '"') inStr = true; else if (c === "{") depth++; else if (c === "}") { depth--; if (depth === 0) { end = i; break; } }
    }
    try { return end > 0 ? JSON.parse(body.slice(0, end + 1)) : null; } catch (e) { return null; }
  }
  var COVERED = ["schema", "repository", "commit", "readAt", "analysis"];
  async function check(doc) {
    if (doc && typeof doc.sha256 === "string" && /^iris-/.test(doc.schema || "")) {
      var rest = {}; Object.keys(doc).forEach(function (k) { if (k !== "sha256") rest[k] = doc[k]; });
      return { ok: (await sha(canon(rest))) === doc.sha256, kind: "IRIS reading (" + doc.schema + "), sealed " + (doc.sealedAt || "?"), hash: doc.sha256 };
    }
    if (doc && doc.verification && typeof doc.verification.hash === "string") {
      var h = doc.verification.hash;
      if (doc.schema === "igitit-verification/1.0") return { ok: (await sha(canon(doc.analysis))) === h, kind: "code reading record (1.0, the hash covers the analysis only)", hash: h };
      var c = {}; COVERED.forEach(function (k) { c[k] = doc[k]; });
      return { ok: (await sha(canon(c))) === h, kind: "code reading record (" + doc.schema + ")", hash: h };
    }
    return null;
  }
  var result = document.getElementById("result");
  function show(cls, text, hash) {
    result.className = cls; result.textContent = text;
    if (hash) { result.appendChild(document.createElement("br")); var code = document.createElement("code"); code.textContent = "sha256 " + hash; result.appendChild(code); }
  }
  document.getElementById("file").addEventListener("change", function (e) {
    var f = e.target.files && e.target.files[0]; if (!f) return;
    f.text().then(function (t) { document.getElementById("text").value = t; document.getElementById("check").click(); });
  });
  document.getElementById("check").addEventListener("click", async function () {
    var doc = findJson(document.getElementById("text").value);
    if (!doc) return show("bad", "No sealed reading or verification record found in that text.");
    try {
      var r = await check(doc);
      if (!r) return show("bad", "That JSON carries no seal this page knows.");
      show(r.ok ? "ok" : "bad", r.ok ? "Matches. Nothing in this " + r.kind + " has changed since it was sealed." : "Doesn't match. Something in this " + r.kind + " changed after it was sealed, or part of it was copied wrong.", r.hash);
    } catch (e) { show("bad", "IRIS couldn't read that JSON."); }
  });
})();
