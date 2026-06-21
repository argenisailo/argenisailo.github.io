export const siteConfig = {
  name: "Argenis López",
  title: "Software Engineer, Solutions Engineer & Implementation Consultant",
  description: "Portfolio of Argenis López",
  accentColor: "#1C6828",
  social: {
    email: "lopezargenisai@gmail.com",
    linkedin: "https://linkedin.com/in/argenis-lopez",
    github: "https://github.com/argenisailo",
    website: "https://punto-arista.com",
  },
  aboutMe:
    "I'm a software engineer who moved toward the consulting side of the table. " +
    "I build AI agents, integration workflows, and internal platforms, and then stay through adoption to make sure they actually get used, and that clients can run them without depending on me. " +
    "arista. was born from a personal frustration: the work that consumes you the most is almost never the work you're actually good at. " +
    "What drives me most is the diagnostic part: understanding what's actually broken before deciding whether to build something, configure something, or challenge the initial ask entirely. " +
    "Lean Six Sigma. Daily Claude Code user. Bilingual in English and Spanish.",
  skills: [
    "Business process implementation",
    "Workflow automation",
    "Custom software development",
    "Solution architecture",
    "Lean Six Sigma",
    "Bilingual (EN / ES)",
  ],
  approach: [
    {
      principle: "Challenge the initial ask",
      description:
        "Before designing anything, I map what's actually needed. My best client work started by redirecting them away from what they came in asking for. The arista. origin story is a client who wanted a two-platform integration and left with a full CRM consolidation instead.",
    },
    {
      principle: "Prototype before committing",
      description:
        "POC first, then scale. I validate workflows and UX with rapid prototyping tools and AI coding assistants before committing to full stack, so clients see working systems early and can redirect before it gets expensive to change course.",
    },
    {
      principle: "AI where it earns its place",
      description:
        "I'm the internal AI advocate at Inteli-K, evaluating tools and driving adoption where it creates measurable impact. The WhatsApp recruitment chatbot cut 90%+ of manual effort. Not every problem needs an LLM, and I push back when it doesn't.",
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
        "Deployed an AI-powered WhatsApp chatbot that handles multi-thread conversations, candidate filtering, and automatic interview scheduling, cutting a 1-hour manual process to under 10 minutes per candidate.",
    },
    {
      achievement: "Full operations platform, built from scratch",
      description:
        "Designed and delivered a client management system, lead-to-client pipeline, and HR module for 20+ users, replacing a slow Power Apps system with a React + FastAPI + PostgreSQL platform with Microsoft Entra ID SSO.",
    },
    {
      achievement: "Platform consolidation that eliminated a redundant tool",
      description:
        "Redirected a client's Pipedrive + monday.com integration request into a full CRM consolidation on monday.com. No redundant tools, and a platform ready for AI-native sales workflows.",
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
        "Diagnosed a client's integration requirements and redirected toward a full monday.com CRM consolidation, eliminating a redundant platform and getting the client onto AI-native workflows",
        "Delivering end-to-end monday.com CRM configuration replicating existing sales logic, automations, and pipelines, plus full data migration from Pipedrive",
      ],
    },
    {
      company: "Inteli-K",
      title: "Software Developer (Solutions Engineer)",
      dateRange: "Nov 2024 – Present",
      summary: "",
      bullets: [
        "Act as primary implementation consultant for multiple concurrent clients: conduct requirements discovery, design automation workflows, and own delivery end-to-end across monday.com, Make.com, and custom-built systems",
        "Built an internal operations platform from scratch for an accounting firm (React, FastAPI, PostgreSQL, Entra ID SSO), replacing a slow Power Apps system. Delivered client management, a lead-to-client pipeline, and a full HR module for 20+ users.",
        "Architected a three-agent document validation pipeline (Anthropic API, Microsoft Graph, monday.com) for a customs brokerage client that runs automated 1:1 consistency checks across 15 monthly pedimentos, replacing a manual review process",
        "Deployed an AI-powered WhatsApp recruitment chatbot that reduced manual candidate management from ~1 hour to under 10 minutes per process by automating multi-thread conversations, vacancy filtering, Monday registration, and interview scheduling",
        "Led development of Inteli-Kit, a monday.com marketplace app that extends platform capabilities and projects $6,000 USD in annual recurring revenue",
        "Accelerated client delivery using AI coding tools (Claude Code, GitHub Copilot), cutting implementation time across all engagements",
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
        "Maintained and resolved bugs across custom Odoo POS modules, keeping retail point-of-sale operations running without disruption",
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
      achievements: ["Graduated with high academic distinction, GPA 93.8/100"],
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
        "monday AI & Agents Certifications",
        "Partner & Workflow Certifications",
        "Product Expert Certifications",
        "Development & Automation Certifications",
      ],
    },
  ],
  technologies: [
    {
      area: "Languages & Frameworks",
      list: ["Python", "JavaScript", "Node.js", "FastAPI", "React", "React Native", "REST API", "GraphQL", "Microsoft Graph"],
    },
    {
      area: "Infrastructure",
      list: ["Google Cloud Platform", "Docker", "NGINX", "CI/CD", "Git", "UNIX / Linux"],
    },
    {
      area: "Data",
      list: ["PostgreSQL", "SQL", "NoSQL", "ETL"],
    },
    {
      area: "Platforms",
      list: ["monday.com", "Make.com", "Zapier", "Odoo ERP", "Microsoft Entra ID"],
    },
    {
      area: "AI & Dev Tools",
      list: ["Claude Code", "Codex", "GitHub Copilot", "LLM Integration"],
    },
  ],
  es: {
    title:
      "Ingeniero de Software, Solutions Engineer y Consultor de Implementación",
    aboutMe:
      "Soy ingeniero de software con foco en consultoría. " +
      "Construyo agentes de IA, flujos de integración y plataformas internas, y me quedo durante la adopción para asegurarme de que realmente se usen y que los clientes puedan operarlos sin depender de mí. " +
      "arista. nació de una frustración personal: el trabajo que más te consume casi nunca es el trabajo en el que realmente eres bueno. " +
      "Lo que más me impulsa es el diagnóstico: entender qué está roto antes de decidir si hay que construir algo, configurar algo, o cuestionar el pedido inicial. " +
      "Lean Six Sigma. Usuario diario de Claude Code. Bilingüe en inglés y español.",
    skills: [
      "Implementación de procesos de negocio",
      "Automatización de flujos de trabajo",
      "Desarrollo de software a medida",
      "Arquitectura de soluciones",
      "Lean Six Sigma",
      "Bilingüe (EN / ES)",
    ],
    approach: [
      {
        principle: "Cuestionar el pedido inicial",
        description:
          "Antes de diseñar cualquier cosa, mapeo lo que realmente se necesita. Mis mejores trabajos con clientes empezaron redirigiendo lo que pedían. La historia de arista.: un cliente quería integrar dos plataformas y terminó con una consolidación completa de CRM.",
      },
      {
        principle: "Prototipar antes de comprometerse",
        description:
          "POC primero, escalar después. Valido flujos de trabajo y UX con herramientas de prototipado rápido y asistentes de IA antes de comprometerse con el stack completo, para que los clientes vean sistemas funcionando desde temprano y puedan redirigir antes de que sea caro cambiar de curso.",
      },
      {
        principle: "IA donde se gana su lugar",
        description:
          "Soy el referente de IA interna en Inteli-K, evaluando herramientas e impulsando adopción donde genera impacto medible. El chatbot de reclutamiento por WhatsApp redujo el esfuerzo manual en más del 90%. No todo problema necesita un LLM, y digo que no cuando no lo necesita.",
      },
      {
        principle: "Quedarme hasta la adopción",
        description:
          "Un sistema entregado que nadie usa no es un éxito. Entrego capacitación y documentación junto con el software. La plataforma interna de operaciones que construí tiene más de 20 usuarios diarios porque el traspaso fue parte del alcance desde el día uno.",
      },
    ],
    highlights: [
      {
        achievement: "90% de reducción en esfuerzo del reclutador",
        description:
          "Desplegué un chatbot de WhatsApp con IA que maneja conversaciones multi-hilo, filtrado de candidatos y programación automática de entrevistas, recortando un proceso manual de 1 hora a menos de 10 minutos por candidato.",
      },
      {
        achievement: "Plataforma de operaciones completa, desde cero",
        description:
          "Diseñé y entregué un sistema de gestión de clientes, pipeline lead-to-client y módulo de RR.HH. para más de 20 usuarios, reemplazando un sistema Power Apps lento con una plataforma React + FastAPI + PostgreSQL con SSO de Microsoft Entra ID.",
      },
      {
        achievement: "Consolidación que eliminó una herramienta redundante",
        description:
          "Redirigí el pedido de integración Pipedrive + monday.com de un cliente hacia una consolidación completa de CRM en monday.com. Sin herramientas duplicadas, y una plataforma lista para flujos de ventas nativos de IA.",
      },
      {
        achievement: "$6,000 USD/año desde una app de marketplace",
        description:
          "Desarrollé y desplegué Inteli-Kit, una app de marketplace de monday.com que extiende las capacidades de la plataforma y abrió un nuevo flujo de ingresos recurrentes anuales.",
      },
    ],
    experience: [
      {
        company: "arista.",
        title: "Fundador y Consultor de Soluciones",
        dateRange: "Mayo 2026 – Presente",
        summary: "",
        bullets: [
          "Fundé una consultoría independiente enfocada en implementación de CRM, automatización de flujos y optimización de procesos de negocio para PYMEs",
          "Diagnostiqué los requisitos de integración de un cliente y redirigí hacia una consolidación completa de CRM en monday.com, eliminando una plataforma redundante y llevando al cliente a flujos de trabajo nativos de IA",
          "Entregando configuración de CRM en monday.com de extremo a extremo replicando lógica de ventas, automatizaciones y pipelines existentes, más migración completa de datos desde Pipedrive",
        ],
      },
      {
        company: "Inteli-K",
        title: "Desarrollador de Software (Solutions Engineer)",
        dateRange: "Nov 2024 – Presente",
        summary: "",
        bullets: [
          "Actúo como consultor de implementación principal para múltiples clientes simultáneos: conduzco relevamiento de requisitos, diseño flujos de automatización y gestiono la entrega de extremo a extremo en monday.com, Make.com y sistemas a medida",
          "Construí desde cero una plataforma de operaciones interna para una firma contable (React, FastAPI, PostgreSQL, Entra ID SSO), reemplazando un sistema Power Apps lento. Entregué gestión de clientes, un pipeline lead-to-client y un módulo de RR.HH. completo para más de 20 usuarios.",
          "Diseñé una pipeline de validación de documentos de tres agentes (Anthropic API, Microsoft Graph, monday.com) para un cliente de agencia aduanera que ejecuta revisiones automáticas 1:1 en 15 pedimentos mensuales, reemplazando un proceso de revisión manual",
          "Desplegué un chatbot de reclutamiento por WhatsApp con IA que redujo la gestión manual de candidatos de ~1 hora a menos de 10 minutos por proceso, automatizando conversaciones multi-hilo, filtrado de vacantes, registro en Monday y programación de entrevistas",
          "Lideré el desarrollo de Inteli-Kit, una app de marketplace de monday.com que extiende las capacidades de la plataforma y proyecta $6,000 USD en ingresos recurrentes anuales",
          "Aceleré la entrega a clientes usando herramientas de IA (Claude Code, GitHub Copilot), reduciendo tiempos de implementación en todos los proyectos",
        ],
      },
      {
        company: "Smart Bamboo",
        title: "Desarrollador Odoo",
        dateRange: "Ago 2024 – Nov 2024",
        summary: "",
        bullets: [
          "Diseñé e implementé un sistema de descuentos por fidelidad integrado con Google Maps API: los clientes que calificaban una tienda en Google recibían automáticamente un descuento por coincidencia de email, reemplazando un proceso manual de recompensas con una regla de negocio completamente automatizada",
          "Reemplacé los reportes manuales de ventas e inventario con dashboards de Metabase conectados a Odoo, dando visibilidad operacional bajo demanda a los stakeholders sin depender de reportes generados por desarrolladores",
          "Mantuve y resolví bugs en módulos de POS personalizados de Odoo, manteniendo las operaciones de punto de venta minorista en funcionamiento sin interrupciones",
        ],
      },
      {
        company: "E-COM & DINTEMEX",
        title: "Desarrollador de Software",
        dateRange: "Feb 2024 – Ago 2024",
        summary: "",
        bullets: [
          "Diseñé un modelo de gestión de SLA desde cero dentro de Odoo para E-COM, reemplazando el seguimiento de servicios no estructurado con un sistema para monitorear compromisos, tiempos de respuesta y estado de resolución en operaciones de telecomunicaciones",
          "Integré la Google Maps API en el módulo de RR.HH. de Odoo para ambas empresas, reemplazando el registro manual de asistencia con check-in y check-out verificados por GPS para equipos de campo distribuidos",
        ],
      },
    ],
    projects: [
      {
        name: "CUCervices",
        description:
          "Plataforma de marketplace para estudiantes universitarios con verificación biométrica por IA usando Google Cloud Vision y reconocimiento facial en el checkout.",
      },
      {
        name: "CyberAbarrotes",
        description:
          "Aplicación móvil de entrega de abarrotes con integración de Google Maps para cálculo de distancias en tiempo real y optimización de rutas.",
      },
    ],
    education: [
      {
        school: "Universidad de Guadalajara, CUCEI",
        degree: "Licenciatura en Ingeniería en Computación",
        dateRange: "2019 – 2024",
        achievements: ["Se graduó con distinción académica alta, GPA 93.8/100"],
      },
    ],
  },
};
