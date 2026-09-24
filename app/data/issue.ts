/**
 * All copy and project data for "The Build Issue".
 * Components render from this module; templates only hold structure.
 *
 * Images: drop files in `public/images/projects/` (or `public/images/` for the
 * portrait) and set `src` to the public path, e.g. '/images/projects/edsheeran_1.png'.
 * While `src` is null the figure renders a tone placeholder with its `label`.
 */

export interface Segment { text: string, em?: boolean }

export type Tone = 1 | 2 | 3 | 4 | 5 | 6
export type Reveal = 'clip-up' | 'clip-center' | 'none'

export interface FigureData {
  src: string | null
  alt: string
  label: string
  height: number
  tone?: Tone
  reveal?: Reveal
  float?: boolean
  radius?: number
  caption?: string
  captionArrow?: boolean
}

export type ProjectId = 'p1' | 'p2' | 'p3' | 'p4' | 'p5'
export type ProjectLayout = 'split-left' | 'centered' | 'stat' | 'split-right' | 'gallery'

export interface Project {
  id: ProjectId
  number: string // '01'
  layout: ProjectLayout
  title: Segment[] // e.g. [{text:'Ed'},{text:'Sheeran',em:true}]
  contentsTitle: Segment[] // title as shown in the Contents list
  category: string // 'Interactive campaign'
  client?: string // 'For Trimbos'
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
    'Portfolio of Pim Willems: nearly a decade of building web products — Ed Sheeran, Martin Garrix, Ricoh, Trimbos, RTL — now lecturer at Fontys ICT.',
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
      text: [{ text: 'Maps, music & ' }, { text: 'a charity story', em: true }],
    },
  ] as CoverLineData[],
  portrait: {
    src: null,
    alt: 'Portrait of Pim Willems',
    label: 'Portrait — [add photo]',
    height: 780,
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
  count: 'Five features',
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
        src: '/images/projects/edsheeran_1.png',
        alt: 'Ed Sheeran butterfly hunt — the greenhouse screen with butterflies, a locked flower and a countdown timer',
        label: 'edsheeran_1.png',
        height: 900,
        tone: 1,
        reveal: 'clip-up',
        caption: 'The greenhouse',
        captionArrow: true,
      },
      {
        src: '/images/projects/edsheeran_2.png',
        alt: 'Ed Sheeran butterfly hunt — a fan\'s collection of 12 of 14 butterflies',
        label: 'edsheeran_2.png',
        height: 400,
        tone: 6,
        reveal: 'clip-center',
        float: true,
        caption: 'Collecting',
      },
      {
        src: '/images/projects/edsheeran_3.png',
        alt: 'Ed Sheeran butterfly hunt — entering a colour code to add a new flower to the greenhouse',
        label: 'edsheeran_3.png',
        height: 260,
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
        src: '/images/projects/artistdreamteam1.jpg',
        alt: 'Martin Garrix Artist Dream Team — building a roster on a football pitch',
        label: 'artistdreamteam1.jpg',
        height: 600,
        tone: 2,
        reveal: 'clip-center',
        caption: 'Build your roster',
        captionArrow: true,
      },
      {
        src: '/images/projects/artistdreamteam_iphone11pro_1.jpg',
        alt: 'Martin Garrix Artist Dream Team on two iPhones — the intro and the team pitch',
        label: 'artistdreamteam_iphone11pro_1.jpg',
        height: 560,
        tone: 6,
        reveal: 'clip-up',
        radius: 40,
        caption: 'On mobile',
      },
      {
        src: '/images/projects/artistdreamteam2.jpg',
        alt: 'Martin Garrix Artist Dream Team — landing page with artist cards and Connect with Spotify',
        label: 'artistdreamteam2.jpg',
        height: 240,
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
        src: '/images/projects/ricoh_desktop2.png',
        alt: 'Ricoh franchise platform — the Ricoh Document Center Nijmegen homepage on desktop',
        label: 'ricoh_desktop2.png',
        height: 700,
        tone: 1,
        reveal: 'clip-center',
        caption: 'Franchise homepage',
        captionArrow: true,
      },
      {
        src: '/images/projects/ricoh_desktop1.png',
        alt: 'Ricoh franchise platform — a printer product page managed by the franchise',
        label: 'ricoh_desktop1.png',
        height: 460,
        tone: 5,
        reveal: 'clip-up',
        float: true,
        caption: 'Content, per franchise',
      },
      {
        src: '/images/projects/ricoh_desktop3.png',
        alt: 'Ricoh franchise platform — a custom form to find the right printer',
        label: 'ricoh_desktop3.png',
        height: 220,
        tone: 3,
        reveal: 'clip-up',
        caption: 'Forms & shop',
      },
    ],
  },
  {
    id: 'p4',
    number: '04',
    layout: 'split-right',
    title: [{ text: 'IkStopNu', em: true }],
    contentsTitle: [{ text: 'IkStopNu', em: true }, { text: ' for Trimbos' }],
    category: 'Public health tool',
    client: 'For Trimbos',
    dek: 'Help, just around the corner.',
    body:
      'A custom Google Maps integration that lets visitors find verified local coaching near them — built to be accessible to everyone who needs it.',
    tech: ['WordPress', 'Google Maps API', 'Accessibility'],
    figures: [
      {
        src: '/images/projects/ikstopnu_desktop_1.png',
        alt: 'IkStopNu for Trimbos — map of verified quit-smoking coaches across the Netherlands',
        label: 'ikstopnu_desktop_1.png',
        height: 760,
        tone: 2,
        reveal: 'clip-up',
        caption: 'Find a coach nearby',
        captionArrow: true,
      },
      {
        src: '/images/projects/ikstopnu_iphone11pro.png',
        alt: 'IkStopNu coach finder on two iPhones — the map and a coach\'s contact details',
        label: 'ikstopnu_iphone11pro.png',
        height: 400,
        tone: 6,
        reveal: 'clip-up',
        float: true,
        radius: 34,
        caption: 'Mobile',
      },
      {
        src: '/images/projects/ikstopnu_desktop_2.png',
        alt: 'IkStopNu — list of coaching results near Delft next to the map',
        label: 'ikstopnu_desktop_2.png',
        height: 300,
        tone: 1,
        reveal: 'clip-center',
        caption: 'Results',
      },
    ],
  },
  {
    id: 'p5',
    number: '05',
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
        src: '/images/projects/glimlach-1.png',
        alt: 'RTL Project Glimlach — the opening of a story about a neonatologist',
        label: 'glimlach-1.png',
        height: 380,
        tone: 3,
        reveal: 'clip-up',
        caption: 'The story opens',
      },
      {
        src: '/images/projects/glimlach-3.png',
        alt: 'RTL Project Glimlach — story blocks with portraits and more videos from the campaign',
        label: 'glimlach-3.png',
        height: 820,
        tone: 2,
        reveal: 'clip-center',
        caption: 'Block by block',
        captionArrow: true,
      },
      {
        src: '/images/projects/glimlach-2.png',
        alt: 'RTL Project Glimlach — campaign homepage with a donation call to action',
        label: 'glimlach-2.png',
        height: 280,
        tone: 5,
        reveal: 'clip-up',
        float: true,
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
