/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify:true,
    images:{
      remotePatterns:[
        {
          protocol: 'https',
          hostname: 'cdn.pixabay.com',
          port: '',
          pathname: '/photo/**',
        }
      ]
    }
  }

  export default nextConfig