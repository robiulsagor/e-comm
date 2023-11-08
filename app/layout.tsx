import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import './globals.css'
import Navbar from './components/nav/Navbar'
import Footer from './components/footer/Footer'
import CartProvider from '@/providers/CartProvider'
import { Toaster } from 'react-hot-toast'

const poppins = Poppins({ subsets: ['latin'], weight: ["400"] })

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
          <Toaster toastOptions={{ style: { background: "rgb(51 55 61)", color: "#fff" } }} />
        </CartProvider>
      </body>
    </html>
  )
}
