const config = {
  title: 'ProcFace',
  tagline: 'Embedded Linux procfs performance analysis',
  url: 'https://livedevliberate.github.io',
  baseUrl: '/procface-docs/',
  organizationName: 'LiveDevLiberate',
  projectName: 'procface-docs',
  onBrokenLinks: 'throw',
  i18n: { defaultLocale: 'zh-Hans', locales: ['zh-Hans', 'en'] },
  presets: [[
    'classic',
    {
      docs: { sidebarPath: './sidebars.js', routeBasePath: 'docs' },
      blog: false,
      theme: { customCss: './src/css/custom.css' }
    }
  ]],
  themeConfig: {
    navbar: {
      title: 'ProcFace',
      items: [
        { type: 'docSidebar', sidebarId: 'docs', position: 'left', label: '文档' },
        { href: 'https://github.com/LiveDevLiberate/procface', label: 'GitHub', position: 'right' },
        { type: 'localeDropdown', position: 'right' }
      ]
    },
    footer: { style: 'dark', links: [], copyright: 'ProcFace · MIT License' }
  }
};
module.exports = config;
