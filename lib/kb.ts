// Built by tools/build-kb.py from the published pages. Do not edit.
export type Chunk = { page: string; title: string; url: string; text: string; always?: boolean };
const KB: Chunk[] = [
{
"page": "Home",
"title": "Home",
"url": "/",
"text": "OMARO Public Benefit Corporation"
},
{
"page": "Home",
"title": "Home: Agency, Returned.",
"url": "/",
"text": "OMARO builds technology that puts authority back with the people who use it. The first thing we've built is IRIS, the co-operating system for the internet. Get IRIS Our mission What OMARO is"
},
{
"page": "Home",
"title": "Home: A company bound to the people it serves.",
"url": "/",
"text": "OMARO is a public benefit corporation. Its charter names a public purpose beside profit: returning to people the authority that technology has taken over their attention, their data and their choices. The dot in our mark is the person. The brackets are the frame technology builds around them, left open so there is room to act. Keeping that frame open is the work. IRIS"
},
{
"page": "Home",
"title": "Home: IRIS, the co-operating system for the internet.",
"url": "/",
"text": "IRIS reads the fine print, shows what each site and app does behind the page, and knows the company's record. Everything is read on your device. IRIS Lite. Inside Firefox. Reads the sites you visit there and sees nothing else on your device. In testing. IRIS Co-OS. Joined to the operating system: your apps, your device's settings and your connection, beside every reading. In testing. IRIS Co-OS for your phone. The most protected phone system IRIS runs on, and the one we recommend. Comes after Linux. See what IRIS does HAI Standard"
},
{
"page": "Home",
"title": "Home: Nine pillars for AI that answers to people.",
"url": "/",
"text": "The HAI Standard is OMARO's measure of how AI should be built, deployed and governed: who is accountable, who owns the data, who can check the claims. IRIS uses it to read the AI in the products you use. Read the HAI Standard Transparency"
},
{
"page": "Home",
"title": "Home: Our numbers, in public.",
"url": "/",
"text": "How accurate IRIS is, how it reads, what it releases and what OMARO's own policies say, all published and kept current. See the figures and documents \u00b7 latest test builds, Linux \u00b7 Firefox \u00b7 automated checks passing in the latest build \u00b7 accuracy in the last published held-out test \u00b7 sites in the gold set used to measure it Donate"
},
{
"page": "Home",
"title": "Home: Keep it independent.",
"url": "/",
"text": "OMARO takes no advertising and sells no data. Donations pay for servers, testing and the outside security audit IRIS gets before anyone pays for it. Donate"
},
{
"page": "IRIS",
"title": "IRIS: IRIS, the co-operating system for the internet.",
"url": "/iris",
"text": "Every app and website you use runs on rules someone else wrote. A co-operating system works on your side of those rules. It sits between you and everything you use, reads what each one says and watches what it does. Get IRIS IRIS reads the fine print for you. Privacy policies and terms become seven plain answers about your rights, each with the sentence it came from: selling your data, deleting it, training AI on it, going to court, how long it's kept, where it goes, and children's data. IRIS shows what's behind the page. The companies a site talks to, who is identifying your browser, who reads what you type, and what the site does that its policy never mentions. IRIS knows the company's record. Hindsight shows what governments and courts have decided about the company behind a site or app, with every source named. IRIS reads the code. On a public code repository, a plain reading of what the software does with people's data, scored on the HAI Standard's nine pillars. Everything is read on your device. IRIS sends nothing about you. The one thing that can leave your device is an address you ask about: a code repository's or a website's, when you ask IRIS to read its code or look up a company. How IRIS reads Get IRIS"
},
{
"page": "IRIS",
"title": "IRIS: Three places to run it.",
"url": "/iris#get",
"text": "IRIS Lite runs inside Firefox. IRIS Co-OS joins the operating system, on Linux now and GrapheneOS next. Both give the full readings. This section updates itself from IRIS's releases. IRIS Lite. In testing. Works only inside Firefox: it reads the websites you visit there and sees nothing else on your device. Open IRIS on Firefox Add-ons. Press Add to Firefox , then Add . Pin the <\u2022> to your toolbar and press it on any site. Coming soon IRIS Co-OS. In testing. For Ubuntu and Debian on 64-bit Intel and AMD machines (amd64). Download the .deb, then in Terminal: # install, then open IRIS sudo apt install ./omaro-iris_ 0.1.51 _amd64.deb omaro-iris & Check the file first: sha256sum omaro-iris_*_amd64.deb should print the number shown under the button. IRIS Co-OS for your phone. Comes after Linux. GrapheneOS is the most protected phone system IRIS runs on. IRIS will come through its own F-Droid repository and as a direct APK, never through Apple's or Google's stores. Add IRIS's repository in F-Droid or Obtainium, or download the APK. Check the signing fingerprint with AppVerifier against the one on this page. From a computer, with the phone connected: adb install iris-grapheneos.apk Coming soon Every release will carry OMARO's signature and its fingerprint, published here, on the release page and on OMARO's social accounts, so a fake would have to change all of them at once. Check a seal"
},
{
"page": "IRIS",
"title": "IRIS: See that a reading is unchanged.",
"url": "/iris#seal",
"text": "IRIS seals every reading you copy or save with a SHA-256 fingerprint made on your device. Code reading records carry the same kind of seal. Open or paste a saved file here and this page recomputes the fingerprint in your browser. Nothing is uploaded. Methodology \u00b7 Code API"
},
{
"page": "HAI Standard",
"title": "HAI Standard",
"url": "/hai-standard",
"text": "HAI Standard"
},
{
"page": "HAI Standard",
"title": "HAI Standard: AI that answers to people.",
"url": "/hai-standard",
"text": "The HAI Standard sets out what any organization that builds or deploys AI owes the people it affects. It has nine pillars, and an organization answers to all nine. IRIS uses it to read the AI in the products you use. AI already outpaces people at speed, scale and pattern recognition. Moral judgment in context, real relationships and accountability still need a person who can answer for the result. A system with people overseeing it fails gently and can be corrected. The HAI Standard writes that oversight into how AI is built. The nine pillars"
},
{
"page": "HAI Standard",
"title": "HAI Standard: Version 1.1",
"url": "/hai-standard#pillars",
"text": "Integrity & Transparency. State the purpose plainly, explain decisions, use no dark patterns. Accountability Chain. A named person who can be reached is responsible before anything ships. Safety & Robustness. Test under attack and across the whole range of people who'll use it. Keep watching after launch. Equality & Non-Discrimination. Test for unfair outcomes all the time, and correct them when they're found. Human Override & Control. A person can review and reverse any decision that matters. Use Limits & Proportionality. AI is used only for the purposes it was disclosed for. New uses need consent. Data Ownership & Empowerment. People can see, correct, limit and delete their data in practice, beyond what the policy says. Independent Audit. Auditors with no financial tie to the company, and findings published in full. Human Dignity Across the Full Stack. Stronger protection for vulnerable people, and disclosure of the labour and supply chain behind the AI. How it's checked"
},
{
"page": "HAI Standard",
"title": "HAI Standard: Three levels of evidence.",
"url": "/hai-standard#tiers",
"text": "Each pillar can be checked at three levels: Declared, from what the organization publishes; Verified, with active testing and documents; Certified, where a qualified independent reviewer checks the pillars that need a person's judgment. The coverage is public. The scoring weights stay private, so they can't be gamed. Pillar. Declared. Verified. Certified. I \u00b7 Integrity & Transparency. Automated. Automated. Automated. II \u00b7 Accountability Chain. Automated. Automated. Independent reviewer. III \u00b7 Safety & Robustness. Automated. Tests and documents. Tests and documents. IV \u00b7 Equality & Non-Discrimination. Automated. Tests and documents. Tests and documents. V \u00b7 Human Override & Control. Automated. Automated. Independent reviewer. VI \u00b7 Use Limits & Proportionality. Automated. Automated. Automated. VII \u00b7 Data Ownership & Empowerment. Automated. Automated. Automated. VIII \u00b7 Independent Audit. Automated. Tests and documents. Independent reviewer. IX \u00b7 Human Dignity Across the Full Stack. Automated. Automated. Independent reviewer. In IRIS"
},
{
"page": "HAI Standard",
"title": "HAI Standard: The standard, applied where you are.",
"url": "/hai-standard",
"text": "When IRIS reads a public code repository, it scores what the software does with people's data against the nine pillars, with any machine learning and its model card. OMARO holds its own products to the same standard and publishes the results on the Transparency page. The full white paper and its executive edition are being revised. Both will be on Origins when they're ready. See IRIS"
},
{
"page": "Transparency",
"title": "Transparency",
"url": "/transparency",
"text": "Transparency"
},
{
"page": "Transparency",
"title": "Transparency: The record includes us.",
"url": "/transparency",
"text": "IRIS holds companies to what they publish. OMARO publishes its own figures, policies and corrections here, under the same standard. Live figures"
},
{
"page": "Transparency",
"title": "Transparency: Counted from our own systems.",
"url": "/transparency#figures",
"text": "These figures come from counts OMARO's servers and builds already keep. This site has no analytics and counts no visitors. \u00b7 accuracy in the last published held-out test ( run 3 ) \u00b7 sites in the gold set, labelled by hand \u00b7 automated checks passing in the latest builds \u00b7 latest Linux test build \u00b7 latest Firefox test build Soon accounts and downloads, counted from the first public release How accuracy is measured Corrections"
},
{
"page": "Transparency",
"title": "Transparency: Nothing is removed quietly.",
"url": "/transparency#corrections",
"text": "0 correction requests received 0 corrections issued 0 API clients cut off for misuse A correction is reviewed when it comes with evidence that a published fact is wrong, and every correction is shown here. Write to legal@omaro.org . IRIS on this site"
},
{
"page": "Transparency",
"title": "Transparency: What IRIS may say here.",
"url": "/transparency#iris-on-this-site",
"text": "The <\u2022> at the bottom of every page opens IRIS. On this site it follows written rules: It answers only from OMARO's public material: this website, published documents, released features and OMARO's policies. It stays off the founder's private life, OMARO's finances and investors, internal tools, unreleased plans and security details. When it can't answer, it says so and points to support@omaro.org. It never guesses. Every answer names the pages it came from. It gives no legal, financial or medical advice. Your question goes to Anthropic's model to write the answer. OMARO keeps only the questions IRIS couldn't answer, as the text alone, with no address or other identifier, for 30 days, so the site can fill the gaps. Everything else is gone when the answer arrives."
},
{
"page": "Transparency",
"title": "Transparency: Company documents",
"url": "/transparency#documents",
"text": "OMARO's privacy policy, cookie policy and terms of use. They cover IRIS for Firefox, IRIS for Linux and this site. IRIS for Linux carries the same words inside the app; the Firefox add-on opens this page. These are drafts until an attorney has read them. Every change shows here the day it's made. Privacy policy. Download the PDF SHA-256 of the PDF: 1657769cd8bc54d2da8d776646e9c0e582ea47881472c6dc1a70df3ca5fc0f95 Draft 0.6, 2026-11-24 (0.6: the summary and Where data is kept name the account; 0.5: accounts, what an account sends and what our account server keeps; 0.4: in Firefox, the sentence that set each answer is kept with each policy's fingerprint; 0.3: problem reports sent with Send to OMARO). Kept up to date as IRIS is built; reviewed by an attorney before IRIS is listed anywhere. Applies to IRIS for Firefox, IRIS for Linux, IRIS for GrapheneOS when it ships, OMARO's website and OMARO's code server. In short: IRIS runs on your device and keeps what it learns there. Without an account, OMARO collects no personal data about you. We never sell your data, never share it for advertising, and never use it to train any AI model. Four things leave your device, and only when you press a button for them: the address of a code repository you ask IRIS to read, a website's address when you ask for its public code, your network address when you ask IRIS to check your connection from outside, and a problem report you choose to send. If you make an account, which is optional, it holds a number with no email, name or phone, and anything it syncs is locked on your device so OMARO can't "
},
{
"page": "Transparency",
"title": "Transparency: Company documents",
"url": "/transparency#documents",
"text": "read it. Who we are. OMARO PBC is a public benefit corporation. Its public benefit is technology that returns authority to people. IRIS is its product: IRIS, the co-operating system for the internet. In this policy, \"we\" and \"OMARO\" mean OMARO PBC, and \"you\" means the person using IRIS or visiting our website. What IRIS keeps on your device. In Firefox: your settings, a fingerprint of each policy you checked, with the sentence that set each answer (so IRIS can tell you when it changes and show what it said before), your history of readings, the names of companies each site's pages contacted, counts of what IRIS blocked for you, and your monthly summary. Firefox keeps them in the add-on's own storage. On Linux: the apps on your computer, the sites and companies each one talked to, the readings of makers' policies, an inbox of what changed on your computer, the old value of any system setting you changed with Fix it (so you can put it back), and your settings. IRIS reads your system's and desktop's own settings on your computer to tell you which ones send data; it changes one only when you press Fix it. They are kept in an encrypted file in your home folder. The key to that file is kept in your system's keyring, which only your account can open. On GrapheneOS (when it ships): the same kinds of things as on Linux, kept in the app's own encrypted storage on your phone. None of this is sent to OMARO. We can't see it, and we can't hand it to anyone. You can delete all of it at any time with Forget everything in IRIS's settings, and removing IRIS deletes it too. What IRIS reads fr"
},
{
"page": "Transparency",
"title": "Transparency: Company documents",
"url": "/transparency#documents",
"text": "om websites. When you turn on reading, IRIS fetches privacy policies and terms straight from the websites that publish them. On Linux and GrapheneOS it reads the policies of the companies that make your apps. These requests go from your device to that website and nowhere else. They carry no cookies, no sign-in and no referrer. The website sees an ordinary request from your network address and may log it under its own policy. OMARO never sees these requests. What leaves your device, and only when you ask. Read the code. When you press Read the code, IRIS sends the repository's address to OMARO's code server. The server reads that repository's public code, asks an AI model to describe what the code does, and sends the reading back. Nothing about you or your device is sent, and the model sees only public code. A company's public code. For a website that isn't on the list IRIS ships, pressing Look for its public code sends that website's address to OMARO's code server. Check from outside. When you press Check from outside, IRIS asks OMARO's code server which company owns the address the internet sees for you. The server sees your current network address to answer. It keeps no record of it. Your account, if you make one. An account is optional in the Firefox add-on and in IRIS Lite. It is a 16-digit number with no email, name or phone. Making one or signing in sends OMARO's account server your number, a name for the device (such as \"Firefox on Linux\"), a code made from your number and that device so a reinstall takes its old place, and a public key made from your 12 words. The 1"
},
{
"page": "Transparency",
"title": "Transparency: Company documents",
"url": "/transparency#documents",
"text": "2 words never leave your device. With sync on, IRIS sends what it keeps and your look and comfort choices, each locked on your device with a key made from your 12 words, so OMARO can't read them. Report a problem. When you press Send to OMARO, IRIS sends the report you just read in full to OMARO's code server: the kind of problem, what you wrote and, only if you ticked the box, the version of IRIS, your system, your language and the view you were on. The code server locks each report on arrival with a key only OMARO holds, so the server itself can't read it, and keeps nothing about who sent it. OMARO's own review desk collects the locked reports, opens them, and deletes them from the code server. Security problems are never sent this way. Your browser or your computer sends your network address with every request to any server, ours included. Our code server uses it for one thing: it counts how many new readings each network address started in the last hour, so that one network can't use up the day's readings for everyone. That count is deleted after one hour. What our servers keep. Readings of public code, by repository and by commit, so the next person who asks gets the same reading at once. A reading describes public code. It holds nothing about who asked for it. The hourly count described above, deleted after one hour. Problem reports you send, locked until OMARO collects them, then kept by OMARO to fix IRIS. The code server also counts how many reports each network address sent in the last hour (five at most), in memory only; that count is gone within the hour. Account"
},
{
"page": "Transparency",
"title": "Transparency: Company documents",
"url": "/transparency#documents",
"text": "s, if you make one: a keyed fingerprint of your number (never the number itself), the public key made from your 12 words, your two-step key if you turn it on, each device's name, kind and dates, a fingerprint of each device's sign-in, your plan and its end date, the codes you redeemed, and your synced copies, which are locked and can't be read by OMARO. No IP addresses and no logs of who asked. Close my account deletes all of it. We keep no browsing history, no analytics and no logs that name you. The companies we rely on to run the server keep their own records under their own policies: Render hosts the code server and its database in the United States, Anthropic runs the AI model that reads public code, and Vercel hosts our website. We send them only what this policy describes. We have asked none of them to keep anything about you, and we will tell you here if that changes. Our website. Our website sets no cookies and runs no analytics, advertising or tracking scripts. See our cookie policy. What we never do. We never sell your data, and we never share it with advertisers, data brokers or anyone else. We never use your data to train AI models, ours or anyone else's. Nothing you do in IRIS becomes training data. We never show you advertising. We never ask for an email, a name or a phone number, and the Firefox add-on never needs an account. Your rights. You can see, export and delete everything IRIS keeps, from IRIS's own settings, without asking us. Outside an account, we hold no personal data about you, so a request to us under any privacy law will find nothing to delete"
},
{
"page": "Transparency",
"title": "Transparency: Company documents",
"url": "/transparency#documents",
"text": "; an account you can close yourself in IRIS, which deletes it from our server. Write to us anyway and we will answer in writing within a month. You can also complain to your data protection authority. How long things are kept. Outside an account, we store no personal data about you. You can delete an account and its synced copies at any time with Close my account in IRIS. On your device: until you delete them. On Linux, the record of which companies each app talked to covers the last 30 days, the record of each policy fetch covers the last 90 days, and the inbox keeps its last 1,000 entries from the last 400 days; older entries are deleted on their own. On our servers: readings of public code are kept until the code changes or until we remove them. The hourly count is deleted automatically after one hour. A problem report waits, locked, on the code server until OMARO collects it (within the hour), and is then deleted there; OMARO keeps the report itself until the problem is fixed, and deletes it when you ask. Where data is kept. What IRIS learns is kept only within your device, wherever you are. Our code server is in the United States and holds only readings of public code, the hourly count and locked problem reports waiting to be collected. OMARO's account server, once it opens, holds only what the account section above lists, locked where it says so. Children. IRIS is for everyone and collects no data from anyone, including children under 13. We do not collect personal information from children. Security. Code readings travel over HTTPS. On Linux, IRIS's own records are e"
},
{
"page": "Transparency",
"title": "Transparency: Company documents",
"url": "/transparency#documents",
"text": "ncrypted on your disk, and the network helper that blocks addresses runs with only the rights it needs and asks for an administrator's password before it changes anything. Our security posture is published and describes how IRIS is built and tested. Changes to this policy. We will tell you about changes at least 30 days before they take effect, in IRIS itself and on our website. A change that would collect more about you will never apply to what IRIS kept before the change, and you can turn off the feature it concerns. Disputes. If you have a problem with how we handle your data, write to us first. If we can't put it right, you can bring a claim in court where you live, under the laws that protect you there. Contact. governance@omaro.org Cookie policy. Download the PDF SHA-256 of the PDF: 5af01049c64f95b3863b52029da0f31ef8a157d1253c5f6e6db84b19c6e4e541 Draft 0.1, 2026-11-19. Kept up to date as IRIS is built; reviewed by an attorney before IRIS is listed anywhere. In short: OMARO's website sets no cookies. IRIS sets none either, and it sends none of yours when it reads a policy for you. Our website. OMARO's website sets no cookies, and it uses no local storage, tracking pixels, fingerprinting, analytics or advertising scripts. It loads no fonts, scripts or images from other companies. You will never see a cookie banner on it, because there is nothing to ask you about. Vercel hosts the website. Like every web host, it receives your network address with each page request, under its own policy. We read none of it and keep none of it. IRIS. In Firefox, IRIS keeps its settings an"
},
{
"page": "Transparency",
"title": "Transparency: Company documents",
"url": "/transparency#documents",
"text": "d readings in the add-on's own storage on your device. It sets no cookies on any website. When IRIS reads a policy for you, on any platform, it sends the request without your cookies, your sign-in or a referrer, so the website can't connect the reading to your account. On cookie banners, IRIS for Firefox presses \"reject\" on common banners for you, while that switch is on. It never presses \"accept\". Our code server sets no cookies, and IRIS sends it none. Changes. We will tell you about changes at least 30 days before they take effect, in IRIS itself and on our website. Contact. governance@omaro.org Terms of use. Download the PDF SHA-256 of the PDF: 8b6972bf08db9e14b7d21b8eeada862b2decb82b79f339ecff804d062ce22f19 Draft 0.1, 2026-11-19. Kept up to date as IRIS is built; reviewed by an attorney before IRIS is listed anywhere. These terms cover IRIS for Firefox, IRIS for Linux, IRIS for GrapheneOS when it ships, OMARO's website and OMARO's code server. In short: IRIS is free. Its code is licensed under the Mozilla Public License 2.0 and is published when IRIS is listed. You own what you make with it. We will tell you before these terms change, and you can take us to court where you live. Who these terms are between. These terms are between you and OMARO PBC, a public benefit corporation (\"OMARO\", \"we\"). By installing IRIS or using our code server you agree to them. If you don't agree, you can remove IRIS at any time. What IRIS is. IRIS, the co-operating system for the internet, reads privacy policies, terms, code and network activity for you and explains them in plain words. It"
},
{
"page": "Transparency",
"title": "Transparency: Company documents",
"url": "/transparency#documents",
"text": " is software that runs on your device. Our privacy policy says what it keeps and what it sends. IRIS can make mistakes. IRIS reads documents and code with rules and, for code, with an AI model. It can misread them. A reading is IRIS's best account of what a document or repository says, and the document itself is always the last word. IRIS gives no legal advice. If a decision matters to you, read the source IRIS quotes, and ask a lawyer when you need one. The licence to the code. IRIS's code is licensed under the Mozilla Public License 2.0, and OMARO publishes it when IRIS is listed. You may read it, run it, change it and share it under that licence. The names OMARO and IRIS and the IRIS eye belong to OMARO PBC; the licence covers the code and leaves the names with us. What you make stays yours. You own the reports, notes and exports you make with IRIS. You keep ownership of all rights in your content. We claim no licence to it, because it stays on your device and never reaches us. When you send us a problem report or a message, we use it only to answer you and fix IRIS, and you can ask us to delete it. Using the code server fairly. The code server reads public code for everyone, so each network has a limit on new readings per hour and the server has a limit per day. You agree not to work around those limits, attack the server or use it to read code you have no right to read. If you break these rules, we may suspend your access to the code server from the network address involved, and you can appeal the decision by writing to governance@omaro.org. We will tell you why when y"
},
{
"page": "Transparency",
"title": "Transparency: Company documents",
"url": "/transparency#documents",
"text": "ou write, and we answer every appeal within 30 days. No accounts and no payment. IRIS needs no account, so there is no account for us to close. IRIS is free. It has no subscription, it does not automatically renew, and there is nothing to cancel. If we ever offer a paid plan, it will have its own terms, you will be able to cancel it at any time from within IRIS, and it will never take away what the free version does today. Changes to these terms. We will tell you about changes to these terms at least 30 days before they take effect, in IRIS itself and on our website. If you don't accept a change, you can stop using IRIS before it takes effect; what you already have keeps working under the terms you agreed to. If something goes wrong. We are responsible to you for foreseeable loss and damage caused by our breach of these terms or our failure to use reasonable care and skill. We are not responsible for loss that nobody could have foreseen. Nothing in these terms limits what the law where you live does not allow us to limit, including liability for death, personal injury or fraud. Disputes. If you have a problem with IRIS, write to governance@omaro.org first and we will try to put it right. If we can't, you can bring a claim in court where you live, under the laws that protect you there. We don't use forced arbitration, and nothing in these terms stops you from joining a class action. Contact. governance@omaro.org Benefit reports"
},
{
"page": "Transparency",
"title": "Transparency: Once a year, in public.",
"url": "/transparency#reports",
"text": "As a public benefit corporation, OMARO reports each year on how it served its public purpose. The first report covers OMARO's first full year. Every report will be posted here and pinned to IPFS, with a hosted link and a permanent one. OMARO's products are held to the HAI Standard, and the results will be published here the same way. Report a security problem"
},
{
"page": "Origins",
"title": "Origins",
"url": "/origins",
"text": "Origins"
},
{
"page": "Origins",
"title": "Origins: The thinking behind the work.",
"url": "/origins",
"text": "OMARO began with one question: who holds the authority when a person uses technology? Four papers set out the answer and the standards that follow from it. The white papers"
},
{
"page": "Origins",
"title": "Origins: Four papers.",
"url": "/origins#papers",
"text": "The OMARO White Paper. Why OMARO exists, how a public benefit corporation keeps its purpose, and what it builds. It starts from how people hand authority over their lives to systems they never chose, and ends with what becomes possible when tools hand it back. The IRIS White Paper. What a co-operating system is and how IRIS works: reading policies on the device, what each layer checks, how accuracy is measured in public, and how IRIS is built and audited. The HAI Standard White Paper. Nine pillars for AI that answers to people, from transparency and a named chain of accountability to data ownership, independent audit and the dignity of everyone whose work makes AI possible. An executive edition follows it. The HAI Rubric. How the HAI Standard is scored: the evidence each pillar asks for at the Declared, Verified and Certified levels. It's versioned on its own, so the standard can stay stable while the scoring improves. Each paper will be posted here as a PDF with its SHA-256, so a downloaded copy can be checked. How IRIS is built"
},
{
"page": "Origins",
"title": "Origins: Written with AI, directed by a person.",
"url": "/origins#how-iris-is-built",
"text": "IRIS is written with AI and directed by its founder, who decides what it does and tests every build. Every change is tested, the methods are published, and outside experts check the work before anyone pays for it. About the founder"
},
{
"page": "Mission",
"title": "Mission",
"url": "/mission",
"text": "Mission"
},
{
"page": "Mission",
"title": "Mission: Agency, Returned.",
"url": "/mission",
"text": "OMARO exists to put authority over technology back with the people who use it. Every day, people agree to rules they never read, run software whose workings they can't see, and hand decisions to systems that answer to someone else. Each step is small. Together they add up to a life arranged by other people's defaults. We think the people on the receiving end deserve to know what they're agreeing to and to have a say in it. Speed, scale and pattern-matching can be automated. Judgment, conscience and accountability belong to people, and the tools around them should leave room for all three. So OMARO builds tools that work on the person's side. IRIS reads the fine print, shows what each site and app does behind the page, and keeps the company's record in view, all on the person's own device. The HAI Standard sets out what anyone building AI owes the people it affects. OMARO is a public benefit corporation, so this purpose sits in its charter beside profit. It takes no advertising and sells no data. It publishes its methods, its accuracy and its own policies, and holds itself to the standard it applies to others. We build for the people who will live with the technology, and we answer to them. See IRIS Our figures"
},
{
"page": "Connect",
"title": "Connect: Connect.",
"url": "/connect",
"text": "Bluesky X LinkedIn GitHub Newsletter Contact Legal Please don't write about Advertising, sponsorship or paid placement. Removing or changing a documented finding without evidence. Unsolicited investment offers. A correction is reviewed when it comes with evidence that a published fact is wrong, and every correction is shown on the Transparency page."
},
{
"page": "Donate",
"title": "Donate",
"url": "/donate",
"text": "Donate"
},
{
"page": "Donate",
"title": "Donate: Keep it independent.",
"url": "/donate",
"text": "OMARO takes no advertising and sells no data. Donations pay for the servers, the testing and the outside security audit IRIS gets before anyone pays for it. Card. Any amount, once or monthly, processed by Stripe. OMARO never sees or stores your card number. Bitcoin. On-chain, to an address published here with its QR code. Monero. The most private way to give. The address will be published here with its QR code. OMARO is a public benefit corporation, so donations aren't tax-deductible. Every donation total will be reported on the Transparency page."
},
{
"page": "Founder",
"title": "Founder",
"url": "/founder",
"text": "Founder"
},
{
"page": "Founder",
"title": "Founder: Trenton W. Roberts",
"url": "/founder",
"text": "Trenton W. Roberts founded OMARO PBC on one conviction: people should hold the authority over their own lives online, and the tools to use it should be plain enough for anyone. He is a product director in the full sense. He decides what IRIS does, what it refuses to do and how every sentence in it reads, then tests each build himself until it holds up. He holds the work to rules that are easy to state and hard to keep: say plainly how it's built, never claim more than the evidence shows, never sell the people it serves. He builds with AI openly, because to him the question that matters is whose values shape the work. IRIS is what those values look like when they're built. X Bluesky Farcaster Contact OMARO"
},
{
"page": "Methodology",
"title": "Methodology",
"url": "/methodology",
"text": "IRIS \u00b7 Methodology"
},
{
"page": "Methodology",
"title": "Methodology: How IRIS reads.",
"url": "/methodology",
"text": "The full method behind every answer IRIS gives: what it promises, how it finds and reads a policy, the rules that decide each answer, how accuracy is measured, and where it can be wrong. It's published before IRIS shows anyone a rating. Download the PDF SHA-256 of the PDF: f9d1240eaefea213dbf34b7056773e7c0fcfac9fa2f50c4560d7c3030341b9b9 Preamble IRIS Methodology, Part 1: Your rights, policy reading"
},
{
"page": "Methodology",
"title": "Methodology: Preamble",
"url": "/methodology#part-0",
"text": "OMARO PBC \u00b7 Version 2.0 \u00b7 November 2026 \u00b7 Read first Why IRIS exists. Every website and app you use comes with rules about you: what it collects, who it sells to, whether it trains AI on what you write, whether you can ever take it to court. Those rules are real and they bind you. They are also written for lawyers, spread across several long pages, and changed without much notice. Almost nobody reads them, and the people who do rarely understand what they agreed to. OMARO's principle is short: clarity returns agency. You can only decide for yourself what you understand. IRIS reads the fine print and shows you, in plain words, what it means for you, with the exact sentence behind every answer. IRIS is a co-operating system: it works alongside the browser and phone you already use, as a layer that makes the internet's rules readable. It runs as a Firefox add-on today, with a Linux app and an Android app (GrapheneOS first) to follow. Commitments that hold across every part. These apply to every layer this series describes, now and later. Reading happens on your device. IRIS fetches the policy pages of the site you are on and reads them on your computer or phone. Nothing about what you visit is sent to OMARO. Every answer shows its sentence. A tile that says \"At risk\" links to the sentence in the policy that decided it, and to the page it came from. You can check every answer yourself. IRIS says when it couldn't read. If a page sits behind a login, is built by scripts IRIS could not run, is in a language IRIS does not read yet, or is blocked by a bot check, IRIS says so, page b"
},
{
"page": "Methodology",
"title": "Methodology: Preamble",
"url": "/methodology#part-0",
"text": "y page. It never shows a result it did not earn. Precision comes before coverage. A wrong \"At risk\" frightens people for nothing; a wrong \"Respected\" reassures them falsely. Both count as release-blocking errors. When the wording is unclear, IRIS says the policy doesn't say, rather than guessing. Accuracy is measured on sites IRIS has never seen, and published. The method and the current numbers are in Part 1. IRIS reports what a policy says. It gives no legal advice and makes no finding that a company follows or breaks any law. What a company does can differ from what its policy says; IRIS reads the policy. No advertising, no data sales, no tracking of the people who use IRIS. OMARO is funded by people who choose to pay for it. Plain language, in three layers. Every technical idea IRIS shows has three layers: Layer. What it is. Example. 1. Technical term. The accurate name, kept for anyone who wants it. Binding arbitration clause. 2. Plain name. What IRIS shows first. Going to court: Arbitration only. 3. Plain meaning. What it means for you, in a sentence. You give up your right to take a dispute to court; a private arbitrator decides instead. The plain name leads. The technical term is available. The plain meaning is one tap away. The test for a plain meaning: someone who has never thought about the idea understands it on first read and knows what it means for them. Other languages. IRIS reads English policies today. Reading other languages will happen on your device, as reading does now. Plain names are authored for each language by people who think in it; they are never"
},
{
"page": "Methodology",
"title": "Methodology: Preamble",
"url": "/methodology#part-0",
"text": " machine-translated, because a phrase that is correct but carries no meaning to its reader is just a different kind of jargon. The series. IRIS works in layers, each named for what it shows you: Your rights and Your agreement read policies and terms, What this page runs reads what a page loads and does, Read the code reads a public code repository, Company record keeps the documented enforcement record, the HAI Standard measures how a company's AI behaves, and Infrastructure shows who hosts and delivers the service. The HAI Standard is the one layer with its own name, because it is a standard organizations are measured against. The preamble and all seven parts make one document, the IRIS Methodology, published as one page and one PDF. Each part joins it when the layer it describes ships, so the document only ever describes what IRIS does today. Part. Layer. Status. 1. Your rights: privacy policies and terms of service. Published with this preamble. 2. Your agreement: what the terms say about your content, changes, your account, renewals and liability. In the add-on as a preview, on by default; published once the tiles pass a held-out run. 3. What this page runs and Read the code: trackers, fingerprinting, what scripts do with what you type, dark patterns, security gaps, and a public repository's code. In the add-on as a preview; published when it leaves preview. 4. Company record: documented enforcement records about the company. When the layer ships. 5. HAI Standard: how a company's AI measures against the Standard. Published separately with the Standard and Rubric. 6. Inf"
},
{
"page": "Methodology",
"title": "Methodology: Preamble",
"url": "/methodology#part-0",
"text": "rastructure: who hosts and delivers the service, and where. When the layer ships. 7. Governance: corrections, disputes and right of reply. Before organization evaluations begin. Questions and corrections: governance@omaro.org."
},
{
"page": "Methodology",
"title": "Methodology: IRIS Methodology, Part 1: Your rights, policy reading",
"url": "/methodology#part-1",
"text": "OMARO PBC \u00b7 Version 2.0 \u00b7 November 2026 \u00b7 Applies to the Firefox add-on from version 0.5.4 This part describes how IRIS finds a site's privacy policy and terms, how it reads them, how it decides each answer, and how its accuracy is measured. It is written so that anyone can check what IRIS does. 1. What IRIS reads. When you open IRIS on a site, it reads the site's policy set : The privacy policy. IRIS looks for it among the page's links (link text such as \"Privacy Policy\" and paths such as /privacy ). If you are already on a policy page, it reads that page. If the page it reaches is a short hub that only links to the full policy (common for large companies), it follows that link once. When a legal page holds every document as tabs (a privacy tab, a terms tab, rewards terms and so on), IRIS reads the tab named for the privacy policy as the policy and the tab named for the terms as the terms, and leaves the program and promotion terms out. The terms of service. Court access and AI training are often written there. IRIS looks on the page you are on, then on the privacy policy. Related policy pages, up to 8 (or 25 with \"Read deeper\" or the Deep setting): regional supplements, cookie policies, children's policies and similar pages linked from the policy and the terms. IRIS reads pages on the same site, or on the same company's other domain (for example redditinc.com for reddit.com). It skips: another company's terms (for example an embedded \"Google Terms apply\" notice);. pages written for someone else: businesses, developers, advertisers, drivers, job applicants, donors, employe"
},
{
"page": "Methodology",
"title": "Methodology: IRIS Methodology, Part 1: Your rights, policy reading",
"url": "/methodology#part-1",
"text": "es;. archived or dated earlier versions of a policy, translated copies, and promotion rules (\"Terms apply\");. blog, help and tag pages that talk about privacy without being a policy. How pages are fetched. Pages are fetched by your own browser, without your cookies, so IRIS reads the same public policy anyone would see. PDFs are read with the open PDF.js reader bundled inside IRIS. Pages built entirely by scripts can be read in a hidden background tab if you turn on full reading (Firefox asks your permission once). IRIS identifies itself honestly: it uses your normal browser and never disguises its requests or rotates fake identifiers. When IRIS can't read a page. IRIS lists every linked page it could not read and why: it couldn't be opened, sits behind a login, is built with scripts, is in another language, or was stopped by a bot check. If IRIS reached the privacy policy through a link and could read fewer than 35 sentences of it, it says so and shows no result. When you are on the policy page itself, it shows the result with a note that the policy is unusually short. 2. The seven answers. IRIS answers seven questions about your rights. Each answer has one of four states: State. Meaning. Respected. The policy protects you on this point. Limited. There is a condition, an exception or an opt-out you have to use. At risk. The policy works against you on this point. Policy doesn't say. IRIS found no clear statement. Question. Respected. Limited. At risk. Training AI on your data. Not used, or only with your opt-in. Used unless you opt out. Used, with no way to opt out. Sellin"
},
{
"page": "Methodology",
"title": "Methodology: IRIS Methodology, Part 1: Your rights, policy reading",
"url": "/methodology#part-1",
"text": "g your data. Not sold. Shared with partners for advertising, or a denial hedged around the legal meaning. Sold, or the policy says its sharing counts as a sale. Deleting your data. You can delete it, and the only exceptions are narrow ones tied to a specific reason (the law, fraud or safety, money owed, disputes, backups). You can, but the company may keep data for open-ended reasons (\"business purposes\", no reason given), or copies of your data remain. You cannot delete it. Going to court. You keep that right. Arbitration you can opt out of; courts with a short deadline to sue; courts but no class actions; courts but arbitration for some services. Arbitration only. How long they keep it. A stated period of a year or less, or almost nothing kept. Over a year, until you delete it, or as long as the company decides is needed. Kept indefinitely. Where your data goes. Kept in named countries only. Leaves the region with named safeguards (for example Standard Contractual Clauses), stored in a named country, or leaves with no safeguards named. May go anywhere, with no safeguards named. Children's data. Not collected (an age rule, or no knowing collection). Collected with parental consent. Collected, no parental consent stated. How an answer is decided. IRIS splits every page into sentences and matches each one against written rules for each question. The rules are public in the IRIS source code. A few principles decide most cases: Only the company's own practice counts. Rules for users (\"you may not use the content to train a model\", \"you may not sell your account\") never count a"
},
{
"page": "Methodology",
"title": "Methodology: IRIS Methodology, Part 1: Your rights, policy reading",
"url": "/methodology#part-1",
"text": "s what the company does. Notices about the law are never admissions. A list of your rights (\"you may opt out of the sale of your data\") or a hypothetical (\"were we ever to sell...\") never shows the company sells. A plain admission (\"we sell or share your information as follows\") does. A promise must cover your data. A promise about one item (\"we will not sell your phone number\", \"we do not use email content to train models\") never shows the whole tile as respected. Exceptions win over the headline. \"We do not sell your data other than for targeted advertising\" is sharing for advertising. \"You can delete your data, but we may not be able to delete some of it\" is a limited right, unless every exception names a narrow reason: \"we keep what the law requires, or what we need to collect fees you owe\" leaves the right Respected. Nearly every policy names these exceptions, and the law allows them; IRIS shows them as evidence so you can judge them yourself. The general rule wins over a narrow one. \"IP addresses are deleted after 100 days\" never outweighs \"we keep information as long as necessary\". The main terms decide court access. Arbitration written only in side terms for paid features or bookings shows \"Courts, but arbitration for some services\". Headings, questions and examples about other companies state nothing. The overall result. Result. When. Your rights at risk. AI training, selling, deletion or court access is at risk, or any two answers are at risk. Review recommended. Anything is limited, at risk or not stated, short of the above. A right the policy says nothing about "
},
{
"page": "Methodology",
"title": "Methodology: IRIS Methodology, Part 1: Your rights, policy reading",
"url": "/methodology#part-1",
"text": "keeps a site from \"Your rights protected\". Silence is either a choice or an oversight, and the standard asks that every right be met in writing. | Your rights respected | All seven answers are respected | Hidden tiles (Settings \u2192 Tiles to show) still count toward the overall result. Evidence. Open any tile to see what the question means, what this policy does, up to three sentences that decided it, and the page each came from. \"Copy findings\" puts the whole reading on your clipboard; \"Save for review\" saves the reading and the full text of every page read to your own computer. Nothing is sent anywhere. 3. Policy changes. With policy change alerts on (Settings), IRIS remembers on your device a fingerprint (a SHA-256 hash) of each privacy policy you check and what each answer was. When the policy changes, it tells you which answers changed. \"Forget everything IRIS remembers\" clears this. 4. Pre-read readings. OMARO will publish readings of popular sites prepared ahead of time, signed so that IRIS can prove they came from OMARO and were not altered. IRIS uses a pre-read only when it cannot read the live policy itself, labels it with the date it was read, and tells you when the live policy differs from the version OMARO read. A dataset that fails its signature check is never used. 5. Accuracy. How it is measured. Confirmed set. Every site used to write or fix a rule is kept, with its full saved text and the answer for each question. Every new version of IRIS must read all of them the same way, or the difference is reviewed. The set has 98 sites. Held-out runs. A batch of sites "
},
{
"page": "Methodology",
"title": "Methodology: IRIS Methodology, Part 1: Your rights, policy reading",
"url": "/methodology#part-1",
"text": "IRIS has never been tuned on is read once, before any rule is changed, and scored against the full text. That first score is the published number. Only then are the errors fixed and the sites added to the confirmed set. The release gate. A version may be released to testers only with zero wrong \"At risk\" and zero wrong \"Respected\" on a fresh held-out run. Misses (\"doesn't say\" where the policy says) are tracked separately. Reviews to date were done with AI assistance and are being confirmed by OMARO. Results so far. Run. Date. Reader. Sites. Answers right. Wrong \"At risk\". Wrong \"Respected\". Sites with either. 1. 2026-11-05. 0.4.7. 23. 91.3%. 4. 2. 6 (26%). 2. 2026-11-06. 0.5.3. 25. 86.3%. 4. 8. 9 (36%). 3. 2026-11-10. 0.9.8 to 0.9.11. 38. 79.0%. 11. 9. 16 (42%). Run 3 was read in three batches of fresh sites. Each batch was scored cold, with the reader as it stood before that batch, and its errors were fixed before the next batch. 252 answers were scored. Fourteen answers on two sites are left out, because IRIS read the wrong page as the privacy policy there; that fault is counted separately. OMARO confirmed the nine answers where the policy text left room for more than one reading before this score was published. IRIS has not yet passed its release gate. Every run found wording the rules had not met before; every error was fixed and added as a test, and the next run uses fresh sites. These numbers will be updated after every run. What comes next. Written rules miss wording they have not seen. OMARO is preparing a small reading model, trained on sentences OMARO has confirm"
},
{
"page": "Methodology",
"title": "Methodology: IRIS Methodology, Part 1: Your rights, policy reading",
"url": "/methodology#part-1",
"text": "ed, from an open base model with a public license. It will run on your device, beside the rules, and replace them only when it scores better on fresh sites. Its base model, training sources and scores will be published. 6. Limits. IRIS reads English policies today. IRIS reads what a policy says, which can differ from what a company does. Pages that need a login, or that block automated reading, are reported as unread. Policies change; a reading reflects the text on the day it was read. IRIS gives no legal advice and makes no finding that a company follows or breaks any law. 7. Corrections. If IRIS misreads a site, use Copy findings or Save for review and send it to governance@omaro.org. Every confirmed misread becomes a test that every later version must pass."
},
{
"page": "IRIS on this site",
"title": "IRIS on this site",
"url": "/transparency#iris-on-this-site",
"always": true,
"text": "IRIS on OMARO's website answers only from OMARO's public material: this website, published documents, released features and OMARO's policies. It doesn't discuss the founder beyond the founder page, finances, investors, internal tools, unreleased plans or security details. When it can't answer, it says so and points to support@omaro.org. OMARO keeps only the questions IRIS couldn't answer, as text alone, with no address or other identifier, for 30 days, to improve the site. Questions go to Anthropic's model to write the answer."
}
];
export default KB;
