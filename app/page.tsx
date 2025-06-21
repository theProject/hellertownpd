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
} from "lucide-react" // Added Globe
import Link from "next/link"

export default function JobDescription() {
  const applicationPdfUrl =
    "https://68cr1faiqcppjjtf.public.blob.vercel-storage.com/HellertownPDApp-blItVXwcova43GwoovMGNC1ndCdb1s.pdf"

  return (
    <div className="min-h-screen bg-background text-foreground antialiased">
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Job Title Section */}
        <div className="text-center my-8 sm:my-12">
          <Badge className="bg-badge text-badge-foreground mb-4 text-lg sm:text-xl px-4 py-2 font-bold shadow-md">
            NOW HIRING
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-2 tracking-tight">
            3 Full-Time Entry-Level Police Officers
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground">Join the Hellertown Borough Police Department</p>
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
                  The Hellertown Borough Police Department is currently accepting applications for the position of
                  Entry-Level Police Officer. This is a Civil Service position governed by the applicable laws of the
                  Commonwealth of Pennsylvania and Borough of Hellertown.
                </p>
                <p>
                  Take the next step in your law enforcement career and join a department dedicated to service,
                  integrity, and community.
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
                <p className="text-muted-foreground mb-4">To be eligible for this position, applicants must:</p>
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
                      Candidates currently enrolled in a Pennsylvania Act 120 Academy may apply but must be certified by
                      the time a conditional offer is made.
                    </span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-card border-border shadow-sm hover:shadow-md transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="text-foreground flex items-center gap-2 text-xl sm:text-2xl">
                  <FileText className="h-5 w-5 sm:h-6 sm:w-6 text-blue-400" />
                  Application Process
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-muted-foreground text-sm sm:text-base">
                <div className="flex flex-col sm:flex-row sm:items-start gap-1 sm:gap-2">
                  <span className="font-semibold text-foreground shrink-0">Application Fee:</span>
                  <span>$25 (non-refundable) – payable by check, cash, or money order</span>
                </div>

                <div className="flex flex-col sm:flex-row sm:items-start gap-1 sm:gap-2">
                  <span className="font-semibold text-foreground shrink-0">Obtain Applications:</span>
                  <div className="space-y-1">
                    <p>In person: Hellertown Borough Municipal Building, 685 Main Street, Hellertown, PA 18055</p>
                    <p>
                      <a
                        href={applicationPdfUrl}
                        download="Hellertown_PD_Application_Packet.pdf"
                        className="inline-flex items-center gap-1.5 text-blue-400 hover:underline font-semibold"
                      >
                        <Download className="h-4 w-4" />
                        Download Now
                      </a>
                    </p>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row sm:items-start gap-1 sm:gap-2">
                  <span className="font-semibold text-foreground shrink-0">Deadline to Apply:</span>
                  <div>
                    <p className="font-medium">Friday, July 16, 2025</p>
                    <p className="text-xs sm:text-sm text-muted-foreground/80">
                      Applications must be submitted in person during normal business hours: 8:00 a.m. – 4:00 p.m.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card border-border shadow-sm hover:shadow-md transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="text-foreground flex items-center gap-2 text-xl sm:text-2xl">
                  <Calendar className="h-5 w-5 sm:h-6 sm:w-6 text-orange-400" />
                  Testing Information
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-muted-foreground text-sm sm:text-base">
                <div className="flex flex-col sm:flex-row sm:items-start gap-1 sm:gap-2">
                  <span className="font-semibold text-foreground shrink-0">Date:</span>
                  <span className="font-medium">Saturday, July 19, 2025</span>
                </div>

                <div className="flex flex-col sm:flex-row sm:items-start gap-1 sm:gap-2">
                  <span className="font-semibold text-foreground shrink-0">Physical Agility Test:</span>
                  <div>
                    <p>Saucon Valley High School Athletic Field, 2100 Polk Valley Rd, Hellertown, PA</p>
                    <p>Start Time: 8:00 a.m.</p>
                    <p className="text-xs sm:text-sm text-muted-foreground/80 mt-1">
                      Cooper Health-Based MPOETC Standards -
                      <Link
                        href="https://www.pa.gov/agencies/mpoetc/programs/training/basic-police-officer-training/physical-fitness.html"
                        className="text-blue-400 hover:underline ml-1"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        View Standards
                      </Link>
                    </p>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row sm:items-start gap-1 sm:gap-2">
                  <span className="font-semibold text-foreground shrink-0">Written Exam:</span>
                  <div>
                    <p>For those who pass physical testing</p>
                    <p>Time: 11:00 a.m.</p>
                    <p>Location: Hellertown Borough Municipal Building</p>
                  </div>
                </div>

                <div className="bg-secondary p-4 rounded-md mt-4 shadow">
                  <p className="font-semibold text-foreground">Important Notes:</p>
                  <ul className="mt-2 space-y-1 text-secondary-foreground text-xs sm:text-sm">
                    <li>• Photo ID Required for test admission</li>
                    <li>
                      • Only applicants who submit completed applications and payment by the deadline will be admitted
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card border-border shadow-sm hover:shadow-md transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="text-foreground flex items-center gap-2 text-xl sm:text-2xl">
                  <Users className="h-5 w-5 sm:h-6 sm:w-6 text-purple-400" />
                  Selection Process
                </CardTitle>
              </CardHeader>
              <CardContent className="text-sm sm:text-base">
                <p className="text-muted-foreground mb-4">Qualified candidates must successfully complete:</p>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-green-400 mt-1 flex-shrink-0" />
                    Physical Agility Test (Cooper Health-Based MPOETC Standards)
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-green-400 mt-1 flex-shrink-0" />
                    Written Examination
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-green-400 mt-1 flex-shrink-0" />
                    Oral Interview
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-green-400 mt-1 flex-shrink-0" />
                    Polygraph Examination
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-green-400 mt-1 flex-shrink-0" />
                    Psychological Evaluation
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-green-400 mt-1 flex-shrink-0" />
                    Background Investigation
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-green-400 mt-1 flex-shrink-0" />
                    Medical Exam including Drug Screening
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-card border-border shadow-sm hover:shadow-md transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="text-foreground flex items-center gap-2 text-xl sm:text-2xl">
                  <BookOpen className="h-5 w-5 sm:h-6 sm:w-6 text-teal-400" />
                  POST Test Preparation
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-muted-foreground text-sm sm:text-base">
                <p>
                  Familiarize yourself with the official Standard and Associates POST training materials to prepare for
                  the examination by visiting:
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
                  Thorough preparation is a cornerstone of success. Utilize the available study guide and practice exam
                  to sharpen your focus and present your strongest performance.
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

            <Card className="bg-card border-border shadow-sm hover:shadow-md transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="text-foreground flex items-center gap-2 text-xl sm:text-2xl">
                  <Calendar className="h-5 w-5 sm:h-6 sm:w-6 text-red-400" />
                  Important Dates
                </CardTitle>
              </CardHeader>
              <CardContent className="text-sm sm:text-base">
                <ul className="space-y-3 text-muted-foreground">
                  <li className="border-l-2 border-red-500 pl-3 py-1.5">
                    <span className="block font-semibold text-foreground">July 16, 2025</span>
                    <span className="text-xs sm:text-sm">Application Deadline</span>
                  </li>
                  <li className="border-l-2 border-red-500 pl-3 py-1.5">
                    <span className="block font-semibold text-foreground">July 19, 2025 - 8:00 AM</span>
                    <span className="text-xs sm:text-sm">Physical Agility Test</span>
                  </li>
                  <li className="border-l-2 border-red-500 pl-3 py-1.5">
                    <span className="block font-semibold text-foreground">July 19, 2025 - 11:00 AM</span>
                    <span className="text-xs sm:text-sm">Written Examination</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-yellow-600 border-yellow-700 shadow-lg">
              <CardHeader>
                <CardTitle className="text-black text-xl sm:text-2xl">Ready to Apply?</CardTitle>
                <CardDescription className="text-yellow-900 text-sm sm:text-base">
                  Take the next step in your law enforcement career
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button
                  asChild
                  className="w-full bg-yellow-500 hover:bg-yellow-400 text-black font-semibold shadow hover:shadow-md transition-shadow"
                >
                  <a href={applicationPdfUrl} download="Hellertown_PD_Application_Packet.pdf">
                    <Download className="mr-2 h-4 w-4" /> Download Application Packet
                  </a>
                </Button>
                <Button
                  variant="outline"
                  className="w-full border-yellow-700 text-yellow-100 hover:bg-yellow-700 hover:text-black font-semibold shadow hover:shadow-md transition-shadow"
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
            <a
              href={applicationPdfUrl}
              download="Hellertown_PD_Application_Packet.pdf"
              className="inline-flex items-center gap-1.5 text-blue-400 hover:underline font-semibold"
            >
              <Download className="h-4 w-4" />
              Download Employment Application Packet
            </a>
          </p>
          <p className="mb-2">Hellertown Borough Police Department is an Equal Opportunity Employer</p>
          <p>
            For questions about this position, contact{" "}
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
