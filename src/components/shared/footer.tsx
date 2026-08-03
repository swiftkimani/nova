import Link from "next/link"

export function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="container-page flex flex-col items-center justify-between gap-4 py-8 text-body-s text-muted-foreground md:flex-row">
        <div className="flex items-center gap-2">
          <span aria-hidden>✦</span>
          <span>Nova</span>
          <span className="text-muted-foreground/60">·</span>
          <span>
            Built by{" "}
            <a
              href="https://github.com/swiftkimani"
              target="_blank"
              rel="noreferrer"
              className="font-semibold text-foreground hover:underline"
            >
              Swift Kimani
            </a>
          </span>
        </div>
        <div className="flex items-center gap-6">
          <a
            href="https://github.com/swiftkimani/nova"
            target="_blank"
            rel="noreferrer"
            className="hover:text-foreground"
          >
            GitHub
          </a>
          <Link href="/docs" className="hover:text-foreground">
            Docs
          </Link>
        </div>
      </div>
    </footer>
  )
}
