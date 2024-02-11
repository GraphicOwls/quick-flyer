/** @format */

import type { Metadata } from 'next'
import '../styles/globals.css'
import { ThemeProvider } from '@/providers/theme-provider'
import { FlyerProvider } from '@/providers/flyer-context'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
	title: 'Quick Flyer',
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
					<FlyerProvider>{children}</FlyerProvider>
				</ThemeProvider>
			</body>
		</html>
	)
}
