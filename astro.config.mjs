import { defineConfig } from 'astro/config';
import decapCmsOauth from 'astro-decap-cms-oauth';
import netlify from '@astrojs/netlify';

// https://astro.build/config
export default defineConfig({
  integrations: [
    decapCmsOauth({
      oauthDisabled: true, // Disable GitHub OAuth routes when using Git Gateway
    }),
  ],
  adapter: netlify(),
  output: 'server',
}); 