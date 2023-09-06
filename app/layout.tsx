import "./globals.css"
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter ({
  subsets: ['latin']
}) 

export const metadata: Metadata = {
  title: 'Kelton News',
  description: 'A noticia em primeira mão',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html className={`h-full + ${inter.className}`} lang="pt-br">
      <body className="h-full">
        <div className="flex items-center justify-center bg-header w-full h-1/6">
          <h1 className='text-4xl font-extrabold'>Kelton News</h1>
        </div>
        {children}
      </body>
    </html>
  )
}
