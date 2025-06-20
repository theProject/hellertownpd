"use client"

import Link from "next/link"
import { Shield, Menu } from 'lucide-react'
import { ThemeToggle } from "@/components/theme-toggle"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { useState } from "react"

const navItems = [
  { href: "/", label: "Current Opening" },
  { href: "/events/national-night-out", label: "Events" },
  { href: "/about-hpd", label: "About HPD" },
  { href: "/contact", label: "Contact Us" },
]

export function SiteHeader() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <header className="bg-card border-b border-border shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between">
          {/* Branding */}
          <Link href="/" className="flex items-center gap-3 sm:gap-4 group">
            <div className="bg-yellow-500 p-2 sm:p-3 rounded-full shadow group-hover:scale-105 transition-transform">
              <Shield className="h-7 w-7 sm:h-8 sm:w-8 text-black" />
            </div>
            <div>
              <h1 className="text-lg sm:text-xl lg:text-2xl font-bold text-foreground leading-tight group-hover:text-primary transition-colors">
                Hellertown Borough P.D.
              </h1>
              <p className="hidden sm:block text-xs text-muted-foreground">Northampton County, PA</p>
            </div>
          </Link>

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
                        <div className="bg-yellow-500 p-2 rounded-full shadow group-hover:scale-105 transition-transform">
                          <Shield className="h-6 w-6 text-black" />
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
