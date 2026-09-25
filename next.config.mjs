/** @type {import('next').NextConfig} */
const nextConfig = {
  async headers() {
    return [
      {
        // Firebase's sign-in popup polls window.closed on the opened window,
        // which the default COOP blocks (noisy console errors during login).
        source: "/:path*",
        headers: [
          {
            key: "Cross-Origin-Opener-Policy",
            value: "same-origin-allow-popups",
          },
        ],
      },
    ];
  },
  async rewrites() {
    return [
      {
        // only proxy API requests
        source: "/api/:path*",
        destination: "http://localhost:8000/api/:path*",
      },
    ];
  },
};

export default nextConfig;
