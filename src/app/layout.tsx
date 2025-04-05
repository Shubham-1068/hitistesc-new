import './globals.css'
import { Inter } from 'next/font/google'
import { Metadata } from 'next'
const inter = Inter({ subsets: ['latin'] })
import { Analytics } from '@vercel/analytics/react';
export const metadata: Metadata = {
  title: "ISTE HIT",
  description: "Student Chapter HIT ISTE",
  icons: {
    icon: '../../public/Iste.png',
  },
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        {children}
        <Analytics />
        </body>
    </html>
  )
}
