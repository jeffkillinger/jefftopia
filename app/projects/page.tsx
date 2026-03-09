import type { Metadata } from "next";
import { CaseStudyLayout } from "@/app/components/case-study-layout";
import { PageLayout } from "@/app/components/page-layout";
import { caseStudies } from "@/src/data/case-studies";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Projects from the University of Chicago Admissions Platform, highlighting shared architecture, system design decisions, and delivery outcomes.",
};

export default function ProjectsPage() {
  return (
    <PageLayout
      title="Projects"
      description="These four sites were built as part of the University of Chicago Admissions Platform, a composable web architecture using React, Gatsby, Contentful, and GraphQL to support multiple admissions programs with shared components, content models, and deployment workflows."
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
