import Image from "next/image"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Progress } from "@/components/ui/progress"
import { CheckCircle } from "lucide-react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import {
  Shield,
  Calendar,
  Users,
  TrendingDown,
  Clock,
  MapPin,
  Phone,
  Mail,
  Facebook,
  Twitter,
  Instagram,
  AlertTriangle,
  Car,
  Home,
  Heart,
  Award,
  FileText,
  Download,
  Activity,
  BarChart3,
  Star,
  Quote,
} from "lucide-react"
import { WeatherWidget } from "@/components/weather-widget"
import { TrafficWidget } from "@/components/traffic-widget"
import { LocalPoliceNewsWidget } from "@/components/LocalPoliceNewsWidget"

const communityReviews = [
  {
    name: "Sarah M.",
    rating: 5,
    text: "The Hellertown Police Department has always been professional and responsive. They truly care about our community's safety and well-being.",
    date: "2 weeks ago",
  },
  {
    name: "Mike R.",
    rating: 5,
    text: "Outstanding service! The officers are courteous, professional, and always willing to help. They make our neighborhood feel safe.",
    date: "1 month ago",
  },
  {
    name: "Jennifer L.",
    rating: 4,
    text: "Great community policing efforts. The officers are visible in the community and build positive relationships with residents.",
    date: "3 weeks ago",
  },
  {
    name: "Robert K.",
    rating: 5,
    text: "Quick response time and professional handling of a situation at my business. Very impressed with their dedication to service.",
    date: "2 months ago",
  },
  {
    name: "Lisa T.",
    rating: 5,
    text: "The department does an excellent job with community events. National Night Out was fantastic! Great way to connect with our officers.",
    date: "1 month ago",
  },
]

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Hero Section */}
        <section className="text-center my-8 sm:my-12">
          <div className="flex justify-center mb-6">
            <Image
              src="/images/hellertown-badge.svg"
              alt="Hellertown Police Department Badge"
              width={120}
              height={120}
              className="h-24 w-24 sm:h-32 sm:w-32"
            />
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-4 tracking-tight">
            Hellertown Police Department
          </h1>
          <p className="text-xl sm:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Serving our community with integrity, dedication, and professionalism since 1872
          </p>
          <div className="text-center mb-8">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-3 flex items-center justify-center gap-3">
              <Activity className="h-8 w-8 text-primary" />
              Community Cards
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Stay informed with real-time updates on weather, traffic, and local Hellertown Police news in the Hellertown area
            </p>
          </div>

          {/* Community Information Widgets */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-8 max-w-6xl mx-auto">
            <WeatherWidget />
            <TrafficWidget />
            <LocalPoliceNewsWidget />
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90">
              <Link href="/jobs">
                <Shield className="mr-2 h-5 w-5" />
                Join Our Team
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/contact">
                <Phone className="mr-2 h-5 w-5" />
                Contact Us
              </Link>
            </Button>
          </div>
        </section>

        <Separator className="my-12" />

        {/* Application Status Update Card */}
<section className="my-12">
  <Card className="bg-gradient-to-r from-blue-50 to-sky-100 dark:from-blue-900/30 dark:to-sky-800/30 border-blue-200 dark:border-sky-700">
    <CardHeader>
      <div className="flex items-center gap-3">
        {/* Updated the badge to reflect the new status */}
        <Badge className="bg-badge text-badge-foreground text-sm font-bold">UPDATE</Badge>
        <CardTitle className="text-2xl sm:text-3xl text-foreground">
          Thank You, Applicants!
        </CardTitle>
      </div>
      <CardDescription className="text-lg text-muted-foreground">
        The application period for our recent openings has now concluded.
      </CardDescription>
    </CardHeader>
    <CardContent className="space-y-4 text-center pt-4">
        {/* Replaced the detailed grid with the new message */}
        <div className="flex justify-center">
            <CheckCircle className="h-12 w-12 text-green-500" />
        </div>
        <p className="text-lg text-foreground">
            A sincere thank you to all of the dedicated individuals who applied. 
        </p>
        <p className="text-muted-foreground">
            We look forward to offering new positions as they become available in the future. 
            Please look for news soon regarding our new recruits!
        </p>
    </CardContent>
  </Card>
</section>

        {/* Current Job Opening Alert 
        <section className="my-12">
          <Card className="bg-gradient-to-r from-yellow-50 to-yellow-100 dark:from-yellow-900/20 dark:to-yellow-800/20 border-yellow-200 dark:border-yellow-700">
            <CardHeader>
              <div className="flex items-center gap-3">
                <Badge className="bg-badge text-badge-foreground text-sm font-bold">NOW HIRING</Badge>
                <CardTitle className="text-2xl sm:text-3xl text-foreground">
                  Police Officer Positions Available
                </CardTitle>
              </div>
              <CardDescription className="text-lg text-muted-foreground">
                We're seeking 3 dedicated individuals to join our law enforcement team
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                    <Calendar className="h-4 w-4 text-red-500" />
                    Important Deadlines
                  </h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>
                      • Application Deadline:{" "}
                      <span className="font-semibold text-red-600 dark:text-red-400">July 16, 2025</span>
                    </li>
                    <li>• Physical Agility Test: July 19, 2025 at 8:00 AM</li>
                    <li>• Written Examination: July 19, 2025 at 11:00 AM</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                    <Award className="h-4 w-4 text-green-500" />
                    What We Offer
                  </h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Starting Salary: $60,620.39</li>
                    <li>• Comprehensive Benefits Package</li>
                    <li>• Pension Plan & Educational Incentives</li>
                  </ul>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-3 pt-4">
                <Button asChild className="bg-primary hover:bg-primary/90">
                  <Link href="/jobs">
                    <FileText className="mr-2 h-4 w-4" />
                    View Full Job Description
                  </Link>
                </Button>
                <Button asChild variant="outline">
                  <a
                    href="https://68cr1faiqcppjjtf.public.blob.vercel-storage.com/HellertownPDApp-blItVXwcova43GwoovMGNC1ndCdb1s.pdf"
                    download
                  >
                    <Download className="mr-2 h-4 w-4" />
                    Download Application
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </section> */}

        {/* National Night Out Section */}
        <section className="my-12">
          <Card className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 border-blue-200 dark:border-blue-700">
            <CardHeader>
              <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
                <div className="flex-shrink-0">
                  <Image
                    src="/images/nno-logo-white-bg.png"
                    alt="National Night Out 2025"
                    width={120}
                    height={120}
                    className="h-20 w-20 sm:h-24 sm:w-24 rounded-lg shadow-md"
                  />
                </div>
                <div className="flex-1">
                  <CardTitle className="text-2xl sm:text-3xl text-foreground mb-2">National Night Out 2025</CardTitle>
                  <CardDescription className="text-lg text-muted-foreground">
                    Join us for an evening of community fun and police-community partnerships
                  </CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid md:grid-cols-3 gap-4">
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4 text-blue-500" />
                  <span className="text-sm font-medium">Tuesday, August 5th</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4 text-green-500" />
                  <span className="text-sm font-medium">5:00 PM - 8:00 PM</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-red-500" />
                  <span className="text-sm font-medium">Dimmick Park</span>
                </div>
              </div>
              <p className="text-muted-foreground">
                Meet Disney's Elsa, enjoy live music from The Main Street Sound, games, prizes, and so much more! This
                annual event strengthens the bond between our police department and the community we serve.
              </p>
              <Button asChild variant="outline">
                <Link href="/events/national-night-out">
                  <Users className="mr-2 h-4 w-4" />
                  Learn More & RSVP
                </Link>
              </Button>
            </CardContent>
          </Card>
        </section>

        {/* Community Reviews Section */}
        <section className="my-12">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-foreground mb-4 flex items-center justify-center gap-3">
              <Heart className="h-8 w-8 text-red-500" />
              What Our Community Says
            </h2>
            <div className="flex items-center justify-center gap-2 mb-4">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <span className="text-lg font-semibold text-foreground">4.8/5</span>
              <span className="text-muted-foreground">• Based on community feedback</span>
            </div>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Read what members of our community have to say about the Hellertown Police Department's service and
              dedication.
            </p>
          </div>

          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full max-w-5xl mx-auto"
          >
            <CarouselContent>
              {communityReviews.map((review, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <div className="p-1">
                    <Card className="bg-card shadow-sm hover:shadow-md transition-shadow h-full">
                      <CardHeader className="pb-3">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-1">
                            {[...Array(review.rating)].map((_, i) => (
                              <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                            ))}
                          </div>
                          <Quote className="h-4 w-4 text-muted-foreground" />
                        </div>
                      </CardHeader>
                      <CardContent className="pt-0">
                        <p className="text-muted-foreground text-sm mb-4 leading-relaxed">"{review.text}"</p>
                        <div className="flex items-center justify-between">
                          <span className="font-medium text-foreground text-sm">{review.name}</span>
                          <span className="text-xs text-muted-foreground">{review.date}</span>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="ml-12 sm:ml-16" />
            <CarouselNext className="mr-12 sm:mr-16" />
          </Carousel>

          <div className="text-center mt-6">
            <Button asChild variant="outline">
              <a
                href="https://www.facebook.com/hellertownpd"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2"
              >
                <Facebook className="h-4 w-4" />
                Read More Reviews on Facebook
              </a>
            </Button>
          </div>
        </section>

        {/* Department Statistics */}
        <section className="my-12">
          <h2 className="text-3xl font-bold text-center mb-8 text-foreground flex items-center justify-center gap-3">
            <BarChart3 className="h-8 w-8 text-primary" />
            Department Statistics
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="bg-card shadow-sm hover:shadow-md transition-shadow">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Response Time</CardTitle>
                <Activity className="h-4 w-4 text-green-500" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-green-600">4.2 min</div>
                <p className="text-xs text-muted-foreground">Average emergency response</p>
                <Progress value={85} className="mt-2" />
              </CardContent>
            </Card>

            <Card className="bg-card shadow-sm hover:shadow-md transition-shadow">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Crime Rate</CardTitle>
                <TrendingDown className="h-4 w-4 text-green-500" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-green-600">-12%</div>
                <p className="text-xs text-muted-foreground">Decrease from last year</p>
                <Progress value={88} className="mt-2" />
              </CardContent>
            </Card>

            <Card className="bg-card shadow-sm hover:shadow-md transition-shadow">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Community Events</CardTitle>
                <Users className="h-4 w-4 text-blue-500" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-blue-600">24</div>
                <p className="text-xs text-muted-foreground">Events hosted this year</p>
                <Progress value={75} className="mt-2" />
              </CardContent>
            </Card>

            <Card className="bg-card shadow-sm hover:shadow-md transition-shadow">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Officer Training</CardTitle>
                <Award className="h-4 w-4 text-purple-500" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-purple-600">480</div>
                <p className="text-xs text-muted-foreground">Hours completed this year</p>
                <Progress value={92} className="mt-2" />
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Services Grid */}
        <section className="my-12">
          <h2 className="text-3xl font-bold text-center mb-8 text-foreground">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="bg-card shadow-sm hover:shadow-md transition-shadow">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <AlertTriangle className="h-8 w-8 text-red-500" />
                  <CardTitle className="text-lg">Emergency Response</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm">
                  24/7 emergency response services for all types of incidents. Call 911 for immediate assistance.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card shadow-sm hover:shadow-md transition-shadow">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <Car className="h-8 w-8 text-blue-500" />
                  <CardTitle className="text-lg">Traffic Safety</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm">
                  Traffic enforcement, accident investigation, and road safety education programs.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card shadow-sm hover:shadow-md transition-shadow">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <Home className="h-8 w-8 text-green-500" />
                  <CardTitle className="text-lg">Community Policing</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm">
                  Building strong relationships with residents through community engagement and outreach programs.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card shadow-sm hover:shadow-md transition-shadow">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <Shield className="h-8 w-8 text-purple-500" />
                  <CardTitle className="text-lg">Crime Prevention</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm">
                  Proactive crime prevention strategies and safety education for residents and businesses.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card shadow-sm hover:shadow-md transition-shadow">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <Heart className="h-8 w-8 text-pink-500" />
                  <CardTitle className="text-lg">Victim Services</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm">
                  Support and resources for crime victims and their families during difficult times.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card shadow-sm hover:shadow-md transition-shadow">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <Users className="h-8 w-8 text-orange-500" />
                  <CardTitle className="text-lg">Youth Programs</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm">
                  Educational programs and positive interactions with young people in our community.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Contact Section */}
        <section className="my-12">
          <Card className="bg-card shadow-lg">
            <CardHeader className="text-center">
              <CardTitle className="text-3xl font-bold text-foreground mb-2">Contact Us</CardTitle>
              <CardDescription className="text-lg text-muted-foreground">
                We're here to serve and protect our community
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-foreground">Get In Touch</h3>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <Phone className="h-5 w-5 text-blue-500" />
                      <div>
                        <p className="font-medium">Emergency</p>
                        <a href="tel:911" className="text-red-600 hover:underline font-bold">
                          911
                        </a>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <Phone className="h-5 w-5 text-blue-500" />
                      <div>
                        <p className="font-medium">Non-Emergency</p>
                        <a href="tel:+16103302200" className="text-blue-600 hover:underline">
                          (610) 330-2200
                        </a>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <MapPin className="h-5 w-5 text-blue-500 mt-1" />
                      <div>
                        <p className="font-medium">Address</p>
                        <a
                          href="https://maps.google.com/maps?q=685+Main+St,+Hellertown,+PA+18055-1745"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-600 hover:underline"
                        >
                          685 Main Street
                          <br />
                          Hellertown, PA 18055
                        </a>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Mail className="h-5 w-5 text-blue-500 mt-1" />
                      <div>
                        <p className="font-medium">Email</p>
                        <a href="mailto:jbaitinger@hellertownpd.org" className="text-blue-600 hover:underline">
                          jbaitinger@hellertownpd.org
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-foreground">Follow Us</h3>
                  <p className="text-muted-foreground text-sm">
                    Stay connected with the latest news and updates from the Hellertown Police Department
                  </p>
                  <div className="flex gap-4">
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

                  <div className="pt-4">
                    <h4 className="font-medium text-foreground mb-2">Office Hours</h4>
                    <div className="text-sm text-muted-foreground space-y-1">
                      <p>Monday - Friday: 8:00 AM - 4:00 PM</p>
                      <p>Emergency Services: 24/7</p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-border bg-card mt-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <Image
                  src="/images/hellertown-badge.svg"
                  alt="Hellertown Police Department Badge"
                  width={48}
                  height={48}
                  className="h-12 w-12"
                />
                <div>
                  <h3 className="font-bold text-foreground">Hellertown Police Department</h3>
                  <p className="text-sm text-muted-foreground">Serving since 1872</p>
                </div>
              </div>
              <p className="text-sm text-muted-foreground">
                Committed to protecting and serving the Hellertown community with integrity, professionalism, and
                dedication.
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-foreground mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="/jobs" className="text-muted-foreground hover:text-primary transition-colors">
                    Career Opportunities
                  </Link>
                </li>
                <li>
                  <Link
                    href="/events/national-night-out"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    National Night Out
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-muted-foreground hover:text-primary transition-colors">
                    Contact Us
                  </Link>
                </li>
                <li>
                  <a href="tel:911" className="text-muted-foreground hover:text-primary transition-colors">
                    Emergency: 911
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-foreground mb-4">Contact Info</h4>
              <div className="space-y-2 text-sm text-muted-foreground">
                <p className="flex items-center gap-2">
                  <Phone className="h-4 w-4" />
                  (610) 330-2200
                </p>
                <p className="flex items-start gap-2">
                  <MapPin className="h-4 w-4 mt-0.5" />
                  685 Main Street
                  <br />
                  Hellertown, PA 18055
                </p>
                <p className="flex items-center gap-2">
                  <Mail className="h-4 w-4" />
                  jbaitinger@hellertownpd.org
                </p>
              </div>
            </div>
          </div>

          <Separator className="my-6" />

          <div className="flex flex-col sm:flex-row justify-between items-center text-sm text-muted-foreground">
            <p>&copy; {new Date().getFullYear()} Hellertown Borough Police Department. All Rights Reserved.</p>
            <p className="mt-2 sm:mt-0">An Equal Opportunity Employer</p>
          </div>
        </div>
      </footer>
    </div>
  )
}