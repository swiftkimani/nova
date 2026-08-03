#!/usr/bin/env node

const { execSync } = require("child_process")
const fs = require("fs")
const path = require("path")

const repoUrl = "https://github.com/swiftkimani/nova.git"

const args = process.argv.slice(2)
const flags = new Set(args.filter((a) => a.startsWith("--")))
const projectName = args.find((a) => !a.startsWith("--"))
const noDocker = flags.has("--no-docker")

if (!projectName) {
  console.error("Please specify the project directory:")
  console.error("  npx create-nova-app <project-directory> [--no-docker]")
  process.exit(1)
}

const targetDir = path.resolve(process.cwd(), projectName)

if (fs.existsSync(targetDir)) {
  console.error(`Error: Directory ${projectName} already exists.`)
  process.exit(1)
}

console.log(`🚀 Creating a new Nova app in ${targetDir}...`)

try {
  // 1. Clone the repository
  console.log("📦 Fetching the template...")
  execSync(`git clone --depth 1 ${repoUrl} ${projectName}`, { stdio: "inherit" })

  // 2. Remove the .git folder and the cli folder
  console.log("🧹 Cleaning up...")
  fs.rmSync(path.join(targetDir, ".git"), { recursive: true, force: true })

  const cliDir = path.join(targetDir, "cli")
  if (fs.existsSync(cliDir)) {
    fs.rmSync(cliDir, { recursive: true, force: true })
  }

  // 3. Optionally strip Docker files
  if (noDocker) {
    console.log("🐳 Skipping Docker (--no-docker)...")
    for (const file of ["Dockerfile", "docker-compose.yml", ".dockerignore"]) {
      const filePath = path.join(targetDir, file)
      if (fs.existsSync(filePath)) fs.rmSync(filePath)
    }
  }

  // 4. Rename the package name
  console.log("📝 Renaming package...")
  const pkgPath = path.join(targetDir, "package.json")
  const pkg = JSON.parse(fs.readFileSync(pkgPath, "utf8"))
  pkg.name = projectName
  fs.writeFileSync(pkgPath, JSON.stringify(pkg, null, 2) + "\n", "utf8")

  // 5. Initialize a new git repo
  console.log("🌱 Initializing new Git repository...")
  execSync("git init", { cwd: targetDir, stdio: "ignore" })
  execSync("git add .", { cwd: targetDir, stdio: "ignore" })
  execSync('git commit -m "Initial commit from create-nova-app template"', {
    cwd: targetDir,
    stdio: "ignore",
  })

  console.log(`\n🎉 Success! Created ${projectName} at ${targetDir}`)
  console.log("Inside that directory, you can run several commands:")
  console.log("\n  npm run dev")
  console.log("    Starts the development server.")
  console.log("\n  npm run test")
  console.log("    Runs the test suite.")
  console.log("\n  npm run build")
  console.log("    Creates a production build.")
  console.log("\nWe suggest that you begin by typing:")
  console.log(`\n  cd ${projectName}`)
  console.log("  npm install")
  console.log("  npm run dev")
  console.log("\nHappy coding!")
} catch (error) {
  console.error("\n❌ Failed to create project.")
  console.error(error.message)
  process.exit(1)
}
