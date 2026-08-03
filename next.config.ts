import type { NextConfig } from "next"

const nextConfig: NextConfig = {
  reactCompiler: true,
  // Lets the same build run at "/" locally and under a path prefix in
  // production (e.g. dev.benardkimani.co.ke/nova) via NEXT_BASE_PATH.
  basePath: process.env.NEXT_BASE_PATH || undefined,
  // Standalone output is what the (optional) Dockerfile copies into its
  // runtime image — see Dockerfile / docs/deployment.
  output: "standalone",
  experimental: {
    optimizePackageImports: ["lucide-react"],
  },
}

export default nextConfig
