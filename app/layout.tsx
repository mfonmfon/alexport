import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ModalProvider } from "@/contexts/modal-context"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "StudioCraft - Digital Creator Portfolio",
  description: "Portfolio website for a digital creator showcasing projects, skills, and services.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ModalProvider>{children}</ModalProvider>
      </body>
    </html>
  )
}



import './globals.css'