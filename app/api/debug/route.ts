import { NextResponse } from "next/server";
export const runtime = 'nodejs';
export async function GET() {
  return NextResponse.json({
    hasOpenAIKey: !!process.env.OPENAI_KEY,
    keyPrefix: process.env.OPENAI_KEY?.substring(0, 10) ?? "not set",
  });
}
