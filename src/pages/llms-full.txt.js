import { pageMd, MD_PAGES } from '../data/markdown.js';

export function GET() {
  const body = MD_PAGES.map(({ slug }) => pageMd(slug)).join('\n\n---\n\n');
  return new Response(body, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
}
