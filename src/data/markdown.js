// Markdown mirrors of every page, for agents — same convention as valo.io
// (each page has a .md twin, indexed by /llms.txt).
import { PRODUCTS, ALL_PRODUCTS, AREAS, PLATFORM_NOTE, VALUE_PROPS, HOME_MD, ABOUT_MD, CONTACT } from './pages.js';

const FOOTER = `---\n\nPart of Valo One. Get in touch: ${CONTACT}.`;

function productMd(p) {
  return `# ${p.name}

> ${p.tagline}. ${p.status}.

${p.desc}

## Capabilities

${p.feats.map((f) => `- ${f}`).join('\n')}

## Part of Valo One

${PLATFORM_NOTE}

${FOOTER}
`;
}

function areaMd(a) {
  const sections = a.sections.map((s) => {
    let out = `## ${s.heading}\n`;
    if (s.intro) out += `\n${s.intro}\n`;
    if (s.body) out += `\n${s.body}\n`;
    if (s.bullets) out += `\n${s.bullets.map(([lead, rest]) => `- ${lead}: ${rest}`).join('\n')}\n`;
    if (s.events) out += `\n${s.events.map(([e, d]) => `- ${e} — ${d}`).join('\n')}\n`;
    return out;
  }).join('\n');

  return `# ${a.title}

> ${a.summary}

${sections}
${FOOTER}
`;
}

function homeMd() {
  return `# ${HOME_MD.title}

> ${HOME_MD.summary}

## ${HOME_MD.headline}

${HOME_MD.sub}

## ${HOME_MD.sectorsHeading}

${HOME_MD.sectors.map((s) => `- ${s}`).join('\n')}

See also: [platform.md](platform.md), [why-valo.md](why-valo.md).

${FOOTER}
`;
}

function platformMd() {
  return `# Platform — One platform. Seven products.

> ${PLATFORM_NOTE}

## Built to switch on, one product at a time

Three products run live operations today. Four more are on the way as your model grows. Each one has a clear identity of its own, and all of them are built on the same Valo core.

## In production

${PRODUCTS.map((p) => `- **${p.name}** (${p.tagline}): ${p.desc}`).join('\n')}

## On the roadmap

${ALL_PRODUCTS.filter((p) => !p.live).map((p) => `- Valo ${p.short}`).join('\n')}

${FOOTER}
`;
}

function whyValoMd() {
  return `# Why Valo — Everyone works from a single source of truth

> ${HOME_MD.trust}

${VALUE_PROPS.map(([t, b]) => `## ${t}\n\n${b}`).join('\n\n')}

## One identity · one record · one source of truth

The shared foundation every Valo product is built on, all under your brand: verified identity, shared records, secure data exchange, MCP connectivity.

${FOOTER}
`;
}

function aboutMd() {
  return `# ${ABOUT_MD.title}

> ${ABOUT_MD.summary}

## ${ABOUT_MD.headline}

${ABOUT_MD.intro}

## The people behind Valo

${ABOUT_MD.team.map(([name, role, bio]) => `- **${name}**, ${role} — ${bio}`).join('\n')}

${FOOTER}
`;
}

export function pageMd(slug) {
  if (slug === 'index') return homeMd();
  if (slug === 'about') return aboutMd();
  if (slug === 'platform') return platformMd();
  if (slug === 'why-valo') return whyValoMd();
  const product = PRODUCTS.find((p) => p.id === slug);
  if (product) return productMd(product);
  if (AREAS[slug]) return areaMd(AREAS[slug]);
  throw new Error(`No markdown for slug: ${slug}`);
}

export const MD_PAGES = [
  { slug: 'index', title: 'Valo One (Home)', line: HOME_MD.summary },
  { slug: 'platform', title: 'Platform', line: PLATFORM_NOTE },
  { slug: 'why-valo', title: 'Why Valo', line: HOME_MD.trust },
  { slug: 'about', title: 'About Valo', line: ABOUT_MD.summary },
  ...PRODUCTS.map((p) => ({ slug: p.id, title: p.name, line: `${p.tagline}. ${p.desc.split('. ')[0]}.` })),
  { slug: 'open-apis', title: 'Open APIs', line: AREAS['open-apis'].summary },
  { slug: 'mcp', title: 'MCP & AI', line: AREAS.mcp.summary },
  { slug: 'security', title: 'Security & governance', line: AREAS.security.summary },
];
