import type React from "react"
import "./globals.css"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Jonli Vebinar - Dangasalikdan halos bo’lishning 3 ta yo’li",
  description: "2,3,4-sentabr, soat 20:00 da bo'lib o'tadigan jonli vebinar",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="uz">
      <body className="antialiased">{children}</body>
    </html>
  )
}