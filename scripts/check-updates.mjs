#!/usr/bin/env node
// Quick local summary of outdated dependencies, complementing the
// automated weekly Dependabot PRs (.github/dependabot.yml). Exits 0
// either way — this is informational, not a CI gate.
import { execSync } from "node:child_process"

const pm = process.env.npm_config_user_agent?.includes("pnpm") ? "pnpm" : "npm"

console.log(`Checking outdated dependencies via ${pm}...\n`)

try {
  const output = execSync(
    `${pm} outdated --format=json 2>/dev/null || ${pm} outdated --json`,
    {
      encoding: "utf8",
    }
  )
  const data = JSON.parse(output || "{}")
  const entries = Object.entries(data)

  if (entries.length === 0) {
    console.log("Everything is up to date.")
    process.exit(0)
  }

  console.log(`${entries.length} package(s) have updates available:\n`)
  for (const [name, info] of entries) {
    console.log(`  ${name}: ${info.current} -> ${info.latest}`)
  }
} catch (error) {
  // Both npm and pnpm exit non-zero when outdated packages exist, which
  // execSync treats as a thrown error even though stdout has the data we want.
  const output = error.stdout?.toString().trim()
  if (output) {
    try {
      const data = JSON.parse(output)
      const entries = Object.entries(data)
      if (entries.length === 0) {
        console.log("Everything is up to date.")
        process.exit(0)
      }
      console.log(`${entries.length} package(s) have updates available:\n`)
      for (const [name, info] of entries) {
        console.log(`  ${name}: ${info.current} -> ${info.latest}`)
      }
      process.exit(0)
    } catch {
      console.log("Everything is up to date.")
      process.exit(0)
    }
  }
  console.error("Could not check for outdated packages:", error.message)
  process.exit(0)
}
