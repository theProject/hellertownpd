"use client"

import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

import { Button } from "@/components/ui/button"

export default function ThemeToggle() {
  const { setTheme, theme } = useTheme()

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      className="hover:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0"
      aria-label="Toggle theme"
    >
      {/* Sun icon: Shown in dark mode to switch to light. It's bright orange. */}
      <Sun className="absolute h-10 w-10 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100 text-orange-600" />
      {/* Moon icon: Shown in light mode to switch to dark. It's bright yellow. */}
      <Moon className="h-10 w-10 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0 text-yellow-500" />
      <span className="sr-only">Toggle theme</span>
    </Button>
  )
}
 