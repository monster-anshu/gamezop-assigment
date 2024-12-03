import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin();
const apiHost = "https://pub.gamezop.com/v3";

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "static.gamezop.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
  rewrites: async () => {
    return [
      {
        source: "/api/:path*",
        destination: apiHost + "/:path*",
      },
    ];
  },
};

export default withNextIntl(nextConfig);
