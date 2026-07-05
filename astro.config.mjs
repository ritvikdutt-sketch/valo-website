import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://ritvikdutt-sketch.github.io',
  base: '/valo-website',
  // Emit about.html (not about/index.html) so existing URLs and the pages'
  // relative asset paths keep working unchanged.
  build: { format: 'file' },
  integrations: [tailwind({ applyBaseStyles: false })],
});
