"use client";

import { useState } from "react";

const niches = [
  "General",
  "Finance",
  "Health & Fitness",
  "Relationships",
  "True Crime",
  "Tech",
  "Gaming",
  "Lifestyle",
  "Business",
  "Faceless/Narration",
];

const styles = [
  "Curiosity Gap",
  "How I Did It",
  "List Format",
  "Story/Reveal",
  "Warning/Alert",
  "Controversial Take",
];

export default function TitleSnapPage() {
  const [topic, setTopic] = useState("");
  const [niche, setNiche] = useState("General");
  const [style, setStyle] = useState("Curiosity Gap");
  const [titles, setTitles] = useState<string[]>([]);
  const [hooks, setHooks] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [copied, setCopied] = useState<number | null>(null);

  async function handleGenerate() {
    if (!topic.trim()) return;
    setLoading(true);
    setError("");
    setTitles([]);
    setHooks([]);

    try {
      const res = await fetch("/api/generate-titles", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ topic, niche, style }),
      });

      if (!res.ok) {
        throw new Error("API request failed");
      }

      const data = await res.json();
      setTitles(data.titles ?? []);
      setHooks(data.hooks ?? []);
    } catch {
      setError("Failed to generate titles. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  function copyToClipboard(text: string, index: number) {
    navigator.clipboard.writeText(text);
    setCopied(index);
    setTimeout(() => setCopied(null), 2000);
  }

  return (
    <section className="mx-auto max-w-2xl px-4 py-20">
      <h1 className="text-4xl font-extrabold">
        Title<span className="text-[#8b5cf6]">Snap</span>
      </h1>
      <p className="mt-2 text-gray-400">
        Generate 10 high-CTR YouTube titles instantly
      </p>

      {/* Form */}
      <div className="mt-10 space-y-4">
        <div>
          <label className="mb-1 block text-sm font-medium text-gray-300">
            What is your video about?
          </label>
          <textarea
            rows={3}
            placeholder="e.g. How I saved $50k in one year on a $60k salary"
            value={topic}
            onChange={(e) => setTopic(e.target.value)}
            className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-gray-500 focus:border-[#8b5cf6] focus:outline-none focus:ring-1 focus:ring-[#8b5cf6]"
          />
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label className="mb-1 block text-sm font-medium text-gray-300">
              Niche
            </label>
            <select
              value={niche}
              onChange={(e) => setNiche(e.target.value)}
              className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white focus:border-[#8b5cf6] focus:outline-none focus:ring-1 focus:ring-[#8b5cf6]"
            >
              {niches.map((n) => (
                <option key={n} value={n} className="bg-[#0a0a0a]">
                  {n}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="mb-1 block text-sm font-medium text-gray-300">
              Style
            </label>
            <select
              value={style}
              onChange={(e) => setStyle(e.target.value)}
              className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white focus:border-[#8b5cf6] focus:outline-none focus:ring-1 focus:ring-[#8b5cf6]"
            >
              {styles.map((s) => (
                <option key={s} value={s} className="bg-[#0a0a0a]">
                  {s}
                </option>
              ))}
            </select>
          </div>
        </div>

        <button
          onClick={handleGenerate}
          disabled={loading || !topic.trim()}
          className="w-full rounded-xl bg-[#8b5cf6] py-3.5 font-semibold text-white transition-colors hover:bg-[#7c3aed] disabled:cursor-not-allowed disabled:opacity-50"
        >
          {loading ? (
            <span className="inline-flex items-center gap-2">
              <svg
                className="h-5 w-5 animate-spin"
                viewBox="0 0 24 24"
                fill="none"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                />
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                />
              </svg>
              Generating…
            </span>
          ) : (
            "Generate Titles"
          )}
        </button>
      </div>

      {/* Error */}
      {error && (
        <div className="mt-6 rounded-xl border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-400">
          {error}
        </div>
      )}

      {/* Results: Titles */}
      {titles.length > 0 && (
        <div className="mt-10">
          <h2 className="mb-4 text-xl font-bold">Generated Titles</h2>
          <div className="space-y-2">
            {titles.map((title, i) => (
              <div
                key={i}
                className="flex items-center justify-between gap-3 rounded-xl border border-white/10 bg-white/5 px-4 py-3"
              >
                <span className="text-sm text-white">{title}</span>
                <button
                  onClick={() => copyToClipboard(title, i)}
                  className="shrink-0 rounded-lg border border-white/10 px-3 py-1 text-xs text-gray-400 transition-colors hover:bg-white/10 hover:text-white"
                >
                  {copied === i ? "Copied!" : "Copy"}
                </button>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Results: Hooks */}
      {hooks.length > 0 && (
        <div className="mt-10">
          <h2 className="mb-4 text-xl font-bold">Hook Lines</h2>
          <div className="space-y-2">
            {hooks.map((hook, i) => (
              <div
                key={i}
                className="flex items-center justify-between gap-3 rounded-xl border border-white/10 bg-white/5 px-4 py-3"
              >
                <span className="text-sm text-white">{hook}</span>
                <button
                  onClick={() => copyToClipboard(hook, i + 100)}
                  className="shrink-0 rounded-lg border border-white/10 px-3 py-1 text-xs text-gray-400 transition-colors hover:bg-white/10 hover:text-white"
                >
                  {copied === i + 100 ? "Copied!" : "Copy"}
                </button>
              </div>
            ))}
          </div>
        </div>
      )}
    </section>
  );
}
