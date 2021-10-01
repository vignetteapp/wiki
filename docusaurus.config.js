const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

// With JSDoc @type annotations, IDEs can provide config autocompletion
/** @type {import('@docusaurus/types').DocusaurusConfig} */
(module.exports = {
  title: 'The Vignette Wiki',
  tagline: 'Home Page',
  url: 'https://wiki.vignetteapp.org',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'vignetteapp', // Usually your GitHub org/user name.
  projectName: 'docs', // Usually your repo name.

  presets: [
    [
      '@docusaurus/preset-classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/vignetteapp/docs/edit/master/website/',
          routeBasePath: '/'
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'The Vignette Wiki',
        logo: {
          alt: 'The Vignette Wiki Logo',
          src: 'img/logo.png',
        },
        items: [
          {
            type: 'doc',
            docId: 'install/install-methods',
            position: 'left',
            label: 'Installation Guide',
          },
          {
            href: 'https://github.com/vignetteapp/vignette',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Wiki',
            items: [
              {
                label: 'Home Page',
                to: '/',
              },
              {
                label: 'Installation Guide',
                to: '/install/install-methods',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Open Collective',
                href: 'https://opencollective.com/vignette',
              },
              {
                label: 'Discord',
                href: 'https://discord.com/invite/rsPNAxwweg',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/vignette_org',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'vignetteapp.org',
                href: 'https://vignetteapp.org',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/vignetteapp/vignette',
              },
            ],
          },
          {
            title: "‎",
            items: [
              {
                html: `
                  <a href="https://vercel.com/?utm_source=vignette&utm_campaign=oss" target="_blank" rel="noreferrer noopener" aria-label="Powered by Vercel">
                    <img src="https://www.datocms-assets.com/31049/1618983297-powered-by-vercel.svg" alt="Powered by Vercel" />
                  </a>
                `,                
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} The Vignette Authors. Licensed under MIT.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
});
