import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Ayush Mandal — Web Developer',
  description: 'Portfolio of Ayush Mandal, Web Developer and Computer Science Graduate from Kota, Rajasthan.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body style={{ fontFamily: "'DM Sans', sans-serif" }}>
        {children}
      </body>
    </html>
  )
}
