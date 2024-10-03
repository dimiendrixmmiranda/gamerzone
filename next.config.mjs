/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: '*', // Permite qualquer hostname
                port: '', // Você pode especificar uma porta se necessário
                pathname: '/**', // Permite qualquer caminho
            },
        ],
    },
};

export default nextConfig;
