/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  turbopack: {
    root: import.meta.dirname,
  },
  images: {
    unoptimized: true,
  },
  // Fuerza un nuevo build ID en cada deploy para invalidar cache de build
  generateBuildId: async () => {
    return `build-${Date.now()}`
  },
  async headers() {
    return [
      {
        // HTML y páginas: sin cache para que siempre se sirva la última versión
        source: '/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=0, must-revalidate',
          },
        ],
      },
      {
        // Assets con hash de Next.js: cache largo (ya incluyen hash en el nombre)
        source: '/_next/static/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        // Imágenes públicas sin hash: cache corto para invalidar rápido
        source: '/:path*.@(png|jpg|jpeg|gif|svg|ico|webp)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=3600, must-revalidate',
          },
        ],
      },
    ]
  },
}

export default nextConfig
