export type CaseStudy = {
  slug: string;
  title: string;
  imageSrc: string;
  liveUrl: string;
  homepageDescription: string;
  homepageFocus: string;
  summary: string;
  role: string;
  architecture: string[];
  keyDecisions: string[];
  impact: string[];
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "uchicago-admissions-ecosystem",
    title: "UChicago Admissions",
    imageSrc: "/images/projects/college-admissions.webp",
    liveUrl: "https://collegeadmissions.uchicago.edu/",
    homepageDescription:
      "Built the primary admissions site using reusable React components and Contentful-driven content models, supporting a high-traffic admissions funnel.",
    homepageFocus: "FOCUS: ADMISSIONS FUNNEL",
    summary:
      "Built the primary admissions site using reusable React components and Contentful-driven content models, supporting a high-traffic admissions funnel. The platform patterns established here informed later work across related admissions properties.",
    role:
      "I designed and built the frontend architecture for the admissions site, defining reusable component patterns, content modeling boundaries, and implementation standards for a high-traffic publishing workflow.",
    architecture: [
      "React and Gatsby frontend",
      "Contentful content models",
      "GraphQL data layer",
      "Shared component and deployment workflows",
    ],
    keyDecisions: [
      "Designed composable page modules so editorial teams could assemble landing pages without one-off templates.",
      "Separated CMS content from service integrations to keep application guidance pages stable as backend inputs changed.",
      "Used accessibility requirements and design tokens as platform constraints to keep patterns consistent across teams.",
    ],
    impact: [
      "Created the architectural baseline for four admissions sites on one platform.",
      "Reduced content publishing friction by giving editors reusable, governed page building blocks.",
      "Improved consistency across recruitment journeys, accessibility standards, and release quality.",
    ],
  },
  {
    slug: "uchicago-summer-programs",
    title: "Summer Programs",
    imageSrc: "/images/projects/summer-programs.webp",
    liveUrl: "https://summer.uchicago.edu/",
    homepageDescription:
      "Built course discovery tools that allow prospective students to filter summer classes by level and interest, alongside scalable course page templates that enable program teams to launch new offerings quickly.",
    homepageFocus: "FOCUS: COURSE DISCOVERY",
    summary:
      "Built course discovery tools that allow prospective students to filter summer classes by level and interest, alongside scalable course page templates that enable program teams to launch new offerings quickly. The challenge was supporting high seasonal content turnover without fragmenting the experience.",
    role:
      "I owned frontend architecture and implementation for the site, aligning course discovery patterns, content structures, and reusable templates with the broader admissions platform.",
    architecture: [
      "React and Gatsby frontend",
      "Contentful program content model",
      "GraphQL page assembly",
      "Reusable inquiry and CTA modules",
    ],
    keyDecisions: [
      "Structured program content around reusable metadata so listings, detail pages, and campaigns pulled from the same source.",
      "Kept interactive filtering narrowly scoped to preserve static performance during peak enrollment periods.",
      "Standardized conversion components so marketing changes did not require custom engineering for each campaign.",
    ],
    impact: [
      "Made seasonal program launches faster by reusing platform patterns instead of creating campaign-specific pages.",
      "Improved content consistency across diverse program types and audience journeys.",
      "Supported clearer discovery and stronger conversion paths during enrollment windows.",
    ],
  },
  {
    slug: "uchicago-financial-aid",
    title: "Financial Aid",
    imageSrc: "/images/projects/financial-aid.webp",
    liveUrl: "https://financialaid.uchicago.edu/",
    homepageDescription:
      "Led the first headless CMS implementation for the financial aid site, redesigning information architecture and content structure to make complex aid pathways clearer and more accessible for applicants.",
    homepageFocus: "FOCUS: FINANCIAL AID CLARITY",
    summary:
      "Led the first headless CMS implementation for the financial aid site, redesigning information architecture and content structure to make complex aid pathways clearer and more accessible for applicants. The broader goal was to make dense institutional guidance easier to scan, maintain, and update accurately.",
    role:
      "I led frontend architecture and content modeling, with responsibility for accessibility, information structure, and reliable integration boundaries for a high-trust content experience.",
    architecture: [
      "React and Gatsby frontend",
      "Contentful editorial system",
      "GraphQL and service integrations",
      "Accessible policy and FAQ components",
    ],
    keyDecisions: [
      "Modeled policy, deadline, and FAQ content as shared entries so updates stayed synchronized across the site.",
      "Used progressive disclosure patterns to keep dense guidance readable without hiding critical information.",
      "Defined resilient integration boundaries for calculators and forms so core content remained dependable if services changed.",
    ],
    impact: [
      "Improved clarity for high-stakes financial aid journeys across policies, deadlines, and next steps.",
      "Reduced duplication and editorial drift through centralized content structures.",
      "Raised trust and usability with stronger accessibility and more predictable information architecture.",
    ],
  },
  {
    slug: "uchicago-career-advancement",
    title: "Career Advancement",
    imageSrc: "/images/projects/career-advancement.webp",
    liveUrl: "https://careeradvancement.uchicago.edu/",
    homepageDescription:
      "Built a modular content system supporting advising resources and career pathways for undergraduate students, with maintainable content patterns that allow program staff to manage and evolve the site over time.",
    homepageFocus: "FOCUS: STUDENT CAREER PATHWAYS",
    summary:
      "Built a modular content system supporting advising resources and career pathways for undergraduate students, with maintainable content patterns that allow program staff to manage and evolve the site over time. The broader problem was turning scattered resources and event information into a coherent system.",
    role:
      "I drove frontend architecture for the site, defining reusable patterns for advising content, listings, and external data integrations that program staff could maintain over time.",
    architecture: [
      "React and Gatsby frontend",
      "Contentful content structures",
      "GraphQL plus external data adapters",
      "Shared listing and card components",
    ],
    keyDecisions: [
      "Organized templates around user intent so students, employers, and alumni could navigate different goals without separate systems.",
      "Normalized event and resource feeds through typed adapters before rendering them into shared UI patterns.",
      "Built reusable listing components that could serve services, events, and resources with a consistent editorial model.",
    ],
    impact: [
      "Improved discoverability of services, events, and resources across distinct audience groups.",
      "Reduced maintenance overhead by consolidating multiple content types into shared platform components.",
      "Made external data integrations more reliable and easier to evolve over time.",
    ],
  },
];
