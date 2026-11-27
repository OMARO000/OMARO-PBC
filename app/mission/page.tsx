// Built by tools/build-next.py from content/pages/mission.html. Edit the source, then rerun the tool.
import type { Metadata } from "next";


export const metadata: Metadata = {"title": "Mission", "description": "OMARO's mission: technology that returns authority to the people who use it."};

const html = "<section class=\"section\">\n  <div class=\"wrap read\">\n    <p class=\"eyebrow\">Mission</p>\n    <h1>Agency, Returned.</h1>\n    <p class=\"lede\">OMARO exists to put authority over technology back with the people who use it.</p>\n  </div>\n</section>\n<section class=\"section\">\n  <div class=\"wrap read\">\n    <p>Every day, people agree to rules they never read, run software whose workings they can't see, and hand decisions to systems that answer to someone else. Each step is small. Together they add up to a life arranged by other people's defaults.</p>\n    <p>We think the people on the receiving end deserve to know what they're agreeing to and to have a say in it. Speed, scale and pattern-matching can be automated. Judgment, conscience and accountability belong to people, and the tools around them should leave room for all three.</p>\n    <p>So OMARO builds tools that work on the person's side. IRIS reads the fine print, shows what each site and app does behind the page, and keeps the company's record in view, all on the person's own device. The HAI Standard sets out what anyone building AI owes the people it affects.</p>\n    <p>OMARO is a public benefit corporation, so this purpose sits in its charter beside profit. It takes no advertising and sells no data. It publishes its methods, its accuracy and its own policies, and holds itself to the standard it applies to others.</p>\n    <p class=\"lede\" style=\"margin-top:34px\">We build for the people who will live with the technology, and we answer to them.</p>\n    <div class=\"row\" style=\"margin-top:28px\"><a class=\"btn solid\" href=\"/iris\">See IRIS</a><a class=\"btn\" href=\"/transparency\">Our figures</a></div>\n  </div>\n</section>";

export default function Page() {
  return (
    <>
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </>
  );
}
