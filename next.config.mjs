/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{
        remotePatterns:[{hostname:"images.upsplash.com"}]
    },
    experimental:{
        serverActions:true
    }
};

export default nextConfig;
