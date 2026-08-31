import { absoluteUrl } from '@/lib/utils'
import { Metadata } from 'next'
import localFont from 'next/font/local'
import '@/styles/index.css'

const serrif = localFont({
  src: [
    { path: '../../../public/fonts/Serrif-TRIAL-Thin.otf', weight: '100', style: 'normal' },
    { path: '../../../public/fonts/Serrif-TRIAL-ThinItalic.otf', weight: '100', style: 'italic' },
    { path: '../../../public/fonts/Serrif-TRIAL-Regular.otf', weight: '400', style: 'normal' },
    { path: '../../../public/fonts/Serrif-TRIAL-RegularItalic.otf', weight: '400', style: 'italic' },
  ],
  variable: '--font-serif',
  display: 'swap',
})

const neuebit = localFont({
  src: '../../../public/fonts/ppneuebit-bold.otf',
  variable: '--font-pixel',
  display: 'swap',
})

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
    <html lang="en" className={`${serrif.variable} ${neuebit.variable}`}>
      <body>{children}</body>
    </html>
  )
}
