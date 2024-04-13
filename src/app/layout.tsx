import './globals.css'
import type { Metadata } from 'next'


export const metadata: Metadata = {
  title: 'H',
  description: 'by Hoyame',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html style={{padding: 0, margin: 0}}>
      <body>
        {children}
      </body>
    </html>
  )
}
