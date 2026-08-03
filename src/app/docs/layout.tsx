import Link from "next/link"

const SECTIONS = [
  {
    title: "Getting Started",
    links: [
      { href: "/docs#introduction", label: "Introduction" },
      { href: "/docs#quick-start", label: "Quick Start" },
      { href: "/docs#cli-reference", label: "CLI Reference" },
    ],
  },
  {
    title: "Design System",
    links: [
      { href: "/docs#design-tokens", label: "Design Tokens" },
      { href: "/docs/components", label: "Components" },
      { href: "/docs#dark-mode", label: "Dark / Light Mode" },
    ],
  },
  {
    title: "Reference",
    links: [
      { href: "/docs#api-reference", label: "API Reference" },
      { href: "/docs#configuration", label: "Configuration" },
    ],
  },
  {
    title: "Guides",
    links: [
      { href: "/docs#testing", label: "Testing" },
      { href: "/docs#docker", label: "Docker (optional)" },
      { href: "/docs#staying-updated", label: "Staying Updated" },
      { href: "/docs#deployment", label: "Deployment" },
    ],
  },
]

export default function DocsLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="container-page grid grid-cols-1 gap-12 py-16 md:grid-cols-[220px_1fr]">
      <aside className="md:sticky md:top-24 md:h-fit">
        {SECTIONS.map((section) => (
          <div key={section.title} className="mb-7">
            <p className="mb-2 text-tag text-muted-foreground">{section.title}</p>
            {section.links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block rounded-md px-2 py-1.5 text-body-s text-muted-foreground hover:bg-muted hover:text-foreground"
              >
                {link.label}
              </Link>
            ))}
          </div>
        ))}
      </aside>
      <div className="min-w-0">{children}</div>
    </div>
  )
}
