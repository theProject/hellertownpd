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
      className="h-10 w-10 bg-transparent border-0 hover:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
    >
      <Sun className="h-6 w-6 rotate-0 scale-100 transition-all duration-300 dark:-rotate-90 dark:scale-0 text-yellow-400 brightness-125 drop-shadow-lg" />
      <Moon className="absolute h-6 w-6 rotate-90 scale-0 transition-all duration-300 dark:rotate-0 dark:scale-100 text-blue-400 brightness-125 drop-shadow-[0_0_8px_rgba(59,130,246,0.8)]" />
      <span className="sr-only">Toggle theme</span>
    </Button>
  )
}
