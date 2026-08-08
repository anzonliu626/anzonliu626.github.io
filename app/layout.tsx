import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { LenisProvider } from '@/components/lenis-provider'
import { ScrollToTop } from '@/components/scroll-to-top'
import './globals.css'

const montserrat = Montserrat({ 
  subsets: ["latin"],
  variable: "--font-montserrat",
})

export const metadata: Metadata = {
  title: 'Anzon Lius Portfolio | UI/UX Developer',
  description: 'Full-stack Designer specializing in crafting bold, user-centric web applications with a focus on clean code and innovative design.',
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="bg-background">
      <body className={`${montserrat.variable} font-sans antialiased bg-background text-foreground`}>
        <ScrollToTop />
        <LenisProvider>
          {children}
        </LenisProvider>
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
