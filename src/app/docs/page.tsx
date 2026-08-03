import Link from "next/link"

function CodeBlock({ children }: { children: string }) {
  return (
    <pre className="mb-4 overflow-x-auto rounded-lg border border-border bg-muted px-4 py-3 font-mono text-body-s text-foreground">
      <code>{children}</code>
    </pre>
  )
}

function Section({
  id,
  title,
  children,
}: {
  id: string
  title: string
  children: React.ReactNode
}) {
  return (
    <section id={id} className="mb-16 scroll-mt-24">
      <h2 className="mb-4">{title}</h2>
      <div className="space-y-4 text-body text-muted-foreground [&_code]:rounded [&_code]:bg-muted [&_code]:px-1.5 [&_code]:py-0.5 [&_code]:font-mono [&_code]:text-body-s [&_code]:text-foreground [&_a]:text-primary-700 [&_a]:underline-offset-4 [&_a]:hover:underline dark:[&_a]:text-primary-300">
        {children}
      </div>
    </section>
  )
}

export default function DocsPage() {
  return (
    <div>
      <div className="mb-12">
        <h1 className="mb-3">Documentation</h1>
        <p className="text-body-l text-muted-foreground">
          Everything you need to scaffold, theme, and ship a product built on Nova.
        </p>
      </div>

      <Section id="introduction" title="Introduction">
        <p>
          Nova is a Next.js boilerplate built around one idea: the design system should
          live in a handful of files you can point at, not be scattered across every
          component. It ships with a full typography scale, a light/dark color palette, a
          small set of consistent components (Button, Card, Badge, Input), example API
          routes, and everything needed to keep the dependencies themselves from going
          stale.
        </p>
        <p>
          It was derived from the design system built for the{" "}
          <a href="https://github.com/swiftkimani/imara" target="_blank" rel="noreferrer">
            Imara Fellowship site
          </a>
          , generalized into brand-neutral tokens so any project can reskin it without
          touching component code.
        </p>
      </Section>

      <Section id="quick-start" title="Quick Start">
        <p>Scaffold a new project in one line:</p>
        <CodeBlock>npx github:swiftkimani/nova my-app</CodeBlock>
        <p>Skip the optional Docker files entirely:</p>
        <CodeBlock>npx github:swiftkimani/nova my-app --no-docker</CodeBlock>
        <p>Then run it:</p>
        <CodeBlock>{`cd my-app && npm install\nnpm run dev`}</CodeBlock>
        <p>
          Prefer a plain clone?{" "}
          <code>git clone https://github.com/swiftkimani/nova.git</code> works too — you
          own the module rename in that case.
        </p>
      </Section>

      <Section id="cli-reference" title="CLI Reference">
        <p>
          <code>cli/create-nova-app/</code> mirrors the same scaffolding CLI used by the
          companion Go boilerplate: no npm registry publish required, runs straight from
          GitHub.
        </p>
        <ul className="ml-5 list-disc space-y-1">
          <li>Shallow-clones the template into the target directory</li>
          <li>
            Removes <code>.git</code> and the <code>cli/</code> folder
          </li>
          <li>
            Renames <code>package.json</code>&apos;s <code>name</code> field to your
            project name
          </li>
          <li>
            With <code>--no-docker</code>, removes <code>Dockerfile</code> and{" "}
            <code>docker-compose.yml</code>
          </li>
          <li>Initializes a fresh git repository with an initial commit</li>
        </ul>
      </Section>

      <Section id="design-tokens" title="Design Tokens">
        <p>
          Every color, radius, and font lives in <code>src/app/globals.css</code> as a CSS
          custom property. Component classes reference the semantic layer (
          <code>bg-primary-700</code>, <code>text-muted-foreground</code>) which maps onto
          raw brand values (<code>--nova-primary-700</code>, etc) — the only place hex
          codes should appear. Reskinning a whole product means editing that one block.
        </p>
        <p>
          See the full palette and type scale on the{" "}
          <Link href="/docs/components">component gallery</Link>.
        </p>
      </Section>

      <Section id="dark-mode" title="Dark / Light Mode">
        <p>
          Wired up with <code>next-themes</code>: a <code>ThemeProvider</code> in{" "}
          <code>layout.tsx</code> and a real toggle button in the navbar (top right).
          Defaults to the visitor&apos;s system preference and persists their choice.
        </p>
      </Section>

      <Section id="api-reference" title="API Reference">
        <p>
          Example Route Handlers under <code>src/app/api/</code>, demonstrating the
          pattern:
        </p>
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full text-body-s">
            <thead className="bg-muted text-caption text-muted-foreground">
              <tr>
                <th className="px-4 py-2 text-left">Method</th>
                <th className="px-4 py-2 text-left">Path</th>
                <th className="px-4 py-2 text-left">Description</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t border-border">
                <td className="px-4 py-2 font-mono">GET</td>
                <td className="px-4 py-2 font-mono">/api/health</td>
                <td className="px-4 py-2">
                  Liveness check — <code>{'{ status: "OK" }'}</code>
                </td>
              </tr>
              <tr className="border-t border-border">
                <td className="px-4 py-2 font-mono">POST</td>
                <td className="px-4 py-2 font-mono">/api/echo</td>
                <td className="px-4 py-2">
                  Echoes back <code>{"{ message: string }"}</code>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </Section>

      <Section id="configuration" title="Configuration">
        <p>
          Environment variables are validated at startup via <code>src/lib/env.ts</code>{" "}
          (zod schema) — the app fails fast with a clear error instead of silently reading{" "}
          <code>undefined</code>. Copy <code>.env.example</code> to{" "}
          <code>.env.local</code> to get started.
        </p>
        <p>
          <code>NEXT_BASE_PATH</code> optionally mounts the whole app under a path prefix
          (e.g. <code>/nova</code>) for shared-domain deployments — see Deployment below.
        </p>
      </Section>

      <Section id="testing" title="Testing">
        <p>Vitest + React Testing Library, jsdom environment:</p>
        <CodeBlock>npm run test</CodeBlock>
        <p>
          A sample test for the Button component lives at{" "}
          <code>src/components/ui/button.test.tsx</code>.
        </p>
      </Section>

      <Section id="docker" title="Docker (optional)">
        <p>
          A multi-stage <code>Dockerfile</code> (standalone Next.js output) and{" "}
          <code>docker-compose.yml</code> are included but entirely optional — delete
          them, or scaffold with <code>--no-docker</code>, if you don&apos;t need them.
        </p>
        <CodeBlock>docker compose up -d --build</CodeBlock>
      </Section>

      <Section id="staying-updated" title="Staying Updated">
        <p>
          A boilerplate that isn&apos;t maintained quietly becomes a liability. Nova ships
          with <code>.github/dependabot.yml</code> configured to open a weekly PR for
          every outdated npm dependency, plus <code>npm run check-updates</code> for a
          quick local summary of what&apos;s behind, any time.
        </p>
      </Section>

      <Section id="deployment" title="Deployment">
        <p>
          This site itself (the one you&apos;re reading) is deployed at{" "}
          <a href="https://dev.benardkimani.co.ke/nova">dev.benardkimani.co.ke/nova</a>,
          alongside the companion Go boilerplate — a Next.js standalone build behind
          Traefik, sharing the same VPS via a path-prefixed route. See{" "}
          <code>deploy/</code> in the repo for the exact recipe.
        </p>
      </Section>
    </div>
  )
}
