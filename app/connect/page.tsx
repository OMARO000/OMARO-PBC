// Built by tools/build-next.py from content/pages/connect.html. Edit the source, then rerun the tool.
import type { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {"title": "Connect", "description": "OMARO's latest posts, where to follow OMARO, and how to reach the team."};

const html = "<section class=\"section\" style=\"padding-top:56px\">\n  <div class=\"wrap\">\n    <h1>Connect.</h1>\n    <div class=\"grid three\" id=\"posts\" style=\"margin-top:8px\"></div>\n    <div class=\"row\" style=\"margin-top:24px\">\n      <a class=\"btn\" href=\"https://bsky.app/profile/omaroxyz.bsky.social\">Bluesky</a>\n      <a class=\"btn\" href=\"https://x.com/OMAROXYZ\">X</a>\n      <a class=\"btn\" href=\"https://linkedin.com/company/omaro\">LinkedIn</a>\n      <a class=\"btn\" href=\"https://github.com/OMARO000\">GitHub</a>\n      <a class=\"btn\" href=\"https://omaro.beehiiv.com\">Newsletter</a>\n    </div>\n  </div>\n</section>\n<section class=\"section\" id=\"contact\">\n  <div class=\"wrap grid two\">\n    <div>\n      <p class=\"eyebrow\">Contact</p>\n      <dl class=\"contact\">\n        <dt>General</dt><dd><a class=\"link\" href=\"mailto:support@omaro.org\">support@omaro.org</a></dd>\n      </dl>\n      <p class=\"eyebrow\" style=\"margin-top:40px\">Legal</p>\n      <dl class=\"contact\">\n        <dt>Legal and corrections</dt><dd><a class=\"link\" href=\"mailto:legal@omaro.org\">legal@omaro.org</a></dd>\n        <dt>Press</dt><dd><a class=\"link\" href=\"mailto:press@omaro.org\">press@omaro.org</a></dd>\n      </dl>\n    </div>\n    <div>\n      <p class=\"eyebrow\">Please don't write about</p>\n      <ul class=\"prose\">\n        <li>Advertising, sponsorship or paid placement.</li>\n        <li>Removing or changing a documented finding without evidence.</li>\n        <li>Unsolicited investment offers.</li>\n      </ul>\n      <p class=\"muted small\">A correction is reviewed when it comes with evidence that a published fact is wrong, and every correction is shown on the Transparency page.</p>\n    </div>\n  </div>\n</section>\n";

export default function Page() {
  return (
    <>
      <div dangerouslySetInnerHTML={{ __html: html }} />
      <Script src="/assets/posts.js" strategy="afterInteractive" />
    </>
  );
}
