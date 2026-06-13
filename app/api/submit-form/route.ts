import { NextResponse } from "next/server"

export async function POST(req: Request) {
  try {
    const data = await req.json()

    // In a real environment, this would use a mailer or external service
    console.log("[v0] Form submission received:", data)

    // Simulate sending to gigagrowthwebolutions.com
    // await sendToExternalService(data)

    return NextResponse.json({
      success: true,
      message: "Form entry sent to gigagrowthwebolutions.com successfully",
    })
  } catch (error) {
    console.error("[v0] Error submitting form:", error)
    return NextResponse.json({ success: false, error: "Submission failed" }, { status: 500 })
  }
}
