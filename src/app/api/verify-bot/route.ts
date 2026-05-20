import { NextResponse } from "next/server"

export async function POST() {
  return NextResponse.json({
    success: true,
    message: "Verification service coming soon",
  })
}

export async function GET() {
  return NextResponse.json({
    success: true,
    message: "Verify Bot API is running",
  })
}