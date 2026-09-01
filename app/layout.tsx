import type React from "react"
import "@/styles/globals.css"
import { Inter } from "next/font/google"
import type { Metadata } from "next"
import { ThemeProvider } from "@/components/theme-provider"
import { CursorGlow } from "@/components/CursorGlow"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "IEEE-SPERT 2027",
  description:
    "IEEE International Conference on Smart Power, Energy, Renewables, and Transportation — 17-19 May 2027",
  icons: {
    icon: "/favicon.ico",
  },
  generator: "0xmuon",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className={`${inter.className} bg-background`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <CursorGlow />
        </ThemeProvider>
      </body>
    </html>
  )
}
