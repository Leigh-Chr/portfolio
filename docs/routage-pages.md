# Routage et pages

## 🗺️ Architecture de routage

Le projet utilise le système de routage basé sur les fichiers d'Astro avec une structure claire et logique.

## 📁 Structure des pages

```
src/pages/
├── index.astro                    # Page d'accueil
├── a-propos.astro                # Page à propos
├── contact.astro                 # Page de contact
├── parcours.astro                # Timeline du parcours
├── competences/
│   ├── index.astro              # Liste des compétences
│   └── [competence].astro       # Page détail compétence
└── projets/
    ├── index.astro              # Liste des projets
    └── [projet].astro           # Page détail projet
```

## 🏠 Pages principales

### Page d'accueil (`index.astro`)
- **Hero section** avec portrait et tagline "CODE LIBRE, ESPRIT LIBRE"
- **Actions principales** : liens vers compétences et projets
- **Animations** : blob morphing, pulse effect, scroll animations
- **Responsive** : adaptation mobile avec tailles d'images optimisées

### Page à propos (`a-propos.astro`)
- **Contenu personnel** : valeurs, projet professionnel, qualités humaines
- **Layout en grid** : portrait + contenu avec adaptation responsive
- **Sections structurées** : valeurs, projet professionnel, qualités, centres d'intérêt
- **Icônes contextuelles** : chaque section a son icône Heroicons

### Page contact (`contact.astro`)
- **Composant ContactInfo** : informations structurées et accessibles
- **Section disponibilité** : statut actuel et ouverture aux projets
- **Design épuré** : focus sur l'essentiel

### Page parcours (`parcours.astro`)
- **Timeline interactive** : composant `Timeline` avec données career.json
- **Chronologie inversée** : du plus récent au plus ancien
- **Icônes d'organisations** : mapping automatique par type d'organisation
- **Animations échelonnées** : délais d'animation progressifs

## 📋 Pages de listing

### Compétences (`competences/index.astro`)
- **Grid responsive** des compétences
- **Filtrage** : soft skills vs compétences techniques
- **Cards interactives** avec effets hover uniformes
- **Navigation** vers pages détail

```astro
{getSoftSkills().map((skill) => (
  <SkillCard
    id={skill.id}
    name={skill.name}
    type={skill.type}
    definition={skill.definition}
  />
))}
```

### Projets (`projets/index.astro`)
- **Grid responsive** des projets
- **Cards avec icônes** technologiques
- **Prévisualisation** : titre et résumé
- **Navigation** vers pages détail

## 🔍 Pages de détail

### Détail compétence (`competences/[competence].astro`)
- **Génération statique** via `getStaticPaths()`
- **Contenu structuré** : définition, preuve, évolution
- **Projets liés** avec navigation croisée
- **Breadcrumb** et navigation retour

```astro
export async function getStaticPaths() {
  return skills.map((skill) => ({
    params: { competence: skill.id },
    props: { skill },
  }));
}
```

### Détail projet (`projets/[projet].astro`)
- **Génération statique** pour tous les projets
- **Contenu structuré** : contexte, objectifs, processus, acteurs
- **Résultats détaillés** : personnel et entreprise
- **Lendemains du projet** : immédiat, à distance, aujourd'hui
- **Technologies utilisées** avec icônes et mapping par projet
- **Compétences liées** avec navigation croisée
- **Regard critique** et apprentissages

## 🧭 Système de navigation

### Navigation principale
Composant `Navigation` avec liens vers toutes les sections :

```astro
const navItems = [
  { href: getHomeUrl(), label: "Accueil" },
  { href: getCompetencesUrl(), label: "Compétences" },
  { href: getProjectsUrl(), label: "Projets" },
  { href: getParcoursUrl(), label: "Parcours" },
  { href: getAboutUrl(), label: "À propos" },
  { href: getContactUrl(), label: "Contact" }
];
```

### Navigation mobile
- **Menu hamburger** pour écrans < 768px
- **Overlay fullscreen** avec animation slide
- **Contrôleur JavaScript** pour interactions
- **Accessibilité** : ARIA labels et navigation clavier

### Mapping des technologies par projet
Chaque projet a ses technologies définies statiquement :

```typescript
const projectTechnologies: Record<string, Array<{ name: string; icon: string }>> = {
  "syren-v3": [
    { name: "Angular", icon: techIcons.Angular },
    { name: "NestJS", icon: techIcons.NestJS },
    { name: "RxJS", icon: techIcons.RxJS },
  ],
  "luce-v4": [
    { name: "SvelteKit", icon: techIcons.SvelteKit },
    { name: "Micro-services", icon: techIcons["Micro-services"] },
  ]
};
```

### Utilitaires de navigation (`utils/urls.ts`)
Fonctions centralisées pour générer les URLs :

```typescript
export const getSkillUrl = (skillId: string) =>
  `${baseUrl}competences/${skillId}`;

export const getProjectUrl = (projectId: string) =>
  `${baseUrl}projets/${projectId}`;
```

## 🎭 View Transitions

### Configuration Astro
```astro
import { ClientRouter } from "astro:transitions";
<ClientRouter />
```

### Transitions nommées
```astro
<div transition:name={`project-card-${id}`}>
<div transition:name="hero-tagline">
<main transition:name="main-content">
```

### Persistance d'éléments
```astro
<Header transition:persist="header" />
<CursorTrail transition:persist="cursor-trail" />
```

## 🚀 Optimisations

### Préchargement des pages
```astro
<a href={getProjectUrl(id)} data-astro-prefetch="hover">
```

### Génération statique
Toutes les pages sont générées au build time pour :
- **Performance** : Temps de chargement minimal
- **SEO** : Contenu immédiatement disponible
- **Fiabilité** : Pas de dépendance runtime

### Images optimisées
```astro
import { Image } from "astro:assets";
<Image src={portrait} alt="..." width={320} height={320} loading="eager" />
```

## 📱 Responsive design

### Breakpoints cohérents
- **Mobile** : < 768px (navigation hamburger)
- **Tablette** : 768px - 1199px (navigation compacte)
- **Desktop** : ≥ 1200px (navigation complète)

### Grids adaptatives
```css
.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: var(--space-lg);
}

@media (max-width: 480px) {
  .projects-grid {
    grid-template-columns: 1fr;
    gap: var(--space-md);
  }
}
```

---

**Références** :
- [Architecture générale](architecture-generale.md)
- [Système de composants](systeme-composants.md)
- [Gestion des données](gestion-donnees.md)
