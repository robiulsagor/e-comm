import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import './globals.css'
import Navbar from './components/nav/Navbar'
import Footer from './components/footer/Footer'

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
        <div className='flex flex-col'>
          <Navbar />
          <main className='flex-grow'>
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  )
}
