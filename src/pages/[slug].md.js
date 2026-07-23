import { pageMd, MD_PAGES } from '../data/markdown.js';

export function getStaticPaths() {
  return MD_PAGES.map(({ slug }) => ({ params: { slug } }));
}

export function GET({ params }) {
  return new Response(pageMd(params.slug), {
    headers: { 'Content-Type': 'text/markdown; charset=utf-8' },
  });
}
