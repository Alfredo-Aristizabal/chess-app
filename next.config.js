module.exports = {
  future: {
    webpack5: true,
  },
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: "https://localhost:7012/:path*",
      },
    ];
  },
};
