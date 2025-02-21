/** @format */

import type { Metadata } from 'next'
import '../styles/globals.css'
import '../styles/Quick_Flyer.css'
import localFont from 'next/font/local'
import { ThemeProvider } from '@/providers/theme-provider'
import { FlyerProvider } from '@/providers/flyer-context'
import { FlyerThemeProvider } from '@/providers/flyer-theme-context'
import { Inter } from 'next/font/google'
import { Toaster } from '@/components/ui/sonner'

const inter = Inter({ subsets: ['latin'] })

const veneer = localFont({
  src: [
    {
      path: '../../public/fonts/Veneer-Three.woff',
      weight: '400',
    },
  ],
  variable: '--font-veneer',
})

export const metadata: Metadata = {
  title: 'Quick Flyer - Flyer creator for shows',
  description: 'Generate a quick flyer for your event!',
  openGraph: {
    title: 'Quick Flyer - Flyer creator for shows',
    description: 'Generate a quick flyer for your event!',
    images: [
      {
        url: '/opengraph-image.png', // Path relative to the public directory
        width: 1200,
        height: 630,
        type: 'image/png',
      },
    ],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en' suppressHydrationWarning>
      <body className={`${inter.className} ${veneer.variable}`}>
        <ThemeProvider
          attribute='class'
          defaultTheme='system'
          enableSystem
          disableTransitionOnChange
        >
          <FlyerProvider>
            <FlyerThemeProvider>{children}</FlyerThemeProvider>
          </FlyerProvider>
          <Toaster richColors position='bottom-center' />
        </ThemeProvider>
      </body>
    </html>
  )
}
