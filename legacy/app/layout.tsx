import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Link from "@/node_modules/next/link";

const inter = Inter({ subsets: ['latin'] })
import  Page from '../app/footer'
import Navber from './navbar/page';
export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div> <Navber/></div>
        <div>{children}</div>
     {/* <div> <Link href="/test">
        <button >home</button>
     </Link></div>
     <div> <Link href="/">
        <button >app</button>
     </Link></div> */}
     <Page/>
     </body>
    </html>
  )
}
