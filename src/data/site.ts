// Everything you'll want to edit often lives in src/data/ and src/content/.

export const site = {
  name: 'Siddhant Tiwary',
  // Where the contact page sends messages.
  email: 'siddhanttiwary25@gmail.com',
  description: 'A notebook, kept in public: ideas, work, creative projects, articles and music.',
  links: [
    { label: 'Twitter', href: 'https://x.com/kemosabesid' },
    { label: 'Contact', href: '/contact' },
    { label: 'GitHub', href: 'https://github.com/siddhanttiwary25-eng' },
  ],
  maskNote: 'The monkeys are cut out of hand-coloured plates in old natural-history books, 1774 to 1913.',
};

// The "Lately" sentence on the home page. Each { text, href } part becomes an underlined link.
export const lately: (string | { text: string; href: string })[] = [
  'Lately I’ve been thinking about information structures. I’ve just finished reading ',
  { text: 'East of Eden', href: '/articles#east-of-eden' },
  ', I keep wondering ',
  { text: 'why my first DJ set was a flop', href: '/ideas/why-my-first-dj-set-flopped' },
  ', and I’m trying to understand ',
  'what it truly means to build in the age of AI',
  '.',
];

// The six heads on the home page, left to right.
export const sections = [
  { label: 'Ideas', href: '/ideas', head: '/heads/golden-lion-tamarin.webp' },
  { label: 'Work', href: '/work', head: '/heads/orangutan.webp' },
  { label: 'Creative projects', href: '/creative', head: '/heads/red-bellied-guenon.webp' },
  { label: 'Articles', href: '/articles', head: '/heads/lion-tailed-macaque.webp' },
  { label: 'Songs & albums', href: '/music', head: '/heads/red-tailed-monkey.webp' },
  { label: 'About me', href: '/about', head: '/heads/common-marmoset.webp' },
];

// Heads are whole monkeys from old natural-history plates (see src/data/credits.ts).
export const h = (name: string) => `/heads/${name}.webp`;
