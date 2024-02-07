import './globals.css'
import { Inter } from 'next/font/google'
import Captionify from "@/components/Captionify";
import Nav from "@/components/Nav";

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Captionify',
  description: 'Generate captions for your videos',
}

export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <body className={inter.className }>
      <main className="px-5 max-w-4xl mx-auto">
      <nav className="flex justify-between items-center  my-7 p-3 ">
        <a href="/" className="flex gap-1">
          <Captionify/>
        <span className=' font-semibold'>
          Captionify
        </span>
        </a>
        <Nav/>
      </nav>

        {children}
      </main>
      </body>
    </html>
  )
}
