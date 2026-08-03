"use client"

import * as React from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"

import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/shared/theme-toggle"
import { CopyCommandButton } from "@/components/shared/copy-command-button"

const NAV_LINKS = [
  { href: "/", label: "Overview" },
  { href: "/docs", label: "Docs" },
  { href: "/docs/components", label: "Components" },
  { href: "/docs#api-reference", label: "API" },
]

export function Navbar() {
  const [open, setOpen] = React.useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-md">
      <div className="container-page flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-2 text-ui-bold text-foreground">
          <span
            aria-hidden
            className="flex size-8 items-center justify-center rounded-lg bg-gradient-brand text-white"
          >
            ✦
          </span>
          Nova
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-ui-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-2 md:flex">
          <ThemeToggle />
          <Button asChild variant="outline" size="sm">
            <a
              href="https://github.com/swiftkimani/nova"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
          </Button>
          <CopyCommandButton command="npx github:swiftkimani/nova my-app" size="sm">
            npx github:swiftkimani/nova
          </CopyCommandButton>
        </div>

        <div className="flex items-center gap-1 md:hidden">
          <ThemeToggle />
          <Button
            variant="ghost"
            size="icon"
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X /> : <Menu />}
          </Button>
        </div>
      </div>

      {open && (
        <nav className="flex flex-col gap-1 border-t border-border bg-background px-4 py-4 md:hidden">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-lg px-3 py-2 text-ui-medium text-foreground hover:bg-muted"
              onClick={() => setOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  )
}
