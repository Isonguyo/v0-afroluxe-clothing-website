import type React from "react"
import type { Metadata } from "next"
import { Playfair_Display, Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
})
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Afroluxe Clothing | Luxury African Fashion",
  description:
    "Experience the elegance of contemporary African luxury fashion. Bespoke designs celebrating heritage and sophistication.",
  generator: "v0.app",
  icons: {
    icon: [
      {
        url: "/cloth-logo(1).jfif",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/cloth-logo(1).jfif",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/cloth-logo(1).jfif",
        type: "image/svg+xml",
      },
    ],
    apple: "/cloth-logo(1).jfif",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <body className="font-serif antialiased">
        <Navbar />
        {children}
        <Footer />
        <Analytics />
      </body>
    </html>
  )
}
