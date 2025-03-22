import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Aryan Mittal',
  description: 'Created with v0'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true}>
        {children}
      </body>
    </html>
  )
}
