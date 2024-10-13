/* eslint-disable @typescript-eslint/no-var-requires */
const darkCodeTheme = require('prism-react-renderer/themes/dracula');
const lightCodeTheme = require('prism-react-renderer/themes/github');

// With JSDoc @type annotations, IDEs can provide config autocompletion
/** @type {import('@docusaurus/types').DocusaurusConfig} */
(
  module.exports = {
    title: 'Spader AI',
    tagline: '加速您的 AI 开发和部署',
    url: 'https://spader.ai', // Update this to your actual URL   
    baseUrl: '/',
    favicon: 'img/favicon.ico',
    organizationName: 'neoz5418',
    projectName: 'spader-web',
    onBrokenLinks: 'throw',
    onBrokenMarkdownLinks: 'throw',
    presets: [
      [
        '@docusaurus/preset-classic',
        /** @type {import('@docusaurus/preset-classic').Options} */
        ({
          docs: {
            path: 'docs',
            // sidebarPath: 'sidebars.js',
            editUrl:
              'https://github.com/spader-ai/spader-web/edit/main/packages/website/',
            lastVersion: 'current',
            showLastUpdateAuthor: true,
            showLastUpdateTime: true,
          },
          theme: {
            customCss: require.resolve('./src/css/custom.css'),
          },
        }),
      ],
    ],
    plugins: ['my-loaders', 'tailwind-loader'],
    themeConfig:
      /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
      ({
        spader: {
          appId: 'R2IYF7ETH7',
          apiKey: '599cec31baffa4868cae4e79f180729b',
          indexName: 'docsearch',
          contextualSearch: true,
        },
        metadata: [
          {
            name: 'google-site-verification',
            content: '23yIHmCD_xnJb_6e3s-w7M29Kydahk-d86ObMWOrvRg',
          },
        ],
        navbar: {
          hideOnScroll: true,
          items: [
            // left
            {
              label: 'Home',
              to: '/',
              position: 'left',
            },
            {
              label: 'Products',
              position: 'left',
              items: [
                { label: 'Spader Inference', to: '/inference' },
                { label: 'Spader Fine-tuning', to: '/fine-tuning' },
                { label: 'Spader GPU Clusters', to: '/gpu-clusters' },
                { label: 'Spader Custom Models', to: '/custom-models' },
              ],
            },
            {
              label: 'Blog',
              to: 'blog',
              position: 'left',
            },
            {
              label: 'Pricing',
              to: 'pricing',
              position: 'left',
            },
            {
              label: 'Contact',
              to: 'contact',
              position: 'left',
            },
            // right
            // {
            //   type: 'docsVersionDropdown',
            //   position: 'right',
            // },
            {
              label: 'Docs',
              to: 'docs/what-is-spader-ai',
              position: 'right',
            },
            {
              href: 'https://github.com/spader-ai',
              position: 'right',
              className: 'header-github-link',
            },
          ],
        },
        colorMode: {
          defaultMode: 'light',
          disableSwitch: false,
          respectPrefersColorScheme: true,
        },
        announcementBar: {
          content:
            '⭐️ If you like SpaderAI, give it a star on <a target="_blank" rel="noopener noreferrer" href="https://github.com/spader-ai/spader-web">GitHub</a>! ⭐️',
        },
        footer: {
          links: [
            {
              title: 'Docs',
              items: [
                {
                  label: 'Getting Started',
                  to: 'docs/what-is-spader-ai',
                },
                {
                  label: 'FAQ',
                  to: 'docs/spader-ai-faq',
                },
              ],
            },
            {
              title: 'DocSearch',
              items: [
                {
                  label: 'Apply',
                  to: 'apply',
                },
                {
                  label: 'Issues',
                  to: 'https://github.com/spader-ai/spader-web/issues',
                }
              ],
            },
            {
              title: 'Community',
              items: [
                {
                  label: 'Discord',
                  to: 'https://discord.com/invite/xxxxx',
                },
              ],
            },
            {
              title: 'Social',
              items: [
                {
                  label: 'GitHub',
                  to: 'https://github.com/spader-ai/spader-web',
                },
                {
                  label: 'Twitter',
                  to: 'https://twitter.com/xxxxx',
                },
                {
                  label: 'Blog',
                  to: 'blog/',
                },
              ],
            },
          ],
          logo: {
            alt: 'Spader AI',
            src: 'img/spader-logo-blue.png',
            srcDark: 'img/spader-logo-white.png',
            width: 200,
          },
          copyright: 'Spader AI 2023-now • Designed and built by docusaurus',
        },
        image: 'img/og_image.png',
        prism: {
          theme: lightCodeTheme,
          darkTheme: darkCodeTheme,
        },
      }),
  }
);
