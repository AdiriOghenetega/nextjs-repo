/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  redirects: async () =>{
    return [
      {
        source : "/news",
        destination : "/feedback",
        permanent : false
      }
    ]
  }
}

module.exports = nextConfig
