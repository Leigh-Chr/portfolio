# Système d'animations

## 🎯 Vue d'ensemble

Le portfolio utilise un système d'animations unifié et optimisé pour créer une expérience utilisateur fluide et cohérente. Toutes les animations respectent les préférences d'accessibilité et sont optimisées pour les performances.

## ⚙️ Système de timing unifié

### Variables CSS principales
```css
:root {
  /* Durées standardisées */
  --timing-fast: 0.2s;      /* Hover, focus, interactions rapides */
  --timing-normal: 0.4s;    /* Scroll animations, apparitions */
  --timing-slow: 0.6s;      /* View transitions, changements majeurs */
  --timing-background: 20s; /* Animations de fond continues */
  
  /* Easing functions optimisées */
  --easing-smooth: cubic-bezier(0.25, 0.46, 0.45, 0.94);  /* Fluide et naturel */
  --easing-bounce: cubic-bezier(0.68, -0.55, 0.265, 1.55); /* Légèrement rebondi */
  --easing-punk: cubic-bezier(0.4, 0, 0.2, 1);             /* Style punk cohérent */
}
```

### Rétrocompatibilité
```css
/* Variables de transition maintenues pour compatibilité */
--transition: var(--timing-fast) var(--easing-smooth);
--transition-fast: var(--timing-fast) var(--easing-smooth);
--transition-respectful: var(--timing-normal) var(--easing-punk);
--transition-fast-respectful: var(--timing-fast) var(--easing-punk);
```

## 🎬 Types d'animations

### 1. Animations au scroll (ScrollAnimator)

**Configuration optimisée :**
- **Threshold** : 20% (plus réactif que 30%)
- **RootMargin** : 50px (déclenchement anticipé optimisé)
- **Durée** : 0.4s (réduit de 0.8s)
- **Délais** : 50ms-400ms (réduits de 100ms-800ms)

**Variantes disponibles :**
```css
/* Animation par défaut */
[data-scroll-animate] {
  transform: translate3d(0, 20px, 0);
  transition: all var(--timing-normal) var(--easing-smooth);
}

/* Variantes punk */
[data-scroll-animate="punk-fade"] {
  transform: translate3d(0, 20px, 0) skew(-1deg);
}

[data-scroll-animate="punk-slide-left"] {
  transform: translate3d(30px, 0, 0) skew(-0.5deg);
}

[data-scroll-animate="punk-zoom"] {
  transform: translate3d(0, 0, 0) scale(0.9) skew(-0.5deg);
}
```

### 2. View Transitions (Astro)

**Configuration :**
- **Durée** : 0.6s
- **Easing** : `cubic-bezier(0.4, 0, 0.2, 1)`
- **Optimisations** : `will-change: transform, opacity`

```css
::view-transition-old(main-content) {
  animation: punk-slide-out var(--timing-slow) var(--easing-punk);
}

::view-transition-new(main-content) {
  animation: punk-slide-in var(--timing-slow) var(--easing-punk);
}
```

### 3. Hover Effects

**Effets uniformes et subtils :**
```css
/* Cartes et boutons */
.card:hover,
.btn:hover {
  transform: translate3d(0, -4px, 0) scale(1.02);
  transition: all var(--timing-fast) var(--easing-smooth);
  will-change: transform, box-shadow, border-color;
}

/* Navigation */
.nav__link:hover {
  transform: translate3d(0, -1px, 0) scale(1.02);
}
```

### 4. Animations de fond

**Blob rotation :**
```css
.hero__portrait-background {
  animation: punk-blob-rotate var(--timing-background) linear infinite;
}

@keyframes punk-blob-rotate {
  0% { transform: translate(-50%, -50%) rotate(0deg) scale(1); }
  100% { transform: translate(-50%, -50%) rotate(360deg) scale(1); }
}
```

**Pulse effect :**
```css
.hero__tagline {
  animation: punk-pulse 4s var(--easing-smooth) infinite;
}

@keyframes punk-pulse {
  0%, 100% { text-shadow: 0 0 20px var(--color-focus); }
  50% { text-shadow: 0 0 40px var(--color-hover); }
}
```

### 5. Cursor Trail

**Configuration optimisée :**
```css
.cursor-trail {
  transition: all var(--timing-fast) var(--easing-smooth);
  transform: translate3d(0, 0, 0); /* GPU acceleration */
  mix-blend-mode: screen;
}
```

## 🚀 Optimisations de performance

### GPU Acceleration
```css
/* Force l'accélération matérielle */
transform: translate3d(0, 0, 0);
will-change: transform, opacity;
```

### Optimisation des reflows
```css
/* Évite les reflows coûteux */
.card {
  will-change: transform, box-shadow, border-color;
  transition: all var(--timing-fast) var(--easing-smooth);
}
```

### Intersection Observer
```typescript
// Configuration optimisée pour les performances
this.observer = new IntersectionObserver(
  this.handleIntersection.bind(this),
  {
    threshold: 0.2,           // Plus réactif
    rootMargin: "50px",       // Déclenchement anticipé
  }
);

// Délais optimisés
const priorityDelay = priority * 25; // Réduit de 50ms
```

## ♿ Accessibilité

### Respect des préférences utilisateur
```css
@media (prefers-reduced-motion: reduce) {
  [data-scroll-animate] {
    transition: none !important;
    opacity: 1 !important;
    transform: none !important;
  }
  
  .hero__tagline {
    animation: none;
    text-shadow: 3px 3px 0px var(--color-disabled);
  }
  
  .hero__portrait-background {
    animation: none;
  }
}
```

### Focus visible
```css
.btn:focus-visible,
.nav__link:focus-visible {
  outline: var(--focus-ring);
  outline-offset: var(--focus-offset);
}
```

## 📱 Responsive

### Animations adaptatives
```css
/* Mobile - Animations simplifiées */
@media (max-width: 768px) {
  .hero__tagline {
    animation: none;
    transform: skew(-3deg);
  }
  
  .hero__portrait-background {
    animation: none;
  }
}
```

## 🎨 Cohérence visuelle

### Effets uniformes et cohérents
Tous les effets hover utilisent des transformations uniformes et subtiles :

```css
/* Effets hover uniformes */
.card:hover { 
  transform: translate3d(0, -4px, 0) scale(1.02); 
  transition: all var(--timing-fast) var(--easing-smooth);
}

.social-link:hover { 
  transform: translate3d(0, -4px, 0) scale(1.1) rotate(3deg); 
  transition: all var(--timing-fast) var(--easing-smooth);
}
```

### Easing cohérent
- **Interactions rapides** : `cubic-bezier(0.25, 0.46, 0.45, 0.94)`
- **Style punk** : `cubic-bezier(0.4, 0, 0.2, 1)`
- **Animations de fond** : `linear` ou `ease-in-out`

## 🔧 Maintenance

### Ajout de nouvelles animations
1. Utiliser les variables de timing définies
2. Appliquer `will-change` pour les propriétés animées
3. Tester avec `prefers-reduced-motion: reduce`
4. Vérifier les performances sur mobile

### Debugging
```css
/* Mode debug pour visualiser les animations */
.debug-animations * {
  transition-duration: 2s !important;
  animation-duration: 2s !important;
}
```

---

**Références** :
- [Performance et accessibilité](performance-accessibilite.md)
- [Système de styles](systeme-styles.md)
- [Architecture générale](architecture-generale.md)

**Fichiers qui référencent ce document** :
- [Index de la documentation](index.md)
- [Performance et accessibilité](performance-accessibilite.md)
