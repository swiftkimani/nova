import Link from "next/link"
import { CheckCircle2 } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CopyCommandButton } from "@/components/shared/copy-command-button"

const FEATURES = [
  {
    title: "Design tokens, done once",
    description:
      "Colors, typography, radii, and dark/light mode all live in one globals.css. Reskin the whole product by editing values, never components.",
  },
  {
    title: "Dark & light mode, wired up",
    description:
      "next-themes + a real toggle in the navbar, not just CSS variables sitting unused. Respects system preference by default.",
  },
  {
    title: "Buttons, cards, and more",
    description:
      "A small, consistent component kit (Button, Card, Badge, Input) built on Radix + CVA — extend it, don't replace it.",
  },
  {
    title: "API routes included",
    description:
      "Example route handlers (/api/health, /api/echo) show the pattern for adding your own backend endpoints right inside the app.",
  },
  {
    title: "Docker is optional",
    description:
      "A production Dockerfile + docker-compose.yml are included but entirely removable — scaffold with --no-docker if you don't need them.",
  },
  {
    title: "Stays up to date",
    description:
      "Dependabot is preconfigured to open weekly PRs for outdated dependencies, so the template doesn't quietly rot.",
  },
]

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-border">
        <div
          className="absolute inset-0 bg-gradient-brand opacity-[0.06] dark:opacity-[0.12]"
          aria-hidden
        />
        <div className="container-page relative flex flex-col items-center gap-8 py-24 text-center">
          <Badge variant="outline" className="gap-1.5">
            <span className="size-1.5 rounded-full bg-success" />
            Next.js 16 · React 19 · Tailwind v4
          </Badge>
          <h1 className="max-w-3xl text-display">
            Ship your next product&apos;s frontend today.
          </h1>
          <p className="max-w-xl text-body-l text-muted-foreground">
            A production-ready Next.js boilerplate with a real design system: typography,
            colors, buttons, cards, dark/light mode, API routes, and optional Docker —
            reskin it in minutes.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <CopyCommandButton command="npx github:swiftkimani/nova my-app" size="lg">
              npx github:swiftkimani/nova my-app
            </CopyCommandButton>
            <Button asChild size="lg" variant="outline">
              <Link href="/docs">Read the Docs</Link>
            </Button>
          </div>
          <div className="w-full max-w-xl overflow-hidden rounded-xl border border-border bg-card text-left shadow-sm">
            <div className="flex items-center gap-2 border-b border-border bg-muted px-4 py-2.5">
              <span className="size-2.5 rounded-full bg-destructive/70" />
              <span className="size-2.5 rounded-full bg-accent-500/70" />
              <span className="size-2.5 rounded-full bg-success/70" />
              <span className="ml-2 font-mono text-caption text-muted-foreground">
                terminal
              </span>
            </div>
            <div className="space-y-1.5 p-4 font-mono text-body-s">
              <p>
                <span className="text-success">$</span> npx github:swiftkimani/nova my-app
              </p>
              <p>
                <span className="text-success">$</span> cd my-app &amp;&amp; npm install
              </p>
              <p>
                <span className="text-success">$</span> npm run dev
              </p>
              <p className="text-success">✓ ready on http://localhost:3000</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="container-page py-20">
        <div className="mb-12 text-center">
          <p className="text-tag text-primary-700 dark:text-primary-300">
            What&apos;s inside
          </p>
          <h2 className="mt-2">Everything a new product needs on day one</h2>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map((f) => (
            <Card key={f.title}>
              <CardHeader>
                <CheckCircle2 className="mb-2 size-5 text-success" />
                <CardTitle>{f.title}</CardTitle>
                <CardDescription>{f.description}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </section>

      {/* Showcase teaser */}
      <section className="border-y border-border bg-muted/40 py-20">
        <div className="container-page flex flex-col items-center gap-6 text-center">
          <p className="text-tag text-primary-700 dark:text-primary-300">Design system</p>
          <h2>Every color, type style, and component in one place</h2>
          <p className="max-w-xl text-body text-muted-foreground">
            The full palette, type scale, and component gallery — with dark mode toggled
            live.
          </p>
          <Button asChild variant="outline">
            <Link href="/docs/components">Browse the component gallery →</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
