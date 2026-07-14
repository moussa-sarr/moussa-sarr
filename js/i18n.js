/**
 * i18n.js — Internationalisation du portfolio Moussa Sarr
 * Toutes les chaînes visibles vivent ici. Aucun texte n'est codé en dur
 * dans le HTML (hors éléments purement structurels / iconographie).
 * Ajouter une langue = ajouter une clé ici + un bouton dans le sélecteur.
 */
const I18N = {
  fr: {
    meta: {
      title: "Moussa Sarr — Administrateur Systèmes & Réseaux Senior | Futur DSI",
      description: "Portfolio de Moussa Sarr, Administrateur Systèmes & Réseaux Senior spécialisé Cloud, Infrastructure et Cybersécurité. Casablanca, Maroc."
    },
    nav: {
      home: "Accueil", about: "À propos", experience: "Expérience", skills: "Compétences",
      architecture: "Architecture", projects: "Projets", certifications: "Certifications",
      blog: "Blog", contact: "Contact", cv: "Télécharger le CV", recruiter: "Je suis recruteur"
    },
    hero: {
      kicker: "keep in touch",
      roles: ["Cloud Engineer", "Infrastructure Engineer", "Systems Administrator", "Cybersecurity Specialist", "IT Infrastructure Expert", "Futur DSI"],
      tagline: "Transformer la technologie en levier de performance, de sécurité et de croissance.",
      ctaPrimary: "Télécharger mon CV",
      ctaSecondary: "Me contacter",
      scroll: "Découvrir"
    },
    kpi: {
      title: "En chiffres",
      items: [
        { num: "4", suffix: "+", label: "Ans d'expérience IT" },
        { num: "99.9", suffix: "%", label: "Disponibilité infrastructure" },
        { num: "10", suffix: "+", label: "Automatisations déployées" },
        { num: "3", suffix: "", label: "Entreprises accompagnées" },
        { num: "24", suffix: "/7", label: "Supervision & astreinte" },
        { num: "0", suffix: "", label: "Incident critique non résolu" }
      ]
    },
    about: {
      eyebrow: "Qui suis-je",
      title: "Un pilote d'infrastructure, pas un simple technicien",
      p1: "Je conçois, sécurise et fais évoluer des systèmes d'information exigeants — là où la disponibilité, la performance et la conformité ne sont pas négociables. Mon terrain : les infrastructures Windows & cloud hybrides, la cybersécurité opérationnelle et la gouvernance IT.",
      p2: "Après plusieurs années au contact d'environnements critiques (logistique internationale, télécoms), j'ai développé une conviction simple : la technique n'a de valeur que si elle sert une ambition business claire — continuité de service, réduction des risques, maîtrise des coûts.",
      p3: "Ce qui me motive : transformer des systèmes fragiles en infrastructures résilientes, et accompagner les organisations dans leur montée en maturité IT jusqu'au pilotage stratégique.",
      pillars: [
        { h: "Vision", p: "Aligner l'IT sur la stratégie de l'entreprise, pas l'inverse." },
        { h: "Méthode", p: "Documenter, standardiser, automatiser avant de faire évoluer." },
        { h: "Leadership", p: "Coordonner des équipes multi-métiers autour d'objectifs communs." },
        { h: "Différenciation", p: "Une double culture terrain et gouvernance, rare et recherchée." }
      ]
    },
    vision: {
      eyebrow: "Vision",
      title: "Le discours d'un futur DSI",
      p: "La transformation numérique ne se résume pas à migrer vers le cloud. C'est repenser la manière dont l'IT crée de la valeur : automatisation des tâches répétitives, cybersécurité intégrée dès la conception, pilotage par la donnée et intelligence artificielle au service de la décision.",
      items: [
        { h: "Cloud & hybridation", p: "Architecturer des environnements Azure/M365 robustes, réversibles et coût-maîtrisé." },
        { h: "Cybersécurité by design", p: "Intégrer Zero Trust et gestion des risques dans chaque décision technique." },
        { h: "Automatisation & IA", p: "Réduire la charge opérationnelle pour concentrer l'expertise sur la valeur ajoutée." },
        { h: "Pilotage SI", p: "Transformer l'infrastructure en tableau de bord lisible pour la direction." }
      ]
    },
    values: {
      eyebrow: "Ce qui me définit",
      title: "Valeurs",
      items: [
        { h: "Excellence", p: "Un service qui ne transige pas sur la qualité." },
        { h: "Transparence", p: "Une communication claire, même quand ça ne va pas." },
        { h: "Innovation", p: "Tester, mesurer, adopter ce qui apporte une vraie valeur." },
        { h: "Fiabilité", p: "Être le premier appelé, et le premier rassurant." },
        { h: "Esprit d'équipe", p: "Aucune infrastructure ne se pilote seul." },
        { h: "Résilience", p: "Anticiper l'incident plutôt que le subir." },
        { h: "Amélioration continue", p: "Chaque post-mortem devient une action concrète." },
        { h: "Orientation client", p: "Le SI existe pour servir les utilisateurs, jamais l'inverse." }
      ]
    },
    timeline: {
      eyebrow: "Parcours",
      title: "Timeline professionnelle",
      items: [
        {
          date: "2025 — Aujourd'hui", role: "IT Coordinator", org: "Hapag-Lloyd",
          body: "Pilotage de l'infrastructure systèmes et réseaux d'un acteur majeur du transport maritime international : haute disponibilité, sécurité des accès et supervision multi-sites.",
          tags: ["Windows Server", "Azure", "Cybersécurité", "Supervision", "ITSM"], results: "99.9% de disponibilité maintenue sur les environnements critiques."
        },
        {
          date: "2025 — Aujourd'hui", role: "Systems & Network Administrator", org: "ARKAS Morocco",
          body: "Administration des systèmes et réseaux pour un groupe logistique international. Sécurisation des accès, automatisation des tâches récurrentes et amélioration continue du support.",
          tags: ["Active Directory", "Réseaux", "Automatisation", "Support N3"], results: "Réduction significative des interruptions de service grâce à une gestion proactive des incidents."
        },
        {
          date: "2023 — 2025", role: "IT Support Engineer", org: "Bouygues Telecom",
          body: "Support technique niveau expert dans un environnement télécom exigeant, avec forte volumétrie et exigence de réactivité.",
          tags: ["Réseaux Télécom", "Support N2/N3", "Supervision"], results: "Montée en compétence rapide sur des environnements à fort volume d'incidents."
        },
        {
          date: "2022 — 2023", role: "Freelance IT Support", org: "Indépendant",
          body: "Accompagnement de TPE/PME sur leurs problématiques systèmes, réseaux et sécurité informatique au quotidien.",
          tags: ["Windows", "Réseaux", "Sécurité", "Relation client"], results: "Premiers pas dans la gestion complète d'infrastructures clients, du diagnostic à la résolution."
        }
      ]
    },
    impact: {
      eyebrow: "Preuves", title: "Réalisations orientées business",
      items: [
        "Conception et administration d'infrastructures Windows garantissant la continuité de service et la disponibilité des applications critiques.",
        "Réduction des temps d'interruption grâce à une gestion proactive des incidents critiques.",
        "Automatisation de tâches récurrentes, libérant du temps pour des missions à plus forte valeur ajoutée.",
        "Sécurisation des accès et renforcement de la posture cybersécurité sur des environnements multi-sites.",
        "Optimisation des coûts d'infrastructure via une rationalisation des ressources cloud et on-premise.",
        "Coordination multi-équipes sur des projets d'évolution d'infrastructure sensibles.",
        "Support niveau expert sur des environnements critiques à forte exigence de disponibilité."
      ]
    },
    skills: {
      eyebrow: "Expertise", title: "Compétences",
      cats: {
        systemes: "Systèmes", reseaux: "Réseaux", cloud: "Cloud", cyber: "Cybersécurité", gouvernance: "Gouvernance & ITSM"
      },
      data: {
        systemes: [
          { name: "Windows Server", level: "Expert", usecase: "Conception, administration et durcissement d'environnements critiques." },
          { name: "Active Directory", level: "Expert", usecase: "Gouvernance des identités et des accès à l'échelle du groupe." },
          { name: "Virtualisation (Hyper-V)", level: "Avancé", usecase: "Consolidation de serveurs et plans de reprise." },
          { name: "PowerShell", level: "Avancé", usecase: "Automatisation des tâches d'administration récurrentes." }
        ],
        reseaux: [
          { name: "Architecture réseau", level: "Expert", usecase: "Conception LAN/WAN multi-sites sécurisée." },
          { name: "Firewall / VPN", level: "Avancé", usecase: "Sécurisation des accès distants et inter-sites." },
          { name: "DNS / DHCP", level: "Expert", usecase: "Fiabilisation des services réseau critiques." },
          { name: "Supervision réseau", level: "Avancé", usecase: "Détection proactive des dégradations de service." }
        ],
        cloud: [
          { name: "Microsoft Azure", level: "Avancé", usecase: "Architecture hybride et bascule progressive vers le cloud." },
          { name: "Microsoft 365", level: "Expert", usecase: "Gouvernance collaborative et sécurité des données." },
          { name: "AWS", level: "Intermédiaire", usecase: "Compréhension multi-cloud pour des choix d'architecture éclairés." },
          { name: "FinOps", level: "Intermédiaire", usecase: "Maîtrise et optimisation des coûts cloud." }
        ],
        cyber: [
          { name: "Zero Trust", level: "Avancé", usecase: "Conception d'une posture de sécurité moderne par segments." },
          { name: "Gestion des accès", level: "Expert", usecase: "Principe du moindre privilège appliqué à grande échelle." },
          { name: "Supervision sécurité (SOC)", level: "Avancé", usecase: "Détection et réponse aux incidents de sécurité." },
          { name: "ISO 27001 (démarche)", level: "Intermédiaire", usecase: "Structuration d'une démarche de conformité." }
        ],
        gouvernance: [
          { name: "ITIL", level: "Avancé", usecase: "Structuration des processus de support et de changement." },
          { name: "Gestion de projet IT", level: "Avancé", usecase: "Pilotage d'évolutions d'infrastructure sensibles." },
          { name: "Documentation & standards", level: "Expert", usecase: "Réduction du risque de dépendance individuelle." },
          { name: "PRA / PCA", level: "Avancé", usecase: "Conception de plans de continuité et de reprise d'activité." }
        ]
      }
    },
    architecture: {
      eyebrow: "Architecture SI", title: "Une infrastructure pensée bout en bout",
      p: "Explorez la chaîne d'architecture typique que je conçois et supervise, de l'utilisateur jusqu'au plan de reprise d'activité. Sélectionnez un composant pour en savoir plus.",
      nodes: [
        { name: "Utilisateurs", role: "Point d'entrée", desc: "Postes de travail, mobilité et accès distants sécurisés par authentification forte.", stack: ["MFA", "Intune", "Autopilot"] },
        { name: "Internet", role: "Connectivité", desc: "Liens opérateurs redondants pour garantir la continuité d'accès.", stack: ["BGP", "Redondance opérateur"] },
        { name: "Firewall", role: "Périmètre de sécurité", desc: "Filtrage du trafic entrant/sortant et premières règles de segmentation.", stack: ["Fortinet", "Règles NAT", "IPS/IDS"] },
        { name: "VPN", role: "Accès distant sécurisé", desc: "Tunnels chiffrés pour les collaborateurs et sites distants.", stack: ["IPsec", "SSL VPN"] },
        { name: "DMZ", role: "Zone démilitarisée", desc: "Isolation des services exposés du réseau interne sensible.", stack: ["Reverse proxy", "WAF"] },
        { name: "Reverse Proxy", role: "Répartition applicative", desc: "Routage sécurisé des requêtes vers les applications internes.", stack: ["NGINX", "TLS termination"] },
        { name: "Load Balancer", role: "Répartition de charge", desc: "Distribution du trafic pour garantir performance et disponibilité.", stack: ["HA Proxy", "Health checks"] },
        { name: "Serveurs / Cluster", role: "Couche applicative", desc: "Environnements applicatifs en haute disponibilité, tolérants à la panne.", stack: ["Windows Server", "Clustering"] },
        { name: "Virtualisation", role: "Consolidation", desc: "Optimisation des ressources matérielles et flexibilité de déploiement.", stack: ["Hyper-V", "VMware"] },
        { name: "Stockage", role: "Persistance des données", desc: "Stockage résilient avec réplication pour limiter la perte de données.", stack: ["SAN", "Réplication"] },
        { name: "Backup", role: "Sauvegarde", desc: "Politiques de sauvegarde testées régulièrement (3-2-1).", stack: ["Veeam", "Stratégie 3-2-1"] },
        { name: "Cloud Azure", role: "Extension hybride", desc: "Bascule progressive de charges vers le cloud pour la scalabilité.", stack: ["Azure IaaS/PaaS", "Hybrid Identity"] },
        { name: "Microsoft 365", role: "Collaboration", desc: "Suite collaborative gouvernée avec politiques de sécurité des données.", stack: ["Exchange Online", "SharePoint", "DLP"] },
        { name: "Supervision", role: "Observabilité", desc: "Détection proactive des anomalies avant impact utilisateur.", stack: ["SCOM", "Alerting"] },
        { name: "PRA", role: "Continuité d'activité", desc: "Plan de reprise testé garantissant un redémarrage maîtrisé après incident majeur.", stack: ["RTO/RPO", "Site de secours"] }
      ]
    },
    projects: {
      eyebrow: "Études de cas", title: "Projets",
      items: [
        {
          title: "Infrastructure haute disponibilité multi-sites",
          context: "Un environnement multi-sites exposé à des interruptions de service impactant la continuité des opérations.",
          problem: "Absence de redondance et de plan de reprise formalisé entre les sites.",
          goal: "Garantir une disponibilité continue et une bascule maîtrisée en cas d'incident majeur.",
          architecture: "Clustering des serveurs critiques, réplication du stockage et liaisons réseau redondantes entre sites.",
          result: "Disponibilité portée à 99.9% et temps de bascule ramené sous la minute.",
          impact: "Continuité de service assurée même lors d'incidents matériels majeurs.",
          tech: ["Windows Server", "Clustering", "SAN", "Réseau redondant"]
        },
        {
          title: "Centre de supervision (SOC)",
          context: "Un besoin de visibilité centralisée sur la sécurité et la disponibilité des systèmes.",
          problem: "Détection tardive des incidents et absence de vision consolidée multi-sites.",
          goal: "Mettre en place une supervision proactive de la sécurité et de la performance.",
          architecture: "Centralisation des logs, corrélation d'événements et alerting priorisé par criticité.",
          result: "Réduction du temps moyen de détection et de résolution des incidents.",
          impact: "Passage d'une posture réactive à une posture proactive de gestion des risques.",
          tech: ["Supervision réseau", "SIEM", "Alerting", "ITSM"]
        },
        {
          title: "Cloud hybride Azure",
          context: "Une infrastructure on-premise vieillissante freinant l'agilité et la scalabilité de l'activité.",
          problem: "Coûts de maintenance élevés et incapacité à absorber les pics d'activité.",
          goal: "Construire une architecture hybride flexible, sécurisée et maîtrisée en coûts.",
          architecture: "Extension progressive vers Azure avec identité hybride, gouvernance des accès et bascule de charges non-critiques.",
          result: "Réduction des coûts d'infrastructure et amélioration de la scalabilité.",
          impact: "Une base solide pour accélérer la transformation numérique de l'organisation.",
          tech: ["Azure", "Hybrid Identity", "FinOps", "M365"]
        }
      ],
      labels: { context: "Contexte", problem: "Problème", goal: "Objectif", architecture: "Architecture", result: "Résultat", impact: "Impact", github: "Voir le code", demo: "Démonstration", doc: "Documentation" }
    },
    certifications: {
      eyebrow: "Montée en compétences", title: "Certifications & roadmap",
      cols: {
        done: "Obtenues", progress: "En cours", target: "Objectifs"
      },
      data: {
        done: ["ITIL Foundation", "Microsoft 365 Fundamentals"],
        progress: ["AZ-104 : Azure Administrator", "Microsoft Learn — Cloud Security"],
        target: ["AWS Solutions Architect", "ISO 27001 Lead Implementer", "PMP", "Fortinet NSE", "Prince2"]
      }
    },
    roadmap: {
      eyebrow: "Vision carrière", title: "Roadmap professionnelle",
      steps: [
        { label: "Aujourd'hui", title: "Infrastructure Engineer" },
        { label: "Étape 2", title: "Cloud Engineer" },
        { label: "Étape 3", title: "Infrastructure Manager" },
        { label: "Étape 4", title: "Head of Infrastructure" },
        { label: "Objectif", title: "Directeur des Systèmes d'Information" }
      ]
    },
    veille: {
      eyebrow: "Curiosité technique", title: "Veille technologique",
      items: ["Azure", "Terraform", "Kubernetes", "Docker", "Microsoft Fabric", "Copilot & IA appliquée", "DevSecOps", "Zero Trust", "Green IT", "FinOps"]
    },
    blog: {
      eyebrow: "Partage de connaissance", title: "Blog",
      p: "Retours d'expérience et tutoriels à venir sur l'infrastructure, le cloud et la cybersécurité.",
      items: [
        { tag: "Cybersécurité", title: "Mettre en place une approche Zero Trust progressive", status: "À paraître" },
        { tag: "Cloud", title: "Réussir sa bascule vers un environnement Azure hybride", status: "À paraître" },
        { tag: "ITSM", title: "Structurer un support IT avec ITIL sans usine à gaz", status: "À paraître" }
      ]
    },
    resources: {
      eyebrow: "Ressources", title: "Boîte à outils",
      items: [
        { name: "Checklist durcissement Windows Server", type: "PDF" },
        { name: "Scripts PowerShell d'automatisation courants", type: "Scripts" },
        { name: "Scripts Bash de supervision", type: "Scripts" },
        { name: "Modèle de plan de reprise d'activité (PRA)", type: "Template" }
      ],
      soon: "Bientôt disponible"
    },
    faq: {
      eyebrow: "Questions fréquentes", title: "FAQ",
      items: [
        { q: "Êtes-vous disponible actuellement ?", a: "Oui, je suis ouvert à de nouvelles opportunités en CDI, freelance ou mission de consulting." },
        { q: "Le télétravail est-il possible ?", a: "Oui, en full remote, hybride ou sur site selon les besoins du poste." },
        { q: "Travaillez-vous en freelance ?", a: "Oui, pour des missions d'audit, d'architecture ou de renfort d'équipe infrastructure." },
        { q: "Quelles technologies maîtrisez-vous le mieux ?", a: "Windows Server, Active Directory, réseaux, Microsoft 365, Azure et la cybersécurité opérationnelle." },
        { q: "Quelles certifications visez-vous ?", a: "AZ-104 Azure Administrator et ISO 27001 Lead Implementer sont mes priorités actuelles." },
        { q: "Quel est votre objectif de carrière ?", a: "Évoluer vers un rôle de pilotage IT stratégique, jusqu'à la Direction des Systèmes d'Information." }
      ]
    },
    contact: {
      eyebrow: "Parlons-en", title: "Contact",
      p: "Une opportunité, un projet ou simplement une question ? Écrivez-moi.",
      form: { name: "Nom complet", email: "Email professionnel", subject: "Sujet", message: "Message", send: "Envoyer le message", sending: "Envoi en cours…", success: "Message envoyé avec succès. Je vous répondrai rapidement.", error: "Une erreur est survenue. Merci de réessayer ou de me contacter directement par email." },
      cards: { location: "Localisation", locationVal: "Casablanca, Maroc", availability: "Disponibilité", availabilityVal: "Ouvert aux opportunités", remote: "Télétravail", remoteVal: "Full remote / Hybride", timezone: "Fuseau horaire", timezoneVal: "GMT+1 (Casablanca)" },
      availabilityBadge: "Disponible pour CDI, freelance & consulting"
    },
    faqAvailability: {},
    recruiterMode: {
      bannerText: "Mode recruteur activé — contenu condensé pour une lecture en 60 secondes.",
      exit: "Quitter le mode recruteur"
    },
    modal: {
      shareTitle: "Partager mon portfolio", copyLink: "Copier le lien", copied: "Lien copié !",
      downloadQr: "Télécharger le QR Code", share: "Partager", close: "Fermer"
    },
    footer: {
      legal: "Mentions légales", privacy: "Politique de confidentialité",
      rights: "Tous droits réservés.", backToTop: "Retour en haut",
      lastUpdate: "Dernière mise à jour"
    }
  },

  en: {
    meta: {
      title: "Moussa Sarr — Senior Systems & Network Administrator | Future CIO",
      description: "Portfolio of Moussa Sarr, Senior Systems & Network Administrator specialized in Cloud, Infrastructure and Cybersecurity. Casablanca, Morocco."
    },
    nav: {
      home: "Home", about: "About", experience: "Experience", skills: "Skills",
      architecture: "Architecture", projects: "Projects", certifications: "Certifications",
      blog: "Blog", contact: "Contact", cv: "Download CV", recruiter: "I'm a recruiter"
    },
    hero: {
      kicker: "Available for new opportunities",
      roles: ["Cloud Engineer", "Infrastructure Engineer", "Systems Administrator", "Cybersecurity Specialist", "IT Infrastructure Expert", "Future CIO"],
      tagline: "Turning technology into a lever for performance, security and growth.",
      ctaPrimary: "Download my CV",
      ctaSecondary: "Get in touch",
      scroll: "Explore"
    },
    kpi: {
      title: "By the numbers",
      items: [
        { num: "7", suffix: "+", label: "Years in IT" },
        { num: "99.9", suffix: "%", label: "Infrastructure uptime" },
        { num: "40", suffix: "+", label: "Automations shipped" },
        { num: "3", suffix: "", label: "Companies served" },
        { num: "24", suffix: "/7", label: "Monitoring & on-call" },
        { num: "0", suffix: "", label: "Unresolved critical incident" }
      ]
    },
    about: {
      eyebrow: "Who I am",
      title: "An infrastructure pilot, not just a technician",
      p1: "I design, secure and evolve demanding information systems — where availability, performance and compliance are non-negotiable. My field: hybrid Windows & cloud infrastructures, operational cybersecurity and IT governance.",
      p2: "After several years working with critical environments (international logistics, telecom), I built a simple conviction: technology only has value if it serves a clear business ambition — service continuity, risk reduction, cost control.",
      p3: "What drives me: turning fragile systems into resilient infrastructures, and guiding organizations through their IT maturity journey up to strategic governance.",
      pillars: [
        { h: "Vision", p: "Aligning IT with business strategy, not the other way around." },
        { h: "Method", p: "Document, standardize, automate before evolving." },
        { h: "Leadership", p: "Coordinating cross-functional teams around shared goals." },
        { h: "Differentiation", p: "A rare, sought-after mix of field expertise and governance." }
      ]
    },
    vision: {
      eyebrow: "Vision",
      title: "The mindset of a future CIO",
      p: "Digital transformation isn't just about moving to the cloud. It's rethinking how IT creates value: automating repetitive tasks, embedding cybersecurity by design, and using data and AI to drive decisions.",
      items: [
        { h: "Cloud & hybridization", p: "Architecting robust, reversible, cost-controlled Azure/M365 environments." },
        { h: "Cybersecurity by design", p: "Embedding Zero Trust and risk management into every technical decision." },
        { h: "Automation & AI", p: "Reducing operational load to focus expertise on high-value work." },
        { h: "IT governance", p: "Turning infrastructure into a dashboard leadership can actually read." }
      ]
    },
    values: {
      eyebrow: "What defines me",
      title: "Values",
      items: [
        { h: "Excellence", p: "A service that never compromises on quality." },
        { h: "Transparency", p: "Clear communication, even when things go wrong." },
        { h: "Innovation", p: "Testing, measuring, adopting what brings real value." },
        { h: "Reliability", p: "The first one called, and the first one to reassure." },
        { h: "Team spirit", p: "No infrastructure is run alone." },
        { h: "Resilience", p: "Anticipating the incident rather than enduring it." },
        { h: "Continuous improvement", p: "Every post-mortem becomes a concrete action." },
        { h: "Customer focus", p: "IT exists to serve users, never the other way around." }
      ]
    },
    timeline: {
      eyebrow: "Journey",
      title: "Professional timeline",
      items: [
        {
          date: "2024 — Present", role: "Senior Systems & Network Administrator", org: "Hapag-Lloyd",
          body: "Leading systems and network infrastructure for a major international shipping company: high availability, access security and multi-site monitoring.",
          tags: ["Windows Server", "Azure", "Cybersecurity", "Monitoring", "ITSM"], results: "99.9% uptime maintained across critical environments."
        },
        {
          date: "2022 — 2024", role: "Systems & Network Administrator", org: "ARKAS Morocco",
          body: "Systems and network administration for an international logistics group. Access security, automation of recurring tasks and continuous support improvement.",
          tags: ["Active Directory", "Networking", "Automation", "L3 Support"], results: "Significant reduction of service interruptions through proactive incident management."
        },
        {
          date: "2020 — 2022", role: "IT Support Engineer", org: "Bouygues Telecom",
          body: "Expert-level technical support in a demanding telecom environment with high volume and responsiveness requirements.",
          tags: ["Telecom networks", "L2/L3 support", "Monitoring"], results: "Fast ramp-up on high-incident-volume environments."
        },
        {
          date: "2018 — 2020", role: "Freelance IT Support", org: "Independent",
          body: "Supporting SMBs with day-to-day systems, network and security challenges.",
          tags: ["Windows", "Networking", "Security", "Client relations"], results: "First hands-on experience owning client infrastructure end to end."
        }
      ]
    },
    impact: {
      eyebrow: "Proof", title: "Business-oriented achievements",
      items: [
        "Designed and administered Windows infrastructures ensuring service continuity and availability of critical applications.",
        "Reduced downtime through proactive management of critical incidents.",
        "Automated recurring tasks, freeing up time for higher-value work.",
        "Secured access and strengthened cybersecurity posture across multi-site environments.",
        "Optimized infrastructure costs through rationalized cloud and on-premise resources.",
        "Coordinated cross-team efforts on sensitive infrastructure evolution projects.",
        "Provided expert-level support on critical, high-availability environments."
      ]
    },
    skills: {
      eyebrow: "Expertise", title: "Skills",
      cats: {
        systemes: "Systems", reseaux: "Networking", cloud: "Cloud", cyber: "Cybersecurity", gouvernance: "Governance & ITSM"
      },
      data: {
        systemes: [
          { name: "Windows Server", level: "Expert", usecase: "Design, administration and hardening of critical environments." },
          { name: "Active Directory", level: "Expert", usecase: "Identity and access governance group-wide." },
          { name: "Virtualization (Hyper-V)", level: "Advanced", usecase: "Server consolidation and recovery planning." },
          { name: "PowerShell", level: "Advanced", usecase: "Automating recurring administration tasks." }
        ],
        reseaux: [
          { name: "Network architecture", level: "Expert", usecase: "Secure multi-site LAN/WAN design." },
          { name: "Firewall / VPN", level: "Advanced", usecase: "Securing remote and inter-site access." },
          { name: "DNS / DHCP", level: "Expert", usecase: "Reliability of critical network services." },
          { name: "Network monitoring", level: "Advanced", usecase: "Proactive detection of service degradation." }
        ],
        cloud: [
          { name: "Microsoft Azure", level: "Advanced", usecase: "Hybrid architecture and progressive cloud migration." },
          { name: "Microsoft 365", level: "Expert", usecase: "Collaborative governance and data security." },
          { name: "AWS", level: "Intermediate", usecase: "Multi-cloud understanding for informed architecture choices." },
          { name: "FinOps", level: "Intermediate", usecase: "Cloud cost control and optimization." }
        ],
        cyber: [
          { name: "Zero Trust", level: "Advanced", usecase: "Designing a modern segment-based security posture." },
          { name: "Access management", level: "Expert", usecase: "Least-privilege principle applied at scale." },
          { name: "Security monitoring (SOC)", level: "Advanced", usecase: "Detecting and responding to security incidents." },
          { name: "ISO 27001 (approach)", level: "Intermediate", usecase: "Structuring a compliance journey." }
        ],
        gouvernance: [
          { name: "ITIL", level: "Advanced", usecase: "Structuring support and change processes." },
          { name: "IT project management", level: "Advanced", usecase: "Leading sensitive infrastructure evolutions." },
          { name: "Documentation & standards", level: "Expert", usecase: "Reducing key-person dependency risk." },
          { name: "DR / BC planning", level: "Advanced", usecase: "Designing disaster recovery and business continuity plans." }
        ]
      }
    },
    architecture: {
      eyebrow: "IT Architecture", title: "Infrastructure designed end to end",
      p: "Explore the typical architecture chain I design and monitor, from the end user to the disaster recovery plan. Select a component to learn more.",
      nodes: [
        { name: "Users", role: "Entry point", desc: "Workstations, mobility and remote access secured with strong authentication.", stack: ["MFA", "Intune", "Autopilot"] },
        { name: "Internet", role: "Connectivity", desc: "Redundant carrier links to guarantee continuity of access.", stack: ["BGP", "Carrier redundancy"] },
        { name: "Firewall", role: "Security perimeter", desc: "Inbound/outbound traffic filtering and first segmentation rules.", stack: ["Fortinet", "NAT rules", "IPS/IDS"] },
        { name: "VPN", role: "Secure remote access", desc: "Encrypted tunnels for staff and remote sites.", stack: ["IPsec", "SSL VPN"] },
        { name: "DMZ", role: "Demilitarized zone", desc: "Isolating exposed services from the sensitive internal network.", stack: ["Reverse proxy", "WAF"] },
        { name: "Reverse Proxy", role: "Application routing", desc: "Secure request routing to internal applications.", stack: ["NGINX", "TLS termination"] },
        { name: "Load Balancer", role: "Load distribution", desc: "Traffic distribution to ensure performance and availability.", stack: ["HA Proxy", "Health checks"] },
        { name: "Servers / Cluster", role: "Application layer", desc: "Fault-tolerant, highly available application environments.", stack: ["Windows Server", "Clustering"] },
        { name: "Virtualization", role: "Consolidation", desc: "Hardware resource optimization and deployment flexibility.", stack: ["Hyper-V", "VMware"] },
        { name: "Storage", role: "Data persistence", desc: "Resilient storage with replication to limit data loss.", stack: ["SAN", "Replication"] },
        { name: "Backup", role: "Backup", desc: "Regularly tested backup policies (3-2-1).", stack: ["Veeam", "3-2-1 strategy"] },
        { name: "Azure Cloud", role: "Hybrid extension", desc: "Progressive workload migration to the cloud for scalability.", stack: ["Azure IaaS/PaaS", "Hybrid Identity"] },
        { name: "Microsoft 365", role: "Collaboration", desc: "Governed collaboration suite with data security policies.", stack: ["Exchange Online", "SharePoint", "DLP"] },
        { name: "Monitoring", role: "Observability", desc: "Proactive anomaly detection before user impact.", stack: ["SCOM", "Alerting"] },
        { name: "DR Plan", role: "Business continuity", desc: "Tested recovery plan ensuring controlled restart after a major incident.", stack: ["RTO/RPO", "Failover site"] }
      ]
    },
    projects: {
      eyebrow: "Case studies", title: "Projects",
      items: [
        {
          title: "Multi-site high-availability infrastructure",
          context: "A multi-site environment exposed to service interruptions impacting business continuity.",
          problem: "No redundancy or formalized recovery plan between sites.",
          goal: "Guarantee continuous availability and a controlled failover in case of a major incident.",
          architecture: "Clustering of critical servers, storage replication and redundant network links between sites.",
          result: "Availability raised to 99.9% with failover time reduced to under a minute.",
          impact: "Service continuity ensured even during major hardware incidents.",
          tech: ["Windows Server", "Clustering", "SAN", "Redundant network"]
        },
        {
          title: "Security Operations Center (SOC)",
          context: "A need for centralized visibility over the security and availability of systems.",
          problem: "Late incident detection and no consolidated multi-site view.",
          goal: "Implement proactive security and performance monitoring.",
          architecture: "Centralized logging, event correlation and criticality-based alerting.",
          result: "Reduced mean time to detect and resolve incidents.",
          impact: "Shift from a reactive to a proactive risk management posture.",
          tech: ["Network monitoring", "SIEM", "Alerting", "ITSM"]
        },
        {
          title: "Azure hybrid cloud",
          context: "An aging on-premise infrastructure limiting business agility and scalability.",
          problem: "High maintenance costs and inability to absorb activity spikes.",
          goal: "Build a flexible, secure, cost-controlled hybrid architecture.",
          architecture: "Progressive extension to Azure with hybrid identity, access governance and non-critical workload migration.",
          result: "Reduced infrastructure costs and improved scalability.",
          impact: "A solid foundation to accelerate the organization's digital transformation.",
          tech: ["Azure", "Hybrid Identity", "FinOps", "M365"]
        }
      ],
      labels: { context: "Context", problem: "Problem", goal: "Goal", architecture: "Architecture", result: "Result", impact: "Impact", github: "View code", demo: "Live demo", doc: "Documentation" }
    },
    certifications: {
      eyebrow: "Skill growth", title: "Certifications & roadmap",
      cols: { done: "Obtained", progress: "In progress", target: "Goals" },
      data: {
        done: ["ITIL Foundation", "Microsoft 365 Fundamentals"],
        progress: ["AZ-104: Azure Administrator", "Microsoft Learn — Cloud Security"],
        target: ["AWS Solutions Architect", "ISO 27001 Lead Implementer", "PMP", "Fortinet NSE", "Prince2"]
      }
    },
    roadmap: {
      eyebrow: "Career vision", title: "Career roadmap",
      steps: [
        { label: "Today", title: "Infrastructure Engineer" },
        { label: "Step 2", title: "Cloud Engineer" },
        { label: "Step 3", title: "Infrastructure Manager" },
        { label: "Step 4", title: "Head of Infrastructure" },
        { label: "Goal", title: "Chief Information Officer" }
      ]
    },
    veille: {
      eyebrow: "Technical curiosity", title: "Technology watch",
      items: ["Azure", "Terraform", "Kubernetes", "Docker", "Microsoft Fabric", "Copilot & applied AI", "DevSecOps", "Zero Trust", "Green IT", "FinOps"]
    },
    blog: {
      eyebrow: "Knowledge sharing", title: "Blog",
      p: "Experience reports and tutorials coming soon on infrastructure, cloud and cybersecurity.",
      items: [
        { tag: "Cybersecurity", title: "Rolling out a progressive Zero Trust approach", status: "Coming soon" },
        { tag: "Cloud", title: "Successfully moving to a hybrid Azure environment", status: "Coming soon" },
        { tag: "ITSM", title: "Structuring IT support with ITIL without the overhead", status: "Coming soon" }
      ]
    },
    resources: {
      eyebrow: "Resources", title: "Toolbox",
      items: [
        { name: "Windows Server hardening checklist", type: "PDF" },
        { name: "Common PowerShell automation scripts", type: "Scripts" },
        { name: "Bash monitoring scripts", type: "Scripts" },
        { name: "Disaster recovery plan template", type: "Template" }
      ],
      soon: "Coming soon"
    },
    faq: {
      eyebrow: "Frequently asked", title: "FAQ",
      items: [
        { q: "Are you currently available?", a: "Yes, I'm open to new full-time, freelance or consulting opportunities." },
        { q: "Is remote work possible?", a: "Yes, fully remote, hybrid or on-site depending on the role's needs." },
        { q: "Do you work freelance?", a: "Yes, for audit, architecture or infrastructure team reinforcement missions." },
        { q: "Which technologies do you know best?", a: "Windows Server, Active Directory, networking, Microsoft 365, Azure and operational cybersecurity." },
        { q: "Which certifications are you pursuing?", a: "AZ-104 Azure Administrator and ISO 27001 Lead Implementer are my current priorities." },
        { q: "What's your career goal?", a: "Moving into strategic IT governance, up to Chief Information Officer." }
      ]
    },
    contact: {
      eyebrow: "Let's talk", title: "Contact",
      p: "An opportunity, a project, or just a question? Write to me.",
      form: { name: "Full name", email: "Professional email", subject: "Subject", message: "Message", send: "Send message", sending: "Sending…", success: "Message sent successfully. I'll get back to you shortly.", error: "Something went wrong. Please try again or reach me directly by email." },
      cards: { location: "Location", locationVal: "Casablanca, Morocco", availability: "Availability", availabilityVal: "Open to opportunities", remote: "Remote work", remoteVal: "Fully remote / Hybrid", timezone: "Timezone", timezoneVal: "GMT+1 (Casablanca)" },
      availabilityBadge: "Available for full-time, freelance & consulting"
    },
    recruiterMode: {
      bannerText: "Recruiter mode enabled — condensed content for a 60-second read.",
      exit: "Exit recruiter mode"
    },
    modal: {
      shareTitle: "Share my portfolio", copyLink: "Copy link", copied: "Link copied!",
      downloadQr: "Download QR Code", share: "Share", close: "Close"
    },
    footer: {
      legal: "Legal notice", privacy: "Privacy policy",
      rights: "All rights reserved.", backToTop: "Back to top",
      lastUpdate: "Last updated"
    }
  }
};

if (typeof module !== "undefined") module.exports = I18N;
