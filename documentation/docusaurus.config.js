// @ts-check
// Docusaurus configuration: https://docusaurus.io/docs/api/docusaurus-config
// This file runs in Node.js. Don't use browser APIs or JSX here.

import {themes as prismThemes} from 'prism-react-renderer';

const repoUrl = 'https://github.com/Angelio220v/tw-portfolio';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'ServeFlow',
  tagline:
    'Documentation portfolio: a fictional restaurant order platform, documented end to end.',
  favicon: 'img/favicon.ico',

  future: {
    v4: true,
  },

  url: 'https://serveflow-docs.netlify.app',
  baseUrl: '/',
  // Generate `page.html` instead of `page/index.html`, so Netlify serves
  // `/docs/intro` directly without a redirect to `/docs/intro/`.
  trailingSlash: false,

  onBrokenLinks: 'throw',
  markdown: {
    mermaid: true,
    hooks: {
      onBrokenMarkdownLinks: 'throw',
    },
  },

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  themes: ['@docusaurus/theme-mermaid'],

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        // External documentation: customers, integrators, end users.
        docs: {
          path: 'external',
          routeBasePath: 'docs',
          sidebarPath: './sidebars.js',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  plugins: [
    // Internal documentation: support, administrators, developers.
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'internal',
        path: 'internal',
        routeBasePath: 'internal',
        sidebarPath: './sidebars.js',
      },
    ],
    // Project documentation: business analysis and architecture artifacts.
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'project',
        path: 'project',
        routeBasePath: 'project',
        sidebarPath: './sidebars.js',
      },
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: 'img/docusaurus-social-card.jpg',
      colorMode: {
        respectPrefersColorScheme: true,
      },
      navbar: {
        title: 'ServeFlow',
        logo: {
          alt: 'ServeFlow logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'docs',
            position: 'left',
            label: 'Docs',
          },
          {
            type: 'docSidebar',
            sidebarId: 'docs',
            docsPluginId: 'internal',
            position: 'left',
            label: 'Internal',
          },
          {
            type: 'docSidebar',
            sidebarId: 'docs',
            docsPluginId: 'project',
            position: 'left',
            label: 'Project',
          },
          {
            href: repoUrl,
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Documentation',
            items: [
              {label: 'Docs', to: '/docs/intro'},
              {label: 'Internal', to: '/internal/intro'},
              {label: 'Project', to: '/project/intro'},
            ],
          },
          {
            title: 'Source',
            items: [{label: 'GitHub', href: repoUrl}],
          },
        ],
        copyright: `ServeFlow is a fictional product created for a documentation portfolio. Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
