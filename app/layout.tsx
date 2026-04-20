import type { Metadata, Viewport } from 'next'
import { Poppins } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-poppins"
});

export const metadata: Metadata = {
  metadataBase: new URL('https://hermosacartagena.com'),
  title: 'Hermosa Cartagena | Tours y Pasadias en Cartagena de Indias',
  description: 'Vive una experiencia inolvidable en las islas del Caribe colombiano. Tours a Bora Bora Beach Club, Volcan del Totumo, Nado con Delfines y mas. Reserva ahora por WhatsApp. RNT: 232342',
  keywords: ['tours cartagena', 'bora bora beach club', 'islas del rosario', 'pasadias cartagena', 'turismo cartagena', 'volcan totumo', 'nado con delfines'],
  alternates: {
    canonical: 'https://hermosacartagena.com',
  },
  openGraph: {
    title: 'Hermosa Cartagena | Tours y Pasadias en Cartagena de Indias',
    description: 'Escapate al paraiso caribeno. Tours exclusivos a las mejores islas de Colombia.',
    type: 'website',
    url: 'https://hermosacartagena.com',
    images: [
      {
        url: '/hero-islas-del-rosario.jpeg',
        width: 1200,
        height: 630,
        alt: 'Tours y pasadias en las Islas del Rosario, Cartagena de Indias',
      },
    ],
  },
}

export const viewport: Viewport = {
  themeColor: '#0a0a0a',
  width: 'device-width',
  initialScale: 1,
}

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'Hermosa Cartagena',
  description: 'Tours y pasadias en el Caribe colombiano. Experiencias inolvidables en Cartagena de Indias.',
  telephone: '+573113410983',
  url: 'https://hermosacartagena.com',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Cartagena de Indias',
    addressRegion: 'Bolivar',
    addressCountry: 'CO',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 10.3932,
    longitude: -75.4832,
  },
  sameAs: [
    'https://www.instagram.com/hermosacartagena',
    'https://www.facebook.com/share/1832eSoeLA/',
    'https://www.tiktok.com/@hermosacartagena',
  ],
  hasMap: 'https://maps.google.com/?q=Cartagena+de+Indias',
  priceRange: '$$',
  image: 'https://hermosacartagena.com/logo-hermosa-cartagena.png',
  identifier: {
    '@type': 'PropertyValue',
    name: 'RNT',
    value: '232342',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
      </head>
      <body className={`${poppins.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
