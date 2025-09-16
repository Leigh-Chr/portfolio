# Gestion des données

## 📊 Structure des données

Le projet utilise des fichiers JSON pour stocker les données de contenu, permettant une séparation claire entre logique et contenu.

## 📁 Fichiers de données

### `projects.json` - Projets professionnels
Structure détaillée des projets avec contexte, processus et résultats :

```json
{
  "id": "syren-v3",
  "title": "Syren V3 – Gestion des déchets",
  "summary": "Application web Angular/Nest pour suivre conteneurs et accès usagers",
  "context": "Alternance chez BH Technologies",
  "problem": "Rationaliser la gestion de milliers de conteneurs...",
  "objectives": "Fournir une interface cartographique réactive...",
  "process": "Ateliers utilisateurs, wireframes Penpot...",
  "actors": "Équipe de développeurs front-end et back-end...",
  "results_personal": "Développement de mon expertise en UX research...",
  "results_company": "Solution déployée auprès de nombreuses collectivités...",
  "aftermath_immediate": "Formation des équipes support...",
  "aftermath_distance": "Retours utilisateurs très positifs...",
  "aftermath_today": "Syren V3 est devenu la référence interne...",
  "critical_review": "Points forts : excellente collaboration...",
  "skills": ["adaptabilite", "empathie-active", "front-end"]
}
```

### `skills.json` - Compétences techniques et soft skills
Classification en compétences techniques et humaines avec preuves concrètes :

```json
{
  "id": "empathie-active",
  "name": "Empathie utilisateur & écoute active",
  "type": "soft",
  "definition": "Comprendre rapidement le contexte humain...",
  "proof": "Problème : [...] Action : [...] Résultat : [...]",
  "self_review": "Niveau fort : utilisé à chaque atelier...",
  "evolution": "Cette compétence est centrale dans mon projet...",
  "projects": ["syren-v3", "luce-v3", "luce-v4"]
}
```

### `career.json` - Parcours professionnel
Timeline des expériences et formations avec compétences associées :

```json
{
  "periode": "Septembre 2022 - Aujourd'hui",
  "poste": "Alternance Développement web",
  "organisation": "BH Technologies",
  "type": "experience",
  "description": "Développement des plateformes Syren et Luce...",
  "missions": ["Développement front-end avec Angular et SvelteKit"],
  "projets_lies": ["syren-v3", "luce-v3", "luce-v4"],
  "competences_liees": ["front-end", "architecture-api", "ux-recherche"]
}
```

### `contacts.json` - Informations de contact
Données de contact structurées avec icônes et URLs :

```json
{
  "email": {
    "address": "virgil.07@hotmail.fr",
    "label": "Email",
    "url": "mailto:virgil.07@hotmail.fr",
    "icon": "mail"
  }
}
```

## 🛠️ Utilitaires d'accès aux données

### `src/utils/data.ts`
Fonctions utilitaires pour accéder et filtrer les données :

```typescript
// Export des données
export { skills, projects, career };

// Fonctions de recherche
export const getSkillById = (id: string) =>
  skills.find((skill) => skill.id === id);

export const getProjectById = (projectId: string) =>
  projects.find((project) => project.id === projectId);

// Fonctions de filtrage
export const getSoftSkills = () =>
  skills.filter((skill) => skill.type === "soft");

export const getTechnicalSkills = () =>
  skills.filter((skill) => skill.type === "tech");

// Fonctions de relation
export const getRelatedProjects = (skillId: string) =>
  projects.filter((project) => project.skills.includes(skillId));

export const getRelatedSkills = (projectId: string) => {
  const project = getProjectById(projectId);
  return project
    ? skills.filter((skill) => project.skills.includes(skill.id))
    : [];
};
```

## 🔗 Système d'icônes

### Icônes inline (`icons.ts`)
Icônes simples définies directement en SVG :

```typescript
export const icons = {
  mail: `<svg xmlns="http://www.w3.org/2000/svg" class="icon">...</svg>`,
  linkedin: `<svg xmlns="http://www.w3.org/2000/svg" class="icon">...</svg>`,
  github: `<svg xmlns="http://www.w3.org/2000/svg" class="icon">...</svg>`
};
```

### Icônes de technologies (`tech-icons.ts`, `skill-icons.ts`, `project-icons.ts`)
Mapping intelligent vers fichiers locaux ou CDN Heroicons :

```typescript
// tech-icons.ts - Icônes locales pour technologies
export const techIcons = {
  "Angular": "angular",        // Fichier local
  "SvelteKit": "svelte",       // Fichier local
  "TypeScript": "typescript",   // Fichier local
  "CSS": "paint-brush"         // Heroicons CDN
};

// skill-icons.ts - Icônes Heroicons pour compétences
export const skillIcons = {
  "empathie-active": "users",
  "adaptabilite": "arrow-path",
  "front-end": "code-bracket"
};

// project-icons.ts - Icônes Heroicons pour projets
export const projectIcons = {
  "syren-v3": "trash",
  "luce-v3": "light-bulb",
  "portfolio-v1": "computer-desktop"
};
```

## 🎯 Avantages de cette approche

### Séparation des préoccupations
- **Contenu** : Fichiers JSON faciles à modifier
- **Logique** : Utilitaires TypeScript typés
- **Présentation** : Composants Astro purs

### Maintenabilité
- Modification du contenu sans toucher au code
- Typage TypeScript pour la sécurité
- Fonctions utilitaires réutilisables

### Performance
- Données compilées au build time
- Pas d'appels API en runtime
- Optimisation automatique par Astro

### Évolutivité
- Ajout facile de nouvelles données
- Relations entre entités gérées par les utilitaires
- Structure extensible

---

**Références** :
- [Architecture générale](architecture-generale.md)
- [Système de composants](systeme-composants.md)
- [Routage et pages](routage-pages.md)
