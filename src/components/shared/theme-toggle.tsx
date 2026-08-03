"use client"

import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

import { Button } from "@/components/ui/button"

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme()

  // next-themes reports resolvedTheme as undefined server-side and until it
  // has read the visitor's stored/system preference on the client — render
  // a disabled placeholder until then instead of risking a hydration mismatch.
  if (!resolvedTheme) {
    return <Button variant="ghost" size="icon" aria-label="Toggle theme" disabled />
  }

  return (
    <Button
      variant="ghost"
      size="icon"
      aria-label="Toggle theme"
      onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
    >
      <Sun className="hidden dark:block" />
      <Moon className="block dark:hidden" />
    </Button>
  )
}
