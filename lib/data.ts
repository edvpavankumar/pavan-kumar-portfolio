// ============================================================================
// SINGLE SOURCE OF TRUTH
// All personal information below is extracted directly from the uploaded
// resume (Pavanede_Resume.pdf) and LinkedIn profile export (Profile.pdf).
// Items marked as "concept" projects were requested in the design brief but
// do not appear in the resume — they are kept as clearly-labeled concept
// placeholders rather than presented as completed work, per the brief's own
// instruction not to fabricate achievements.
// ============================================================================

export const personal = {
  name: "Ede Dinesh Venkata Pavan Kumar",
  shortName: "Pavan Kumar",
  headline: "AI & Software Developer",
  heroHeadline: "Engineering Intelligent Software",
  heroSubtitle:
    "Building AI-powered applications, scalable software solutions, and solving real-world problems through Java, Python, Artificial Intelligence, and modern software engineering practices.",
  rotatingTitles: [
    "AI & Software Developer",
    "Java Developer",
    "Problem Solver",
    "Software Engineer",
  ],
  location: "Hyderabad, Telangana, India",
  phone: "+91 6281785368",
  email: "edvpavankumar@gmail.com",
  github: "https://github.com/edvpavankumar",
  linkedin:
    "https://www.linkedin.com/in/dinesh-venkata-pavan-kumar-ede-3729322a5/",
  leetcode: "https://leetcode.com/u/pavanede/",
  hackerrank: "https://www.hackerrank.com/profile/edvpavankumar",
  resumeFile: "/Pavan_Resume.pdf",
  summary:
    "Motivated B.Tech Information Technology student with strong foundations in Java, Data Structures and Algorithms, Object-Oriented Programming, Database Management Systems, and Operating Systems. Passionate about software development and problem-solving, with hands-on experience building real-world applications and working in professional environments.",
};

export const aboutStory = [
  "I didn't start out chasing software. My first two years were spent under the hood of Audis — diagnosing faults, understanding how hundreds of small parts have to work together for a machine to run reliably. That's a strange place to discover a love for code, but it's exactly where it happened.",
  "Somewhere between torque specs and troubleshooting checklists, I started noticing how much of that same logic applied to programming: isolate the problem, test a hypothesis, fix it, verify it didn't break anything else. When I moved into Information Technology, Java and Data Structures felt less like a new subject and more like the same instinct in a different language.",
  "What keeps me interested now is AI — not as a buzzword, but as a genuinely different way to solve problems that used to need a human in the loop. I like building things that actually work end-to-end: a recommendation system that gives someone real direction, a safety mechanism that reacts faster than a person could. The scale is smaller right now, but the standard I hold the work to isn't.",
  "Long term, I want to be the engineer who can move between the theory and the wrench — someone who understands systems deeply enough, mechanical or digital, to know exactly where they'll break, and to fix that before it does.",
];

export const journey = [
  {
    year: "2021 – 2024",
    stage: "Diploma",
    title: "Diploma in Automobile Engineering",
    place: "Government Polytechnic, Masab Tank, Hyderabad",
    note: "GPA 7.76/10 — where discipline and mechanical thinking took root.",
  },
  {
    year: "2024 →",
    stage: "B.Tech",
    title: "Bachelor of Technology (Information Technology)",
    place: "ACE Engineering College, Hyderabad",
    note: "CGPA 7.81/10 (in progress) — the deliberate pivot from machines to software.",
  },
  {
    year: "2024 – 25",
    stage: "Java & DSA",
    title: "Java & Data Structures and Algorithms",
    place: "Coursework + HackerRank practice",
    note: "Built problem-solving fluency, culminating in a HackerRank Java 4★ badge.",
  },
  {
    year: "2025",
    stage: "Artificial Intelligence",
    title: "AI Tools & Applied Machine Learning",
    place: "Self-driven learning",
    note: "Explored applied AI tooling alongside core computer-science subjects.",
  },
  {
    year: "2025 – 27",
    stage: "Software Development",
    title: "Building Real Applications",
    place: "Independent & academic projects",
    note: "Flask, MySQL, and full-stack web development — from idea to shipped project.",
  },
  {
    year: "2027 →",
    stage: "Future Goals",
    title: "Future Software Engineer",
    place: "Next chapter",
    note: "Aiming for a role where automotive precision meets software craft.",
  },
];

export const strengths = [
  {
    title: "Problem Solving",
    desc: "Hands-on diagnostic thinking, carried over from the workshop floor into code.",
  },
  {
    title: "Fast Learner",
    desc: "Comfortable picking up new stacks quickly — Flask and MySQL were self-taught for production use.",
  },
  {
    title: "Communication",
    desc: "Sharpened through direct customer-facing work as a Service Advisor.",
  },
  {
    title: "Adaptability",
    desc: "Made a deliberate pivot from Automobile Engineering to Information Technology.",
  },
];

export const skills = {
  "Programming Languages": ["Java", "Python"],
  "Core Computer Science": [
    "Data Structures & Algorithms",
    "Object-Oriented Programming",
    "Database Management Systems",
    "Operating Systems",
    "Computer Networks",
  ],
  Database: ["MySQL"],
  "Developer Tools": ["Git", "GitHub", "VS Code", "Eclipse IDE"],
};

export const experience = [
  {
    company: "Olympus Motors (AUDI)",
    role: "Service Advisor",
    period: "September 2023 – November 2023",
    location: "Hyderabad, India",
    points: [
      "Supported customer-facing service operations, translating technical diagnoses into clear guidance for clients.",
      "Coordinated between technicians and customers to set expectations on repair timelines and costs.",
      "Strengthened communication and client-relationship skills in a premium automotive environment.",
    ],
    skillsGained: ["Communication", "Customer Service", "Coordination"],
  },
  {
    company: "Olympus Motors (AUDI)",
    role: "Technician",
    period: "June 2023 – August 2023",
    location: "Hyderabad, India",
    points: [
      "Assisted in vehicle diagnostics and routine maintenance procedures.",
      "Applied structured, methodical troubleshooting to identify mechanical issues.",
      "Built a foundation in precision and systematic problem-solving.",
    ],
    skillsGained: ["Diagnostics", "Attention to Detail", "Teamwork"],
  },
];

export type Project = {
  slug: string;
  name: string;
  status: "Completed" | "In Progress";
  tagline: string;
  overview: string;
  problem: string;
  solution: string;
  architecture: string;
  features: string[];
  stack: string[];
  challenges: string;
  future: string;
  keyLearnings: string;
  github?: string;
  demo?: string;
};

export const projects: Project[] = [
  {
    slug: "ai-career-recommendation-system",
    name: "AI-Based Career Recommendation System",
    status: "Completed",
    tagline:
      "A web platform that recommends career paths from a student's skills and academic performance.",
    overview:
      "A full-stack web application built to give students a more structured, data-informed starting point when choosing a career direction — built independently, end to end.",
    problem:
      "Students often lack structured, data-informed guidance when choosing a career path, relying instead on generic advice.",
    solution:
      "A responsive web application that analyzes a student's skills and academic performance to suggest suitable career directions, complete with secure account recovery.",
    architecture:
      "Flask backend serving a MySQL-backed data layer, with a Bootstrap + vanilla JS frontend and OTP-based authentication flow.",
    features: [
      "OTP-based password recovery and user authentication",
      "Skill-gap analysis engine",
      "Internship recommendation feature",
      "Responsive, user-friendly interface",
    ],
    stack: ["Flask", "MySQL", "HTML", "CSS", "Bootstrap", "JavaScript"],
    challenges:
      "Designing a skill-gap analysis that stays useful across a wide range of student profiles while keeping the OTP flow secure and reliable.",
    future:
      "Add a recommendation-confidence score and expand the internship dataset with real-time listings.",
    keyLearnings:
      "This project was where OTP-based auth, session handling, and relational data design stopped being textbook concepts and became things I had to actually get right.",
    github: "https://github.com/edvpavankumar",
  },
  {
    slug: "pneumatic-bumper-ejection-system",
    name: "Pneumatic Bumper Ejection System",
    status: "Completed",
    tagline:
      "An automobile safety concept using ultrasonic sensors to reduce collision impact.",
    overview:
      "A diploma-era engineering project that applies the same diagnostic thinking from my automotive background to a real safety problem: reducing impact force before a collision happens.",
    problem:
      "Conventional bumpers offer limited active protection in low-speed collision scenarios.",
    solution:
      "An automated bumper ejection mechanism triggered by real-time ultrasonic obstacle detection, designed to absorb and reduce impact force before collision.",
    architecture:
      "Ultrasonic sensor array feeding a control unit that triggers a pneumatic ejection mechanism upon detecting an imminent obstacle within a critical range.",
    features: [
      "Real-time ultrasonic object detection",
      "Automated pneumatic response mechanism",
      "Reduced-impact collision design",
    ],
    stack: ["Ultrasonic Sensors", "Embedded Control Logic", "Pneumatics"],
    challenges:
      "Tuning detection range and response time to reliably distinguish genuine collision risk from routine driving conditions.",
    future:
      "Integrate with vehicle speed data for adaptive response thresholds.",
    keyLearnings:
      "My first real lesson in system reliability — a sensor that reacts too eagerly is just as useless as one that reacts too late.",
  },
  {
    slug: "ai-product-intelligence-system",
    name: "AI Product Intelligence System",
    status: "In Progress",
    tagline:
      "A concept system for extracting structured insight from unstructured product data.",
    overview:
      "An early-stage project I'm scoping to explore how AI can turn scattered product feedback into decisions a team can actually act on.",
    problem:
      "Teams accumulate large volumes of product feedback and specs that are slow to turn into decisions.",
    solution:
      "A planned pipeline that would ingest product data and surface structured, actionable insight for product teams.",
    architecture:
      "Concept architecture: ingestion layer → AI analysis layer → structured insight dashboard.",
    features: [
      "Planned: automated insight extraction",
      "Planned: trend and sentiment surfacing",
      "Planned: dashboard for product teams",
    ],
    stack: ["Python", "AI Tooling", "TBD"],
    challenges:
      "This is an early-stage concept — architecture and scope are still being defined.",
    future: "Formal scoping, dataset selection, and a working prototype.",
    keyLearnings:
      "Still ahead of me — the plan is to document what I learn here as I build it, rather than claim lessons I haven't earned yet.",
  },
  {
    slug: "lung-cancer-detection-system",
    name: "Lung Cancer Detection System",
    status: "In Progress",
    tagline:
      "A concept system exploring AI-assisted early detection support from medical imaging.",
    overview:
      "A concept I'm researching properly before writing any code — early detection support is high-stakes, and I'd rather scope it right than ship it fast.",
    problem:
      "Early detection significantly improves outcomes, but expert review capacity is limited.",
    solution:
      "A planned assistive model that would flag imaging patterns for radiologist review — not a diagnostic replacement.",
    architecture:
      "Concept architecture: imaging preprocessing → model inference → review-assist interface.",
    features: [
      "Planned: image preprocessing pipeline",
      "Planned: pattern-flagging model",
      "Planned: clinician-facing review interface",
    ],
    stack: ["Python", "AI Tooling", "TBD"],
    challenges:
      "This is an early-stage concept — no dataset, model, or clinical validation exists yet.",
    future: "Research proper datasets and responsible-AI/clinical guidelines before building.",
    keyLearnings:
      "Learning that in health-adjacent AI, the responsible move is sometimes to slow down and research before building anything at all.",
  },
];

export const education = [
  {
    degree: "Bachelor of Technology — Information Technology",
    school: "ACE Engineering College, Hyderabad",
    period: "June 2024 – June 2027 (Expected)",
    grade: "CGPA: 7.81 / 10",
    coursework: [
      "Data Structures & Algorithms",
      "Object-Oriented Programming",
      "DBMS",
      "Operating Systems",
      "Computer Networks",
    ],
  },
  {
    degree: "Diploma in Automobile Engineering",
    school: "Government Polytechnic College, Masab Tank, Hyderabad",
    period: "2021 – 2024",
    grade: "GPA: 7.76 / 10",
    coursework: ["Automotive Systems", "Mechanical Fundamentals", "Applied Diagnostics"],
  },
  {
    degree: "Secondary Schooling",
    school: "Triveni Talent School",
    period: "Completed May 2021",
    grade: "",
    coursework: [],
  },
];

export const achievements = [
  {
    title: "HackerRank Java 4★",
    desc: "Demonstrated proficiency in Java problem-solving on HackerRank.",
    metric: "4★",
  },
  {
    title: "6-Month Industrial Internship",
    desc: "Completed a full industrial internship at Olympus Motors (AUDI), Hyderabad.",
    metric: "6",
    metricLabel: "months",
  },
  {
    title: "AI Projects",
    desc: "Built an AI-based career recommendation engine, with more concepts in active scoping.",
    metric: "2+",
  },
  {
    title: "Academic Performance",
    desc: "B.Tech Information Technology, ACE Engineering College (in progress).",
    metric: "7.81",
    metricLabel: "/ 10 CGPA",
  },
  {
    title: "Technical Skills",
    desc: "Java, Python, Flask, MySQL, and core CS fundamentals — DSA, OOP, DBMS, OS, Networks.",
    metric: "10+",
  },
];

export const social = {
  instagram: "https://www.instagram.com/pavanede_18",
};

export const blogPosts = [
  {
    slug: "pivoting-from-automobiles-to-software",
    title: "Why I Pivoted from Automobile Engineering to Software",
    excerpt:
      "What a workshop floor taught me about debugging — and why I made the jump to Information Technology.",
    category: "Career",
    readTime: "4 min read",
    date: "Coming soon",
  },
  {
    slug: "building-a-recommendation-engine-with-flask",
    title: "Building a Career Recommendation Engine with Flask & MySQL",
    excerpt:
      "Notes on designing the skill-gap analysis behind my AI-based career recommendation system.",
    category: "Engineering",
    readTime: "6 min read",
    date: "Coming soon",
  },
  {
    slug: "what-hackerrank-4-star-actually-taught-me",
    title: "What Grinding to a HackerRank 4★ Actually Taught Me",
    excerpt: "Less about the badge, more about how I learned to think in Java.",
    category: "Learning",
    readTime: "3 min read",
    date: "Coming soon",
  },
];
