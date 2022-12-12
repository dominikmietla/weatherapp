/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      'localhost',
      'openweathermap.org',
    ]
  }
}

module.exports = nextConfig