export type CaseStudy = {
  slug: string;
  title: string;
  liveUrl: string;
  summary: string;
  role: string;
  architectureOverview: string;
  technicalDecisions: string[];
  challengesAndSolutions: Array<{
    challenge: string;
    solution: string;
  }>;
  performanceImprovements: string[];
  deploymentApproach: string[];
  technologies: string[];
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "uchicago-admissions-ecosystem",
    title: "UChicago Admissions Ecosystem",
    liveUrl: "https://collegeadmissions.uchicago.edu/",
    summary:
      "I led frontend architecture and implementation for the admissions ecosystem, aligning multiple stakeholder teams on a shared component model and content publishing workflow.",
    role:
      "Frontend architecture lead and implementation owner for admissions web experiences across recruitment, application guidance, and conversion-focused content.",
    architectureOverview:
      "Built a modular React and Next.js frontend with CMS-driven content models, shared UI primitives, and API-backed data modules for forms, event information, and campaign landing pages.",
    technicalDecisions: [
      "Standardized page composition using reusable section modules to reduce one-off templates.",
      "Introduced typed API clients for admissions-related endpoints and content services.",
      "Implemented progressive enhancement for interactive tools to keep key pages resilient.",
      "Defined accessibility-first component requirements as a merge gate in code review.",
    ],
    challengesAndSolutions: [
      {
        challenge: "High content velocity from multiple non-engineering teams.",
        solution:
          "Designed a predictable CMS schema and a constrained component library so editors could build pages safely without engineering intervention.",
      },
      {
        challenge: "Inconsistent UX patterns across legacy admissions pages.",
        solution:
          "Created a shared design token layer and migration playbook to unify hierarchy, spacing, and interaction behavior.",
      },
    ],
    performanceImprovements: [
      "Reduced render-blocking assets by consolidating scripts and eliminating legacy dependencies.",
      "Improved Core Web Vitals through image sizing discipline, lazy loading, and route-level code splitting.",
      "Added routine Lighthouse checks during release validation.",
    ],
    deploymentApproach: [
      "Automated CI pipelines for linting, type checks, and production build validation.",
      "Used staged environments for stakeholder signoff before production promotion.",
      "Rolled out high-impact changes incrementally with monitoring and rollback plans.",
    ],
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "GraphQL", "REST", "CMS APIs"],
  },
  {
    slug: "uchicago-summer-programs",
    title: "Summer Programs",
    liveUrl: "https://summer.uchicago.edu/",
    summary:
      "I led frontend architecture and implementation for the Summer Programs site, delivering a scalable enrollment-focused platform for diverse program offerings and audiences.",
    role:
      "Lead frontend engineer responsible for component architecture, integration patterns, and release quality for the summer programs web platform.",
    architectureOverview:
      "Implemented a structured frontend system with reusable content blocks, program metadata surfaces, and API-backed search/filter patterns to support rapid program updates.",
    technicalDecisions: [
      "Modeled program data with typed interfaces to support filtering and cross-linking experiences.",
      "Adopted route-level data fetching boundaries to keep pages fast under high traffic periods.",
      "Built flexible CTA and form components that could support campaign-specific requirements.",
      "Prioritized semantic HTML patterns for accessibility and SEO durability.",
    ],
    challengesAndSolutions: [
      {
        challenge: "Frequent deadlines tied to seasonal enrollment windows.",
        solution:
          "Established release templates and predictable deployment checklists that shortened turnaround time without sacrificing QA.",
      },
      {
        challenge: "Large amount of program variation with shared information architecture.",
        solution:
          "Defined composable content patterns so specialized pages could be built from the same stable system.",
      },
    ],
    performanceImprovements: [
      "Reduced page weight by using optimized images and removing duplicate client-side scripts.",
      "Improved interaction latency by limiting client rendering to truly interactive sections.",
      "Maintained Lighthouse accessibility and performance baselines during each release cycle.",
    ],
    deploymentApproach: [
      "Connected Git-based workflows to CI/CD for consistent preview and production releases.",
      "Integrated quality gates for linting, testing, and bundle validation.",
      "Used release coordination with content and program teams to minimize launch risk.",
    ],
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "REST APIs", "CI/CD"],
  },
  {
    slug: "uchicago-financial-aid",
    title: "Financial Aid",
    liveUrl: "https://financialaid.uchicago.edu/",
    summary:
      "I led frontend architecture and implementation for the Financial Aid website, focusing on clarity, trust, and maintainability for high-stakes student and family workflows.",
    role:
      "Frontend lead for technical planning, implementation standards, and integration of aid-related content and service endpoints.",
    architectureOverview:
      "Delivered a content-first architecture with reusable information modules, API-integrated calculators and forms, and strict accessibility standards for critical user journeys.",
    technicalDecisions: [
      "Established a content hierarchy optimized for complex policy and eligibility information.",
      "Built typed integration layers for aid and form-related services.",
      "Created reusable FAQ and policy components to reduce duplication and drift.",
      "Enforced keyboard and screen reader criteria for all interactive elements.",
    ],
    challengesAndSolutions: [
      {
        challenge: "Communicating dense policy information without overwhelming users.",
        solution:
          "Introduced progressive disclosure patterns and scannable content templates that improved comprehension.",
      },
      {
        challenge: "Maintaining consistency across policy updates and deadline changes.",
        solution:
          "Implemented centralized content modules and publishing controls to keep updates synchronized.",
      },
    ],
    performanceImprovements: [
      "Improved page speed by streamlining dependencies and minimizing unnecessary client JS.",
      "Reduced CLS via explicit media sizing and predictable layout structure.",
      "Improved accessibility scores through semantic heading and form control refinements.",
    ],
    deploymentApproach: [
      "Used CI pipelines to validate lint, typing, and build stability on every merge.",
      "Released through staged verification with stakeholders and QA.",
      "Monitored post-deploy behavior to catch and resolve regressions quickly.",
    ],
    technologies: ["React", "TypeScript", "GraphQL", "REST", "Tailwind CSS", "CMS", "GitHub Actions"],
  },
  {
    slug: "uchicago-career-advancement",
    title: "Career Advancement",
    liveUrl: "https://careeradvancement.uchicago.edu/",
    summary:
      "I led frontend architecture and implementation for Career Advancement, modernizing content delivery and improving discoverability of services, events, and student resources.",
    role:
      "Senior frontend developer driving architecture, implementation quality, and collaboration with career services teams.",
    architectureOverview:
      "Developed a modular frontend experience with robust content modeling, event and resource integrations, and reusable interfaces for service pathways.",
    technicalDecisions: [
      "Created shared card and listing systems for events, advising services, and resources.",
      "Used typed query layers to merge CMS and service data safely.",
      "Implemented resilient fallback patterns for API outages.",
      "Optimized for mobile-first usage due to student engagement patterns.",
    ],
    challengesAndSolutions: [
      {
        challenge: "Multiple user types with different paths and priorities.",
        solution:
          "Structured navigation and page templates around clear intent-based journeys for students, employers, and alumni.",
      },
      {
        challenge: "Integrating dynamic event and resource feeds reliably.",
        solution:
          "Built typed adapters and validation guards to normalize external data before rendering.",
      },
    ],
    performanceImprovements: [
      "Increased mobile performance by reducing large script payloads and deferring non-critical behavior.",
      "Improved perceived speed with consistent skeleton/loading states where data latency existed.",
      "Maintained accessibility compliance through regular audits and targeted remediation.",
    ],
    deploymentApproach: [
      "Established automated release checks and branch-based preview workflows.",
      "Deployed through controlled promotion gates with rollback support.",
      "Tracked runtime metrics and error logs as part of post-release validation.",
    ],
    technologies: ["Next.js", "React", "TypeScript", "GraphQL", "REST", "CI/CD", "Cloud Hosting"],
  },
];
