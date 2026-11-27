/* Connect: the latest posts from posts.json (Bluesky added daily, X and LinkedIn by hand). */
(function () {
  var box = document.getElementById("posts"); if (!box) return;
  fetch("/posts.json", { cache: "no-cache" }).then(function (r) { return r.json(); }).then(function (d) {
    (d.posts || []).slice().sort(function (a, b) { return a.date < b.date ? 1 : -1; }).slice(0, 6).forEach(function (p) {
      var a = document.createElement("a"); a.className = "post"; a.href = p.url; a.style.textDecoration = "none";
      var who = document.createElement("div"); who.className = "who";
      who.textContent = p.platform + " · " + p.handle + " · " + new Date(p.date + "T12:00:00Z").toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric", timeZone: "UTC" });
      var t = document.createElement("p"); t.textContent = p.text;
      var more = document.createElement("span"); more.className = "small link arrow"; more.textContent = "View post";
      a.appendChild(who); a.appendChild(t); a.appendChild(more); box.appendChild(a);
    });
  }).catch(function () {});
})();
