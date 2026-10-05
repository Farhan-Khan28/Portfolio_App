# Farhan Khan — Full-Stack Web Developer Portfolio
## UI / UX Architecture & Component Specification (`ui.md`) — Version 2

---

### 1. Architectural Vision & Strategic Positioning

The primary objective of this UI specification is to position **Farhan Khan** as an **Engineering Architect & Senior Full-Stack Developer** who engineers resilient end-to-end web applications. Unlike traditional portfolios that emphasize surface-level aesthetics or isolated code snippets, this design highlights system design, database architecture, backend security, RESTful API design, and client-side responsiveness.

#### Key Messaging Matrix
| Touchpoint | Visual & Structural Cue | Target Psychological Impact |
| :--- | :--- | :--- |
| **Boot Sequence (0-1s)** | System initialization sequence (`FK` logo → Indigo system vector → Full-Stack eyebrow → Headline → Architecture diagram) | *"This portfolio is engineered like a real software application."* |
| **Hero Visualizer** | Interactive Living System Diagram with traveling HTTP packets & contextual node parameters | *"This developer understands application pipeline flow, not just HTML/CSS."* |
| **Capabilities Section** | Interactive layer expansion grid connecting Database schemas, API endpoints, Auth, & UI | *"He builds complete products from schema to browser engine."* |
| **Projects Showcase** | Editorial case-study cards with quick preview overlays & deep technical section switchers | *"Proven track record with complex applications like CRMs and real-time messaging."* |
| **Development Process** | Interactive 6-step lifecycle (Discover → Architect → Design → Develop → Test → Deploy) | *"He follows predictable, enterprise-grade software engineering practices."* |

---

### 2. Page & Route Architecture

```text
/ (Main Application Shell)
├── System Boot Sequence (700-1000ms GPU-accelerated entrance pipeline)
├── Sticky Navigation Bar (Glass dark backdrop `#08090B/90`, Command Palette shortcut indicator `⌘K`)
├── Command Palette (`Cmd + K` / `Ctrl + K` instant dark navigation modal)
├── Ambient Cursor Spotlight (Subtle 12% opacity radial desktop glow)
├── Hero Section (Split layout: Value Proposition + Living Architecture Visualizer with HTTP packet animation)
├── Micro Trust Bar (Monochrome tech signature strip: Laravel · PHP · MySQL · JS · REST APIs · Git)
├── Executive About (Scroll-linked word-by-word reveal: "I build systems, not just interfaces." + Layer assembly)
├── Full-Stack Capability Grid ("What I Build" — Interactive layer expansion cards)
├── Featured Projects Showcase (Editorial case-study cards with Quick Preview & Full Modal)
├── Engineering Process Journey (Interactive 6-step pipeline from Architecture to Deployment)
├── Experience & Timeline (Vertical line timeline with node activation indicators)
├── Behind the Interface (Realistic code editor spotlight with line numbers & PSR-12 formatting)
├── Developer Interactive Terminal (Optional CLI tool: help, stack, projects, contact, easter egg)
├── Contact Portal (Magnetic submit CTA, validated form + Direct contact vectors)
└── Footer (Minimalist brand mark, live technical status panel, copyright)

/projects/[id] (Project Case Study Modal View)
├── Header & Metadata Bar (Role, Tech Stack, Live Repo Links)
├── Section Switcher (OVERVIEW | ARCHITECTURE | FEATURES | CHALLENGES | CODE)
├── 01 — System Overview & Business Context
├── 02 — Application Architecture Flow (Client → Route → Middleware → Controller → Service → DB)
├── 03 — Core Features & Engineering Deliverables
├── 04 — Technical Challenges & Resolutions
└── 05 — Code & Implementation Proof
```

---

### 3. Component Inventory & Technical Specifications

#### 3.1. Command Palette (`CommandPalette.tsx`)
*   **Trigger**: Keyboard shortcut `Cmd + K` (macOS) / `Ctrl + K` (Windows/Linux) or clicking `⌘K` badge in Navbar.
*   **Structure**: Dark modal overlay (`#08090B/90` with blur) containing a search input, categorized action list (Navigation, Projects, Actions), keyboard navigation (`Up`, `Down`, `Enter`), and instant section scroll execution.

#### 3.2. Developer Terminal (`DeveloperTerminal.tsx`)
*   **Trigger**: Optional interactive section or terminal icon click.
*   **Commands Supported**:
    *   `help`: Displays list of available commands.
    *   `about`: Outputs Farhan's core positioning statement.
    *   `stack`: Outputs `Laravel`, `PHP`, `MySQL`, `JavaScript`, `REST APIs`, `Git`.
    *   `projects`: Lists featured applications.
    *   `contact`: Outputs email and social links.
    *   `sudo hire farhan`: Returns `✓ Request received.` (Easter Egg).

#### 3.3. Living Architecture Visualizer (`ArchitectureDiagram.tsx`)
*   **Packet Motion**: Continuous SVG animated packets traveling between nodes (`FRONTEND` ──> `REST API` ──> `LARAVEL` ──> `MYSQL`).
*   **Contextual Parameters on Node Hover**:
    *   `FRONTEND`: `HTML5`, `CSS3`, `JavaScript`, `Dynamic DOM`
    *   `REST API`: `GET`, `POST`, `PUT`, `DELETE`, `JSON HTTP`
    *   `LARAVEL`: `AUTH`, `MIDDLEWARE`, `SERVICES`, `CONTROLLERS`
    *   `MYSQL`: `SCHEMA`, `RELATIONS`, `INDEXING`, `QUERIES`

#### 3.4. Scroll-Linked Word Reveal (`AboutSection.tsx`)
*   As the user scrolls through the About section, each word of *"I build systems, not just interfaces."* transitions from `0.2` opacity slate to `1.0` solid `#F5F7FA` white.
*   As the sentence finishes, five architectural layer tags (`DATABASE`, `API`, `AUTH`, `BUSINESS LOGIC`, `UI`) draw into place sequentially.

---

### 4. Responsive & Accessibility Strategy

1.  **Mobile Motion**:
    *   Cursor ambient spotlight disabled.
    *   Magnetic button pull disabled.
    *   Reduced parallax & shortened scroll reveal distances.
    *   Touch-friendly touch targets (`> 44px`).
2.  **`prefers-reduced-motion: reduce`**:
    *   Disables boot sequence delays, continuous packet animations, cursor spotlights, and scroll-linked opacity transforms.
    *   All content is rendered immediately at 100% opacity.

---

### 5. ADVANCED MOTION & INTERACTION SPECIFICATION

#### 5.1. Motion Timing Tokens
*   `--duration-fast`: `150ms` (Button states, focus rings, hover borders)
*   `--duration-standard`: `350ms` (Modal reveals, accordion expansions, tab shifts)
*   `--duration-expressive`: `750ms` (Boot sequence steps, visualizer node transitions)
*   `--easing-system`: `cubic-bezier(0.16, 1, 0.3, 1)` (Crisp, fast-out, slow-in easing)

#### 5.2. Section Animation Identities
*   **Hero**: System initialization sequence (draw-in, packet travel, magnetic CTAs).
*   **About**: Scroll-linked typographic word reveal & engineering layer assembly.
*   **Capabilities**: Card border glow & layer expansion on hover.
*   **Projects**: Viewport scale reveal (`0.97` → `1.0`) & depth hover transform.
*   **Process**: Node activation & deliverable pill sequence switch.
*   **Experience**: Vertical timeline line glow & node ping animations.
*   **Code**: Syntax-highlighted IDE window with active line highlighting.
*   **Contact**: Focus-driven input borders & magnetic submit button.
