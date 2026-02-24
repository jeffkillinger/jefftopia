import Image from "next/image";
import Link from "next/link";
import { Tag } from "@/app/components/tag";

type CardProps = {
  title: string;
  description: string;
  href: string;
  tags?: string[];
  focus?: string;
  ctaLabel: string;
  imageAlt: string;
  imageSrc?: string;
};

export function Card({
  title,
  description,
  href,
  tags = [],
  focus,
  ctaLabel,
  imageAlt,
  imageSrc = "/images/placeholders/case-study-thumb.svg",
}: CardProps) {
  const shouldPrefetch = href.startsWith("/jeff/") ? false : undefined;

  return (
    <article className="group fade-in overflow-hidden rounded-2xl border border-stone-200/80 bg-white shadow-sm transition hover:-translate-y-1 hover:border-stone-300 dark:border-stone-800 dark:bg-stone-950">
      <div className="relative aspect-[16/9] overflow-hidden border-b border-stone-200/80 bg-stone-100 dark:border-stone-800 dark:bg-stone-900">
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover"
        />
      </div>
      <div className="space-y-4 p-5">
        <div>
          {focus ? (
            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.12em] text-cyan-700 dark:text-cyan-300">
              Focus: {focus}
            </p>
          ) : null}
          <h3 className="text-lg font-semibold tracking-tight text-stone-950 dark:text-stone-100">{title}</h3>
          <p className="mt-2 text-sm leading-relaxed text-stone-700 dark:text-stone-300">{description}</p>
        </div>
        {tags.length > 0 ? (
          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <Tag key={`${title}-${tag}`} label={tag} />
            ))}
          </div>
        ) : null}
        <Link
          href={href}
          prefetch={shouldPrefetch}
          className="inline-flex items-center text-sm font-semibold text-cyan-700 transition hover:text-cyan-600 dark:text-cyan-300 dark:hover:text-cyan-200"
        >
          {ctaLabel}
          <span aria-hidden="true" className="ml-1">
            →
          </span>
        </Link>
      </div>
    </article>
  );
}
