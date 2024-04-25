import type {Metadata} from 'next'
import {Inter} from 'next/font/google'
import './globals.css'
import {ClerkProvider} from '@clerk/nextjs'
import {cn} from '@/lib/utils'

const inter = Inter({subsets: ['latin']})

export const metadata: Metadata = {
  title: 'Meet',
  description: 'A web app for Video Calls.',
  icons: {
    icon: ['/images/logo.png'],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <ClerkProvider
      appearance={{
        variables: {
          colorPrimary: '#161925',
        },
      }}>
      <html lang="en">
        <body className={cn(inter.className, 'bg-blue-2')}>{children}</body>
      </html>
    </ClerkProvider>
  )
}
