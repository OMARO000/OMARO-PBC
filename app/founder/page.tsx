// Built by tools/build-next.py from content/pages/founder.html. Edit the source, then rerun the tool.
import type { Metadata } from "next";


export const metadata: Metadata = {"title": "Founder", "description": "Trenton W. Roberts, founder of OMARO PBC."};

const html = "<section class=\"section\">\n  <div class=\"wrap read\">\n    <p class=\"eyebrow\">Founder</p>\n    <h1>Trenton W. Roberts</h1>\n    <p class=\"lede\">Trenton W. Roberts founded OMARO PBC on one conviction: people should hold the authority over their own lives online, and the tools to use it should be plain enough for anyone.</p>\n    <p>He is a product director in the full sense. He decides what IRIS does, what it refuses to do and how every sentence in it reads, then tests each build himself until it holds up. He holds the work to rules that are easy to state and hard to keep: say plainly how it's built, never claim more than the evidence shows, never sell the people it serves.</p>\n    <p>He builds with AI openly, because to him the question that matters is whose values shape the work. IRIS is what those values look like when they're built.</p>\n    <div class=\"row\" id=\"founder-links\" style=\"margin-top:30px\"><a class=\"btn\" href=\"/connect\">Contact OMARO</a></div>\n  </div>\n</section>";

export default function Page() {
  return (
    <>
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </>
  );
}
