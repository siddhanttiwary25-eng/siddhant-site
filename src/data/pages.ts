// Content for the section pages. Anything in [brackets] is a placeholder for you to fill in.

// Work, newest first, written the way the resume is: company · place · dates, role title,
// one line on what the company does, then bullets. Smooth Closing and HeyTripp are recent projects, not on the resume yet.
export const work = [
  { meta: 'Smooth Closing · Austin, TX · September 2026 – present', title: 'Lead engine and underwriting tools', about: 'A cash home-buying company in Austin.',
    bullets: ['Building tools that find properties and underwrite them, so the team can make offers faster'] },
  { meta: 'TrustPixel · San Francisco, CA · June – August 2026', title: 'Product Management Intern, Agent Payments', about: 'An agentic commerce exchange that turns an authorized agent request into a completed purchase under buyer rules and supplier terms.',
    bullets: [
      'Defined the 4-layer agentic commerce stack (identity, mandate, policy, receipts) after a build-vs-buy review of 3 vendors',
      'Shipped a non-custodial agent wallet on Coinbase CDP, replacing one integration per supplier with a single payment API',
      'Built mandate and spend-limit controls into a 7-step payment flow, enforcing signed limits with revocation in under 1 second',
    ] },
  { meta: 'HeyTripp · June – August 2026', title: 'Two-leg payment architecture', about: 'A startup where an AI agent books your trip.',
    bullets: ['Designed how money moves when the AI books: traveller to platform, then platform to supplier, as two separate legs'] },
  { meta: 'Sunny Day Fund · Falls Church, VA · June – August 2025', title: 'Sales and Product Analyst', about: 'A fintech offering automated workplace emergency savings to companies like Amazon, Disney and DoorDash.',
    bullets: [
      'Executed investor due diligence across 40+ fintech VCs using PitchBook, securing 10+ investor meetings',
      'Developed credit risk models in Python, using SDF’s financial health metrics to price insurance premiums',
      'Analyzed regulation and compliance across 21 FHSA programs, mapping tax frameworks for expansion into 8 target states',
    ] },
  { meta: 'InkLink · San Francisco, CA · December 2024 – January 2025', title: 'Growth and Research Intern', about: 'An early-stage startup building ML-powered onboarding and KYC tools for secure, scalable verification.',
    bullets: [
      'Ran prototype-led customer acquisition across 5 universities, growing the student user base by 150%',
      'Built unit economics models for SaaS pricing, finding room to improve LTV/CAC from 2.8x to 4.1x',
      'Created customer lifetime value models in pandas across 4 features, identifying a 12% retention boost worth $150K a year',
    ] },
  { meta: 'ITC Limited · Bangalore · May – August 2024', title: 'Food and Beverage Finance Intern', about: 'A multi-billion-dollar Indian conglomerate working across FMCG, agribusiness and sustainability-focused products.',
    bullets: [
      'Analyzed the Chinese quick-service restaurant market and 50+ competitors in pandas, finding ways to grow revenue',
      'Built a delivery fleet financial model using Excel comps, identifying an 8% efficiency gap against benchmarks',
      'Ran operational due diligence on delivery metrics with SQL, proposing a 15% cost cut across 100+ routes',
    ] },
  { meta: 'McCombs Department of Finance · Austin, TX · December 2023 – June 2024', title: 'Research Assistant to Professor John Griffin', about: 'Research into financial fraud across healthcare (skilled nursing facilities), pig-butchering scams and cryptocurrency.',
    bullets: [
      'Analyzed 500+ reports on pig-butchering and crypto fraud, identifying patterns across international schemes',
      'Ran regression analysis to test hypotheses for faculty research on financial fraud',
      'Synthesized a literature review across 200+ academic sources to sharpen the fraud-detection methodology',
    ] },
];

export const creative = [
  { meta: 'App', title: 'Set', summary: 'Rewind any DJ set or concert, keep the moments that hit hardest, and share them.', preview: '/projects/set.webp' as string | null, href: 'https://set-app-blush.vercel.app' as string | null, credit: null as string | null },
  { meta: 'Community', title: 'Foghorn', summary: 'An invite-only place for people who care about music.', preview: '/projects/foghorn.webp', href: null, credit: null },
  { meta: 'Video series', title: 'Can I get an extension?', summary: 'A short interview series in which a UT Austin student sits down with professors to talk about the research they actually do, mixing genuine curiosity with the occasional unserious question.', preview: '/projects/extension.webp', href: null, credit: 'Photo: Guðsþegn, CC BY-SA 3.0, via Wikimedia Commons' },
  { meta: 'Research', title: 'Ground Truth', summary: 'A village-by-village record of what actually worked in rural India, with an API so anyone can build on the data.', preview: '/projects/ground-truth.webp', href: null, credit: 'Photo: Vraj Acharya / WELL Labs, CC BY-SA 4.0, via Wikimedia Commons' },
  { meta: 'Radio show · KVRX · September 2023 – May 2025', title: 'Jazz and philosophy on KVRX', summary: 'A jazz philosophy show on UT’s student radio station, reaching 10,000+ listeners a month, plus 40+ interviews with Austin artists.', preview: '/projects/kvrx.webp', href: null, credit: 'Photo: Ty Hardin for KVRX 91.7 FM, CC BY 3.0, via Wikimedia Commons' },
];

// Articles page, part one: pieces I've written. `id` is the anchor the home page links to.
export const myArticles = [
  { id: 'information-structures', source: 'Essay', meta: '[Where it’s published] · 2026', title: 'Information structures', why: '[One line on what the piece argues.]', href: '#' },
];

// Articles page, part two: things I've read recently.
export const readArticles = [
  { id: 'east-of-eden', source: 'Book', meta: 'John Steinbeck · 1952', title: 'East of Eden', why: 'More saga than novel. It explores the banality of evil, the pull of good, and how much our nature really decides.', href: '#' },
  { id: '', source: 'Essay', meta: 'Kathleen Marie Higgins · 2013', title: 'Love and Death', why: 'Grief isn’t meant to end on schedule. Love shapes who we are, so carrying the dead with us is love continuing, not a failure to move on.', href: 'https://academic.oup.com/book/8931' },
  { id: '', source: 'Substack', meta: 'Polymath Investor · 2026', title: 'How I’d Learn Investing Using AI', why: 'School hands you the answers before you’ve felt the questions. AI flips that back: Socrates on demand, and a stock on the table.', href: 'https://www.polymathinvestor.com/p/how-id-learn-investing-using-ai' },
  { id: '', source: 'Paper', meta: 'Satoshi Nakamoto · 2008', title: 'Bitcoin: A Peer-to-Peer Electronic Cash System', why: 'Nine pages that made a ledger nobody owns.', href: 'https://bitcoin.org/bitcoin.pdf' },
];

// Albums: cover in public/covers/, `liked` = the songs from it I keep coming back to.
export const albums = [
  { meta: 'Floating Points · 2017', title: 'Reflections: Mojave Desert', cover: '/covers/reflections-mojave-desert.webp',
    liked: ['Silurian Blue', 'Kelso Dunes', 'Reflections – Mojave Desert Continuous Mix'],
    href: 'https://open.spotify.com/search/Reflections%20Mojave%20Desert%20Floating%20Points/albums' },
  { meta: 'Jamie xx · 2015', title: 'In Colour', cover: '/covers/in-colour.webp',
    liked: ['Sleep Sound', 'SeeSaw', 'Obvs', 'Loud Places', 'Girl'],
    href: 'https://open.spotify.com/search/In%20Colour%20Jamie%20xx/albums' },
];

// Playlists: my own playlists. `cover` null shows a "Cover to come" plate frame.
export const playlists = [
  { meta: 'Spotify · 20 songs', title: 'special electronic', words: 'Electronic millennial optimism.', cover: '/covers/special-electronic.webp', href: 'https://open.spotify.com/playlist/4cWuZRE6iO4WpoIdIVn7Ui' },
];

// Songs I can't get out of my head. `cover` = the album's cover, as a small thumbnail.
export const songs = [
  { title: 'Mouthful of Diamonds — Phantogram', words: 'From Eyelid Movies, 2009', cover: '/covers/eyelid-movies.webp', href: 'https://open.spotify.com/search/Mouthful%20of%20Diamonds%20Phantogram' },
  { title: 'obedear — Purity Ring', words: 'From Shrines, 2012', cover: '/covers/shrines.webp', href: 'https://open.spotify.com/search/obedear%20Purity%20Ring' },
];
