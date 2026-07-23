// Canonical page content for the product and area pages, and their .md
// mirrors. All copy is verbatim from valo.io (see llms.txt / *.md there) or
// from the product data already used on the landing page — do not invent
// new brand claims here.
//
// NOTE: public/js/valo-data.js holds the runtime copy of this data (the
// platform/products page scripts need it in the browser). If product copy
// changes, update both places.

export const CONTACT = 'hello@valo.io';

export const PRODUCTS = [
  {
    id: 'core',
    name: 'Valo Core',
    short: 'Core',
    tagline: 'Administration, identity & governance',
    accent: '#029491',
    accentText: '#07746F', // text-safe on white
    tint: '#ECFBF3',
    status: 'In production',
    desc: 'Your platform, under your own brand. Core keeps verified identity for every participant and provider, your organisation structure, and the governance that holds it together. It is the one trusted profile every other Valo product is built on.',
    feats: ['Bring your own brand (white-label)', 'Verified identity & onboarding', 'Participant & provider records', 'Roles, permissions & governance'],
    icon: 'building',
  },
  {
    id: 'pay',
    name: 'Valo Pay',
    short: 'Pay',
    tagline: 'Fund management & the financial backbone',
    accent: '#E0484A',
    accentText: '#B9383B',
    tint: '#FCEDED',
    status: 'In production',
    desc: 'When you hold money for other people, every cent has to be right. Pay runs funding, budgets, payments, billing and compliance on a real-time ledger, with verified bank details and fraud checks built in, so each payment can be traced to a person and the outcome it paid for.',
    feats: ['Verified bank account details', 'Fraud detection & controls', 'Double-entry ledger', 'Budgets, payments & billing'],
    icon: 'card',
  },
  {
    id: 'unify',
    name: 'Valo Unify',
    short: 'Unify',
    tagline: 'Data integration, analytics & insight',
    accent: '#4571E0',
    accentText: '#3A5FC8',
    tint: 'rgba(69,113,224,.07)',
    status: 'In production',
    desc: 'Moving data between organisations is usually slow and painful. Unify connects systems in minutes, with no APIs, manual extracts or custom code. It exchanges sensitive data safely, tidies it on the way, and turns it into live analytics and insight you can actually use.',
    feats: ['Secure cross-agency data exchange', 'No APIs, extracts or custom code', 'Advanced analytics & modelling', 'Data sovereignty & governance'],
    icon: 'share',
  },
];

// The shared platform paragraph from the landing page (verbatim).
export const PLATFORM_NOTE = 'Every product shares the same identity, records and data, so funding, delivery and outcomes stay joined up. Start with what you need today and turn the rest on as you grow. There is nothing to re-build and no data to migrate.';

// All seven products (minimal: for the home-page teaser icon row).
export const ALL_PRODUCTS = [
  { id: 'core', short: 'Core', icon: 'building', accent: '#029491', live: true },
  { id: 'pay', short: 'Pay', icon: 'card', accent: '#E0484A', live: true },
  { id: 'unify', short: 'Unify', icon: 'share', accent: '#4571E0', live: true },
  { id: 'care', short: 'Care', icon: 'users', accent: '#8A5CF0', live: false },
  { id: 'health', short: 'Health', icon: 'activity', accent: '#1C8FD1', live: false },
  { id: 'marketplace', short: 'Marketplace', icon: 'store', accent: '#C8741C', live: false },
  { id: 'engage', short: 'Engage', icon: 'message', accent: '#D8519E', live: false },
];

// SVG icon paths shared by the .astro pages (same set as public/js/valo-data.js).
export const ICON_PATHS = {
  building: '<rect x="4" y="2" width="16" height="20" rx="2"/><path d="M9 22v-4h6v4"/><path d="M8 6h.01M12 6h.01M16 6h.01M8 10h.01M12 10h.01M16 10h.01M8 14h.01M12 14h.01M16 14h.01"/>',
  card: '<rect x="2" y="5" width="20" height="14" rx="2"/><line x1="2" y1="10" x2="22" y2="10"/>',
  share: '<circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/>',
  users: '<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>',
  activity: '<path d="M22 12h-4l-3 9L9 3l-3 9H2"/>',
  store: '<path d="M2 7h20l-2 4a3 3 0 0 1-5.2 0 3 3 0 0 1-4.8 0 3 3 0 0 1-4.8 0L2 7Z"/><path d="M4 11v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"/><path d="m2 7 1.7-3.4A1 1 0 0 1 4.6 3h14.8a1 1 0 0 1 .9.6L22 7"/>',
  message: '<path d="M14 9a2 2 0 0 1-2 2H6l-4 4V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2Z"/><path d="M18 9h2a2 2 0 0 1 2 2v11l-4-4h-6a2 2 0 0 1-2-2v-1"/>',
};

// The three value propositions (verbatim from the site).
export const VALUE_PROPS = [
  ['Configurable, not bespoke', 'Shape funds, rules and service pathways around the way your organisation actually works. No custom build for every programme or client.'],
  ['Compliant by design', 'Governance, permissions and a full audit trail come built in, so reporting and assurance for your funders is there when you need it.'],
  ['Outcomes you can prove', 'Funding, delivery and results all sit on one record, so you can show the difference every dollar made, not just where it went.'],
];

// Area pages — content verbatim from valo.io/open-apis.md, /mcp.md, /security.md.
export const AREAS = {
  'open-apis': {
    title: 'Open APIs',
    metaTitle: 'Open APIs | Valo',
    summary: 'Valo is built API-first: every screen runs on the same public, Swagger-documented API, with webhooks for any event.',
    sections: [
      {
        heading: 'One API behind everything Valo does',
        bullets: [
          ['Built on the same APIs', 'every screen in Valo runs on the same public API you get.'],
          ['Integrate the tools you already use', 'finance systems, CRMs, data warehouses.'],
          ['Subscribe to any event', 'webhooks push changes to your applications as they happen.'],
        ],
      },
      {
        heading: 'Clean and predictable',
        bullets: [
          ['Token authentication', 'scoped per integration.'],
          ['Versioned', 'documented and stable.'],
          ['The same access as the web interface', 'nothing more.'],
        ],
      },
      {
        heading: 'Webhooks',
        id: 'webhooks',
        intro: 'Subscribe to the events you care about across Core, Pay and Unify.',
        events: [
          ['payment.settled', 'a payment has cleared.'],
          ['participant.onboarded', 'a new participant is verified and live.'],
          ['budget.threshold_reached', 'a budget has hit a limit you set.'],
          ['provider.verified', 'a provider passed verification.'],
          ['invoice.created', 'an invoice is ready to review.'],
        ],
      },
      {
        heading: 'Swagger-compliant documentation',
        body: 'Every endpoint is described with a Swagger (OpenAPI) specification, so the documentation is always accurate and up to date. Browse it interactively, try calls from the page, and generate a client in your language of choice. Email hello@valo.io for access.',
      },
    ],
  },
  mcp: {
    title: 'MCP & AI',
    metaTitle: 'MCP & AI | Valo',
    summary: 'Valo offers an interoperable MCP / AI connectivity layer: connect your own LLM, bound by the same permissions and audit as everyone else.',
    sections: [
      {
        heading: 'An AI layer you stay in control of',
        bullets: [
          ['Bring your own AI', 'connect the LLM your organisation already trusts over MCP.'],
          ['Permissioned and secure', 'AI uses the same access you already have, never more.'],
          ['Accessible by design', 'a conversational layer surfaces the right tools and answers.'],
        ],
      },
      {
        heading: 'Your LLM, the permission gate, then Valo',
        body: 'Every request your AI makes passes through the same access checks as a person signing in. If the permission is not there, the action does not happen. An assistant acting for a support coordinator sees what that coordinator sees; an assistant acting for finance can only touch what finance can.',
        bullets: [
          ['Scoped', 'to each user or service account.'],
          ['Audited', 'every action recorded in the same audit trail.'],
          ['Flexible', 'connect, swap or disconnect your LLM at any time.'],
        ],
      },
    ],
  },
  security: {
    title: 'Security & governance',
    metaTitle: 'Security & governance | Valo',
    summary: 'Valo is cloud-native and SOC 2 aligned, with encryption, role-based access, data sovereignty and a complete audit trail built in.',
    sections: [
      {
        heading: 'Security and governance, built in from the start',
        bullets: [
          ['Cloud-native by design', 'scales with you, resilient, continuously improving.'],
          ['SOC 2 aligned', 'covering security, availability and confidentiality.'],
          ['Permissions and governance', 'roles, permissions and a complete audit trail.'],
          ['Protected in transit and at rest', 'data encrypted by default.'],
          ['Data sovereignty', 'you control where your data lives and who it is shared with.'],
          ['Always accountable', 'every action visible in one consistent audit trail.'],
        ],
      },
      {
        heading: 'Cloud-first foundations',
        bullets: [
          ['Modern', 'built on modern cloud design principles.'],
          ['Resilient', 'resilient and highly available.'],
          ['Current', 'continuously updated, no disruptive upgrades.'],
        ],
      },
    ],
  },
};

// Home + About summaries for the .md mirrors (verbatim page copy).
export const HOME_MD = {
  title: 'Valo | Turn social investment into social outcomes',
  summary: 'Valo One is one platform for the organisations that deliver social outcomes. It brings identity (Core), fund management (Pay) and data integration and analytics (Unify) together, so you can put funding where it matters and show the difference it makes.',
  headline: 'Inclusive technology enabling independence and choice',
  sub: 'One platform for the organisations that turn social investment into real, measurable outcomes for the people they look after.',
  sectors: ['Disability funding', 'Insurance disbursements', 'NGOs & charities', 'Aged & community care', 'Grants & trusts', 'Government & social investment'],
  sectorsHeading: 'Built for high-trust funds, wherever they need to flow',
  trust: 'Participants, providers and funders all meet on one platform. Valo One runs the work in the middle, while one identity, one shared record and secure data exchange sit underneath, keeping funding, delivery and outcomes connected.',
};

export const ABOUT_MD = {
  title: 'About Valo | Software for the work that matters most',
  summary: 'Valo exists for the organisations that hold funds on behalf of others and turn them into real outcomes for real people. Meet the team and the principles we build by.',
  headline: 'Software for the work that matters most',
  intro: 'Valo exists for the organisations that hold funds on behalf of others and turn them into real outcomes for real people. We bring identity, payments, data and reporting together in one trusted platform, so the people doing this work can spend less time fighting systems and more time making a difference.',
  team: [
    ['Ben Irving', 'Chief Executive', 'Leads Valo and its mission. Ben brings years across technology and the social sector, and keeps the whole team focused on the people every fund is meant to serve.'],
    ['Louis Goodier', 'Chief Technology Officer', 'Owns the platform and the engineering behind it. Louis builds the secure, cloud-native foundations Valo runs on, and believes good infrastructure should be invisible and unbreakable.'],
    ['Sir Bill English', 'Director', 'A former Prime Minister and Minister of Finance of New Zealand who helped pioneer the social investment approach in government.'],
  ],
};
