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
      { label: "Auth Model", value: "RBAC Middleware" },
      { label: "Module Scope", value: "Multi-Tenant CRM" },
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
  },
  {
    id: "kt-messenger",
    number: "PROJECT 02",
    category: "REAL-TIME COMMUNICATION PLATFORM",
    title: "KT Messenger",
    subtitle: "High-Concurrency Instant Messaging & Media Hub",
    description: "A real-time messaging application supporting instant peer-to-peer chat, group conversations, media attachments, delivery notifications, and backend integration.",
    tech: ["PHP", "JavaScript", "REST APIs", "MySQL", "WebSockets"],
    metrics: [
      { label: "Messaging", value: "Real-Time / Event-Driven" },
      { label: "Storage", value: "MySQL + Blob Store" },
      { label: "Protocol", value: "WSS / HTTP REST" },
      { label: "Media Handling", value: "Optimized Uploads" },
    ],
    overview: "KT Messenger provides reliable instant messaging and media distribution for real-time team collaboration. Built with responsive client-side JavaScript and a lightweight PHP/MySQL event infrastructure.",
    problem: "High latency in standard HTTP polling systems, message sequence dropouts during intermittent connection loss, and unoptimized media uploads blocking client threads.",
    solution: "Implemented an event-driven messaging layer with asynchronous JS fetch payloads, WebSocket event listeners, and optimistic UI updates for instantaneous message display.",
    architectureNodes: [
      "CLIENT CHAT UI (Dynamic DOM / Event Listeners)",
      "WEBSOCKET / ASYNC EVENT DISPATCHER",
      "PHP REST CONTROLLERS (Auth & Message Dispatch)",
      "MYSQL (Messages, Channels, Media Metadata)",
    ],
    keyFeatures: [
      "Instant Direct Messaging & Group Chat Channels",
      "Real-Time Delivery & Read Receipt Indicators",
      "Asynchronous Media & Document Attachment Dispatch",
      "Message Search & Conversation History Persistence",
      "User Presence & Online/Offline Status Tracking",
    ],
    technicalChallenges: [
      {
        challenge: "Maintaining message order and avoiding duplicate renders during rapid-fire client input.",
        resolution: "Assigned client-side optimistic UUID tokens reconciled against server database timestamps upon insertion.",
      },
      {
        challenge: "Large image/video attachment uploads stalling conversation feeds.",
        resolution: "Created asynchronous background upload chunking with client image compression preview before payload dispatch.",
      },
    ],
    contribution: [
      "Engineered real-time chat interface and dynamic message thread DOM renderer.",
      "Designed backend PHP controllers for authentication, channel management, and message storage.",
      "Optimized MySQL indexes on conversation_id and created_at fields for sub-10ms query execution.",
    ],
    githubUrl: "https://github.com/farhankhan",
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
