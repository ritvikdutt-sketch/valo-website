// Canonical page content for the product and area pages, and their .md
// mirrors. All copy is verbatim from valo.io (see llms.txt / *.md there) or
// from the product data already used on the landing page — do not invent
// new brand claims here.
//
// NOTE: src/pages/index.astro keeps its own inline PRODUCTS array (the orbit
// script needs it at runtime). If product copy changes, update both places.

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
