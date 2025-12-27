import { Analytics } from "@vercel/analytics/next"
import { Inter } from "next/font/google"
import "./globals.css"


const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "JupiNext - Where the Next Begins",
  description:
    "Future-ready IT solutions: Web development, mobile apps, cloud services, UI/UX design, blockchain & AI.",
  generator: "v0.app",
  keywords: [
    "IT company",
    "software development",
    "web applications",
    "mobile apps",
    "cloud solutions",
    "UI/UX design",
    "blockchain",
    "AI",
  ],
  icons: {
    icon: [
      {
        url: "/Logo.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/Logo.png",
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

export const viewport = {
  themeColor: "#0ea5a4",
  width: "device-width",
  initialScale: 1,
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        {/* <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" /> */}
      </head>
      <body className={`${inter.className} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
