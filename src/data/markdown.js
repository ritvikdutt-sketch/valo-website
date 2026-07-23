// Markdown mirrors of every page, for agents — same convention as valo.io
// (each page has a .md twin, indexed by /llms.txt).
import { PRODUCTS, AREAS, PLATFORM_NOTE, HOME_MD, ABOUT_MD, CONTACT } from './pages.js';

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

## One platform. Seven products.

${PLATFORM_NOTE}

In production today: ${PRODUCTS.map((p) => `${p.name} (${p.tagline})`).join(' · ')}. On the roadmap: Valo Care, Valo Health, Valo Marketplace, Valo Engage.

## Everyone works from a single source of truth

${HOME_MD.trust}

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
  const product = PRODUCTS.find((p) => p.id === slug);
  if (product) return productMd(product);
  if (AREAS[slug]) return areaMd(AREAS[slug]);
  throw new Error(`No markdown for slug: ${slug}`);
}

export const MD_PAGES = [
  { slug: 'index', title: 'Valo One (Home)', line: HOME_MD.summary },
  { slug: 'about', title: 'About Valo', line: ABOUT_MD.summary },
  ...PRODUCTS.map((p) => ({ slug: p.id, title: p.name, line: `${p.tagline}. ${p.desc.split('. ')[0]}.` })),
  { slug: 'open-apis', title: 'Open APIs', line: AREAS['open-apis'].summary },
  { slug: 'mcp', title: 'MCP & AI', line: AREAS.mcp.summary },
  { slug: 'security', title: 'Security & governance', line: AREAS.security.summary },
];
