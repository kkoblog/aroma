import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "アロマ香水アンケート",
  description: "彼の臭いが気になる・・・。そんなあなたに、たった３問のアンケートに答えて、アロマ香水を試してみよう",
  generator: 'v0dev',
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja" className="scroll-smooth">
      <body className={inter.className}>{children}</body>
    </html>
  )
}



import './globals.css'