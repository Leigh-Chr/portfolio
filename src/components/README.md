# Architecture des Composants - Atomic Design

Ce projet suit la méthodologie **Atomic Design** pour organiser les composants de manière logique et maintenable.

## 🏗️ Structure Atomic Design

### **1. ATOMS** - Composants de base
Les plus petits composants réutilisables, sans logique métier complexe.

**Composants :**
- `Button.astro` - Boutons avec variants
- `Icon.astro` - Icônes SVG
- `Tag.astro` - Tags/étiquettes

### **2. MOLECULES** - Combinaisons d'atomes
Composants composés de plusieurs atomes avec une logique simple.

**Composants :**
- `Logo.astro` - Logo avec portrait
- `ProjectCard.astro` - Cartes de projets
- `SkillCard.astro` - Cartes de compétences
- `ContactInfo.astro` - Informations de contact
- `SocialLinks.astro` - Liens sociaux

### **3. ORGANISMS** - Sections complexes
Composants composés de molécules et atomes, avec logique métier.

**Composants :**
- `Header.astro` - En-tête du site
- `Navigation.astro` - Navigation principale
- `Timeline.astro` - Timeline du parcours

### **4. TEMPLATES** - Layouts et utilitaires
Composants de niveau supérieur et utilitaires.

**Composants :**
- `SEO.astro` - Gestion du SEO

**Utilitaires :**
- `src/utils/data.ts` - Fonctions d'accès aux données
- `src/utils/urls.ts` - Fonctions de génération d'URLs

## 🎯 Principes de Composition

### **Règles de composition :**
- **Atoms** → **Molecules** → **Organisms** → **Templates** → **Pages**
- Chaque niveau peut utiliser tous les niveaux inférieurs
- Pas de dépendances circulaires

### **Avantages :**
- ✅ **Réutilisabilité** : Composants modulaires
- ✅ **Maintenabilité** : Structure claire et logique
- ✅ **Évolutivité** : Facile d'ajouter de nouveaux composants
- ✅ **Cohérence** : Standards de design uniformes
- ✅ **Performance** : Composants optimisés et légers

## 📁 Organisation des Fichiers

```
src/
├── components/
│   ├── atoms/          # 3 composants de base
│   ├── molecules/      # 5 combinaisons d'atomes
│   ├── organisms/      # 3 sections complexes
│   └── templates/      # 2 layouts et utilitaires
├── utils/              # Fonctions utilitaires
│   ├── data.ts         # Accès aux données
│   └── urls.ts         # Génération d'URLs
└── pages/              # Pages Astro
```

## 🚀 Utilisation

### **Import d'un composant :**
```astro
---
import Button from "../components/atoms/Button.astro";
---

<Button href="/contact" variant="primary">
  Me contacter
</Button>
```

### **Import d'utilitaires :**
```astro
---
import { getProjectsUrl } from "../utils/urls";
import { getRelatedProjects } from "../utils/data";
---
```

## 📊 Statistiques Finales

### **Composants restants : 13**
- **Atoms (3)** : `Button`, `Icon`, `Tag`
- **Molecules (5)** : `Logo`, `ProjectCard`, `SkillCard`, `ContactInfo`, `SocialLinks`
- **Organisms (3)** : `Header`, `Navigation`, `Timeline`
- **Templates (1)** : `SEO`

### **Avantages obtenus :**
- ✅ **-11 composants** supprimés (46% de réduction)
- ✅ **Architecture ultra-simplifiée**
- ✅ **Moins de couplage** entre composants
- ✅ **Performance maximale**
- ✅ **Maintenance facilitée**

---

**📝 Note :** Cette architecture favorise la simplicité et évite l'over-engineering. Chaque composant restant a une responsabilité claire et est réellement réutilisable.
