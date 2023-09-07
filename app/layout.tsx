import "./globals.css"
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Image from "next/image"
import KeltonNewsImage from '../public/Kelton_News.png'
import KeltonNewsAssImage from "../public/Kelton_News_ass.png"
import { useEffect } from "react"

const inter = Inter ({
  subsets: ['latin']
}) 

export const metadata: Metadata = {
  title: 'Kelton News - O maior portal de notícias de kelton',
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
        <header className="flex items-center justify-center bg-header w-full h-1/6">
          <div className="w-1/2 md:w-1/3 lg:w-1/3 cursor-pointer"><Image src={KeltonNewsImage} alt="Kelton_News"/></div>
        </header>
          {children}
        <footer className="flex flex-col bg-header w-full h-1/5 mt-10">
          <div className="w-full h-1/2 flex justify-start items-center pl-4 lg:pt-4 2xl:pt-8 cursor-pointer">
            <Image alt="Kelton News Assinatura" src={KeltonNewsAssImage} className="w-3/4 sm:w-1/3 lg:w-1/5"/>
          </div>

          <div className="w-full h-1/2 pb-4 flex justify-center lg:justify-between text-base lg:pl-4">
            <div className="flex justify-center lg:justify-start items-end">
              <p className="text-font-white block font-thin">© Copyright 2080-2084 Kelton News</p>
            </div>
            <div className="lg:flex justify-start items-end pr-4 w-1/2 hidden">
              <div className="flex justify-evenly items-center w-full text-center lg:text-base font-thin">
                <p className="text-font-white block whitespace-nowrap cursor-pointer hover:underline">contato</p>
                <p className="text-font-white block whitespace-nowrap cursor-pointer hover:underline">anuncie conosco</p>
                <p className="text-font-white block whitespace-nowrap cursor-pointer hover:underline">política de privacidade</p>
              </div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  )
}
