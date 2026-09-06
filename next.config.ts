import type { NextConfig } from "next";

const config: NextConfig = {
  // `next dev` and `next build` share .next by default, so building while a dev
  // server is running pulls the directory out from under it. Set NEXT_DIST_DIR
  // to give a one-off build or a throwaway server its own directory.
  distDir: process.env.NEXT_DIST_DIR ?? ".next",
  reactStrictMode: true,
  images: {
    formats: ["image/avif", "image/webp"],
  },
};

export default config;
