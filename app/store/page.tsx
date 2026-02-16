import Image from "next/image";
import Link from "next/link";

const products = [
  {
    id: "jeff-tshirt",
    name: "Jeff T-Shirt",
    price: "$24.00",
    description: "Soft cotton tee with a bold Jefftopia chest print.",
    image: "/store-jeff-tshirt.svg",
  },
  {
    id: "jeff-mug",
    name: "Jeff Mug",
    price: "$16.00",
    description: "Ceramic mug for coffee, tea, and Jeff-fueled meetings.",
    image: "/store-jeff-mug.svg",
  },
  {
    id: "jeff-hat",
    name: "Jeff Hat",
    price: "$22.00",
    description: "Adjustable cap with a stitched J logo on the front.",
    image: "/store-jeff-hat.svg",
  },
];

export default function StorePage() {
  return (
    <main className="min-h-screen bg-zinc-50">
      <header className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-8">
        <Link className="text-sm text-zinc-600 hover:text-zinc-900" href="/">
          ← Back to Jefftopia
        </Link>
        <p className="text-sm text-zinc-500">Dummy merch store</p>
      </header>

      <section className="mx-auto max-w-6xl px-6 pb-16">
        <h1 className="text-4xl font-semibold tracking-tight text-zinc-900 md:text-5xl">Jeff Store</h1>
        <p className="mt-3 max-w-prose text-zinc-600">
          Placeholder product page for future Stripe checkout. Buttons are currently non-functional.
        </p>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {products.map((product) => (
            <article
              key={product.id}
              className="overflow-hidden rounded-3xl border border-zinc-200 bg-white shadow-sm"
            >
              <div className="border-b border-zinc-200 bg-zinc-100 p-4">
                <Image
                  className="h-48 w-full rounded-2xl object-cover"
                  src={product.image}
                  alt={`${product.name} placeholder image`}
                  width={640}
                  height={480}
                />
              </div>

              <div className="space-y-4 p-5">
                <div>
                  <h2 className="text-lg font-semibold text-zinc-900">{product.name}</h2>
                  <p className="mt-1 text-sm text-zinc-600">{product.description}</p>
                </div>

                <div className="flex items-center justify-between">
                  <p className="text-base font-medium text-zinc-900">{product.price}</p>
                  <button
                    type="button"
                    className="rounded-xl bg-zinc-900 px-4 py-2 text-sm font-medium text-white hover:bg-zinc-800"
                  >
                    Purchase
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
