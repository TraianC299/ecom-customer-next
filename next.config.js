/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
  locales: ['en', 'ro', 'ru'],
  i18n:{
    locales: ['en', 'ro', 'ru'],
    defaultLocale: 'en',
  },
  defaultLocale: 'en',
  domains: [
    {
      domain: 'example.com',
      defaultLocale: 'en',
    },
    {
      domain: 'example.ro',
      defaultLocale: 'ro',
    },
    {
      domain: 'example.ru',
      defaultLocale: 'ru',
      // an optional http field can also be used to test
      // locale domains locally with http instead of https
      http: true,
    },
  ],
}

module.exports = nextConfig
