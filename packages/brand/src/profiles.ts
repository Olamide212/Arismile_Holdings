import type { SubsidiarySlug } from "./index";

/*
 * Verified subsidiary copy shared by the Holdings site and each subsidiary
 * site. Taken from the subsidiary pages on https://arismile.ng (services come
 * from its database, intros/statements from its page bundles). Lines marked
 * "original site" come from https://arismile.com.ng. Images are not stored
 * here: every app owns its own imagery.
 */

export interface SubsidiaryService {
  title: string;
  description: string;
  points?: string[];
}

export interface ContentBlock {
  title: string;
  body: string;
  label?: string;
}

export interface ContentGroup {
  heading: string;
  intro?: string;
  items: ContentBlock[];
}

export interface SubsidiaryProfile {
  /** Short description for cards and meta descriptions. */
  summary: string;
  intro: string[];
  services: SubsidiaryService[];
  /** Mission, vision and similar statements. */
  statements?: ContentBlock[];
  groups?: ContentGroup[];
  /** Plain list sections carried over from the original site. */
  lists?: { heading: string; items: string[] }[];
}

export const subsidiaryProfiles: Record<SubsidiarySlug, SubsidiaryProfile> = {
  "nine-town": {
    summary:
      "A flagship subsidiary of Arismile Holdings and a premier powerhouse in large-scale infrastructure, high-value real estate, and sophisticated civil engineering.",
    intro: [
      "9-TOWN Nigeria Limited, a flagship subsidiary of Arismile Holdings, is a premier powerhouse in large-scale infrastructure, high-value real estate, and sophisticated civil engineering. Founded on the pillars of structural integrity and visionary design, we deliver iconic developments that redefine the skylines and economic landscapes of sub-Saharan Africa.",
      "As a vertically integrated leader in the built-environment sector, 9-TOWN synthesizes world-class technical expertise with a deep commitment to sustainable urbanism. We do more than construct buildings; we engineer the vital ecosystems that sustain modern commerce and community life. Our mission is to bridge the gap between complex architectural vision and flawless structural execution, delivering institutional-grade assets that provide enduring value for stakeholders and the public sector alike.",
    ],
    services: [
      {
        title: "Large-Scale Civil Infrastructure",
        description:
          "Orchestrating the design and execution of critical public works, including highway networks, bridges, and municipal utility systems that form the backbone of national development.",
        points: [
          "Multi-Level Interchanges & Expressways",
          "Suspension and Cable-Stayed Bridges",
          "Integrated Drainage & Sewage Systems",
        ],
      },
      {
        title: "Prime Residential & Commercial Real Estate",
        description:
          "Developing high-performance vertical assets, luxury residential enclaves, and premium Grade-A office spaces that integrate modern aesthetics with smart-building technologies.",
        points: ["Mixed-Use Skyscrapers", "Smart-Integrated Office Parks", "Gated Residential Communities"],
      },
      {
        title: "Urban Master Planning & Site Development",
        description:
          "Leading the strategic transformation of raw acreage into integrated 'live-work-play' ecosystems through sophisticated land use planning and site engineering.",
        points: ["Transit-Oriented Developments", "Greenfield Industrial Clusters", "Public Realm Design"],
      },
      {
        title: "Engineering, Procurement, and Construction (EPC) Management",
        description:
          "Providing comprehensive project management that harmonizes high-tier procurement with rigorous on-site technical supervision to ensure projects are delivered on time, within budget, and above global safety standards.",
      },
      {
        title: "Property Portfolio Management & Strategic Advisory",
        description:
          "Maximizing the long-term yield of real estate assets through expert facility management, tenant relations, and capital appreciation strategies.",
        points: [
          "Asset Lifecycle Analysis",
          "Tenant Experience Management",
          "Divestment and Reinvestment Strategy",
        ],
      },
    ],
    lists: [
      {
        // Original site: "Areas" list on /9town-nigeria-limited/.
        heading: "Areas We Serve",
        items: [
          "Factories & Industrial Facilities",
          "Educational & Cultural Buildings",
          "Residences & Villas",
          "Administrative Buildings & Office Blocks",
          "Shops & Shopping Centers",
          "Showrooms",
          "Hotels",
          "Hydroelectric Power Plants",
          "Thermal Power Plants",
          "Wind Energy Plants",
          "Solar Panels",
        ],
      },
    ],
  },

  oceania: {
    summary:
      "An integrated suite of world-class solutions engineered to meet the rigorous demands of the modern Oil & Gas and marine sectors.",
    intro: [
      "OCEANIA, a core subsidiary of the Arismile Holdings conglomerate, stands as a premier sentinel of industrial excellence within the global energy and maritime corridors. We provide an integrated suite of world-class solutions engineered to meet the rigorous demands of the modern Oil & Gas and marine sectors.",
      "Driven by a culture of technical mastery and innovative disruption, OCEANIA empowers partners to navigate the complexities of offshore and onshore operations with unrivaled precision. By synthesizing deep-domain expertise with advanced risk-mitigation frameworks, we don’t merely optimize costs - we fortify operational integrity and deliver the strategic control necessary for high-stakes energy transition and maritime commerce.",
    ],
    services: [
      {
        title: "Integrated Marine Engineering",
        description:
          "Delivering bespoke structural and mechanical engineering solutions, vessel maintenance, and offshore fleet management designed for maximum uptime and sea-readiness.",
      },
      {
        title: "Upstream & Midstream Support",
        description:
          "Providing high-tier technical services to the Oil & Gas sector, including subsea engineering, pipeline integrity management, and sophisticated procurement for energy infrastructure.",
      },
      {
        title: "Offshore Logistics & Asset Protection",
        description:
          "Orchestrating complex supply chain movements and specialized marine logistics to ensure the seamless flow of resources in challenging offshore environments.",
      },
      {
        title: "Risk Mitigation & Technical Advisory",
        description:
          "Utilizing advanced analytics and expert-driven insights to reduce operational exposure, ensuring compliance with global safety standards and environmental regulations.",
      },
      {
        title: "Strategic Infrastructure Development",
        description:
          "From port facility management to energy terminal construction, we engineer the physical foundations that drive international trade and energy security.",
      },
    ],
  },

  "datu-kalinga": {
    summary:
      "A diversified mining and industrial powerhouse dedicated to the sustainable extraction and processing of critical solid minerals.",
    intro: [
      "DATU KALINGA NIGERIA LIMITED is a diversified mining and industrial powerhouse dedicated to the sustainable extraction and processing of critical solid minerals. Built on a foundation of technical excellence and strategic international collaboration, we possess the institutional capacity to execute complex, large-scale projects that drive the global industrial value chain.",
      "Our evolution is defined by a relentless pursuit of operational sophistication. By integrating advanced geophysical technologies with robust project management frameworks, DATU KALINGA has established a reputation for reliability, precision, and world-class execution. We operate at the intersection of resource wealth and technological innovation, ensuring that our activities—spanning from mineral extraction to green energy integration—contribute to both national prosperity and global resource security.",
    ],
    services: [
      {
        title: "Exploration & Mineral Analytics",
        description:
          "Utilizing state-of-the-art geological mapping and satellite imagery to identify and quantify high-yield mineral deposits with surgical precision.",
      },
      {
        title: "Full-Scale Mining Operations",
        description:
          "Executing comprehensive extraction strategies for a diverse portfolio of solid minerals, underpinned by world-class safety protocols and high-efficiency machinery.",
      },
      {
        title: "Mine Engineering & Heavy Construction",
        description:
          "Designing and deploying specialized infrastructure, from pit-to-port logistics networks to complex mine-site civil works.",
      },
      {
        title: "Green Energy & Sustainable Power",
        description:
          "Orchestrating captive power solutions and renewable energy integrations to ensure carbon-efficient and self-sustaining industrial operations.",
      },
      {
        title: "Agro-Allied Industrialization",
        description:
          "Leveraging land assets through sophisticated agricultural value-chain projects, ensuring holistic land use and post-mining environmental restoration.",
      },
      {
        title: "ESG & Environmental Stewardship",
        description:
          "Maintaining rigorous Environmental, Social, and Governance (ESG) standards, prioritizing biodiversity, occupational health, and community empowerment.",
      },
    ],
    statements: [
      {
        title: "Our Assets",
        body: "In DATU- KALINGA NIGERIA LIMITED we are driven by the specific goal for our clients. Delivering top value for every project is the foundation of our business.",
      },
      {
        title: "Our Mission",
        body: "To give value added services in the engineering industries and building construction, through unparalleled professionalisms and core value practices.",
      },
      {
        title: "Our Vision",
        body: "Building a wholly indigenous company that can compete on the global scale with all the major players in the construction industry.",
      },
      {
        // Original site: QHSE statement on /datu-kalinga/.
        title: "QHSE",
        body: "Datu (Kalinga) is fully committed to achieving zero injuries, work related ill health and hazardous occurrences. We ensure the safety of employees, protecting the environment, and maintaining the quality of products or services.",
      },
    ],
  },

  "mind-age": {
    summary:
      "A premier technology institution dedicated to catalyzing organizational growth through the deployment of next-generation digital ecosystems.",
    intro: [
      "MINDAGE, a flagship subsidiary of Arismile Holdings, is a premier technology institution dedicated to catalyzing organizational growth through the deployment of next-generation digital ecosystems. At the intersection of innovation and operational excellence, we leverage state-of-the-art infrastructure and intelligent management frameworks to unlock latent value and drive sustainable wealth creation.",
      "In an era defined by rapid technological convergence, MINDAGE serves as a strategic architect for progress - transforming complex data into actionable intelligence and legacy systems into agile, future-ready platforms. We don't just implement technology; we engineer the competitive advantage that defines the modern enterprise.",
    ],
    services: [
      {
        title: "Enterprise Software & Systems Engineering",
        description:
          "Architecting bespoke software solutions and scalable applications designed to streamline complex business logic and enhance user experience.",
      },
      {
        title: "Intelligent Data Ecosystems",
        description:
          "Developing high-performance, autonomous database architectures that leverage AI-driven analytics to provide real-time strategic insights.",
      },
      {
        title: "Web Architecture & Digital Experience (DX)",
        description:
          "Crafting immersive, high-conversion digital interfaces that blend sophisticated UI/UX design with robust back-end security.",
      },
      {
        title: "Cyber-Physical Security & Integrated Protection",
        description:
          "A specialized division providing high-level digital asset fortification alongside elite, tech-augmented security personnel for comprehensive operational continuity.",
      },
      {
        title: "IT Infrastructure & Strategic Consulting",
        description:
          "Delivering the backbone of modern industry - from cloud integration and network optimization to high-level technical advisory and systems auditing.",
      },
    ],
  },

  "arismile-advisory": {
    summary:
      "A cornerstone financial advisory institution dedicated to the strategic orchestration of capital, investments, and long-term fiscal resilience.",
    intro: [
      "Arismile Advisory is a cornerstone financial advisory institution dedicated to the strategic orchestration of capital, investments, and long-term fiscal resilience. We serve as the primary fiduciary partner for a sophisticated clientele of individuals and enterprises, delivering bespoke guidance engineered to master the complexities of the modern global economy.",
      "Our philosophy transcends traditional consulting; we integrate deep market intelligence with advanced financial modeling to construct robust wealth ecosystems. By synthesizing visionary strategy with meticulous execution, Arismile Advisory ensures that our clients are not merely prepared for the future, but are actively architecting it—driving sustainability, maximizing portfolio performance, and securing a legacy of transgenerational prosperity.",
    ],
    services: [
      {
        title: "Bespoke Financial Architecture",
        description:
          "Crafting holistic, data-driven financial roadmaps that align immediate operational needs with long-term capital objectives.",
      },
      {
        title: "Active Investment Management",
        description:
          "Executing sophisticated portfolio strategies across diversified asset classes to maximize risk-adjusted returns and preserve capital in volatile markets.",
      },
      {
        title: "Strategic Tax Optimization",
        description:
          "Leveraging advanced fiscal frameworks to enhance tax efficiency and protect bottom-line performance for both corporate structures and private estates.",
      },
      {
        title: "Retirement & Liquidity Planning",
        description:
          "Engineering comprehensive exit strategies and retirement vehicles designed to ensure continuous liquidity and lifestyle continuity.",
      },
      {
        title: "Estate & Legacy Planning",
        description:
          "Securing the seamless transfer of wealth through robust structural vehicles, ensuring that institutional and family legacies are fortified against future contingencies.",
      },
      {
        title: "Corporate Capital Advisory",
        description:
          "Strengthening organizational balance sheets and preparing enterprises for Tier-1 investment opportunities through rigorous structural auditing and performance enhancement.",
      },
    ],
    statements: [
      {
        title: "Our Mission",
        body: "To provide strategic, financial, and business advisory services that empower organizations to grow sustainably, improve efficiency, and make informed decisions that create lasting value in the global market.",
      },
      {
        title: "Our Vision",
        body: "To be the leading advisory partner in Africa, recognized for our ability to unlock complex financial challenges and drive transformative growth for businesses across all sectors.",
      },
      {
        title: "Our Assets",
        body: "Our greatest asset is our people, expertise, and the trust we build with clients. We combine deep industry knowledge, strategic thinking, and a commitment to excellence to deliver meaningful results for every organization we partner with.",
      },
    ],
  },

  "cadillac-security": {
    summary:
      "A foremost premium private security organization engineered to mitigate risks and protect high-value assets in an increasingly complex global environment.",
    intro: [
      "Cadillac Security Services Limited is a foremost premium private security organization engineered to mitigate risks and protect high-value assets in an increasingly complex global environment.",
      "Established to redefine the benchmarks of private security across Africa, we bridge the gap between local operational realities and international operational standards.",
      "From high-threat VIP protection and diplomatic escorts to maritime, corporate, and critical national infrastructure defense, Cadillac Security Services Limited delivers absolute peace of mind through elite tactical intelligence, advanced technology, and highly trained security personnel.",
    ],
    services: [
      {
        title: "Executive & VIP Protection (Elite Shield Division)",
        description:
          "We specialize in high-tier close protection services for foreign dignitaries, corporate executives, diplomats, and high-net-worth individuals navigating the unique security landscapes of West Africa and the wider Sub-Saharan region.",
        points: [
          "Close Protection Officers (CPOs): Elite personnel drawn from backgrounds in state intelligence, military special forces, and specialized tactical police units.",
          "Armed Escort & Secure Logistics: Motorcades equipped with armored vehicles (B6/B7 ballistic standard), advanced vehicle tracking, and low-profile tactical drivers.",
          "Threat & Route Intelligence: Real-time reconnaissance and advance-team mapping before principal arrival.",
        ],
      },
      {
        title: "Manned Guarding & Corporate Security",
        description:
          "Providing a visible, highly disciplined deterrent for commercial, residential, and industrial assets.",
        points: [
          "Vetted & Trained Guard Force: Personnel subjected to stringent background checks, psychological evaluation, and continuous training in counter-terrorism, crowd control, and first aid.",
          "Access Control & Asset Protection: Implementation of rigid physical security protocols for multi-tenant corporate offices, diplomatic missions, and industrial complexes.",
        ],
      },
      {
        title: "Maritime & Critical Infrastructure Defense",
        description:
          "Tailored security architectures for high-risk economic zones, including the oil and gas sector, maritime ports, and mining concessions across the sub-continent.",
        points: [
          "Vessel & Offshore Asset Protection: Security escorts, anti-piracy solutions, and asset hardening in accordance with ISPS Code standards.",
          "Industrial Facility Hardening: Perimeter intrusion detection systems, remote monitoring, and rapid response coordination for remote installations.",
        ],
      },
      {
        title: "Electronic Security & Technical Intelligence",
        description: "Integrating cutting-edge tech to create automated, impenetrable barriers.",
        points: [
          "Command & Control Centers (C4i): 24/7 centralized monitoring utilizing AI-powered CCTV analytics, remote access control, and real-time asset tracking.",
          "Early Warning Systems: Deployment of seismic perimeter sensors, thermal imaging, and biometric identification frameworks.",
        ],
      },
    ],
    statements: [
      {
        title: "Mission Statement",
        body: "To deliver world-class, multi-dimensional security solutions across Nigeria and Sub-Saharan Africa by integrating elite tactical intelligence, advanced technology, and uncompromising international best practices.",
      },
      {
        title: "Pan-African Footprint & Operational Philosophy",
        body: "Cadillac Security Services Limited does not just operate within borders; we understand the fluid nature of regional risks. With our corporate headquarters strategically positioned in Nigeria, we maintain operational agility and cross-border partnerships that allow us to seamlessly manage transit, assets, and personnel throughout Sub-Saharan Africa. Our framework perfectly aligns with international protocols, including the Voluntary Principles on Security and Human Rights (VPSHR), ensuring that our clients receive security that is effective, legally sound, and globally respected.",
      },
    ],
    groups: [
      {
        heading: "Corporate Creed & Values",
        intro:
          "Our operational philosophy is built on five strategic pillars that ensure Cadillac Security Services remains the trusted shield for corporations, governments, diplomatic missions, and high-value individuals across Africa.",
        items: [
          {
            title: "Integrity First",
            body: "Uncompromising adherence to ethical practices, strict confidentiality, and full legal compliance across every operation and client engagement.",
          },
          {
            title: "Global Standards",
            body: "Operating within internationally recognized frameworks, including ISO security benchmarks and VPSHR operational principles.",
          },
          {
            title: "Tactical Precision",
            body: "Deploying rigorously trained personnel supported by advanced intelligence systems and data-driven operational execution.",
          },
          {
            title: "Proactive Resilience",
            body: "Shifting security from reactive response models to proactive threat deterrence, prevention, and rapid mitigation strategies.",
          },
          {
            title: "Pan-African Agility",
            body: "Maintaining rapid deployment capability across diverse terrains, jurisdictions, and high-risk operational environments in Sub-Saharan Africa.",
          },
        ],
      },
      {
        heading: "Operational Methodology",
        intro:
          "Our operational methodology combines intelligence, elite personnel, advanced technology, and rapid tactical response to deliver unmatched security solutions across high-risk environments.",
        items: [
          {
            label: "Phase 1",
            title: "Threat Vulnerability Assessment",
            body: "Before deployment, our intelligence teams conduct comprehensive data-driven risk assessments across assets, operational routes, and critical infrastructure to uncover hidden vulnerabilities and exposure points.",
          },
          {
            label: "Phase 2",
            title: "Security Architecture Engineering",
            body: "We design bespoke hybrid security frameworks that combine elite manpower, tactical intelligence, and advanced surveillance technology tailored to regional threat environments.",
          },
          {
            label: "Phase 3",
            title: "Rigorous Personnel Vetting",
            body: "Only carefully selected operators with verified forensic, psychological, tactical, and professional credentials are assigned to sensitive operations and high-risk deployments.",
          },
          {
            label: "Phase 4",
            title: "24/7 Monitoring & Rapid Response",
            body: "Every deployed security element is integrated into our centralized command infrastructure for real-time oversight, tactical reinforcement, and uninterrupted operational protection.",
          },
        ],
      },
    ],
  },

  "petogas-limited": {
    summary:
      "A premier, wholly indigenous energy corporation dedicated to the efficient distribution and marketing of refined petroleum products across Nigeria’s vital economic corridors.",
    intro: [
      "Petogas Limited is a premier, wholly indigenous energy corporation dedicated to the efficient distribution and marketing of refined petroleum products across Nigeria’s vital economic corridors. As a cornerstone of the downstream value chain, we bridge the gap between energy supply and industrial demand through a robust logistical framework that powers households, transportation networks, and the engines of national commerce.",
      "Founded on the principles of transparency, safety, and operational precision, Petogas Limited has emerged as a formidable force in the Nigerian energy sector. Our identity is defined by a deep-rooted commitment to local content development, synthesized with international benchmarks for downstream excellence.",
      "As a contemporary energy partner, we recognize the new reality of the global energy transition. Consequently, Petogas operates at the intersection of traditional reliability and future-ready innovation. Our leadership team brings decades of cumulative experience in petroleum logistics, retail management, and strategic asset optimization, ensuring that every drop of product we manage meets the most rigorous standards of quality and volume integrity.",
    ],
    services: [
      {
        title: "Bulk Petroleum Distribution & Logistics",
        description:
          "We operate a high-performance fleet and strategic storage partnerships to facilitate the large-scale movement of Premium Motor Spirit (PMS), Automotive Gas Oil (AGO), and Dual Purpose Kerosene (DPK) to key industrial hubs and retail outlets.",
      },
      {
        title: "Retail Station Management & Optimization",
        description:
          "Our network of service stations represents the gold standard in retail excellence. We focus on ‘The Petogas Experience’, ensuring that every customer interaction is defined by speed, accuracy, and superior service delivery.",
      },
      {
        title: "Industrial & Commercial Fuel Supply",
        description:
          "Providing bespoke energy solutions for the manufacturing, construction, and telecommunications sectors. We offer turnkey fuel management systems that allow organizations to focus on their core business while we handle the complexities of energy procurement.",
      },
      {
        title: "Lubricants & Specialized Fluid Marketing",
        description:
          "Beyond fuels, Petogas supplies a premium range of high-performance lubricants and industrial chemicals engineered to maximize the lifespan and efficiency of modern machinery and automotive engines.",
      },
      {
        title: "Technical Advisory & Fuel Management Systems",
        description:
          "Leveraging data-driven insights to help institutional clients optimize their fuel consumption, reduce waste, and improve the bottom-line performance of their energy intensive operations.",
      },
    ],
    groups: [
      {
        heading: "Our Commitments",
        items: [
          {
            title: "Operational Resilience",
            body: "A seamless supply chain engineered to withstand market volatility and ensure consistent product availability.",
          },
          {
            title: "Environmental Stewardship",
            body: "Adhering to the highest HSE (Health, Safety, and Environment) protocols to minimize our footprint and protect the communities we serve.",
          },
          {
            title: "Customer-Centric Innovation",
            body: "Utilizing digital monitoring and automated delivery systems to provide real-time transparency and efficiency for our B2B and retail clients.",
          },
        ],
      },
    ],
  },
};
