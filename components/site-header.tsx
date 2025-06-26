"use client"

import Link from "next/link"
import Image from "next/image"
import { Menu, Phone, MapPin } from "lucide-react"
import { ThemeToggle } from "@/components/theme-toggle"
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
    <header className="bg-card border-b border-border shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between">
          {/* Branding */}
          <div className="flex items-center gap-3 sm:gap-4">
            {/* Badge */}
            <Link href="/" className="flex items-center group" prefetch={false}>
              <div className="p-2 sm:p-3 rounded-full shadow group-hover:scale-105 transition-transform">
                <Image
                  src="/images/hellertown-badge.svg"
                  alt="Hellertown Police Department Badge"
                  width={64}
                  height={64}
                  className="h-14 w-14 sm:h-16 sm:w-16"
                />
              </div>
            </Link>

            {/* Department name and contact info */}
            <div className="flex flex-col">
              <Link href="/" className="group" prefetch={false}>
                <h1 className="text-lg sm:text-xl lg:text-2xl font-bold text-foreground leading-tight group-hover:text-primary transition-colors">
                  Hellertown Police Department
                </h1>
              </Link>

              {/* Contact info below title */}
              <div className="text-xs text-muted-foreground mt-1 flex items-center gap-3">
                <a href="tel:+16108387040" className="flex items-center gap-1 hover:text-primary transition-colors">
                  <Phone className="h-3 w-3" />
                  (610) 838-7040
                </a>
                <span className="text-muted-foreground/50">•</span>
                <a
                  href="https://maps.google.com/maps?q=685+Main+St,+Hellertown,+PA+18055-1745"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 hover:text-primary transition-colors"
                >
                  <MapPin className="h-3 w-3" />
                  685 Main St, Hellertown, PA 18055
                </a>
              </div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-4 lg:gap-6">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Right side items: ThemeToggle and Mobile Menu Trigger */}
          <div className="flex items-center gap-2 sm:gap-3">
            <ThemeToggle />
            <div className="md:hidden">
              <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
                <SheetTrigger asChild>
                  <Button variant="outline" size="icon" className="bg-card hover:bg-accent">
                    <Menu className="h-5 w-5" />
                    <span className="sr-only">Open navigation menu</span>
                  </Button>
                </SheetTrigger>
                <SheetContent side="right" className="w-[280px] sm:w-[320px] bg-card">
                  <SheetHeader className="mb-6 text-left">
                    <SheetTitle>
                      <Link
                        href="/"
                        className="flex items-center gap-3 group"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        <div className="p-2 rounded-full shadow group-hover:scale-105 transition-transform">
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
                  <nav className="flex flex-col gap-4">
                    {navItems.map((item) => (
                      <Link
                        key={item.label}
                        href={item.href}
                        className="text-base font-medium text-muted-foreground hover:text-primary transition-colors py-2 px-3 rounded-md hover:bg-accent"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {item.label}
                      </Link>
                    ))}
                    {/* Contact info in mobile menu */}
                    <div className="mt-4 pt-4 border-t border-border">
                      <div className="text-sm text-muted-foreground space-y-2">
                        <p className="font-medium">Contact Information:</p>
                        <p className="flex items-center gap-2">
                          <Phone className="h-4 w-4" />
                          <a href="tel:+16103302200" className="hover:text-primary transition-colors">
                            (610) 330-2200
                          </a>
                        </p>
                        <p className="flex items-start gap-2">
                          <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0" />
                          <a
                            href="https://maps.google.com/maps?q=685+Main+St,+Hellertown,+PA+18055-1745"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-primary transition-colors"
                          >
                            685 Main St
                            <br />
                            Hellertown, PA 18055
                          </a>
                        </p>
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
