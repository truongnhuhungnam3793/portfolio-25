import type { NextConfig } from "next"

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https", // Specify the protocol (e.g., 'https' or 'http')
        hostname: "images.unsplash.com", // The exact hostname of the image source
        port: "", // Optional: Specify the port if necessary (e.g., '8080')
        pathname: "/**", // Optional: Specify a path pattern (e.g., '/users/**' or '/products/**')
      },
    ],
  },
}

export default nextConfig
