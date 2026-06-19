export const siteConfig = {
  name: "Argenis López",
  title: "Solutions Engineer & Implementation Consultant",
  description: "Portfolio of Argenis López — Solutions Engineer & Implementation Consultant",
  accentColor: "#1C6828",
  social: {
    email: "lopezargenisai@gmail.com",
    linkedin: "https://linkedin.com/in/argenis-lopez",
    github: "https://github.com/argenisailo",
    website: "https://punto-arista.com",
  },
  aboutMe:
    "I'm a software engineer who moved toward the consulting side of the table. " +
    "I build AI agents, integration workflows, and internal platforms for clients who need systems that work — and then I stay through adoption to make sure they actually get used. " +
    "My background spans backend development, ERP customization, and platform implementation, but what drives me most is the diagnostic part: understanding what's actually broken before deciding whether to build something, configure something, or challenge the initial ask entirely. " +
    "Lean Six Sigma Black Belt. Daily Claude Code user. Bilingual in English and Spanish.",
  skills: [
    "CRM & ERP implementation",
    "Workflow automation",
    "Custom software development",
    "Solution architecture",
    "Lean Six Sigma Black Belt",
    "Bilingual (EN / ES)",
  ],
  approach: [
    {
      principle: "Challenge the initial ask",
      description:
        "Before designing anything, I map what's actually needed. My best client work started by redirecting them away from what they came in asking for — the arista. origin story is a client who wanted a two-platform integration and left with a full CRM consolidation instead.",
    },
    {
      principle: "Prototype before committing",
      description:
        "POC first, then scale. I validate workflows and UX with rapid prototyping tools and AI coding assistants before committing to full-stack — so clients see working systems early and can redirect before it's expensive to change course.",
    },
    {
      principle: "AI where it earns its place",
      description:
        "I serve as the internal AI advocate at Inteli-K — evaluating tools, guiding decisions, and driving adoption where it creates measurable impact. The WhatsApp recruitment chatbot cut 90%+ of manual effort. Not every problem needs an LLM, and I push back when it doesn't.",
    },
    {
      principle: "Stay through adoption",
      description:
        "A shipped system nobody uses isn't a success. I deliver training and documentation alongside the software. The internal operations platform I built has 20+ daily users because the handoff was part of the scope from day one.",
    },
  ],
  highlights: [
    {
      achievement: "90% reduction in recruiter effort",
      description:
        "Deployed an AI-powered WhatsApp chatbot that handles multi-thread conversations, candidate filtering, and automatic interview scheduling — cutting a 1-hour manual process to under 10 minutes per candidate.",
    },
    {
      achievement: "Full operations platform, built from scratch",
      description:
        "Designed and delivered a client management, lead-to-client pipeline, and HR module for 20+ users — replacing a slow Power Apps system with a React + FastAPI + PostgreSQL platform with Microsoft Entra ID SSO.",
    },
    {
      achievement: "Platform consolidation that eliminated a redundant tool",
      description:
        "Redirected a client's Pipedrive + monday.com integration request into a full CRM consolidation on monday.com, eliminating tool duplication and enabling AI-native sales workflows.",
    },
    {
      achievement: "$6,000 USD/year from a marketplace app",
      description:
        "Developed and deployed Inteli-Kit, a monday.com marketplace app that extends platform capabilities and opened a new annual recurring revenue stream.",
    },
  ],
  experience: [
    {
      company: "arista.",
      title: "Founder & Solutions Consultant",
      dateRange: "May 2026 – Present",
      summary: "",
      bullets: [
        "Founded an independent consultancy focused on CRM implementation, workflow automation, and business process optimization for SMBs",
        "Diagnosed a client's integration requirements and redirected toward a full monday.com CRM consolidation, eliminating platform redundancy and enabling AI-native sales workflows",
        "Delivering end-to-end monday.com CRM configuration replicating existing sales logic, automations, and pipelines, plus full data migration from Pipedrive",
      ],
    },
    {
      company: "Inteli-K",
      title: "Solutions Engineer",
      dateRange: "Nov 2024 – Present",
      summary: "",
      bullets: [
        "Act as primary implementation consultant for multiple concurrent clients: conduct requirements discovery, design automation workflows, and own delivery end-to-end across monday.com, Make.com, and custom-built systems",
        "Built an internal operations platform from scratch for an accounting firm (React, FastAPI, PostgreSQL, Entra ID SSO), replacing a slow Power Apps system and delivering client management, lead-to-client pipeline, and a full HR module for 20+ users",
        "Deployed an AI-powered WhatsApp recruitment chatbot that reduced manual candidate management from ~1 hour to under 10 minutes per process by automating multi-thread conversations, vacancy filtering, Monday registration, and interview scheduling",
        "Led development of Inteli-Kit, a monday.com marketplace app that extends platform capabilities and projects $6,000 USD in annual recurring revenue",
        "Accelerated client project delivery using AI coding tools (Claude Code, GitHub Copilot), reducing implementation time and improving code quality",
      ],
    },
    {
      company: "Smart Bamboo",
      title: "Odoo Developer",
      dateRange: "Aug 2024 – Nov 2024",
      summary: "",
      bullets: [
        "Designed and implemented a loyalty discount system integrated with the Google Maps API: customers who rated a store on Google automatically received a discount via email matching, replacing a manual rewards process with a fully automated business rule",
        "Replaced manual sales and inventory reporting with Metabase dashboards connected to Odoo, giving business stakeholders on-demand operational visibility without depending on developer-generated reports",
        "Maintained and resolved bugs across custom Odoo POS modules, ensuring continuity of retail point-of-sale operations",
      ],
    },
    {
      company: "E-COM & DINTEMEX",
      title: "Software Developer",
      dateRange: "Feb 2024 – Aug 2024",
      summary: "",
      bullets: [
        "Designed an SLA management model from scratch within Odoo for E-COM, replacing unstructured service tracking with a system for monitoring commitments, response times, and resolution status across telecom operations",
        "Integrated the Google Maps API into the Odoo HR module for both companies, replacing manual attendance logging with GPS-verified check-in and check-out for distributed field teams",
      ],
    },
  ],
  projects: [
    {
      name: "CUCervices",
      description:
        "Marketplace platform for university students with AI biometric verification using Google Cloud Vision and facial recognition at checkout.",
      link: "https://github.com/argenisailo/cucervices",
      skills: ["Python", "Flask", "Docker", "Google Cloud", "AI"],
    },
    {
      name: "CyberAbarrotes",
      description:
        "Grocery delivery mobile application with Google Maps integration for real-time distance calculation and route optimization.",
      link: "https://github.com/argenisailo/cyberabarrotes",
      skills: ["React Native", "Expo", "REST API", "Google Maps"],
    },
  ],
  education: [
    {
      school: "Universidad de Guadalajara, CUCEI",
      degree: "Bachelor of Science in Computer Engineering",
      dateRange: "2019 – 2024",
      achievements: ["Graduated with high academic distinction — GPA 93.8/100"],
    },
  ],
  certifications: [
    {
      school: "International Lean Six Sigma",
      name: "Lean Six Sigma Methodology",
      description: ["Yellow Belt", "Green Belt", "Black Belt"],
    },
    {
      school: "Make.com",
      name: "Partner Level Certifications",
      description: ["Level 1 – Foundation", "Level 2 – Basics", "Level 3 – Intermediate", "Level 4 – Advanced"],
    },
    {
      school: "monday.com",
      name: "Partner Level Certifications",
      description: [
        "Partner & Workflow Certifications",
        "Product Expert Certifications",
        "Development & Automation Certifications",
      ],
    },
  ],
  technologies: [
    {
      area: "Languages & Frameworks",
      list: ["Python", "JavaScript", "Node.js", "FastAPI", "React", "React Native", "REST API", "GraphQL"],
    },
    {
      area: "Infrastructure",
      list: ["Google Cloud Platform", "Docker", "NGINX", "CI/CD", "Git", "UNIX / Linux"],
    },
    {
      area: "Data",
      list: ["PostgreSQL", "SQL", "NoSQL", "ETL", "Metabase"],
    },
    {
      area: "Platforms",
      list: ["monday.com", "Make.com", "Zapier", "Odoo ERP", "Microsoft Entra ID"],
    },
    {
      area: "AI & Dev Tools",
      list: ["Claude Code", "GitHub Copilot", "LLM Integration", "Vite", "Astro"],
    },
  ],
};
