# Elevated Neo-Memphis Portfolio Redesign — Implementation Plan

> **For agentic workers:** REQUIRED: Use superpowers:subagent-driven-development (if subagents available) or superpowers:executing-plans to implement this plan. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Transform the homepage and global components from flat Neo-Memphis to Elevated Neo-Memphis with glassmorphism, glow effects, bento grid skills, cinematic project cards, and floating pill navigation.

**Architecture:** CSS-first approach — new design tokens and utility classes in `global.css`, then progressive component rewrites from foundation (layout/header) to content sections (hero/skills/projects/CTA). Zero new dependencies. All effects via CSS `backdrop-filter`, custom properties, and existing GSAP.

**Tech Stack:** Astro 6, Tailwind CSS v4 (`@theme` block), GSAP + ScrollTrigger, TypeScript

**Spec:** `docs/superpowers/specs/2026-03-19-portfolio-redesign-design.md`

---

## File Map

| File                                   | Action  | Responsibility                                                          |
| -------------------------------------- | ------- | ----------------------------------------------------------------------- |
| `src/styles/global.css`                | Modify  | New tokens, glass/glow utilities, grain overlay, updated reduced-motion |
| `src/layouts/BaseLayout.astro`         | Modify  | Obsidian bg, grain pseudo-element, updated noscript selectors           |
| `src/components/Header.astro`          | Rewrite | Floating pill nav, glassmorphic, mobile burger                          |
| `src/components/Footer.astro`          | Modify  | Obsidian bg, violet accent, updated link styles                         |
| `src/pages/index.astro`                | Rewrite | Hero, bento skills, cinematic projects, immersive CTA                   |
| `src/scripts/animations.ts`            | Modify  | Stats bar reveal, bento grid stagger, updated selectors                 |
| `src/components/MemphisShapesFg.astro` | Modify  | Increase shape opacities to 0.15-0.25, add CSS 3D transforms            |
| `src/components/SkillChart.astro`      | Modify  | Ensure responsive sizing for bento card integration                     |

---

### Task 1: Add Elevated design tokens to global.css

**Files:**

- Modify: `src/styles/global.css:10-98` (inside `@theme { }` block)

- [ ] **Step 1: Add new color tokens after existing accent colors**

Add these tokens inside the `@theme { }` block, after the existing `--shadow-hard-glow-*` entries (line ~94) and before `--ease-memphis`:

```css
/* Elevated Neo-Memphis: Neon accent (replaces warm gold in UI) */
--color-neon: #e0ff00;
--color-neon-dim: rgb(224 255 0 / 60%);

/* Elevated Neo-Memphis: Glass surfaces */
--color-surface-1: rgb(255 255 255 / 3%);
--color-surface-2: rgb(255 255 255 / 5%);
--color-surface-3: rgb(255 255 255 / 8%);
--color-border-subtle: rgb(255 255 255 / 6%);
--color-border-medium: rgb(255 255 255 / 10%);

/* Elevated Neo-Memphis: Semantic text */
--color-text-1: #f5f5f7;
--color-text-2: #d1d5db;
--color-text-3: #9ca3af;
--color-text-4: #6b7280;

/* Elevated Neo-Memphis: Glow shadows */
--shadow-glow-violet: 0 0 30px rgb(168 85 247 / 25%), 0 20px 40px rgb(0 0 0 / 30%);
--shadow-glow-neon: 0 0 30px rgb(224 255 0 / 20%), 0 12px 32px rgb(224 255 0 / 15%);
```

- [ ] **Step 2: Verify the build compiles**

Run: `npm run build 2>&1 | tail -5`
Expected: Build succeeds without errors

- [ ] **Step 3: Commit**

```bash
git add src/styles/global.css
git commit -m "feat: add elevated neo-memphis design tokens"
```

---

### Task 2: Add glass/glow utility classes to global.css

**Files:**

- Modify: `src/styles/global.css` (add after the `.card-glow:hover` block, around line 566)

- [ ] **Step 1: Add glassmorphic card class**

Add after the existing `.card-glow:hover` block:

```css
/* ===================
   ELEVATED NEO-MEMPHIS: Glass cards
   =================== */
.card-glass {
  background: var(--color-surface-1);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border: 1px solid var(--color-border-subtle);
  border-radius: 16px;
  transition: all 0.4s var(--ease-memphis);
}

.card-glass:hover {
  border-color: var(--color-primary-500);
  transform: translateY(-4px);
  box-shadow: var(--shadow-glow-violet);
}

.card-glass-featured {
  border-color: rgb(168 85 247 / 20%);
  background: linear-gradient(135deg, var(--color-surface-1), rgb(124 58 237 / 5%));
}

/* ===================
   ELEVATED NEO-MEMPHIS: Buttons
   =================== */
.btn-elevated {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.85rem 1.75rem;
  border-radius: 12px;
  border: 2px solid transparent;
  font-family: var(--font-heading);
  font-size: 0.85rem;
  font-weight: 700;
  text-decoration: none;
  cursor: pointer;
  transition: all 0.3s var(--ease-memphis);
  letter-spacing: 0.02em;
}

.btn-elevated-primary {
  background: var(--color-primary-500);
  color: white;
  border-color: var(--color-primary-500);
  box-shadow: 0 8px 24px rgb(124 58 237 / 25%);
}

.btn-elevated-primary:hover {
  transform: translateY(-3px);
  box-shadow:
    0 0 30px rgb(168 85 247 / 25%),
    0 12px 32px rgb(124 58 237 / 35%);
}

.btn-elevated-ghost {
  background: transparent;
  color: var(--color-text-2);
  border-color: var(--color-border-medium);
}

.btn-elevated-ghost:hover {
  border-color: var(--color-neon-dim);
  color: var(--color-neon);
  transform: translateY(-3px);
  box-shadow: var(--shadow-glow-neon);
}

.btn-elevated-neon {
  background: var(--color-neon);
  color: var(--color-dark-950);
  border-color: var(--color-neon);
  box-shadow: 0 8px 24px rgb(224 255 0 / 15%);
}

.btn-elevated-neon:hover {
  transform: translateY(-3px);
  box-shadow:
    0 0 30px rgb(224 255 0 / 20%),
    0 12px 32px rgb(224 255 0 / 25%);
}

/* ===================
   ELEVATED NEO-MEMPHIS: Grain overlay
   =================== */
.grain-overlay::before {
  content: '';
  position: fixed;
  inset: 0;
  z-index: 9999;
  pointer-events: none;
  opacity: 0.025;
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");
  background-size: 256px;
}

/* ===================
   ELEVATED NEO-MEMPHIS: Skill bars
   =================== */
.skill-bar-elevated {
  width: 100%;
  height: 4px;
  background: var(--color-surface-3);
  border-radius: 2px;
  overflow: hidden;
}

.skill-bar-fill-elevated {
  height: 100%;
  border-radius: 2px;
  transition: width 1s ease-out;
}
```

- [ ] **Step 2: Update gradient-text-animated colors**

In `global.css`, find `.gradient-text-animated` (~line 532) and update its `background-image` gradient to use the new palette:

```css
.gradient-text-animated {
  @apply text-transparent bg-clip-text font-bold;
  background-image: linear-gradient(
    90deg,
    #c4b5fd,
    var(--color-primary-500),
    var(--color-neon),
    var(--color-primary-500)
  );
  background-size: 200% auto;
  animation: gradient-shift 4s ease-in-out infinite;
}
```

This replaces the warm gold accent with neon yellow in the hero name gradient.

- [ ] **Step 3: Update reduced motion to cover new classes**

In the `@media (prefers-reduced-motion: reduce)` block (~line 494), add these selectors to the existing list:

```css
.card-glass,
.card-glass:hover,
.btn-elevated,
.btn-elevated-primary:hover,
.btn-elevated-ghost:hover,
.btn-elevated-neon:hover {
  transition-duration: 0.01ms !important;
  transform: none !important;
}

.grain-overlay::before {
  display: none;
}
```

- [ ] **Step 4: Verify build**

Run: `npm run build 2>&1 | tail -5`
Expected: Build succeeds

- [ ] **Step 5: Commit**

```bash
git add src/styles/global.css
git commit -m "feat: add glass/glow utility classes for elevated design"
```

---

### Task 3: Update BaseLayout with grain overlay and obsidian background

**Files:**

- Modify: `src/layouts/BaseLayout.astro:175`

- [ ] **Step 1: Add grain-overlay class to body**

Change line 175:

```astro
<body class="min-h-screen flex flex-col bg-dark-900 relative overflow-x-hidden"></body>
```

To:

```astro
<body class="min-h-screen flex flex-col bg-dark-950 relative overflow-x-hidden grain-overlay"
></body>
```

This switches background from `dark-900` (#0f0f0f) to `dark-950` (#050505) and adds the grain texture overlay.

- [ ] **Step 2: Verify dev server shows grain texture**

Run: `npm run dev`
Expected: Subtle grain texture visible over dark background at <http://localhost:4321/portfolio/>

- [ ] **Step 3: Commit**

```bash
git add src/layouts/BaseLayout.astro
git commit -m "feat: switch to obsidian background with grain overlay"
```

---

### Task 4: Rewrite Header as floating pill navigation

**Files:**

- Rewrite: `src/components/Header.astro`

- [ ] **Step 1: Rewrite Header.astro**

Replace the entire file with the floating pill navigation. Key changes:

- Remove profile image import and avatar
- Replace full-width fixed header with centered floating pill (`border-radius: 100px`)
- Glass background: `rgba(5,5,5,0.6)` with `backdrop-blur(24px)`
- Logo as text initials "V.C" instead of photo + name
- Nav links as pills with active state (neon bg)
- CTA button with violet bg
- Mobile: full-width glass bar with burger menu
- Preserve `transition:persist` for View Transitions
- Preserve all existing functionality: mobile menu, focus trap, escape handling, scroll observer, active nav state updates

The `isActive` logic, `define:vars`, and all JavaScript behavior remain functionally identical. Only the HTML structure and CSS classes change.

Keep the `mainNavigation` import and `isActive` function unchanged. The mobile menu behavior (open/close/focus trap/escape) stays the same but with updated class names and selectors.

**Critical:** Update all class references in the `<script>` block to match the new markup:

- Desktop nav selector: update to match new structure
- Header scroll observer: update border classes to match new glass style
- Mobile menu: update classes for the new glass dropdown

- [ ] **Step 2: Verify navigation works on dev server**

Run: `npm run dev`
Check at <http://localhost:4321/portfolio/>:

- Floating pill visible centered at top
- Links are clickable and highlight correctly
- Mobile menu opens/closes
- Escape key closes menu
- Scroll changes header appearance

- [ ] **Step 3: Verify typecheck passes**

Run: `npm run validate 2>&1 | tail -10`
Expected: No errors

- [ ] **Step 4: Commit**

```bash
git add src/components/Header.astro
git commit -m "feat: rewrite header as floating pill glassmorphic nav"
```

---

### Task 5: Rewrite Hero section

**Files:**

- Modify: `src/pages/index.astro:1-115` (frontmatter + hero section)

- [ ] **Step 1: Update frontmatter to load all skills**

**Why this changes:** The current frontmatter loads only 4 featured skills (`slice(0, 4)`) and 3 projects (`slice(0, 3)`). The new design shows ALL 10 skills in a bento grid (Task 6 depends on `allSkills`) and 5 projects. `featuredSkills` is removed entirely — replaced by `allSkills`. Dynamic stats (`skillCount`, `projectCount`, `yearsExp`) replace the hardcoded `10`, `5`, `3`.

Replace lines 1-15 with:

```astro
---
import { Image } from 'astro:assets';
import BaseLayout from '@layouts/BaseLayout.astro';
import { getCollection } from 'astro:content';
import { url } from '@utils/url';
import { getProjectImage } from '@utils/images';
import profileImage from '@assets/images/profile.jpg';

const allSkills = await getCollection('skills');
const allProjects = await getCollection('projects');

const featuredProjects = allProjects
  .sort((a, b) => (a.data.order ?? 99) - (b.data.order ?? 99))
  .slice(0, 5);

const skillCount = allSkills.length;
const projectCount = allProjects.length;
const yearsExp = new Date().getFullYear() - 2022;
---
```

- [ ] **Step 2: Replace hero section markup**

Replace the entire hero `<section>` (lines 19-115). **Include responsive classes inline** — do NOT defer to Task 11.

**Reference mockup:** `.superpowers/brainstorm/manual-1773954521/02-homepage-fullmockup.html` (hero section CSS/HTML)

**Required HTML structure (responsive classes included):**

```astro
<section class="min-h-screen flex items-center relative overflow-hidden py-20 lg:py-32">
  <!-- Background layers -->
  <div
    class="absolute inset-0"
    style="background: radial-gradient(ellipse 80% 60% at 70% 40%, rgba(124,58,237,0.12), transparent), radial-gradient(ellipse 50% 50% at 20% 80%, rgba(224,255,0,0.04), transparent), #050505;"
  >
  </div>
  <div
    class="absolute inset-0"
    style="background-image: linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px); background-size: 60px 60px; mask-image: radial-gradient(ellipse 60% 50% at 50% 50%, black, transparent); -webkit-mask-image: radial-gradient(ellipse 60% 50% at 50% 50%, black, transparent);"
  >
  </div>

  <div class="container-custom relative z-10">
    <div class="grid grid-cols-1 lg:grid-cols-[1.3fr_1fr] gap-8 lg:gap-16 items-center">
      <!-- Text content (data-gsap="hero") -->
      <div data-gsap="hero">
        <div
          class="flex items-center gap-2 mb-4 text-[0.7rem] font-semibold uppercase tracking-[0.15em]"
          style="color: var(--color-neon);"
        >
          <span class="w-6 h-0.5" style="background: var(--color-neon);"></span>
          Développeur Web Fullstack
        </div>
        <h1
          class="text-4xl sm:text-5xl lg:text-[4.5rem] font-heading font-black leading-[1] tracking-[-0.04em] text-white mb-3"
        >
          Salut, je suis<br />
          <span class="gradient-text-animated">Virgil Chareyre</span>
        </h1>
        <p
          class="text-lg lg:text-[1.4rem] font-heading font-semibold tracking-[-0.01em] mb-4"
          style="color: var(--color-text-3);"
        >
          Je conçois des expériences web modernes et performantes.
        </p>
        <p class="text-base mb-8 max-w-[480px] leading-relaxed" style="color: var(--color-text-4);">
          Passionné par les architectures frontend et backend, je transforme des idées complexes en
          interfaces élégantes et des systèmes robustes.
        </p>
        <div class="flex flex-wrap gap-4">
          <a href={url('/projects')} class="btn-elevated btn-elevated-primary">Mes réalisations →</a
          >
          <a href={url('/contact')} class="btn-elevated btn-elevated-ghost">Me contacter</a>
        </div>
      </div>

      <!-- Visual side (hidden on mobile) -->
      <div class="hidden lg:flex relative h-[500px] items-center justify-center" data-gsap="reveal">
        <!-- Glow orb -->
        <div
          class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] rounded-full"
          style="background: radial-gradient(circle, rgba(124,58,237,0.15), transparent 70%); filter: blur(40px);"
        >
        </div>
        <!-- Avatar frame with 3D perspective -->
        <div
          class="relative z-10 w-[280px] h-[280px] rounded-3xl overflow-hidden"
          style="background: var(--color-surface-2); border: 2px solid var(--color-border-medium); transform: perspective(800px) rotateY(-5deg) rotateX(2deg); box-shadow: 0 0 60px rgba(124,58,237,0.15), 0 25px 50px rgba(0,0,0,0.5);"
        >
          <Image
            src={profileImage}
            alt="Photo de Virgil CHAREYRE"
            class="w-full h-full object-cover"
            width={280}
            height={280}
            loading="eager"
            fetchpriority="high"
            format="webp"
            quality={85}
          />
        </div>
        <!-- 4 floating Memphis shapes (CSS animated) -->
        <!-- Shape 1: bordered square rotating -->
        <div
          class="absolute top-5 right-8 w-[70px] h-[70px] rounded-xl border-[3px] border-primary-500 opacity-50"
          style="animation: heroFloat1 8s ease-in-out infinite;"
        >
        </div>
        <!-- Shape 2: neon circle -->
        <div
          class="absolute bottom-16 left-0 w-[50px] h-[50px] rounded-full opacity-40"
          style="background: rgba(224,255,0,0.1); border: 2px solid rgba(224,255,0,0.3); animation: heroFloat2 6s ease-in-out infinite;"
        >
        </div>
        <!-- Shape 3: violet diamond -->
        <div
          class="absolute top-28 left-8 w-10 h-10 rotate-45 opacity-40"
          style="background: rgba(168,85,247,0.08); border: 2px solid rgba(168,85,247,0.2); animation: heroFloat3 7s ease-in-out infinite;"
        >
        </div>
        <!-- Shape 4: dot grid -->
        <div
          class="absolute bottom-5 right-16 w-1.5 h-1.5 rounded-full opacity-40"
          style="background: var(--color-neon); box-shadow: 20px 15px 0 var(--color-neon), 40px 5px 0 var(--color-primary-500), 10px 30px 0 var(--color-primary-500); animation: heroFloat1 5s ease-in-out infinite reverse;"
        >
        </div>
      </div>
    </div>
  </div>

  <!-- Stats bar (glass, floating at bottom) -->
  <div
    class="absolute bottom-12 left-1/2 -translate-x-1/2 z-20 hidden sm:flex"
    data-gsap="stats-bar"
    style="background: rgba(5,5,5,0.5); backdrop-filter: blur(20px); border: 1px solid var(--color-border-subtle); border-radius: 16px; box-shadow: 0 8px 32px rgba(0,0,0,0.3); overflow: hidden;"
  >
    <div
      class="px-6 lg:px-10 py-4 lg:py-5 text-center"
      style="border-right: 1px solid var(--color-border-subtle);"
    >
      <p class="text-2xl font-heading font-black text-primary-500 leading-none">{skillCount}</p>
      <p class="text-[0.65rem] uppercase tracking-[0.1em] mt-1" style="color: var(--color-text-4);">
        Compétences
      </p>
    </div>
    <div
      class="px-6 lg:px-10 py-4 lg:py-5 text-center"
      style="border-right: 1px solid var(--color-border-subtle);"
    >
      <p class="text-2xl font-heading font-black leading-none" style="color: var(--color-neon);">
        {projectCount}
      </p>
      <p class="text-[0.65rem] uppercase tracking-[0.1em] mt-1" style="color: var(--color-text-4);">
        Projets
      </p>
    </div>
    <div class="px-6 lg:px-10 py-4 lg:py-5 text-center">
      <p class="text-2xl font-heading font-black text-info-400 leading-none">{yearsExp}</p>
      <p class="text-[0.65rem] uppercase tracking-[0.1em] mt-1" style="color: var(--color-text-4);">
        Ans d'XP
      </p>
    </div>
  </div>

  <!-- Scroll indicator -->
  <div
    class="absolute bottom-28 left-1/2 -translate-x-1/2 z-10 hidden lg:flex flex-col items-center gap-2"
  >
    <span class="text-[0.6rem] uppercase tracking-[0.1em]" style="color: var(--color-text-4);"
      >Scroll</span
    >
    <div
      class="w-px h-8"
      style="background: linear-gradient(to bottom, var(--color-primary-500), transparent); animation: scrollPulse 2s ease-in-out infinite;"
    >
    </div>
  </div>
</section>

<!-- Hero CSS animations (scoped) -->
<style>
  @keyframes heroFloat1 {
    0%,
    100% {
      transform: rotate(15deg) translateY(0);
    }
    50% {
      transform: rotate(18deg) translateY(-15px);
    }
  }
  @keyframes heroFloat2 {
    0%,
    100% {
      transform: translateY(0) scale(1);
    }
    50% {
      transform: translateY(-10px) scale(1.05);
    }
  }
  @keyframes heroFloat3 {
    0%,
    100% {
      transform: rotate(45deg) translateY(0);
    }
    50% {
      transform: rotate(42deg) translateY(-12px);
    }
  }
  @keyframes scrollPulse {
    0%,
    100% {
      opacity: 0.3;
    }
    50% {
      opacity: 1;
    }
  }
</style>
```

All internal links use `url()`. Profile image uses the existing `profileImage` import. Responsive classes are already included inline (`hidden lg:flex`, `grid-cols-1 lg:grid-cols-[...]`, `hidden sm:flex`).

- [ ] **Step 3: Verify hero renders correctly**

Run: `npm run dev`
Expected: Full-viewport hero with gradient background, profile image with 3D tilt, floating shapes, glass stats bar

- [ ] **Step 4: Commit**

```bash
git add src/pages/index.astro
git commit -m "feat: rewrite hero section with elevated design"
```

---

### Task 6: Rewrite Skills section as Bento Grid

**Files:**

- Modify: `src/pages/index.astro` (skills section, ~lines 117-179)
- Modify: `src/pages/index.astro` (add SkillChart import in frontmatter)

- [ ] **Step 1: Add SkillChart import**

In the frontmatter, add:

```typescript
import SkillChart from '@components/SkillChart.astro';

// Map skills to the format SkillChart expects
const chartData = allSkills.map((skill) => ({
  name: skill.data.title,
  slug: skill.id,
  level: skill.data.level,
  category: skill.data.category,
  group: skill.data.group,
}));
```

Then in the bento grid, use `<SkillChart skills={chartData} />` (NOT `allSkills` directly — the component expects mapped objects with `name`, `slug`, `level`, `category`, `group`).

- [ ] **Step 2: Replace skills section**

Replace the entire "Featured Skills Section" with the bento grid. **Include responsive classes inline.**

**Reference mockup:** `.superpowers/brainstorm/manual-1773954521/02-homepage-fullmockup.html` (skills bento section)

**Grid structure (responsive):**

```html
<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4" data-gsap="stagger"></div>
```

**Skill-to-cell mapping with responsive spans:**

| Skill slug                     | Grid span       | Responsive                                  | Note                                   |
| ------------------------------ | --------------- | ------------------------------------------- | -------------------------------------- |
| `javascript-typescript`        | `lg:col-span-2` | `sm:col-span-2 lg:col-span-2`               | Featured, `.card-glass-featured`       |
| `frontend-frameworks`          | 1 col           | —                                           | Icon: ⚛, cyan bar                      |
| `nodejs-backend`               | 1 col           | —                                           | Icon: N, violet bar                    |
| Radar chart                    | `lg:row-span-2` | `sm:col-span-2 lg:col-span-1 lg:row-span-2` | `<SkillChart allSkills={allSkills} />` |
| `databases`                    | 1 col           | —                                           | Icon: DB, neon bar                     |
| `api-architecture`             | 1 col           | —                                           | Icon: ⇄, violet bar                    |
| `communication`                | 1 col           | —                                           | Icon: ◎, rose bar                      |
| `adaptability`                 | 1 col           | —                                           | Icon: ⚡, neon bar                     |
| `problem-solving` + `teamwork` | `lg:col-span-2` | `sm:col-span-2 lg:col-span-2`               | Combined card                          |
| `veille-technologique`         | 1 col           | —                                           | Icon: 🔭, neon bar                     |

**Each skill card template:**

```astro
<a href={url(`/skills/${skill.id}`)} class="card-glass p-6 flex flex-col">
  <div
    class="w-9 h-9 rounded-[10px] flex items-center justify-center text-lg mb-4"
    style="background: rgba(168,85,247,0.1); color: #a855f7; border: 1px solid rgba(168,85,247,0.2);"
  >
    {skill.data.icon || '✦'}
  </div>
  <h3 class="font-heading text-[0.95rem] font-bold text-white mb-1">{skill.data.title}</h3>
  <p class="text-[0.8rem] flex-1" style="color: var(--color-text-4);">{skill.data.summary}</p>
  <div class="mt-auto pt-4">
    <div class="flex justify-between text-[0.6rem] mb-1" style="color: var(--color-text-4);">
      <span>Niveau</span><span>{skill.data.level}/10</span>
    </div>
    <div class="skill-bar-elevated">
      <div
        class="skill-bar-fill-elevated"
        style={`width: ${skill.data.level * 10}%; background: linear-gradient(90deg, #7c3aed, #a855f7);`}
      >
      </div>
    </div>
  </div>
</a>
```

**Skill bar colors by group:**

- Frontend (cyan): `linear-gradient(90deg, rgb(34 211 238 / 50%), #22d3ee)`
- Backend (violet): `linear-gradient(90deg, #7c3aed, #a855f7)`
- Personal (neon): `linear-gradient(90deg, rgb(224 255 0 / 60%), #e0ff00)`
- Interpersonal (rose): `linear-gradient(90deg, rgb(251 113 133 / 50%), #fb7185)`

**Icon box colors by group:** same pattern (violet bg for backend, cyan for frontend, neon for personal, rose for interpersonal).

Build the grid by iterating `allSkills` sorted by `order`, using a switch on `skill.id` for spans and special styling. The radar chart is a static card (not linked) placed at its grid position.

- [ ] **Step 3: Verify bento grid renders**

Run: `npm run dev`
Expected: Asymmetric bento grid with all 10 skills + radar chart, glass cards with skill bars

- [ ] **Step 4: Commit**

```bash
git add src/pages/index.astro
git commit -m "feat: rewrite skills section as bento grid with all skills"
```

---

### Task 7: Rewrite Projects section as cinematic cards

**Files:**

- Modify: `src/pages/index.astro` (projects section)

- [ ] **Step 1: Replace projects section**

Replace the "Featured Projects Section". **Include responsive classes inline.**

**Grid structure (responsive):**

```html
<div class="grid grid-cols-1 md:grid-cols-2 gap-6" data-gsap="stagger"></div>
```

First project uses `md:col-span-2` (wide on md+, full-width on mobile). Remaining 4 are standard 1-col each (2 per row on md+).

**Each project card template:**

```astro
<a
  href={url(`/projects/${project.id}`)}
  class="card-glass overflow-hidden group relative"
  style={isFirst ? '' : ''}
>
  <!-- Thumbnail -->
  <div
    class={`relative overflow-hidden ${isFirst ? 'h-[200px] md:h-[280px]' : 'h-[180px] md:h-[220px]'}`}
    style="background: linear-gradient(135deg, var(--color-surface-2), rgba(124,58,237,0.05));"
  >
    <!-- Checkerboard pattern overlay -->
    <div
      class="absolute inset-0 opacity-5"
      style="background-image: linear-gradient(45deg, var(--color-primary-500) 25%, transparent 25%), linear-gradient(-45deg, var(--color-primary-500) 25%, transparent 25%), linear-gradient(45deg, transparent 75%, var(--color-primary-500) 75%), linear-gradient(-45deg, transparent 75%, var(--color-primary-500) 75%); background-size: 20px 20px;"
    >
    </div>
    <!-- Project name as oversized bg text -->
    <div
      class="absolute inset-0 flex items-center justify-center font-heading text-5xl font-black tracking-tight"
      style="color: rgba(168,85,247,0.12);"
    >
      {project.data.title.split(' ')[0]?.toUpperCase()}
    </div>
    <!-- Actual thumbnail image if available -->
    {thumbImage && <Image src={thumbImage} ... class="w-full h-full object-cover" />}
    <!-- Gradient overlay to bottom -->
    <div
      class="absolute inset-0 bg-gradient-to-t from-[#050505]/90 to-transparent/0 via-transparent"
    >
    </div>
  </div>
  <!-- Info -->
  <div class="p-5 relative">
    <div class="flex gap-1.5 flex-wrap mb-3">
      {
        project.data.relatedSkills
          ?.slice(0, 3)
          .map((tag) => <span class="tag-primary text-[0.6rem]">{tag}</span>)
      }
    </div>
    <h3 class="font-heading text-lg font-bold text-white mb-1.5">{project.data.title}</h3>
    <p class="text-[0.82rem] line-clamp-2" style="color: var(--color-text-4);">
      {project.data.shortDescription}
    </p>
    <!-- Arrow icon -->
    <span
      class="absolute top-5 right-5 w-9 h-9 rounded-[10px] flex items-center justify-center text-sm transition-all duration-300"
      style="background: var(--color-surface-2); border: 1px solid var(--color-border-subtle); color: var(--color-text-4);"
      >↗</span
    >
  </div>
</a>
```

- Use `getProjectImage` for thumbnail
- 5 projects from `featuredProjects`
- Card hover: override `.card-glass:hover` with `translateY(-6px)` for project cards (more intense lift)

- [ ] **Step 2: Verify projects render**

Run: `npm run dev`
Expected: 2-column layout with wide featured card and 4 standard cards

- [ ] **Step 3: Commit**

```bash
git add src/pages/index.astro
git commit -m "feat: rewrite projects section with cinematic cards"
```

---

### Task 8: Rewrite CTA section

**Files:**

- Modify: `src/pages/index.astro` (CTA section)

- [ ] **Step 1: Replace CTA section**

Replace the "CTA Section". **Include responsive classes inline.**

```astro
<section class="relative py-20 lg:py-32 text-center overflow-hidden" aria-labelledby="cta-heading">
  <!-- Background -->
  <div
    class="absolute inset-0"
    style="background: radial-gradient(ellipse 70% 50% at 50% 50%, rgba(124,58,237,0.15), transparent), radial-gradient(ellipse 40% 40% at 30% 70%, rgba(224,255,0,0.05), transparent), #050505;"
  >
  </div>
  <!-- Top gradient border -->
  <div
    class="absolute top-0 left-[10%] right-[10%] h-px"
    style="background: linear-gradient(90deg, transparent, #a855f7, var(--color-neon), #a855f7, transparent);"
  >
  </div>
  <!-- Floating shapes (opacity 0.1) -->
  <div
    class="absolute top-[15%] left-[8%] w-[60px] h-[60px] rounded-full border-[3px] border-primary-500 opacity-10"
    style="animation: heroFloat2 8s ease-in-out infinite;"
  >
  </div>
  <div
    class="absolute bottom-[20%] right-[10%] w-10 h-10 border-[3px] opacity-10 rotate-45"
    style="border-color: var(--color-neon); animation: heroFloat1 6s ease-in-out infinite;"
  >
  </div>
  <!-- Content -->
  <div class="container-custom relative z-10" data-gsap="cta">
    <h2
      id="cta-heading"
      class="text-2xl md:text-3xl lg:text-[3.5rem] font-heading font-black text-white tracking-tight leading-tight mb-4"
    >
      Envie de <span
        class="text-transparent bg-clip-text"
        style="background-image: linear-gradient(135deg, #a855f7, var(--color-neon));"
        >collaborer</span
      > ?
    </h2>
    <p class="text-base lg:text-lg max-w-[500px] mx-auto mb-10" style="color: var(--color-text-4);">
      Je suis ouvert aux opportunités CDI, CDD, freelance et toujours partant pour des projets
      ambitieux.
    </p>
    <div class="flex flex-col sm:flex-row gap-4 justify-center">
      <a href={url('/contact')} class="btn-elevated btn-elevated-neon">Me contacter →</a>
      <a href={url('/cv')} class="btn-elevated btn-elevated-ghost">Télécharger mon CV</a>
    </div>
  </div>
</section>
```

The CTA reuses `heroFloat1`/`heroFloat2` keyframes defined in the hero `<style>` block (Astro scoped styles are per-component, but since both are in `index.astro` they share the same scope).

- [ ] **Step 2: Verify CTA renders**

Run: `npm run dev`
Expected: Immersive CTA section with gradient glow and floating shapes

- [ ] **Step 3: Commit**

```bash
git add src/pages/index.astro
git commit -m "feat: rewrite CTA section with immersive glow design"
```

---

### Task 9: Update Footer styles

**Files:**

- Modify: `src/components/Footer.astro`

- [ ] **Step 1: Update footer styles**

Changes to make:

- Outer `<footer>`: change `border-t-2 border-dark-700` to `border-t border-[--color-border-subtle]`
- Container: change `py-12 md:py-16` to `py-12 md:py-16`(keep) but add background context
- Name text: wrap "CHAREYRE" in `<span class="text-primary-400">` for violet accent
- All `text-gray-400` links: add `hover:text-primary-300` (lighter violet on hover)
- Bottom bar border: change `border-dark-700` to `border-[--color-border-subtle]`
- Contact icon boxes: change `bg-dark-800 border border-dark-600` to use glass surface tokens

- [ ] **Step 2: Verify footer renders**

Run: `npm run dev`
Expected: Footer with subtle borders and violet accents

- [ ] **Step 3: Commit**

```bash
git add src/components/Footer.astro
git commit -m "feat: update footer with elevated design tokens"
```

---

### Task 10: Update GSAP animations

**Files:**

- Modify: `src/scripts/animations.ts`

- [ ] **Step 1: Add stats bar reveal animation**

Add a new function after `animateHero()`:

```typescript
function animateStatsBar(): void {
  const statsBar = document.querySelector<HTMLElement>('[data-gsap="stats-bar"]');
  if (!statsBar) return;

  gsap.set(statsBar, { opacity: 0, y: 20, scale: 0.95 });
  gsap.to(statsBar, {
    opacity: 1,
    y: 0,
    scale: 1,
    duration: 0.8,
    ease: 'power3.out',
    delay: 0.3,
  });
}
```

- [ ] **Step 2: Add animateStatsBar to the deferred animations array**

In `initAnimations()`, add `animateStatsBar` right after `animateHero` in the deferred list:

```typescript
const deferredAnimations = [
  animateStatsBar,
  animateScrollReveal,
  animateStagger,
  animateTimeline,
  animateTimelineLine,
  animateCTA,
  animateMemphisShapes,
];
```

- [ ] **Step 3: Update noscript selectors in BaseLayout**

In `src/layouts/BaseLayout.astro`, add `[data-gsap="stats-bar"]` to the noscript style block so stats are visible without JS.

- [ ] **Step 4: Update reduced motion selectors in global.css**

In the `prefers-reduced-motion` block, add `[data-gsap="stats-bar"]` to the existing selector list.

- [ ] **Step 5: Verify animations work**

Run: `npm run dev`
Expected: Hero elements stagger in, stats bar slides up after a short delay

- [ ] **Step 6: Verify typecheck**

Run: `npm run validate 2>&1 | tail -10`
Expected: No errors

- [ ] **Step 7: Commit**

```bash
git add src/scripts/animations.ts src/layouts/BaseLayout.astro src/styles/global.css
git commit -m "feat: add stats bar reveal animation"
```

---

### Task 11: Update MemphisShapesFg and SkillChart for elevated design

**Files:**

- Modify: `src/components/MemphisShapesFg.astro`
- Modify: `src/components/SkillChart.astro`

- [ ] **Step 1: Update Memphis shape opacities**

In `MemphisShapesFg.astro`, increase shape opacities from 0.07-0.12 range to 0.15-0.25 range. Each shape's inline `style="opacity: X"` needs updating. This makes the shapes more visible against the obsidian background.

- [ ] **Step 2: Ensure SkillChart works in bento card context**

In `SkillChart.astro`, ensure the SVG radar chart renders correctly when placed inside a bento grid card. The component currently expects to fill its container — verify that:

- The SVG `viewBox` is preserved and scales properly
- The component accepts the skills data from `allSkills` (check the props interface)
- Colors are compatible with the new dark obsidian background (the chart already uses dark theme colors)
- The component doesn't have a fixed width/height that breaks the bento cell layout

If the component needs a wrapper for proper sizing in the bento context, add it. If it works as-is, no changes needed — just verify.

- [ ] **Step 3: Verify shapes and chart render**

Run: `npm run dev`
Expected: Memphis shapes visible at higher opacity, radar chart fits nicely in its bento cell

- [ ] **Step 4: Commit**

```bash
git add src/components/MemphisShapesFg.astro src/components/SkillChart.astro
git commit -m "feat: update memphis shapes and skill chart for elevated design"
```

---

### Task 12: Build validation and final check

**Files:** All modified files

- [ ] **Step 1: Run full validation**

Run: `npm run validate`
Expected: typecheck + lint + format:check + knip all pass

- [ ] **Step 2: Fix any lint/format issues**

Run: `npm run lint:fix && npm run format`

- [ ] **Step 3: Run production build**

Run: `npm run build`
Expected: Build succeeds with no errors or warnings

- [ ] **Step 4: Preview production build**

Run: `npm run preview`
Check all sections at <http://localhost:4321/portfolio/>:

- Navigation: floating pill, mobile menu works
- Hero: gradient bg, 3D photo, floating shapes, glass stats bar
- Skills: bento grid, all 10 skills + radar, glass cards with skill bars
- Projects: 2-col cinematic, featured wide card, glow hover
- CTA: immersive gradient, floating shapes
- Footer: violet accents, subtle borders
- Grain texture visible throughout
- Scroll animations work (hero stagger, batch reveals, CTA)
- `prefers-reduced-motion` respected

- [ ] **Step 5: Commit any final fixes**

```bash
git add src/styles/global.css src/pages/index.astro src/components/ src/layouts/ src/scripts/
git commit -m "fix: polish elevated design after validation"
```
