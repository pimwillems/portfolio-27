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
    'Portfolio of Pim Willems: nearly a decade of building web products — Ed Sheeran, Martin Garrix, Ricoh, Trimbos, RTL, The Voice Kids — now lecturer at Fontys ICT.',
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
  portrait: {
    src: '/images/portrait.jpg',
    alt: 'Portrait of Pim Willems',
    width: 1675,
    height: 1675,
    tone: 2,
    reveal: 'none',
  } as FigureData,
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
    'I spent years making web products — campaigns for global artists, platforms for franchise networks, tools that help people find support nearby. Today I\'m a lecturer and coordinator at Fontys ICT in Tilburg, teaching front-end and full-stack development. What follows is a selection.',
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
      'An interactive, browser-based butterfly hunt. Fans traded greenhouse codes with one another to collect exclusive items — a game that only worked when the community played it together.',
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
      'A EURO2020 experience where fans built their own artist roster, with Spotify audio previews playing as they picked each player.',
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
      'A customisable WordPress theme serving 11 franchisers. ACF-powered content management lets every franchise run its own site on one shared foundation.',
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
      'A campaign site with drag-and-drop storytelling blocks, so producers could build charity stories themselves. Statically hosted, and fast.',
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
      'A website for a beer bar and kitchen with several locations. Visitors choose their venue first, then browse the tap list — every beer with its own style, strength and tasting notes — and a menu of comfort food for lunch, drinks and dinner.',
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
      'The website of the Trimbos Institute, the Dutch knowledge institute for mental health, alcohol, tobacco and drugs. Research and dossiers are grouped by theme and target group, with filters that help professionals and the public find what they need.',
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
      'kleertjes.com became the main sponsor of The Voice Kids, dressing every talent through the Battles, Sing-Offs and Finals. This campaign page let young fans win € 1,000 to spend on clothes.',
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
    { text: 'Vue.js' },
    { text: 'Nuxt', em: true },
    { text: 'WordPress' },
    { text: 'PHP', em: true },
    { text: 'Storyblok' },
    { text: 'WooCommerce', em: true },
    { text: 'ACF' },
    { text: 'Google Maps', em: true },
    { text: 'Spotify API' },
  ] as Segment[],
}

export const contact = {
  kicker: 'Correspondence',
  headline: [{ text: 'Let\'s ' }, { text: 'talk.', em: true }] as Segment[],
  href: LINKEDIN_URL,
  button: 'LinkedIn',
  copyright: '© 2026 Pim Willems',
  backToTop: { label: 'Back to cover', href: '#top' } as NavLink,
  domain: 'pimwillems.dev',
}
