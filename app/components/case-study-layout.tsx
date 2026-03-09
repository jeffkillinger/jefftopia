import Image from "next/image";
import type { CaseStudy } from "@/src/data/case-studies";

type CaseStudyLayoutProps = {
  study: CaseStudy;
};

function CaseStudyImageStack({ study, className }: { study: CaseStudy; className?: string }) {
  return (
    <div className={className}>
      <div>
        <p className="mb-2 text-xs uppercase tracking-wide text-stone-500 dark:text-stone-400">Homepage</p>
        <div className="overflow-hidden rounded-2xl border border-stone-200/80 bg-white shadow-sm dark:border-stone-800 dark:bg-stone-900">
          <Image
            src={study.imageSrc}
            alt={`${study.title} homepage screenshot`}
            width={1400}
            height={875}
            className="h-auto w-full object-cover"
            priority
          />
        </div>
      </div>
    </div>
  );
}

export function CaseStudyLayout({ study }: CaseStudyLayoutProps) {
  return (
    <article className="fade-in space-y-7 rounded-2xl border border-stone-200/80 bg-white p-6 shadow-sm md:p-8 dark:border-stone-800 dark:bg-stone-950">
      <section className="grid items-start gap-10 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="space-y-6">
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold tracking-tight text-stone-950 dark:text-stone-100">
              {study.title}
            </h2>
            <p className="text-sm leading-relaxed text-stone-700 dark:text-stone-300">{study.summary}</p>
            <a
              href={study.liveUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center text-sm font-semibold text-cyan-700 transition hover:text-cyan-600 dark:text-cyan-300 dark:hover:text-cyan-200"
            >
              Visit Live Site
              <span aria-hidden="true" className="ml-1">
                ↗
              </span>
            </a>
          </div>

          <CaseStudyImageStack study={study} className="lg:hidden" />

          <div className="space-y-6">
            <section className="space-y-2">
              <h3 className="text-base font-semibold text-stone-900 dark:text-stone-100">My Role</h3>
              <p className="text-sm leading-relaxed text-stone-700 dark:text-stone-300">{study.role}</p>
            </section>

            <section className="space-y-2">
              <h3 className="text-base font-semibold text-stone-900 dark:text-stone-100">Architecture</h3>
              <ul className="space-y-2 text-sm leading-relaxed text-stone-700 dark:text-stone-300">
                {study.architecture.map((item) => (
                  <li key={item} className="flex gap-2">
                    <span aria-hidden="true" className="text-cyan-700 dark:text-cyan-300">
                      •
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </section>

            <section className="space-y-2">
              <h3 className="text-base font-semibold text-stone-900 dark:text-stone-100">Key Decisions</h3>
              <ul className="space-y-2 text-sm leading-relaxed text-stone-700 dark:text-stone-300">
                {study.keyDecisions.map((decision) => (
                  <li key={decision} className="flex gap-2">
                    <span aria-hidden="true" className="text-cyan-700 dark:text-cyan-300">
                      •
                    </span>
                    <span>{decision}</span>
                  </li>
                ))}
              </ul>
            </section>
          </div>
        </div>

        <CaseStudyImageStack study={study} className="hidden lg:block" />
      </section>

      <section className="space-y-2">
        <h3 className="text-base font-semibold text-stone-900 dark:text-stone-100">Impact</h3>
        <ul className="space-y-2 text-sm leading-relaxed text-stone-700 dark:text-stone-300">
          {study.impact.map((improvement) => (
            <li key={improvement} className="flex gap-2">
              <span aria-hidden="true" className="text-cyan-700 dark:text-cyan-300">
                •
              </span>
              <span>{improvement}</span>
            </li>
          ))}
        </ul>
      </section>
    </article>
  );
}
