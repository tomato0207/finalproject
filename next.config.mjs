/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        reactCompiler: true,
    },
    reactStrictMode: true,
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'lh3.googleusercontent.com',
                pathname: '/**',
            },
            {
                protocol: 'https',
                hostname: 'avatars.githubusercontent.com',
                pathname: '/**',
            },
            /*
            {
                protocol: 'https',
                hostname: process.env.NEXT_SUPABASE_IMAGE_REMOTE_PATTERN,
                pathname: '/**',
            },
            */
        ],
    },
};

export default nextConfig;
