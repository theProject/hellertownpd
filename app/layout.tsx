import type React from "react"
import "@/app/globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Inter } from "next/font/google"
import { SiteHeader } from "@/components/site-header" // Import the new SiteHeader

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Career Opportunity: Police Officer - Hellertown Borough Police Department",
  description:
    "Join the Hellertown Borough Police Department. Now hiring Full-Time Entry-Level Police Officers in Northampton County, PA. Competitive salary, benefits, and a chance to serve your community.",
  openGraph: {
    title: "Career Opportunity: Police Officer - Hellertown Borough Police Department",
    description:
      "Now hiring Entry-Level Police Officers. Serve your community with integrity and dedication. Apply today!",
    url: "https://your-live-url.vercel.app", // Replace with your actual deployed URL
    siteName: "Hellertown Borough Police Department Careers",
    images: [
      {
        url: "/og-image-hiring.png",
        width: 1000,
        height: 1500,
        alt: "Hellertown Police Now Hiring - The Pride of Pennsylvania",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Career Opportunity: Police Officer - Hellertown Borough Police Department",
    description: "Join the Hellertown PD! Now hiring Entry-Level Police Officers. Make a difference in your community.",
    images: ["/og-image-hiring.png"],
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning className={inter.className}>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon-32x32.png" type="image/png" sizes="32x32" />
        <link rel="icon" href="/favicon-16x16.png" type="image/png" sizes="16x16" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          <SiteHeader /> {/* Add the SiteHeader here */}
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
