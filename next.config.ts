import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  plugins: [
    require("@tailwindcss/typography"), // Add this line
  ],
};

export default nextConfig;
