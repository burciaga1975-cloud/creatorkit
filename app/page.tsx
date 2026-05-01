import Link from "next/link";

const tools = [
  {
    name: "TitleSnap",
    desc: "Generate 10 high-CTR YouTube titles instantly",
    live: true,
    href: "/tools/titlesnap",
  },
  {
    name: "ScriptSnap",
    desc: "AI-powered full video scripts in your voice",
    live: false,
    href: "#",
  },
  {
    name: "HookSnap",
    desc: "First-line hooks that stop the scroll",
    live: false,
    href: "#",
  },
  {
    name: "ThumbnailSnap",
    desc: "Thumbnail text & concepts that demand clicks",
    live: false,
    href: "#",
  },
];

function ToolCard({
  name,
  desc,
  live,
  href,
}: {
  name: string;
  desc: string;
  live: boolean;
  href: string;
}) {
  return (
    <Link
      href={href}
      className={`group relative rounded-2xl border p-6 transition-all ${
        live
          ? "border-[#8b5cf6]/60 bg-white/5 hover:border-[#8b5cf6] hover:bg-white/[0.08]"
          : "pointer-events-none border-white/10 bg-white/[0.02] opacity-60"
      }`}
    >
      {live && (
        <span className="absolute right-4 top-4 rounded-full bg-[#8b5cf6]/20 px-2 py-0.5 text-xs font-medium text-[#8b5cf6]">
          LIVE
        </span>
      )}
      {!live && (
        <span className="absolute right-4 top-4 rounded-full bg-white/10 px-2 py-0.5 text-xs font-medium text-gray-400">
          Coming Soon
        </span>
      )}
      <h3 className="mb-2 text-lg font-semibold text-white">{name}</h3>
      <p className="text-sm text-gray-400">{desc}</p>
    </Link>
  );
}

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="flex flex-col items-center px-4 pb-20 pt-24 text-center md:pt-32">
        <h1 className="max-w-3xl text-4xl font-extrabold leading-tight tracking-tight md:text-6xl">
          The AI Toolkit for{" "}
          <span className="text-[#8b5cf6]">YouTube Creators</span>
        </h1>
        <p className="mt-6 max-w-xl text-lg text-gray-400">
          Stop staring at a blank page. Generate hooks, titles, scripts and more
          in seconds.
        </p>
        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
          <Link
            href="/tools/titlesnap"
            className="rounded-xl bg-[#8b5cf6] px-8 py-3.5 font-semibold text-white transition-colors hover:bg-[#7c3aed]"
          >
            Try TitleSnap Free
          </Link>
          <Link
            href="/tools"
            className="rounded-xl border border-white/20 px-8 py-3.5 font-semibold text-white transition-colors hover:bg-white/10"
          >
            Browse Tools
          </Link>
        </div>
      </section>

      {/* Tools Grid */}
      <section className="mx-auto max-w-5xl px-4 pb-20">
        <h2 className="mb-8 text-center text-2xl font-bold">
          Creator Tools
        </h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {tools.map((t) => (
            <ToolCard key={t.name} {...t} />
          ))}
        </div>
      </section>

      {/* Prompt Pack Promo */}
      <section className="mx-auto max-w-3xl px-4 pb-24">
        <div className="rounded-2xl border border-white/10 bg-white/5 p-8 text-center md:p-12">
          <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-[#8b5cf6]">
            Prompt Pack
          </p>
          <h2 className="text-3xl font-bold">$17 one-time</h2>
          <p className="mt-4 text-gray-400">
            100 battle-tested prompts for YouTube creators. Hooks, titles,
            scripts, thumbnails, descriptions, and more.
          </p>
          <a
            href="https://gumroad.com/l/creatorkit"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-block rounded-xl bg-[#8b5cf6] px-8 py-3.5 font-semibold text-white transition-colors hover:bg-[#7c3aed]"
          >
            Get the Pack &rarr;
          </a>
        </div>
      </section>
    </>
  );
}
