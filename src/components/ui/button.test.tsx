import { describe, expect, it, vi } from "vitest"
import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"

import { Button } from "./button"

describe("Button", () => {
  it("renders its children", () => {
    render(<Button>Click me</Button>)
    expect(screen.getByRole("button", { name: "Click me" })).toBeInTheDocument()
  })

  it("applies the variant and size as data attributes", () => {
    render(
      <Button variant="outline" size="lg">
        Outline
      </Button>
    )
    const button = screen.getByRole("button", { name: "Outline" })
    expect(button).toHaveAttribute("data-variant", "outline")
    expect(button).toHaveAttribute("data-size", "lg")
  })

  it("calls onClick when clicked", async () => {
    const onClick = vi.fn()
    render(<Button onClick={onClick}>Submit</Button>)

    await userEvent.click(screen.getByRole("button", { name: "Submit" }))

    expect(onClick).toHaveBeenCalledOnce()
  })

  it("does not call onClick when disabled", async () => {
    const onClick = vi.fn()
    render(
      <Button onClick={onClick} disabled>
        Submit
      </Button>
    )

    await userEvent.click(screen.getByRole("button", { name: "Submit" }))

    expect(onClick).not.toHaveBeenCalled()
  })
})
