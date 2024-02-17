/** @format */

import type { Metadata } from 'next'
import '../styles/globals.css'
import '/veneer.css'
import '../styles/Quick_Flyer.css'
import { ThemeProvider } from '@/providers/theme-provider'
import { FlyerProvider } from '@/providers/flyer-context'
import { FlyerThemeProvider } from '@/providers/flyer-theme-context'
import { Inter } from 'next/font/google'
import { Toaster } from '@/components/ui/sonner'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Quick Flyer - Flyer creator for shows',
  description: 'Generate a quick flyer for your event!',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en' suppressHydrationWarning>
      <body className={inter.className}>
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
