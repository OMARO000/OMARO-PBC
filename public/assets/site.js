/* omaro.org: motion, the menu, copy buttons, release and metric figures, and IRIS's chat. No trackers, no cookies, nothing stored. */
(function () {
  "use strict";
  var doc = document.documentElement;
  var reduced = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (!reduced) doc.classList.add("motion");

  // The current tab
  var here = location.pathname.replace(/\/$/, "") || "/";
  if (here === "/methodology") here = "/iris";
  document.querySelectorAll(".tabs a").forEach(function (a) { if (a.getAttribute("href") === here) a.setAttribute("aria-current", "page"); });

  // Menu on small screens
  var btn = document.querySelector(".menu-btn");
  var tabs = document.querySelector(".tabs");
  if (btn && tabs) btn.addEventListener("click", function () {
    var open = tabs.classList.toggle("open");
    btn.setAttribute("aria-expanded", open ? "true" : "false");
  });

  // Copy buttons on Terminal boxes
  function addCopy(box) {
    if (box.querySelector(".copy")) return;
    var b = document.createElement("button");
    b.className = "copy"; b.type = "button"; b.textContent = "Copy";
    b.addEventListener("click", function () {
      var text = Array.prototype.map.call(box.querySelectorAll(".cmd"), function (l) { return l.textContent; }).join("\n");
      if (navigator.clipboard) navigator.clipboard.writeText(text).then(function () {
        b.textContent = "Copied"; setTimeout(function () { b.textContent = "Copy"; }, 1600);
      });
    });
    box.appendChild(b);
  }
  document.querySelectorAll(".term").forEach(addCopy);

  function fmtDate(iso) {
    if (!iso) return "";
    var d = new Date(iso.length === 10 ? iso + "T12:00:00Z" : iso);
    if (isNaN(d)) return iso;
    return d.toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric", timeZone: "UTC" });
  }
  function getJSON(url) {
    return fetch(url, { cache: "no-cache" }).then(function (r) { if (!r.ok) throw new Error(r.status); return r.json(); });
  }
  function fill(sel, text) { document.querySelectorAll(sel).forEach(function (el) { el.textContent = text; }); }

  // Releases: the download places update from releases.json (rebuilt daily from IRIS's release feed)
  if (document.querySelector("[data-release]")) getJSON("/releases.json").then(function (r) {
    (r.channels || []).forEach(function (c) {
      var card = document.querySelector('[data-release="' + c.id + '"]');
      if (!card) return;
      var line = card.querySelector(".status-line");
      if (line) line.textContent = c.public
        ? "Version " + c.version + ", released " + fmtDate(c.date) + "."
        : (c.version ? "In testing. Latest test build " + c.version + ", " + fmtDate(c.date) + ". " : "") + (c.note || "");
      card.querySelectorAll("[data-version]").forEach(function (el) { if (c.version) el.textContent = c.version; });
      var dl = card.querySelector(".dl");
      if (dl && c.public && c.url) { dl.href = c.url; dl.removeAttribute("aria-disabled"); dl.textContent = c.button || "Download"; }
      var sum = card.querySelector(".sha");
      if (sum && c.sha256) { sum.textContent = "SHA-256 " + c.sha256; sum.hidden = false; }
    });
  }).catch(function () {});

  // Live metrics: counts the servers already have, never visitor tracking (decision 385 m)
  if (document.querySelector("[data-metric]")) getJSON("/metrics.json").then(function (m) {
    document.querySelectorAll("[data-metric]").forEach(function (el) {
      var k = el.getAttribute("data-metric"), v = m.figures && m.figures[k];
      if (v === undefined || v === null) return;
      el.textContent = typeof v === "number" ? v.toLocaleString("en-US") : v;
    });
    fill("[data-asof]", "As of " + fmtDate(m.as_of) + ". " + (m.note || ""));
  }).catch(function () {});

  // ---------- IRIS on this site ----------
  var MARK = '<svg class="fab-mark" viewBox="0 0 32 32" aria-hidden="true" focusable="false"><path d="M11 7 4 16l7 9M21 7l7 9-7 9" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" transform="translate(16 16) scale(.62) translate(-16 -16)"/><circle class="pupil" cx="16" cy="16" r="2.5" fill="currentColor"/></svg>';
  var SMALL = '<svg viewBox="2.5 5.5 27 21" aria-hidden="true" focusable="false"><path d="M11 7 4 16l7 9M21 7l7 9-7 9" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/><circle cx="16" cy="16" r="4" fill="currentColor"/></svg>';
  var SUGG = [
    "What is a co-operating system?",
    "What does IRIS send off my device?",
    "What are the HAI Standard's nine pillars?",
    "Why is OMARO a public benefit corporation?"
  ];

  var fab = document.createElement("button");
  fab.className = "fab"; fab.type = "button"; fab.setAttribute("aria-label", "Ask IRIS about OMARO"); fab.setAttribute("aria-expanded", "false");
  fab.innerHTML = MARK;
  var panel = document.createElement("section");
  panel.className = "chat"; panel.setAttribute("aria-label", "Ask IRIS");
  panel.innerHTML =
    '<div class="chat-head">' + SMALL + '<b>Ask IRIS</b><button class="x" type="button" aria-label="Close">×</button></div>' +
    '<div class="chat-log" aria-live="polite"><div class="msg iris">I answer from OMARO\'s public material: this site, the published documents and released features. Each answer names where it came from.</div><div class="chat-sugg"></div></div>' +
    '<form class="chat-form"><textarea rows="1" maxlength="600" placeholder="Ask about OMARO or IRIS" aria-label="Your question"></textarea><button type="submit">Ask</button></form>' +
    '<p class="chat-note">OMARO keeps only the questions IRIS can\'t answer, as text, for 30 days. Questions go to Anthropic\'s model to write the answer. <a href="/transparency#iris-on-this-site">What IRIS may say</a></p>';
  document.body.appendChild(fab); document.body.appendChild(panel);

  var log = panel.querySelector(".chat-log"), form = panel.querySelector(".chat-form"),
      ta = form.querySelector("textarea"), send = form.querySelector("button"), sugg = panel.querySelector(".chat-sugg");
  var history = [];
  SUGG.forEach(function (q) {
    var b = document.createElement("button"); b.type = "button"; b.textContent = q;
    b.addEventListener("click", function () { ask(q); }); sugg.appendChild(b);
  });

  function openChat(q) {
    panel.classList.add("open"); fab.setAttribute("aria-expanded", "true");
    if (q) ask(q); else ta.focus();
  }
  function closeChat() { panel.classList.remove("open"); fab.setAttribute("aria-expanded", "false"); fab.focus(); }
  fab.addEventListener("click", function () { panel.classList.contains("open") ? closeChat() : openChat(); });
  panel.querySelector(".x").addEventListener("click", closeChat);
  document.addEventListener("keydown", function (e) { if (e.key === "Escape" && panel.classList.contains("open")) closeChat(); });
  document.addEventListener("mousedown", function (e) {
    if (panel.classList.contains("open") && !panel.contains(e.target) && !fab.contains(e.target) && !e.target.closest(".hint")) closeChat();
  });
  document.querySelectorAll(".hint[data-ask]").forEach(function (h) {
    h.insertAdjacentHTML("afterbegin", SMALL);
    h.addEventListener("click", function () { openChat(h.getAttribute("data-ask")); });
  });

  function add(cls, text) {
    var d = document.createElement("div"); d.className = "msg " + cls; d.textContent = text;
    log.appendChild(d); log.scrollTop = log.scrollHeight; return d;
  }
  function ask(q) {
    q = (q || "").trim(); if (!q || send.disabled) return;
    if (sugg.parentNode) sugg.remove();
    add("me", q); ta.value = "";
    var w = add("iris working", "IRIS is reading the public material…");
    send.disabled = true;
    history.push({ role: "user", content: q });
    fetch("/api/ask", { method: "POST", headers: { "content-type": "application/json" }, body: JSON.stringify({ messages: history.slice(-8) }) })
      .then(function (r) { return r.json().catch(function () { return {}; }).then(function (j) { j._status = r.status; return j; }); })
      .then(function (j) {
        w.classList.remove("working");
        var text = j.answer || j.error || "IRIS couldn't answer just now. Write to support@omaro.org.";
        w.textContent = text;
        if (j.answer) history.push({ role: "assistant", content: j.answer }); else history.pop();
        if (j.sources && j.sources.length) {
          var s = document.createElement("span"); s.className = "src"; s.appendChild(document.createTextNode("From: "));
          j.sources.forEach(function (src, i) {
            if (i) s.appendChild(document.createTextNode(" · "));
            var a = document.createElement("a"); a.href = src.url; a.textContent = src.title; s.appendChild(a);
          });
          w.appendChild(s);
        }
      })
      .catch(function () { w.classList.remove("working"); w.textContent = "IRIS couldn't reach the server. Write to support@omaro.org."; history.pop(); })
      .then(function () { send.disabled = false; log.scrollTop = log.scrollHeight; });
  }
  form.addEventListener("submit", function (e) { e.preventDefault(); ask(ta.value); });
  ta.addEventListener("keydown", function (e) { if (e.key === "Enter" && !e.shiftKey) { e.preventDefault(); ask(ta.value); } });
})();
