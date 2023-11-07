/** @type {import('next').NextConfig} */
module.exports = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'firebasestorage.googleapis.com',
                port: '',
                // pathname: '/v0/b/ecommerce-shop-cc542.appspot.com/**',
            },
            {
                protocol: 'https',
                hostname: 'lh3.googleusercontent.com',
                port: '',
                // pathname: '/v0/b/ecommerce-shop-cc542.appspot.com/**',
            },
        ],
    },
    reactStrictMode: false,
}
