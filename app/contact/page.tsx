import Image from "next/image"
import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Shield,
  AlertTriangle,
  Facebook,
  Twitter,
  Instagram,
  ExternalLink,
  Building,
  Users,
  Calendar,
  Construction,
} from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Contact Us - Hellertown Borough Police Department",
  description:
    "Contact the Hellertown Borough Police Department. Emergency: 911, Non-Emergency: (610) 838-7040. Located at 685 Main Street, Hellertown, PA 18055.",
  openGraph: {
    title: "Contact Us - Hellertown Borough Police Department",
    description:
      "Contact the Hellertown Borough Police Department. Emergency: 911, Non-Emergency: (610) 838-7040. Located at 685 Main Street, Hellertown, PA 18055.",
    url: "https://hellertownpolice.org/contact",
    siteName: "Hellertown Borough Police Department",
    images: [
      {
        url: "https://hellertownpolice.org/api/og",
        width: 1200,
        height: 630,
        alt: "Hellertown Police Department Contact Information",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Us - Hellertown Borough Police Department",
    description: "Contact the Hellertown Borough Police Department. Emergency: 911, Non-Emergency: (610) 838-7040.",
    images: ["https://hellertownpolice.org/api/og"],
  },
}

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header Section */}
        <section className="text-center my-8 sm:my-12">
          <div className="flex justify-center mb-6">
            <Image
              src="/images/hellertown-badge.svg"
              alt="Hellertown Police Department Badge"
              width={96}
              height={96}
              className="h-20 w-20 sm:h-24 sm:w-24"
            />
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-4 tracking-tight">Contact Us</h1>
          <p className="text-xl sm:text-2xl text-muted-foreground mb-6 max-w-3xl mx-auto">
            We're here to serve and protect our community 24/7
          </p>

          {/* Development Notice */}
          <div className="flex items-center justify-center gap-2 mb-8">
            <Construction className="h-4 w-4 text-yellow-500" />
            <p className="text-sm text-muted-foreground italic">
              This page is under development - check back soon for enhanced features
            </p>
          </div>
        </section>

        {/* Emergency Alert */}
        <section className="my-8">
          <Card className="bg-gradient-to-r from-red-50 to-red-100 dark:from-red-900/20 dark:to-red-800/20 border-red-200 dark:border-red-700">
            <CardHeader>
              <div className="flex items-center gap-3">
                <AlertTriangle className="h-8 w-8 text-red-500" />
                <div>
                  <CardTitle className="text-2xl text-foreground">Emergency Services</CardTitle>
                  <CardDescription className="text-lg text-muted-foreground">
                    For immediate assistance in life-threatening situations
                  </CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white font-bold" asChild>
                  <a href="tel:911">
                    <Phone className="mr-2 h-5 w-5" />
                    Call 911 Now
                  </a>
                </Button>
                <p className="text-sm text-muted-foreground flex items-center">
                  <Clock className="mr-2 h-4 w-4" />
                  Available 24 hours a day, 7 days a week
                </p>
              </div>
            </CardContent>
          </Card>
        </section>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Contact Information */}
          <div className="lg:col-span-2 space-y-6">
            {/* Department Contact */}
            <Card className="bg-card shadow-sm hover:shadow-md transition-shadow">
              <CardHeader>
                <CardTitle className="text-foreground flex items-center gap-2 text-xl sm:text-2xl">
                  <Shield className="h-6 w-6 text-blue-400" />
                  Department Contact Information
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  {/* Phone Numbers */}
                  <div className="space-y-4">
                    <h3 className="font-semibold text-foreground text-lg flex items-center gap-2">
                      <Phone className="h-5 w-5 text-blue-500" />
                      Phone Numbers
                    </h3>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between p-3 bg-red-50 dark:bg-red-900/20 rounded-md border border-red-200 dark:border-red-700">
                        <div>
                          <p className="font-semibold text-red-700 dark:text-red-400">Emergency</p>
                          <p className="text-sm text-muted-foreground">Life-threatening situations</p>
                        </div>
                        <a
                          href="tel:911"
                          className="text-2xl font-bold text-red-600 hover:text-red-700 transition-colors"
                        >
                          911
                        </a>
                      </div>
                      <div className="flex items-center justify-between p-3 bg-secondary rounded-md">
                        <div>
                          <p className="font-semibold text-foreground">Non-Emergency</p>
                          <p className="text-sm text-muted-foreground">General inquiries & reports</p>
                        </div>
                        <a
                          href="tel:+16108387040"
                          className="text-lg font-semibold text-blue-600 hover:text-blue-700 transition-colors"
                        >
                          (610) 838-7040
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* Office Hours */}
                  <div className="space-y-4">
                    <h3 className="font-semibold text-foreground text-lg flex items-center gap-2">
                      <Clock className="h-5 w-5 text-green-500" />
                      Office Hours
                    </h3>
                    <div className="space-y-3">
                      <div className="p-3 bg-secondary rounded-md">
                        <p className="font-semibold text-foreground">Administrative Office</p>
                        <p className="text-sm text-muted-foreground">Monday - Friday</p>
                        <p className="text-sm font-medium">8:00 AM - 4:00 PM</p>
                      </div>
                      <div className="p-3 bg-green-50 dark:bg-green-900/20 rounded-md border border-green-200 dark:border-green-700">
                        <p className="font-semibold text-green-700 dark:text-green-400">Emergency Services</p>
                        <p className="text-sm font-medium">24 Hours / 7 Days a Week</p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Key Personnel */}
            <Card className="bg-card shadow-sm hover:shadow-md transition-shadow">
              <CardHeader>
                <CardTitle className="text-foreground flex items-center gap-2 text-xl sm:text-2xl">
                  <Users className="h-6 w-6 text-purple-400" />
                  Key Personnel
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid md:grid-cols-2 gap-6">
                  {/* Chief of Police */}
                  <div className="p-4 bg-secondary rounded-lg">
                    <div className="flex items-start gap-3">
                      <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-full">
                        <Shield className="h-5 w-5 text-blue-600" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-foreground text-lg">James Baitinger</h4>
                        <p className="text-sm text-blue-600 font-medium mb-2">Chief of Police</p>
                        <div className="space-y-2">
                          <a
                            href="mailto:jbaitinger@hellertownpd.org"
                            className="flex items-center gap-2 text-sm text-muted-foreground hover:text-blue-600 transition-colors"
                          >
                            <Mail className="h-4 w-4" />
                            jbaitinger@hellertownpd.org
                          </a>
                          <a
                            href="tel:+16108387040"
                            className="flex items-center gap-2 text-sm text-muted-foreground hover:text-blue-600 transition-colors"
                          >
                            <Phone className="h-4 w-4" />
                            (610) 838-7040
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Executive Secretary */}
                  <div className="p-4 bg-secondary rounded-lg">
                    <div className="flex items-start gap-3">
                      <div className="p-2 bg-green-100 dark:bg-green-900/30 rounded-full">
                        <Building className="h-5 w-5 text-green-600" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-foreground text-lg">Carrie Smith</h4>
                        <p className="text-sm text-green-600 font-medium mb-2">Executive Secretary</p>
                        <div className="space-y-2">
                          <a
                            href="mailto:csmith@hellertownpd.org"
                            className="flex items-center gap-2 text-sm text-muted-foreground hover:text-green-600 transition-colors"
                          >
                            <Mail className="h-4 w-4" />
                            csmith@hellertownpd.org
                          </a>
                          <a
                            href="tel:+16108387040"
                            className="flex items-center gap-2 text-sm text-muted-foreground hover:text-green-600 transition-colors"
                          >
                            <Phone className="h-4 w-4" />
                            (610) 838-7040
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Location & Map */}
            <Card className="bg-card shadow-sm hover:shadow-md transition-shadow">
              <CardHeader>
                <CardTitle className="text-foreground flex items-center gap-2 text-xl sm:text-2xl">
                  <MapPin className="h-6 w-6 text-red-400" />
                  Our Location
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-3 p-4 bg-secondary rounded-lg">
                  <MapPin className="h-5 w-5 text-red-500 mt-1" />
                  <div>
                    <h4 className="font-semibold text-foreground">Hellertown Borough Police Department</h4>
                    <p className="text-muted-foreground">685 Main Street</p>
                    <p className="text-muted-foreground">Hellertown, PA 18055-1745</p>
                    <p className="text-muted-foreground">Northampton County</p>
                  </div>
                </div>

                {/* Map Embed */}
                <div className="relative w-full h-64 sm:h-80 rounded-lg overflow-hidden border border-border shadow-sm">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3048.8234567890123!2d-75.3407!3d40.5834!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c43c1234567890%3A0x1234567890abcdef!2s685%20Main%20St%2C%20Hellertown%2C%20PA%2018055!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Hellertown Police Department Location"
                  />
                </div>

                <div className="flex flex-col sm:flex-row gap-3">
                  <Button variant="outline" asChild>
                    <a
                      href="https://maps.google.com/maps?q=685+Main+St,+Hellertown,+PA+18055-1745"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Open in Google Maps
                    </a>
                  </Button>
                  <Button variant="outline" asChild>
                    <a
                      href="https://maps.apple.com/?q=685+Main+St,+Hellertown,+PA+18055"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Open in Apple Maps
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Quick Actions */}
            <Card className="bg-card shadow-sm hover:shadow-md transition-shadow">
              <CardHeader>
                <CardTitle className="text-foreground flex items-center gap-2 text-xl">
                  <Phone className="h-5 w-5 text-blue-400" />
                  Quick Actions
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold" asChild>
                  <a href="tel:911">
                    <AlertTriangle className="mr-2 h-4 w-4" />
                    Emergency: 911
                  </a>
                </Button>
                <Button variant="outline" className="w-full" asChild>
                  <a href="tel:+16108387040">
                    <Phone className="mr-2 h-4 w-4" />
                    Non-Emergency: (610) 838-7040
                  </a>
                </Button>
                <Button variant="outline" className="w-full" asChild>
                  <a href="mailto:jbaitinger@hellertownpd.org">
                    <Mail className="mr-2 h-4 w-4" />
                    Email Chief Baitinger
                  </a>
                </Button>
                <Button variant="outline" className="w-full" asChild>
                  <a href="mailto:csmith@hellertownpd.org">
                    <Mail className="mr-2 h-4 w-4" />
                    Email Executive Secretary
                  </a>
                </Button>
              </CardContent>
            </Card>

            {/* Social Media */}
            <Card className="bg-card shadow-sm hover:shadow-md transition-shadow">
              <CardHeader>
                <CardTitle className="text-foreground flex items-center gap-2 text-xl">
                  <Users className="h-5 w-5 text-purple-400" />
                  Follow Us
                </CardTitle>
                <CardDescription>Stay connected with our community</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-3 gap-3">
                  <Button variant="outline" size="icon" asChild>
                    <a href="https://www.facebook.com/hellertownpd" target="_blank" rel="noopener noreferrer">
                      <Facebook className="h-5 w-5" />
                      <span className="sr-only">Facebook</span>
                    </a>
                  </Button>
                  <Button variant="outline" size="icon" asChild>
                    <a href="https://twitter.com/hellertownpd" target="_blank" rel="noopener noreferrer">
                      <Twitter className="h-5 w-5" />
                      <span className="sr-only">Twitter</span>
                    </a>
                  </Button>
                  <Button variant="outline" size="icon" asChild>
                    <a href="https://instagram.com/hellertownpd" target="_blank" rel="noopener noreferrer">
                      <Instagram className="h-5 w-5" />
                      <span className="sr-only">Instagram</span>
                    </a>
                  </Button>
                </div>
                <p className="text-sm text-muted-foreground">
                  Follow us for updates, community events, and safety tips.
                </p>
              </CardContent>
            </Card>

            {/* Department Patch */}
            <Card className="bg-card shadow-sm hover:shadow-md transition-shadow">
              <CardContent className="pt-6">
                <div className="text-center">
                  <Image
                    src="/images/hellertown-patch-new.png"
                    alt="Hellertown Police Department Patch"
                    width={160}
                    height={160}
                    className="mx-auto mb-4 rounded-lg shadow-md"
                  />
                  <h3 className="font-semibold text-foreground mb-2">Serving Since 1872</h3>
                  <p className="text-sm text-muted-foreground">
                    Committed to protecting and serving the Hellertown community with integrity and professionalism.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Current Events */}
            <Card className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 border-blue-200 dark:border-blue-700">
              <CardHeader>
                <CardTitle className="text-foreground flex items-center gap-2 text-lg">
                  <Calendar className="h-5 w-5 text-blue-500" />
                  Upcoming Events
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="p-3 bg-white/50 dark:bg-black/20 rounded-md">
                    <p className="font-medium text-foreground text-sm">National Night Out 2025</p>
                    <p className="text-xs text-muted-foreground">August 5th • Dimmick Park</p>
                  </div>
                  <Button variant="outline" size="sm" className="w-full" asChild>
                    <Link href="/events/national-night-out">
                      <Calendar className="mr-2 h-4 w-4" />
                      View All Events
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        <Separator className="my-12" />

        {/* Footer Note */}
        <footer className="text-center text-muted-foreground">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Construction className="h-4 w-4 text-yellow-500" />
            <p className="text-sm italic">
              This contact page is currently under development. Additional features and contact options will be added
              soon.
            </p>
          </div>
          <p className="text-sm">
            For immediate assistance, please call our non-emergency line at{" "}
            <a href="tel:+16108387040" className="text-blue-400 hover:underline font-medium">
              (610) 838-7040
            </a>{" "}
            or email{" "}
            <a href="mailto:jbaitinger@hellertownpd.org" className="text-blue-400 hover:underline font-medium">
              Chief Baitinger
            </a>
          </p>
          <div className="flex justify-center">
                        <Image
                          src="/project.png"
                          alt="theProject Logo"
                          width={300}
                          height={100}
                          className="object-contain"
                        />
                      </div> 
        </footer>
      </main>
    </div>
  )
}
