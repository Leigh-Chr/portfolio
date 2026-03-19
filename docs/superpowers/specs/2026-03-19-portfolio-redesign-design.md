# Elevated Neo-Memphis Portfolio Redesign — Design Spec

**Date:** 2026-03-19
**Direction choisie:** Hybrid Elevated Neo-Memphis
**Scope:** Homepage (index.astro) + composants globaux (Header, Footer, BaseLayout, global.css)

---

## 1. Direction Design

**Hybrid Elevated Neo-Memphis** — fondation Premium (glassmorphism, depth, polish) rehaussée de touches Experimental ciblées (typo bold, bento asymétrique, formes 3D flottantes, glow néon).

Justification : le portfolio vise des employeurs tech et startups. Le premium assure le professionnalisme, les touches expérimentales créent la mémorabilité. Pas de Three.js ni de dépendances supplémentaires — tout en CSS natif + GSAP existant.

---

## 2. Palette de couleurs

### Couleurs principales

| Token            | Hex                     | Usage                                                     |
| ---------------- | ----------------------- | --------------------------------------------------------- |
| `--obsidian`     | `#050505`               | Background principal (plus profond que le #0f0f0f actuel) |
| `--violet-deep`  | `#7C3AED`               | Gradients, ombres, hover states                           |
| `--violet`       | `#A855F7`               | Accents primaires, boutons, liens (inchangé)              |
| `--violet-light` | `#C4B5FD`               | Texte sur fond violet, hover text                         |
| `--violet-glow`  | `rgba(168,85,247,0.25)` | Box-shadow glow                                           |
| `--neon`         | `#E0FF00`               | Accent secondaire (remplace #FACC15 warm gold)            |
| `--neon-glow`    | `rgba(224,255,0,0.20)`  | Glow néon                                                 |
| `--cyan`         | `#22D3EE`               | Frontend skills (inchangé)                                |
| `--rose`         | `#FB7185`               | Soft skills / interpersonnel (inchangé)                   |

### Surfaces glassmorphiques

| Token             | Valeur                   | Usage                          |
| ----------------- | ------------------------ | ------------------------------ |
| `--surface-1`     | `rgba(255,255,255,0.03)` | Cards, containers              |
| `--surface-2`     | `rgba(255,255,255,0.05)` | Hover states, headers internes |
| `--surface-3`     | `rgba(255,255,255,0.08)` | Éléments actifs, tracks        |
| `--border-subtle` | `rgba(255,255,255,0.06)` | Bordures par défaut            |
| `--border-medium` | `rgba(255,255,255,0.10)` | Bordures accentuées            |

### Texte

| Token      | Hex       | Usage                          |
| ---------- | --------- | ------------------------------ |
| `--text-1` | `#F5F5F7` | Titres, texte primaire         |
| `--text-2` | `#D1D5DB` | Corps de texte                 |
| `--text-3` | `#9CA3AF` | Texte secondaire               |
| `--text-4` | `#6B7280` | Labels, captions, descriptions |

### Gradients

- **Hero name:** `linear-gradient(135deg, #C4B5FD 0%, #A855F7 40%, #E0FF00 100%)`
- **Violet depth:** `linear-gradient(135deg, #7C3AED, #A855F7)`
- **CTA text:** `linear-gradient(135deg, #A855F7, #E0FF00)`
- **Hero background radials:**
  - `radial-gradient(ellipse 80% 60% at 70% 40%, rgba(124,58,237,0.12), transparent)`
  - `radial-gradient(ellipse 50% 50% at 20% 80%, rgba(224,255,0,0.04), transparent)`

---

## 3. Typographie

Polices inchangées : **Space Grotesk** (titres) + **DM Sans** (corps).

| Élément     | Font          | Weight  | Size    | Spacing | Notes                                     |
| ----------- | ------------- | ------- | ------- | ------- | ----------------------------------------- |
| H1 Hero     | Space Grotesk | 900     | 4.5rem  | -0.04em | Gradient animated text                    |
| H2 Section  | Space Grotesk | 800     | 2.5rem  | -0.03em | Mot accent en `--neon`                    |
| H3 Card     | Space Grotesk | 700     | 1.1rem  | —       |                                           |
| Eyebrow     | DM Sans       | 700     | 0.65rem | 0.15em  | Uppercase, couleur `--violet` ou `--neon` |
| Tagline     | Space Grotesk | 600     | 1.4rem  | -0.01em | `--text-3`                                |
| Body        | DM Sans       | 400     | 1rem    | —       | line-height 1.6                           |
| Caption     | DM Sans       | 500     | 0.82rem | —       | `--text-4`                                |
| Stat number | Space Grotesk | 900     | 2rem    | —       | Couleur selon contexte                    |
| Tag/Badge   | DM Sans       | 600–700 | 0.6rem  | 0.05em  | Uppercase                                 |

---

## 4. Effets visuels

### Glassmorphism

- **Recette:** `background: var(--surface-1); backdrop-filter: blur(12px); border: 1px solid var(--border-subtle);`
- **Appliqué sur:** Cards skills, header nav, stats bar, modales
- **Variante accent:** `background: rgba(124,58,237,0.05); border-color: rgba(168,85,247,0.2)` (featured items)

### Glow

- **Card hover:** `box-shadow: 0 0 30px var(--violet-glow), 0 20px 40px rgba(0,0,0,0.3)`
- **Button hover:** `box-shadow: 0 0 30px var(--violet-glow), 0 12px 32px rgba(124,58,237,0.35)`
- **Neon glow:** `box-shadow: 0 0 30px var(--neon-glow), 0 12px 32px rgba(224,255,0,0.25)`

### Hard Shadows (Memphis, conservés)

Les ombres dures Memphis restent disponibles via les utilitaires existants (`shadow-hard`, `shadow-hard-lg`, `shadow-hard-purple`) pour le bouton chunky et les éléments qui veulent un look Memphis pur. Le glow les complète, ne les remplace pas.

### Grain Texture

- **SVG noise overlay** en `position: fixed; inset: 0`
- **Opacity:** `0.02–0.03` (très subtil)
- **pointer-events: none; z-index: 9999**
- Implémenté via `body::before` pseudo-element avec `feTurbulence`

### Grid Lines (Hero)

- Background-image avec `linear-gradient` 1px lignes à `rgba(255,255,255,0.02)`
- `background-size: 60px 60px`
- Masqué en radial gradient (`mask-image`) pour fade out vers les bords

---

## 5. Composants

### 5.1 Navigation — Floating Pill

Remplace le header full-width actuel par une navigation pill flottante centrée. Le logo texte "V.C" remplace la photo de profil + nom complet actuels — l'avatar est déplacé dans le hero section.

**Impact global :** Ce composant est partagé par toutes les pages via `BaseLayout.astro`. Le changement en floating pill s'applique donc sur l'ensemble du site dès cette phase, pas seulement la homepage.

```text
Structure:
nav.nav (fixed, top: 1rem, left: 50%, transform: translateX(-50%))
├── .nav-logo ("V.C" — texte initiales, remplace la photo de profil actuelle)
├── a (×4-5 liens)
└── a.nav-cta ("Contact")

Styles:
- background: rgba(5,5,5,0.6)
- backdrop-filter: blur(24px) saturate(1.5)
- border: 1px solid var(--border-subtle)
- border-radius: 100px
- box-shadow: 0 4px 30px rgba(0,0,0,0.3)
- Lien actif: color neon + bg rgba(224,255,0,0.08)
- CTA: bg violet, color white, border-radius 100px

Mobile (< 640px): full-width avec burger menu
Tablet (640–1023px): idem mais plus compact
```

La nav conserve `transition:persist` pour les View Transitions.

### 5.2 Hero Section

Layout 2 colonnes (1.3fr texte / 1fr visual) sur fond obsidian avec radial gradients et grid lines.

```text
Structure:
section.hero (min-height: 100vh)
├── .hero-bg (radial gradients)
├── .hero-grid-lines (subtle grid pattern)
├── .hero-content (2-col grid)
│   ├── .hero-text
│   │   ├── .eyebrow ("Développeur Web Fullstack" avec line accent)
│   │   ├── h1 ("Salut, je suis" + span.gradient-name)
│   │   ├── p.tagline
│   │   ├── p.description
│   │   └── .hero-btns (primary + ghost)
│   └── .hero-visual
│       ├── .hero-avatar-frame (photo avec perspective 3D)
│       ├── .hero-shape ×4 (formes Memphis flottantes)
│       └── .glow-orb (radial glow derrière avatar)
├── .hero-stats (glass bar flottante en bas)
│   ├── .stat-item (N compétences, violet) — dynamique via allSkills.length
│   ├── .stat-item (N projets, neon) — dynamique via allProjects.length
│   └── .stat-item (N ans XP, cyan) — calculé depuis la date de début de carrière
└── .scroll-indicator (scroll + line pulsante)
```

**Boutons:**

- `.btn-primary`: bg violet, border violet, glow hover, lift -3px
- `.btn-ghost`: transparent, border subtle, neon border + color on hover

**Photo:**

- `border-radius: 24px`
- `border: 2px solid var(--border-medium)`
- `transform: perspective(800px) rotateY(-5deg) rotateX(2deg)`
- `box-shadow: 0 0 60px rgba(124,58,237,0.15), 0 25px 50px rgba(0,0,0,0.5)`

**Formes Memphis flottantes:**

- 4 shapes autour de la photo : carré bordé rotatif, cercle néon, losange violet, dot grid
- CSS animations `float` 5–8s ease-in-out infinite
- Opacity 0.4–0.5

### 5.3 Skills — Bento Grid

Remplace le grid 4-col uniforme par un bento grid asymétrique. **Changement notable :** le `SkillChart` (radar SVG), actuellement utilisé uniquement sur `/skills/index.astro`, est ajouté à la homepage dans une bento card dédiée. Cela nécessite d'importer `SkillChart.astro` dans `index.astro` et de lui fournir toutes les skills (pas seulement les 4 featured actuelles).

La homepage charge donc toutes les skills via `getCollection('skills')` pour :

1. Peupler les bento cards individuelles (10 skills)
2. Alimenter le radar chart avec les données complètes

```text
Layout (4 colonnes, 10 skills + 1 radar chart = 11 cells):
┌──────────────┬──────────┬───────────┐
│ JS/TS (2col) │ featured │ Radar     │
│              │          │ Chart     │
├───────┬──────┤          │ (2 rows)  │
│ Front │ Node │          │ NOUVEAU   │
├───────┼──────┼──────────┤           │
│ DB    │ API  │ Comm     │           │
├───────┴──────┼──────────┼───────────┤
│ Problem+Team │ Adapt    │ Veille    │
│ (2 col)      │          │           │
└──────────────┴──────────┴───────────┘

Mapping skill → cell :
- JS/TS (span-2, featured) → javascript-typescript
- Front → frontend-frameworks
- Node → nodejs-backend
- DB → databases
- API → api-architecture
- Comm → communication
- Problem+Team (span-2) → problem-solving + teamwork
- Adapt → adaptability
- Veille → veille-technologique
- Radar → toutes les skills (SkillChart.astro)

Styles:
- Chaque card: glass surface + backdrop-blur + border-subtle
- Featured (JS/TS): border violet accent + gradient bg
- Hover: border violet, lift -4px, glow shadow
- Skill bars: gradient fills (violet/neon/cyan/rose selon group)
- Radar chart: SkillChart.astro importé, intégré dans bento card span-row
```

### 5.4 Projects — Cinematic Cards

Remplace le grid 3-col par un layout 2-col avec featured card wide.

```text
Layout:
┌─────────────────────────────────────┐
│ Featured project (2 col, wide)      │
│ Hauteur thumb: 280px                │
├──────────────────┬──────────────────┤
│ Project 2        │ Project 3        │
│ Thumb: 220px     │ Thumb: 220px     │
├──────────────────┼──────────────────┤
│ Project 4        │ Project 5        │
└──────────────────┴──────────────────┘

Chaque card:
- .project-thumb: bg gradient + pattern overlay + nom oversized semi-transparent
- .project-thumb .thumb-overlay: gradient to top (obsidian → transparent)
- .project-info: tags, titre, description, flèche
- .project-arrow: icon box, violet bg on hover, translate(3px, -3px)
- Hover: lift -6px, border violet, glow shadow (plus intense que skills)
```

### 5.5 CTA Section

Section immersive remplaçant le flat primary-800 actuel.

```text
Structure:
section.cta-section
├── .cta-bg (radial gradients multiples)
├── .cta-border-top (gradient line violet → neon)
├── .cta-shapes (formes Memphis flottantes, opacity 0.1)
├── .cta-content
│   ├── h2 ("Envie de collaborer ?") — gradient-text
│   ├── p (description)
│   └── .cta-btns
│       ├── .btn-neon (background neon, glow hover)
│       └── .btn-ghost
```

### 5.6 Footer

Conserve la structure 3 colonnes, adapte les styles.

**Impact global :** Comme le header, le footer est partagé par toutes les pages. Les changements de style s'appliquent sur l'ensemble du site.

```text
Changements:
- Background: obsidian (au lieu de dark-800)
- Border-top: border-subtle
- Logo: "Virgil Chareyre" avec span violet
- Links: text-4 → violet-light on hover
- Colonnes: Navigation + Contact
```

---

## 6. Animations (GSAP)

Toutes les animations existantes sont conservées et améliorées. Pas de nouvelles dépendances.

### Storyboard

| Animation              | Trigger               | Params                                     | Notes                     |
| ---------------------- | --------------------- | ------------------------------------------ | ------------------------- |
| Hero entrance          | Page load             | 0.7s, stagger 0.12s, back.out(1.7), y:30→0 | Inchangé dans le principe |
| Stats bar reveal       | Hero complete + 0.3s  | 0.8s, power3.out, y:20 + scale:0.95        | **Nouveau**               |
| Bento grid stagger     | ScrollTrigger top 85% | 0.5s, stagger 0.08s, batch                 | Adapté pour bento layout  |
| Skill bars             | After bento reveal    | 0.8s, width 0→value                        | Inchangé                  |
| Card glow hover        | CSS transition        | 0.4s, Memphis easing                       | **Nouveau** (CSS only)    |
| Project cards stagger  | ScrollTrigger top 85% | 0.5s, stagger 0.1s                         | Inchangé                  |
| Memphis shapes fade    | ScrollTrigger         | opacity 0→stored value                     | Inchangé                  |
| CTA reveal             | ScrollTrigger         | 0.7s, y:30→0, stagger                      | Inchangé                  |
| Scroll indicator pulse | CSS infinite          | 2s ease-in-out                             | **Nouveau** (CSS only)    |

### Reduced motion

Comportement existant conservé : `prefers-reduced-motion` → return early dans `initAnimations()`, opacity/transforms forcés à valeurs finales.

---

## 7. Responsive Design

### Breakpoints

| Breakpoint | Valeur     | Nom   |
| ---------- | ---------- | ----- |
| Mobile     | < 640px    | sm    |
| Tablet     | 640–1023px | md/lg |
| Desktop    | ≥ 1024px   | lg+   |

### Adaptations par composant

| Composant      | Desktop (≥1024)                    | Tablet (640–1023)         | Mobile (<640)                |
| -------------- | ---------------------------------- | ------------------------- | ---------------------------- |
| Nav            | Floating pill glassmorphic centrée | Full-width glass, burger  | Compact, burger, slide-down  |
| Hero           | 2-col grid (texte + visual)        | Stack centré              | Stack compact, pas de shapes |
| Stats bar      | Floating glass bar                 | Idem compact              | Inline 3-col dans hero       |
| Bento grid     | 4 colonnes, spans                  | 2 colonnes                | 1 colonne                    |
| Projects       | 2-col + featured wide              | 2-col uniforme            | 1 colonne                    |
| Memphis shapes | Visibles, flottantes               | Réduites, opacity moindre | Masquées                     |
| CTA            | Large padding, 3.5rem              | Medium, 2.5rem            | Compact, 2rem, btns stack    |
| Footer         | 3 colonnes                         | 2 colonnes                | 1 colonne                    |

---

## 8. Accessibilité

- **Contraste WCAG AA:** text-1 sur obsidian = 18.2:1, violet sur obsidian = 5.3:1, neon sur obsidian = 15.1:1
- **Focus visible:** ring violet sur tous les éléments interactifs
- **Focus trap:** menu mobile
- **Skip link:** conservé
- **prefers-reduced-motion:** animations désactivées
- **Sémantique HTML:** header, nav, main, section, article, footer
- **ARIA:** labels sur éléments interactifs, sr-only pour radar chart
- **JSON-LD:** conservé
- **Glass cards:** bordure visible assure la délimitation même sans fond visible

---

## 9. Performance

| Métrique        | Cible   | Stratégie                                   |
| --------------- | ------- | ------------------------------------------- |
| Lighthouse Perf | 95+     | CSS animations + GSAP lazy, pas de Three.js |
| CSS total       | < 200KB | Tailwind purge, utilitaires custom          |
| LCP             | < 1.5s  | Astro static, inline CSS, fonts preload     |
| CLS             | 0       | contain-intrinsic-size, GSAP from values    |
| FID/INP         | < 100ms | CSS-only hover, requestIdleCallback         |
| Nouvelles deps  | 0       | Tout en CSS natif + GSAP existant           |

---

## 10. Contraintes techniques

- **Stack inchangé:** Astro 6 + Tailwind CSS v4 + GSAP + TypeScript
- **Zéro nouvelle dépendance** — tout via CSS backdrop-filter, transforms 3D, SVG inline
- **Tailwind v4:** nouveaux tokens dans `@theme { }` de `global.css`
- **`url()` obligatoire:** tous les liens internes via `@utils/url`
- **View Transitions:** `<ClientRouter />` + `transition:persist` sur la nav
- **Content collections:** structure et données inchangées
- **Husky hooks:** validate (typecheck + lint + format + knip) en pre-commit

---

## 11. Hors scope

- Pages détail projet (`projects/[slug].astro`) — phase 2
- Pages détail compétence (`skills/[slug].astro`) — phase 2
- Page À propos — phase 2
- Page Parcours/Timeline (`timeline.astro`) — phase 2 (redesign des styles timeline avec le nouveau design system)
- Animations Three.js / WebGL
- Dark/light mode toggle (dark only)
- CMS ou changement de structure de contenu
- Nouvelles collections de contenu

**Note :** Les composants globaux (Header, Footer, BaseLayout, global.css) sont modifiés en phase 1. Les autres pages hériteront automatiquement du nouveau header/footer/thème. Seul le contenu spécifique à chaque page (markup, layout propre) est reporté en phase 2.

---

## 12. Fichiers impactés

### Modifications majeures

- `src/pages/index.astro` — restructuration complète du markup
- `src/styles/global.css` — nouveaux tokens, utilitaires glass/glow, grain overlay
- `src/components/Header.astro` — floating pill nav
- `src/scripts/animations.ts` — nouvelles animations (stats bar, bento)

### Modifications mineures

- `src/components/Footer.astro` — styles adaptés
- `src/components/MemphisShapesFg.astro` — CSS 3D transforms, opacités
- `src/components/SkillChart.astro` — intégration dans bento card
- `src/layouts/BaseLayout.astro` — grain overlay, obsidian bg

### Aucun changement

- `src/content/` — collections de contenu inchangées
- `src/config/` — configuration inchangée
- `src/utils/` — utilitaires inchangés
- `astro.config.mjs` — config inchangée
- `package.json` — aucune nouvelle dépendance
