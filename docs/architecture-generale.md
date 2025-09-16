# Architecture générale

## 🏗️ Vue d'ensemble

Ce portfolio est une application web statique développée avec **Astro** pour optimiser les performances et le SEO. L'architecture privilégie la simplicité, la performance et l'accessibilité.

## 🛠️ Stack technique

### Framework principal
- **Astro 5.7.11** - Générateur de sites statiques avec hydratation sélective
- **TypeScript** - Typage statique avec configuration stricte
- **CSS moderne** - Variables CSS, OKLCH, container queries

### Déploiement
- **GitHub Pages** - Hébergement statique avec CI/CD automatique
- **Configuration** : `site: 'https://Leigh-chr.github.io'`, `base: '/portfolio/'`

## 📁 Structure du projet

```
portfolio/
├── src/
│   ├── components/          # Composants Atomic Design
│   │   ├── atoms/          # Composants de base (8 composants)
│   │   ├── molecules/      # Combinaisons d'atomes (5 composants)
│   │   ├── organisms/      # Sections complexes (3 composants)
│   │   └── templates/      # Layouts et utilitaires (1 composant)
│   ├── data/               # Données JSON + mappings d'icônes
│   │   ├── *.json          # Données de contenu (projets, skills, career)
│   │   └── *-icons.ts      # Mappings d'icônes (tech, skill, project)
│   ├── layouts/            # Layout principal
│   ├── pages/              # Pages et routage avec génération statique
│   ├── styles/             # Styles globaux (reset + base)
│   └── utils/              # Utilitaires TypeScript (data, urls)
├── assets/                 # Ressources statiques (images)
├── public/                 # Fichiers publics (favicon, icônes SVG)
└── docs/                   # Documentation projet
```

## ⚡ Principes architecturaux

### 1. Simplicité avant tout
- Pas d'over-engineering
- Composants avec responsabilités claires
- Code auto-explicatif

### 2. Performance native
- Génération statique avec Astro
- Optimisation des images automatique
- CSS critique inline
- Preloading des ressources importantes

### 3. Accessibilité intégrée
- Conformité WCAG 2.1 AA
- Navigation au clavier
- Support des lecteurs d'écran
- Respect des préférences utilisateur (`prefers-reduced-motion`)

### 4. Maintenabilité
- Architecture Atomic Design strictement respectée
- Séparation des préoccupations (données/logique/présentation)
- Utilitaires réutilisables et typés
- Documentation intégrée et à jour
- Conventions de nommage cohérentes
- Gestion d'état minimale (statique)

## 🔧 Configuration

### TypeScript
```json
{
  "extends": "astro/tsconfigs/strict",
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/*": ["src/*"]
    }
  }
}
```

### Astro
```js
export default defineConfig({
  site: 'https://Leigh-chr.github.io',
  base: '/portfolio/'
});
```

## 📊 Métriques cibles

- **Performance** : Lighthouse 95+
- **Accessibilité** : Score 100/100
- **SEO** : Score 100/100
- **Bonnes pratiques** : Score 100/100

## 🏆 Bonnes pratiques appliquées

### Développement
- **TypeScript strict** : Configuration stricte pour la sécurité de type
- **Imports organisés** : Alias `@/*` pour les chemins courts
- **Composants purs** : Pas d'effets de bord, logique externalisée
- **Conventions BEM** : Classes CSS structurées et prévisibles

### Performance
- **Lazy loading** : Images et composants chargés à la demande
- **Preloading intelligent** : Ressources critiques preloadées
- **Génération statique** : Aucun runtime JavaScript par défaut
- **Optimisation automatique** : Compression et minification par Astro

### Accessibilité
- **Semantic HTML** : Structure sémantique native
- **ARIA approprié** : Labels et rôles uniquement quand nécessaire
- **Contraste vérifié** : Ratios WCAG AA respectés
- **Navigation clavier** : Tous les éléments accessibles au clavier

---

**Références** :
- [Système de composants](systeme-composants.md)
- [Performance et accessibilité](performance-accessibilite.md)
