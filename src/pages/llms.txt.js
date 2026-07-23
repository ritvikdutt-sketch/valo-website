import { MD_PAGES } from '../data/markdown.js';

export function GET({ site }) {
  const rawBase = import.meta.env.BASE_URL;
  const base = rawBase.endsWith('/') ? rawBase : rawBase + '/';
  const origin = site ? new URL(base, site).href : base;

  const lines = MD_PAGES.map(
    ({ slug, title, line }) => `- [${title}](${origin}${slug}.md): ${line}`
  ).join('\n');

  const body = `# Valo

> Valo One is one platform for the organisations that deliver social outcomes. It brings identity (Core), fund management (Pay) and data integration and analytics (Unify) together, so you can put funding where it matters and show the difference it makes.

Every page on this site has a markdown mirror for agents — append .md to the page name, or use the links below.

## Pages

${lines}

## Full content

- [llms-full.txt](${origin}llms-full.txt): every page's full content in one file.
`;

  return new Response(body, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
}
