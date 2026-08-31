import { absoluteUrl } from '@/lib/utils'
import { Metadata } from 'next'
import '@/styles/index.css'

export const metadata: Metadata = {
  metadataBase: new URL('https://seiolelabs.com'),
  title: {
    default: 'Seiole Labs',
    template: '%s | Seiole Labs'
  },
  description: 'Energy will be one of the biggest bottlenecks of our lifetime for human progress in AI and space exploration.',
  openGraph: {
    title: 'Seiole Labs',
    description: 'Energy will be one of the biggest bottlenecks of our lifetime for human progress in AI and space exploration.',
    url: absoluteUrl('/'),
    siteName: 'Seiole Labs',
    images: [
      {
        url: absoluteUrl('/grid.jpeg'),
        width: 800,
        height: 800
      }
    ],
    locale: 'en_US',
    type: 'website'
  },
  icons: {
    icon: [{ url: '/favicon/favicon-32x32.png' }],
    apple: [{ url: '/favicon/apple-touch-icon.png' }]
  }
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
