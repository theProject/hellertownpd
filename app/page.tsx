import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Shield, Mail, MapPin, Users, Award, CheckCircle, Calendar, FileText } from "lucide-react"
import Link from "next/link"
import { ThemeToggle } from "@/components/theme-toggle"

export default function JobDescription() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="bg-card border-b border-border shadow-lg">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-6">
              <div className="bg-yellow-500 p-3 rounded-full">
                {" "}
                {/* Updated badge color slightly */}
                <Shield className="h-8 w-8 text-black" /> {/* Ensure icon color contrasts */}
              </div>
              <div>
                <h1 className="text-2xl font-bold text-foreground">Hellertown Borough Police Department</h1>
                <p className="text-muted-foreground">Northampton County, Pennsylvania</p>
                <p className="text-sm text-yellow-400 font-semibold">Incorporated 1812</p>
              </div>
            </div>
            <ThemeToggle />
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        {/* Job Title Section */}
        <div className="text-center mb-8">
          <Badge className="bg-badge text-badge-foreground mb-4 text-lg px-4 py-2 font-bold">NOW HIRING</Badge>
          <h2 className="text-4xl font-bold text-foreground mb-2">3 Full-Time Entry-Level Police Officers</h2>
          <p className="text-xl text-muted-foreground">Join the Hellertown Borough Police Department</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Job Description */}
          <div className="lg:col-span-2 space-y-6">
            <Card className="bg-card border-border">
              <CardHeader>
                <CardTitle className="text-foreground flex items-center gap-2">
                  <Shield className="h-5 w-5 text-blue-400" />
                  Position Overview
                </CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground space-y-4">
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

            <Card className="bg-card border-border">
              <CardHeader>
                <CardTitle className="text-foreground flex items-center gap-2">
                  <Award className="h-5 w-5 text-yellow-400" />
                  What We Offer
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  The Hellertown Borough Police Department provides a highly competitive compensation and benefits
                  package, including:
                </p>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-foreground mb-3">Compensation</h4>
                    <ul className="space-y-2 text-muted-foreground text-sm">
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
                    <h4 className="font-semibold text-foreground mb-3">Time Off & Education</h4>
                    <ul className="space-y-2 text-muted-foreground text-sm">
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

            <Card className="bg-card border-border">
              <CardHeader>
                <CardTitle className="text-foreground flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-green-400" />
                  Minimum Requirements
                </CardTitle>
              </CardHeader>
              <CardContent>
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
                    <span className="block text-sm text-muted-foreground ml-6 mt-1">
                      Candidates currently enrolled in a Pennsylvania Act 120 Academy may apply but must be certified by
                      the time a conditional offer is made.
                    </span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-card border-border">
              <CardHeader>
                <CardTitle className="text-foreground flex items-center gap-2">
                  <FileText className="h-5 w-5 text-blue-400" />
                  Application Process
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-muted-foreground">
                <div className="flex items-start gap-2">
                  <span className="font-semibold text-foreground">Application Fee:</span>
                  <span>$25 (non-refundable) – payable by check, cash, or money order</span>
                </div>

                <div className="flex items-start gap-2">
                  <span className="font-semibold text-foreground">Obtain Applications:</span>
                  <div>
                    <p>In person: Hellertown Borough Municipal Building, 685 Main Street, Hellertown, PA 18055</p>
                    <p>
                      Request via email:{" "}
                      <Link href="mailto:csmith@hellertownpd.org" className="text-blue-400 hover:underline">
                        csmith@hellertownpd.org
                      </Link>
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-2">
                  <span className="font-semibold text-foreground">Deadline to Apply:</span>
                  <div>
                    <p>Friday, July 16, 2025</p> {/* DATE UPDATED */}
                    <p className="text-sm text-muted-foreground">
                      Applications must be submitted in person during normal business hours: 8:00 a.m. – 4:00 p.m.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card border-border">
              <CardHeader>
                <CardTitle className="text-foreground flex items-center gap-2">
                  <Calendar className="h-5 w-5 text-orange-400" />
                  Testing Information
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-muted-foreground">
                <div className="flex items-start gap-2">
                  <span className="font-semibold text-foreground">Date:</span>
                  <span>Saturday, July 19, 2025</span> {/* DATE UPDATED */}
                </div>

                <div className="flex items-start gap-2">
                  <span className="font-semibold text-foreground">Physical Agility Test:</span>
                  <div>
                    <p>Saucon Valley High School Athletic Field, 2100 Polk Valley Rd, Hellertown, PA</p>
                    <p>Start Time: 8:00 a.m.</p>
                    <p className="text-sm text-muted-foreground mt-1">
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

                <div className="flex items-start gap-2">
                  <span className="font-semibold text-foreground">Written Exam:</span>
                  <div>
                    <p>For those who pass physical testing</p>
                    <p>Time: 11:00 a.m.</p>
                    <p>Location: Hellertown Borough Municipal Building</p>
                  </div>
                </div>

                <div className="bg-secondary p-4 rounded-md mt-2">
                  <p className="font-semibold text-foreground">Important Notes:</p>
                  <ul className="mt-2 space-y-1 text-secondary-foreground">
                    <li>• Photo ID Required for test admission</li>
                    <li>
                      • Only applicants who submit completed applications and payment by the deadline will be admitted
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card border-border">
              <CardHeader>
                <CardTitle className="text-foreground flex items-center gap-2">
                  <Users className="h-5 w-5 text-purple-400" />
                  Selection Process
                </CardTitle>
              </CardHeader>
              <CardContent>
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
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <Card className="bg-card border-border">
              <CardHeader>
                <CardTitle className="text-foreground flex items-center gap-2">
                  <Users className="h-5 w-5 text-blue-400" />
                  Contact Information
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-center mb-4">
                  <img
                    src="/images/hellertown-patch-new.png"
                    alt="Hellertown Police Department Patch"
                    className="h-32 w-auto"
                  />
                </div>
                <div className="flex items-center gap-3 text-muted-foreground">
                  <Mail className="h-4 w-4 text-blue-400" />
                  <Link href="mailto:jbaitinger@hellertownpd.org" className="hover:text-blue-400 transition-colors">
                    jbaitinger@hellertownpd.org
                  </Link>
                </div>
                <div className="flex items-center gap-3 text-muted-foreground">
                  <Mail className="h-4 w-4 text-blue-400" />
                  <Link href="mailto:csmith@hellertownpd.org" className="hover:text-blue-400 transition-colors">
                    csmith@hellertownpd.org
                  </Link>
                </div>
                <div className="flex items-center gap-3 text-muted-foreground">
                  <MapPin className="h-4 w-4 text-blue-400" />
                  <span>685 Main Street, Hellertown, PA 18055</span>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card border-border">
              <CardHeader>
                <CardTitle className="text-foreground flex items-center gap-2">
                  <Calendar className="h-5 w-5 text-red-400" />
                  Important Dates
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="border-l-2 border-red-400 pl-3 py-1">
                    <span className="block font-semibold text-foreground">July 16, 2025</span> {/* DATE UPDATED */}
                    <span className="text-sm">Application Deadline</span>
                  </li>
                  <li className="border-l-2 border-red-400 pl-3 py-1">
                    <span className="block font-semibold text-foreground">July 19, 2025 - 8:00 AM</span>{" "}
                    {/* DATE UPDATED */}
                    <span className="text-sm">Physical Agility Test</span>
                  </li>
                  <li className="border-l-2 border-red-400 pl-3 py-1">
                    <span className="block font-semibold text-foreground">July 19, 2025 - 11:00 AM</span>{" "}
                    {/* DATE UPDATED */}
                    <span className="text-sm">Written Examination</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-yellow-600 border-yellow-700">
              {" "}
              {/* Updated to use a more direct yellow */}
              <CardHeader>
                <CardTitle className="text-black">Ready to Apply?</CardTitle> {/* Text black for contrast */}
                <CardDescription className="text-yellow-900">
                  {" "}
                  {/* Darker yellow for description */}
                  Take the next step in your law enforcement career
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <Button className="w-full bg-yellow-500 hover:bg-yellow-400 text-black font-semibold">
                  <a href="mailto:csmith@hellertownpd.org" className="w-full block">
                    Request Application
                  </a>
                </Button>
                <Button
                  variant="outline"
                  className="w-full border-yellow-700 text-yellow-700 hover:bg-yellow-700 hover:text-black"
                >
                  <a href="mailto:jbaitinger@hellertownpd.org" className="w-full block">
                    Request Information
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>

        <Separator className="my-8 bg-border" />

        {/* Footer */}
        <footer className="text-center text-muted-foreground">
          <p className="mb-2">Hellertown Borough Police Department is an Equal Opportunity Employer</p>
          <p className="text-sm">
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
