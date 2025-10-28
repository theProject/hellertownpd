import type React from "react"
import { Suspense } from "react"
import "@/app/globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Inter } from "next/font/google"
//import { SiteHeader } from "@/components/site-header"
import { Analytics } from "@vercel/analytics/next"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Hellertown Borough Police Department - Serving Our Community Since 1872",
  description:
    "Official website of the Hellertown Borough Police Department in Northampton County, PA. Now hiring 3 Full-Time Entry-Level Police Officers. Learn about our services, community programs, and career opportunities.",
  keywords:
    "Hellertown Police, Police Department, Law Enforcement, Pennsylvania, Northampton County, Police Jobs, Community Policing, Emergency Services",
  authors: [{ name: "Hellertown Borough Police Department" }],
  creator: "Hellertown Borough Police Department",
  publisher: "Hellertown Borough Police Department",
  robots: "index, follow",
  openGraph: {
    title: "Hellertown Borough Police Department - Serving Our Community Since 1872",
    description:
      "Official website of the Hellertown Borough Police Department. Now hiring 3 Full-Time Entry-Level Police Officers. Competitive salary, benefits, and a chance to serve your community.",
    url: "https://hellertownpolice.org",
    siteName: "Hellertown Borough Police Department",
    images: [
      {
        url: "https://hellertownpolice.org/images/hellertownstandard.png",
        width: 1200,
        height: 630,
        alt: "Hellertown Borough Police Department - Community • Safety • Service",
        type: "image/png",
      },
      {
        url: "https://hellertownpolice.org/images/halloweenhpd.png",
        width: 1200,
        height: 630,
        alt: "Hellertown Police - Halloween Patrol & Safety Tips",
        type: "image/png",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hellertown Borough Police Department - Serving Our Community Since 1872",
    description:
      "Official website of the Hellertown Borough Police Department. Now hiring 3 Full-Time Entry-Level Police Officers.",
    images: [
      "https://hellertownpolice.org/images/hellertownstandard.png",
      "https://hellertownpolice.org/images/halloweenhpd.png",
    ],
    creator: "@theProjectDev",
    site: "@hellertownpd",
  },
  alternates: {
    canonical: "https://hellertownpolice.org",
  },
  other: {
    "msapplication-TileColor": "#1e3a8a",
    "theme-color": "#1e3a8a",
  },
  generator: "v0.dev",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning className={inter.className}>
      <head>
        {/* Google tag Analytics(gtag.js) */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-V25BP4Z4GM"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
      window.dataLayer = window.dataLayer || [];
      function gtag(){window.dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-V25BP4Z4GM');
    `,
          }}
        />

        {/* Favicons and App Icons */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon-32x32.png" type="image/png" sizes="32x32" />
        <link rel="icon" href="/favicon-16x16.png" type="image/png" sizes="16x16" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />

        {/* Additional Meta Tags */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="geo.region" content="US-PA" />
        <meta name="geo.placename" content="Hellertown, Pennsylvania" />
        <meta name="geo.position" content="40.5834;-75.3407" />
        <meta name="ICBM" content="40.5834, -75.3407" />

        {/* Organization Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "GovernmentOrganization",
              name: "Hellertown Borough Police Department",
              alternateName: "Hellertown Police",
              url: "https://hellertownpolice.org",
              logo: "https://hellertownpolice.org/images/hellertown-badge.svg",
              image: "https://hellertownpolice.org/images/hellertownstandard.png",
              description:
                "Official website of the Hellertown Borough Police Department serving Northampton County, Pennsylvania since 1872.",
              address: {
                "@type": "PostalAddress",
                streetAddress: "685 Main Street",
                addressLocality: "Hellertown",
                addressRegion: "PA",
                postalCode: "18055",
                addressCountry: "US",
              },
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+1-610-330-2200",
                contactType: "customer service",
                availableLanguage: "English",
              },
              sameAs: [
                "https://www.facebook.com/hellertownpd",
                "https://twitter.com/hellertownpd",
                "https://instagram.com/hellertownpd",
              ],
              foundingDate: "1872",
              areaServed: {
                "@type": "Place",
                name: "Hellertown Borough, Pennsylvania",
              },
            }),
          }}
        />
      </head>
      <body>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          <Suspense fallback={null}>

            <hAnalytics />
            {children}
          </Suspense>
        </ThemeProvider>
      </body>
    </html>
  )
}
