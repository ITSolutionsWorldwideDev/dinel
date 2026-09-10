export type LocalizedText = {
  en: string;
  nl: string;
};

export type Job = {
  slug: string;
  title: LocalizedText;
  category: LocalizedText;
  type: LocalizedText;
  status: LocalizedText;
  location: LocalizedText;
  description: LocalizedText;
  responsibilities: LocalizedText[];
  requirements: LocalizedText[];
};

export type JobCategoryGroup = {
  category: LocalizedText;
  jobs: Job[];
};

export const jobCategories: JobCategoryGroup[] = [
  {
    category: { en: "Supply Chain", nl: "Supply Chain" },
    jobs: [
      {
        slug: "warehouse-planner",
        title: { en: "Warehouse Planner", nl: "Warehouse Planner" },
        category: { en: "Supply Chain", nl: "Supply Chain" },
        type: { en: "Full-Time", nl: "Fulltime" },
        status: { en: "Active", nl: "Actief" },
        location: { en: "Rotterdam, Netherlands", nl: "Rotterdam, Nederland" },
        description: {
          en: "As a Warehouse Planner, you are the link between the warehouse, logistics, transport and our maritime operations. You ensure that materials, equipment and transports are smoothly planned and executed from our modern logistics center in the Rotterdam region.",
          nl: "Als Warehouse Planner ben jij de spil tussen het magazijn, logistiek, transport en onze maritieme operaties. Jij zorgt ervoor dat materialen, equipment en transporten soepel worden gepland en uitgevoerd vanuit ons moderne logistieke centrum in de regio Rotterdam.",
        },
        responsibilities: [
          { en: "Drafting, managing and optimizing the daily warehouse planning", nl: "Opstellen, beheren en optimaliseren van de dagelijkse warehouseplanning" },
          { en: "Coordinating mobilizations and demobilizations to and from our vessels worldwide", nl: "Coördineren van mobilisaties en demobilisaties van en naar onze schepen wereldwijd" },
          { en: "Processing and following up work orders and logistics requests from the organization", nl: "Verwerken en opvolgen van werkorders en logistieke aanvragen vanuit de organisatie" },
          { en: "Coordinating with warehouse teams, foremen, logistics and supply chain to keep the planning up to date", nl: "Afstemmen met magazijnteams, voormannen, logistiek en supply chain om de planning actueel te houden" },
          { en: "Organizing and planning transports to various international destinations", nl: "Organiseren en plannen van transporten naar uiteenlopende internationale bestemmingen" },
          { en: "Submitting and following up customs and clearance requests", nl: "Indienen en opvolgen van douane- en inklaringsverzoeken" },
          { en: "Monitoring the correct processing of customs matters and dangerous goods", nl: "Bewaken van de correcte verwerking van douanezaken en gevaarlijke goederen" },
          { en: "Ensuring compliance with laws and regulations and communication with authorities such as Customs and OMWB", nl: "Zorgen voor naleving van wet- en regelgeving en communicatie met instanties zoals de Douane en OMWB" },
        ],
        requirements: [
          { en: "At least an MBO-4 diploma, preferably in logistics, supply chain or transport", nl: "Minimaal een mbo-4 diploma, bij voorkeur in logistiek, supply chain of transport" },
          { en: "At least 3 years of experience in logistics planning, warehousing or maritime logistics", nl: "Minimaal 3 jaar ervaring in logistieke planning, warehousing of maritieme logistiek" },
          { en: "Good knowledge of logistics processes and transport coordination", nl: "Goede kennis van logistieke processen en transportcoördinatie" },
          { en: "Good command of both Dutch and English", nl: "Goede beheersing van de Nederlandse én Engelse taal" },
          { en: "A proactive attitude and strong communication skills", nl: "Een proactieve houding en sterke communicatieve vaardigheden" },
        ],
      },
      {
        slug: "logistiek-administratief-medewerker",
        title: { en: "Logistics Administrative Employee", nl: "Logistiek Administratief Medewerker" },
        category: { en: "Supply Chain", nl: "Supply Chain" },
        type: { en: "Full-Time", nl: "Fulltime" },
        status: { en: "Active", nl: "Actief" },
        location: { en: "On-site", nl: "Op locatie" },
        description: {
          en: "As a Warehouse Support Employee, you ensure that our article and material data are complete, correct and up to date. This means you play an important role in the efficient functioning of our warehouse within international offshore projects.",
          nl: "Als Warehouse Support Medewerker zorg jij ervoor dat onze artikel- en materiaalgegevens volledig, correct en actueel zijn. Daarmee speel je een belangrijke rol in het efficiënt functioneren van ons warehouse binnen internationale offshore projecten.",
        },
        responsibilities: [
          { en: "Checking and validating article and material data", nl: "Controleren en valideren van artikel- en materiaalgegevens" },
          { en: "Physically verifying materials and comparing them with the data in SAP", nl: "Fysiek verifiëren van materialen en deze vergelijken met de gegevens in SAP" },
          { en: "Supplementing, correcting and optimizing article master data", nl: "Aanvullen, corrigeren en optimaliseren van artikelstamgegevens" },
          { en: "Safeguarding the quality and reliability of logistics data", nl: "Bewaken van de kwaliteit en betrouwbaarheid van logistieke data" },
          { en: "Identifying discrepancies and actively contributing to solutions", nl: "Signaleren van afwijkingen en actief bijdragen aan oplossingen" },
          { en: "Supporting inventory management and logistics administration", nl: "Ondersteunen bij voorraadbeheer en logistieke administratie" },
          { en: "Contributing ideas for process and workflow improvements within the warehouse", nl: "Meedenken over verbeteringen van processen en werkwijzen binnen het warehouse" },
          { en: "Collaborating with colleagues from logistics, warehouse and supply chain to further improve data quality", nl: "Samenwerken met collega's van logistiek, magazijn en supply chain om de kwaliteit van data verder te verbeteren" },
        ],
        requirements: [
          { en: "At least an MBO-4 diploma, preferably in logistics, supply chain or administration", nl: "Minimaal een mbo-4 diploma, bij voorkeur richting logistiek, supply chain of administratie" },
          { en: "Maximum 2 years of relevant work experience in logistics, supply chain or the maritime sector", nl: "Maximaal 2 jaar relevante werkervaring binnen logistiek, supply chain of de maritieme sector" },
          { en: "A precise and proactive work attitude", nl: "Een nauwkeurige en proactieve werkhouding" },
          { en: "Good knowledge of Microsoft Office, especially Excel", nl: "Goede kennis van Microsoft Office, met name Excel" },
          { en: "Affinity with systems such as SAP EWM is a plus", nl: "Affiniteit met systemen zoals SAP EWM is een pré" },
          { en: "Good command of both Dutch and English", nl: "Goede beheersing van zowel de Nederlandse als Engelse taal" },
        ],
      },
      {
        slug: "warehouse-engineer",
        title: { en: "Warehouse Engineer", nl: "Warehouse Engineer" },
        category: { en: "Supply Chain", nl: "Supply Chain" },
        type: { en: "Full-Time, Contract", nl: "Fulltime, Contract" },
        status: { en: "Active", nl: "Actief" },
        location: { en: "Heijningen, Netherlands", nl: "Heijningen, Nederland" },
        description: {
          en: "As a Warehouse Engineer, you are responsible for managing, improving and further developing warehouse processes within the client's organization. You are part of the logistics center for project materials and consumables for the vessels.",
          nl: "Als Warehouse Engineer ben je verantwoordelijk voor het beheren, verbeteren en verder ontwikkelen van magazijnprocessen binnen de organisatie van de klant. Je maakt deel uit van het logistieke centrum voor projectmaterialen en verbruiksartikelen voor de schepen.",
        },
        responsibilities: [
          { en: "Managing, improving and further developing warehouse processes and procedures", nl: "Beheren, verbeteren en verder ontwikkelen van magazijnprocessen en -procedures" },
          { en: "Identifying improvement opportunities and translating them into practical plans", nl: "Identificeren van verbetermogelijkheden en deze vertalen naar praktische plannen" },
          { en: "Analyzing data, assessing feasibility and aligning with stakeholders to support business cases and project proposals", nl: "Analyseren van data, beoordelen van de haalbaarheid en afstemmen met stakeholders ter ondersteuning van businesscases en projectvoorstellen" },
          { en: "Drafting project plans, business cases and, where relevant, ROI calculations", nl: "Opstellen van projectplannen, businesscases en, waar relevant, ROI-berekeningen" },
          { en: "Independently leading improvement projects or collaborating with assigned project team members", nl: "Zelfstandig leiden van verbeterprojecten of samenwerken met aangewezen projectteamleden" },
          { en: "Monitoring project progress, preparing reports and adjusting procedures where needed", nl: "Monitoren van de projectvoortgang, opstellen van rapportages en waar nodig aanpassen van procedures" },
          { en: "Managing warehouse-related processes and contributing to safe, reliable and efficient warehouse activities", nl: "Beheren van magazijn gerelateerde processen en bijdragen aan veilige, betrouwbare en efficiënte magazijnactiviteiten" },
        ],
        requirements: [
          { en: "A completed HBO degree or an equivalent level of education and experience", nl: "Een afgeronde hbo-opleiding of een gelijkwaardig opleidings- en ervaringsniveau" },
          { en: "Preferably at least six years of relevant experience in warehouse engineering or improving warehouse processes", nl: "Bij voorkeur minimaal zes jaar relevante ervaring binnen warehouse engineering of het verbeteren van magazijnprocessen" },
          { en: "Good knowledge of warehouse procedures, concepts and operational processes", nl: "Goede kennis van magazijnprocedures, -concepten en operationele processen" },
          { en: "Strong analytical skills and the ability to use data to support decision-making", nl: "Sterke analytische vaardigheden en het vermogen om data te gebruiken ter ondersteuning van besluitvorming" },
          { en: "Experience with SAP is a plus", nl: "Ervaring met SAP is een pré" },
          { en: "Good communication skills and the confidence to work with various stakeholders", nl: "Goede communicatieve vaardigheden en het zelfvertrouwen om met verschillende stakeholders samen te werken" },
          { en: "A proactive, pragmatic and no-nonsense approach", nl: "Een proactieve, pragmatische en no-nonsense aanpak" },
          { en: "Fluent command of Dutch is required", nl: "Vloeiende beheersing van het Nederlands is verplicht" },
        ],
      },
      {
        slug: "supply-chain-starter",
        title: { en: "Supply Chain Starter", nl: "Supply Chain Starter" },
        category: { en: "Supply Chain", nl: "Supply Chain" },
        type: { en: "Full-Time", nl: "Fulltime" },
        status: { en: "Active", nl: "Actief" },
        location: { en: "Rotterdam, Netherlands", nl: "Rotterdam, Nederland" },
        description: {
          en: "For ambitious HBO graduates and starters, we offer a structured environment to bridge the gap between studying and work experience. Through practical training and personal guidance, you will develop into a professional Supply Chain Planner.",
          nl: "Voor ambitieuze hbo-afgestudeerden en starters bieden wij een gestructureerde omgeving om de brug te slaan tussen studie en werkervaring. Via praktische training en persoonlijke begeleiding ontwikkel je je tot een professionele Supply Chain Planner.",
        },
        responsibilities: [
          { en: "Supply Chain Planning & Analysis", nl: "Supply Chain Planning & Analyse" },
          { en: "Inventory Management & Operational Coordination", nl: "Voorraadbeheer & Operationele Coördinatie" },
          { en: "Stakeholder Collaboration & Communication", nl: "Samenwerking & Communicatie met Stakeholders" },
          { en: "Process Improvement & Continuous Development", nl: "Procesverbetering & Continue Ontwikkeling" },
        ],
        requirements: [
          { en: "HBO graduate or nearly graduated, preferably in Supply Chain Management, Logistics & Economics, Industrial Engineering, International Business, Business Administration or a related field", nl: "HBO afgestudeerd of bijna afgestudeerd, bij voorkeur in Supply Chain Management, Logistics & Economics, Industrial Engineering, International Business, Business Administration of een gerelateerd vakgebied" },
          { en: "No extensive work experience required; intended for starters who want to gain practical experience in supply chain", nl: "Geen uitgebreide werkervaring vereist; bedoeld voor starters die praktijkervaring willen opdoen in supply chain" },
          { en: "Fluent command of Dutch is required, professional command of English required", nl: "Vloeiende beheersing van het Nederlands is verplicht, professionele beheersing van het Engels vereist" },
          { en: "Strong analytical skills and affinity with numbers, data and structured processes", nl: "Sterke analytische vaardigheden en affiniteit met cijfers, data en gestructureerde processen" },
          { en: "Good knowledge of Microsoft Excel; affinity with ERP systems and digital planning tools is a plus", nl: "Goede kennis van Microsoft Excel; affiniteit met ERP-systemen en digitale planningstools is een pré" },
          { en: "Strong verbal and written communication skills", nl: "Sterke mondelinge en schriftelijke communicatievaardigheden" },
          { en: "Curious, proactive, eager to learn, structured and solution-oriented", nl: "Nieuwsgierig, proactief, leergierig, gestructureerd en oplossingsgericht" },
          { en: "Clear interest in a long-term career in Supply Chain Planning and motivation to complete the full 3-month training program", nl: "Duidelijke interesse in een lange termijn carrière binnen Supply Chain Planning en motivatie om het volledige 3-maanden trainingsprogramma te volgen" },
          { en: "Valid work permit for the Netherlands", nl: "Geldige werkvergunning voor Nederland" },
          { en: "ITIL Foundation certification or structured service-desk experience is a plus", nl: "ITIL Foundation certificering of structured service-desk ervaring is een pré" },
          { en: "Experience with WMS or industrial ERP environments is a plus", nl: "Ervaring met WMS of industriële ERP-omgevingen is een pré" },
          { en: "Familiarity with database management concepts and analytics platforms (Excel / Power BI)", nl: "Bekendheid met database management concepten en analytics platforms (Excel / Power BI)" },
        ],
      },
      {
        slug: "master-data-specialist",
        title: { en: "Master Data Specialist – SAP S/4HANA", nl: "Master Data Specialist – SAP S/4HANA" },
        category: { en: "Supply Chain", nl: "Supply Chain" },
        type: { en: "Full-Time", nl: "Fulltime" },
        status: { en: "Active", nl: "Actief" },
        location: { en: "Rotterdam, Netherlands", nl: "Rotterdam, Nederland" },
        description: {
          en: "We are seeking a detail-oriented and motivated Master Data Specialist to join our global team. In this role, you will be responsible for delivering reliable outcomes within the Supply Chain & Procurement function, working with structured processes and clear stakeholder communication.",
          nl: "Wij zijn op zoek naar een nauwkeurige en gemotiveerde Master Data Specialist om ons wereldwijde team te versterken. In deze rol ben je verantwoordelijk voor het leveren van betrouwbare resultaten binnen de functie Supply Chain & Procurement, met gestructureerde processen en duidelijke communicatie met stakeholders.",
        },
        responsibilities: [
          { en: "Core delivery and execution of master data processes", nl: "Kernuitvoering van master data processen" },
          { en: "Stakeholder collaboration across departments", nl: "Samenwerking met stakeholders binnen verschillende afdelingen" },
          { en: "Analysis and problem solving on data quality issues", nl: "Analyse en probleemoplossing bij datakwaliteitskwesties" },
          { en: "Driving process improvement initiatives", nl: "Aansturen van procesverbeteringsinitiatieven" },
          { en: "Documentation and reporting on master data governance", nl: "Documentatie en rapportage over master data governance" },
          { en: "Maintaining operational quality and consistency", nl: "Bewaken van operationele kwaliteit en consistentie" },
        ],
        requirements: [
          { en: "3+ years of relevant hands-on experience in a comparable Master Data Specialist or related role", nl: "3+ jaar relevante praktijkervaring in een vergelijkbare Master Data Specialist of gerelateerde functie" },
          { en: "Bachelor's degree or equivalent professional experience related to Master Data Specialist, Supply Chain & Procurement, or a closely related discipline", nl: "Bachelordiploma of gelijkwaardige professionele ervaring gerelateerd aan Master Data Specialist, Supply Chain & Procurement, of een nauw verwant vakgebied" },
          { en: "Experience with ERP/master data management, preferably SAP S/4HANA", nl: "Ervaring met ERP/master data management, bij voorkeur SAP S/4HANA" },
          { en: "Strong ability to translate requirements into practical execution, evaluate outcomes, and communicate clearly with stakeholders", nl: "Sterk vermogen om vereisten te vertalen naar praktische uitvoering, resultaten te evalueren en duidelijk te communiceren met stakeholders" },
          { en: "Comfortable working in a hybrid setup", nl: "Comfortabel met werken in een hybride omgeving" },
        ],
      },
      {
        slug: "procurement-specialist",
        title: { en: "Procurement Specialist", nl: "Procurement Specialist" },
        category: { en: "Supply Chain", nl: "Supply Chain" },
        type: { en: "Full-Time", nl: "Fulltime" },
        status: { en: "Active", nl: "Actief" },
        location: { en: "Netherlands", nl: "Nederland" },
        description: {
          en: "The Procurement Specialist will be responsible for managing end-to-end procurement activities, including sourcing, tendering, supplier evaluation, contract award, contract support, and supplier onboarding, ensuring cost efficiency and compliance with Dutch and EU procurement regulations.",
          nl: "De Procurement Specialist is verantwoordelijk voor het beheren van end-to-end inkoopactiviteiten, waaronder sourcing, tenders, leveranciersevaluatie, contractgunning, contractondersteuning en het onboarden van leveranciers, met aandacht voor kostenefficiëntie en naleving van Nederlandse en EU-inkoopregels.",
        },
        responsibilities: [
          { en: "Manage the full procurement cycle from sourcing and tendering to contract award and supplier onboarding", nl: "Beheren van de volledige inkoopcyclus van sourcing en tenders tot contractgunning en onboarding van leveranciers" },
          { en: "Identify, evaluate, and negotiate with suppliers to secure the best value in terms of quality, cost, delivery, and service", nl: "Identificeren, evalueren en onderhandelen met leveranciers om de beste waarde te behalen op het gebied van kwaliteit, kosten, levering en service" },
          { en: "Prepare and support procurement documentation, supplier evaluations, purchase agreements, tender documents, and contract-related activities", nl: "Voorbereiden en ondersteunen van inkoopdocumentatie, leveranciersevaluaties, inkoopovereenkomsten, tenderdocumenten en contractgerelateerde activiteiten" },
          { en: "Maintain accurate procurement records, contracts, and reporting within ERP/procurement systems", nl: "Bijhouden van nauwkeurige inkoopgegevens, contracten en rapportages binnen ERP/inkoopsystemen" },
          { en: "Ensure procurement activities are completed in line with internal policies, procedures, and business requirements", nl: "Zorgen dat inkoopactiviteiten worden uitgevoerd in lijn met interne beleidsregels, procedures en bedrijfsvereisten" },
          { en: "Support cost-saving initiatives and contribute to procurement efficiency improvements", nl: "Ondersteunen van kostenbesparende initiatieven en bijdragen aan verbetering van inkoopefficiëntie" },
          { en: "Coordinate with internal stakeholders to understand business needs and translate them into procurement actions", nl: "Afstemmen met interne stakeholders om bedrijfsbehoeften te begrijpen en te vertalen naar inkoopacties" },
        ],
        requirements: [
          { en: "Bachelor's degree in Supply Chain Management, Business Administration, Economics, Procurement, or a related field", nl: "Bachelordiploma in Supply Chain Management, Bedrijfskunde, Economie, Inkoop of een gerelateerd vakgebied" },
          { en: "Minimum 5+ years of experience in procurement, sourcing, supply chain, or supplier management", nl: "Minimaal 5+ jaar ervaring in inkoop, sourcing, supply chain of leveranciersmanagement" },
          { en: "Strong negotiation, tendering, sourcing, and contract management skills", nl: "Sterke vaardigheden in onderhandelen, tenders, sourcing en contractbeheer" },
          { en: "Experience with supplier evaluation, supplier onboarding, and supplier performance management", nl: "Ervaring met leveranciersevaluatie, onboarding van leveranciers en prestatiebeheer van leveranciers" },
          { en: "Proficiency in ERP/procurement systems such as SAP, Oracle, or similar platforms", nl: "Vaardigheid in ERP/inkoopsystemen zoals SAP, Oracle of vergelijkbare platforms" },
          { en: "Solid understanding of procurement processes, tendering, and contract award procedures", nl: "Gedegen kennis van inkoopprocessen, tenders en gunningsprocedures" },
          { en: "Knowledge of EU procurement directives and Dutch procurement regulations", nl: "Kennis van EU-aanbestedingsrichtlijnen en Nederlandse inkoopregelgeving" },
          { en: "Fluent English and Dutch communication skills required", nl: "Vloeiende communicatieve vaardigheden in het Engels en Nederlands vereist" },
          { en: "Must be authorized to work in the Netherlands", nl: "Moet gemachtigd zijn om in Nederland te werken" },
          { en: "Experience with SAP S/4HANA or Oracle Fusion is a plus", nl: "Ervaring met SAP S/4HANA of Oracle Fusion is een pré" },
          { en: "CIPS qualification or equivalent professional procurement certification is a plus", nl: "CIPS-kwalificatie of gelijkwaardig professioneel inkoopcertificaat is een pré" },
          { en: "Experience in category management or strategic sourcing is a plus", nl: "Ervaring met category management of strategische sourcing is een pré" },
        ],
      },
    ],
  },
  {
    category: { en: "Engineering", nl: "Engineering" },
    jobs: [
      {
        slug: "principal-structural-engineer-subsea-pipeline",
        title: { en: "Principal Structural Engineer - Subsea / Pipeline", nl: "Principal Structural Engineer - Subsea / Pipeline" },
        category: { en: "Engineering", nl: "Engineering" },
        type: { en: "Full-Time", nl: "Fulltime" },
        status: { en: "Active", nl: "Actief" },
        location: { en: "On-site", nl: "Op locatie" },
        description: {
          en: "We are looking for a Principal Structural Engineer to lead subsea and pipeline structural engineering projects from concept to execution.",
          nl: "Wij zoeken een Principal Structural Engineer om subsea- en pipeline-structuurprojecten te leiden van concept tot uitvoering.",
        },
        responsibilities: [
          { en: "Lead structural design for subsea/pipeline projects", nl: "Leiden van structureel ontwerp voor subsea/pipeline projecten" },
          { en: "Review and approve engineering calculations", nl: "Beoordelen en goedkeuren van technische berekeningen" },
          { en: "Mentor junior structural engineers", nl: "Begeleiden van junior structural engineers" },
        ],
        requirements: [
          { en: "10+ years experience in subsea/pipeline structural engineering", nl: "10+ jaar ervaring in subsea/pipeline structural engineering" },
          { en: "Strong knowledge of relevant codes and standards", nl: "Sterke kennis van relevante codes en normen" },
          { en: "Proven leadership experience", nl: "Bewezen leidinggevende ervaring" },
        ],
      },
      {
        slug: "structural-engineer-pipeline-engineering",
        title: { en: "Structural Engineer - Pipeline Engineering", nl: "Structural Engineer - Pipeline Engineering" },
        category: { en: "Engineering", nl: "Engineering" },
        type: { en: "Full-Time", nl: "Fulltime" },
        status: { en: "Active", nl: "Actief" },
        location: { en: "On-site", nl: "Op locatie" },
        description: {
          en: "Join our pipeline engineering team as a Structural Engineer, responsible for the structural design and analysis of pipeline systems.",
          nl: "Word onderdeel van ons pipeline engineering team als Structural Engineer, verantwoordelijk voor het structureel ontwerp en de analyse van pipelinesystemen.",
        },
        responsibilities: [
          { en: "Perform structural analysis and design calculations", nl: "Uitvoeren van structurele analyses en ontwerpberekeningen" },
          { en: "Prepare technical reports and drawings", nl: "Opstellen van technische rapporten en tekeningen" },
          { en: "Coordinate with multidisciplinary project teams", nl: "Afstemmen met multidisciplinaire projectteams" },
        ],
        requirements: [
          { en: "Bachelor's/Master's in Civil or Structural Engineering", nl: "Bachelor/Master in Civiele Techniek of Structural Engineering" },
          { en: "Experience in pipeline or offshore structures", nl: "Ervaring met pipeline- of offshore-structuren" },
          { en: "Proficiency in relevant engineering software", nl: "Vaardigheid in relevante engineeringsoftware" },
        ],
      },
      {
        slug: "instrumentation-engineer",
        title: { en: "Instrumentation Engineer", nl: "Instrumentation Engineer" },
        category: { en: "Engineering", nl: "Engineering" },
        type: { en: "Full-Time", nl: "Fulltime" },
        status: { en: "Active", nl: "Actief" },
        location: { en: "On-site", nl: "Op locatie" },
        description: {
          en: "We are hiring an Instrumentation Engineer to design, install, and maintain instrumentation and control systems.",
          nl: "Wij zoeken een Instrumentation Engineer voor het ontwerpen, installeren en onderhouden van instrumentatie- en regelsystemen.",
        },
        responsibilities: [
          { en: "Design instrumentation and control systems", nl: "Ontwerpen van instrumentatie- en regelsystemen" },
          { en: "Prepare specifications and datasheets", nl: "Opstellen van specificaties en datasheets" },
          { en: "Support commissioning and troubleshooting", nl: "Ondersteunen bij inbedrijfstelling en troubleshooting" },
        ],
        requirements: [
          { en: "Degree in Instrumentation/Electrical Engineering", nl: "Diploma in Instrumentatie/Elektrotechniek" },
          { en: "Experience with process control systems", nl: "Ervaring met procesbesturingssystemen" },
          { en: "Strong troubleshooting skills", nl: "Sterke troubleshootingvaardigheden" },
        ],
      },
      {
        slug: "project-engineer",
        title: { en: "Project Engineer", nl: "Project Engineer" },
        category: { en: "Engineering", nl: "Engineering" },
        type: { en: "Full-Time", nl: "Fulltime" },
        status: { en: "Active", nl: "Actief" },
        location: { en: "On-site", nl: "Op locatie" },
        description: {
          en: "As a Project Engineer, you will coordinate technical aspects of projects, ensuring they are delivered on time and within budget.",
          nl: "Als Project Engineer coördineer je de technische aspecten van projecten en zorg je dat ze op tijd en binnen budget worden opgeleverd.",
        },
        responsibilities: [
          { en: "Coordinate engineering activities across project phases", nl: "Coördineren van engineeringactiviteiten in alle projectfasen" },
          { en: "Track project timelines and budgets", nl: "Bewaken van projecttijdlijnen en budgetten" },
          { en: "Liaise with clients and contractors", nl: "Contact onderhouden met klanten en aannemers" },
        ],
        requirements: [
          { en: "Engineering degree with project experience", nl: "Technische opleiding met projectervaring" },
          { en: "Strong organizational and communication skills", nl: "Sterke organisatorische en communicatieve vaardigheden" },
          { en: "Experience with project management tools", nl: "Ervaring met projectmanagementtools" },
        ],
      },
      {
        slug: "network-engineer",
        title: { en: "Network Engineer", nl: "Network Engineer" },
        category: { en: "Engineering", nl: "Engineering" },
        type: { en: "Full-Time", nl: "Fulltime" },
        status: { en: "Active", nl: "Actief" },
        location: { en: "On-site", nl: "Op locatie" },
        description: {
          en: "We are looking for a Network Engineer to design, implement, and maintain our network infrastructure.",
          nl: "Wij zoeken een Network Engineer voor het ontwerpen, implementeren en onderhouden van onze netwerkinfrastructuur.",
        },
        responsibilities: [
          { en: "Configure and maintain network hardware", nl: "Configureren en onderhouden van netwerkhardware" },
          { en: "Monitor network performance and security", nl: "Monitoren van netwerkprestaties en -beveiliging" },
          { en: "Troubleshoot connectivity issues", nl: "Oplossen van connectiviteitsproblemen" },
        ],
        requirements: [
          { en: "Experience with routing, switching, and firewalls", nl: "Ervaring met routing, switching en firewalls" },
          { en: "Relevant certifications (CCNA/CCNP) preferred", nl: "Relevante certificeringen (CCNA/CCNP) zijn een pré" },
          { en: "Strong problem-solving skills", nl: "Sterke probleemoplossende vaardigheden" },
        ],
      },
      {
        slug: "ml-engineer",
        title: { en: "ML Engineer", nl: "ML Engineer" },
        category: { en: "Engineering", nl: "Engineering" },
        type: { en: "Full-Time, Contract", nl: "Fulltime, Contract" },
        status: { en: "Active", nl: "Actief" },
        location: { en: "On-site", nl: "Op locatie" },
        description: {
          en: "At IT Solutions Hub, we deliver innovative technology solutions by leveraging AI and Machine Learning to build intelligent systems that drive efficiency and data-driven insights. Join our team where your contributions directly impact clients' digital transformation journeys.",
          nl: "Bij IT Solutions Hub leveren we innovatieve technologische oplossingen door gebruik te maken van AI en Machine Learning om intelligente systemen te bouwen die efficiëntie en data-gedreven inzichten stimuleren. Word onderdeel van ons team waar jouw bijdrage direct impact heeft op de digitale transformatie van onze klanten.",
        },
        responsibilities: [
          { en: "Deploy machine learning workloads, preferably in AWS using SageMaker", nl: "Deployen van machine learning workloads, bij voorkeur in AWS met SageMaker" },
          { en: "Implement MLOps practices including monitoring, alerting, CI/CD pipelines, Docker containerization, and testing", nl: "Implementeren van MLOps-praktijken zoals monitoring, alerting, CI/CD-pipelines, Docker-containerisatie en testen" },
          { en: "Work closely with data engineering and software teams to ensure seamless deployment of ML models into production", nl: "Nauw samenwerken met data engineering- en softwareteams om naadloze deployment van ML-modellen naar productie te waarborgen" },
          { en: "Ensure code quality and maintain version control using GitHub, following collaborative best practices", nl: "Bewaken van codekwaliteit en versiebeheer via GitHub, volgens best practices voor samenwerking" },
          { en: "Leverage cloud-native services on AWS (S3, API Gateway, Lambda, ECS) or comparable platforms like MS Azure and Google Cloud", nl: "Gebruikmaken van cloud-native services op AWS (S3, API Gateway, Lambda, ECS) of vergelijkbare platforms zoals MS Azure en Google Cloud" },
          { en: "Collaborate with cross-functional teams to translate business requirements into actionable technical solutions", nl: "Samenwerken met cross-functionele teams om bedrijfsvereisten te vertalen naar uitvoerbare technische oplossingen" },
        ],
        requirements: [
          { en: "Advanced proficiency in Python and strong knowledge of SQL", nl: "Geavanceerde vaardigheid in Python en sterke kennis van SQL" },
          { en: "Hands-on experience deploying machine learning workloads in cloud environments, preferably AWS SageMaker", nl: "Praktijkervaring met het deployen van machine learning workloads in cloudomgevingen, bij voorkeur AWS SageMaker" },
          { en: "Practical experience implementing MLOps, including monitoring, alerting, CI/CD pipelines, Docker builds, and automated testing", nl: "Praktische ervaring met het implementeren van MLOps, waaronder monitoring, alerting, CI/CD-pipelines, Docker-builds en geautomatiseerd testen" },
          { en: "Proficiency with version control systems like GitHub, including collaborative coding workflows", nl: "Vaardigheid met versiebeheersystemen zoals GitHub, inclusief samenwerkingsworkflows" },
          { en: "Experience with AWS cloud-native services such as S3, API Gateway, Lambda, ECS or equivalent services on MS Azure or Google Cloud", nl: "Ervaring met AWS cloud-native services zoals S3, API Gateway, Lambda, ECS of gelijkwaardige services op MS Azure of Google Cloud" },
          { en: "Strong communication skills in English, both written and verbal", nl: "Sterke communicatieve vaardigheden in het Engels, zowel schriftelijk als mondeling" },
        ],
      },
      {
        slug: "data-engineer",
        title: { en: "Data Engineer", nl: "Data Engineer" },
        category: { en: "Engineering", nl: "Engineering" },
        type: { en: "Full-Time", nl: "Fulltime" },
        status: { en: "Active", nl: "Actief" },
        location: { en: "On-site", nl: "Op locatie" },
        description: {
          en: "As a Data Engineer, you will design and build data pipelines to support analytics and business intelligence.",
          nl: "Als Data Engineer ontwerp en bouw je datapijplijnen ter ondersteuning van analytics en business intelligence.",
        },
        responsibilities: [
          { en: "Build and maintain scalable data pipelines", nl: "Bouwen en onderhouden van schaalbare datapijplijnen" },
          { en: "Ensure data quality and reliability", nl: "Waarborgen van datakwaliteit en betrouwbaarheid" },
          { en: "Collaborate with analysts and data scientists", nl: "Samenwerken met analisten en data scientists" },
        ],
        requirements: [
          { en: "Experience with SQL and ETL tools", nl: "Ervaring met SQL en ETL-tools" },
          { en: "Knowledge of cloud data platforms", nl: "Kennis van cloud dataplatforms" },
          { en: "Strong programming skills (Python/Scala)", nl: "Sterke programmeervaardigheden (Python/Scala)" },
        ],
      },
      {
        slug: "hvac-service-technician-cooling-technology",
        title: { en: "HVAC Service Technician (Cooling Technology)", nl: "HVAC Service Technician (Koeltechniek)" },
        category: { en: "Engineering", nl: "Engineering" },
        type: { en: "Full-Time", nl: "Fulltime" },
        status: { en: "Active", nl: "Actief" },
        location: { en: "Spijkenisse, Netherlands", nl: "Spijkenisse, Nederland" },
        description: {
          en: "In this vital technical role, you will be responsible for the independent maintenance, repair, and optimization of mechanical HVAC installations within an industrial environment, acting as an on-site entrepreneur working closely with clients and maintenance engineers.",
          nl: "In deze essentiële technische rol ben je verantwoordelijk voor het zelfstandig onderhouden, repareren en optimaliseren van mechanische HVAC-installaties binnen een industriële omgeving, waarbij je als ondernemer op locatie nauw samenwerkt met klanten en onderhoudsmonteurs.",
        },
        responsibilities: [
          { en: "Maintenance & repair execution on mechanical HVAC installations", nl: "Uitvoeren van onderhoud & reparatie aan mechanische HVAC-installaties" },
          { en: "Operational coordination & procurement of materials", nl: "Operationele coördinatie & inkoop van materialen" },
          { en: "Client relations & stakeholder collaboration", nl: "Klantrelaties & samenwerking met stakeholders" },
        ],
        requirements: [
          { en: "Completed MBO Level 3 diploma as a Service Technician", nl: "Afgeronde mbo-3 opleiding als Service Monteur" },
          { en: "Minimum of 2 years of proven work experience in installation technology", nl: "Minimaal 2 jaar aantoonbare werkervaring in installatietechniek" },
          { en: "Possession of a valid Category B driver's license", nl: "In het bezit van een geldig rijbewijs B" },
          { en: "F-Gas certificate for handling fluorinated greenhouse gases in cooling installations is a plus", nl: "F-gassen certificaat voor het werken met gefluoreerde broeikasgassen in koelinstallaties is een pré" },
          { en: "VCA Basic / VOL safety certification is a plus", nl: "VCA Basis / VOL veiligheidscertificaat is een pré" },
          { en: "Prior hands-on experience with industrial cooling and climate system brands (e.g. Daikin, Carrier, Mitsubishi Electric, or Trane) is a plus", nl: "Praktijkervaring met industriële koel- en klimaatinstallaties van merken zoals Daikin, Carrier, Mitsubishi Electric of Trane is een pré" },
        ],
      },
      {
        slug: "hvac-service-technician",
        title: { en: "HVAC Service Technician", nl: "HVAC Service Technician" },
        category: { en: "Engineering", nl: "Engineering" },
        type: { en: "Full-Time", nl: "Fulltime" },
        status: { en: "Active", nl: "Actief" },
        location: { en: "Heinkenszand and Roosendaal, Netherlands", nl: "Heinkenszand en Roosendaal, Nederland" },
        description: {
          en: "In this vital technical role, you will maintain, optimize, and troubleshoot industrial HVAC and cooling installations, ensuring reliability, safety, and sustainability within the Food, Energy, and (semi) Industrial sectors across Zeeland, Noord-Brabant, the Belgian border region, and occasionally Zuid-Holland.",
          nl: "In deze essentiële technische rol onderhoud, optimaliseer en verhelp je storingen aan industriële HVAC- en koelinstallaties, en zorg je voor betrouwbaarheid, veiligheid en duurzaamheid binnen de sectoren Food, Energie en (semi-)industrie in Zeeland, Noord-Brabant, de Belgische grensregio en af en toe Zuid-Holland.",
        },
        responsibilities: [
          { en: "Maintenance, commissioning & optimization of HVAC and cooling installations", nl: "Onderhoud, inbedrijfstelling & optimalisatie van HVAC- en koelinstallaties" },
          { en: "Diagnostics & compliance with technical and safety standards", nl: "Diagnose & naleving van technische en veiligheidsnormen" },
          { en: "Client relations & technical advisory as primary on-site point of contact", nl: "Klantrelaties & technisch advies als primair aanspreekpunt op locatie" },
        ],
        requirements: [
          { en: "Completed MBO education in Cooling Technology, Installation Technology, or HVAC", nl: "Afgeronde mbo-opleiding in Koeltechniek, Installatietechniek of HVAC" },
          { en: "Possession of a valid F-gas Category 1 certificate (required)", nl: "In het bezit van een geldig F-gassen categorie 1 certificaat (verplicht)" },
          { en: "Proven experience in the service and maintenance of technical installations, preferably within an industrial environment", nl: "Aantoonbare ervaring in service en onderhoud van technische installaties, bij voorkeur binnen een industriële omgeving" },
          { en: "Possession of a valid Category B driver's license", nl: "In het bezit van een geldig rijbewijs B" },
          { en: "F-gas A1 and/or B1 certification is a plus", nl: "F-gassen A1 en/of B1 certificaat is een pré" },
          { en: "Knowledge of electrical engineering or measurement and control technology is a plus", nl: "Kennis van elektrotechniek of meet- en regeltechniek is een pré" },
        ],
      },
      {
        slug: "heat-tracing-technician",
        title: { en: "Heat Tracing Technician", nl: "Heat Tracing Technician" },
        category: { en: "Engineering", nl: "Engineering" },
        type: { en: "Full-Time", nl: "Fulltime" },
        status: { en: "Active", nl: "Actief" },
        location: { en: "Spijkenisse, Netherlands", nl: "Spijkenisse, Nederland" },
        description: {
          en: "As part of an expert team, you will be responsible for the installation, maintenance, and optimization of electrical heating (Heat Tracing) systems that keep piping networks, tanks, fittings, and industrial surfaces at required temperatures to secure complex industrial processes.",
          nl: "Als onderdeel van een expertteam ben je verantwoordelijk voor de installatie, het onderhoud en de optimalisatie van elektrische verwarmingssystemen (Heat Tracing) die leidingnetwerken, tanks, fittingen en industriële oppervlakken op de vereiste temperatuur houden om complexe industriële processen te waarborgen.",
        },
        responsibilities: [
          { en: "Installation, commissioning & maintenance of Heat Tracing systems", nl: "Installatie, inbedrijfstelling & onderhoud van Heat Tracing-systemen" },
          { en: "Diagnostics & operational execution on electrical heating systems", nl: "Diagnose & operationele uitvoering aan elektrische verwarmingssystemen" },
          { en: "Team collaboration & process improvement", nl: "Teamsamenwerking & procesverbetering" },
        ],
        requirements: [
          { en: "Completed MBO Electrical Engineering education (Level 2 or Level 3)", nl: "Afgeronde mbo-opleiding Elektrotechniek (niveau 2 of niveau 3)" },
          { en: "Several years of proven work experience within an industrial environment", nl: "Meerdere jaren aantoonbare werkervaring binnen een industriële omgeving" },
          { en: "Previous experience in Heat Tracing is highly preferred; comprehensive on-the-job training provided for candidates with a strong electrical background", nl: "Eerdere ervaring met Heat Tracing heeft sterk de voorkeur; uitgebreide on-the-job training beschikbaar voor kandidaten met een sterke elektrotechnische achtergrond" },
          { en: "Possession of a valid driver's license", nl: "In het bezit van een geldig rijbewijs" },
          { en: "Entrepreneurial mindset with true ownership of the craft", nl: "Ondernemende mindset met echt eigenaarschap over het vak" },
          { en: "Highly capable of working autonomously on-site while remaining connected to a close-knit specialist team", nl: "Zeer goed in staat om zelfstandig op locatie te werken en tegelijk verbonden te blijven met een hecht specialistisch team" },
        ],
      },
    ],
  },
  {
    category: { en: "IT", nl: "IT" },
    jobs: [
      {
        slug: "it-support-officer-1st-2nd-line-support",
        title: { en: "IT Support Officer (1st & 2nd line support)", nl: "IT Support Officer (1e & 2e lijns support)" },
        category: { en: "IT", nl: "IT" },
        type: { en: "Full-Time", nl: "Fulltime" },
        status: { en: "Active", nl: "Actief" },
        location: { en: "Hoogeveen / Capelle aan den IJssel Area, Netherlands", nl: "Regio Hoogeveen / Capelle aan den IJssel, Nederland" },
        description: {
          en: "We deliver high-performance managed IT services, cloud infrastructure, workforce integration, and digital transformation solutions to global enterprises and client networks across the Netherlands and Europe, maintaining secure and uninterrupted IT infrastructure.",
          nl: "Wij leveren hoogwaardige managed IT-diensten, cloudinfrastructuur, workforce-integratie en digitale transformatieoplossingen aan wereldwijde ondernemingen en klantnetwerken in Nederland en Europa, met behoud van een veilige en ononderbroken IT-infrastructuur.",
        },
        responsibilities: [
          { en: "End-user support & incident management", nl: "Eindgebruikersondersteuning & incidentmanagement" },
          { en: "System, identity, and cloud administration", nl: "Systeem-, identiteits- en cloudbeheer" },
          { en: "Operational, infrastructure & on-site support", nl: "Operationele, infrastructuur- & on-site ondersteuning" },
          { en: "Security, onboarding, and documentation", nl: "Beveiliging, onboarding en documentatie" },
        ],
        requirements: [
          { en: "MBO Level 4+ in ICT or related field", nl: "MBO niveau 4+ in ICT of gerelateerd vakgebied" },
          { en: "1–3+ years IT Support/Helpdesk experience", nl: "1–3+ jaar ervaring in IT Support/Helpdesk" },
          { en: "Experience with Windows 10/11 and macOS", nl: "Ervaring met Windows 10/11 en macOS" },
          { en: "Microsoft 365 and Entra ID / Azure AD experience", nl: "Ervaring met Microsoft 365 en Entra ID / Azure AD" },
          { en: "Microsoft Intune experience", nl: "Ervaring met Microsoft Intune" },
          { en: "Basic networking knowledge: TCP/IP, DNS, DHCP, Wi-Fi", nl: "Basiskennis netwerken: TCP/IP, DNS, DHCP, Wi-Fi" },
          { en: "Experience with IT ticketing systems", nl: "Ervaring met IT-ticketingsystemen" },
          { en: "Familiarity with Azure / AWS / Exchange Online", nl: "Bekendheid met Azure / AWS / Exchange Online" },
          { en: "Hardware and printer troubleshooting skills", nl: "Vaardigheden in troubleshooten van hardware en printers" },
          { en: "Knowledge of MFA and endpoint security", nl: "Kennis van MFA en endpointbeveiliging" },
          { en: "Fluent in Dutch and English", nl: "Vloeiend in Nederlands en Engels" },
          { en: "ITIL/WMS/ERP experience preferred", nl: "ITIL/WMS/ERP-ervaring is een pré" },
        ],
      },
      {
        slug: "power-bi-developer",
        title: { en: "Power BI Developer", nl: "Power BI Developer" },
        category: { en: "IT", nl: "IT" },
        type: { en: "Full-Time", nl: "Fulltime" },
        status: { en: "Active", nl: "Actief" },
        location: { en: "Rotterdam, Netherlands", nl: "Rotterdam, Nederland" },
        description: {
          en: "We are seeking a detail-oriented and motivated Power BI Developer to join our global team, delivering reliable outcomes within the Data function through structured processes, clear stakeholder communication, and a strong focus on quality.",
          nl: "Wij zoeken een nauwkeurige en gemotiveerde Power BI Developer om ons wereldwijde team te versterken, met betrouwbare resultaten binnen de Data-functie door gestructureerde processen, duidelijke communicatie met stakeholders en een sterke focus op kwaliteit.",
        },
        responsibilities: [
          { en: "Core delivery using Power BI Desktop", nl: "Kernuitvoering met Power BI Desktop" },
          { en: "Process improvement through Power BI Service", nl: "Procesverbetering via Power BI Service" },
          { en: "Documentation & reporting with DAX", nl: "Documentatie & rapportage met DAX" },
          { en: "Stakeholder management using Power Query", nl: "Stakeholdermanagement met Power Query" },
          { en: "Team collaboration on SQL-based data models", nl: "Teamsamenwerking aan SQL-gebaseerde datamodellen" },
          { en: "Operational excellence with SQL Server", nl: "Operationele excellentie met SQL Server" },
        ],
        requirements: [
          { en: "Bachelor's degree or equivalent professional experience related to Power BI Development", nl: "Bachelordiploma of gelijkwaardige professionele ervaring gerelateerd aan Power BI Development" },
          { en: "3+ years of relevant hands-on experience in a comparable role", nl: "3+ jaar relevante praktijkervaring in een vergelijkbare functie" },
          { en: "Strong SQL skills and understanding of data modeling", nl: "Sterke SQL-vaardigheden en kennis van datamodellering" },
          { en: "Demonstrable ability to deliver strong results within the Data function", nl: "Aantoonbaar vermogen om sterke resultaten te leveren binnen de Data-functie" },
        ],
      },
      {
        slug: "it-specialist",
        title: { en: "IT Specialist", nl: "IT Specialist" },
        category: { en: "IT", nl: "IT" },
        type: { en: "Full-Time, Contract", nl: "Fulltime, Contract" },
        status: { en: "Active", nl: "Actief" },
        location: { en: "On-site", nl: "Op locatie" },
        description: {
          en: "We are looking for an experienced IT Administrator to manage and maintain our IT infrastructure, ensuring smooth operations across networking, servers, security, and technical support.",
          nl: "Wij zoeken een ervaren IT Administrator om onze IT-infrastructuur te beheren en te onderhouden, met soepele werking op het gebied van netwerken, servers, beveiliging en technische ondersteuning.",
        },
        responsibilities: [
          { en: "Server management & administration", nl: "Serverbeheer & administratie" },
          { en: "Network setup & security", nl: "Netwerkinrichting & beveiliging" },
          { en: "Web hosting & management", nl: "Webhosting & beheer" },
          { en: "Email administration (Microsoft Exchange Online)", nl: "E-mailbeheer (Microsoft Exchange Online)" },
          { en: "Local file sharing & backup solutions", nl: "Lokale bestandsdeling & back-upoplossingen" },
          { en: "Employee monitoring & IT policies", nl: "Medewerkersmonitoring & IT-beleid" },
          { en: "IT procurement & asset management", nl: "IT-inkoop & assetbeheer" },
          { en: "IT automation & AI/cloud setup (bonus skills)", nl: "IT-automatisering & AI/cloud-inrichting (extra pluspunt)" },
        ],
        requirements: [
          { en: "2-3 years of experience in IT administration, networking, and system management", nl: "2-3 jaar ervaring in IT-beheer, netwerken en systeembeheer" },
          { en: "Hands-on experience with Windows Server 2022, Active Directory, Microsoft Exchange Online, and file-sharing systems", nl: "Praktijkervaring met Windows Server 2022, Active Directory, Microsoft Exchange Online en bestandsdelingssystemen" },
          { en: "Strong knowledge of networking protocols, firewalls, and security best practices", nl: "Sterke kennis van netwerkprotocollen, firewalls en best practices voor beveiliging" },
          { en: "Proficiency in Apache Web Server and hosting React.js applications", nl: "Vaardigheid in Apache Web Server en het hosten van React.js-applicaties" },
          { en: "Experience with email security and spam filtering mechanisms (SPF, DKIM, DMARC)", nl: "Ervaring met e-mailbeveiliging en spamfiltering (SPF, DKIM, DMARC)" },
          { en: "Familiarity with monitoring solutions for activity monitoring and restriction", nl: "Bekendheid met monitoringoplossingen voor activiteitenbewaking en -beperking" },
          { en: "Ability to set up and maintain SMB/local file-sharing solutions", nl: "Vermogen om SMB/lokale bestandsdelingsoplossingen op te zetten en te onderhouden" },
          { en: "Strong troubleshooting skills for hardware, software, and network issues", nl: "Sterke troubleshootingvaardigheden voor hardware-, software- en netwerkproblemen" },
        ],
      },
      {
        slug: "oracle-erp-consultant-specialist",
        title: { en: "Oracle ERP Consultant/Specialist", nl: "Oracle ERP Consultant/Specialist" },
        category: { en: "IT", nl: "IT" },
        type: { en: "Full-Time, Contract", nl: "Fulltime, Contract" },
        status: { en: "Active", nl: "Actief" },
        location: { en: "On-site", nl: "Op locatie" },
        description: {
          en: "At IT Solutions Hub, we pride ourselves on being a trusted partner for businesses seeking strategic guidance and innovative solutions, delivering tailored Oracle SCM strategies that drive operational excellence and sustainable growth.",
          nl: "Bij IT Solutions Hub zijn we trots op ons vermogen om een vertrouwde partner te zijn voor bedrijven die strategische begeleiding en innovatieve oplossingen zoeken, met op maat gemaakte Oracle SCM-strategieën die operationele excellentie en duurzame groei stimuleren.",
        },
        responsibilities: [
          { en: "Liaising with customers and colleagues for consultation, requirements gathering, design, implementation, and ongoing support of Oracle SCM solutions", nl: "Contact onderhouden met klanten en collega's voor consultatie, requirements gathering, ontwerp, implementatie en doorlopende ondersteuning van Oracle SCM-oplossingen" },
          { en: "Assisting customers with analyzing, designing, testing, and deploying Oracle SCM enhancements, reports, and application updates", nl: "Klanten ondersteunen bij het analyseren, ontwerpen, testen en uitrollen van Oracle SCM-verbeteringen, rapporten en applicatie-updates" },
          { en: "Requirements elicitation, specification & fit-gap analysis", nl: "Requirements ophalen, specificeren & fit-gap analyse" },
          { en: "Business process modelling and specification", nl: "Bedrijfsprocesmodellering en -specificatie" },
          { en: "Functional design specification for customizations and enhancements, including interfaces and reports", nl: "Functioneel ontwerp voor aanpassingen en verbeteringen, inclusief interfaces en rapporten" },
          { en: "Data conversion design, security design and build", nl: "Ontwerp van dataconversie, beveiligingsontwerp en bouw" },
          { en: "Test planning, preparation, execution, and defect management, including issue and risk management", nl: "Testplanning, voorbereiding, uitvoering en defectmanagement, inclusief issue- en risicomanagement" },
          { en: "Quality management: reviewing key deliverables and ensuring adherence to scope, standards, and procedures", nl: "Kwaliteitsmanagement: beoordelen van belangrijke opleverproducten en zorgen voor naleving van scope, normen en procedures" },
        ],
        requirements: [
          { en: "Excellent critical thinking, interpersonal, communication, and problem-solving skills", nl: "Uitstekend kritisch denkvermogen, interpersoonlijke, communicatieve en probleemoplossende vaardigheden" },
          { en: "Good understanding of gap analysis, ERP, and test scripts", nl: "Goed begrip van gap-analyse, ERP en testscripts" },
          { en: "Understanding of business requirements and business processes, with willingness to learn and grow", nl: "Begrip van bedrijfsvereisten en bedrijfsprocessen, met bereidheid om te leren en te groeien" },
          { en: "Strong experience in MS Excel", nl: "Sterke ervaring met MS Excel" },
          { en: "Ability to multitask with excellent communication skills in a fast-paced environment", nl: "Vermogen om te multitasken met uitstekende communicatieve vaardigheden in een snel tempo" },
          { en: "Ability to work independently", nl: "Vermogen om zelfstandig te werken" },
        ],
      },
      {
        slug: "it-manager",
        title: { en: "IT Manager", nl: "IT Manager" },
        category: { en: "IT", nl: "IT" },
        type: { en: "Full-Time, Contract", nl: "Fulltime, Contract" },
        status: { en: "Active", nl: "Actief" },
        location: { en: "On-site", nl: "Op locatie" },
        description: {
          en: "We are seeking a dynamic and solutions-driven IT Manager to lead the technology infrastructure and operations of a fast-paced omnichannel business, ensuring secure, scalable, and business-aligned IT systems.",
          nl: "Wij zoeken een dynamische en oplossingsgerichte IT Manager om de technologie-infrastructuur en -operaties te leiden van een snel groeiend omnichannel bedrijf, met veilige, schaalbare en bedrijfsgerichte IT-systemen.",
        },
        responsibilities: [
          { en: "Oversee all IT systems, including ERP, WMS, CRM, POS, and cloud services", nl: "Toezicht houden op alle IT-systemen, waaronder ERP, WMS, CRM, POS en cloudservices" },
          { en: "Ensure network stability, data security, and seamless system performance across locations", nl: "Zorgen voor netwerkstabiliteit, gegevensbeveiliging en naadloze systeemprestaties op alle locaties" },
          { en: "Lead system monitoring, troubleshooting, and disaster recovery protocols", nl: "Leiden van systeemmonitoring, troubleshooting en disaster recovery protocollen" },
        ],
        requirements: [
          { en: "Minimum 5 years in IT management, preferably in logistics, e-commerce, or retail sectors", nl: "Minimaal 5 jaar ervaring in IT-management, bij voorkeur in logistiek, e-commerce of retail" },
          { en: "Hands-on experience with ERP and WMS systems; Oracle, SAP, or NetSuite preferred", nl: "Praktijkervaring met ERP- en WMS-systemen; Oracle, SAP of NetSuite heeft de voorkeur" },
          { en: "Background in managing cloud infrastructure, security, and vendor networks", nl: "Achtergrond in het beheren van cloudinfrastructuur, beveiliging en leveranciersnetwerken" },
          { en: "Strong analytical and troubleshooting skills", nl: "Sterke analytische en troubleshootingvaardigheden" },
          { en: "Proven leadership in IT project delivery", nl: "Bewezen leiderschap in het opleveren van IT-projecten" },
          { en: "Confident in cross-functional communication and stakeholder engagement", nl: "Zelfverzekerd in cross-functionele communicatie en stakeholderbetrokkenheid" },
        ],
      },
      {
        slug: "ai-developer",
        title: { en: "AI Developer", nl: "AI Developer" },
        category: { en: "IT", nl: "IT" },
        type: { en: "Full-Time", nl: "Fulltime" },
        status: { en: "Active", nl: "Actief" },
        location: { en: "On-site", nl: "Op locatie" },
        description: {
          en: "As an AI Developer, you will design, build, and integrate AI-powered features and solutions into our products.",
          nl: "Als AI Developer ontwerp, bouw en integreer je AI-gedreven functies en oplossingen in onze producten.",
        },
        responsibilities: [
          { en: "Develop and integrate AI/LLM-based features", nl: "Ontwikkelen en integreren van AI/LLM-gebaseerde functies" },
          { en: "Prototype and test AI models", nl: "Prototyperen en testen van AI-modellen" },
          { en: "Collaborate with product and engineering teams", nl: "Samenwerken met product- en engineeringteams" },
        ],
        requirements: [
          { en: "Experience with AI/ML frameworks", nl: "Ervaring met AI/ML-frameworks" },
          { en: "Strong programming skills (Python/JS)", nl: "Sterke programmeervaardigheden (Python/JS)" },
          { en: "Familiarity with LLM APIs is a plus", nl: "Bekendheid met LLM-API's is een pré" },
        ],
      },
      {
        slug: "ai-development-intern",
        title: { en: "AI Development Intern", nl: "AI Development Stagiair" },
        category: { en: "IT", nl: "IT" },
        type: { en: "Internship", nl: "Stage" },
        status: { en: "Active", nl: "Actief" },
        location: { en: "Hoogvliet Rotterdam, Netherlands", nl: "Hoogvliet Rotterdam, Nederland" },
        description: {
          en: "Join our team to assist in the design, development, and implementation of AI and Machine Learning models, contributing to AI-powered applications and exploring innovative LLM use cases for business process automation.",
          nl: "Word onderdeel van ons team om te assisteren bij het ontwerpen, ontwikkelen en implementeren van AI- en Machine Learning-modellen, bij te dragen aan AI-gedreven applicaties en innovatieve LLM use cases voor procesautomatisering te verkennen.",
        },
        responsibilities: [
          { en: "Assist in the design, development, and implementation of AI and Machine Learning models", nl: "Assisteren bij het ontwerpen, ontwikkelen en implementeren van AI- en Machine Learning-modellen" },
          { en: "Contribute to the creation and optimization of AI-powered applications and intelligent solutions", nl: "Bijdragen aan het creëren en optimaliseren van AI-gedreven applicaties en intelligente oplossingen" },
          { en: "Work with Large Language Models (LLMs) to explore and implement business process automation use cases", nl: "Werken met Large Language Models (LLM's) om use cases voor procesautomatisering te verkennen en implementeren" },
          { en: "Actively participate in the full lifecycle of AI projects, from conceptualization to deployment and optimization", nl: "Actief deelnemen aan de volledige levenscyclus van AI-projecten, van conceptualisatie tot deployment en optimalisatie" },
          { en: "Conduct research on emerging AI technologies and methodologies to inform project strategies", nl: "Onderzoek doen naar opkomende AI-technologieën en methodologieën om projectstrategieën te informeren" },
        ],
        requirements: [
          { en: "Strong interest in Artificial Intelligence, Machine Learning, and software development, demonstrated through academic projects or personal initiatives", nl: "Sterke interesse in Artificial Intelligence, Machine Learning en softwareontwikkeling, aangetoond via academische projecten of persoonlijke initiatieven" },
          { en: "Currently pursuing a Bachelor's or Master's degree in Computer Science, AI, Machine Learning, Data Science, or a related technical field", nl: "Momenteel bezig met een Bachelor- of Masteropleiding in Computer Science, AI, Machine Learning, Data Science of een gerelateerd technisch vakgebied" },
          { en: "Familiarity with Python and understanding of machine learning concepts and frameworks (e.g. TensorFlow, PyTorch)", nl: "Bekendheid met Python en begrip van machine learning concepten en frameworks (bijv. TensorFlow, PyTorch)" },
          { en: "Basic knowledge of data structures and algorithms; exposure to LLMs is a plus", nl: "Basiskennis van datastructuren en algoritmen; ervaring met LLM's is een pré" },
          { en: "Excellent problem-solving abilities, eagerness to learn, strong analytical thinking, and effective communication skills", nl: "Uitstekende probleemoplossende vaardigheden, leergierigheid, sterk analytisch denkvermogen en effectieve communicatieve vaardigheden" },
        ],
      },
      {
        slug: "web-developer-full-stack-developer",
        title: { en: "Web Developer / Full Stack Developer", nl: "Web Developer / Full Stack Developer" },
        category: { en: "IT", nl: "IT" },
        type: { en: "Full-Time", nl: "Fulltime" },
        status: { en: "Active", nl: "Actief" },
        location: { en: "On-site", nl: "Op locatie" },
        description: {
          en: "We are looking for a Web Developer / Full Stack Developer to build and maintain modern, scalable web applications.",
          nl: "Wij zoeken een Web Developer / Full Stack Developer voor het bouwen en onderhouden van moderne, schaalbare webapplicaties.",
        },
        responsibilities: [
          { en: "Develop front-end and back-end features", nl: "Ontwikkelen van front-end en back-end functionaliteiten" },
          { en: "Write clean, maintainable, well-tested code", nl: "Schrijven van schone, onderhoudbare en goed geteste code" },
          { en: "Collaborate with designers and product owners", nl: "Samenwerken met designers en product owners" },
        ],
        requirements: [
          { en: "Experience with React/Next.js and Node.js", nl: "Ervaring met React/Next.js en Node.js" },
          { en: "Strong understanding of REST/GraphQL APIs", nl: "Sterk begrip van REST/GraphQL API's" },
          { en: "Familiarity with databases (SQL/NoSQL)", nl: "Bekendheid met databases (SQL/NoSQL)" },
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

export function localizeJob(job: Job, locale: "en" | "nl") {
  return {
    slug: job.slug,
    title: job.title[locale],
    category: job.category[locale],
    type: job.type[locale],
    status: job.status[locale],
    location: job.location[locale],
    description: job.description[locale],
    responsibilities: job.responsibilities.map((r) => r[locale]),
    requirements: job.requirements.map((r) => r[locale]),
  };
}

export function localizeJobCategories(locale: "en" | "nl") {
  return jobCategories.map((group) => ({
    category: group.category[locale],
    jobs: group.jobs.map((job) => localizeJob(job, locale)),
  }));
}