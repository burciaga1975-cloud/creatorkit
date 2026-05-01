import { NextResponse } from "next/server";
import OpenAI from "openai";

export const runtime = 'nodejs';

export async function POST(req: Request) {
  const openai = new OpenAI({ apiKey: process.env.OPENAI_KEY });
  try {
    const { topic, niche, style } = await req.json();

    if (!topic || !niche || !style) {
      return NextResponse.json(
        { error: "Missing required fields: topic, niche, style" },
        { status: 400 }
      );
    }

    const completion = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      temperature: 0.9,
      messages: [
        {
          role: "system",
          content:
            "You are a YouTube title and hook expert. Always respond with valid JSON only, no markdown.",
        },
        {
          role: "user",
          content: `Generate 10 YouTube video titles using the "${style}" style for a video about "${topic}" in the "${niche}" niche. Then generate 5 compelling hook lines (opening lines for the video).

Return ONLY valid JSON in this exact format:
{"titles": ["title1", "title2", ...], "hooks": ["hook1", "hook2", ...]}`,
        },
      ],
    });

    const raw = completion.choices[0]?.message?.content ?? "";
    const data = JSON.parse(raw);

    return NextResponse.json({
      titles: data.titles ?? [],
      hooks: data.hooks ?? [],
    });
  } catch (error) {
    console.error("Generate titles error:", error);
    return NextResponse.json(
      { error: "Failed to generate titles. Please try again." },
      { status: 500 }
    );
  }
}
