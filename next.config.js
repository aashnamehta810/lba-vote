/* eslint-disable import/no-extraneous-dependencies */
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

module.exports = withBundleAnalyzer({
  eslint: {
    dirs: ['.'],
  },
  images: {
    domains: ['placehold.co'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placehold.co',
        port: '',
        pathname: '/*',
      },
    ],
  },
  poweredByHeader: false,
  trailingSlash: true,
  basePath: '',
  reactStrictMode: true,
  sassOptions: {
    prependData: `
      @import './src/styles/scss/variables.scss';
      @import './src/styles/scss/mixins.scss';
      @import './src/styles/scss/fonts.scss';
    `,
  },
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'link',
            value:
              '<link rel="preconnect" href="https://fonts.googleapis.com" />',
          },
          {
            key: 'link',
            value: '<link rel="preconnect" href="https://fonts.gstatic.com" />',
          },
          {
            key: 'link',
            value:
              '<link href="https://fonts.googleapis.com/css2?family=Rajdhani:wght@300;400;500;600;700&family=Saira:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet" />',
          },
        ],
      },
    ];
  },
  env: {
    apiUrl: 'https://app.lbaleagues.com/api/1.1/obj',
    dataUrl: 'https://app.lbaleagues.com/api/1.1/wf',
    token: 'b849e4e52292c26707f63c4f295d8e54',
    graphUrl: 'https://cms.lbaleagues.com/graphql',
  },
});
