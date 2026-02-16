const products = [
  {
    name: "Jeff T-Shirt",
    description:
      "A premium cotton tee that says what everyone's already thinking: you're a Jeff. Available in classic black with the Jefftopia wordmark.",
    price: "$29.99",
    image: "/store/tshirt.svg",
  },
  {
    name: "Jeff Mug",
    description:
      "Start every morning the Jeff way. This 12 oz ceramic mug features the Jefftopia crest and holds exactly the right amount of coffee.",
    price: "$14.99",
    image: "/store/mug.svg",
  },
  {
    name: "Jeff Hat",
    description:
      "A structured snapback for the Jeff who wants to be recognized from across the room. Embroidered 'J' logo on the front.",
    price: "$24.99",
    image: "/store/hat.svg",
  },
];

export default function Store() {
  return (
    <main className="min-h-screen">
      <header className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6">
        <a href="/" className="flex items-center gap-3">
          <div className="grid h-10 w-10 place-items-center rounded-xl border border-zinc-200">
            J
          </div>
          <span className="text-lg font-semibold tracking-tight">
            Jefftopia
          </span>
        </a>

        <nav className="flex items-center gap-4 text-sm">
          <a className="text-zinc-600 hover:text-zinc-900" href="/">
            Home
          </a>
          <a className="font-medium text-zinc-900" href="/store">
            Store
          </a>
          <button className="rounded-xl border border-zinc-200 px-4 py-2 text-zinc-900 hover:bg-zinc-50">
            Sign in
          </button>
        </nav>
      </header>

      <section className="mx-auto max-w-6xl px-6 pt-10 pb-4">
        <div className="inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-white px-3 py-1 text-xs text-zinc-700">
          <span className="font-medium">Merch</span>
          <span className="text-zinc-500">Rep your Jeff-ness</span>
        </div>

        <h1 className="mt-4 text-4xl font-semibold tracking-tight md:text-5xl">
          The Jeff Store
        </h1>
        <p className="mt-3 max-w-prose text-base leading-relaxed text-zinc-600">
          Official Jefftopia merchandise. Every purchase supports the
          Jeff ecosystem and fuels development of increasingly niche Jeff
          features.
        </p>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-10">
        <div className="grid gap-6 md:grid-cols-3">
          {products.map((product) => (
            <div
              key={product.name}
              className="flex flex-col rounded-3xl border border-zinc-200 bg-gradient-to-b from-zinc-50 to-white"
            >
              <div className="flex h-64 items-center justify-center rounded-t-3xl bg-zinc-100 p-8">
                <img
                  src={product.image}
                  alt={product.name}
                  className="h-full w-full object-contain"
                />
              </div>

              <div className="flex flex-1 flex-col p-6">
                <div className="flex items-start justify-between">
                  <h2 className="text-lg font-semibold">{product.name}</h2>
                  <span className="rounded-full bg-zinc-900 px-3 py-1 text-xs font-medium text-white">
                    {product.price}
                  </span>
                </div>

                <p className="mt-3 flex-1 text-sm leading-relaxed text-zinc-600">
                  {product.description}
                </p>

                <button className="mt-6 w-full rounded-xl bg-zinc-900 px-5 py-3 text-sm font-medium text-white hover:bg-zinc-800">
                  Buy now
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-10">
        <div className="rounded-3xl border border-dashed border-zinc-300 bg-white p-8 text-center">
          <p className="text-sm font-medium text-zinc-900">
            Payments coming soon
          </p>
          <p className="mt-2 text-sm text-zinc-600">
            Stripe integration is on the roadmap. For now, these buttons
            are purely aspirational.
          </p>
        </div>
      </section>

      <footer className="border-t border-zinc-200">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-6 py-10 text-sm text-zinc-600 md:flex-row md:items-center md:justify-between">
          <p>
            &copy; {new Date().getFullYear()} Jefftopia. A serious build for a
            silly idea.
          </p>
          <p className="text-zinc-500">
            Made with Next.js, TypeScript, Tailwind.
          </p>
        </div>
      </footer>
    </main>
  );
}
