// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import vercel from '@astrojs/vercel';

import sentry from '@sentry/astro';

export default defineConfig({
  integrations: [
    starlight({
      title: 'Sentry Build: Fixing Your Frontend',
      logo: {
        src: './src/assets/logo-text.svg',
        replacesTitle: true,
      },
      favicon: '/logo.svg',

      social: [
        {
          icon: 'github',
          label: 'GitHub',
          href: 'https://github.com/getsentry/sentry-build-frontend-performance-workshop-guide',
        },
      ],
      customCss: [
        // Add our custom Sentry theme
        './src/styles/custom.css',
      ],
      sidebar: [
        {
          label: 'Workshop',
          items: [
            { label: 'Quickstart', slug: 'quickstart' },
            {
              label: 'Getting Started with Sentry',
              slug: 'getting-started',
            },
            {
              label: 'Optimizing Performance with Web Vitals',
              slug: 'optimizing-web-vitals',
            },
            {
              label: 'Distributed Tracing & Backend Performance',
              slug: 'distributed-tracing',
            },
            {
              label: 'Session Replay & Structured Logging',
              slug: 'session-replay-and-structured-logging',
            },
            {
              label: 'AI-Powered Debugging & Next Steps',
              slug: 'ai-powered-debugging-and-next-steps',
            },
          ],
        },
        {
          label: 'Resources',
          items: [
            { label: 'Sentry Documentation', link: 'https://docs.sentry.io/', attrs: {
              target: '_blank',
            } },
            {
              label: 'React SDK',
              link: 'https://docs.sentry.io/platforms/javascript/guides/react/',
              attrs: {
                target: '_blank',
              }
            },
            {
              label: 'Express SDK',
              link: 'https://docs.sentry.io/platforms/javascript/guides/express/',
              attrs: {
                target: '_blank',
              }
            },
            {
              label: 'Web Vitals Guide',
              link: 'https://webvitals.com',
              attrs: {
                target: '_blank',
              }
            },
          ],
        },
      ],
    }),
    sentry(),
  ],

  // Configure Vercel adapter with specific options for assets
  adapter: vercel({
    imageService: true,
    includeFiles: [
      './src/assets/**/*',
      './src/assets/img/**/*',
      './src/assets/img/**/*.gif',
    ],
  }),
});
