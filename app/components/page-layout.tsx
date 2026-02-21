type PageLayoutProps = {
  eyebrow?: string;
  title: string;
  description: string;
  children: React.ReactNode;
};

export function PageLayout({ eyebrow, title, description, children }: PageLayoutProps) {
  return (
    <div className="space-y-10 py-10 md:py-14">
      <header className="max-w-3xl space-y-4">
        {eyebrow ? (
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-700 dark:text-cyan-300">
            {eyebrow}
          </p>
        ) : null}
        <h1 className="text-3xl font-semibold tracking-tight text-stone-950 md:text-5xl dark:text-stone-100">
          {title}
        </h1>
        <p className="text-base leading-relaxed text-stone-700 md:text-lg dark:text-stone-300">
          {description}
        </p>
      </header>
      {children}
    </div>
  );
}
