import { Inter } from 'next/font/google'
import '@/styles/global.scss'
import './globals.css'
import MuiProvider from '@/components/MuiProvider'
import Container from '@/components/Container'
import RootStyleRegistry from '@/components/StyledComponentsRegistry'
import 'react-vertical-timeline-component/style.min.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Hồ Diên Công - Junior Dev',
  description: 'Hồ Diên Công - Junior Reactjs'
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
