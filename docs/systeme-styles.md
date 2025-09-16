# Système de styles

## 🎨 Architecture CSS moderne

Le projet utilise une approche CSS moderne avec variables CSS, OKLCH et un design system cohérent.

## 🌈 Système de couleurs OKLCH

### Couleur primaire unique
Toutes les couleurs dérivent d'une seule variable :

```css
:root {
  --color-primary: oklch(0.80 0.4 380); /* Couleur de base unique */
  
  /* Couleurs dérivées automatiquement */
  --color-background: oklch(from var(--color-primary) 0.12 calc(c * 0.02) h);
  --color-surface: oklch(from var(--color-primary) 0.45 calc(c * 0.02) h);
  --color-border: oklch(from var(--color-primary) 0.25 calc(c * 0.02) h);
  
  /* Couleurs de texte */
  --color-on-background: oklch(from var(--color-primary) 1 calc(c * 0.02) h);
  --color-on-surface: oklch(from var(--color-primary) 1 calc(c * 0.02) h);
}
```

### Avantages d'OKLCH
- **Cohérence** : Une seule couleur génère tout le thème
- **Accessibilité** : Contraste automatiquement géré
- **Maintenabilité** : Changement de thème en modifiant une variable
- **Performance** : Calculs CSS natifs

## 📝 Typographie

### Polices optimisées
```css
:root {
  --font-family-display: "Bebas Neue", sans-serif;        /* Titres */
  --font-family-sans: "Inter", system-ui, sans-serif;     /* Corps */
  --font-family-mono: "Courier Prime", monospace;         /* Code */
  
  --font-display: swap;  /* Optimisation du rendu */
}
```

### Échelle typographique responsive
```css
:root {
  --font-size-hero: clamp(2.5rem, 7vw, 5rem);
  --font-size-display: clamp(2rem, 5vw, 3.5rem);
  --font-size-title: clamp(1.5rem, 4vw, 2.5rem);
  --font-size-subtitle: clamp(1.25rem, 3vw, 1.75rem);
  --font-size-body: clamp(1rem, 2.5vw, 1.125rem);
  --font-size-caption: clamp(0.875rem, 2vw, 1rem);
}
```

## 🎯 Design tokens

### Espacements
```css
:root {
  --space-sm: 0.5rem;   /* 8px */
  --space-md: 1rem;     /* 16px */
  --space-lg: 1.5rem;   /* 24px */
  --space-xl: 2rem;     /* 32px */
}
```

### Ombres dynamiques
```css
:root {
  --shadow-md: 0 0.25rem 0.375rem -0.0625rem oklch(from var(--color-shadow-base) 0.12 calc(c * 0.02) h / 0.1);
  --shadow-lg: 0 0.625rem 0.9375rem -0.1875rem oklch(from var(--color-shadow-base) 0.12 calc(c * 0.02) h / 0.1);
}
```

### Transitions respectueuses
```css
:root {
  --transition: 200ms ease;
  --transition-fast: 100ms ease;
  
  /* Respect des préférences utilisateur */
  --transition-respectful: 200ms cubic-bezier(0.4, 0, 0.2, 1);
}
```

## 🎭 Effets visuels "punk"

### Hiérarchie Z-Index organisée
```css
/* HIÉRARCHIE Z-INDEX OPTIMISÉE :
 * 1-50   : CONTENU PRINCIPAL (texte, images, composants)
 * 50     : CURSEUR PERSONNALISÉ (au-dessus du contenu)
 * 100    : NAVIGATION (header, navigation)
 * 150    : OVERLAYS (menus mobiles, modales)
 * 200    : CONTRÔLES (bouton hamburger, interactions critiques)
 * 999    : REFLET CRT (effet de reflet d'écran)
 * 1000+  : EFFETS CRT (scanlines: 1000, texture: 1001, ombres: 1002)
 */
```

### Scanlines CRT
Effet de lignes de balayage sur toute l'interface :

```css
.scanlines::after {
  content: "";
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: repeating-linear-gradient(
    0deg,
    transparent,
    transparent 2px,
    oklch(from var(--color-overlay-base) l c h / 0.03) 2px,
    oklch(from var(--color-overlay-base) l c h / 0.03) 4px
  );
  z-index: 1000;
  pointer-events: none;
}
```

### Reflet d'écran
```css
.screen-reflection {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    135deg,
    oklch(from var(--color-reflection-base) l c h / 0.1) 0%,
    transparent 20%,
    transparent 80%,
    oklch(from var(--color-reflection-base) l c h / 0.05) 100%
  );
  z-index: 999;
  pointer-events: none;
}
```

### Animations blob
```css
@keyframes punk-blob-rotate {
  0% { transform: translate(-50%, -50%) rotate(0deg) scale(1); }
  50% { transform: translate(-50%, -50%) rotate(180deg) scale(1.02); }
  100% { transform: translate(-50%, -50%) rotate(360deg) scale(1); }
}
```

## ♿ Accessibilité

### Focus visible amélioré
```css
:root {
  --focus-ring: 0.125rem solid var(--color-primary);
  --focus-offset: 0.125rem;
  --focus-ring-high: 0.1875rem solid var(--color-primary); /* WCAG AAA */
}

.btn:focus-visible {
  outline: var(--focus-ring);
  outline-offset: var(--focus-offset);
}
```

### Respect des préférences
```css
@media (prefers-reduced-motion: reduce) {
  .hero__tagline { animation: none; }
  .hero__portrait-background { animation: none; }
  * { transition: none !important; }
}

@media (prefers-contrast: high) {
  :root {
    --color-primary: oklch(0.9 0.5 380);
    --color-border: oklch(0.3 0.1 380);
  }
}
```

## 📱 Responsive design

### Approche mobile-first
```css
/* Base mobile */
.hero__content {
  flex-direction: column;
  text-align: center;
}

/* Tablette et plus */
@media (min-width: 768px) {
  .hero__content {
    flex-direction: row;
    text-align: left;
  }
}
```

### Breakpoints intelligents
- `max-width: 359px` - Très petits écrans
- `max-width: 479px` - Mobiles petits
- `max-width: 767px` - Mobiles standards
- `min-width: 768px` - Tablettes et plus
- `min-width: 1024px` - Desktop

## 🚀 Optimisations

### Preload des polices
```html
<link rel="preload" 
      href="https://fonts.googleapis.com/css2?family=Bebas+Neue..." 
      as="style" />
<link rel="preconnect" href="https://fonts.googleapis.com" />
```

---

**Références** :
- [Architecture générale](architecture-generale.md)
- [Performance et accessibilité](performance-accessibilite.md)
