import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import {
  Shield,
  Mail,
  MapPin,
  Users,
  Award,
  CheckCircle,
  Calendar,
  FileText,
  Download,
  BookOpen,
  Globe,
  ClipboardList, // New Icon
} from "lucide-react"
import Link from "next/link"

//meta
export const metadata = {
  title: "Careers – Hellertown Borough Police Department",
  description:
    "Learn about a career with the Hellertown Borough Police Department. Find information on requirements, benefits, and how to prepare for our next testing cycle.",
  openGraph: {
    title: "Careers – Hellertown Police Department",
    description: "Prepare for a future career in law enforcement with the Hellertown Borough Police Department.",
    url: "https://hellertownpolice.org/jobs",
    siteName: "Hellertown Borough Police Department",
    images: [
      {
        url: "https://hellertownpolice.org/og-image-hiring.png", // Place this image in /public/og/
        width: 1200,
        height: 630,
        alt: "Hellertown PD Recruitment",
        type: "image/png",
      },
    ],
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Join the Hellertown Police Department – Prepare for Our Next Opening",
    description: "Find out what it takes to become a Hellertown Borough Police Officer and prepare for a rewarding career.",
    images: ["https://hellertownpolice.org/og-image-hiring.png"],
    creator: "@hellertownpd",
    site: "@hellertownpd",
  },
  alternates: {
    canonical: "https://hellertownpolice.org/jobs",
  },
}

export default function JobDescription() {
  const applicationPdfUrl =
    "https://68cr1faiqcppjjtf.public.blob.vercel-storage.com/HellertownPDApp-blItVXwcova43GwoovMGNC1ndCdb1s.pdf"

  return (
    <div className="min-h-screen bg-background text-foreground antialiased">
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Page Title Section */}
        <div className="text-center my-8 sm:my-12">
          <Badge className="bg-badge text-badge-foreground mb-4 text-lg sm:text-xl px-4 py-2 font-bold shadow-md">
            FUTURE CAREER OPPORTUNITIES
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-2 tracking-tight">
            BE READY Police Officers!
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground">Get ready to join the Hellertown Borough Police Department</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Job Description */}
          <div className="lg:col-span-2 space-y-6">
            <Card className="bg-card border-border shadow-sm hover:shadow-md transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="text-foreground flex items-center gap-2 text-xl sm:text-2xl">
                  <Shield className="h-5 w-5 sm:h-6 sm:w-6 text-blue-400" />
                  Position Overview
                </CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground space-y-4 text-sm sm:text-base">
                <p>
                  The Hellertown Borough Police Department periodically accepts applications for the position of
                  Entry-Level Police Officer. This is a Civil Service position governed by the applicable laws of the
                  Commonwealth of Pennsylvania and Borough of Hellertown.
                </p>
                <p>
                  While we are not actively testing at this time, we encourage prospective candidates to review the
                  requirements and prepare for our next hiring process. Take the first step toward a rewarding law
                  enforcement career and join a department dedicated to service, integrity, and community.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card border-border shadow-sm hover:shadow-md transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="text-foreground flex items-center gap-2 text-xl sm:text-2xl">
                  <Award className="h-5 w-5 sm:h-6 sm:w-6 text-yellow-400" />
                  What We Offer
                </CardTitle>
              </CardHeader>
              <CardContent className="text-sm sm:text-base">
                <p className="text-muted-foreground mb-4">
                  The Hellertown Borough Police Department provides a highly competitive compensation and benefits
                  package, including:
                </p>
                <div className="grid md:grid-cols-2 gap-x-6 gap-y-4">
                  <div>
                    <h4 className="font-semibold text-foreground mb-2 text-base sm:text-lg">Compensation</h4>
                    <ul className="space-y-1.5 text-muted-foreground text-xs sm:text-sm">
                      <li>• Starting Base Salary (2025): $60,620.39 (per current police contract)</li>
                      <li>• Senior Officer: $86,600.55 (per current contract)</li>
                      <li>• Excellent Health Benefits</li>
                      <li>• Pension Plan</li>
                      <li>• Deferred Retirement Option Program (DROP) - 5 years</li>
                      <li>• 457 Deferred Compensation Plan - optional</li>
                      <li>• Shift Differential Pay</li>
                      <li>• Yearly Longevity - after 5 years of service</li>
                      <li>• Senior Officer Shift Pay</li>
                      <li>• Uniform Allowance: $1,250 per year</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-2 text-base sm:text-lg">Time Off & Education</h4>
                    <ul className="space-y-1.5 text-muted-foreground text-xs sm:text-sm">
                      <li>• 11 Paid Holidays (paid whether worked or not)</li>
                      <li>• Paid Sick leave - 78 hours (80% buy back at years end)</li>
                      <li>• Catastrophic Leave - yearly 78 hours added to bank maximum of 1,240 hours</li>
                      <li>• Paid Personal Days: 60 hours annually</li>
                      <li>
                        • Vacation Time:
                        <ul className="pl-4 pt-1 space-y-1">
                          <li>- After 1 year – 96 hours</li>
                          <li>- After 5 years – 144 hours</li>
                          <li>- After 10 years – 168 hours</li>
                          <li>- After 15 years – 192 hours</li>
                          <li>- After 20 years – 240 hours</li>
                        </ul>
                      </li>
                      <li>
                        • Educational Incentives:
                        <ul className="pl-4 pt-1 space-y-1">
                          <li>- Associate's degree – $400</li>
                          <li>- Bachelor's Degree – $800</li>
                          <li>- Master's Degree – $1,200</li>
                        </ul>
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card border-border shadow-sm hover:shadow-md transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="text-foreground flex items-center gap-2 text-xl sm:text-2xl">
                  <CheckCircle className="h-5 w-5 sm:h-6 sm:w-6 text-green-400" />
                  Minimum Requirements
                </CardTitle>
              </CardHeader>
              <CardContent className="text-sm sm:text-base">
                <p className="text-muted-foreground mb-4">
                  To be eligible for future consideration, applicants must meet the following criteria:
                </p>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-green-400 mt-1 flex-shrink-0" />
                    Be a U.S. citizen
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-green-400 mt-1 flex-shrink-0" />
                    Be 21 years of age or older
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-green-400 mt-1 flex-shrink-0" />
                    Possess a high school diploma or GED
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-green-400 mt-1 flex-shrink-0" />
                    Hold a valid Pennsylvania driver's license
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-green-400 mt-1 flex-shrink-0" />
                    Be ACT 120 Certified (MPOETC Certification)
                    <span className="block text-xs sm:text-sm text-muted-foreground/80 ml-6 mt-1">
                      Candidates must be certified by the time a conditional offer of employment is made.
                    </span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-card border-border shadow-sm hover:shadow-md transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="text-foreground flex items-center gap-2 text-xl sm:text-2xl">
                  <Users className="h-5 w-5 sm:h-6 sm:w-6 text-purple-400" />
                  Our Selection Process
                </CardTitle>
              </CardHeader>
              <CardContent className="text-sm sm:text-base">
                <p className="text-muted-foreground mb-4">
                  Our comprehensive selection process is designed to identify the most qualified candidates. The
                  process typically includes the following stages:
                </p>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <ClipboardList className="h-4 w-4 text-purple-400 mt-1 flex-shrink-0" />
                    Physical Agility Test (Cooper Health-Based MPOETC Standards)
                  </li>
                  <li className="flex items-start gap-2">
                    <ClipboardList className="h-4 w-4 text-purple-400 mt-1 flex-shrink-0" />
                    Written Examination
                  </li>
                  <li className="flex items-start gap-2">
                    <ClipboardList className="h-4 w-4 text-purple-400 mt-1 flex-shrink-0" />
                    Oral Interview
                  </li>
                  <li className="flex items-start gap-2">
                    <ClipboardList className="h-4 w-4 text-purple-400 mt-1 flex-shrink-0" />
                    Polygraph Examination
                  </li>
                  <li className="flex items-start gap-2">
                    <ClipboardList className="h-4 w-4 text-purple-400 mt-1 flex-shrink-0" />
                    Psychological Evaluation
                  </li>
                  <li className="flex items-start gap-2">
                    <ClipboardList className="h-4 w-4 text-purple-400 mt-1 flex-shrink-0" />
                    Background Investigation
                  </li>
                  <li className="flex items-start gap-2">
                    <ClipboardList className="h-4 w-4 text-purple-400 mt-1 flex-shrink-0" />
                    Medical Exam including Drug Screening
                  </li>
                </ul>
                <p className="text-xs text-muted-foreground/80 italic pt-4">
                  Our most recent testing period has concluded. Announcements for future testing will be posted here.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card border-border shadow-sm hover:shadow-md transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="text-foreground flex items-center gap-2 text-xl sm:text-2xl">
                  <BookOpen className="h-5 w-5 sm:h-6 sm:w-6 text-teal-400" />
                  Prepare for the Written Exam
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-muted-foreground text-sm sm:text-base">
                <p>
                  To prepare for the written examination (POST), we recommend familiarizing yourself with the official
                  Standard and Associates training materials:
                </p>
                <Link
                  href="https://www.applytoserve.com/Study/"
                  className="text-blue-400 hover:underline font-medium inline-flex items-center gap-2 break-all"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Globe className="h-4 w-4" />
                  https://www.applytoserve.com/Study/
                </Link>
                <p className="text-xs text-muted-foreground/80 italic pt-2">
                  Thorough preparation is a cornerstone of success. Utilize the available study guide and practice
                  exam to sharpen your focus and present your strongest performance when the next opportunity arises.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <Card className="bg-card border-border shadow-sm hover:shadow-md transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="text-foreground flex items-center gap-2 text-xl sm:text-2xl">
                  <Users className="h-5 w-5 sm:h-6 sm:w-6 text-blue-400" />
                  Contact Information
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-sm sm:text-base">
                <div className="flex justify-center mb-4">
                  <img
                    src="/images/hellertown-patch-new.png"
                    alt="Hellertown Police Department Patch"
                    className="h-28 sm:h-32 w-auto shadow-md rounded-md"
                  />
                </div>
                <div className="flex items-start gap-3">
                  <Mail className="h-4 w-4 text-blue-400 mt-1 shrink-0" />
                  <div>
                    <span className="font-semibold text-foreground">Chief of Police</span>
                    <Link
                      href="mailto:jbaitinger@hellertownpd.org"
                      className="block text-blue-400 hover:underline break-all"
                    >
                      jbaitinger@hellertownpd.org
                    </Link>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Mail className="h-4 w-4 text-blue-400 mt-1 shrink-0" />
                  <div>
                    <span className="font-semibold text-foreground">Executive Secretary</span>
                    <Link
                      href="mailto:csmith@hellertownpd.org"
                      className="block text-blue-400 hover:underline break-all"
                    >
                      csmith@hellertownpd.org
                    </Link>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin className="h-4 w-4 text-blue-400 mt-1 shrink-0" />
                  <span className="text-muted-foreground">685 Main Street, Hellertown, PA 18055</span>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-yellow-600 border-yellow-700 shadow-lg">
              <CardHeader>
                <CardTitle className="text-black text-xl sm:text-2xl">Prepare for the Future</CardTitle>
                <CardDescription className="text-yellow-900 text-sm sm:text-base">
                  Get ready for the next step in your law enforcement career.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button
                  asChild
                  className="w-full bg-yellow-500 hover:bg-yellow-400 text-black font-semibold shadow hover:shadow-md transition-shadow"
                >
                  <a href={applicationPdfUrl} download="Hellertown_PD_Sample_Application.pdf">
                    <Download className="mr-2 h-4 w-4" /> Review a Sample Application
                  </a>
                </Button>
                <Button
                  variant="outline"
                  className="w-full border-yellow-700 text-black-100 hover:bg-yellow-700 hover:text-black font-semibold shadow hover:shadow-md transition-shadow"
                  asChild
                >
                  <a href="mailto:jbaitinger@hellertownpd.org">
                    <Mail className="mr-2 h-4 w-4" /> Request Information
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>

        <Separator className="my-10 sm:my-12 bg-border" />

        <footer className="text-center text-muted-foreground text-xs sm:text-sm">
          <p className="mb-2">
            The link below is for informational purposes only. Applications are not being accepted at this time.
          </p>
          <p className="mb-2">
            <a
              href={applicationPdfUrl}
              download="Hellertown_PD_Sample_Application.pdf"
              className="inline-flex items-center gap-1.5 text-blue-400 hover:underline font-semibold"
            >
              <Download className="h-4 w-4" />
              Download Sample Application Packet
            </a>
          </p>
          <p className="mb-2">Hellertown Borough Police Department is an Equal Opportunity Employer</p>
          <p>
            For questions about a career with our department, contact{" "}
            <Link
              href="mailto:jbaitinger@hellertownpd.org"
              className="text-blue-400 hover:text-blue-300 transition-colors"
            >
              jbaitinger@hellertownpd.org
            </Link>
          </p>
        </footer>
      </main>
    </div>
  )
}