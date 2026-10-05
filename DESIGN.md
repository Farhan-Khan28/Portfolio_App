# Farhan Khan — Full-Stack Web Developer Portfolio
## Design System & Visual Direction (`DESIGN.md`) — Version 2

---

### 1. Brand Identity & Design Philosophy

**Farhan Khan** is a **Full-Stack Web Developer** who bridges high-performance backend architecture with clean, responsive user interfaces. 

#### Core Brand Pillars
*   **Engineering Rigor**: Systems-first mindset. Every interface is backed by robust data schema, secure REST APIs, and clean Laravel architecture.
*   **Technical Editorial**: Aesthetic inspired by modern developer tooling, technical documentation, and premium software products (e.g., Stripe, Vercel, Linear).
*   **Calm Confidence**: Dark background palette (`#08090B`), pristine typography hierarchy, generous negative space, and disciplined accent placement (`#6366F1`). No superficial clutter or childish decorations.
*   **Living Interactive System**: Motion communicates system flow, packet transfer, architecture layers, and execution pipelines rather than superficial decoration.

---

### 2. Design Tokens & Color System

#### 2.1. Color Palette (Semantic Tokens)

```css
:root {
  /* Surface Colors */
  --bg-base:             #08090B; /* Primary background - Deep Obsidian */
  --bg-surface:          #101216; /* Primary Card / Container background */
  --bg-surface-elevated: #15181D; /* Hover states, dropdowns, sticky navbar */
  --bg-surface-overlay:  #1A1D24; /* Modals and overlays */

  /* Text & Typography Colors */
  --text-primary:        #F5F7FA; /* Crisp Off-White for headlines (Contrast > 15:1) */
  --text-secondary:      #A5ABB5; /* Muted silver for body & subtitles (Contrast > 7:1) */
  --text-muted:          #6F7682; /* Slate gray for technical metadata & labels */
  --text-disabled:       #424752; /* Disabled inputs & subtle dividers */

  /* Border & Structure */
  --border-subtle:       #1E222A; /* Subtle container outlines */
  --border-default:      #252A33; /* Standard card & section borders */
  --border-active:       #3A414E; /* Focus & active hover borders */

  /* Primary Brand Accent (Electric Indigo) */
  --accent-primary:      #6366F1; /* Core CTA & interactive elements */
  --accent-hover:        #4F46E5; /* Button hover state */
  --accent-light:        #818CF8; /* Text highlights & delicate icons */
  --accent-glow:         rgba(99, 102, 241, 0.15); /* Soft background glow */
  --accent-border:       rgba(99, 102, 241, 0.40); /* Active border glow */

  /* Status Colors */
  --status-success:      #10B981; /* System online / Active project badge */
  --status-warning:      #F59E0B; /* In-progress build indicator */
  --status-error:        #EF4444; /* Validation error alert */
}
```

---

### 3. Typography System

*   **Headings & Display**: `Space Grotesk`, sans-serif (Geometric, authoritative, modern software feel).
*   **Body & Descriptions**: `Inter`, sans-serif (Engineered for optimal screen readability and micro-spacing).
*   **Technical Labels & Code**: `JetBrains Mono`, monospace (Authentic terminal aesthetic).

---

### 4. ADVANCED MOTION & INTERACTION SPECIFICATION

#### 4.1. System Boot Sequence (Cinematic Initial Load)
*   **Duration**: `850ms` total sequence length.
*   **Steps**:
    1.  `0ms`: Background initializes to `#08090B`.
    2.  `150ms`: Brand mark `FK` fades in with soft glow.
    3.  `350ms`: Thin Electric Indigo vector line expands horizontally.
    4.  `500ms`: `// FULL-STACK WEB DEVELOPER` eyebrow typing reveal.
    5.  `650ms`: Main headline `Farhan Khan` slides up `8px` with opacity transition.
    6.  `850ms`: Architecture visualizer draws in vector paths & navigation becomes interactive.

#### 4.2. Living Architecture Visualizer Motion
*   **Data Packet Animation**: Sub-millisecond SVG circle traveling along connected vector paths (`FRONTEND` → `REST API` → `LARAVEL` → `MYSQL`).
*   **Hover Node Behavior**:
    *   Node background transitions to `#15181D` with a `#6366F1` border glow.
    *   Contextual technical parameters update in real-time in the Inspector Card:
        *   `FRONTEND`: `HTML / CSS / JavaScript`
        *   `REST API`: `GET / POST / PUT / DELETE`
        *   `LARAVEL`: `AUTH / MIDDLEWARE / SERVICES / CONTROLLERS`
        *   `MYSQL`: `SCHEMA / RELATIONS / QUERIES`

#### 4.3. Typographic Scroll-Linked Reveal
*   **Target Statement**: *"I build systems, not just interfaces."*
*   **Mechanism**: `IntersectionObserver` / scroll-position linked opacity mapping each word from `0.2` (muted slate) to `1.0` (off-white `#F5F7FA`).
*   **Layer Assembly**: Following sentence completion, badges for `DATABASE`, `API`, `AUTH`, `BUSINESS LOGIC`, and `UI` enter sequentially with subtle `4px` vertical movement.

#### 4.4. Magnetic Primary Buttons
*   **Applied Elements**: `View My Work`, `Download Resume`, `Start a Conversation`.
*   **Behavior**: Mouse displacement tracking with a maximum pull distance of `4px` to `5px` on `X` and `Y` axes. Easing curve: `cubic-bezier(0.16, 1, 0.3, 1)`. Disabled on touch screens.

#### 4.5. Ambient Cursor Spotlight
*   **Target Devices**: Desktop viewports only (`> 1024px`).
*   **Styling**: Radial gradient `radial-gradient(600px at cursorX cursorY, rgba(99, 102, 241, 0.07), transparent 80%)`.
*   **Safety Rule**: Fixed low opacity (`0.07`), strictly background pointer-events-none, never compromising text contrast or readability.

#### 4.6. Command Palette (`Cmd + K`)
*   **Trigger**: `Cmd+K` / `Ctrl+K` or Navbar click.
*   **Transition**: Backdrop blur overlay `#08090B/90` opens in `150ms`. Input auto-focused with immediate keyboard selection.

#### 4.7. Interactive Developer Terminal
*   **Commands**: `help`, `about`, `stack`, `projects`, `experience`, `contact`, `sudo hire farhan`.
*   **Easter Egg Output**: `sudo hire farhan` -> `✓ Request received.`

#### 4.8. Accessibility & Performance Constraints
*   **`prefers-reduced-motion: reduce`**: Disables ambient cursor spotlight, magnetic button pull, scroll word opacity shifts, and SVG continuous packet travel.
*   **Performance Engine**: All animations strictly utilize GPU-accelerated properties (`transform`, `opacity`, `stroke-dashoffset`). Zero layout thrashing or synchronous expensive calculations.
