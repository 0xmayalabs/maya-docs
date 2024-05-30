// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Maya Protocol',
  tagline: 'Digital Authenticity Layer of the Internet',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://docs.mayalabs.tech',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: '0xmayalabs', // Usually your GitHub org/user name.
  projectName: 'maya-docs', // Usually your repo name.

  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          editUrl: 'https://github.com/0xmayalabs/maya-docs/edit/main/website/',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/maya.PNG',
      navbar: {
        title: 'Maya',
        style: 'dark',
        logo: {
          alt: 'Maya Logo',
          src: 'img/LogoMark-White.svg',
        },
        items: [
          {
            href: "https://blog.mayalabs.tech",
            label: "Blog",
            position: 'right',
          },
          {
            href: "https://docs.mayalabs.tech/litepaper.pdf",
            label: "Litepaper",
            position: 'right',
          },
          {
            href: 'https://github.com/0xmayalabs',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Docs',
                to: '/docs/intro',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Twitter',
                href: 'https://x.com/0xmayalabs',
              },
              {
                label: 'Discord',
                href: 'https://discord.com/invite/HpCPQwWtkr',
              },
              {
                label: 'Farcaster',
                href: 'https://warpcast.com/mayaprotocol',
              },
              {
                label: 'Linkedin',
                href: 'https://www.linkedin.com/company/maya-labs',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                href: 'https://blog.mayalabs.tech',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/0xmayalabs',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Maya Labs`,
      },
      colorMode: {
        defaultMode: 'light',
        disableSwitch: true, // disable dark mode switch
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
  stylesheets: [
    'https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@500&display=swap',
  ],
};

export default config;
