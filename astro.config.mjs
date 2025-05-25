import { defineConfig } from 'astro/config';
import decapCmsOauth from 'astro-decap-cms-oauth';

// https://astro.build/config
export default defineConfig({
  integrations: [decapCmsOauth()],
  // Configure Netlify (or Vercel) adapter if needed for deployment
  // import netlify from '@astrojs/netlify/functions';
  // adapter: netlify(),
  output: 'static', // Ensure fully static site
}); 