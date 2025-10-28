"use client"

import Link from "next/link"
import Image from "next/image"
import { Menu, Phone, MapPin } from "lucide-react"
import ThemeToggle from "@/components/theme-toggle"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { useState } from "react"

const navItems = [
  { href: "/", label: "Home" },
  { href: "/jobs", label: "Careers" },
  { href: "/latest", label: "Latest" },
  { href: "/events/national-night-out", label: "Events" },
  { href: "/contact", label: "Contact Us" },
]

export function SiteHeader() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <header className="bg-card/80 backdrop-blur-xl border-b border-border/50 shadow-soft sticky top-0 z-50 transition-all duration-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between">
          {/* Branding */}
          <div className="flex items-center gap-3 sm:gap-4">
            {/* Badge */}
            <Link href="/" className="flex items-center group" prefetch={false}>
              <div className="relative p-2 sm:p-3 rounded-2xl bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-950/30 dark:to-blue-900/30 shadow-soft group-hover:shadow-soft-lg group-hover:scale-105 transition-all duration-300">
                <Image
                  src="/images/hellertown-badge.svg"
                  alt="Hellertown Police Department Badge"
                  width={64}
                  height={64}
                  className="h-14 w-14 sm:h-16 sm:w-16 group-hover:rotate-3 transition-transform duration-300"
                />
              </div>
            </Link>

            {/* Department name and contact info */}
            <div className="flex flex-col">
              <Link href="/" className="group" prefetch={false}>
                <h1 className="text-lg sm:text-xl lg:text-2xl font-bold text-foreground leading-tight group-hover:text-primary transition-colors duration-300">
                  Hellertown Police Department
                </h1>
              </Link>

              {/* Contact info below title */}
              <div className="text-xs text-muted-foreground mt-1 flex items-center gap-3">
                <a
                  href="tel:+16108387040"
                  className="flex items-center gap-1 hover:text-primary transition-all duration-300 hover:gap-1.5"
                >
                  <Phone className="h-3 w-3" />
                  (610) 838-7040
                </a>
                <span className="text-muted-foreground/50">•</span>
                <a
                  href="https://maps.google.com/maps?q=685+Main+St,+Hellertown,+PA+18055-1745"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 hover:text-primary transition-all duration-300 hover:gap-1.5"
                >
                  <MapPin className="h-3 w-3" />
                  685 Main St, Hellertown, PA 18055
                </a>
              </div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-2 lg:gap-3">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="relative px-3 py-2 text-sm font-medium text-muted-foreground hover:text-primary transition-all duration-300 rounded-lg hover:bg-accent/50 group"
              >
                {item.label}
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-primary group-hover:w-3/4 transition-all duration-300 rounded-full" />
              </Link>
            ))}
          </nav>

          {/* Right side items: ThemeToggle and Mobile Menu Trigger */}
          <div className="flex items-center gap-2 sm:gap-3">
            <ThemeToggle />
            <div className="md:hidden">
              <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
                <SheetTrigger asChild>
                  <Button
                    variant="outline"
                    size="icon"
                    className="bg-card/50 backdrop-blur-sm hover:bg-accent border-border/50 hover:scale-105 transition-all duration-300"
                  >
                    <Menu className="h-5 w-5" />
                    <span className="sr-only">Open navigation menu</span>
                  </Button>
                </SheetTrigger>
                <SheetContent side="right" className="w-[280px] sm:w-[320px] bg-card/95 backdrop-blur-xl border-border/50">
                  <SheetHeader className="mb-6 text-left">
                    <SheetTitle>
                      <Link
                        href="/"
                        className="flex items-center gap-3 group"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        <div className="p-2 rounded-xl bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-950/30 dark:to-blue-900/30 shadow-soft group-hover:scale-105 transition-all duration-300">
                          <Image
                            src="/images/hellertown-badge.svg"
                            alt="Hellertown Police Department Badge"
                            width={48}
                            height={48}
                            className="h-12 w-12"
                          />
                        </div>
                        <span className="font-bold text-foreground group-hover:text-primary transition-colors">
                          Menu
                        </span>
                      </Link>
                    </SheetTitle>
                  </SheetHeader>
                  <nav className="flex flex-col gap-2">
                    {navItems.map((item) => (
                      <Link
                        key={item.label}
                        href={item.href}
                        className="text-base font-medium text-muted-foreground hover:text-primary transition-all duration-300 py-3 px-4 rounded-xl hover:bg-accent/50 hover:translate-x-1"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {item.label}
                      </Link>
                    ))}
                    {/* Contact info in mobile menu */}
                    <div className="mt-4 pt-4 border-t border-border/50">
                      <div className="text-sm text-muted-foreground space-y-3 bg-accent/20 rounded-xl p-4">
                        <p className="font-semibold text-foreground">Contact Information:</p>
                        <a
                          href="tel:+16103302200"
                          className="flex items-center gap-2 hover:text-primary transition-colors"
                        >
                          <Phone className="h-4 w-4" />
                          (610) 330-2200
                        </a>
                        <a
                          href="https://maps.google.com/maps?q=685+Main+St,+Hellertown,+PA+18055-1745"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-start gap-2 hover:text-primary transition-colors"
                        >
                          <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0" />
                          <span>
                            685 Main St
                            <br />
                            Hellertown, PA 18055
                          </span>
                        </a>
                      </div>
                    </div>
                  </nav>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
