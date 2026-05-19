import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // PGlite ships a WASM build + uses Node fs; keep it out of the bundler.
  serverExternalPackages: ["@electric-sql/pglite"],
};

export default nextConfig;
