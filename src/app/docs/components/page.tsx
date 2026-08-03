import { Bell, Globe, Heart, Rocket, Settings, Star, Users, Zap } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card"

const COLOR_GROUPS = [
  {
    title: "Primary",
    swatches: [
      { name: "Primary 900", value: "#1E1B4B", className: "bg-primary-900" },
      { name: "Primary 800", value: "#302A6B", className: "bg-primary-800" },
      { name: "Primary 700", value: "#4338CA", className: "bg-primary-700" },
      { name: "Primary 500", value: "#6366F1", className: "bg-primary-500" },
      { name: "Primary 300", value: "#A5B4FC", className: "bg-primary-300" },
      { name: "Primary 100", value: "#EEF0FF", className: "bg-primary-100" },
    ],
  },
  {
    title: "Accent",
    swatches: [
      { name: "Accent 700", value: "#B45309", className: "bg-accent-700" },
      { name: "Accent 600", value: "#D97706", className: "bg-accent-600" },
      { name: "Accent 500", value: "#F59E0B", className: "bg-accent-500" },
      { name: "Accent 100", value: "#FEF3E2", className: "bg-accent-100" },
    ],
  },
  {
    title: "Neutrals",
    swatches: [
      { name: "Gray 900", value: "#0F172A", className: "bg-gray-900" },
      { name: "Gray 700", value: "#334155", className: "bg-gray-700" },
      { name: "Gray 500", value: "#64748B", className: "bg-gray-500" },
      { name: "Gray 300", value: "#CBD5E1", className: "bg-gray-300" },
      { name: "Gray 100", value: "#F1F5F9", className: "bg-gray-100" },
      { name: "White", value: "#FFFFFF", className: "bg-white border border-gray-200" },
    ],
  },
  {
    title: "Semantic",
    swatches: [
      { name: "Destructive", value: "#DC2626", className: "bg-destructive" },
      { name: "Success", value: "#059669", className: "bg-success" },
    ],
  },
]

const TYPE_SCALE = [
  {
    label: "Display",
    spec: "Space Grotesk Bold · 72px",
    className: "text-display",
    sample: "Build something new",
  },
  {
    label: "H1",
    spec: "Space Grotesk Bold · 44px",
    className: "text-h1",
    sample: "A boilerplate that stays yours",
  },
  {
    label: "H2",
    spec: "Space Grotesk Bold · 36px",
    className: "text-h2",
    sample: "Everything on day one",
  },
  {
    label: "H3",
    spec: "Space Grotesk SemiBold · 26px",
    className: "text-h3",
    sample: "Ready to reskin",
  },
  {
    label: "Body L",
    spec: "Inter Regular · 19px",
    className: "text-body-l",
    sample: "A production-ready Next.js boilerplate.",
  },
  {
    label: "Body",
    spec: "Inter Regular · 16px",
    className: "text-body",
    sample: "Design tokens, dark mode, and API routes included.",
  },
  {
    label: "Body S",
    spec: "Inter Regular · 14px",
    className: "text-body-s",
    sample: "Updated weekly via Dependabot.",
  },
  {
    label: "Caption",
    spec: "Inter Regular · 12px",
    className: "text-caption",
    sample: "Deployed at dev.benardkimani.co.ke/nova",
  },
  {
    label: "UI Bold",
    spec: "Space Grotesk Bold · 16px",
    className: "text-ui-bold",
    sample: "Get Started",
  },
  {
    label: "UI Medium",
    spec: "Space Grotesk Medium · 14px",
    className: "text-ui-medium",
    sample: "View on GitHub",
  },
  {
    label: "Tag",
    spec: "Space Grotesk Bold · 11px",
    className: "text-tag text-accent-600",
    sample: "New Release",
  },
]

const ICONS = [Globe, Users, Rocket, Bell, Star, Heart, Zap, Settings]

export default function ComponentsPage() {
  return (
    <div className="flex flex-col gap-20">
      <div>
        <h1 className="mb-3">Component Gallery</h1>
        <p className="text-body-l text-muted-foreground">
          Every color, type style, and component Nova ships with — toggle dark mode (top
          right) to see both themes.
        </p>
      </div>

      {/* Colors */}
      <section id="colors">
        <p className="text-tag text-accent-600">Colors</p>
        <h2 className="mt-2 mb-8">Color Palette</h2>
        <div className="flex flex-col gap-10">
          {COLOR_GROUPS.map((group) => (
            <div key={group.title}>
              <p className="mb-3 text-body-s text-muted-foreground">{group.title}</p>
              <div className="flex flex-wrap gap-6">
                {group.swatches.map((swatch) => (
                  <div key={swatch.name} className="w-32">
                    <div className={`h-20 w-32 rounded-lg ${swatch.className}`} />
                    <p className="mt-2 text-ui-medium">{swatch.name}</p>
                    <p className="text-caption text-muted-foreground">{swatch.value}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Typography */}
      <section id="typography" className="rounded-2xl bg-muted/50 p-10">
        <p className="text-tag text-accent-600">Typography</p>
        <h2 className="mt-2 mb-8">Type System</h2>
        <div className="flex flex-col">
          {TYPE_SCALE.map((row) => (
            <div
              key={row.label}
              className="grid grid-cols-1 gap-2 border-b border-border py-5 last:border-0 md:grid-cols-[100px_220px_1fr] md:items-center md:gap-6"
            >
              <p className="text-body-s text-muted-foreground">{row.label}</p>
              <p className="text-caption text-muted-foreground/70">{row.spec}</p>
              <p className={row.className}>{row.sample}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Buttons */}
      <section id="buttons">
        <p className="text-tag text-accent-600">Components</p>
        <h2 className="mt-2 mb-8">Button</h2>

        <p className="mb-3 text-body-s text-muted-foreground">Variants</p>
        <div className="mb-10 flex flex-wrap items-center gap-4">
          <Button variant="primary">Primary</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="outline">Outline</Button>
          <Button variant="destructive">Destructive</Button>
          <Button variant="ghost">Ghost</Button>
          <Button variant="link">Link</Button>
        </div>

        <p className="mb-3 text-body-s text-muted-foreground">Sizes</p>
        <div className="flex flex-wrap items-center gap-4">
          <Button size="sm">Small</Button>
          <Button size="md">Medium</Button>
          <Button size="lg">Large</Button>
        </div>
      </section>

      {/* Badges */}
      <section id="badges">
        <p className="text-tag text-accent-600">Components</p>
        <h2 className="mt-2 mb-8">Badge</h2>
        <div className="flex flex-wrap gap-3">
          <Badge>Default</Badge>
          <Badge variant="secondary">Secondary</Badge>
          <Badge variant="outline">Outline</Badge>
          <Badge variant="success">Success</Badge>
          <Badge variant="destructive">Destructive</Badge>
        </div>
      </section>

      {/* Input */}
      <section id="input">
        <p className="text-tag text-accent-600">Components</p>
        <h2 className="mt-2 mb-8">Input</h2>
        <div className="max-w-sm space-y-3">
          <Input placeholder="you@example.com" />
          <Input placeholder="Disabled" disabled />
          <Input aria-invalid placeholder="Invalid state" />
        </div>
      </section>

      {/* Cards */}
      <section id="cards">
        <p className="text-tag text-accent-600">Components</p>
        <h2 className="mt-2 mb-8">Card</h2>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          <Card>
            <CardHeader>
              <CardTitle>Simple card</CardTitle>
              <CardDescription>Header, title, and description only.</CardDescription>
            </CardHeader>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>With content</CardTitle>
              <CardDescription>A body section below the header.</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-body-s text-muted-foreground">
                Any content goes here — text, a list, or another component.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>With footer</CardTitle>
              <CardDescription>Actions live in the footer slot.</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-body-s text-muted-foreground">
                Footers get a top border and muted background automatically.
              </p>
            </CardContent>
            <CardFooter>
              <Button size="sm" variant="outline">
                Action
              </Button>
            </CardFooter>
          </Card>
        </div>
      </section>

      {/* Icons */}
      <section id="icons">
        <p className="text-tag text-accent-600">Icons</p>
        <h2 className="mt-2 mb-8">Icon Set (lucide-react)</h2>
        <div className="flex flex-wrap gap-4">
          {ICONS.map((Icon, i) => (
            <div
              key={i}
              className="flex size-14 items-center justify-center rounded-xl bg-muted text-primary-700 dark:text-primary-300"
            >
              <Icon className="size-6" />
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
