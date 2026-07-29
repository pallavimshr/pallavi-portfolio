/** @type {import('next').NextConfig} */
const wpHostname = (() => {
  try {
    return process.env.WORDPRESS_API_URL
      ? new URL(process.env.WORDPRESS_API_URL).hostname
      : null;
  } catch {
    return null;
  }
})();

const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      // Allow images served directly from your WordPress media library.
      ...(wpHostname
        ? [{ protocol: "https", hostname: wpHostname }, { protocol: "http", hostname: wpHostname }]
        : []),
      { protocol: "https", hostname: "**.wp.com" },
    ],
  },
};

export default nextConfig;
