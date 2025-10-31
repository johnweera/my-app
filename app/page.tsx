export default function Home() {
  const features = [
    {
      title: "AI Voice Practice",
      description:
        "Real-time pronunciation feedback with native English and Thai voices.",
      icon: "🎙️",
    },
    {
      title: "Smart Conversation",
      description:
        "Chat naturally in both languages and get instant corrections from AI.",
      icon: "💬",
    },
    {
      title: "Learning Roadmaps",
      description:
        "Follow guided paths from absolute beginner through IELTS preparation.",
      icon: "📚",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-50 via-white to-indigo-100 font-sans text-zinc-900 dark:from-slate-900 dark:via-slate-950 dark:to-black dark:text-zinc-100">
      <main className="mx-auto flex min-h-screen w-full max-w-6xl flex-col px-6 py-16 sm:px-12 lg:px-20">
        {/* Hero section introduces the brand message */}
        <section className="flex flex-1 flex-col items-center justify-center text-center sm:items-start sm:text-left">
          <div className="w-full max-w-3xl rounded-3xl bg-white/80 p-10 shadow-lg backdrop-blur-lg dark:bg-slate-900/80">
            <span className="text-sm font-semibold uppercase tracking-widest text-indigo-600 dark:text-indigo-400">
              DualSkill
            </span>
            <h1 className="mt-4 text-4xl font-bold leading-tight tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-5xl">
              DualSkill: Learn English & Thai with AIG
            </h1>
            <p className="mt-6 text-lg leading-8 text-zinc-600 dark:text-zinc-300">
              Speak fluently. Learn smart. Practice anywhere.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <a
                href="/signup"
                className="inline-flex items-center justify-center rounded-full bg-indigo-600 px-8 py-3 text-base font-semibold text-white transition hover:bg-indigo-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Get Started
              </a>
            </div>
          </div>
        </section>

        {/* Feature grid highlights the platform's differentiators */}
        <section className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <article
              key={feature.title}
              className="flex flex-col rounded-2xl border border-zinc-200 bg-white/90 p-8 shadow-md transition hover:-translate-y-1 hover:shadow-xl dark:border-slate-800 dark:bg-slate-900/70"
            >
              <span className="text-4xl" aria-hidden>
                {feature.icon}
              </span>
              <h3 className="mt-6 text-xl font-semibold text-zinc-900 dark:text-zinc-100">
                {feature.title}
              </h3>
              <p className="mt-3 text-base leading-7 text-zinc-600 dark:text-zinc-300">
                {feature.description}
              </p>
            </article>
          ))}
        </section>
      </main>
    </div>
  );
}
