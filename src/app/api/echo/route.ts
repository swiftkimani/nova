import { NextResponse } from "next/server"
import { z } from "zod"

const echoSchema = z.object({
  message: z.string().min(1),
})

export async function POST(request: Request) {
  const body = await request.json().catch(() => null)
  const parsed = echoSchema.safeParse(body)

  if (!parsed.success) {
    return NextResponse.json(
      { error: "Invalid request body", details: parsed.error.flatten() },
      { status: 400 }
    )
  }

  return NextResponse.json({ message: parsed.data.message })
}
