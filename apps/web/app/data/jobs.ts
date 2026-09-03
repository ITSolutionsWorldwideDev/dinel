export type Job = {
  slug: string;
  title: string;
  category: string;
  type: string; // e.g. "Full-Time"
  status: string; // e.g. "Active"
  location: string;
  description: string;
  responsibilities: string[];
  requirements: string[];
};
// 👇 Add this new exported type
export type JobCategoryGroup = {
  category: string;
  jobs: Job[];
};

export const jobCategories: JobCategoryGroup[] = [
  {
    category: "Supply Chain",
    jobs: [
      {
        slug: "warehouse-planner",
        title: "Warehouse Planner",
        category: "Supply Chain",
        type: "Full-Time",
        status: "Active",
        location: "On-site",
        description:
          "We are looking for a Warehouse Planner to manage stock levels, coordinate incoming and outgoing shipments, and optimize warehouse space utilization.",
        responsibilities: [
          "Plan and monitor warehouse capacity and stock flow",
          "Coordinate with logistics and procurement teams",
          "Prepare reports on inventory accuracy and turnover",
        ],
        requirements: [
          "1-3 years experience in warehouse/logistics planning",
          "Strong Excel / ERP system skills",
          "Good communication skills in English",
        ],
      },
      {
        slug: "logistiek-administratief-medewerker",
        title: "Logistiek Administratief Medewerker",
        category: "Supply Chain",
        type: "Full-Time",
        status: "Active",
        location: "On-site",
        description:
          "Als Logistiek Administratief Medewerker ben je verantwoordelijk voor het correct verwerken van administratieve processen binnen de logistieke afdeling.",
        responsibilities: [
          "Verwerken van orders en documentatie",
          "Communiceren met transporteurs en leveranciers",
          "Bijhouden van voorraadadministratie",
        ],
        requirements: [
          "MBO werk- en denkniveau",
          "Ervaring met ERP-systemen is een pre",
          "Nauwkeurig en zelfstandig kunnen werken",
        ],
      },
      {
        slug: "warehouse-engineer",
        title: "Warehouse Engineer",
        category: "Supply Chain",
        type: "Full-Time",
        status: "Active",
        location: "On-site",
        description:
          "As a Warehouse Engineer, you will design and improve warehouse layouts, workflows, and automation systems to increase efficiency.",
        responsibilities: [
          "Design and optimize warehouse layouts",
          "Support implementation of automation systems",
          "Analyze workflow bottlenecks and propose solutions",
        ],
        requirements: [
          "Bachelor's degree in Industrial/Logistics Engineering",
          "Experience with warehouse management systems",
          "Analytical and problem-solving mindset",
        ],
      },
      {
        slug: "supply-chain-starter",
        title: "Supply Chain Starter",
        category: "Supply Chain",
        type: "Full-Time",
        status: "Active",
        location: "On-site",
        description:
          "A great entry-level opportunity for recent graduates who want to start their career in supply chain and logistics.",
        responsibilities: [
          "Support daily supply chain operations",
          "Assist senior planners with reporting",
          "Learn end-to-end supply chain processes",
        ],
        requirements: [
          "Recent graduate in Logistics, Business, or related field",
          "Eager to learn and grow",
          "Good MS Office skills",
        ],
      },
      {
        slug: "master-data-specialist",
        title: "Master Data Specialist",
        category: "Supply Chain",
        type: "Full-Time",
        status: "Active",
        location: "On-site",
        description:
          "We are seeking a Master Data Specialist to ensure the accuracy, consistency, and integrity of master data across our systems.",
        responsibilities: [
          "Maintain and validate master data records",
          "Collaborate with departments to resolve data issues",
          "Support data governance initiatives",
        ],
        requirements: [
          "Experience with ERP/master data management",
          "Detail-oriented with strong analytical skills",
          "Knowledge of SAP or similar systems is a plus",
        ],
      },
      {
        slug: "procurement-specialist",
        title: "Procurement Specialist",
        category: "Supply Chain",
        type: "Full-Time",
        status: "Active",
        location: "On-site",
        description:
          "The Procurement Specialist will manage supplier relationships, negotiate contracts, and ensure timely purchasing of goods and services.",
        responsibilities: [
          "Source and evaluate suppliers",
          "Negotiate pricing and contract terms",
          "Monitor purchase orders and delivery timelines",
        ],
        requirements: [
          "2+ years experience in procurement/purchasing",
          "Strong negotiation skills",
          "Familiarity with procurement software",
        ],
      },
    ],
  },
  {
    category: "Engineering",
    jobs: [
      {
        slug: "principal-structural-engineer-subsea-pipeline",
        title: "Principal Structural Engineer - Subsea / Pipeline",
        category: "Engineering",
        type: "Full-Time",
        status: "Active",
        location: "On-site",
        description:
          "We are looking for a Principal Structural Engineer to lead subsea and pipeline structural engineering projects from concept to execution.",
        responsibilities: [
          "Lead structural design for subsea/pipeline projects",
          "Review and approve engineering calculations",
          "Mentor junior structural engineers",
        ],
        requirements: [
          "10+ years experience in subsea/pipeline structural engineering",
          "Strong knowledge of relevant codes and standards",
          "Proven leadership experience",
        ],
      },
      {
        slug: "structural-engineer-pipeline-engineering",
        title: "Structural Engineer - Pipeline Engineering",
        category: "Engineering",
        type: "Full-Time",
        status: "Active",
        location: "On-site",
        description:
          "Join our pipeline engineering team as a Structural Engineer, responsible for the structural design and analysis of pipeline systems.",
        responsibilities: [
          "Perform structural analysis and design calculations",
          "Prepare technical reports and drawings",
          "Coordinate with multidisciplinary project teams",
        ],
        requirements: [
          "Bachelor's/Master's in Civil or Structural Engineering",
          "Experience in pipeline or offshore structures",
          "Proficiency in relevant engineering software",
        ],
      },
      {
        slug: "instrumentation-engineer",
        title: "Instrumentation Engineer",
        category: "Engineering",
        type: "Full-Time",
        status: "Active",
        location: "On-site",
        description:
          "We are hiring an Instrumentation Engineer to design, install, and maintain instrumentation and control systems.",
        responsibilities: [
          "Design instrumentation and control systems",
          "Prepare specifications and datasheets",
          "Support commissioning and troubleshooting",
        ],
        requirements: [
          "Degree in Instrumentation/Electrical Engineering",
          "Experience with process control systems",
          "Strong troubleshooting skills",
        ],
      },
      {
        slug: "project-engineer",
        title: "Project Engineer",
        category: "Engineering",
        type: "Full-Time",
        status: "Active",
        location: "On-site",
        description:
          "As a Project Engineer, you will coordinate technical aspects of projects, ensuring they are delivered on time and within budget.",
        responsibilities: [
          "Coordinate engineering activities across project phases",
          "Track project timelines and budgets",
          "Liaise with clients and contractors",
        ],
        requirements: [
          "Engineering degree with project experience",
          "Strong organizational and communication skills",
          "Experience with project management tools",
        ],
      },
      {
        slug: "network-engineer",
        title: "Network Engineer",
        category: "Engineering",
        type: "Full-Time",
        status: "Active",
        location: "On-site",
        description:
          "We are looking for a Network Engineer to design, implement, and maintain our network infrastructure.",
        responsibilities: [
          "Configure and maintain network hardware",
          "Monitor network performance and security",
          "Troubleshoot connectivity issues",
        ],
        requirements: [
          "Experience with routing, switching, and firewalls",
          "Relevant certifications (CCNA/CCNP) preferred",
          "Strong problem-solving skills",
        ],
      },
      {
        slug: "ml-engineer",
        title: "ML Engineer",
        category: "Engineering",
        type: "Full-Time",
        status: "Active",
        location: "On-site",
        description:
          "We are seeking an ML Engineer to build, train, and deploy machine learning models for real-world applications.",
        responsibilities: [
          "Develop and train machine learning models",
          "Deploy models into production environments",
          "Collaborate with data engineers and product teams",
        ],
        requirements: [
          "Experience with Python, TensorFlow/PyTorch",
          "Strong understanding of ML algorithms",
          "Experience with MLOps practices",
        ],
      },
      {
        slug: "data-engineer",
        title: "Data Engineer",
        category: "Engineering",
        type: "Full-Time",
        status: "Active",
        location: "On-site",
        description:
          "As a Data Engineer, you will design and build data pipelines to support analytics and business intelligence.",
        responsibilities: [
          "Build and maintain scalable data pipelines",
          "Ensure data quality and reliability",
          "Collaborate with analysts and data scientists",
        ],
        requirements: [
          "Experience with SQL and ETL tools",
          "Knowledge of cloud data platforms",
          "Strong programming skills (Python/Scala)",
        ],
      },
      {
        slug: "hvac-service-technician-cooling-technology",
        title: "HVAC Service Technician (Cooling Technology)",
        category: "Engineering",
        type: "Full-Time",
        status: "Active",
        location: "On-site",
        description:
          "We are looking for an HVAC Service Technician specialized in cooling technology to install, service, and repair cooling systems.",
        responsibilities: [
          "Install and service cooling/HVAC systems",
          "Diagnose and repair equipment faults",
          "Perform preventive maintenance",
        ],
        requirements: [
          "Technical diploma/certification in HVAC or refrigeration",
          "Hands-on experience with cooling systems",
          "Valid driver's license",
        ],
      },
      {
        slug: "hvac-service-technician",
        title: "HVAC Service Technician",
        category: "Engineering",
        type: "Full-Time",
        status: "Active",
        location: "On-site",
        description:
          "We are hiring an HVAC Service Technician to install, maintain, and repair heating, ventilation, and air conditioning systems.",
        responsibilities: [
          "Install and maintain HVAC systems",
          "Respond to service calls and repairs",
          "Ensure compliance with safety standards",
        ],
        requirements: [
          "Technical certification in HVAC",
          "Prior hands-on HVAC experience",
          "Good customer service skills",
        ],
      },
      {
        slug: "heat-tracing-technician",
        title: "Heat Tracing Technician",
        category: "Engineering",
        type: "Full-Time",
        status: "Active",
        location: "On-site",
        description:
          "We are seeking a Heat Tracing Technician to install and maintain electrical heat tracing systems on industrial sites.",
        responsibilities: [
          "Install and test heat tracing systems",
          "Perform inspections and maintenance",
          "Follow site safety procedures",
        ],
        requirements: [
          "Technical background in electrical installation",
          "Experience with heat tracing systems is a plus",
          "Willingness to work on industrial sites",
        ],
      },
    ],
  },
  {
    category: "IT",
    jobs: [
      {
        slug: "it-support-officer-1st-2nd-line-support",
        title: "IT Support Officer (1st & 2nd line support)",
        category: "IT",
        type: "Full-Time",
        status: "Active",
        location: "On-site",
        description:
          "We are looking for an IT Support Officer to handle 1st and 2nd line support requests and ensure smooth IT operations.",
        responsibilities: [
          "Resolve 1st and 2nd line support tickets",
          "Manage hardware and software installations",
          "Escalate complex issues appropriately",
        ],
        requirements: [
          "Experience in IT helpdesk/support role",
          "Knowledge of Windows/Office 365 environments",
          "Strong customer service attitude",
        ],
      },
      {
        slug: "power-bi-developer",
        title: "Power BI Developer",
        category: "IT",
        type: "Full-Time",
        status: "Active",
        location: "On-site",
        description:
          "As a Power BI Developer, you will design and build interactive dashboards and reports to support business decision-making.",
        responsibilities: [
          "Develop Power BI dashboards and reports",
          "Write and optimize DAX queries",
          "Work with stakeholders to gather reporting needs",
        ],
        requirements: [
          "Experience with Power BI and DAX",
          "Strong SQL skills",
          "Understanding of data modeling",
        ],
      },
      {
        slug: "it-specialist",
        title: "IT Specialist",
        category: "IT",
        type: "Full-Time",
        status: "Active",
        location: "On-site",
        description:
          "We are hiring an IT Specialist to manage and support our IT systems, infrastructure, and user needs.",
        responsibilities: [
          "Maintain IT systems and infrastructure",
          "Support end-users with technical issues",
          "Assist with IT projects and rollouts",
        ],
        requirements: [
          "Degree/diploma in IT or related field",
          "Broad technical troubleshooting skills",
          "Good communication skills",
        ],
      },
      {
        slug: "oracle-erp-consultant-specialist",
        title: "Oracle ERP Consultant/Specialist",
        category: "IT",
        type: "Full-Time",
        status: "Active",
        location: "On-site",
        description:
          "We are looking for an Oracle ERP Consultant/Specialist to configure, implement, and support Oracle ERP modules.",
        responsibilities: [
          "Configure and support Oracle ERP modules",
          "Gather business requirements and translate to system setup",
          "Provide user training and documentation",
        ],
        requirements: [
          "Experience with Oracle ERP implementation/support",
          "Strong analytical and problem-solving skills",
          "Good stakeholder communication skills",
        ],
      },
      {
        slug: "it-manager",
        title: "IT Manager",
        category: "IT",
        type: "Full-Time",
        status: "Active",
        location: "On-site",
        description:
          "We are seeking an IT Manager to lead the IT department, oversee infrastructure, and drive technology strategy.",
        responsibilities: [
          "Manage IT team and daily operations",
          "Oversee IT infrastructure and security",
          "Define and execute IT strategy",
        ],
        requirements: [
          "5+ years IT experience with leadership exposure",
          "Strong understanding of IT infrastructure and security",
          "Excellent leadership and communication skills",
        ],
      },
      {
        slug: "ai-developer",
        title: "AI Developer",
        category: "IT",
        type: "Full-Time",
        status: "Active",
        location: "On-site",
        description:
          "As an AI Developer, you will design, build, and integrate AI-powered features and solutions into our products.",
        responsibilities: [
          "Develop and integrate AI/LLM-based features",
          "Prototype and test AI models",
          "Collaborate with product and engineering teams",
        ],
        requirements: [
          "Experience with AI/ML frameworks",
          "Strong programming skills (Python/JS)",
          "Familiarity with LLM APIs is a plus",
        ],
      },
      {
        slug: "web-developer-full-stack-developer",
        title: "Web Developer / Full Stack Developer",
        category: "IT",
        type: "Full-Time",
        status: "Active",
        location: "On-site",
        description:
          "We are looking for a Web Developer / Full Stack Developer to build and maintain modern, scalable web applications.",
        responsibilities: [
          "Develop front-end and back-end features",
          "Write clean, maintainable, well-tested code",
          "Collaborate with designers and product owners",
        ],
        requirements: [
          "Experience with React/Next.js and Node.js",
          "Strong understanding of REST/GraphQL APIs",
          "Familiarity with databases (SQL/NoSQL)",
        ],
      },
    ],
  },
];

// Flat list — useful for lookups, generateStaticParams, search, etc.
export const allJobs: Job[] = jobCategories.flatMap((group) => group.jobs);

export function getJobBySlug(slug: string): Job | undefined {
  return allJobs.find((job) => job.slug === slug);
}