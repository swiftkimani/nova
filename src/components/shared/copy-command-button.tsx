"use client"

import * as React from "react"

import { Button, buttonVariants } from "@/components/ui/button"
import type { VariantProps } from "class-variance-authority"

export function CopyCommandButton({
  command,
  children,
  ...props
}: {
  command: string
  children: React.ReactNode
} & VariantProps<typeof buttonVariants>) {
  return (
    <Button {...props} onClick={() => navigator.clipboard?.writeText(command)}>
      {children}
    </Button>
  )
}
