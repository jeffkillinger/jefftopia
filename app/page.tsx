import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen">
      <header className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6">
        <div className="flex items-center gap-3">
          <div className="grid h-10 w-10 place-items-center rounded-xl border border-zinc-200">
            J
          </div>
          <span className="text-lg font-semibold tracking-tight">Jefftopia</span>
        </div>

        <nav className="flex items-center gap-4 text-sm">
          <Link className="text-zinc-600 hover:text-zinc-900" href="/store">
            Store
          </Link>
          <a className="text-zinc-600 hover:text-zinc-900" href="#features">
            Features
          </a>
          <a className="text-zinc-600 hover:text-zinc-900" href="#about">
            About
          </a>
          <button className="rounded-xl border border-zinc-200 px-4 py-2 text-zinc-900 hover:bg-zinc-50">
            Sign in
          </button>
        </nav>
      </header>

      <section className="mx-auto grid max-w-6xl gap-10 px-6 pb-16 pt-10 md:grid-cols-2 md:items-center">
        <div className="space-y-6">
          <div className="inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-white px-3 py-1 text-xs text-zinc-700">
            <span className="font-medium">New</span>
            <span className="text-zinc-500">The internet’s most unnecessary social network</span>
          </div>

          <h1 className="text-4xl font-semibold tracking-tight md:text-5xl">
            A home for Jeffs.
            <span className="block text-zinc-500">Everyone else can look, but can’t post.</span>
          </h1>

          <p className="max-w-prose text-base leading-relaxed text-zinc-600">
            Jefftopia is a playful, well-built Next.js app that doubles as a portfolio-grade
            demo of authentication, content feeds, payments, and community features.
          </p>

          <div className="flex flex-wrap gap-3">
            <button className="rounded-xl bg-zinc-900 px-5 py-3 text-sm font-medium text-white hover:bg-zinc-800">
              Get started
            </button>
            <Link
              className="rounded-xl border border-zinc-200 px-5 py-3 text-sm font-medium text-zinc-900 hover:bg-zinc-50"
              href="/store"
            >
              Shop merch
            </Link>
            <button className="rounded-xl border border-zinc-200 px-5 py-3 text-sm font-medium text-zinc-900 hover:bg-zinc-50">
              See the roadmap
            </button>
          </div>

          <div className="flex flex-wrap gap-3 text-xs text-zinc-500">
            <span className="rounded-full border border-zinc-200 px-3 py-1">Next.js</span>
            <span className="rounded-full border border-zinc-200 px-3 py-1">TypeScript</span>
            <span className="rounded-full border border-zinc-200 px-3 py-1">Tailwind</span>
            <span className="rounded-full border border-zinc-200 px-3 py-1">Auth (soon)</span>
            <span className="rounded-full border border-zinc-200 px-3 py-1">Stripe (soon)</span>
          </div>
        </div>

        <div className="rounded-3xl border border-zinc-200 bg-gradient-to-b from-zinc-50 to-white p-6">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <p className="text-sm font-medium">Today in Jefftopia</p>
              <span className="text-xs text-zinc-500">live feed mock</span>
            </div>

            {[
              { title: "Jeff posted a hot take", body: "Is it ethical to limit a website to Jeffs only?" },
              { title: "Jeff asked a question", body: "Can we detect Jeff-ness without being weird about it?" },
              { title: "Jeff started a thread", body: "Show me your favorite Jeff moments in movies." },
            ].map((item) => (
              <div key={item.title} className="rounded-2xl border border-zinc-200 bg-white p-4">
                <p className="text-sm font-medium">{item.title}</p>
                <p className="mt-1 text-sm text-zinc-600">{item.body}</p>
              </div>
            ))}

            <div className="rounded-2xl border border-dashed border-zinc-300 bg-white p-4 text-sm text-zinc-600">
              Next up: real auth, real posts, real Jeff verification.
            </div>
          </div>
        </div>
      </section>

      <section id="features" className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="text-2xl font-semibold tracking-tight">Features</h2>
        <p className="mt-2 max-w-prose text-zinc-600">
          Built like a real product, even if the premise is completely ridiculous.
        </p>

        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {[
            { title: "Jeff-only posting", desc: "Read-only for non-Jeffs, full access for Jeffs." },
            { title: "Discussion threads", desc: "Reddit-style posts, comments, upvotes." },
            { title: "Payments", desc: "Stripe-powered Jeff+ perks and supporter plans." },
          ].map((f) => (
            <div key={f.title} className="rounded-3xl border border-zinc-200 p-6">
              <p className="text-sm font-medium">{f.title}</p>
              <p className="mt-2 text-sm text-zinc-600">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <footer id="about" className="border-t border-zinc-200">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-6 py-10 text-sm text-zinc-600 md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} Jefftopia. A serious build for a silly idea.</p>
          <p className="text-zinc-500">Made with Next.js, TypeScript, Tailwind.</p>
        </div>
      </footer>
    </main>
  );
}
