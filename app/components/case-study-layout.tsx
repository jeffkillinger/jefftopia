import Image from "next/image";
import type { CaseStudy } from "@/src/data/case-studies";

type CaseStudyLayoutProps = {
  study: CaseStudy;
};

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

          <div className="overflow-hidden rounded-2xl border border-stone-200/80 bg-white shadow-sm lg:hidden dark:border-stone-800 dark:bg-stone-900">
            <Image
              src={study.imageSrc}
              alt={`${study.title} homepage screenshot`}
              width={1400}
              height={875}
              className="h-auto w-full object-cover"
              priority
            />
          </div>

          <div className="space-y-6">
            <section className="space-y-2">
              <h3 className="text-base font-semibold text-stone-900 dark:text-stone-100">Architecture Overview</h3>
              <p className="text-sm leading-relaxed text-stone-700 dark:text-stone-300">
                {study.architectureOverview}
              </p>
            </section>

            <section className="space-y-2">
              <h3 className="text-base font-semibold text-stone-900 dark:text-stone-100">
                My Role and Responsibilities
              </h3>
              <p className="text-sm leading-relaxed text-stone-700 dark:text-stone-300">{study.role}</p>
            </section>

            <section className="space-y-2">
              <h3 className="text-base font-semibold text-stone-900 dark:text-stone-100">Key Technical Decisions</h3>
              <ul className="space-y-2 text-sm leading-relaxed text-stone-700 dark:text-stone-300">
                {study.technicalDecisions.map((decision) => (
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

        <div className="hidden overflow-hidden rounded-2xl border border-stone-200/80 bg-white shadow-sm lg:block dark:border-stone-800 dark:bg-stone-900">
          <Image
            src={study.imageSrc}
            alt={`${study.title} homepage screenshot`}
            width={1400}
            height={875}
            className="h-auto max-h-[420px] w-full object-cover object-top"
            priority
          />
        </div>
      </section>

      <section className="space-y-2">
        <h3 className="text-base font-semibold text-stone-900 dark:text-stone-100">Challenges and Solutions</h3>
        <ul className="space-y-3 text-sm leading-relaxed text-stone-700 dark:text-stone-300">
          {study.challengesAndSolutions.map((item) => (
            <li key={item.challenge} className="rounded-xl border border-stone-200/80 bg-stone-50 p-4 dark:border-stone-800 dark:bg-stone-900/50">
              <p>
                <span className="font-semibold text-stone-900 dark:text-stone-100">Challenge:</span> {item.challenge}
              </p>
              <p className="mt-1">
                <span className="font-semibold text-stone-900 dark:text-stone-100">Solution:</span> {item.solution}
              </p>
            </li>
          ))}
        </ul>
      </section>

      <section className="space-y-2">
        <h3 className="text-base font-semibold text-stone-900 dark:text-stone-100">Performance Improvements</h3>
        <ul className="space-y-2 text-sm leading-relaxed text-stone-700 dark:text-stone-300">
          {study.performanceImprovements.map((improvement) => (
            <li key={improvement} className="flex gap-2">
              <span aria-hidden="true" className="text-cyan-700 dark:text-cyan-300">
                •
              </span>
              <span>{improvement}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="space-y-2">
        <h3 className="text-base font-semibold text-stone-900 dark:text-stone-100">Deployment Approach</h3>
        <ul className="space-y-2 text-sm leading-relaxed text-stone-700 dark:text-stone-300">
          {study.deploymentApproach.map((step) => (
            <li key={step} className="flex gap-2">
              <span aria-hidden="true" className="text-cyan-700 dark:text-cyan-300">
                •
              </span>
              <span>{step}</span>
            </li>
          ))}
        </ul>
      </section>
    </article>
  );
}
