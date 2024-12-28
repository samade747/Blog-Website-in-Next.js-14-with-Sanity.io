/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{
        remotePatterns:[
            {
                    protocol:'https',
                    hostname:'cdn.sanity.io'
                }
            ],
            domains: ['images.unsplash.com', 'i.pravatar.cc']

        
    }
};

export default nextConfig;
