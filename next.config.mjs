/** @type {import('next').NextConfig} */
const nextConfig = {
  // Emits plain HTML/CSS/JS into out/ — deploy to any static host, no Node server.
  output: "export",

  // Every page becomes a folder with index.html, so /about works without server rewrites.
  trailingSlash: true,

  // The static exporter cannot run the image optimiser at request time.
  images: { unoptimized: true },

  reactStrictMode: true,
};

export default nextConfig;
