import Link from "next/link";

type SiteLayoutProps = {
  children: React.ReactNode;
};

const navItems = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/experience", label: "Experience" },
  { href: "/lab", label: "Lab" },
];

export function SiteLayout({ children }: SiteLayoutProps) {
  return (
    <>
      <header className="sticky top-0 z-20 border-b border-stone-200/80 bg-white/90 backdrop-blur dark:border-stone-800 dark:bg-stone-950/90">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-5 py-4">
          <Link href="/" className="text-base font-semibold tracking-tight text-stone-950 dark:text-stone-100">
            Jeff Killinger
          </Link>
          <nav aria-label="Primary" className="flex items-center gap-1 text-sm md:gap-2">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-md px-3 py-2 text-stone-700 transition hover:bg-stone-100 hover:text-stone-950 dark:text-stone-300 dark:hover:bg-stone-900 dark:hover:text-stone-50"
              >
                {item.label}
              </Link>
            ))}
            <a
              href="https://github.com/jeffkillinger"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-md px-3 py-2 text-stone-700 transition hover:bg-stone-100 hover:text-stone-950 dark:text-stone-300 dark:hover:bg-stone-900 dark:hover:text-stone-50"
            >
              GitHub
            </a>
          </nav>
        </div>
      </header>
      <main id="main-content" className="mx-auto w-full max-w-6xl px-5">
        {children}
      </main>
      <footer className="mx-auto mt-12 w-full max-w-6xl border-t border-stone-200/80 px-5 py-6 text-sm text-stone-500 dark:border-stone-800 dark:text-stone-400">
        <p>Jeff Killinger</p>
      </footer>
    </>
  );
}
