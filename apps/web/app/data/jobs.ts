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
          en: "Location: On-site. Work Type: Full Time. Staff Outsourcing is a Netherlands-based technology and business services provider that helps organizations improve their operations through smart IT solutions, supply chain management, staffing solutions and digital services. We combine technology, sector expertise and practical solutions to help companies work more efficiently, streamline processes and grow sustainably. Do you make sure everything is in the right place at the right time? Are you a planner who gets energy from a dynamic logistics environment where no day is the same? Would you like to work for an international organization involved in leading offshore projects worldwide? Then this position is for you. As a Warehouse Planner, you are the link between the warehouse, logistics, transport and our maritime operations. You ensure that materials, equipment and transports are smoothly planned and executed. Thanks to your forward-looking vision, the operation keeps running and everyone knows exactly what needs to happen when. You work from our modern logistics center in the Rotterdam region and have daily contact with various internal and external stakeholders. At Staff Outsourcing you get the opportunity to work for one of our clients on complex international projects within an innovative and technically challenging environment. You will join a team of committed colleagues where collaboration, development and entrepreneurship are central. In addition, we offer: An excellent salary with an attractive bonus scheme; A very good pension; 30 vacation days per year; Flexible working hours and attention for a good work-life balance; Plenty of training and growth opportunities; Company fitness scheme; Regular sports and social activities with colleagues; Working on unique offshore projects that make an impact worldwide.",
          nl: "Locatie: Op locatie. Werktype: Fulltime. Staff Outsourcing is een in Nederland gevestigd technologie- en zakelijke dienstverlener die organisaties helpt hun bedrijfsvoering te verbeteren door middel van slimme IT-oplossingen, supply chain management, personeelsoplossingen en digitale diensten. We combineren technologie, sectorexpertise en praktische oplossingen om bedrijven te helpen efficiÃ«nter te werken, processen te stroomlijnen en duurzaam te groeien. Zorg jij ervoor dat alles op het juiste moment op de juiste plek is? Ben jij een planner die energie krijgt van een dynamische logistieke omgeving waar geen dag hetzelfde is? Wil je werken bij een internationale organisatie die betrokken is bij toonaangevende offshore projecten wereldwijd? Dan is deze functie iets voor jou. Als Warehouse Planner ben jij de spil tussen het magazijn, logistiek, transport en onze maritieme operaties. Jij zorgt ervoor dat materialen, equipment en transporten soepel worden gepland en uitgevoerd. Dankzij jouw vooruitziende blik blijft de operatie draaien en weet iedereen precies wat er wanneer moet gebeuren. Je werkt vanuit ons moderne logistieke centrum in de regio Rotterdam en hebt dagelijks contact met diverse interne en externe stakeholders. Bij Staff Outsourcing krijg je de kans om voor een van onze klanten te werken aan complexe internationale projecten binnen een innovatieve en technisch uitdagende omgeving. Je komt terecht in een team van betrokken collega's waar samenwerking, ontwikkeling en ondernemerschap centraal staan. Daarnaast bieden wij: Een uitstekend salaris met aantrekkelijke bonusregeling; Een zeer goed pensioen; 30 vakantiedagen per jaar; Flexibele werktijden en aandacht voor een goede werk-privÃ©balans; Volop opleidings- en doorgroeimogelijkheden; Bedrijfsfitnessregeling; Regelmatig sportieve en sociale activiteiten met collega's; Werken aan unieke offshore projecten die wereldwijd impact maken.",
        },
        responsibilities: [
          {
            en: "In this versatile role you are responsible for the daily planning of the warehouse and you support logistics processes for our international projects and vessels. You keep an overview, set priorities and ensure that all parties involved collaborate optimally.",
            nl: "In deze veelzijdige functie ben je verantwoordelijk voor de dagelijkse planning van het warehouse en ondersteun je logistieke processen voor onze internationale projecten en schepen. Je houdt overzicht, stelt prioriteiten en zorgt ervoor dat alle betrokken partijen optimaal samenwerken.",
          },
          {
            en: "Your activities include, among other things:",
            nl: "Jouw werkzaamheden bestaan onder andere uit:",
          },
          {
            en: "Drafting, managing and optimizing the daily warehouse planning",
            nl: "Opstellen, beheren en optimaliseren van de dagelijkse warehouseplanning",
          },
          {
            en: "Coordinating mobilizations and demobilizations to and from our vessels worldwide",
            nl: "CoÃ¶rdineren van mobilisaties en demobilisaties van en naar onze schepen wereldwijd",
          },
          {
            en: "Processing and following up work orders and logistics requests from the organization",
            nl: "Verwerken en opvolgen van werkorders en logistieke aanvragen vanuit de organisatie",
          },
          {
            en: "Coordinating with warehouse teams, foremen, logistics and supply chain to keep the planning up to date",
            nl: "Afstemmen met magazijnteams, voormannen, logistiek en supply chain om de planning actueel te houden",
          },
          {
            en: "Organizing and planning transports to various international destinations",
            nl: "Organiseren en plannen van transporten naar uiteenlopende internationale bestemmingen",
          },
          {
            en: "Submitting and following up customs and clearance requests",
            nl: "Indienen en opvolgen van douane- en inklaringsverzoeken",
          },
          {
            en: "Monitoring the correct processing of customs matters and dangerous goods",
            nl: "Bewaken van de correcte verwerking van douanezaken en gevaarlijke goederen",
          },
          {
            en: "Ensuring compliance with laws and regulations and communication with authorities such as Customs and OMWB",
            nl: "Zorgen voor naleving van wet- en regelgeving en communicatie met instanties zoals de Douane en OMWB",
          },
        ],
        requirements: [
          {
            en: "You are an organizer pur sang who easily switches between different activities and stakeholders. You keep an overview, work accurately and always think one step ahead. In addition, you have:",
            nl: "Je bent een organisator pur sang die gemakkelijk schakelt tussen verschillende werkzaamheden en stakeholders. Je behoudt het overzicht, werkt nauwkeurig en denkt altijd een stap vooruit. Daarnaast heb je:",
          },
          {
            en: "At least an MBO-4 diploma, preferably in logistics, supply chain or transport",
            nl: "Minimaal een mbo-4 diploma, bij voorkeur in logistiek, supply chain of transport",
          },
          {
            en: "At least 3 years of experience in logistics planning, warehousing or maritime logistics",
            nl: "Minimaal 3 jaar ervaring in logistieke planning, warehousing of maritieme logistiek",
          },
          {
            en: "Good knowledge of logistics processes and transport coordination",
            nl: "Goede kennis van logistieke processen en transportcoÃ¶rdinatie",
          },
          {
            en: "Nice to Have: Good command of both Dutch and English",
            nl: "Nice to Have: Goede beheersing van de Nederlandse Ã©n Engelse taal",
          },
          {
            en: "Nice to Have: A proactive attitude and strong communication skills",
            nl: "Nice to Have: Een proactieve houding en sterke communicatieve vaardigheden",
          },
        ],
      },
      {
        slug: "logistiek-administratief-medewerker",
        title: {
          en: "Logistics Administrative Employee",
          nl: "Logistiek Administratief Medewerker",
        },
        category: { en: "Supply Chain", nl: "Supply Chain" },
        type: { en: "Full-Time", nl: "Fulltime" },
        status: { en: "Active", nl: "Actief" },
        location: { en: "On-site", nl: "Op locatie" },
        description: {
          en: "Location: On-site. Work Type: Full Time. Staff Outsourcing is a Netherlands-based technology and business services provider that helps organizations improve their operations through smart IT solutions, supply chain management, staffing solutions and digital services. We combine technology, sector expertise and practical solutions to help companies work more efficiently, streamline processes and grow sustainably. Do you get energy from structure, data and logistics processes? Are you accurate, analytical and do you immediately see when information is incorrect? Would you like to work in an international logistics environment where your work directly contributes to the success of large offshore projects worldwide? Then this is your chance. As a Warehouse Support Employee, you ensure that our article and material data are complete, correct and up to date. This means you play an important role in the efficient functioning of our warehouse. Thanks to your eye for detail, materials can be found, processed and deployed faster within our international operations. You will join a driven team in which collaboration, quality and continuous improvement are central. In this versatile role you support the warehouse by ensuring that all information regarding materials and inventory management is correct. You combine administrative accuracy with a practical view of logistics processes. At Staff Outsourcing you work for one of our clients on logistics processes behind some of the most impressive offshore projects in the world. You get plenty of room to develop yourself and gain experience within an international organization with short lines and a no-nonsense culture. In addition, we offer: An excellent salary and a strong pension scheme; Performance-based salary increases and bonuses; 30 vacation days per year; Flexible working hours for a good work-life balance; Extensive training and development opportunities; Coaching, training and study budgets; Working in an international and innovative environment; Regular company outings, sports activities and staff events.",
          nl: "Locatie: Op locatie. Werktype: Fulltime. Staff Outsourcing is een in Nederland gevestigd technologie- en zakelijke dienstverlener die organisaties helpt hun bedrijfsvoering te verbeteren door middel van slimme IT-oplossingen, supply chain management, personeelsoplossingen en digitale diensten. We combineren technologie, sectorexpertise en praktische oplossingen om bedrijven te helpen efficiÃ«nter te werken, processen te stroomlijnen en duurzaam te groeien. Krijg jij energie van structuur, data en logistieke processen? Ben jij nauwkeurig, analytisch en zie je het direct als informatie niet klopt? Wil je werken in een internationale logistieke omgeving waar jouw werk direct bijdraagt aan het succes van grote offshore projecten wereldwijd? Dan is dit jouw kans. Als Warehouse Support Medewerker zorg jij ervoor dat onze artikel- en materiaalgegevens volledig, correct en actueel zijn. Daarmee speel je een belangrijke rol in het efficiÃ«nt functioneren van ons warehouse. Dankzij jouw oog voor detail kunnen materialen sneller worden gevonden, verwerkt en ingezet binnen onze internationale operaties. Je komt terecht in een gedreven team waarin samenwerking, kwaliteit en continue verbetering centraal staan. In deze veelzijdige rol ondersteun je het warehouse door ervoor te zorgen dat alle informatie rondom materialen en voorraadbeheer klopt. Je combineert administratieve nauwkeurigheid met een praktische blik op logistieke processen. Bij Staff Outsourcing werk je voor een van onze klanten aan logistieke processen achter enkele van de meest indrukwekkende offshore projecten ter wereld. Je krijgt veel ruimte om jezelf te ontwikkelen en ervaring op te doen binnen een internationale organisatie met korte lijnen en een no-nonsense cultuur. Daarnaast bieden wij: Een uitstekend salaris en een sterke pensioenregeling; Prestatiegerichte salarisverhogingen en bonussen; 30 vakantiedagen per jaar; Flexibele werktijden voor een goede werk-privÃ©balans; Uitgebreide opleidings- en ontwikkelmogelijkheden; Coaching, trainingen en studiebudgetten; Werken in een internationale en innovatieve omgeving; Regelmatig bedrijfsuitjes, sportieve activiteiten en personeelsevenementen.",
        },
        responsibilities: [
          {
            en: "Checking and validating article and material data",
            nl: "Controleren en valideren van artikel- en materiaalgegevens",
          },
          {
            en: "Physically verifying materials and comparing them with the data in SAP",
            nl: "Fysiek verifiÃ«ren van materialen en deze vergelijken met de gegevens in SAP",
          },
          {
            en: "Supplementing, correcting and optimizing article master data",
            nl: "Aanvullen, corrigeren en optimaliseren van artikelstamgegevens",
          },
          {
            en: "Safeguarding the quality and reliability of logistics data",
            nl: "Bewaken van de kwaliteit en betrouwbaarheid van logistieke data",
          },
          {
            en: "Identifying discrepancies and actively contributing to solutions",
            nl: "Signaleren van afwijkingen en actief bijdragen aan oplossingen",
          },
          {
            en: "Supporting inventory management and logistics administration",
            nl: "Ondersteunen bij voorraadbeheer en logistieke administratie",
          },
          {
            en: "Contributing ideas for process and workflow improvements within the warehouse",
            nl: "Meedenken over verbeteringen van processen en werkwijzen binnen het warehouse",
          },
          {
            en: "Collaborating with colleagues from logistics, warehouse and supply chain to further improve data quality",
            nl: "Samenwerken met collega's van logistiek, magazijn en supply chain om de kwaliteit van data verder te verbeteren",
          },
        ],
        requirements: [
          {
            en: "At least an MBO-4 diploma, preferably in logistics, supply chain or administration",
            nl: "Minimaal een mbo-4 diploma, bij voorkeur richting logistiek, supply chain of administratie",
          },
          {
            en: "Maximum 2 years of relevant work experience in logistics, supply chain or the maritime sector",
            nl: "Maximaal 2 jaar relevante werkervaring binnen logistiek, supply chain of de maritieme sector",
          },
          {
            en: "A precise and proactive work attitude",
            nl: "Een nauwkeurige en proactieve werkhouding",
          },
          {
            en: "Good knowledge of Microsoft Office, especially Excel",
            nl: "Goede kennis van Microsoft Office, met name Excel",
          },
          {
            en: "Nice to Have: Affinity with systems such as SAP EWM is a plus",
            nl: "Nice to Have: Affiniteit met systemen zoals SAP EWM is een prÃ©",
          },
          {
            en: "Nice to Have: Good command of both Dutch and English",
            nl: "Nice to Have: Goede beheersing van zowel de Nederlandse als Engelse taal",
          },
        ],
      },
      {
        slug: "warehouse-engineer",
        title: { en: "Warehouse Engineer", nl: "Warehouse Engineer" },
        category: { en: "Supply Chain", nl: "Supply Chain" },
        type: { en: "Full-Time, Contract", nl: "Fulltime, Contract" },
        status: { en: "Active", nl: "Actief" },
        location: {
          en: "Heijningen, Netherlands",
          nl: "Heijningen, Nederland",
        },
        description: {
          en: "Location: On-site. Work Type: Full Time, Contract. Staff Outsourcing is a Netherlands-based technology and business services provider that helps organizations improve their operations through smart IT solutions, supply chain management, staffing solutions and digital services. We combine technology, sector expertise and practical solutions to help companies work more efficiently, streamline processes and grow sustainably. For this vacancy, Staff Outsourcing is looking for a Warehouse Engineer on behalf of one of its clients in Heijningen. Are you ready to improve and further develop warehouse processes within a dynamic offshore environment? We are looking for a pragmatic and analytical Warehouse Engineer to strengthen the team of one of our clients in Heijningen. In this role you help optimize the logistics center that supports our client's vessels, projects and worldwide offshore activities. As a Warehouse Engineer, you are responsible for managing, improving and further developing warehouse processes within the client's organization. You work closely with stakeholders within the organization to identify improvement opportunities, translate ideas into practical plans and lead projects that make warehouse activities safer, smarter and more efficient. You are part of the client's logistics center for project materials and consumables for the vessels. The logistics center handles receiving, processing, storage and distribution, both onshore and offshore, and plays an important role within the supply chain.",
          nl: "Locatie: Op locatie. Werktype: Fulltime, Contract. Staff Outsourcing is een in Nederland gevestigd technologie- en zakelijke dienstverlener die organisaties helpt hun bedrijfsvoering te verbeteren door middel van slimme IT-oplossingen, supply chain management, personeelsoplossingen en digitale diensten. We combineren technologie, sectorexpertise en praktische oplossingen om bedrijven te helpen efficiÃ«nter te werken, processen te stroomlijnen en duurzaam te groeien. Voor deze vacature is Staff Outsourcing namens een van haar klanten in Heijningen op zoek naar een Warehouse Engineer. Ben je klaar om magazijnprocessen binnen een dynamische offshore-omgeving te verbeteren en verder te ontwikkelen? Wij zoeken een pragmatische en analytische Warehouse Engineer om het team van een van onze klanten in Heijningen te versterken. In deze rol help je het logistieke centrum te optimaliseren dat de schepen, projecten en wereldwijde offshore-activiteiten van onze klant ondersteunt. Als Warehouse Engineer ben je verantwoordelijk voor het beheren, verbeteren en verder ontwikkelen van magazijnprocessen binnen de organisatie van de klant. Je werkt nauw samen met stakeholders binnen de organisatie om verbetermogelijkheden te identificeren, ideeÃ«n te vertalen naar praktische plannen en projecten te leiden die de magazijnactiviteiten veiliger, slimmer en efficiÃ«nter maken. Je maakt deel uit van het logistieke centrum van de klant voor projectmaterialen en verbruiksartikelen voor de schepen. Het logistieke centrum verzorgt de ontvangst, verwerking, opslag en distributie, zowel onshore als offshore, en speelt een belangrijke rol binnen de supply chain.",
        },
        responsibilities: [
          {
            en: "Managing, improving and further developing warehouse processes and procedures",
            nl: "Beheren, verbeteren en verder ontwikkelen van magazijnprocessen en -procedures",
          },
          {
            en: "Identifying improvement opportunities and translating them into practical plans",
            nl: "Identificeren van verbetermogelijkheden en deze vertalen naar praktische plannen",
          },
          {
            en: "Analyzing data, assessing feasibility and aligning with stakeholders to support business cases and project proposals",
            nl: "Analyseren van data, beoordelen van de haalbaarheid en afstemmen met stakeholders ter ondersteuning van businesscases en projectvoorstellen",
          },
          {
            en: "Drafting project plans, business cases and, where relevant, ROI calculations",
            nl: "Opstellen van projectplannen, businesscases en, waar relevant, ROI-berekeningen",
          },
          {
            en: "Independently leading improvement projects or collaborating with assigned project team members",
            nl: "Zelfstandig leiden van verbeterprojecten of samenwerken met aangewezen projectteamleden",
          },
          {
            en: "Monitoring project progress, preparing reports and adjusting procedures where needed",
            nl: "Monitoren van de projectvoortgang, opstellen van rapportages en waar nodig aanpassen van procedures",
          },
          {
            en: "Managing warehouse-related processes and contributing to safe, reliable and efficient warehouse activities",
            nl: "Beheren van magazijn gerelateerde processen en bijdragen aan veilige, betrouwbare en efficiÃ«nte magazijnactiviteiten",
          },
        ],
        requirements: [
          {
            en: "A completed HBO degree or an equivalent level of education and experience",
            nl: "Een afgeronde hbo-opleiding of een gelijkwaardig opleidings- en ervaringsniveau",
          },
          {
            en: "Preferably at least six years of relevant experience in warehouse engineering or improving warehouse processes",
            nl: "Bij voorkeur minimaal zes jaar relevante ervaring binnen warehouse engineering of het verbeteren van magazijnprocessen",
          },
          {
            en: "Good knowledge of warehouse procedures, concepts and operational processes",
            nl: "Goede kennis van magazijnprocedures, -concepten en operationele processen",
          },
          {
            en: "Strong analytical skills and the ability to use data to support decision-making",
            nl: "Sterke analytische vaardigheden en het vermogen om data te gebruiken ter ondersteuning van besluitvorming",
          },
          {
            en: "Experience with SAP is a plus",
            nl: "Ervaring met SAP is een prÃ©",
          },
          {
            en: "Nice to Have: Good communication skills and the confidence to work with various stakeholders",
            nl: "Nice to Have: Goede communicatieve vaardigheden en het zelfvertrouwen om met verschillende stakeholders samen te werken",
          },
          {
            en: "Nice to Have: A proactive, pragmatic and no-nonsense approach",
            nl: "Nice to Have: Een proactieve, pragmatische en no-nonsense aanpak",
          },
          {
            en: "Nice to Have: Fluent command of Dutch is required",
            nl: "Nice to Have: Vloeiende beheersing van het Nederlands is verplicht",
          },
          {
            en: "Nice to Have: Attention to detail and a quality-oriented mindset",
            nl: "Nice to Have: Oog voor detail en een kwaliteitsgerichte instelling",
          },
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
          en: "Location: Rotterdam, Netherlands. Work Type: Full-Time. At Staff Outsourcing, we create a professional, results-oriented, and entrepreneurial work environment. Our Supply Chain & Procurement teams sit at the intersection of operational discipline, cross-functional collaboration, and demonstrable business results. We encourage employees to take ownership, develop practical expertise, and drive continuous improvement. For ambitious higher education (HBO) graduates and starters, we provide a structured environment where you can bridge the gap between your studies and professional work experience. Through practical training, personal guidance, and real responsibilities, you will develop into a professional Supply Chain Planner and gain the opportunity to build a long-term career within our company. Why Staff Outsourcing: Remote-First â€” Full flexibility, work from wherever you do your best thinking.",
          nl: "Locatie: Rotterdam, Nederland. Werktype: Fulltime. Bij Staff Outsourcing creÃ«ren wij een professionele, resultaatgerichte en ondernemende werkomgeving. Onze Supply Chain & Procurement-teams bevinden zich op het snijvlak van operationele discipline, cross-functionele samenwerking en aantoonbare bedrijfsresultaten. We moedigen medewerkers aan om eigenaarschap te nemen, praktische expertise te ontwikkelen en continue verbetering na te streven. Voor ambitieuze hbo-afgestudeerden en starters bieden wij een gestructureerde omgeving om de brug te slaan tussen studie en werkervaring. Via praktische training, persoonlijke begeleiding en echte verantwoordelijkheden ontwikkel je je tot een professionele Supply Chain Planner en krijg je de kans om een lange termijn carriÃ¨re binnen ons bedrijf op te bouwen. Waarom Staff Outsourcing: Remote-First â€” Volledige flexibiliteit, werk vanaf waar jij het beste denkt.",
        },
        responsibilities: [
          {
            en: "Supply Chain Planning & Analysis",
            nl: "Supply Chain Planning & Analyse",
          },
          {
            en: "Inventory Management & Operational Coordination",
            nl: "Voorraadbeheer & Operationele CoÃ¶rdinatie",
          },
          {
            en: "Stakeholder Collaboration & Communication",
            nl: "Samenwerking & Communicatie met Stakeholders",
          },
          {
            en: "Process Improvement & Continuous Development",
            nl: "Procesverbetering & Continue Ontwikkeling",
          },
        ],
        requirements: [
          {
            en: "HBO graduate or nearly graduated, preferably in Supply Chain Management, Logistics & Economics, Industrial Engineering, International Business, Business Administration or a related field",
            nl: "HBO afgestudeerd of bijna afgestudeerd, bij voorkeur in Supply Chain Management, Logistics & Economics, Industrial Engineering, International Business, Business Administration of een gerelateerd vakgebied",
          },
          {
            en: "No extensive work experience required; intended for starters who want to gain practical experience in supply chain",
            nl: "Geen uitgebreide werkervaring vereist; bedoeld voor starters die praktijkervaring willen opdoen in supply chain",
          },
          {
            en: "Fluent command of Dutch is required, professional command of English required",
            nl: "Vloeiende beheersing van het Nederlands is verplicht, professionele beheersing van het Engels vereist",
          },
          {
            en: "Strong analytical skills and affinity with numbers, data and structured processes",
            nl: "Sterke analytische vaardigheden en affiniteit met cijfers, data en gestructureerde processen",
          },
          {
            en: "Good knowledge of Microsoft Excel; affinity with ERP systems and digital planning tools is a plus",
            nl: "Goede kennis van Microsoft Excel; affiniteit met ERP-systemen en digitale planningstools is een prÃ©",
          },
          {
            en: "Strong verbal and written communication skills",
            nl: "Sterke mondelinge en schriftelijke communicatievaardigheden",
          },
          {
            en: "Curious, proactive, eager to learn, structured and solution-oriented",
            nl: "Nieuwsgierig, proactief, leergierig, gestructureerd en oplossingsgericht",
          },
          {
            en: "Clear interest in a long-term career in Supply Chain Planning and motivation to complete the full 3-month training program",
            nl: "Duidelijke interesse in een lange termijn carriÃ¨re binnen Supply Chain Planning en motivatie om het volledige 3-maanden trainingsprogramma te volgen",
          },
          {
            en: "Valid work permit for the Netherlands",
            nl: "Geldige werkvergunning voor Nederland",
          },
          {
            en: "Nice to Have: ITIL Foundation certification or structured service-desk experience is a plus",
            nl: "Nice to Have: ITIL Foundation certificering of structured service-desk ervaring is een prÃ©",
          },
          {
            en: "Nice to Have: Experience with WMS or industrial ERP environments is a plus",
            nl: "Nice to Have: Ervaring met WMS of industriÃ«le ERP-omgevingen is een prÃ©",
          },
          {
            en: "Nice to Have: Familiarity with database management concepts and analytics platforms (Excel / Power BI)",
            nl: "Nice to Have: Bekendheid met database management concepten en analytics platforms (Excel / Power BI)",
          },
        ],
      },
      {
        slug: "master-data-specialist",
        title: {
          en: "Master Data Specialist â€“ SAP S/4HANA",
          nl: "Master Data Specialist â€“ SAP S/4HANA",
        },
        category: { en: "Supply Chain", nl: "Supply Chain" },
        type: { en: "Full-Time", nl: "Fulltime" },
        status: { en: "Active", nl: "Actief" },
        location: { en: "Rotterdam, Netherlands", nl: "Rotterdam, Nederland" },
        description: {
          en: "We are seeking a detail-oriented and motivated Master Data Specialist to join our global team. In this role, you will be responsible for delivering reliable outcomes within the Supply Chain & Procurement function, working with structured processes and clear stakeholder communication.",
          nl: "Wij zijn op zoek naar een nauwkeurige en gemotiveerde Master Data Specialist om ons wereldwijde team te versterken. In deze rol ben je verantwoordelijk voor het leveren van betrouwbare resultaten binnen de functie Supply Chain & Procurement, met gestructureerde processen en duidelijke communicatie met stakeholders.",
        },
        responsibilities: [
          {
            en: "Core delivery and execution of master data processes",
            nl: "Kernuitvoering van master data processen",
          },
          {
            en: "Stakeholder collaboration across departments",
            nl: "Samenwerking met stakeholders binnen verschillende afdelingen",
          },
          {
            en: "Analysis and problem solving on data quality issues",
            nl: "Analyse en probleemoplossing bij datakwaliteitskwesties",
          },
          {
            en: "Driving process improvement initiatives",
            nl: "Aansturen van procesverbeteringsinitiatieven",
          },
          {
            en: "Documentation and reporting on master data governance",
            nl: "Documentatie en rapportage over master data governance",
          },
          {
            en: "Maintaining operational quality and consistency",
            nl: "Bewaken van operationele kwaliteit en consistentie",
          },
        ],
        requirements: [
          {
            en: "3+ years of relevant hands-on experience in a comparable Master Data Specialist or related role",
            nl: "3+ jaar relevante praktijkervaring in een vergelijkbare Master Data Specialist of gerelateerde functie",
          },
          {
            en: "Bachelor's degree or equivalent professional experience related to Master Data Specialist, Supply Chain & Procurement, or a closely related discipline",
            nl: "Bachelordiploma of gelijkwaardige professionele ervaring gerelateerd aan Master Data Specialist, Supply Chain & Procurement, of een nauw verwant vakgebied",
          },
          {
            en: "Experience with ERP/master data management, preferably SAP S/4HANA",
            nl: "Ervaring met ERP/master data management, bij voorkeur SAP S/4HANA",
          },
          {
            en: "Strong ability to translate requirements into practical execution, evaluate outcomes, and communicate clearly with stakeholders",
            nl: "Sterk vermogen om vereisten te vertalen naar praktische uitvoering, resultaten te evalueren en duidelijk te communiceren met stakeholders",
          },
          {
            en: "Comfortable working in a hybrid setup",
            nl: "Comfortabel met werken in een hybride omgeving",
          },
        ],
      },
      {
        slug: "procurement-specialist",
        title: { en: "Procurement Specialist", nl: "Procurement Specialist" },
        category: { en: "Supply Chain", nl: "Supply Chain" },
        type: { en: "Full-Time", nl: "Fulltime" },
        status: { en: "Active", nl: "Actief" },
        location: { en: "Rotterdam, Netherlands", nl: "Rotterdam, Nederland" },
        description: {
          en: "Location: Rotterdam, Netherlands. Work Type: Full-Time. At Staff Outsourcing, we create a professional, results-oriented, and entrepreneurial work environment. The Procurement Specialist will be responsible for managing end-to-end procurement activities, including sourcing, tendering, supplier evaluation, contract award, contract support, and supplier onboarding. The role focuses on ensuring cost efficiency, supplier performance, compliance with internal policies, and alignment with Dutch and EU procurement regulations. The position requires close collaboration with finance, operations, legal, project teams, and other internal stakeholders to support procurement strategy, manage supplier relationships, monitor market trends, and contribute to category management and sustainability initiatives.",
          nl: "Locatie: Rotterdam, Nederland. Werktype: Fulltime. Bij Staff Outsourcing creÃ«ren wij een professionele, resultaatgerichte en ondernemende werkomgeving. De Procurement Specialist is verantwoordelijk voor het beheren van end-to-end inkoopactiviteiten, waaronder sourcing, tenders, leveranciersevaluatie, contractgunning, contractondersteuning en het onboarden van leveranciers. De rol richt zich op het waarborgen van kostenefficiÃ«ntie, leveranciersprestaties, naleving van interne beleidsregels en afstemming met Nederlandse en EU-inkoopregels. De functie vereist nauwe samenwerking met finance, operations, legal, projectteams en andere interne stakeholders om de inkoopstrategie te ondersteunen, leveranciersrelaties te beheren, markttrends te monitoren en bij te dragen aan category management en duurzaamheidsinitiatieven.",
        },
        responsibilities: [
          {
            en: "Manage the full procurement cycle from sourcing and tendering to contract award and supplier onboarding",
            nl: "Beheren van de volledige inkoopcyclus van sourcing en tenders tot contractgunning en onboarding van leveranciers",
          },
          {
            en: "Identify, evaluate, and negotiate with suppliers to secure the best value in terms of quality, cost, delivery, and service",
            nl: "Identificeren, evalueren en onderhandelen met leveranciers om de beste waarde te behalen op het gebied van kwaliteit, kosten, levering en service",
          },
          {
            en: "Prepare and support procurement documentation, supplier evaluations, purchase agreements, tender documents, and contract-related activities",
            nl: "Voorbereiden en ondersteunen van inkoopdocumentatie, leveranciersevaluaties, inkoopovereenkomsten, tenderdocumenten en contractgerelateerde activiteiten",
          },
          {
            en: "Maintain accurate procurement records, contracts, and reporting within ERP/procurement systems",
            nl: "Bijhouden van nauwkeurige inkoopgegevens, contracten en rapportages binnen ERP/inkoopsystemen",
          },
          {
            en: "Ensure procurement activities are completed in line with internal policies, procedures, and business requirements",
            nl: "Zorgen dat inkoopactiviteiten worden uitgevoerd in lijn met interne beleidsregels, procedures en bedrijfsvereisten",
          },
          {
            en: "Support cost-saving initiatives and contribute to procurement efficiency improvements",
            nl: "Ondersteunen van kostenbesparende initiatieven en bijdragen aan verbetering van inkoopefficiÃ«ntie",
          },
          {
            en: "Coordinate with internal stakeholders to understand business needs and translate them into procurement actions",
            nl: "Afstemmen met interne stakeholders om bedrijfsbehoeften te begrijpen en te vertalen naar inkoopacties",
          },
        ],
        requirements: [
          {
            en: "Bachelor's degree in Supply Chain Management, Business Administration, Economics, Procurement, or a related field",
            nl: "Bachelordiploma in Supply Chain Management, Bedrijfskunde, Economie, Inkoop of een gerelateerd vakgebied",
          },
          {
            en: "Minimum 5+ years of experience in procurement, sourcing, supply chain, or supplier management",
            nl: "Minimaal 5+ jaar ervaring in inkoop, sourcing, supply chain of leveranciersmanagement",
          },
          {
            en: "Strong negotiation, tendering, sourcing, and contract management skills",
            nl: "Sterke vaardigheden in onderhandelen, tenders, sourcing en contractbeheer",
          },
          {
            en: "Experience with supplier evaluation, supplier onboarding, and supplier performance management",
            nl: "Ervaring met leveranciersevaluatie, onboarding van leveranciers en prestatiebeheer van leveranciers",
          },
          {
            en: "Proficiency in ERP/procurement systems such as SAP, Oracle, or similar platforms",
            nl: "Vaardigheid in ERP/inkoopsystemen zoals SAP, Oracle of vergelijkbare platforms",
          },
          {
            en: "Solid understanding of procurement processes, tendering, and contract award procedures",
            nl: "Gedegen kennis van inkoopprocessen, tenders en gunningsprocedures",
          },
          {
            en: "Knowledge of EU procurement directives and Dutch procurement regulations",
            nl: "Kennis van EU-aanbestedingsrichtlijnen en Nederlandse inkoopregelgeving",
          },
          {
            en: "Fluent English and Dutch communication skills required",
            nl: "Vloeiende communicatieve vaardigheden in het Engels en Nederlands vereist",
          },
          {
            en: "Must be authorized to work in the Netherlands",
            nl: "Moet gemachtigd zijn om in Nederland te werken",
          },
          {
            en: "Strong analytical mindset with excellent attention to detail",
            nl: "Sterke analytische instelling met uitstekend oog voor detail",
          },
          {
            en: "Excellent communication, stakeholder management, and problem-solving skills",
            nl: "Uitstekende communicatieve vaardigheden, stakeholder management en probleemoplossend vermogen",
          },
          {
            en: "Able to work independently, manage deadlines, and coordinate with cross-functional teams",
            nl: "In staat om zelfstandig te werken, deadlines te beheren en af te stemmen met cross-functionele teams",
          },
          {
            en: "Nice to Have: Experience with SAP S/4HANA or Oracle Fusion is a plus",
            nl: "Nice to Have: Ervaring met SAP S/4HANA of Oracle Fusion is een prÃ©",
          },
          {
            en: "Nice to Have: CIPS qualification or equivalent professional procurement certification is a plus",
            nl: "Nice to Have: CIPS-kwalificatie of gelijkwaardig professioneel inkoopcertificaat is een prÃ©",
          },
          {
            en: "Nice to Have: Experience in category management or strategic sourcing is a plus",
            nl: "Nice to Have: Ervaring met category management of strategische sourcing is een prÃ©",
          },
          {
            en: "Nice to Have: Familiarity with sustainability procurement practices and ESG supply chain objectives",
            nl: "Nice to Have: Bekendheid met duurzame inkooppraktijken en ESG-supply chain-doelstellingen",
          },
          {
            en: "Nice to Have: Experience working in an international or multicultural environment",
            nl: "Nice to Have: Ervaring in een internationale of multiculturele omgeving",
          },
          {
            en: "Nice to Have: Experience supporting procurement activities within operations, projects, supply chain, or ERP-driven environments",
            nl: "Nice to Have: Ervaring met het ondersteunen van inkoopactiviteiten binnen operations, projecten, supply chain of ERP-gedreven omgevingen",
          },
          {
            en: "Nice to Have: Experience working in both permanent employment and freelance/contract-based environments is a plus",
            nl: "Nice to Have: Ervaring in zowel vaste dienstverbanden als freelance-/contractomgevingen is een prÃ©",
          },
        ],
      },
    ],
  },
  {
    category: { en: "Engineering", nl: "Engineering" },
    jobs: [
      {
        slug: "principal-structural-engineer-subsea-pipeline",
        title: {
          en: "Principal Structural Engineer - Subsea / Pipeline",
          nl: "Principal Structural Engineer - Subsea / Pipeline",
        },
        category: { en: "Engineering", nl: "Engineering" },
        type: { en: "Full-Time", nl: "Fulltime" },
        status: { en: "Active", nl: "Actief" },
        location: { en: "On-site", nl: "Op locatie" },
        description: {
          en: "We are looking for a Principal Structural Engineer to lead subsea and pipeline structural engineering projects from concept to execution.",
          nl: "Wij zoeken een Principal Structural Engineer om subsea- en pipeline-structuurprojecten te leiden van concept tot uitvoering.",
        },
        responsibilities: [
          {
            en: "Lead structural design for subsea/pipeline projects",
            nl: "Leiden van structureel ontwerp voor subsea/pipeline projecten",
          },
          {
            en: "Review and approve engineering calculations",
            nl: "Beoordelen en goedkeuren van technische berekeningen",
          },
          {
            en: "Mentor junior structural engineers",
            nl: "Begeleiden van junior structural engineers",
          },
        ],
        requirements: [
          {
            en: "10+ years experience in subsea/pipeline structural engineering",
            nl: "10+ jaar ervaring in subsea/pipeline structural engineering",
          },
          {
            en: "Strong knowledge of relevant codes and standards",
            nl: "Sterke kennis van relevante codes en normen",
          },
          {
            en: "Proven leadership experience",
            nl: "Bewezen leidinggevende ervaring",
          },
        ],
      },
      {
        slug: "structural-engineer-pipeline-engineering",
        title: {
          en: "Structural Engineer - Pipeline Engineering",
          nl: "Structural Engineer - Pipeline Engineering",
        },
        category: { en: "Engineering", nl: "Engineering" },
        type: { en: "Full-Time", nl: "Fulltime" },
        status: { en: "Active", nl: "Actief" },
        location: { en: "On-site", nl: "Op locatie" },
        description: {
          en: "Join our pipeline engineering team as a Structural Engineer, responsible for the structural design and analysis of pipeline systems.",
          nl: "Word onderdeel van ons pipeline engineering team als Structural Engineer, verantwoordelijk voor het structureel ontwerp en de analyse van pipelinesystemen.",
        },
        responsibilities: [
          {
            en: "Perform structural analysis and design calculations",
            nl: "Uitvoeren van structurele analyses en ontwerpberekeningen",
          },
          {
            en: "Prepare technical reports and drawings",
            nl: "Opstellen van technische rapporten en tekeningen",
          },
          {
            en: "Coordinate with multidisciplinary project teams",
            nl: "Afstemmen met multidisciplinaire projectteams",
          },
        ],
        requirements: [
          {
            en: "Bachelor's/Master's in Civil or Structural Engineering",
            nl: "Bachelor/Master in Civiele Techniek of Structural Engineering",
          },
          {
            en: "Experience in pipeline or offshore structures",
            nl: "Ervaring met pipeline- of offshore-structuren",
          },
          {
            en: "Proficiency in relevant engineering software",
            nl: "Vaardigheid in relevante engineeringsoftware",
          },
        ],
      },
      {
        slug: "instrumentation-engineer",
        title: {
          en: "Instrumentation Engineer",
          nl: "Instrumentation Engineer",
        },
        category: { en: "Engineering", nl: "Engineering" },
        type: { en: "Full-Time", nl: "Fulltime" },
        status: { en: "Active", nl: "Actief" },
        location: { en: "On-site", nl: "Op locatie" },
        description: {
          en: "We are hiring an Instrumentation Engineer to design, install, and maintain instrumentation and control systems.",
          nl: "Wij zoeken een Instrumentation Engineer voor het ontwerpen, installeren en onderhouden van instrumentatie- en regelsystemen.",
        },
        responsibilities: [
          {
            en: "Design instrumentation and control systems",
            nl: "Ontwerpen van instrumentatie- en regelsystemen",
          },
          {
            en: "Prepare specifications and datasheets",
            nl: "Opstellen van specificaties en datasheets",
          },
          {
            en: "Support commissioning and troubleshooting",
            nl: "Ondersteunen bij inbedrijfstelling en troubleshooting",
          },
        ],
        requirements: [
          {
            en: "Degree in Instrumentation/Electrical Engineering",
            nl: "Diploma in Instrumentatie/Elektrotechniek",
          },
          {
            en: "Experience with process control systems",
            nl: "Ervaring met procesbesturingssystemen",
          },
          {
            en: "Strong troubleshooting skills",
            nl: "Sterke troubleshootingvaardigheden",
          },
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
          nl: "Als Project Engineer coÃ¶rdineer je de technische aspecten van projecten en zorg je dat ze op tijd en binnen budget worden opgeleverd.",
        },
        responsibilities: [
          {
            en: "Coordinate engineering activities across project phases",
            nl: "CoÃ¶rdineren van engineeringactiviteiten in alle projectfasen",
          },
          {
            en: "Track project timelines and budgets",
            nl: "Bewaken van projecttijdlijnen en budgetten",
          },
          {
            en: "Liaise with clients and contractors",
            nl: "Contact onderhouden met klanten en aannemers",
          },
        ],
        requirements: [
          {
            en: "Engineering degree with project experience",
            nl: "Technische opleiding met projectervaring",
          },
          {
            en: "Strong organizational and communication skills",
            nl: "Sterke organisatorische en communicatieve vaardigheden",
          },
          {
            en: "Experience with project management tools",
            nl: "Ervaring met projectmanagementtools",
          },
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
          {
            en: "Configure and maintain network hardware",
            nl: "Configureren en onderhouden van netwerkhardware",
          },
          {
            en: "Monitor network performance and security",
            nl: "Monitoren van netwerkprestaties en -beveiliging",
          },
          {
            en: "Troubleshoot connectivity issues",
            nl: "Oplossen van connectiviteitsproblemen",
          },
        ],
        requirements: [
          {
            en: "Experience with routing, switching, and firewalls",
            nl: "Ervaring met routing, switching en firewalls",
          },
          {
            en: "Relevant certifications (CCNA/CCNP) preferred",
            nl: "Relevante certificeringen (CCNA/CCNP) zijn een prÃ©",
          },
          {
            en: "Strong problem-solving skills",
            nl: "Sterke probleemoplossende vaardigheden",
          },
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
          en: "Location: On-site. Work Type: Full Time, Contract. At Staff Outsourcing, we are committed to delivering innovative and cutting-edge technology solutions to our clients. We focus on leveraging AI and Machine Learning to build intelligent systems that drive efficiency and create data-driven insights. Join our dynamic team of professionals where your contributions directly impact businesses on their digital transformation journey.",
          nl: "Locatie: Op locatie. Werktype: Fulltime, Contract. Bij Staff Outsourcing zijn we toegewijd aan het leveren van innovatieve en cutting-edge technologieoplossingen aan onze klanten. We richten ons op het benutten van AI en Machine Learning om intelligente systemen te bouwen die efficiÃ«ntie stimuleren en data-gedreven inzichten creÃ«ren. Word onderdeel van ons dynamische team van professionals waar jouw bijdrage direct impact heeft op de digitale transformatie van bedrijven.",
        },
        responsibilities: [
          {
            en: "Deploy machine learning workloads, preferably in AWS using SageMaker",
            nl: "Deployen van machine learning workloads, bij voorkeur in AWS met SageMaker",
          },
          {
            en: "Implement MLOps practices including monitoring, alerting, CI/CD pipelines, Docker containerization, and testing",
            nl: "Implementeren van MLOps-praktijken zoals monitoring, alerting, CI/CD-pipelines, Docker-containerisatie en testen",
          },
          {
            en: "Work closely with data engineering and software teams to ensure seamless deployment of ML models into production",
            nl: "Nauw samenwerken met data engineering- en softwareteams om naadloze deployment van ML-modellen naar productie te waarborgen",
          },
          {
            en: "Ensure code quality and maintain version control using GitHub, following collaborative best practices",
            nl: "Bewaken van codekwaliteit en versiebeheer via GitHub, volgens best practices voor samenwerking",
          },
          {
            en: "Leverage cloud-native services on AWS (S3, API Gateway, Lambda, ECS) or comparable platforms like MS Azure and Google Cloud",
            nl: "Gebruikmaken van cloud-native services op AWS (S3, API Gateway, Lambda, ECS) of vergelijkbare platforms zoals MS Azure en Google Cloud",
          },
          {
            en: "Collaborate with cross-functional teams to translate business requirements into actionable technical solutions",
            nl: "Samenwerken met cross-functionele teams om bedrijfsvereisten te vertalen naar uitvoerbare technische oplossingen",
          },
        ],
        requirements: [
          {
            en: "Advanced proficiency in Python and strong knowledge of SQL",
            nl: "Geavanceerde vaardigheid in Python en sterke kennis van SQL",
          },
          {
            en: "Hands-on experience deploying machine learning workloads in cloud environments, preferably AWS SageMaker",
            nl: "Praktijkervaring met het deployen van machine learning workloads in cloudomgevingen, bij voorkeur AWS SageMaker",
          },
          {
            en: "Practical experience implementing MLOps, including monitoring, alerting, CI/CD pipelines, Docker builds, and automated testing",
            nl: "Praktische ervaring met het implementeren van MLOps, waaronder monitoring, alerting, CI/CD-pipelines, Docker-builds en geautomatiseerd testen",
          },
          {
            en: "Nice to Have: Proficiency with version control systems like GitHub, including familiarity with workflows and collaborative coding practices",
            nl: "Nice to Have: Vaardigheid met versiebeheersystemen zoals GitHub, inclusief bekendheid met workflows en collaboratieve codepraktijken",
          },
          {
            en: "Nice to Have: Experience working with AWS cloud-native services such as S3, API Gateway, Lambda, ECS or equivalent services on MS Azure or Google Cloud",
            nl: "Nice to Have: Ervaring met AWS cloud-native services zoals S3, API Gateway, Lambda, ECS of gelijkwaardige services op MS Azure of Google Cloud",
          },
          {
            en: "Nice to Have: Strong communication skills in English, both written and verbal",
            nl: "Nice to Have: Sterke communicatieve vaardigheden in het Engels, zowel schriftelijk als mondeling",
          },
        ],
      },
      {
        slug: "data-engineer",
        title: { en: "Data Engineer", nl: "Data Engineer" },
        category: { en: "Engineering", nl: "Engineering" },
        type: { en: "Full-Time, Contract", nl: "Fulltime, Contract" },
        status: { en: "Active", nl: "Actief" },
        location: { en: "On-site", nl: "Op locatie" },
        description: {
          en: "Location: On-site. Work Type: Full Time, Contract. At Staff Outsourcing, we pride ourselves on delivering cutting-edge data engineering solutions tailored to complex business needs. Our team of experts is dedicated to leveraging advanced technologies and innovative strategies to enhance data-driven decision-making for our clients. Join us and become part of a dynamic and collaborative environment where your contributions make a meaningful impact. As a Data Engineer, you will design and build data pipelines to support analytics and business intelligence.",
          nl: "Locatie: Op locatie. Werktype: Fulltime, Contract. Bij Staff Outsourcing zijn we trots op het leveren van cutting-edge data engineering-oplossingen op maat voor complexe bedrijfsbehoeften. Ons team van experts is toegewijd aan het benutten van geavanceerde technologieÃ«n en innovatieve strategieÃ«n om data-gedreven besluitvorming voor onze klanten te verbeteren. Word onderdeel van een dynamische en collaboratieve omgeving waar jouw bijdrage een betekenisvolle impact maakt. Als Data Engineer ontwerp en bouw je datapijplijnen ter ondersteuning van analytics en business intelligence.",
        },
        responsibilities: [
          {
            en: "Connecting new source systems to the customer data lake",
            nl: "Aansluiten van nieuwe bronsystemen op het data lake van de klant",
          },
          {
            en: "Migration of current ETL processes (DL 1.0) to the new Data Lake (DL 2.0)",
            nl: "Migratie van huidige ETL-processen (DL 1.0) naar het nieuwe Data Lake (DL 2.0)",
          },
          {
            en: "Implementation of monitoring and alerting mechanisms around the data lake ETLs to improve observability",
            nl: "Implementeren van monitoring- en alertingmechanismen rond de data lake ETL's om observability te verbeteren",
          },
          {
            en: "Performing monitoring activities and providing support in resolving ETL-related incidents in pre-production and production environments",
            nl: "Uitvoeren van monitoringactiviteiten en ondersteuning bieden bij het oplossen van ETL-gerelateerde incidenten in pre-productie- en productieomgevingen",
          },
        ],
        requirements: [
          {
            en: "Proficiency with Kafka event streaming â€“ strong expertise required",
            nl: "Vaardigheid met Kafka event streaming â€“ sterke expertise vereist",
          },
          {
            en: "Proficiency in SQL, Python, and PySpark â€“ advanced knowledge necessary",
            nl: "Vaardigheid in SQL, Python en PySpark â€“ geavanceerde kennis noodzakelijk",
          },
          {
            en: "Experience in working with ETL to data lake stages â€“ hands-on experience required",
            nl: "Ervaring met ETL naar data lake-stadia â€“ praktijkervaring vereist",
          },
          {
            en: "Experience with version control systems (GitHub) â€“ familiarity with workflows",
            nl: "Ervaring met versiebeheersystemen (GitHub) â€“ bekendheid met workflows",
          },
          {
            en: "Practical experience with CDK in Python (Infrastructure as Code)",
            nl: "Praktische ervaring met CDK in Python (Infrastructure as Code)",
          },
          {
            en: "Hands-on experience with AWS native services (Athena, Glue, Lambda, ECS)",
            nl: "Praktijkervaring met AWS native services (Athena, Glue, Lambda, ECS)",
          },
          {
            en: "DataOps, maintenance & support â€“ ability to manage and optimize pipelines",
            nl: "DataOps, onderhoud & support â€“ vermogen om pijplijnen te beheren en te optimaliseren",
          },
          {
            en: "Strong English communication skills (verbal and written)",
            nl: "Sterke communicatieve vaardigheden in het Engels (mondeling en schriftelijk)",
          },
          {
            en: "Precision and security awareness â€“ attention to detail and secure coding practices",
            nl: "Precisie en securitybewustzijn â€“ oog voor detail en veilige codepraktijken",
          },
          {
            en: "Conceptual and analytical thinking â€“ ability to connect insights and patterns",
            nl: "Conceptueel en analytisch denken â€“ vermogen om inzichten en patronen te verbinden",
          },
          {
            en: "Problem-solving and critical thinking â€“ logical and structured approach to challenges",
            nl: "Probleemoplossend en kritisch denken â€“ logische en gestructureerde aanpak van uitdagingen",
          },
          {
            en: "Familiarity with Agile Ways of Working (WoW), including time management, prioritization, and adaptability",
            nl: "Bekendheid met Agile Ways of Working (WoW), waaronder tijdmanagement, prioritering en aanpassingsvermogen",
          },
          {
            en: "Quality assurance (CI/CD) â€“ experience with continuous integration and deployment",
            nl: "Kwaliteitsborging (CI/CD) â€“ ervaring met continuous integration en deployment",
          },
          {
            en: "Basic knowledge of Redshift and Data Warehousing â€“ understanding of ETL for BI purposes",
            nl: "Basiskennis van Redshift en Data Warehousing â€“ begrip van ETL voor BI-doeleinden",
          },
          {
            en: "DevSecOps â€“ experience with AWS security (IAM policies, security groups, etc.)",
            nl: "DevSecOps â€“ ervaring met AWS-security (IAM-policies, security groups, enz.)",
          },
          {
            en: "Nice to Have: Familiarity with data quality practices, including validation and governance",
            nl: "Nice to Have: Bekendheid met datakwaliteitspraktijken, waaronder validatie en governance",
          },
          {
            en: "Nice to Have: Innovative mindset â€“ willingness to explore and implement new solutions",
            nl: "Nice to Have: Innovatieve instelling â€“ bereidheid om nieuwe oplossingen te verkennen en te implementeren",
          },
          {
            en: "Nice to Have: Domain knowledge in logistics and supply chain",
            nl: "Nice to Have: Domeinkennis in logistiek en supply chain",
          },
          {
            en: "Nice to Have: Dutch language proficiency â€“ beneficial for communication with local stakeholders",
            nl: "Nice to Have: Beheersing van de Nederlandse taal â€“ gunstig voor communicatie met lokale stakeholders",
          },
        ],
      },
      {
        slug: "hvac-service-technician",
        title: {
          en: "HVAC Service Technician (Cooling Technology)",
          nl: "HVAC Service Technician (Koeltechniek)",
        },
        category: { en: "Engineering", nl: "Engineering" },
        type: { en: "Full-Time", nl: "Fulltime" },
        status: { en: "Active", nl: "Actief" },
        location: {
          en: "Heinkenszand and Roosendaal, Netherlands",
          nl: "Heinkenszand en Roosendaal, Nederland",
        },
        description: {
          en: "Location: Heinkenszand and Roosendaal, Netherlands. Work Type: Full-Time. Staff Outsourcing is seeking a dedicated and highly skilled HVAC Service Technician on behalf of our client for a permanent, full-time assignment based out of Heinkenszand and Roosendaal, Netherlands. In this vital technical role, you will be responsible for maintaining, optimizing, and troubleshooting industrial HVAC and cooling installations. You will play a crucial part in ensuring the reliability, safety, and sustainability of vital processes within the Food, Energy, and (semi) Industrial sectors. Your operational area will cover Zeeland, Noord-Brabant, the Belgian border region, and occasionally Zuid-Holland. This position requires an independent, responsible professional with a strong safety mindset, capable of operating autonomously on-site while serving as the primary technical point of contact for our valued clients. In this vital technical role, you will be responsible for the independent maintenance, repair, and optimization of mechanical HVAC installations within an industrial environment, acting as an on-site entrepreneur working closely with clients and maintenance engineers.",
          nl: "Locatie: Heinkenszand en Roosendaal, Nederland. Werktype: Fulltime. Staff Outsourcing zoekt namens onze klant een toegewijde en zeer vaardige HVAC Service Technician voor een permanente, fulltime opdracht vanuit Heinkenszand en Roosendaal, Nederland. In deze essentiÃ«le technische rol ben je verantwoordelijk voor het onderhouden, optimaliseren en oplossen van storingen aan industriÃ«le HVAC- en koelinstallaties. Je speelt een cruciale rol in het waarborgen van de betrouwbaarheid, veiligheid en duurzaamheid van vitale processen binnen de Food-, Energie- en (semi-)industriÃ«le sectoren. Je operationele gebied omvat Zeeland, Noord-Brabant, de Belgische grensregio en af en toe Zuid-Holland. Deze functie vereist een onafhankelijke, verantwoordelijke professional met een sterk veiligheidsbewustzijn, die zelfstandig op locatie kan werken en fungeert als het primaire technische aanspreekpunt voor onze gewaardeerde klanten. In deze essentiÃ«le technische rol ben je verantwoordelijk voor het zelfstandig onderhouden, repareren en optimaliseren van mechanische HVAC-installaties binnen een industriÃ«le omgeving, waarbij je als ondernemer op locatie nauw samenwerkt met klanten en onderhoudsmonteurs.",
        },
        responsibilities: [
          {
            en: "Maintenance, Commissioning & Optimization",
            nl: "Onderhoud, inbedrijfstelling & optimalisatie",
          },
          { en: "Diagnostics & Compliance", nl: "Diagnose & naleving" },
          {
            en: "Client Relations & Technical Advisory",
            nl: "Klantrelaties & technisch advies",
          },
          {
            en: "Maintenance & repair execution on mechanical HVAC installations",
            nl: "Uitvoeren van onderhoud & reparatie aan mechanische HVAC-installaties",
          },
          {
            en: "Operational coordination & procurement of materials",
            nl: "Operationele coÃ¶rdinatie & inkoop van materialen",
          },
          {
            en: "Client relations & stakeholder collaboration",
            nl: "Klantrelaties & samenwerking met stakeholders",
          },
        ],
        requirements: [
          {
            en: "Completed MBO education in Cooling Technology, Installation Technology, or HVAC",
            nl: "Afgeronde mbo-opleiding in Koeltechniek, Installatietechniek of HVAC",
          },
          {
            en: "Possession of a valid F-gas Category 1 certificate (Required)",
            nl: "In het bezit van een geldig F-gassen Categorie 1 certificaat (Vereist)",
          },
          {
            en: "Proven experience in the service and maintenance of technical installations, preferably within an industrial environment",
            nl: "Aantoonbare ervaring in service en onderhoud van technische installaties, bij voorkeur in een industriÃ«le omgeving",
          },
          {
            en: "Possession of a valid Category B driver's license",
            nl: "In het bezit van een geldig rijbewijs B",
          },
          {
            en: "Completed MBO Level 3 diploma as a Service Technician",
            nl: "Afgeronde mbo-3 opleiding als Service Monteur",
          },
          {
            en: "Minimum of 2 years of proven work experience in installation technology",
            nl: "Minimaal 2 jaar aantoonbare werkervaring in installatietechniek",
          },
          {
            en: "F-Gas certificate for handling fluorinated greenhouse gases in cooling installations is a plus",
            nl: "F-gassen certificaat voor het werken met gefluoreerde broeikasgassen in koelinstallaties is een prÃ©",
          },
          {
            en: "VCA Basic / VOL safety certification is a plus",
            nl: "VCA Basis / VOL veiligheidscertificaat is een prÃ©",
          },
          {
            en: "Prior hands-on experience with industrial cooling and climate system brands (e.g. Daikin, Carrier, Mitsubishi Electric, or Trane) is a plus",
            nl: "Praktijkervaring met industriÃ«le koel- en klimaatinstallaties van merken zoals Daikin, Carrier, Mitsubishi Electric of Trane is een prÃ©",
          },
          {
            en: "Nice to Have: F-gas A1 and/or B1 certification (additional F-gas certifications)",
            nl: "Nice to Have: F-gas A1 en/of B1 certificering (aanvullende F-gas certificaten)",
          },
          {
            en: "Nice to Have: Technical knowledge of electrical engineering or measurement and control technology",
            nl: "Nice to Have: Technische kennis van elektrotechniek of meet- en regeltechniek",
          },
        ],
      },
      {
        slug: "heat-tracing-technician",
        title: { en: "Heat Tracing Technician", nl: "Heat Tracing Technician" },
        category: { en: "Engineering", nl: "Engineering" },
        type: { en: "Full-Time", nl: "Fulltime" },
        status: { en: "Active", nl: "Actief" },
        location: {
          en: "Spijkenisse, Netherlands",
          nl: "Spijkenisse, Nederland",
        },
        description: {
          en: "Location: Spijkenisse, Netherlands. Work Type: Full-Time. Staff Outsourcing is seeking a skilled and dedicated Heat Tracing Technician on behalf of our client for a permanent, full-time assignment based in Spijkenisse, Netherlands. In this specialized technical role, you will be part of an expert team responsible for the installation, maintenance, and optimization of electrical heating (Heat Tracing) systems. These critical systems ensure that piping networks, tanks, fittings, and industrial surfaces are accurately heated or maintained at required temperatures to secure complex industrial processes. This position requires a safety-oriented professional with a strong foundation in electrical engineering, eager to take ownership of specialized industrial equipment while ensuring the highest standards of operational safety and client satisfaction.",
          nl: "Locatie: Spijkenisse, Nederland. Werktype: Fulltime. Staff Outsourcing zoekt namens onze klant een vaardige en toegewijde Heat Tracing Technician voor een permanente, fulltime opdracht in Spijkenisse, Nederland. In deze gespecialiseerde technische rol maak je deel uit van een expertteam dat verantwoordelijk is voor de installatie, het onderhoud en de optimalisatie van elektrische verwarmingssystemen (Heat Tracing). Deze kritieke systemen zorgen ervoor dat leidingnetwerken, tanks, fittingen en industriÃ«le oppervlakken nauwkeurig worden verwarmd of op de vereiste temperaturen worden gehouden om complexe industriÃ«le processen te waarborgen. Deze functie vereist een veiligheidsgerichte professional met een sterke basis in elektrotechniek, die eigenaarschap wil nemen over gespecialiseerde industriÃ«le apparatuur en tegelijkertijd de hoogste normen van operationele veiligheid en klanttevredenheid waarborgt.",
        },
        responsibilities: [
          {
            en: "Installation, Commissioning & Maintenance",
            nl: "Installatie, inbedrijfstelling & onderhoud",
          },
          {
            en: "Diagnostics & Operational Execution",
            nl: "Diagnose & operationele uitvoering",
          },
          {
            en: "Team Collaboration & Process Improvement",
            nl: "Teamsamenwerking & procesverbetering",
          },
        ],
        requirements: [
          {
            en: "Completed MBO Electrical Engineering education (Level 2 or Level 3)",
            nl: "Afgeronde mbo-opleiding Elektrotechniek (niveau 2 of niveau 3)",
          },
          {
            en: "Several years of proven work experience within an industrial environment",
            nl: "Meerdere jaren aantoonbare werkervaring binnen een industriÃ«le omgeving",
          },
          {
            en: "Previous experience in Heat Tracing is highly preferred, though comprehensive on-the-job training will be provided for candidates with a strong electrical background",
            nl: "Eerdere ervaring met Heat Tracing heeft sterk de voorkeur, maar uitgebreide on-the-job training wordt geboden aan kandidaten met een sterke elektrotechnische achtergrond",
          },
          {
            en: "Possession of a valid driver's license",
            nl: "In het bezit van een geldig rijbewijs",
          },
          {
            en: "Nice to Have: Entrepreneurial Mindset â€“ takes true ownership of the craft, understanding the vital impact of Heat Tracing on complex industrial processes",
            nl: "Nice to Have: Ondernemende instelling â€“ neemt echt eigenaarschap over het vak en begrijpt de vitale impact van Heat Tracing op complexe industriÃ«le processen",
          },
          {
            en: "Nice to Have: Team-Oriented & Independent â€“ highly capable of working autonomously on-site while remaining deeply connected to a close-knit team of specialists",
            nl: "Nice to Have: Teamgericht & zelfstandig â€“ zeer goed in staat om zelfstandig op locatie te werken en tegelijkertijd nauw verbonden te blijven met een hecht team van specialisten",
          },
        ],
      },
    ],
  },
  {
    category: { en: "IT", nl: "IT" },
    jobs: [
      {
        slug: "it-support-officer-1st-2nd-line-support",
        title: {
          en: "IT Support Officer (1st & 2nd line support)",
          nl: "IT Support Officer (1e & 2e lijns support)",
        },
        category: { en: "IT", nl: "IT" },
        type: { en: "Full-Time", nl: "Fulltime" },
        status: { en: "Active", nl: "Actief" },
        location: {
          en: "Hoogeveen / Capelle aan den IJssel Area, Netherlands",
          nl: "Regio Hoogeveen / Capelle aan den IJssel, Nederland",
        },
        description: {
          en: "We deliver high-performance managed IT services, cloud infrastructure, workforce integration, and digital transformation solutions to global enterprises and client networks across the Netherlands and Europe, maintaining secure and uninterrupted IT infrastructure.",
          nl: "Wij leveren hoogwaardige managed IT-diensten, cloudinfrastructuur, workforce-integratie en digitale transformatieoplossingen aan wereldwijde ondernemingen en klantnetwerken in Nederland en Europa, met behoud van een veilige en ononderbroken IT-infrastructuur.",
        },
        responsibilities: [
          {
            en: "End-user support & incident management",
            nl: "Eindgebruikersondersteuning & incidentmanagement",
          },
          {
            en: "System, identity, and cloud administration",
            nl: "Systeem-, identiteits- en cloudbeheer",
          },
          {
            en: "Operational, infrastructure & on-site support",
            nl: "Operationele, infrastructuur- & on-site ondersteuning",
          },
          {
            en: "Security, onboarding, and documentation",
            nl: "Beveiliging, onboarding en documentatie",
          },
        ],
        requirements: [
          {
            en: "MBO Level 4+ in ICT or related field",
            nl: "MBO niveau 4+ in ICT of gerelateerd vakgebied",
          },
          {
            en: "1â€“3+ years IT Support/Helpdesk experience",
            nl: "1â€“3+ jaar ervaring in IT Support/Helpdesk",
          },
          {
            en: "Experience with Windows 10/11 and macOS",
            nl: "Ervaring met Windows 10/11 en macOS",
          },
          {
            en: "Microsoft 365 and Entra ID / Azure AD experience",
            nl: "Ervaring met Microsoft 365 en Entra ID / Azure AD",
          },
          {
            en: "Microsoft Intune experience",
            nl: "Ervaring met Microsoft Intune",
          },
          {
            en: "Basic networking knowledge: TCP/IP, DNS, DHCP, Wi-Fi",
            nl: "Basiskennis netwerken: TCP/IP, DNS, DHCP, Wi-Fi",
          },
          {
            en: "Experience with IT ticketing systems",
            nl: "Ervaring met IT-ticketingsystemen",
          },
          {
            en: "Familiarity with Azure / AWS / Exchange Online",
            nl: "Bekendheid met Azure / AWS / Exchange Online",
          },
          {
            en: "Hardware and printer troubleshooting skills",
            nl: "Vaardigheden in troubleshooten van hardware en printers",
          },
          {
            en: "Knowledge of MFA and endpoint security",
            nl: "Kennis van MFA en endpointbeveiliging",
          },
          {
            en: "Fluent in Dutch and English",
            nl: "Vloeiend in Nederlands en Engels",
          },
          {
            en: "ITIL/WMS/ERP experience preferred",
            nl: "ITIL/WMS/ERP-ervaring is een prÃ©",
          },
        ],
      },
      {
        slug: "power-bi-developer",
        title: { en: "Power BI Developer", nl: "Power BI Developer" },
        category: { en: "Engineering", nl: "Engineering" },
        type: { en: "Full-Time", nl: "Fulltime" },
        status: { en: "Active", nl: "Actief" },
        location: { en: "Rotterdam, Netherlands", nl: "Rotterdam, Nederland" },
        description: {
          en: "Location: Rotterdam, Netherlands. Work Type: Full-time. We are seeking a detail-oriented and motivated Power BI Developer to join our global team. In this role, you will be responsible for delivering reliable outcomes within the Data function, working with structured processes, clear stakeholder communication, and a strong focus on quality. You will play an important role in translating day-to-day work into measurable business value while maintaining consistency, ownership, and high professional standards.",
          nl: "Locatie: Rotterdam, Nederland. Werktype: Fulltime. Wij zoeken een nauwkeurige en gemotiveerde Power BI Developer om ons wereldwijde team te versterken. In deze rol ben je verantwoordelijk voor het leveren van betrouwbare resultaten binnen de Data-functie, met gestructureerde processen, duidelijke stakeholdercommunicatie en een sterke focus op kwaliteit. Je speelt een belangrijke rol bij het vertalen van dagelijkse werkzaamheden naar meetbare bedrijfswaarde, met behoud van consistentie, eigenaarschap en hoge professionele normen.",
        },
        responsibilities: [
          {
            en: "Core Delivery: Power BI Desktop",
            nl: "Kernlevering: Power BI Desktop",
          },
          {
            en: "Process Improvement: Power BI Service",
            nl: "Procesverbetering: Power BI Service",
          },
          {
            en: "Documentation & Reporting: DAX",
            nl: "Documentatie & rapportage: DAX",
          },
          {
            en: "Stakeholder Management: Power Query",
            nl: "Stakeholdermanagement: Power Query",
          },
          { en: "Team Collaboration: SQL", nl: "Teamsamenwerking: SQL" },
          {
            en: "Operational Excellence: SQL Server",
            nl: "Operationele excellentie: SQL Server",
          },
        ],
        requirements: [
          {
            en: "Bachelor's degree or equivalent professional experience related to the Power BI Developer role",
            nl: "Bachelordiploma of gelijkwaardige professionele ervaring gerelateerd aan de rol van Power BI Developer",
          },
          {
            en: "3+ years of relevant hands-on experience in a comparable role",
            nl: "3+ jaar relevante praktijkervaring in een vergelijkbare rol",
          },
          {
            en: "Nice to Have: Demonstrable ability to deliver strong results within the Data function",
            nl: "Nice to Have: Aantoonbaar vermogen om sterke resultaten te leveren binnen de Data-functie",
          },
        ],
      },
      {
        slug: "it-specialist",
        title: { en: "IT Specialist", nl: "IT Specialist" },
        category: { en: "Engineering", nl: "Engineering" },
        type: { en: "Full-Time, Contract", nl: "Fulltime, Contract" },
        status: { en: "Active", nl: "Actief" },
        location: { en: "On-site", nl: "Op locatie" },
        description: {
          en: "Location: On-site. Work Type: Full Time, Contract. We are looking for an experienced IT Administrator to manage and maintain our IT infrastructure, ensuring smooth operations across networking, servers, security, and technical support. The ideal candidate should have hands-on experience in Windows Server 2022, Active Directory, Microsoft Exchange Online, Apache Web Server, and local file-sharing systems, among other IT responsibilities.",
          nl: "Locatie: Op locatie. Werktype: Fulltime, Contract. Wij zoeken een ervaren IT Administrator om onze IT-infrastructuur te beheren en te onderhouden, en zo soepele operaties op het gebied van netwerken, servers, security en technische ondersteuning te waarborgen. De ideale kandidaat heeft praktijkervaring met Windows Server 2022, Active Directory, Microsoft Exchange Online, Apache Web Server en lokale file-sharing-systemen, naast andere IT-verantwoordelijkheden.",
        },
        responsibilities: [
          {
            en: "Server Management & Administration",
            nl: "Serverbeheer & administratie",
          },
          {
            en: "Network Setup & Security",
            nl: "Netwerkinrichting & security",
          },
          { en: "Web Hosting & Management", nl: "Webhosting & beheer" },
          {
            en: "Email Administration (Microsoft Exchange Online)",
            nl: "E-mailbeheer (Microsoft Exchange Online)",
          },
          {
            en: "Local File Sharing & Backup Solutions",
            nl: "Lokale file-sharing & back-upoplossingen",
          },
          {
            en: "Employee Monitoring & IT Policies",
            nl: "Medewerkersmonitoring & IT-beleid",
          },
          {
            en: "IT Procurement & Asset Management",
            nl: "IT-inkoop & assetmanagement",
          },
          {
            en: "IT Automation & AI/Cloud Setup (Bonus Skills)",
            nl: "IT-automatisering & AI/cloud-setup (bonusvaardigheden)",
          },
        ],
        requirements: [
          {
            en: "2-3 years of experience in IT administration, networking, and system management",
            nl: "2-3 jaar ervaring in IT-beheer, netwerken en systeembeheer",
          },
          {
            en: "Hands-on experience with Windows Server 2022, Active Directory, Microsoft Exchange Online, and file-sharing systems",
            nl: "Praktijkervaring met Windows Server 2022, Active Directory, Microsoft Exchange Online en file-sharing-systemen",
          },
          {
            en: "Strong knowledge of networking protocols, firewalls, and security best practices",
            nl: "Sterke kennis van netwerkprotocollen, firewalls en security best practices",
          },
          {
            en: "Proficiency in Apache Web Server and hosting React.js applications",
            nl: "Vaardigheid in Apache Web Server en het hosten van React.js-applicaties",
          },
          {
            en: "Experience with email security and spam filtering mechanisms (SPF, DKIM, DMARC)",
            nl: "Ervaring met e-mailbeveiliging en spamfiltermechanismen (SPF, DKIM, DMARC)",
          },
          {
            en: "Familiarity with Monitoring Solutions for activity monitoring and restriction",
            nl: "Bekendheid met monitoringoplossingen voor activiteitenmonitoring en -beperking",
          },
          {
            en: "Nice to Have: Ability to set up and maintain SMB/local file-sharing solutions",
            nl: "Nice to Have: Vermogen om SMB-/lokale file-sharing-oplossingen op te zetten en te onderhouden",
          },
          {
            en: "Nice to Have: Strong troubleshooting skills for hardware, software, and network issues",
            nl: "Nice to Have: Sterke troubleshootingsvaardigheden voor hardware-, software- en netwerkproblemen",
          },
          {
            en: "Nice to Have: Excellent documentation skills and ability to train employees on IT policies",
            nl: "Nice to Have: Uitstekende documentatievaardigheden en het vermogen om medewerkers te trainen in IT-beleid",
          },
        ],
      },
      {
        slug: "oracle-erp-consultant-specialist",
        title: {
          en: "Oracle ERP Consultant/Specialist",
          nl: "Oracle ERP Consultant/Specialist",
        },
        category: { en: "IT", nl: "IT" },
        type: { en: "Full-Time, Contract", nl: "Fulltime, Contract" },
        status: { en: "Active", nl: "Actief" },
        location: { en: "On-site", nl: "Op locatie" },
        description: {
          en: "At Staff Outsourcing, we pride ourselves on being a trusted partner for businesses seeking strategic guidance and innovative solutions, delivering tailored Oracle SCM strategies that drive operational excellence and sustainable growth.",
          nl: "Bij Staff Outsourcing zijn we trots op ons vermogen om een vertrouwde partner te zijn voor bedrijven die strategische begeleiding en innovatieve oplossingen zoeken, met op maat gemaakte Oracle SCM-strategieÃ«n die operationele excellentie en duurzame groei stimuleren.",
        },
        responsibilities: [
          {
            en: "Liaising with customers and colleagues for consultation, requirements gathering, design, implementation, and ongoing support of Oracle SCM solutions",
            nl: "Contact onderhouden met klanten en collega's voor consultatie, requirements gathering, ontwerp, implementatie en doorlopende ondersteuning van Oracle SCM-oplossingen",
          },
          {
            en: "Assisting customers with analyzing, designing, testing, and deploying Oracle SCM enhancements, reports, and application updates",
            nl: "Klanten ondersteunen bij het analyseren, ontwerpen, testen en uitrollen van Oracle SCM-verbeteringen, rapporten en applicatie-updates",
          },
          {
            en: "Requirements elicitation, specification & fit-gap analysis",
            nl: "Requirements ophalen, specificeren & fit-gap analyse",
          },
          {
            en: "Business process modelling and specification",
            nl: "Bedrijfsprocesmodellering en -specificatie",
          },
          {
            en: "Functional design specification for customizations and enhancements, including interfaces and reports",
            nl: "Functioneel ontwerp voor aanpassingen en verbeteringen, inclusief interfaces en rapporten",
          },
          {
            en: "Data conversion design, security design and build",
            nl: "Ontwerp van dataconversie, beveiligingsontwerp en bouw",
          },
          {
            en: "Test planning, preparation, execution, and defect management, including issue and risk management",
            nl: "Testplanning, voorbereiding, uitvoering en defectmanagement, inclusief issue- en risicomanagement",
          },
          {
            en: "Quality management: reviewing key deliverables and ensuring adherence to scope, standards, and procedures",
            nl: "Kwaliteitsmanagement: beoordelen van belangrijke opleverproducten en zorgen voor naleving van scope, normen en procedures",
          },
        ],
        requirements: [
          {
            en: "Excellent critical thinking, interpersonal, communication, and problem-solving skills",
            nl: "Uitstekend kritisch denkvermogen, interpersoonlijke, communicatieve en probleemoplossende vaardigheden",
          },
          {
            en: "Good understanding of gap analysis, ERP, and test scripts",
            nl: "Goed begrip van gap-analyse, ERP en testscripts",
          },
          {
            en: "Understanding of business requirements and business processes, with willingness to learn and grow",
            nl: "Begrip van bedrijfsvereisten en bedrijfsprocessen, met bereidheid om te leren en te groeien",
          },
          {
            en: "Strong experience in MS Excel",
            nl: "Sterke ervaring met MS Excel",
          },
          {
            en: "Ability to multitask with excellent communication skills in a fast-paced environment",
            nl: "Vermogen om te multitasken met uitstekende communicatieve vaardigheden in een snel tempo",
          },
          {
            en: "Ability to work independently",
            nl: "Vermogen om zelfstandig te werken",
          },
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
          {
            en: "Oversee all IT systems, including ERP, WMS, CRM, POS, and cloud services",
            nl: "Toezicht houden op alle IT-systemen, waaronder ERP, WMS, CRM, POS en cloudservices",
          },
          {
            en: "Ensure network stability, data security, and seamless system performance across locations",
            nl: "Zorgen voor netwerkstabiliteit, gegevensbeveiliging en naadloze systeemprestaties op alle locaties",
          },
          {
            en: "Lead system monitoring, troubleshooting, and disaster recovery protocols",
            nl: "Leiden van systeemmonitoring, troubleshooting en disaster recovery protocollen",
          },
        ],
        requirements: [
          {
            en: "Minimum 5 years in IT management, preferably in logistics, e-commerce, or retail sectors",
            nl: "Minimaal 5 jaar ervaring in IT-management, bij voorkeur in logistiek, e-commerce of retail",
          },
          {
            en: "Hands-on experience with ERP and WMS systems; Oracle, SAP, or NetSuite preferred",
            nl: "Praktijkervaring met ERP- en WMS-systemen; Oracle, SAP of NetSuite heeft de voorkeur",
          },
          {
            en: "Background in managing cloud infrastructure, security, and vendor networks",
            nl: "Achtergrond in het beheren van cloudinfrastructuur, beveiliging en leveranciersnetwerken",
          },
          {
            en: "Strong analytical and troubleshooting skills",
            nl: "Sterke analytische en troubleshootingvaardigheden",
          },
          {
            en: "Proven leadership in IT project delivery",
            nl: "Bewezen leiderschap in het opleveren van IT-projecten",
          },
          {
            en: "Confident in cross-functional communication and stakeholder engagement",
            nl: "Zelfverzekerd in cross-functionele communicatie en stakeholderbetrokkenheid",
          },
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
          {
            en: "Develop and integrate AI/LLM-based features",
            nl: "Ontwikkelen en integreren van AI/LLM-gebaseerde functies",
          },
          {
            en: "Prototype and test AI models",
            nl: "Prototyperen en testen van AI-modellen",
          },
          {
            en: "Collaborate with product and engineering teams",
            nl: "Samenwerken met product- en engineeringteams",
          },
        ],
        requirements: [
          {
            en: "Experience with AI/ML frameworks",
            nl: "Ervaring met AI/ML-frameworks",
          },
          {
            en: "Strong programming skills (Python/JS)",
            nl: "Sterke programmeervaardigheden (Python/JS)",
          },
          {
            en: "Familiarity with LLM APIs is a plus",
            nl: "Bekendheid met LLM-API's is een prÃ©",
          },
        ],
      },
      {
        slug: "ai-development-intern",
        title: { en: "AI Development Intern", nl: "AI Development Intern" },
        category: { en: "Engineering", nl: "Engineering" },
        type: { en: "Internship", nl: "Stage" },
        status: { en: "Active", nl: "Actief" },
        location: {
          en: "Staff Outsourcing, Mandenmakerstraat 100C, 3194 DG Hoogvliet Rotterdam, Netherlands",
          nl: "Staff Outsourcing, Mandenmakerstraat 100C, 3194 DG Hoogvliet Rotterdam, Nederland",
        },
        description: {
          en: "Location: Staff Outsourcing, Mandenmakerstraat 100C, 3194 DG Hoogvliet Rotterdam, Netherlands. Work Type: Internship. What We Offer: Learning & Support â€“ Direct mentorship from seasoned AI developers, providing invaluable guidance and a structured learning experience on real-world projects. Flexibility & Team Exposure â€“ An on-site role within a collaborative team environment, offering daily interaction and exposure to diverse perspectives and cutting-edge technologies. Growth & Career Development â€“ Hands-on experience that builds a robust foundation for a career in AI, coupled with opportunities for professional coaching and insights into potential future roles. How to Apply: Interested candidates are invited to submit their application directly via the link below: https://talentgenie.vercel.app/careers/24",
          nl: "Locatie: Staff Outsourcing, Mandenmakerstraat 100C, 3194 DG Hoogvliet Rotterdam, Nederland. Werktype: Stage. Wat wij bieden: Leren & ondersteuning â€“ Directe begeleiding van ervaren AI-ontwikkelaars, met waardevolle begeleiding en een gestructureerde leerervaring op real-world projecten. Flexibiliteit & teamexposure â€“ Een on-site rol binnen een collaboratieve teamomgeving, met dagelijkse interactie en exposure aan diverse perspectieven en cutting-edge technologieÃ«n. Groei & loopbaanontwikkeling â€“ Praktijkervaring die een solide basis legt voor een carriÃ¨re in AI, gecombineerd met mogelijkheden voor professionele coaching en inzicht in potentiÃ«le toekomstige rollen. Solliciteren: GeÃ¯nteresseerde kandidaten worden uitgenodigd om hun sollicitatie rechtstreeks via onderstaande link in te dienen: https://talentgenie.vercel.app/careers/24",
        },
        responsibilities: [
          {
            en: "AI Model Development: Assist in the design, development, and implementation of Artificial Intelligence and Machine Learning models",
            nl: "AI-modelontwikkeling: Assisteren bij het ontwerpen, ontwikkelen en implementeren van Artificial Intelligence- en Machine Learning-modellen",
          },
          {
            en: "Application Building: Contribute to the creation and optimization of AI-powered applications and intelligent solutions",
            nl: "Applicatiebouw: Bijdragen aan het creÃ«ren en optimaliseren van AI-gedreven applicaties en intelligente oplossingen",
          },
          {
            en: "LLM Integration: Work with Large Language Models (LLMs) to explore and implement innovative use cases for business process automation",
            nl: "LLM-integratie: Werken met Large Language Models (LLM's) om innovatieve use cases voor bedrijfsprocesautomatisering te verkennen en implementeren",
          },
          {
            en: "Project Participation: Actively participate in the full lifecycle of AI projects, from conceptualization to deployment and optimization",
            nl: "Projectdeelname: Actief deelnemen aan de volledige levenscyclus van AI-projecten, van conceptualisering tot deployment en optimalisatie",
          },
          {
            en: "Research & Exploration: Conduct research on emerging AI technologies and methodologies to inform project development and strategies",
            nl: "Onderzoek & verkenning: Onderzoek doen naar opkomende AI-technologieÃ«n en -methodologieÃ«n om projectontwikkeling en -strategieÃ«n te onderbouwen",
          },
        ],
        requirements: [
          {
            en: "Experience: A strong interest in Artificial Intelligence, Machine Learning, and software development, demonstrated through academic projects, coursework, or personal initiatives",
            nl: "Ervaring: Een sterke interesse in Artificial Intelligence, Machine Learning en softwareontwikkeling, aangetoond via academische projecten, vakken of persoonlijke initiatieven",
          },
          {
            en: "Education: Currently pursuing a Bachelor's or Master's degree in Computer Science, Artificial Intelligence, Machine Learning, Data Science, or a closely related technical field",
            nl: "Opleiding: Momenteel bezig met een bachelor- of masteropleiding in Computer Science, Artificial Intelligence, Machine Learning, Data Science of een nauw verwant technisch vakgebied",
          },
          {
            en: "Technical Skills: Familiarity with programming languages such as Python; understanding of machine learning concepts and frameworks (e.g., TensorFlow, PyTorch); basic knowledge of data structures and algorithms. Exposure to Large Language Models (LLMs) is a plus",
            nl: "Technische vaardigheden: Bekendheid met programmeertalen zoals Python; begrip van machine learning-concepten en -frameworks (bijv. TensorFlow, PyTorch); basiskennis van datastructuren en algoritmen. Exposure aan Large Language Models (LLM's) is een prÃ©",
          },
          {
            en: "Soft Skills: Excellent problem-solving abilities, eagerness to learn, strong analytical thinking, and effective communication skills to collaborate within a team environment",
            nl: "Soft skills: Uitstekende probleemoplossende vaardigheden, leergierigheid, sterk analytisch denken en effectieve communicatieve vaardigheden om binnen een teamomgeving samen te werken",
          },
        ],
      },
    ],
  },
];

// Flat list â€” useful for lookups, generateStaticParams, search, etc.
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
