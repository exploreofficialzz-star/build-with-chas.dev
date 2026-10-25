export const SITE = {
  name: "chAs",
  legal: "Chidalu Silas Ogbala",
  brand: "chAs Technologies LLC",
  company: "Rumuo",
  domain: "build-with-chas.dev",
  email: "chastechnologiesllc@gmail.com",
  phoneDisplay: "+234 706 530 6141",
  phoneTel: "+2347065306141",
  location: "Ebonyi State, Nigeria",
  born: "11 April 2004",
  birthplace: "Nwangwu, Okpanku Nkaleke, Ebonyi",
} as const;

export const SOCIALS = [
  {
    label: "GitHub",
    href: "https://github.com/exploreofficialzz-star",
  },
  {
    label: "X",
    href: "https://x.com/chAstechllc",
  },
  {
    label: "YouTube",
    href: "https://www.youtube.com/@chAsTechnologiesLLC",
  },
] as const;

export type Kind = "now" | "app" | "game" | "experiment" | "paper";

export type Project = {
  slug: string;
  title: string;
  kind: Kind;
  status: string;
  year: string;
  summary: string;
  body: string[];
  stack: string[];
  repo?: string;
  links?: { label: string; href: string }[];
  featured?: boolean;
};

const gh = (repo: string) => `https://github.com/exploreofficialzz-star/${repo}`;

export const PROJECTS: Project[] = [
  {
    slug: "env",
    title: "enV",
    kind: "now",
    status: "Live on the web",
    year: "2026",
    featured: true,
    summary:
      "A browser toolkit so everyday technical work does not require a high-end machine. This is the product I am building toward the 2GB-RAM promise.",
    body: [
      "enV is a responsive collection of browser tools: calculations, conversions, color and CSS, QR codes, image tasks, mockups, and a large developer studio. Where it can, the work stays in the visitor's browser instead of uploading files.",
      "The public repo is TypeScript. A production origin named in that repo is envtools.store, and the homepage on the repository is the Vercel deploy. Native Android and iOS apps are in the same repo and do not simply wrap the website. Optional AI help stays off until a provider key is set. Live purchases are not switched on.",
      "I have not owned a machine with an Nvidia GPU. The point of enV is that a person on a small phone, including a 2GB device, should still reach tools that usually assume a heavy setup.",
    ],
    stack: ["TypeScript", "Browser tools", "Android", "iOS"],
    repo: "enV",
    links: [{ label: "Open the deploy", href: "https://en-v.vercel.app" }],
  },
  {
    slug: "rumuo",
    title: "Rumuo",
    kind: "now",
    status: "Company · date not fixed",
    year: "2026",
    featured: true,
    summary:
      "Rumuo is the company. chAs Technologies LLC stays the personal brand. The first Rumuo platform does not have a release date yet.",
    body: [
      "FinReels started as a financial-literacy app. While rebuilding it into something wider, I found the FinReels name already trademarked and in use. I kept searching names until Rumuo was clear: no trademark hit, no existing software I could find under that name.",
      "The wider idea needs funding and a real dataset. I do not pretend that platform is shipped. When the date is real, it will be published here. Until then, Rumuo is the name of the company I am building, focused on AI and the other products that can actually go out.",
    ],
    stack: ["Company", "AI", "Products"],
  },
  {
    slug: "finreels",
    title: "FinReels",
    kind: "app",
    status: "On Google Play",
    year: "2025–2026",
    featured: true,
    summary:
      "The financial-literacy app that made it onto Google Play after several other submissions were rejected.",
    body: [
      "FinReels collects videos, shorts, blogs, and books about skills, businesses, and professions into one Android app. The Play listing is under chAs Technologies LLC, package com.chastech.finreels.",
      "The repo describes a Flutter app with YouTube RSS, a large category list, books, blogs, ads, and optional ad-free purchases. I posted about it, a designer found the company name on Google and handled social posts for about a month, and the app did not make the money I hoped.",
      "Survey accounts I had been living on were later banned. I started restructuring FinReels, then moved the bigger ambition to Rumuo because of the name. A later repo, FinReels_lattest, is the follow-up codebase. I am not claiming revenue.",
    ],
    stack: ["Flutter", "Dart", "Android"],
    repo: "Finreels",
    links: [
      {
        label: "Google Play",
        href: "https://play.google.com/store/apps/details?id=com.chastech.finreels",
      },
      { label: "Later repo", href: gh("FinReels_lattest") },
    ],
  },
  {
    slug: "alpha-crush",
    title: "Alpha Crush",
    kind: "game",
    status: "Shipped · 3D still open",
    year: "2026",
    featured: true,
    summary:
      "A Godot game I got live. I am taking it toward 3D. Crystal Cascade's update landed first.",
    body: [
      "Alpha Crush lives in a GDScript repository. I have said it reached the Play Store along with Crystal Cascade, after FinReels. I am not linking a store URL here because I have not confirmed the package name on this page.",
      "A public privacy-policy repo, alphacrush-privacy, sits next to it. The 3D pass is unfinished.",
    ],
    stack: ["Godot", "GDScript"],
    repo: "Alpha-Crush",
    links: [{ label: "Privacy page repo", href: gh("alphacrush-privacy") }],
  },
  {
    slug: "crystal-cascade",
    title: "Crystal Cascade",
    kind: "game",
    status: "Updated",
    year: "2026",
    featured: true,
    summary:
      "A Godot puzzle game. I have an updated build. Sorting crystals and matching gems is the public description I have used.",
    body: [
      "Crystal Cascade is a GDScript repo. I have said it went live on the Play Store and that the update is further along than Alpha Crush. The store package is not linked here until I confirm it.",
      "There is a matching privacy-policy repository, crystal-cascade-privacy.",
    ],
    stack: ["Godot", "GDScript"],
    repo: "Crystal-cascade",
    links: [{ label: "Privacy page repo", href: gh("crystal-cascade-privacy") }],
  },
  {
    slug: "emoji-rain",
    title: "Emoji Rain",
    kind: "game",
    status: "Built",
    year: "2026",
    featured: true,
    summary:
      "A Flutter game: tap the right falling emoji, ignore the rest. Wrong tap ends the run.",
    body: [
      "The repo is Emoji Rain: Focus or Fail. It is a Flutter game with levels, combos, local notifications, and AdMob wired for Android. iOS ad IDs in that README were still samples when I last read it.",
      "This was one of the games I built in parallel because it cost time, not a server bill. A privacy-policy repo is emoji-rain-privacy. I am not claiming a store listing beyond the submission attempts I have already described.",
    ],
    stack: ["Flutter", "Dart"],
    repo: "EmojiRain",
    links: [{ label: "Privacy page repo", href: gh("emoji-rain-privacy") }],
  },
  {
    slug: "pivot-ball",
    title: "Pivot Ball",
    kind: "game",
    status: "Built",
    year: "2026",
    summary: "A Dart game repo. One of the small games I built alongside Emoji Rain.",
    body: [
      "Pivot Ball is a public Dart repository. I have not pasted a gameplay manual here because the README does not document one. It belongs with the other games that were cheap to attempt and possible to finish on a phone.",
    ],
    stack: ["Flutter", "Dart"],
    repo: "Pivot-ball",
  },
  {
    slug: "red-flag-names",
    title: "Red Flag Names",
    kind: "app",
    status: "Built for fun",
    year: "2026",
    summary:
      "A satirical name analyzer. Type a name, get a joke relationship report. Not advice.",
    body: [
      "Red Flag Names is a Flutter app. The results are randomized entertainment: a hook, traits, a plot twist, a chaos score, and a risk label. The README says the copy is satire and that names are not actually judged.",
      "It was one of the fun apps I built when the expensive ideas could not ship. A privacy-policy repo is redflag-privacy.",
    ],
    stack: ["Flutter", "Dart"],
    repo: "Redflagnames",
    links: [{ label: "Privacy page repo", href: gh("redflag-privacy") }],
  },
  {
    slug: "nexskills-hub",
    title: "NexSkills Hub",
    kind: "app",
    status: "Repo",
    year: "2026",
    summary: "A utility app I count among the low-cost builds. The README is only the title.",
    body: [
      "NexSkills Hub is a public Dart repository. I built it as a utility, in the same stretch as FinReels and Red Flag Names. I am not inventing a feature list the README does not contain.",
    ],
    stack: ["Flutter", "Dart"],
    repo: "NexSkills-Hub",
  },
  {
    slug: "promptreel-ai",
    title: "PromptReel AI",
    kind: "experiment",
    status: "Not shipped",
    year: "2026",
    summary:
      "An AI video-planning app: idea in, script and scene plan out. I could not pay to ship it.",
    body: [
      "PromptReel AI is a Flutter client plus a Python FastAPI backend in one repo. The README describes turning a simple idea into titles, a script, scenes, prompts, and export files, with model fallbacks.",
      "I built it early in 2026 after a trading bot showed me that AI could stand up both a backend and a frontend. The reason it is not a product people can use is cost. I stopped rather than pretend it launched.",
    ],
    stack: ["Flutter", "FastAPI", "Python"],
    repo: "promptreel-ai",
  },
  {
    slug: "rise-up",
    title: "RiseUp",
    kind: "experiment",
    status: "Not shipped",
    year: "2026",
    summary:
      "A larger app that mixed social, AI, and an agent. No money to fund the startup, so it stayed in the repo.",
    body: [
      "The repository description says RiseUp is meant to help people earn, learn, and build wealth, under the name I was using then, chAs Tech Group. The README currently in the repo is a splash-screen and icon size note, not a launch announcement.",
      "I have said plainly that I could not ship it. It is here so the attempt is not erased, not so it can be sold as a live platform.",
    ],
    stack: ["Flutter", "Dart"],
    repo: "Rise-Up",
  },
  {
    slug: "chas-ai-creator",
    title: "chAs AI Creator",
    kind: "experiment",
    status: "Repo",
    year: "2026",
    summary: "An AI video-content automation project. The repo describes the intent, not a public launch.",
    body: [
      "The repository description calls it an AI-powered video content automation platform. It is Dart. I am not adding user counts or a live URL, because none is published on the repo.",
    ],
    stack: ["Flutter", "Dart"],
    repo: "chas-ai-creator",
  },
  {
    slug: "tradora",
    title: "TRADORA",
    kind: "experiment",
    status: "Deployed shell",
    year: "2026",
    summary:
      "A public TypeScript repo with a Vercel URL. The page title says Premium Social Marketplace. The README is still the Vite starter.",
    body: [
      "I looked for the trading bots in the public account. TRADORA is one of the names that sits in that neighborhood, and it is deployed at tradora-six.vercel.app. I will not describe strategies, win rates, or a finished marketplace, because the README does not.",
      "The bots I built for binary, forex, stocks, and crypto did not work out. If a bot is in a private repository, it is not listed on this site.",
    ],
    stack: ["TypeScript", "Vite"],
    repo: "TRADORA",
    links: [{ label: "Open the deploy", href: "https://tradora-six.vercel.app" }],
  },
  {
    slug: "rootrides-invest",
    title: "RootRides Invest",
    kind: "experiment",
    status: "Deployed shell",
    year: "2026",
    summary: "A TypeScript repo with a Vercel homepage. I am not claiming an investment product.",
    body: [
      "RootRides Invest is public and has a homepage at root-rides-invest.vercel.app. There is no product README I can quote. It is listed because it is a real repository, not because it made anyone money.",
    ],
    stack: ["TypeScript"],
    repo: "RootRides-Invest",
    links: [{ label: "Open the deploy", href: "https://root-rides-invest.vercel.app" }],
  },
  {
    slug: "nexalane",
    title: "Nexalane",
    kind: "game",
    status: "Repo",
    year: "2026",
    summary: "A Godot project. The repository description is “Game app”.",
    body: [
      "Nexalane is GDScript. That one-line description is all the repo states. I am not inventing levels, a store page, or a player count.",
    ],
    stack: ["Godot", "GDScript"],
    repo: "Nexalane",
  },
  {
    slug: "flowly",
    title: "Flowly",
    kind: "app",
    status: "Repo",
    year: "2026",
    summary: "A Dart repo with a privacy-policy companion. No feature list is published in a README I am using.",
    body: [
      "Flowly is public, and flowly-privacy exists beside it, which means I prepared store paperwork. I am not calling it a live Play app from this page.",
    ],
    stack: ["Flutter", "Dart"],
    repo: "Flowly",
    links: [{ label: "Privacy page repo", href: gh("flowly-privacy") }],
  },
  {
    slug: "zen-garden-jam",
    title: "Zen Garden Jam",
    kind: "game",
    status: "Repo",
    year: "2026",
    summary: "A Dart game repo. Gameplay is not documented in a README I reviewed.",
    body: ["Zen Garden Jam is a public Dart repository. Listed so the catalog matches GitHub, not so I can fake a design document."],
    stack: ["Flutter", "Dart"],
    repo: "Zen-garden-jam",
  },
  {
    slug: "neon-rush",
    title: "Neon Rush",
    kind: "game",
    status: "Repo",
    year: "2026",
    summary: "A Dart game repo without a published design doc on this site.",
    body: ["Neon Rush is public and written in Dart. That is the verifiable part."],
    stack: ["Flutter", "Dart"],
    repo: "Neon-rush",
  },
  {
    slug: "cluck-and-run",
    title: "Cluck and Run",
    kind: "game",
    status: "Repo",
    year: "2026",
    summary: "A Dart game repo. Name only, until a README says more.",
    body: ["Cluck and Run is a public Dart repository in the games stretch."],
    stack: ["Flutter", "Dart"],
    repo: "Cluck-and-run",
  },
  {
    slug: "veloza-drive",
    title: "Veloza Drive",
    kind: "game",
    status: "Repo",
    year: "2026",
    summary: "A Dart repo. I am not describing a driving model I have not documented.",
    body: ["Veloza Drive is public. Treat the title as the title, not as a spec."],
    stack: ["Flutter", "Dart"],
    repo: "Veloza-Drive",
  },
  {
    slug: "survive",
    title: "survive",
    kind: "game",
    status: "Repo",
    year: "2026",
    summary: "A small JavaScript repository. No extra claims.",
    body: ["survive is public JavaScript. It stays in the catalog because it is on the account."],
    stack: ["JavaScript"],
    repo: "survive",
  },
  {
    slug: "camixutra",
    title: "CamixUtra",
    kind: "app",
    status: "Repo",
    year: "2026",
    summary: "A Kotlin repository with no public description I will stretch.",
    body: ["CamixUtra is on the account, written in Kotlin. Feature claims would be fiction, so there are none."],
    stack: ["Kotlin"],
    repo: "CamixUtra",
  },
  {
    slug: "taskpulse",
    title: "TaskPulse",
    kind: "app",
    status: "Repo",
    year: "2026",
    summary: "A Kotlin repository. The name suggests tasks. The README does not, so I stop there.",
    body: ["TaskPulse is public Kotlin. I have not reviewed a product spec worth quoting."],
    stack: ["Kotlin"],
    repo: "TaskPulse",
  },
  {
    slug: "pocket-apk",
    title: "Pocket APK",
    kind: "app",
    status: "Repo",
    year: "2026",
    summary: "A Kotlin repository named Pocket-apk.",
    body: ["Pocket-apk is public. No store link and no feature list on this page."],
    stack: ["Kotlin"],
    repo: "Pocket-apk",
  },
  {
    slug: "chas-android",
    title: "chAs",
    kind: "app",
    status: "Repo",
    year: "2026",
    summary: "A Kotlin repository that uses the brand name. Not a second company.",
    body: ["The repo is named chAs and is Kotlin. It is separate from this website."],
    stack: ["Kotlin"],
    repo: "chAs",
  },
  {
    slug: "facebook-growth",
    title: "Facebook Growth",
    kind: "experiment",
    status: "Repo",
    year: "2026",
    summary: "A TypeScript repository. I am not claiming a growth system or results.",
    body: ["Facebook-Growth is public TypeScript. Without a README I trust, it stays a name in the catalog."],
    stack: ["TypeScript"],
    repo: "Facebook-Growth",
  },
  {
    slug: "github-pages",
    title: "GitHub Pages",
    kind: "paper",
    status: "Pages repo",
    year: "2026",
    summary: "The account's GitHub Pages repository.",
    body: [
      "exploreofficialzz-star.github.io is the Pages repo on the account. I am not presenting it as a finished second portfolio.",
    ],
    stack: ["HTML"],
    repo: "exploreofficialzz-star.github.io",
  },
];

export const FILTERS: { id: "all" | Kind; label: string }[] = [
  { id: "all", label: "All" },
  { id: "now", label: "Now" },
  { id: "app", label: "Apps" },
  { id: "game", label: "Games" },
  { id: "experiment", label: "Experiments" },
  { id: "paper", label: "Pages" },
];

export function getProject(slug: string) {
  return PROJECTS.find((project) => project.slug === slug);
}

export function repoHref(repo: string) {
  return gh(repo);
}

export const SKILLS = [
  {
    title: "Building with AI",
    copy: "The skill I will actually claim. I use AI to stand up backends, frontends, bots, and drafts, then I am the one who has to ship, pay, or stop.",
  },
  {
    title: "Mobile apps",
    copy: "Flutter and Dart for the games and utilities. Kotlin shows up in several repos. Godot and GDScript for Alpha Crush, Crystal Cascade, and Nexalane.",
  },
  {
    title: "The web",
    copy: "HTML and CSS from the years I was hawking and studying at night, then TypeScript for enV and a few later experiments. YouTube, Bro Code, and bootcamp exercises were the classroom.",
  },
  {
    title: "Repair and making",
    copy: "Torches, radios, sandals, chargers, panels. Primary school. It is still how I look at a product: open it, trace it, try to rebuild it.",
  },
  {
    title: "Music",
    copy: "Ogene, keyboard, church, songs I composed, and a music business I tried to run with free tools. The artist name was already chAs.",
  },
  {
    title: "Company craft, still learning",
    copy: "Names, trademarks, Play Console, store rejections, social posts, and the difference between an LLC in the bio and an LLC that pays anyone. I learned this by doing it wrong in public.",
  },
] as const;

export const VALUES = [
  "Creativity",
  "Integrity",
  "Innovation",
  "Discipline",
  "Excellence",
  "Continuous learning",
] as const;

export const TIMELINE = [
  {
    when: "11 April 2004",
    title: "Nwangwu",
    copy: "Born in Nwangwu, Okpanku Nkaleke, Ebonyi State. First of eight children — four boys, four girls. Dad is Simeon Ogbala. Mum is Alice Ogbala.",
  },
  {
    when: "Primary school",
    title: "Open it up",
    copy: "I repaired torches, radios, and broken sandals. I cracked open a dead charger, saw the board, and tried to build my own out of a biscuit carton and salvaged parts. It failed. I kept repairing.",
  },
  {
    when: "JSS",
    title: "A button phone and a keyboard",
    copy: "An Itel 2160. Facebook. Google until my dad threatened to take the phone. Computer class when a school finally had a lab. I paid someone to show me CorelDRAW and Photoshop. I learned ogene and keyboard, sang in church, and started writing songs.",
  },
  {
    when: "Before WAEC",
    title: "I left, then I came back",
    copy: "School fees were heavy from around JSS2. I dropped out, traveled, learned HTML and CSS, hawked, and kept music going with free mobile studios because I could not pay for a real one. I sat WAEC and NECO around age 20. YouTube, Bro Code, and bootcamps were the programming class.",
  },
  {
    when: "2024 – 2025",
    title: "Trading, then surveys",
    copy: "Music did not pay. I learned binary options, moved from demo to my own money, and lost it — including a day I smashed the phone and repaired it the next morning. I did that for about a year. Near the end of 2025, online surveys paid some hundreds of dollars. That money became food, exploration, and later a Play Console account.",
  },
  {
    when: "Early 2026",
    title: "AI pulled me back to code",
    copy: "Ads about AI trading bots sent me back to building. I made bots for binary, forex, stocks, and crypto. None of them worked. One of them had a real backend and frontend, which is how I saw I could build apps with AI. PromptReel AI and RiseUp came out of that. Both stalled on money.",
  },
  {
    when: "2026",
    title: "Ship what costs time",
    copy: "I switched to games and utilities I could finish without a server bill: Emoji Rain, Pivot Ball, FinReels, NexSkills Hub, Red Flag Names, and more. Play rejected me across submissions until FinReels went live. Alpha Crush and Crystal Cascade followed. The company tag on everything was chAs Technologies LLC, because I liked how it sounded.",
  },
  {
    when: "Now",
    title: "Rumuo and enV",
    copy: "The literacy app did not make millions. Survey accounts got banned. I renamed the bigger bet Rumuo and left chAs Technologies LLC as the personal brand. enV is the toolkit for people who, like me, do not have the machine the tutorials assume.",
  },
] as const;

export type Note = {
  slug: string;
  title: string;
  kicker: string;
  summary: string;
  paragraphs: string[];
};

export const NOTES: Note[] = [
  {
    slug: "what-amuses-me",
    title: "Do more of what amuses you",
    kicker: "Philosophy",
    summary: "Life is deep. I do not have a cleaner principle than that.",
    paragraphs: [
      "I am not a person with a polished origin story that was aimed at a startup from age ten. I am a person who gets amused by how a thing was made, then cannot leave it alone.",
      "The charger failed. The songs did not chart. The trades lost. The expensive AI apps did not ship. The amusement did not stop, and that is the only consistent line I can draw through the years.",
      "If you grew up without a lab, a GPU, or a parent who already understood the work, amusement is not a hobby. It is the fuel that survives a broke month.",
    ],
  },
  {
    slug: "the-charger",
    title: "The biscuit-carton charger",
    kicker: "Primary school",
    summary: "The first product I tried to manufacture did not leave the house. It still explains enV.",
    paragraphs: [
      "My dad's charger was already spoiled. I broke it open. Inside was a board, and on the board were parts I could not name, joined by something that behaved like wire. I decided I would make my own charger.",
      "Nobody at home was funding an experiment. I pulled good parts off dead chargers and carved a biscuit carton into a case. It did not work. I stopped trying to invent a charger and went back to repairing what people already owned.",
      "I still start there: trace the board, steal the working pieces, accept the failed case, repair the next thing. enV is that habit on a phone browser.",
    ],
  },
  {
    slug: "two-gigabytes",
    title: "Two gigabytes is the spec",
    kicker: "enV",
    summary: "I have not had the computer the tutorials are filmed on.",
    paragraphs: [
      "There has been no Nvidia box. The workflow is a phone, desktop view in the browser, and whatever free tier will answer. That is not a brand sentence. It is the constraint.",
      "enV exists so a setup that normally wants a terminal, a toolchain, and a quiet afternoon can be prepared for someone who has a small phone and a loud day. The repo is already a large toolkit. The promise I care about is the 2GB one, and I will not mark it done ahead of the device.",
      "Bringing technology home, for me, means Ebonyi and every place like it, not a slide that says emerging markets.",
    ],
  },
  {
    slug: "the-llc-tag",
    title: "The LLC was a tag before it was a company",
    kicker: "Honesty",
    summary: "I liked the way chAs Technologies LLC sounded. I am not going to rewrite that as a Delaware story.",
    paragraphs: [
      "chAs is a fabrication I am proud of. ch from Chidalu. A from Aloka, the person I was named after, which is why the A is capital. S from Silas.",
      "Technologies LLC was the umbrella I wanted every piece of software to sit under. It made the pages look like a software company. A designer found that name on Google. That part was real, and so was the month of posts, and so was the fact that no money came back.",
      "Rumuo is the company I am willing to grow. chAs Technologies LLC remains the personal brand on this site, on YouTube, and on the Play listing that already uses it.",
    ],
  },
  {
    slug: "ship-the-cheap-ones",
    title: "Ship the ones that only cost time",
    kicker: "2026",
    summary: "PromptReel and RiseUp needed money I did not have. The games and utilities did not.",
    paragraphs: [
      "After the big ideas stalled, I built several apps at once. Emoji Rain, Pivot Ball, FinReels, NexSkills Hub, Red Flag Names, and the Godot games. The bill was energy.",
      "Play Console came from survey money. Rejections came in a set. FinReels went live. I thought that was the turn toward millions. It was not. Alpha Crush and Crystal Cascade still got out, and Crystal Cascade is the one I have pushed further.",
      "I would rather show the rejected pile and the live package name than a dashboard of imaginary users.",
    ],
  },
];

export function getNote(slug: string) {
  return NOTES.find((note) => note.slug === slug);
}
