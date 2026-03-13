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
      "Built the primary admissions site using reusable React components and Contentful-driven content models, supporting a high-traffic admissions funnel.",
    role:
      "I designed and built the frontend architecture for the admissions site, defining reusable component patterns, content boundaries, and implementation standards for a high-traffic publishing workflow.",
    architecture: [
      "React and Gatsby frontend",
      "Contentful content models",
      "GraphQL data layer",
      "Shared component and deployment workflows",
    ],
    keyDecisions: [
      "Designed composable page modules so editorial teams could assemble landing pages without one-off templates.",
      "Defined reusable content and layout patterns so new sections could be launched without custom frontend work each time.",
      "Built with accessibility and consistency in mind so shared patterns could scale across a large public-facing site.",
    ],
    impact: [
      "Reduced content publishing friction by giving editors reusable, governed page building blocks.",
      "Improved consistency across recruitment journeys, accessibility standards, and release quality.",
      "Made it easier to launch and maintain admissions content without reinventing page structure for each campaign.",
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
      "Built course discovery tools that allow prospective students to filter summer classes by level and interest, alongside scalable course page templates that enable program teams to launch new offerings quickly.",
    role:
      "I owned frontend architecture and implementation for the site, aligning course discovery patterns, content structures, and reusable templates with the broader admissions platform.",
    architecture: [
      "React and Gatsby frontend",
      "Contentful program content model",
      "GraphQL page assembly",
      "Reusable inquiry and CTA modules",
    ],
    keyDecisions: [
      "Built a custom filtering experience to help prospective students browse courses by level and area of interest.",
      "Created reusable course page templates so new offerings could be published without custom page builds.",
      "Kept shared layout and content patterns aligned with the broader platform so seasonal campaigns stayed consistent.",
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
      "Led the first headless CMS implementation for the financial aid site, redesigning information architecture and content structure to make complex aid pathways clearer and more accessible for applicants. The site also gave staff more control over time-sensitive alerts and updates through scheduled publishing in Contentful.",
    homepageFocus: "FOCUS: FINANCIAL AID CLARITY",
    summary:
      "Led the first headless CMS implementation for the financial aid site, redesigning information architecture and content structure to make complex aid pathways clearer and more accessible for applicants. The site also gave staff more control over time-sensitive alerts and updates through scheduled publishing in Contentful.",
    role:
      "I led frontend architecture and content modeling, with responsibility for accessibility, information structure, and creating a high-trust content experience for applicants.",
    architecture: [
      "React and Gatsby frontend",
      "Contentful editorial system",
      "GraphQL and service integrations",
      "Accessible policy and FAQ components",
    ],
    keyDecisions: [
      "Modeled policy, deadline, and FAQ content as shared entries so updates stayed synchronized across the site.",
      "Created a custom alert component so staff could publish and unpublish time-sensitive financial aid notices through Contentful without developer involvement.",
      "Used clear content grouping and layered disclosure patterns to make dense guidance easier to scan without losing critical information.",
    ],
    impact: [
      "Improved clarity for high-stakes financial aid journeys across policies, deadlines, and next steps.",
      "Reduced duplication and editorial drift through centralized content structures.",
      "Raised trust and usability with stronger accessibility and more predictable information architecture.",
      "Established the initial headless CMS and content-modeling approach that informed later platform work.",
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
      "Built a modular content system supporting advising resources and career pathways for undergraduate students, with maintainable content patterns that allow program staff to manage and evolve the site over time.",
    role:
      "I drove frontend architecture for the site, defining reusable patterns for advising content, navigation, and maintainable editorial structures that program staff could manage over time.",
    architecture: [
      "React and Gatsby frontend",
      "Contentful content structures",
      "GraphQL plus external data adapters",
      "Shared listing and card components",
    ],
    keyDecisions: [
      "Organized templates around user intent so students could navigate advising resources and opportunities more clearly.",
      "Created reusable content patterns that allowed program staff to manage different sections without separate custom builds.",
      "Structured the site so advising content, opportunity listings, and support resources could live within one coherent system.",
    ],
    impact: [
      "Improved discoverability of advising resources and opportunities across different student needs.",
      "Reduced maintenance overhead by consolidating content into shared platform patterns.",
      "Made the site easier for program staff to update as resources and pathways evolved over time.",
    ],
  },
];
