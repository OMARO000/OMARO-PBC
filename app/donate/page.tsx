// Built by tools/build-next.py from content/pages/donate.html. Edit the source, then rerun the tool.
import type { Metadata } from "next";


export const metadata: Metadata = {"title": "Donate", "description": "Support OMARO. Donations help a young company keep building IRIS without advertising."};

const html = "<section class=\"section\">\n  <div class=\"wrap read\">\n    <p class=\"eyebrow\">Donate</p>\n    <h1>Keep it independent.</h1>\n    <p class=\"lede\">OMARO takes no advertising and sells no data. As a young company, it runs on support from the people who want IRIS to exist, and every donation helps keep it building.</p>\n  </div>\n</section>\n<section class=\"section\">\n  <div class=\"wrap\">\n    <div class=\"grid three\">\n      <article class=\"card\"><span class=\"tag\">Opening soon</span><h3>Card</h3><p class=\"muted\">Any amount, once or monthly, processed by Stripe. OMARO never sees or stores your card number.</p></article>\n      <article class=\"card\"><span class=\"tag\">Opening soon</span><h3>Bitcoin</h3><p class=\"muted\">On-chain, to an address published here with its QR code.</p></article>\n      <article class=\"card\"><span class=\"tag\">Opening soon</span><h3>Monero</h3><p class=\"muted\">The most private way to give. The address will be published here with its QR code.</p></article>\n    </div>\n    <p class=\"muted small\" style=\"margin-top:22px\">OMARO is a public benefit corporation, so donations aren't tax-deductible. Every donation total will be reported on the Transparency page.</p>\n  </div>\n</section>";

export default function Page() {
  return (
    <>
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </>
  );
}
