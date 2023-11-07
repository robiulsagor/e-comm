import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import './globals.css'
import Navbar from './components/nav/Navbar'
import Footer from './components/footer/Footer'
import CartProvider from '@/providers/CartProvider'

const poppins = Poppins({ subsets: ['latin'], weight: ["500"] })

export const metadata: Metadata = {
  title: 'E-comm',
  description: 'Popular E-commerce website',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${poppins.className} text-slate-700`}>
        <CartProvider>
          <div className='flex flex-col'>
            <Navbar />
            <main className='flex-grow'>
              {children}
            </main>
            <Footer />
          </div>
        </CartProvider>
      </body>
    </html>
  )
}
