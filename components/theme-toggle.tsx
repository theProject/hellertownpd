"use client"

import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()

  return (
    <Button
      variant="ghost"
      size="icon"
      className="h-12 w-12 bg-transparent border-2 border-muted-foreground/30 hover:bg-accent hover:border-muted-foreground/50 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-primary rounded-lg"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
    >
      <Sun className="h-7 w-7 rotate-0 scale-100 transition-all duration-300 dark:-rotate-90 dark:scale-0 text-yellow-500 brightness-125 drop-shadow-lg stroke-[2.5]" />
      <Moon className="absolute h-7 w-7 rotate-90 scale-0 transition-all duration-300 dark:rotate-0 dark:scale-100 text-blue-400 brightness-125 drop-shadow-[0_0_12px_rgba(59,130,246,0.8)] stroke-[2.5]" />
      <span className="sr-only">Toggle theme</span>
    </Button>
  )
}
