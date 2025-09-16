# Performance et accessibilité

## ⚡ Optimisations de performance

### Métriques cibles
- **Lighthouse Performance** : 95+
- **First Contentful Paint** : < 1.2s
- **Largest Contentful Paint** : < 2.5s
- **Cumulative Layout Shift** : < 0.1

## 🚀 Stratégies de performance

### 1. Génération statique
- **Astro SSG** : Toutes les pages générées au build
- **Aucun JavaScript** côté client par défaut
- **HTML/CSS optimisés** automatiquement

### 2. Optimisation des ressources

#### Images
```astro
import { Image } from "astro:assets";

<!-- Optimisation automatique des formats et tailles -->
<Image 
  src={portrait} 
  alt="Portrait professionnel" 
  width={320} 
  height={320}
  loading="eager"  <!-- Critical images -->
/>
```

#### Polices
```html
<!-- Preload des polices critiques -->
<link rel="preload" 
      href="https://fonts.googleapis.com/.../Inter:wght@300;400;500;600;700" 
      as="style" />

<!-- Connexions préétablies -->
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
```

#### CSS critique
```html
<style is:inline>
  :root {
    --color-primary: oklch(0.8 0.4 380);
    --color-background: oklch(from var(--color-primary) 0.12 calc(c * 0.02) h);
  }
  body {
    background: var(--color-background);
    color: var(--color-on-background);
  }
</style>
```

### 3. Préchargement intelligent
```astro
<!-- Préchargement au hover -->
<a href={getProjectUrl(id)} data-astro-prefetch="hover">

<!-- DNS prefetch pour ressources externes -->
<link rel="dns-prefetch" href="//fonts.googleapis.com" />
```

### 4. Optimisation des animations
```css
/* Système de timing unifié */
:root {
  --timing-fast: 0.2s;      /* Hover, focus, interactions rapides */
  --timing-normal: 0.4s;    /* Scroll animations, apparitions */
  --timing-slow: 0.6s;      /* View transitions, changements majeurs */
  --timing-background: 20s; /* Animations de fond continues */
  
  --easing-smooth: cubic-bezier(0.25, 0.46, 0.45, 0.94);  /* Fluide et naturel */
  --easing-punk: cubic-bezier(0.4, 0, 0.2, 1);             /* Style punk cohérent */
}

/* Animations GPU-accélérées */
[data-scroll-animate] {
  transform: translate3d(0, 20px, 0); /* Accélération matérielle */
  transition: all var(--timing-normal) var(--easing-smooth);
  will-change: transform, opacity;
}

/* Cursor trail optimisé */
.cursor-trail {
  transform: translate3d(0, 0, 0); /* Accélération matérielle */
  transition: all var(--timing-fast) var(--easing-smooth);
  mix-blend-mode: screen;          /* Effet de fusion moderne */
}

/* Respect des préférences utilisateur */
@media (prefers-reduced-motion: reduce) {
  [data-scroll-animate] {
    transition: none !important;
    opacity: 1 !important;
    transform: none !important;
  }
}
```

### 5. Intersection Observer pour animations
Le `ScrollAnimator` utilise l'API moderne pour des performances optimales :

```typescript
// Configuration optimisée
this.observer = new IntersectionObserver(
  this.handleIntersection.bind(this),
  {
    threshold: 0.2,           // 20% de visibilité (plus réactif)
    rootMargin: "50px",       // Déclenchement anticipé optimisé
  }
);

// Délais progressifs optimisés
scheduleAnimation(element: HTMLElement, delay: number, priority: number) {
  const baseDelay = delay;
  const priorityDelay = priority * 25; // 25ms par niveau (réduit de 50ms)
  const totalDelay = baseDelay + priorityDelay;
  // ...
}
```

## ♿ Accessibilité WCAG 2.1 AA

### Conformité cible
- **Score Lighthouse Accessibility** : 100/100
- **Niveau WCAG** : AA (objectif AAA sur certains critères)
- **Tests** : Lecteurs d'écran, navigation clavier, contraste

## 🎯 Implémentations d'accessibilité

### 1. Navigation au clavier
```astro
<!-- Focus visible amélioré -->
<style>
  .btn:focus-visible {
    outline: var(--focus-ring);
    outline-offset: var(--focus-offset);
  }
</style>

<!-- Skip links -->
<a href="#main-content" class="skip-link">Aller au contenu principal</a>
```

### 2. ARIA et sémantique
```astro
<!-- Navigation avec rôles ARIA -->
<nav aria-label="Navigation principale">
  <ul role="list">
    <li><a href="/competences" aria-current="page">Compétences</a></li>
  </ul>
</nav>

<!-- Boutons accessibles -->
<button 
  aria-expanded="false" 
  aria-controls="nav-mobile-overlay"
  aria-label="Ouvrir le menu de navigation"
>
```

### 3. Contraste des couleurs
```css
:root {
  /* Couleurs calculées pour respecter WCAG AA */
  --color-primary: oklch(0.80 0.4 380);
  --color-background: oklch(from var(--color-primary) 0.12 calc(c * 0.02) h);
  
  /* Focus haute visibilité pour WCAG AAA */
  --focus-ring-high: 0.1875rem solid var(--color-primary);
}

/* Support du contraste élevé */
@media (prefers-contrast: high) {
  :root {
    --color-primary: oklch(0.9 0.5 380);
    --color-border: oklch(0.3 0.1 380);
  }
}
```

### 4. Textes alternatifs
```astro
<!-- Images avec alt descriptifs -->
<Image 
  src={portrait} 
  alt="Portrait professionnel de Virgil CHAREYRE, développeur web souriant"
  width={320} 
  height={320}
/>

<!-- Icônes décoratives -->
<IconSvg name="angular" aria-hidden="true" />

<!-- Liens avec contexte -->
<a 
  href={getProjectUrl(id)} 
  aria-label={`Voir le projet ${title} - ${summary}`}
>
```

### 5. Responsive et zoom
```css
/* Support du zoom jusqu'à 200% */
@media (max-width: 480px) {
  .btn {
    min-height: 44px;  /* Taille tactile minimum */
    min-width: 44px;
  }
}

/* Texte responsive sans débordement */
p, h1, h2, h3, h4, h5, h6 {
  overflow-wrap: break-word;
}

p { text-wrap: pretty; }
h1, h2, h3, h4, h5, h6 { text-wrap: balance; }
```

## 🧪 Tests et validation

### Tests automatisés
- **aXe DevTools** : Audit automatique d'accessibilité
- **Lighthouse CI** : Tests de performance en continu
- **Wave** : Validation des contrastes et ARIA

### Tests manuels
- **Navigation clavier** : Tab, Enter, Espace, flèches
- **Lecteurs d'écran** : NVDA, JAWS, VoiceOver
- **Zoom** : Test jusqu'à 200% sans perte de fonctionnalité

### Outils de développement
```typescript
// Configuration TypeScript stricte pour la qualité
{
  "extends": "astro/tsconfigs/strict",
  "compilerOptions": {
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "exactOptionalPropertyTypes": true
  }
}
```

## 📊 Métriques et monitoring

### Core Web Vitals
- **LCP** : Optimisé par images eager et CSS critique
- **FID** : Minimal grâce à l'approche statique
- **CLS** : Évité par dimensionnement explicite des images

### Outils de mesure
- **Lighthouse** : Audits automatisés
- **WebPageTest** : Tests de performance détaillés
- **Google Search Console** : Monitoring Core Web Vitals

### Optimisations continues
```css
/* Optimisation des reflows */
.logo__portrait {
  width: 50px;
  height: 50px;  /* Dimensions explicites */
  border-radius: 50%;
  object-fit: cover;
}

/* Optimisation des repaints */
.cursor-trail {
  transform: translateZ(0);  /* Nouveau contexte de stacking */
  will-change: transform, opacity;
}
```

## 🌍 Éco-conception

### Stratégies de sobriété numérique
- **Poids optimisé** : Images WebP, CSS minifié
- **Requêtes réduites** : Génération statique, pas d'API
- **Animations responsables** : Respect des préférences utilisateur
- **Code minimal** : Suppression des composants inutiles

### Métriques environnementales
- **EcoIndex** : Objectif A/B
- **Carbon footprint** : Minimisé par l'hébergement statique
- **Data transfer** : Optimisé par Astro et les CDN

---

**Références** :
- [Architecture générale](architecture-generale.md)
- [Système de styles](systeme-styles.md)
- [Système d'animations](systeme-animations.md)
