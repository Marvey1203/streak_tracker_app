import Navbar from './comps/Navbar'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Streak tracker',
  description: 'Build by Marius Stander',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className='w-3/4 mx-auto'>
          <Navbar/>
          {children}
        </div>
        
      </body>
    </html>
  )
}
