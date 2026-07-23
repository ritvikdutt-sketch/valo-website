/* Shared product data + icon helpers for the page scripts.
   Copy is verbatim from valo.io — keep in sync with src/data/pages.js. */
var VALO_ICONS = {
  building: '<rect x="4" y="2" width="16" height="20" rx="2"/><path d="M9 22v-4h6v4"/><path d="M8 6h.01M12 6h.01M16 6h.01M8 10h.01M12 10h.01M16 10h.01M8 14h.01M12 14h.01M16 14h.01"/>',
  card: '<rect x="2" y="5" width="20" height="14" rx="2"/><line x1="2" y1="10" x2="22" y2="10"/>',
  share: '<circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/>',
  users: '<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>',
  activity: '<path d="M22 12h-4l-3 9L9 3l-3 9H2"/>',
  store: '<path d="M2 7h20l-2 4a3 3 0 0 1-5.2 0 3 3 0 0 1-4.8 0 3 3 0 0 1-4.8 0L2 7Z"/><path d="M4 11v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"/><path d="m2 7 1.7-3.4A1 1 0 0 1 4.6 3h14.8a1 1 0 0 1 .9.6L22 7"/>',
  message: '<path d="M14 9a2 2 0 0 1-2 2H6l-4 4V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2Z"/><path d="M18 9h2a2 2 0 0 1 2 2v11l-4-4h-6a2 2 0 0 1-2-2v-1"/>',
};

var VALO_PRODUCTS = [
  { id: 'core', name: 'Valo Core', short: 'Core', icon: 'building', accent: '#029491', status: 'production',
    desc: 'Your platform, under your own brand. Core keeps verified identity for every participant and provider, your organisation structure, and the governance that holds it together. It is the one trusted profile every other Valo product is built on.',
    feats: ['Bring your own brand (white-label)', 'Verified identity & onboarding', 'Participant & provider records', 'Roles, permissions & governance'] },
  { id: 'pay', name: 'Valo Pay', short: 'Pay', icon: 'card', accent: '#E0484A', status: 'production',
    desc: 'When you hold money for other people, every cent has to be right. Pay runs funding, budgets, payments, billing and compliance on a real-time ledger, with verified bank details and fraud checks built in, so each payment can be traced to a person and the outcome it paid for.',
    feats: ['Verified bank account details', 'Fraud detection & controls', 'Double-entry ledger', 'Budgets, payments & billing'] },
  { id: 'unify', name: 'Valo Unify', short: 'Unify', icon: 'share', accent: '#4571E0', status: 'production',
    desc: 'Moving data between organisations is usually slow and painful. Unify connects systems in minutes, with no APIs, manual extracts or custom code. It exchanges sensitive data safely, tidies it on the way, and turns it into live analytics and insight you can actually use.',
    feats: ['Secure cross-agency data exchange', 'No APIs, extracts or custom code', 'Advanced analytics & modelling', 'Data sovereignty & governance'] },
  { id: 'care', name: 'Valo Care', short: 'Care', icon: 'users', accent: '#8A5CF0', status: 'roadmap',
    desc: 'Care is about the people doing the work. It looks after workforce workflows, rostering and coordination, and ties them straight back to budgets and records so nothing slips through the gaps.',
    feats: ['Workforce workflows', 'Care coordination', 'Rostering & scheduling', 'Visit verification'] },
  { id: 'health', name: 'Valo Health', short: 'Health', icon: 'activity', accent: '#1C8FD1', status: 'roadmap',
    desc: 'Health brings clinical and community work onto the same platform. Patient management, assessments and care plans all share one identity and one set of records, so everyone supporting a person is working from the same picture.',
    feats: ['Patient management', 'Clinical & community workflows', 'Assessments & plans', 'Outcome tracking'] },
  { id: 'marketplace', name: 'Valo Marketplace', short: 'Marketplace', icon: 'store', accent: '#C8741C', status: 'roadmap',
    desc: 'A managed marketplace for your providers and members. Procurement, member benefits, a built-in wallet and everyday commerce, all settled through Pay.',
    feats: ['Provider management', 'Procurement & catalogue', 'Member wallet & benefits', 'Commerce & settlement'] },
  { id: 'engage', name: 'Valo Engage', short: 'Engage', icon: 'message', accent: '#D8519E', status: 'roadmap',
    desc: 'Relationships at scale, handled with care. Pipelines, communications and document workflows run on the same records as the rest of Valo, so every conversation has the full story behind it.',
    feats: ['Pipelines & deals', 'Document workflows', 'Communications', 'Forms & e-signature'] },
];

var VALO_TAGLINES = {
  core: 'Administration, identity & governance',
  pay: 'Fund management & the financial backbone',
  unify: 'Data integration, analytics & insight',
  care: 'Caregiver operations & coordination',
  health: 'Clinical & patient management',
  marketplace: 'Procurement, wallet & commerce',
  engage: 'Full CRM & document workflows',
};

function valoIcon(name, size) {
  return '<svg width="' + size + '" height="' + size + '" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' + VALO_ICONS[name] + '</svg>';
}
