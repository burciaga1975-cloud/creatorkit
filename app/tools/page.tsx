import Link from "next/link";

const tools = [
  {
    name: "TitleSnap",
    desc: "Generate 10 high-CTR YouTube titles instantly. Powered by AI, tuned for clicks.",
    live: true,
    href: "/tools/titlesnap",
  },
  {
    name: "ScriptSnap",
    desc: "AI-powered full video scripts written in your voice. Upload a transcript and get a polished script back.",
    live: false,
    href: "#",
  },
  {
    name: "HookSnap",
    desc: "First-line hooks that stop the scroll. Grab viewers in the first 5 seconds.",
    live: false,
    href: "#",
  },
  {
    name: "ThumbnailSnap",
    desc: "Thumbnail text & visual concepts that demand clicks. Never second-guess your thumbnail again.",
    live: false,
    href: "#",
  },
];

export default function ToolsPage() {
  return (
    <section className="mx-auto max-w-5xl px-4 py-20">
      <h1 className="mb-2 text-center text-4xl font-extrabold">
        Creator Tools
      </h1>
      <p className="mb-12 text-center text-gray-400">
        AI-powered tools built for YouTube creators
      </p>

      <div className="grid gap-6 sm:grid-cols-2">
        {tools.map((t) => (
          <Link
            key={t.name}
            href={t.href}
            className={`group relative rounded-2xl border p-8 transition-all ${
              t.live
                ? "border-[#8b5cf6]/60 bg-white/5 hover:border-[#8b5cf6] hover:bg-white/[0.08]"
                : "pointer-events-none border-white/10 bg-white/[0.02] opacity-60"
            }`}
          >
            <div className="mb-4 flex items-center gap-3">
              <h2 className="text-xl font-bold text-white">{t.name}</h2>
              {t.live ? (
                <span className="rounded-full bg-[#8b5cf6]/20 px-2 py-0.5 text-xs font-medium text-[#8b5cf6]">
                  LIVE
                </span>
              ) : (
                <span className="rounded-full bg-white/10 px-2 py-0.5 text-xs font-medium text-gray-400">
                  Coming Soon
                </span>
              )}
            </div>
            <p className="text-sm leading-relaxed text-gray-400">{t.desc}</p>
            {t.live && (
              <p className="mt-4 text-sm font-medium text-[#8b5cf6] transition-colors group-hover:text-[#a78bfa]">
                Try it free &rarr;
              </p>
            )}
          </Link>
        ))}
      </div>
    </section>
  );
}
