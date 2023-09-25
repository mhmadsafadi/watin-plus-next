import Footer from './components/Footer/Footer'
import Navbar from './components/Navbar/Navbar'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Watin Plus | وتين بلس',
  description: 'شركة وتين بلس للخدمات الرقمية',
}

export default function RootLayout({ children }) {
  return (
    <html dir='rtl'>
      <body className={inter.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
