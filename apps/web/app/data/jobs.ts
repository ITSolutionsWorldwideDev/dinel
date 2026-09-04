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
        location: "Rotterdam, Netherlands",
        description:
          "Als Warehouse Planner ben jij de spil tussen het magazijn, logistiek, transport en onze maritieme operaties. Jij zorgt ervoor dat materialen, equipment en transporten soepel worden gepland en uitgevoerd vanuit ons moderne logistieke centrum in de regio Rotterdam.",
        responsibilities: [
          "Opstellen, beheren en optimaliseren van de dagelijkse warehouseplanning",
          "Coördineren van mobilisaties en demobilisaties van en naar onze schepen wereldwijd",
          "Verwerken en opvolgen van werkorders en logistieke aanvragen vanuit de organisatie",
          "Afstemmen met magazijnteams, voormannen, logistiek en supply chain om de planning actueel te houden",
          "Organiseren en plannen van transporten naar uiteenlopende internationale bestemmingen",
          "Indienen en opvolgen van douane- en inklaringsverzoeken",
          "Bewaken van de correcte verwerking van douanezaken en gevaarlijke goederen",
          "Zorgen voor naleving van wet- en regelgeving en communicatie met instanties zoals de Douane en OMWB",
        ],
        requirements: [
          "Minimaal een mbo-4 diploma, bij voorkeur in logistiek, supply chain of transport",
          "Minimaal 3 jaar ervaring in logistieke planning, warehousing of maritieme logistiek",
          "Goede kennis van logistieke processen en transportcoördinatie",
          "Goede beheersing van de Nederlandse én Engelse taal",
          "Een proactieve houding en sterke communicatieve vaardigheden",
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
          "Als Warehouse Support Medewerker zorg jij ervoor dat onze artikel- en materiaalgegevens volledig, correct en actueel zijn. Daarmee speel je een belangrijke rol in het efficiënt functioneren van ons warehouse binnen internationale offshore projecten.",
        responsibilities: [
          "Controleren en valideren van artikel- en materiaalgegevens",
          "Fysiek verifiëren van materialen en deze vergelijken met de gegevens in SAP",
          "Aanvullen, corrigeren en optimaliseren van artikelstamgegevens",
          "Bewaken van de kwaliteit en betrouwbaarheid van logistieke data",
          "Signaleren van afwijkingen en actief bijdragen aan oplossingen",
          "Ondersteunen bij voorraadbeheer en logistieke administratie",
          "Meedenken over verbeteringen van processen en werkwijzen binnen het warehouse",
          "Samenwerken met collega's van logistiek, magazijn en supply chain om de kwaliteit van data verder te verbeteren",
        ],
        requirements: [
          "Minimaal een mbo-4 diploma, bij voorkeur richting logistiek, supply chain of administratie",
          "Maximaal 2 jaar relevante werkervaring binnen logistiek, supply chain of de maritieme sector",
          "Een nauwkeurige en proactieve werkhouding",
          "Goede kennis van Microsoft Office, met name Excel",
          "Affiniteit met systemen zoals SAP EWM is een pré",
          "Goede beheersing van zowel de Nederlandse als Engelse taal",
        ],
      },
      {
        slug: "warehouse-engineer",
        title: "Warehouse Engineer",
        category: "Supply Chain",
        type: "Full-Time, Contract",
        status: "Active",
        location: "Heijningen, Netherlands",
        description:
          "Als Warehouse Engineer ben je verantwoordelijk voor het beheren, verbeteren en verder ontwikkelen van magazijnprocessen binnen de organisatie van de klant. Je maakt deel uit van het logistieke centrum voor projectmaterialen en verbruiksartikelen voor de schepen.",
        responsibilities: [
          "Beheren, verbeteren en verder ontwikkelen van magazijnprocessen en -procedures",
          "Identificeren van verbetermogelijkheden en deze vertalen naar praktische plannen",
          "Analyseren van data, beoordelen van de haalbaarheid en afstemmen met stakeholders ter ondersteuning van businesscases en projectvoorstellen",
          "Opstellen van projectplannen, businesscases en, waar relevant, ROI-berekeningen",
          "Zelfstandig leiden van verbeterprojecten of samenwerken met aangewezen projectteamleden",
          "Monitoren van de projectvoortgang, opstellen van rapportages en waar nodig aanpassen van procedures",
          "Beheren van magazijn gerelateerde processen en bijdragen aan veilige, betrouwbare en efficiënte magazijnactiviteiten",
        ],
        requirements: [
          "Een afgeronde hbo-opleiding of een gelijkwaardig opleidings- en ervaringsniveau",
          "Bij voorkeur minimaal zes jaar relevante ervaring binnen warehouse engineering of het verbeteren van magazijnprocessen",
          "Goede kennis van magazijnprocedures, -concepten en operationele processen",
          "Sterke analytische vaardigheden en het vermogen om data te gebruiken ter ondersteuning van besluitvorming",
          "Ervaring met SAP is een pré",
          "Goede communicatieve vaardigheden en het zelfvertrouwen om met verschillende stakeholders samen te werken",
          "Een proactieve, pragmatische en no-nonsense aanpak",
          "Vloeiende beheersing van het Nederlands is verplicht",
        ],
      },
      {
        slug: "supply-chain-starter",
        title: "Supply Chain Starter",
        category: "Supply Chain",
        type: "Full-Time",
        status: "Active",
        location: "Rotterdam, Netherlands",
        description:
          "Voor ambitieuze hbo-afgestudeerden en starters bieden wij een gestructureerde omgeving om de brug te slaan tussen studie en werkervaring. Via praktische training en persoonlijke begeleiding ontwikkel je je tot een professionele Supply Chain Planner.",
        responsibilities: [
          "Supply Chain Planning & Analysis",
          "Inventory Management & Operational Coordination",
          "Stakeholder Collaboration & Communication",
          "Process Improvement & Continuous Development",
        ],
        requirements: [
          "HBO afgestudeerd of bijna afgestudeerd, bij voorkeur in Supply Chain Management, Logistics & Economics, Industrial Engineering, International Business, Business Administration of een gerelateerd vakgebied",
          "Geen uitgebreide werkervaring vereist; bedoeld voor starters die praktijkervaring willen opdoen in supply chain",
          "Vloeiende beheersing van het Nederlands is verplicht, professionele beheersing van het Engels vereist",
          "Sterke analytische vaardigheden en affiniteit met cijfers, data en gestructureerde processen",
          "Goede kennis van Microsoft Excel; affiniteit met ERP-systemen en digitale planningstools is een pré",
          "Sterke mondelinge en schriftelijke communicatievaardigheden",
          "Nieuwsgierig, proactief, leergierig, gestructureerd en oplossingsgericht",
          "Duidelijke interesse in een lange termijn carrière binnen Supply Chain Planning en motivatie om het volledige 3-maanden trainingsprogramma te volgen",
          "Geldige werkvergunning voor Nederland",
          "ITIL Foundation certificering of structured service-desk ervaring is een pré",
          "Ervaring met WMS of industriële ERP-omgevingen is een pré",
          "Bekendheid met database management concepten en analytics platforms (Excel / Power BI)",
        ],
      },
      {
        slug: "master-data-specialist",
        title: "Master Data Specialist – SAP S/4HANA",
        category: "Supply Chain",
        type: "Full-Time",
        status: "Active",
        location: "Rotterdam, Netherlands",
        description:
          "We are seeking a detail-oriented and motivated Master Data Specialist to join our global team. In this role, you will be responsible for delivering reliable outcomes within the Supply Chain & Procurement function, working with structured processes and clear stakeholder communication.",
        responsibilities: [
          "Core delivery and execution of master data processes",
          "Stakeholder collaboration across departments",
          "Analysis and problem solving on data quality issues",
          "Driving process improvement initiatives",
          "Documentation and reporting on master data governance",
          "Maintaining operational quality and consistency",
        ],
        requirements: [
          "3+ years of relevant hands-on experience in a comparable Master Data Specialist or related role",
          "Bachelor's degree or equivalent professional experience related to Master Data Specialist, Supply Chain & Procurement, or a closely related discipline",
          "Experience with ERP/master data management, preferably SAP S/4HANA",
          "Strong ability to translate requirements into practical execution, evaluate outcomes, and communicate clearly with stakeholders",
          "Comfortable working in a hybrid setup",
        ],
      },
      {
        slug: "procurement-specialist",
        title: "Procurement Specialist",
        category: "Supply Chain",
        type: "Full-Time",
        status: "Active",
        location: "Netherlands",
        description:
          "The Procurement Specialist will be responsible for managing end-to-end procurement activities, including sourcing, tendering, supplier evaluation, contract award, contract support, and supplier onboarding, ensuring cost efficiency and compliance with Dutch and EU procurement regulations.",
        responsibilities: [
          "Manage the full procurement cycle from sourcing and tendering to contract award and supplier onboarding",
          "Identify, evaluate, and negotiate with suppliers to secure the best value in terms of quality, cost, delivery, and service",
          "Prepare and support procurement documentation, supplier evaluations, purchase agreements, tender documents, and contract-related activities",
          "Maintain accurate procurement records, contracts, and reporting within ERP/procurement systems",
          "Ensure procurement activities are completed in line with internal policies, procedures, and business requirements",
          "Support cost-saving initiatives and contribute to procurement efficiency improvements",
          "Coordinate with internal stakeholders to understand business needs and translate them into procurement actions",
        ],
        requirements: [
          "Bachelor's degree in Supply Chain Management, Business Administration, Economics, Procurement, or a related field",
          "Minimum 5+ years of experience in procurement, sourcing, supply chain, or supplier management",
          "Strong negotiation, tendering, sourcing, and contract management skills",
          "Experience with supplier evaluation, supplier onboarding, and supplier performance management",
          "Proficiency in ERP/procurement systems such as SAP, Oracle, or similar platforms",
          "Solid understanding of procurement processes, tendering, and contract award procedures",
          "Knowledge of EU procurement directives and Dutch procurement regulations",
          "Fluent English and Dutch communication skills required",
          "Must be authorized to work in the Netherlands",
          "Experience with SAP S/4HANA or Oracle Fusion is a plus",
          "CIPS qualification or equivalent professional procurement certification is a plus",
          "Experience in category management or strategic sourcing is a plus",
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
        type: "Full-Time, Contract",
        status: "Active",
        location: "On-site",
        description:
          "At IT Solutions Hub, we deliver innovative technology solutions by leveraging AI and Machine Learning to build intelligent systems that drive efficiency and data-driven insights. Join our team where your contributions directly impact clients' digital transformation journeys.",
        responsibilities: [
          "Deploy machine learning workloads, preferably in AWS using SageMaker",
          "Implement MLOps practices including monitoring, alerting, CI/CD pipelines, Docker containerization, and testing",
          "Work closely with data engineering and software teams to ensure seamless deployment of ML models into production",
          "Ensure code quality and maintain version control using GitHub, following collaborative best practices",
          "Leverage cloud-native services on AWS (S3, API Gateway, Lambda, ECS) or comparable platforms like MS Azure and Google Cloud",
          "Collaborate with cross-functional teams to translate business requirements into actionable technical solutions",
        ],
        requirements: [
          "Advanced proficiency in Python and strong knowledge of SQL",
          "Hands-on experience deploying machine learning workloads in cloud environments, preferably AWS SageMaker",
          "Practical experience implementing MLOps, including monitoring, alerting, CI/CD pipelines, Docker builds, and automated testing",
          "Proficiency with version control systems like GitHub, including collaborative coding workflows",
          "Experience with AWS cloud-native services such as S3, API Gateway, Lambda, ECS or equivalent services on MS Azure or Google Cloud",
          "Strong communication skills in English, both written and verbal",
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
        location: "Spijkenisse, Netherlands",
        description:
          "In this vital technical role, you will be responsible for the independent maintenance, repair, and optimization of mechanical HVAC installations within an industrial environment, acting as an on-site entrepreneur working closely with clients and maintenance engineers.",
        responsibilities: [
          "Maintenance & repair execution on mechanical HVAC installations",
          "Operational coordination & procurement of materials",
          "Client relations & stakeholder collaboration",
        ],
        requirements: [
          "Completed MBO Level 3 diploma as a Service Technician",
          "Minimum of 2 years of proven work experience in installation technology",
          "Possession of a valid Category B driver's license",
          "F-Gas certificate for handling fluorinated greenhouse gases in cooling installations is a plus",
          "VCA Basic / VOL safety certification is a plus",
          "Prior hands-on experience with industrial cooling and climate system brands (e.g. Daikin, Carrier, Mitsubishi Electric, or Trane) is a plus",
        ],
      },
      {
        slug: "hvac-service-technician",
        title: "HVAC Service Technician",
        category: "Engineering",
        type: "Full-Time",
        status: "Active",
        location: "Heinkenszand and Roosendaal, Netherlands",
        description:
          "In this vital technical role, you will maintain, optimize, and troubleshoot industrial HVAC and cooling installations, ensuring reliability, safety, and sustainability within the Food, Energy, and (semi) Industrial sectors across Zeeland, Noord-Brabant, the Belgian border region, and occasionally Zuid-Holland.",
        responsibilities: [
          "Maintenance, commissioning & optimization of HVAC and cooling installations",
          "Diagnostics & compliance with technical and safety standards",
          "Client relations & technical advisory as primary on-site point of contact",
        ],
        requirements: [
          "Completed MBO education in Cooling Technology, Installation Technology, or HVAC",
          "Possession of a valid F-gas Category 1 certificate (required)",
          "Proven experience in the service and maintenance of technical installations, preferably within an industrial environment",
          "Possession of a valid Category B driver's license",
          "F-gas A1 and/or B1 certification is a plus",
          "Knowledge of electrical engineering or measurement and control technology is a plus",
        ],
      },
      {
        slug: "heat-tracing-technician",
        title: "Heat Tracing Technician",
        category: "Engineering",
        type: "Full-Time",
        status: "Active",
        location: "Spijkenisse, Netherlands",
        description:
          "As part of an expert team, you will be responsible for the installation, maintenance, and optimization of electrical heating (Heat Tracing) systems that keep piping networks, tanks, fittings, and industrial surfaces at required temperatures to secure complex industrial processes.",
        responsibilities: [
          "Installation, commissioning & maintenance of Heat Tracing systems",
          "Diagnostics & operational execution on electrical heating systems",
          "Team collaboration & process improvement",
        ],
        requirements: [
          "Completed MBO Electrical Engineering education (Level 2 or Level 3)",
          "Several years of proven work experience within an industrial environment",
          "Previous experience in Heat Tracing is highly preferred; comprehensive on-the-job training provided for candidates with a strong electrical background",
          "Possession of a valid driver's license",
          "Entrepreneurial mindset with true ownership of the craft",
          "Highly capable of working autonomously on-site while remaining connected to a close-knit specialist team",
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
        location: "Hoogeveen / Capelle aan den IJssel Area, Netherlands",
        description:
          "We deliver high-performance managed IT services, cloud infrastructure, workforce integration, and digital transformation solutions to global enterprises and client networks across the Netherlands and Europe, maintaining secure and uninterrupted IT infrastructure.",
        responsibilities: [
          "End-user support & incident management",
          "System, identity, and cloud administration",
          "Operational, infrastructure & on-site support",
          "Security, onboarding, and documentation",
        ],
        requirements: [
          "MBO Level 4+ in ICT or related field",
          "1–3+ years IT Support/Helpdesk experience",
          "Experience with Windows 10/11 and macOS",
          "Microsoft 365 and Entra ID / Azure AD experience",
          "Microsoft Intune experience",
          "Basic networking knowledge: TCP/IP, DNS, DHCP, Wi-Fi",
          "Experience with IT ticketing systems",
          "Familiarity with Azure / AWS / Exchange Online",
          "Hardware and printer troubleshooting skills",
          "Knowledge of MFA and endpoint security",
          "Fluent in Dutch and English",
          "ITIL/WMS/ERP experience preferred",
        ],
      },
      {
        slug: "power-bi-developer",
        title: "Power BI Developer",
        category: "IT",
        type: "Full-Time",
        status: "Active",
        location: "Rotterdam, Netherlands",
        description:
          "We are seeking a detail-oriented and motivated Power BI Developer to join our global team, delivering reliable outcomes within the Data function through structured processes, clear stakeholder communication, and a strong focus on quality.",
        responsibilities: [
          "Core delivery using Power BI Desktop",
          "Process improvement through Power BI Service",
          "Documentation & reporting with DAX",
          "Stakeholder management using Power Query",
          "Team collaboration on SQL-based data models",
          "Operational excellence with SQL Server",
        ],
        requirements: [
          "Bachelor's degree or equivalent professional experience related to Power BI Development",
          "3+ years of relevant hands-on experience in a comparable role",
          "Strong SQL skills and understanding of data modeling",
          "Demonstrable ability to deliver strong results within the Data function",
        ],
      },
      {
        slug: "it-specialist",
        title: "IT Specialist",
        category: "IT",
        type: "Full-Time, Contract",
        status: "Active",
        location: "On-site",
        description:
          "We are looking for an experienced IT Administrator to manage and maintain our IT infrastructure, ensuring smooth operations across networking, servers, security, and technical support.",
        responsibilities: [
          "Server management & administration",
          "Network setup & security",
          "Web hosting & management",
          "Email administration (Microsoft Exchange Online)",
          "Local file sharing & backup solutions",
          "Employee monitoring & IT policies",
          "IT procurement & asset management",
          "IT automation & AI/cloud setup (bonus skills)",
        ],
        requirements: [
          "2-3 years of experience in IT administration, networking, and system management",
          "Hands-on experience with Windows Server 2022, Active Directory, Microsoft Exchange Online, and file-sharing systems",
          "Strong knowledge of networking protocols, firewalls, and security best practices",
          "Proficiency in Apache Web Server and hosting React.js applications",
          "Experience with email security and spam filtering mechanisms (SPF, DKIM, DMARC)",
          "Familiarity with monitoring solutions for activity monitoring and restriction",
          "Ability to set up and maintain SMB/local file-sharing solutions",
          "Strong troubleshooting skills for hardware, software, and network issues",
        ],
      },
      {
        slug: "oracle-erp-consultant-specialist",
        title: "Oracle ERP Consultant/Specialist",
        category: "IT",
        type: "Full-Time, Contract",
        status: "Active",
        location: "On-site",
        description:
          "At IT Solutions Hub, we pride ourselves on being a trusted partner for businesses seeking strategic guidance and innovative solutions, delivering tailored Oracle SCM strategies that drive operational excellence and sustainable growth.",
        responsibilities: [
          "Liaising with customers and colleagues for consultation, requirements gathering, design, implementation, and ongoing support of Oracle SCM solutions",
          "Assisting customers with analyzing, designing, testing, and deploying Oracle SCM enhancements, reports, and application updates",
          "Requirements elicitation, specification & fit-gap analysis",
          "Business process modelling and specification",
          "Functional design specification for customizations and enhancements, including interfaces and reports",
          "Data conversion design, security design and build",
          "Test planning, preparation, execution, and defect management, including issue and risk management",
          "Quality management: reviewing key deliverables and ensuring adherence to scope, standards, and procedures",
        ],
        requirements: [
          "Excellent critical thinking, interpersonal, communication, and problem-solving skills",
          "Good understanding of gap analysis, ERP, and test scripts",
          "Understanding of business requirements and business processes, with willingness to learn and grow",
          "Strong experience in MS Excel",
          "Ability to multitask with excellent communication skills in a fast-paced environment",
          "Ability to work independently",
        ],
      },
      {
        slug: "it-manager",
        title: "IT Manager",
        category: "IT",
        type: "Full-Time, Contract",
        status: "Active",
        location: "On-site",
        description:
          "We are seeking a dynamic and solutions-driven IT Manager to lead the technology infrastructure and operations of a fast-paced omnichannel business, ensuring secure, scalable, and business-aligned IT systems.",
        responsibilities: [
          "Oversee all IT systems, including ERP, WMS, CRM, POS, and cloud services",
          "Ensure network stability, data security, and seamless system performance across locations",
          "Lead system monitoring, troubleshooting, and disaster recovery protocols",
        ],
        requirements: [
          "Minimum 5 years in IT management, preferably in logistics, e-commerce, or retail sectors",
          "Hands-on experience with ERP and WMS systems; Oracle, SAP, or NetSuite preferred",
          "Background in managing cloud infrastructure, security, and vendor networks",
          "Strong analytical and troubleshooting skills",
          "Proven leadership in IT project delivery",
          "Confident in cross-functional communication and stakeholder engagement",
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
        slug: "ai-development-intern",
        title: "AI Development Intern",
        category: "IT",
        type: "Internship",
        status: "Active",
        location: "Hoogvliet Rotterdam, Netherlands",
        description:
          "Join our team to assist in the design, development, and implementation of AI and Machine Learning models, contributing to AI-powered applications and exploring innovative LLM use cases for business process automation.",
        responsibilities: [
          "Assist in the design, development, and implementation of AI and Machine Learning models",
          "Contribute to the creation and optimization of AI-powered applications and intelligent solutions",
          "Work with Large Language Models (LLMs) to explore and implement business process automation use cases",
          "Actively participate in the full lifecycle of AI projects, from conceptualization to deployment and optimization",
          "Conduct research on emerging AI technologies and methodologies to inform project strategies",
        ],
        requirements: [
          "Strong interest in Artificial Intelligence, Machine Learning, and software development, demonstrated through academic projects or personal initiatives",
          "Currently pursuing a Bachelor's or Master's degree in Computer Science, AI, Machine Learning, Data Science, or a related technical field",
          "Familiarity with Python and understanding of machine learning concepts and frameworks (e.g. TensorFlow, PyTorch)",
          "Basic knowledge of data structures and algorithms; exposure to LLMs is a plus",
          "Excellent problem-solving abilities, eagerness to learn, strong analytical thinking, and effective communication skills",
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