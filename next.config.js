/** @type {import('next').NextConfig} */
const nextConfig = {
  compiler: {
    styledComponents: true,
  },
  async rewrites() {
    return [
      {
        source: "/api/movies",
        destination:
          "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",
      },
    ];
  },
};

module.exports = nextConfig;
