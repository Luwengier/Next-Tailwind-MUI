import './globals.css'
import { Inter, Roboto } from 'next/font/google'
import Provider from './Provider'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

const roboto = Roboto({
  subsets: ['latin'],
  display: 'swap',
  weight: ['300', '500', '700'],
  variable: '--font-roboto',
})

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${roboto.className} ${inter.className}`}>
      <body>
        <Provider>{children}</Provider>
      </body>
    </html>
  )
}
