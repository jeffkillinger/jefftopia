import type { Metadata } from "next";
import { CaseStudyLayout } from "@/app/components/case-study-layout";
import { PageLayout } from "@/app/components/page-layout";
import { caseStudies } from "@/src/data/case-studies";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Projects from University of Chicago web platforms, including architecture decisions, API integration, performance work, and deployment strategy.",
};

export default function ProjectsPage() {
  return (
    <PageLayout
      title="Projects"
      description="Detailed production projects covering architecture, integration patterns, delivery workflows, and measurable engineering outcomes."
    >
      <div className="space-y-8">
        {caseStudies.map((study) => (
          <section key={study.slug} id={study.slug} className="scroll-mt-24">
            <CaseStudyLayout study={study} />
          </section>
        ))}
      </div>
    </PageLayout>
  );
}
