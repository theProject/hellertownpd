import Image from "next/image"
import Link from "next/link"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { RsvpForm } from "@/components/rsvp-form"
import type { Metadata } from "next"
import {
  Users,
  CalendarDays,
  MapPinIcon,
  Gift,
  Handshake,
  History,
  Camera,
  DollarSign,
  ExternalLink,
  Sparkles,
  Info,
  PartyPopper,
  Music,
} from "lucide-react"

export const metadata: Metadata = {
  title: "National Night Out 2025 - Hellertown Borough Police Department",
  description:
    "Join us for National Night Out 2025 in Hellertown, PA! Tuesday, August 5th from 5-8 PM at Dimmick Park. Meet Disney's Elsa, enjoy live music, games, prizes, and strengthen police-community partnerships.",
  openGraph: {
    title: "National Night Out 2025 - Hellertown, PA",
    description:
      "Join us Tuesday, August 5th, 5-8 PM at Dimmick Park for National Night Out 2025! Fun for all ages with games, prizes, live music, and community activities.",
    url: "https://your-live-url.vercel.app/events/national-night-out", // Replace with your actual deployed URL
    siteName: "Hellertown Borough Police Department",
    images: [
      {
        url: "/images/nno-og-image.png",
        width: 1200,
        height: 630,
        alt: "National Night Out 2025 - August 5, 5-8 PM",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "National Night Out 2025 - Hellertown, PA",
    description: "Join us Tuesday, August 5th, 5-8 PM at Dimmick Park for National Night Out 2025! #nnohpd25",
    images: ["/images/nno-og-image.png"],
  },
}

const sponsorshipLevels = [
  {
    name: "Diamond Donor",
    amount: "$1,000 +",
    description: "Premier recognition and visibility at the event.",
    icon: <DollarSign className="h-8 w-8 text-blue-400" />,
  },
  {
    name: "Platinum Partner",
    amount: "$500 - $999",
    description: "Significant acknowledgement for your generous support.",
    icon: <DollarSign className="h-8 w-8 text-purple-400" />,
  },
  {
    name: "Gold Giver",
    amount: "$250 - $499",
    description: "Valued contribution with prominent thanks.",
    icon: <DollarSign className="h-8 w-8 text-yellow-400" />,
  },
  {
    name: "Silver Supporter",
    amount: "$100 - $249",
    description: "Important support helping make the event a success.",
    icon: <DollarSign className="h-8 w-8 text-gray-400" />,
  },
  {
    name: "Bronze Benefactor",
    amount: "$1 - $99",
    description: "Every contribution helps build our community.",
    icon: <DollarSign className="h-8 w-8 text-orange-400" />,
  },
]

const carouselImages = [
  { src: "/community-event-fun.png", alt: "Community fun at NNO" },
  { src: "/police-kids-smiling.png", alt: "Police interacting with kids" },
  { src: "/families-park-event.png", alt: "Families enjoying NNO" },
  { src: "/local-vendor-booth.png", alt: "Local vendor at NNO" },
  { src: "/nno-games-activities.png", alt: "NNO activities" },
]

const eventFeatures = [
  {
    name: "Meet Disney's Elsa",
    description: "A magical meet & greet opportunity for the kids!",
    icon: <Sparkles className="h-6 w-6 text-sky-400" />,
  },
  {
    name: "Live Music: The Main Street Sound",
    description: "Enjoy upbeat tunes from our fantastic local band.",
    icon: <Music className="h-6 w-6 text-rose-400" />,
  },
  {
    name: "Games, Prizes & Activities",
    description: "Fun for all ages throughout the evening.",
    icon: <PartyPopper className="h-6 w-6 text-lime-400" />,
  },
  {
    name: "And So Much More!",
    description: "Discover more surprises and community fun on the day.",
    icon: <Gift className="h-6 w-6 text-violet-400" />,
  },
]

export default function NationalNightOutPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Hero Section with Full-Width Flag Background */}
        <section className="relative text-center my-8 sm:my-12 py-10 sm:py-16 rounded-lg overflow-hidden shadow-lg">
          {/* Full-width Flag Background Image */}
          <Image
            src="/images/header-flag-background.jpeg"
            alt="American flag background"
            layout="fill"
            objectFit="cover" // Ensures the flag covers the area, might crop
            className="absolute inset-0 z-0 opacity-15 dark:opacity-10" // Reduced opacity for larger area
          />
          {/* Overlay to improve text legibility on flag */}
          <div className="absolute inset-0 z-1 bg-gradient-to-b from-black/10 via-black/5 to-black/10 dark:from-black/30 dark:via-black/10 dark:to-black/30" />

          {/* Content on top of the flag */}
          <div className="relative z-10">
            {/* NNO Logo (centered) */}
            <div className="inline-block mb-6 sm:mb-8 shadow-xl rounded-lg bg-background/70 dark:bg-card/70 backdrop-blur-md p-3 sm:p-4">
              <Image
                src="/images/nno-logo-white-bg.png"
                alt="National Night Out 2025 - Police Community Partnerships"
                width={320}
                height={280}
                className="rounded-md"
                priority
              />
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-primary mb-3 sm:mb-4 tracking-tight drop-shadow-md">
              National Night Out 2025
            </h1>
            <p className="text-xl sm:text-2xl text-foreground/90 dark:text-foreground/80 mb-2 drop-shadow-sm">
              Join Us in Hellertown, PA!
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-3 sm:gap-4 text-lg text-foreground/90 dark:text-foreground/80 mb-6 sm:mb-8 drop-shadow-sm">
              <div className="flex items-center gap-2 bg-background/50 dark:bg-card/50 px-3 py-1 rounded-full backdrop-blur-sm">
                <CalendarDays className="h-5 w-5 text-blue-500" />
                <span>Tuesday, August 5th</span>
              </div>
              <div className="flex items-center gap-2 bg-background/50 dark:bg-card/50 px-3 py-1 rounded-full backdrop-blur-sm">
                <MapPinIcon className="h-5 w-5 text-green-500" />
                <span>Dimmick Park</span>
              </div>
              <div className="flex items-center gap-2 bg-background/50 dark:bg-card/50 px-3 py-1 rounded-full backdrop-blur-sm">
                <Users className="h-5 w-5 text-yellow-500" />
                <span>5:00 PM - 8:00 PM</span>
              </div>
            </div>
            <p className="max-w-3xl mx-auto text-foreground/80 dark:text-foreground/70 text-base sm:text-lg bg-background/40 dark:bg-card/40 backdrop-blur-sm p-3 rounded-md">
              The Hellertown Police Department is proud to participate in the 2025 National Night Out. This annual event
              is a great opportunity not only to spotlight the Hellertown Police Department (HPD), but also to recognize
              and celebrate the local businesses that continue to support our mission.
            </p>
          </div>
        </section>

        <Separator className="my-12" />

        {/* Event Features & More Fun Section */}
        <section className="my-12 grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          <div className="lg:col-span-2">
            <h2 className="text-3xl font-bold text-center lg:text-left mb-8 text-foreground flex items-center justify-center lg:justify-start gap-3">
              <Sparkles className="h-8 w-8 text-primary" />
              What to Expect
            </h2>
            <div className="space-y-6">
              {eventFeatures.map((feature) => (
                <Card key={feature.name} className="bg-card shadow-sm hover:shadow-md transition-shadow">
                  <CardHeader className="flex flex-row items-center gap-3 pb-3">
                    {feature.icon}
                    <CardTitle className="text-lg text-foreground">{feature.name}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div className="space-y-6 lg:mt-16">
            <Card className="bg-secondary border-border shadow-sm">
              <CardHeader className="flex flex-row items-center gap-3 pb-3">
                <Info className="h-6 w-6 text-blue-500" />
                <CardTitle className="text-lg text-foreground">More Fun On The Way!</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  We're still planning more exciting activities and surprises for National Night Out 2025! Check back
                  soon for updates. Thanks to all our supporters for making this possible.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        <Separator className="my-12" />

        {/* RSVP Section */}
        <section className="my-12">
          <h2 className="text-3xl font-bold text-center mb-8 text-foreground flex items-center justify-center gap-3">
            <Users className="h-8 w-8 text-primary" />
            Let Us Know You're Coming!
          </h2>
          <p className="text-lg text-muted-foreground text-center max-w-2xl mx-auto mb-6">
            Help us get a headcount so we can best support everyone attending! This is completely anonymous.
          </p>
          <RsvpForm />
        </section>

        <Separator className="my-12" />

        {/* About the Event Section */}
        <section className="my-12">
          <h2 className="text-3xl font-bold text-center mb-8 text-foreground flex items-center justify-center gap-3">
            <Gift className="h-8 w-8 text-primary" />
            An Evening of Community & Fun
          </h2>
          <p className="text-lg text-muted-foreground text-center max-w-3xl mx-auto mb-6">
            The evening promises fun for all ages, featuring games, prizes, educational activities, and plenty of
            entertainment for the entire community. It's a chance to strengthen neighborhood spirit and police-community
            partnerships.
          </p>
        </section>

        <Separator className="my-12" />

        {/* Sponsorship Levels Section */}
        <section className="my-12">
          <h2 className="text-3xl font-bold text-center mb-8 text-foreground flex items-center justify-center gap-3">
            <Handshake className="h-8 w-8 text-primary" />
            Become a Valued Sponsor
          </h2>
          <p className="text-lg text-muted-foreground text-center max-w-3xl mx-auto mb-10">
            Your support is vital to bringing back this beloved community event. Donations of any kind—whether gift
            cards, giveaways, equipment, or monetary contributions—will help make this event a memorable success. It's
            also an important chance to show appreciation for our officers.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sponsorshipLevels.map((level) => (
              <Card
                key={level.name}
                className="bg-card shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col"
              >
                <CardHeader className="flex-row items-center gap-4 pb-4">
                  {level.icon}
                  <div>
                    <CardTitle className="text-xl text-foreground">{level.name}</CardTitle>
                    <CardDescription className="text-primary font-semibold">{level.amount}</CardDescription>
                  </div>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-sm text-muted-foreground">{level.description}</p>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full bg-background hover:bg-accent">
                    <Link href="mailto:jbaitinger@hellertownpd.org?subject=NNO%20Sponsorship%20Inquiry">
                      Inquire About Sponsoring
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </section>

        <Separator className="my-12" />

        {/* Community Fun Carousel (#nnohpd25) */}
        <section className="my-12">
          <h2 className="text-3xl font-bold text-center mb-8 text-foreground flex items-center justify-center gap-3">
            <Camera className="h-8 w-8 text-primary" />
            Share Your #nnohpd25 Moments!
          </h2>
          <p className="text-lg text-muted-foreground text-center max-w-3xl mx-auto mb-10">
            Capture the fun and share your photos using #nnohpd25! We'd love to see the event through your eyes.
            (Featured images below are illustrative).
          </p>
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full max-w-3xl mx-auto"
          >
            <CarouselContent>
              {carouselImages.map((img, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <div className="p-1">
                    <Card>
                      <CardContent className="flex aspect-square items-center justify-center p-0 overflow-hidden rounded-lg">
                        <Image
                          src={img.src || "/placeholder.svg"}
                          alt={img.alt}
                          width={600}
                          height={400}
                          className="object-cover w-full h-full"
                        />
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="ml-12 sm:ml-16" />
            <CarouselNext className="mr-12 sm:mr-16" />
          </Carousel>
          <p className="text-sm text-muted-foreground text-center mt-4">
            Note: Live social media feed integration is a future enhancement.
          </p>
        </section>

        <Separator className="my-12" />

        {/* History of National Night Out Section */}
        <section className="my-12">
          <h2 className="text-3xl font-bold text-center mb-8 text-foreground flex items-center justify-center gap-3">
            <History className="h-8 w-8 text-primary" />
            The Spirit of National Night Out
          </h2>
          <Accordion type="single" collapsible className="w-full max-w-2xl mx-auto">
            <AccordionItem value="item-1">
              <AccordionTrigger className="text-lg hover:no-underline">What is National Night Out?</AccordionTrigger>
              <AccordionContent className="text-base text-muted-foreground">
                National Night Out is an annual community-building campaign that promotes police-community partnerships
                and neighborhood camaraderie to make our neighborhoods safer, more caring places to live. Millions of
                neighbors take part in National Night Out across thousands of communities from all fifty states, U.S.
                territories and military bases worldwide on the first Tuesday in August (Texas and select areas
                celebrate on the first Tuesday in October).
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger className="text-lg hover:no-underline">Its Beginnings</AccordionTrigger>
              <AccordionContent className="text-base text-muted-foreground">
                The event began in 1984, introduced by the National Association of Town Watch (NATW). Early events were
                often simple front porch vigils, but NNO has grown into a nationwide celebration with block parties,
                festivals, parades, cookouts, and various other community events with safety demonstrations, seminars,
                youth events, visits from emergency personnel, exhibits and much more.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger className="text-lg hover:no-underline">Why It Matters in Hellertown</AccordionTrigger>
              <AccordionContent className="text-base text-muted-foreground">
                In Hellertown, National Night Out is a cherished tradition that strengthens the bond between our police
                department and the community we proudly serve. It's a day to connect, celebrate our partnerships, and
                reaffirm our commitment to working together for a safer Hellertown.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </section>

        <Separator className="my-12" />

        {/* Call to Action / Signatures */}
        <section className="my-12 text-center">
          <h2 className="text-2xl font-semibold text-foreground mb-4">
            Thank You for Helping Strengthen Our Community Bond!
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto mb-8">
            Your participation and support make a real difference.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-8 text-foreground">
            <div>
              <p className="font-bold">David J. Heintzelman</p>
              <p className="text-sm text-muted-foreground">Mayor for the Borough of Hellertown</p>
              <Link href="mailto:D.Heintzelman@hellertownborough.org" className="text-sm text-blue-500 hover:underline">
                D.Heintzelman@hellertownborough.org
              </Link>
            </div>
            <div>
              <p className="font-bold">James Baitinger</p>
              <p className="text-sm text-muted-foreground">Chief of Police</p>
              <Link href="mailto:jbaitinger@hellertownpd.org" className="text-sm text-blue-500 hover:underline">
                jbaitinger@hellertownpd.org
              </Link>
            </div>
          </div>
          <div className="mt-8">
            <Link
              href="https://natw.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-blue-500 hover:underline inline-flex items-center gap-1"
            >
              Learn more about National Night Out <ExternalLink className="h-3 w-3" />
            </Link>
          </div>
        </section>
      </main>

      <footer className="border-t border-border bg-card">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6 text-center text-muted-foreground text-sm">
          <p>&copy; {new Date().getFullYear()} Hellertown Borough Police Department. All Rights Reserved.</p>
  <div className="flex justify-center">
              <Image
                src="/project.png"
                alt="theProject Logo"
                width={300}
                height={100}
                className="object-contain"
              />
            </div> 
        </div>
      </footer>
    </div>
  )
}
