import Footer from './components/Footer/Footer'
import Navbar from './components/Navbar/Navbar'
import './globals.css'
import { Noto_Kufi_Arabic } from 'next/font/google'

const NotoKufiArabic = Noto_Kufi_Arabic({ subsets: ['arabic'] })

export const metadata = {
  title: 'Watin Plus | وتين بلس',
  description: 'شركة وتين بلس للخدمات الرقمية',
}

export default function RootLayout({ children }) {
  return (
    <html dir='rtl'>
      <body className={NotoKufiArabic.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
