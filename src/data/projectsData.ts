export interface ProjectData {
  id: string;
  number: string;
  category: string;
  title: string;
  subtitle: string;
  description: string;
  tech: string[];
  metrics: { label: string; value: string }[];
  overview: string;
  problem: string;
  solution: string;
  architectureNodes: string[];
  keyFeatures: string[];
  technicalChallenges: {
    challenge: string;
    resolution: string;
  }[];
  contribution: string[];
  githubUrl?: string;
  demoUrl?: string;
}

export const PROJECTS: ProjectData[] = [
  {
    id: "jibz-crm",
    number: "PROJECT 01",
    category: "BUSINESS MANAGEMENT PLATFORM",
    title: "JIBZ CRM",
    subtitle: "Enterprise Customer & Operations Management System",
    description: "A complete business management platform covering customer lifecycles, employee administration, attendance workflows, role-based access, and executive reporting.",
    tech: ["Laravel", "PHP", "MySQL", "JavaScript", "REST APIs", "Git"],
    metrics: [
      { label: "Architecture", value: "Laravel MVC" },
      { label: "DB Engine", value: "MySQL 8.0" },
      { label: "Live System", value: "jibzcrm.in" },
      { label: "Auth Model", value: "RBAC Middleware" },
    ],
    overview: "JIBZ CRM was engineered to unify fragmented business operations into a single secure platform. It streamlines customer account tracking, employee roster assignments, automated attendance reporting, and executive metrics dashboards.",
    problem: "The client was experiencing data silos across disconnected spreadsheets, missing attendance records, slow report generation (often leading to server timeouts), and lack of granular access control for different staff roles.",
    solution: "Architected a centralized Laravel application backed by an optimized MySQL relational schema. Implemented indexed database queries, eager loading via Eloquent to eliminate N+1 queries, automated cron sync pipelines, and role-based access control middleware.",
    architectureNodes: [
      "CLIENT BROWSER (Blade / JS Views)",
      "LARAVEL HTTP ROUTER & MIDDLEWARE (RBAC)",
      "CONTROLLER & SERVICE LAYER (CRM Logic)",
      "ELOQUENT ORM & MYSQL (Indexed Tables)",
    ],
    keyFeatures: [
      "Customer Lifecycle & Lead Pipeline Tracking",
      "Employee Roster & Workforce Assignment Engine",
      "Automated Shift Attendance & Payroll Reporting",
      "Role-Based Access Control (Admin, Manager, Staff)",
      "Optimized Export Engine for CSV/PDF Business Reports",
    ],
    technicalChallenges: [
      {
        challenge: "504 Gateway Timeout errors when generating high-volume monthly employee roster & attendance sync reports.",
        resolution: "Refactored raw unindexed queries into optimized SQL joins with indexed composite keys, and shifted heavy report generation to background queue workers.",
      },
      {
        challenge: "Securing sensitive customer PII and payroll records across multi-tier organization staff roles.",
        resolution: "Designed a strict Role-Based Access Control (RBAC) middleware layer enforcing policy checks at both controller endpoint and view rendering levels.",
      },
    ],
    contribution: [
      "Architected relational database schema in MySQL (customers, employees, attendance, audit logs).",
      "Built complete Laravel backend controllers, service classes, and Blade/JavaScript interface components.",
      "Optimized query performance eliminating 504 server timeouts for large data reporting batches.",
      "Configured automated background cron synchronization pipelines.",
    ],
    githubUrl: "https://github.com/farhankhan",
    demoUrl: "https://jibzcrm.in",
  },
  {
    id: "kt-messenger",
    number: "PROJECT 02",
    category: "REAL-TIME COMMUNICATION PLATFORM",
    title: "KT Messenger",
    subtitle: "Microservices-Based Real-Time Messaging Platform",
    description: "A high-concurrency real-time communication platform engineered with distributed Node.js microservices, a responsive React.js frontend, and a scalable PostgreSQL database.",
    tech: ["React.js", "Node.js", "PostgreSQL", "Microservices", "WebSockets", "REST APIs"],
    metrics: [
      { label: "Frontend", value: "React.js" },
      { label: "Backend", value: "Node.js Services" },
      { label: "Database", value: "PostgreSQL" },
      { label: "Live System", value: "web.ktmessenger.com" },
    ],
    overview: "KT Messenger is an enterprise real-time messaging application engineered with a distributed Node.js microservices architecture, a reactive React.js web client, and PostgreSQL relational data persistence with WebSockets for sub-second messaging.",
    problem: "High concurrency in communication channels requires low-latency packet delivery, isolated microservice resilience, and reliable relational persistence without blocking client threads.",
    solution: "Decoupled the platform into specialized Node.js microservices communicating via event-driven WebSockets and REST APIs, paired with a React.js client interface and an optimized PostgreSQL relational schema with connection pooling.",
    architectureNodes: [
      "REACT.JS CLIENT (WebSockets & State)",
      "NODE.JS API GATEWAY (Auth & Routing)",
      "MESSAGING MICROSERVICES (Socket.io / PubSub)",
      "POSTGRESQL CLUSTER (Indexed Message Store)",
    ],
    keyFeatures: [
      "Instant Direct Messaging & Group Chat Channels",
      "Real-Time Delivery & Read Receipt Indicators via WebSockets",
      "Microservices Architecture (Node.js Decoupled Services)",
      "PostgreSQL Relational Storage with Connection Pooling",
      "React.js Reactive UI with Optimistic Message Updates",
      "User Presence & Online/Offline Status Tracking",
    ],
    technicalChallenges: [
      {
        challenge: "Managing state synchronization and low latency across concurrent real-time WebSocket connections.",
        resolution: "Engineered dedicated Node.js messaging microservices utilizing WebSocket event streams and background pub/sub synchronization.",
      },
      {
        challenge: "Scaling relational queries and maintaining sub-10ms response times on millions of message records in PostgreSQL.",
        resolution: "Structured normalized PostgreSQL tables with composite indexes on conversation_id and created_at timestamps, backed by connection pooling.",
      },
    ],
    contribution: [
      "Engineered real-time chat interface and dynamic message feeds using React.js.",
      "Built distributed Node.js microservices for authentication, message routing, and socket event broadcasting.",
      "Designed and optimized PostgreSQL relational database schema, indexes, and connection pools.",
      "Configured robust RESTful API gateway contracts and WebSocket protocols.",
    ],
    githubUrl: "https://github.com/farhankhan",
    demoUrl: "https://web.ktmessenger.com",
  },
  {
    id: "employee-attendance",
    number: "PROJECT 03",
    category: "WORKFORCE & BIOMETRIC MANAGEMENT",
    title: "Employee Attendance System",
    subtitle: "Verification & Photo-Capture Attendance Engine",
    description: "An automated workforce attendance tracking system featuring user authentication, photo capture check-in/out, shift rules, leave management, and admin auditing.",
    tech: ["Laravel", "PHP", "MySQL", "JavaScript", "REST APIs"],
    metrics: [
      { label: "Verification", value: "Camera Image Capture" },
      { label: "Rule Engine", value: "Automated Shifts" },
      { label: "Audit Logs", value: "Timestamped SQL" },
      { label: "Leave Logic", value: "Multi-level Approval" },
    ],
    overview: "A workforce management application built to prevent proxy attendance and streamline shift tracking through secure photo capture during check-in and check-out.",
    problem: "Organizations suffered from time-theft, proxy clock-ins, manual paper logs prone to errors, and lack of real-time attendance verification for remote or field staff.",
    solution: "Developed a web application integrating browser camera API capture with a Laravel backend. Every check-in logs timestamped location, verified photo snapshot, and checks employee shift rules.",
    architectureNodes: [
      "BROWSER CAMERA API (Canvas Photo Capture)",
      "RESTful ATTENDANCE ENDPOINT (Sanctum Auth)",
      "LARAVEL SHIFT RULES ENGINE (Grace Period / Late Logic)",
      "MYSQL DATABASE (Attendance Logs & Audit Blob)",
    ],
    keyFeatures: [
      "Camera Capture Verification on Check-In & Check-Out",
      "Automated Shift Rules Engine (Late Detection, Overtime)",
      "Leave Application & Multi-tier Manager Approval Workflow",
      "Monthly Attendance Summary & Timesheet Exports",
      "Real-Time Admin Dashboard with Daily Presence Audit",
    ],
    technicalChallenges: [
      {
        challenge: "Ensuring lightweight image payload transfers over weak mobile network connections.",
        resolution: "Compressed captured canvas images directly on client-side JS before transmitting base64/form data payloads.",
      },
      {
        challenge: "Handling complex shift rule edge cases (e.g. night shifts spanning past midnight).",
        resolution: "Architected a dedicated ShiftRule Evaluator service class in Laravel using UTC timestamps and clear date boundary mapping.",
      },
    ],
    contribution: [
      "Designed frontend HTML5/JS camera capture canvas component.",
      "Architected Laravel backend APIs for attendance verification, leave request management, and reporting.",
      "Created MySQL database schema for employees, shifts, logs, and manager approvals.",
    ],
    githubUrl: "https://github.com/farhankhan",
  },
  {
    id: "analytics-integration",
    number: "PROJECT 04",
    category: "DATA PIPELINE & API HUB",
    title: "Analytics & API Integration Engine",
    subtitle: "Automated Third-Party Sync & Reporting Gateway",
    description: "A high-throughput API integration hub designed to ingest third-party data, process webhooks, run scheduled cron syncs, and generate executive analytical reports.",
    tech: ["PHP", "Laravel", "MySQL", "REST APIs", "Git"],
    metrics: [
      { label: "Sync Engine", value: "Cron / Queue Worker" },
      { label: "API Protocol", value: "OAuth 2.0 / REST" },
      { label: "Logging", value: "Structured Fail-Safe" },
      { label: "Data Integrity", value: "Idempotent Key Sync" },
    ],
    overview: "An enterprise integration gateway connecting external third-party software APIs with internal databases, featuring automated error retry handling and transaction auditing.",
    problem: "Frequent third-party API rate limits, expired access tokens, and silent failures leading to data discrepancy across internal business reports.",
    solution: "Built a resilient PHP/Laravel synchronization service with automatic OAuth token refresh cycles, exponential backoff retries, and comprehensive error logging.",
    architectureNodes: [
      "THIRD-PARTY API / WEBHOOK SOURCES",
      "OAUTH TOKEN REFRESH & RATE-LIMIT MIDDLEWARE",
      "LARAVEL QUEUE WORKER & DATA PIPELINE",
      "MYSQL ANALYTICS AGGREGATION TABLES",
    ],
    keyFeatures: [
      "Automated OAuth 2.0 Token Refresh & Authentication",
      "Exponential Backoff Retry Strategy for Failed Requests",
      "Idempotent Database Record Upserts in MySQL",
      "Real-Time Exception Logging & Email Alert Alerts",
      "Custom Query Builder for Executive Analytics Reports",
    ],
    technicalChallenges: [
      {
        challenge: "Preventing duplicate database records when webhooks re-transmit payload payloads due to network timeouts.",
        resolution: "Implemented unique transaction payload hashes with MySQL `INSERT ON DUPLICATE KEY UPDATE` idempotent handlers.",
      },
    ],
    contribution: [
      "Built third-party API integration client wrappers in PHP/Laravel.",
      "Configured scheduled queue workers for background data ingestion.",
      "Designed database schema for sync logs, API credentials, and metric reports.",
    ],
    githubUrl: "https://github.com/farhankhan",
  },
];
