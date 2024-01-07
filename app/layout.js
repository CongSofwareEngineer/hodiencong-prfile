import { Inter } from 'next/font/google'
import '@/styles/global.scss'
import '@/styles/globals.css'
import MuiProvider from '@/components/MuiProvider'
import Container from '@/components/Container'
import RootStyleRegistry from '@/components/StyledComponentsRegistry'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Hồ Diên Công',
  description: 'Hồ Diên Công - Junior Reactjs',
  keywords: [
    'Junior Dev',
    'Hồ Diên Côn',
    'Công Reactjs',
    'Công Junior'
  ],
  openGraph: {
    title: 'Hồ Diên Công ',
    description: 'Hồ Diên Công - Junior Reactjs',
    images: '/favicon.ico',
    siteName: 'Hồ Diên Công ',
    url: 'https://hodiencong.vercel.app'
  },
  url: 'https://hodiencong.vercel.app',
  bookmarks: 'https://hodiencong.vercel.app',
  type: 'website',
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true
    }
  },
  icons: {
    icon: { url: '/favicon.ico' },
    shortcut: { url: '/favicon.ico' },
    apple: { url: '/favicon.ico' }
  },
  manifest: '/manifest.json',
  twitter: {
    title: 'Hồ Diên Công',
    description: 'Hồ Diên Công - Junior Reactjs',
    card: 'summary_large_image',
    images: '/favicon.ico'
  },
  appleWebApp: {
    title: 'Hồ Diên Công'
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
    userScalable: false
  }
}
export const viewport = {

  themeColor: 'white',
  colorScheme: 'white'
}

export default function RootLayout ({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <RootStyleRegistry >
          <MuiProvider>
            <Container >
              {children}
            </Container>
          </MuiProvider>
        </RootStyleRegistry>

      </body>
    </html>
  )
}
