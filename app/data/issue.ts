/**
 * All copy and project data for "The Build Issue".
 * Components render from this module; templates only hold structure.
 *
 * Images: drop files in `public/images/projects/` (or `public/images/` for the
 * portrait) and set `src` to the public path, e.g. '/images/projects/edsheeran_1.jpg'.
 * While `src` is null the figure renders a tone placeholder with its `label`.
 */

export interface Segment { text: string, em?: boolean }

export type Tone = 1 | 2 | 3 | 4 | 5 | 6
export type Reveal = 'clip-up' | 'clip-center' | 'none'

export interface FigureData {
  src: string | null
  alt: string
  label: string
  /** Natural pixel size of the image; the frame keeps this aspect ratio. */
  width: number
  height: number
  tone?: Tone
  reveal?: Reveal
  float?: boolean
  radius?: number
  caption?: string
  captionArrow?: boolean
  /** Always show in colour instead of grayscale-until-hover. */
  colour?: boolean
}

export type ProjectId = 'p1' | 'p2' | 'p3' | 'p4' | 'p5' | 'p6' | 'p7'
export type ProjectLayout = 'split-left' | 'centered' | 'stat' | 'split-right' | 'gallery' | 'mosaic'

export interface Project {
  id: ProjectId
  number: string // '01'
  layout: ProjectLayout
  title: Segment[] // e.g. [{text:'Ed'},{text:'Sheeran',em:true}]
  contentsTitle: Segment[] // title as shown in the Contents list
  category: string // 'Interactive campaign'
  client?: string // 'For Kleertjes.com'
  dek?: string
  body: string
  tech: string[]
  stat?: { value: string, label: string[] } // Ricoh
  figures: FigureData[] // order = order in layout
}

export interface NavLink { label: string, href: string }

export interface CoverLineData {
  kicker: string
  text: Segment[]
}

export const LINKEDIN_URL = 'https://www.linkedin.com/in/pimwillems-frontend-developer/'
export const SITE_URL = 'https://pimwillems.dev'

export const meta = {
  title: 'Pim Willems — Front-end & Full-stack Developer',
  description:
    'Portfolio of Pim Willems. I built web products for almost ten years: Ed Sheeran, Martin Garrix, Ricoh, Trimbos, RTL, The Voice Kids. Now I teach at Fontys ICT.',
  ogImage: '/og-image.jpg',
  ogImageAlt: 'PIM WILLEMS set in Bodoni on a white page',
  person: {
    name: 'Pim Willems',
    url: SITE_URL,
    jobTitle: 'Lecturer & developer',
    sameAs: [LINKEDIN_URL],
  },
}

export const masthead = {
  name: 'PIM WILLEMS',
  issue: 'The Build Issue — No. 01',
  skipLink: 'Skip to work',
  themeToggle: 'Dark mode',
}

export const cover = {
  linesLeft: [
    {
      kicker: 'Feature',
      text: [{ text: 'Butterflies in the greenhouse ' }, { text: 'with Ed Sheeran', em: true }],
    },
    {
      kicker: 'Portfolio',
      text: [{ text: 'Eleven franchises, ' }, { text: 'one theme', em: true }],
    },
  ] as CoverLineData[],
  linesRight: [
    {
      kicker: 'In conversation',
      text: [
        { text: 'From', em: true },
        { text: ' shipping products ' },
        { text: 'to', em: true },
        { text: ' teaching them' },
      ],
    },
    {
      kicker: 'Plus',
      text: [{ text: 'Beer, music & ' }, { text: 'a charity story', em: true }],
    },
  ] as CoverLineData[],
  // Two small portraits, staggered between the cover lines.
  portraits: [
    {
      src: '/images/portrait.jpg',
      alt: 'Portrait of Pim Willems',
      width: 1675,
      height: 1675,
      tone: 2,
      reveal: 'none',
      colour: true,
    },
    {
      src: '/images/portrait-2.jpg',
      alt: 'Pim Willems in sunglasses outside a coffee shop in Amsterdam',
      width: 1500,
      height: 2000,
      tone: 3,
      reveal: 'none',
    },
  ] as FigureData[],
  tagline: 'Hello, I still build things.',
  cta: { label: 'Enter the issue', href: '#work' } as NavLink,
}

export const letter = {
  kicker: 'Editor\'s letter',
  headline: [
    { text: 'Nearly a decade of building for the web. ' },
    { text: 'Then a turn', em: true },
    { text: ' into public education. ' },
    { text: 'And still,', em: true },
    { text: ' building.' },
  ] as Segment[],
  body:
    'For years I built web products: campaigns for global artists, platforms for franchise networks, sites that help people find support nearby. Now I teach front-end and full-stack development at Fontys ICT in Tilburg, and I coordinate too. Here is a selection of my work.',
  signoff: '— Pim Willems',
}

export const contents = {
  heading: 'Contents',
  count: 'Seven features',
}

export const projects: Project[] = [
  {
    id: 'p1',
    number: '01',
    layout: 'split-left',
    title: [{ text: 'Ed' }, { text: 'Sheeran', em: true }],
    contentsTitle: [{ text: 'Ed Sheeran' }],
    category: 'Interactive campaign',
    dek: 'Butterflies in the greenhouse.',
    body:
      'A butterfly hunt in the browser. Fans traded greenhouse codes with each other to collect exclusive items. You could not finish it alone. The community had to play together.',
    tech: ['Vue.js', 'State management', 'Authentication'],
    figures: [
      {
        src: '/images/projects/edsheeran_1.jpg',
        alt: 'Ed Sheeran butterfly hunt — the greenhouse screen with butterflies, a locked flower and a countdown timer',
        label: 'edsheeran_1.jpg',
        width: 750,
        height: 1334,
        tone: 1,
        reveal: 'clip-up',
        caption: 'The greenhouse',
        captionArrow: true,
      },
      {
        src: '/images/projects/edsheeran_2.jpg',
        alt: 'Ed Sheeran butterfly hunt — a fan\'s collection of 12 of 14 butterflies',
        label: 'edsheeran_2.jpg',
        width: 750,
        height: 1334,
        tone: 6,
        reveal: 'clip-center',
        float: true,
        caption: 'Collecting',
      },
      {
        src: '/images/projects/edsheeran_3.jpg',
        alt: 'Ed Sheeran butterfly hunt — entering a colour code to add a new flower to the greenhouse',
        label: 'edsheeran_3.jpg',
        width: 750,
        height: 1334,
        tone: 3,
        reveal: 'clip-up',
        caption: 'Trading codes',
      },
    ],
  },
  {
    id: 'p2',
    number: '02',
    layout: 'centered',
    title: [{ text: 'Martin', em: true }, { text: ' Garrix' }],
    contentsTitle: [{ text: 'Martin Garrix', em: true }],
    category: 'EURO2020 experience',
    dek: 'Pick your dream team.',
    body:
      'A EURO2020 game where fans built their own artist roster and share it via social media. Working with the Spotify API, the most played artists for every user were loaded first.',
    tech: ['Vue.js', 'Spotify API', 'Localization'],
    figures: [
      {
        src: '/images/projects/artistdreamteam_1.jpg',
        alt: 'Martin Garrix Artist Dream Team — building a roster on a football pitch',
        label: 'artistdreamteam_1.jpg',
        width: 1237,
        height: 740,
        tone: 2,
        reveal: 'clip-center',
        caption: 'Build your roster',
        captionArrow: true,
      },
      {
        src: '/images/projects/artistdreamteam_iphone11pro.jpg',
        alt: 'Martin Garrix Artist Dream Team on an iPhone — building a team on the pitch',
        label: 'artistdreamteam_iphone11pro.jpg',
        width: 560,
        height: 900,
        tone: 6,
        reveal: 'clip-up',
        radius: 40,
        caption: 'On mobile',
      },
      {
        src: '/images/projects/artistdreamteam_2.jpg',
        alt: 'Martin Garrix Artist Dream Team — landing page with artist cards and Connect with Spotify',
        label: 'artistdreamteam_2.jpg',
        width: 1237,
        height: 740,
        tone: 4,
        reveal: 'clip-up',
        float: true,
      },
    ],
  },
  {
    id: 'p3',
    number: '03',
    layout: 'stat',
    title: [{ text: 'Ricoh' }],
    contentsTitle: [{ text: 'Ricoh' }],
    category: 'Franchise platform',
    body:
      'One WordPress theme for 11 franchisers. With ACF, every franchise manages its own content, and they all share the same foundation.',
    tech: ['Custom WordPress', 'Custom forms', 'WooCommerce', 'ACF'],
    stat: { value: '11', label: ['franchisers.', 'One theme.'] },
    figures: [
      {
        src: '/images/projects/ricoh_desktop_2.jpg',
        alt: 'Ricoh franchise platform — the Ricoh Document Center Nijmegen homepage on desktop',
        label: 'ricoh_desktop_2.jpg',
        width: 1237,
        height: 740,
        tone: 1,
        reveal: 'clip-center',
        caption: 'Franchise homepage',
        captionArrow: true,
      },
      {
        src: '/images/projects/ricoh_desktop_1.jpg',
        alt: 'Ricoh franchise platform — a printer product page managed by the franchise',
        label: 'ricoh_desktop_1.jpg',
        width: 1237,
        height: 740,
        tone: 5,
        reveal: 'clip-up',
        float: true,
        caption: 'Content, per franchise',
      },
      {
        src: '/images/projects/ricoh_desktop_3.jpg',
        alt: 'Ricoh franchise platform — a custom form to find the right printer',
        label: 'ricoh_desktop_3.jpg',
        width: 1237,
        height: 740,
        tone: 3,
        reveal: 'clip-up',
        caption: 'Forms & shop',
      },
    ],
  },
  {
    id: 'p4',
    number: '04',
    layout: 'gallery',
    title: [{ text: 'RTL ' }, { text: 'Project Glimlach', em: true }],
    contentsTitle: [{ text: 'RTL ' }, { text: 'Project Glimlach', em: true }],
    category: 'Charity campaign',
    dek: 'Stories, block by block.',
    body:
      'A campaign site with drag-and-drop story blocks. Producers built the charity stories themselves, without a developer. The site is static, so it loads fast.',
    tech: ['Nuxt', 'Storyblok CMS', 'Static hosting'],
    figures: [
      {
        src: '/images/projects/glimlach_1.jpg',
        alt: 'RTL Project Glimlach — the opening of a story about a neonatologist',
        label: 'glimlach_1.jpg',
        width: 1296,
        height: 752,
        tone: 3,
        reveal: 'clip-up',
        caption: 'The story opens',
      },
      {
        src: '/images/projects/glimlach_3.jpg',
        alt: 'RTL Project Glimlach — story blocks with portraits and more videos from the campaign',
        label: 'glimlach_3.jpg',
        width: 1296,
        height: 752,
        tone: 2,
        reveal: 'clip-center',
        caption: 'Block by block',
        captionArrow: true,
      },
      {
        src: '/images/projects/glimlach_2.jpg',
        alt: 'RTL Project Glimlach — campaign homepage with a donation call to action',
        label: 'glimlach_2.jpg',
        width: 1296,
        height: 752,
        tone: 5,
        reveal: 'clip-up',
        float: true,
      },
    ],
  },
  /*
   * 05–07: placeholder copy and tech lines, written from the screenshots.
   * Pim may change them.
   */
  {
    id: 'p5',
    number: '05',
    layout: 'split-right',
    title: [{ text: '\'t ' }, { text: 'Taphuys', em: true }],
    contentsTitle: [{ text: '\'t ' }, { text: 'Taphuys', em: true }],
    category: 'Hospitality website',
    dek: 'Pick a bar, then a beer.',
    body:
      'A website for a beer bar and kitchen with several locations. You pick your venue first. Then you browse the tap list, where every beer has its own style, strength and tasting notes. There is a comfort food menu for lunch, drinks and dinner.',
    tech: ['Multiple locations', 'Beer catalogue', 'Responsive'],
    figures: [
      {
        src: '/images/projects/taphuys_desktop_1.jpg',
        alt: '\'t Taphuys — homepage with the neon-lit bar and a panel to choose a location',
        label: 'taphuys_desktop_1.jpg',
        width: 1237,
        height: 740,
        tone: 5,
        reveal: 'clip-up',
        caption: 'Choose your venue',
        captionArrow: true,
      },
      {
        src: '/images/projects/taphuys_iphone11pro.jpg',
        alt: '\'t Taphuys on an iPhone — the beer page for La Trappe Isid\'or, with its ABV, IBU and taste profile',
        label: 'taphuys_iphone11pro.jpg',
        width: 560,
        height: 900,
        tone: 6,
        reveal: 'clip-center',
        float: true,
        caption: 'On tap',
      },
      {
        src: '/images/projects/taphuys_desktop_3.jpg',
        alt: '\'t Taphuys — the kitchen page: comfort food with a twist for lunch, drinks and dinner',
        label: 'taphuys_desktop_3.jpg',
        width: 1237,
        height: 740,
        tone: 3,
        reveal: 'clip-up',
        caption: 'The kitchen',
      },
    ],
  },
  {
    id: 'p6',
    number: '06',
    layout: 'centered',
    title: [{ text: 'Trimbos', em: true }, { text: ' Instituut' }],
    contentsTitle: [{ text: 'Trimbos', em: true }, { text: ' Instituut' }],
    category: 'Knowledge platform',
    dek: 'Research, easy to find.',
    body:
      'The website of the Trimbos Institute, the Dutch knowledge institute for mental health, alcohol, tobacco and drugs. Research and dossiers are grouped by theme and target group. Filters help professionals and the public find what they need.',
    tech: ['Search & filters', 'Accessibility', 'Responsive'],
    figures: [
      {
        src: '/images/projects/trimbos_desktop_1.jpg',
        alt: 'Trimbos Institute — homepage with the institute\'s themes: alcohol, tobacco, drugs, mental health and participation',
        label: 'trimbos_desktop_1.jpg',
        width: 1237,
        height: 740,
        tone: 2,
        reveal: 'clip-center',
        caption: 'Themes',
        captionArrow: true,
      },
      {
        src: '/images/projects/trimbos_iphone11pro.jpg',
        alt: 'Trimbos Institute on an iPhone — the dossier overview with a search field',
        label: 'trimbos_iphone11pro.jpg',
        width: 560,
        height: 900,
        tone: 6,
        reveal: 'clip-up',
        radius: 40,
        caption: 'On mobile',
      },
      {
        src: '/images/projects/trimbos_desktop_2.jpg',
        alt: 'Trimbos Institute — dossiers filtered by theme and target group',
        label: 'trimbos_desktop_2.jpg',
        width: 1237,
        height: 740,
        tone: 4,
        reveal: 'clip-up',
        float: true,
      },
    ],
  },
  {
    id: 'p7',
    number: '07',
    layout: 'mosaic',
    title: [{ text: 'The Voice' }, { text: ' Kids', em: true }],
    contentsTitle: [{ text: 'The Voice Kids', em: true }, { text: ' for Kleertjes.com' }],
    category: 'Campaign page',
    client: 'For Kleertjes.com',
    dek: 'Choose your style, take the stage.',
    body:
      'kleertjes.com was the main sponsor of The Voice Kids and dressed every talent, from the Battles to the Finals. On this campaign page, young fans could win € 1,000 to spend on clothes.',
    tech: ['Campaign page', 'Responsive'],
    figures: [
      {
        src: '/images/projects/tvk_kleertjes_desktop.jpg',
        alt: 'The Voice Kids × kleertjes.com — campaign page to win € 1,000 in clothing vouchers',
        label: 'tvk_kleertjes_desktop.jpg',
        width: 1325,
        height: 788,
        tone: 5,
        reveal: 'clip-up',
        caption: 'Win € 1,000',
        captionArrow: true,
      },
      {
        src: '/images/projects/tvk_kleertjes_iphone11pro.jpg',
        alt: 'The Voice Kids × kleertjes.com campaign on an iPhone — the talents in their outfits and the sponsor announcement',
        label: 'tvk_kleertjes_iphone11pro.jpg',
        width: 560,
        height: 900,
        tone: 6,
        reveal: 'clip-up',
        float: true,
        radius: 34,
        caption: 'Mobile',
      },
      {
        src: '/images/projects/tvk_kleertjes_detail.jpg',
        alt: 'Four kids posing with drawn-in instruments under the line \'Choose your style, take the stage!\'',
        label: 'tvk_kleertjes_detail.jpg',
        width: 465,
        height: 465,
        tone: 1,
        reveal: 'clip-center',
        caption: 'The looks',
      },
    ],
  },
]

/** Placeholder copy — Pim may change it. */
export const interlude = {
  kicker: 'Interlude',
  quote: [{ text: '“I teach it now. ' }, { text: 'I still ship it.', em: true }, { text: '”' }] as Segment[],
}

export const stack = {
  kicker: 'The wardrobe',
  items: [
    { text: 'Vue' },
    { text: 'Nuxt', em: true },
    { text: 'Next' },
    { text: 'WordPress', em: true },
    { text: 'Go' },
    { text: 'PHP', em: true },
    { text: 'Storyblok' },
  ] as Segment[],
}

export const contact = {
  href: LINKEDIN_URL,
  button: 'LinkedIn',
  copyright: '© 2026 Pim Willems',
  backToTop: { label: 'Back to cover', href: '#top' } as NavLink,
  domain: 'pimwillems.dev',
}
