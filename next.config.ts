import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Allow local dev hostnames (used by codespaces/ports preview)
  // to access Next.js dev resources like webpack HMR.
  // See https://nextjs.org/docs/app/api-reference/config/next-config-js/allowedDevOrigins
  // and restart the dev server after changing this.
  // Include both '127.0.0.1' and 'localhost' where applicable.
  // Note: Type may not include allowedDevOrigins depending on Next types — it's accepted at runtime.
  // @ts-ignore-next-line
  allowedDevOrigins: ['127.0.0.1', 'localhost'],
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev",
      },
    ],
  },
};

export default nextConfig;
