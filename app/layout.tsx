import type React from "react"
import type { Metadata } from "next"
import { Lexend, Inter } from "next/font/google" // Importamos ambas de Google
import { Analytics } from "@vercel/analytics/next"
import { CartProvider } from "@/lib/cart-context"
import { AuthProvider } from "@/lib/auth-context"
import { Header } from "@/components/header"
import "./globals.css"

// Fuente para títulos
const lexend = Lexend({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["300", "400", "500", "600", "700"],
})

// Fuente para el cuerpo del texto (Reemplaza a localFont para evitar errores de ruta)
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
})

export const metadata: Metadata = {
  title: "Scentluxe - Luxury Perfumes",
  description:
    "Discover exclusive luxury perfumes crafted with the finest ingredients. Shop premium fragrances for men and women.",
  generator: "v0.app",
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark">
      {/* Se agregaron ambas variables de fuente al body */}
      <body className={`${lexend.variable} ${inter.variable} font-sans antialiased`}>
        <AuthProvider>
          <CartProvider>
            <Header />
            <main>{children}</main>
          </CartProvider>
        </AuthProvider>
        <Analytics />
      </body>
    </html>
  )
}