---
title: 'AppStandard'
shortDescription: 'Suite de 3 applications web de productivité (Calendar, Tasks, Contacts) basées sur les standards ouverts RFC 5545 et RFC 6350.'
thumbnail: '/images/projects/appstandard-thumbnail.jpg'
fullImage: '/images/projects/appstandard-full.jpg'
order: 4
links:
  repository: 'https://github.com/Leigh-Chr/appstandard'
  website: 'https://appstandard.io'
relatedSkills:
  [
    'javascript-typescript',
    'frontend-frameworks',
    'nodejs-backend',
    'databases',
    'api-architecture',
    'problem-solving',
    'adaptability',
    'veille-technologique',
  ]
context:
  period: '2024 - 2025'
  role: 'Développeur Fullstack'
  company: 'Projet Personnel'
---

## Présentation

AppStandard est une suite de productivité composée de trois applications web : **Calendar** (agenda), **Tasks** (tâches) et **Contacts** (carnet d'adresses). Le projet implémente les standards ouverts RFC 5545 (iCalendar) et RFC 6350 (vCard) pour garantir l'interopérabilité avec les applications existantes.

L'objectif est de proposer une alternative respectueuse de la vie privée aux solutions propriétaires (Google Calendar, Apple Contacts), avec un code open source et la possibilité d'héberger soi-même ses données.

Le projet représente plus de 216 000 lignes de TypeScript, organisées en monorepo avec 19 packages partagés.

## Objectifs, contexte, enjeu et risques

**Contexte** : Projet personnel développé en parallèle de mon alternance, né d'une frustration personnelle : impossible d'exporter proprement mes événements Google Calendar vers une autre application sans perdre des données.

**Problématique** : Les solutions de productivité existantes (Google, Apple, Microsoft) sont propriétaires et posent des questions de confidentialité des données. Les alternatives open source existantes étaient souvent incomplètes ou mal maintenues.

**Objectifs** : Créer une suite d'applications interopérables basée sur les standards ouverts RFC 5545 (iCalendar) et RFC 6350 (vCard), permettant à chacun d'héberger ses propres données.

**Risques identifiés** : Complexité de l'implémentation des standards RFC, volume de code important à maintenir seul, temps de développement conséquent.

## Étapes – ce que j'ai fait

**Phase 1 - Recherche et prototypage** : Lecture approfondie des RFC 5545 et 6350 (plus de 200 pages de spécifications). Développement de prototypes pour valider la faisabilité du parsing.

**Phase 2 - Architecture monorepo** : Mise en place de l'architecture avec 19 packages partagés. Choix de Turborepo pour la gestion du build et le cache intelligent.

**Phase 3 - Développement des parsers** : Implémentation complète des parsers et sérialiseurs. Le plus complexe : gérer les récurrences d'événements (RRULE) avec toutes leurs exceptions possibles.

**Phase 4 - Applications et UI** : Création des trois applications avec React 19. Développement d'un design system partagé pour garantir la cohérence visuelle.

**Phase 5 - Infrastructure** : Backend Node.js, PostgreSQL, pipeline CI/CD GitHub Actions, et déploiement Docker avec docker-compose pour le self-hosting.

## Compétences mobilisées

Ce projet m'a permis de mobiliser et développer des compétences variées : lecture et implémentation de spécifications techniques (RFC), architecture logicielle à grande échelle (monorepo), développement frontend moderne (React 19), et gestion d'infrastructure (Docker, CI/CD).

## Résultats

- Maîtrise approfondie de TypeScript à grande échelle (216k+ lignes)
- Expertise sur les standards ouverts RFC 5545 et RFC 6350
- Compétences en architecture monorepo et publication de packages NPM
- Montée en compétence sur React 19 et les dernières pratiques frontend
- Trois applications fonctionnelles et interopérables
- Packages NPM publiés et réutilisables par la communauté

## Lendemains du projet

### Futur immédiat

- Finalisation des fonctionnalités core des trois applications
- Documentation utilisateur et développeur
- Tests automatisés complets

### À moyen terme

- Synchronisation CalDAV/CardDAV avec serveurs existants
- Application mobile React Native
- Gestion multi-utilisateurs

### Aujourd'hui

- Le projet est en développement actif
- Les packages NPM sont publiés et fonctionnels
- L'infrastructure de base est opérationnelle

## Regard critique

**Ce qui a bien fonctionné** : L'architecture monorepo avec packages partagés a permis une réutilisation massive du code (environ 60% du code est mutualisé). Les parsers RFC sont robustes et passent une batterie de tests avec des fichiers .ics/.vcf réels exportés de Google, Apple et Outlook.

**Ce que j'aurais fait différemment** : J'ai sous-estimé la complexité des RRULE (règles de récurrence). J'aurais dû commencer par Calendar seul avant d'attaquer les deux autres applications. Également, j'aurais dû écrire les tests en parallèle du développement plutôt qu'après.

**Leçon apprise** : Les standards RFC sont volontairement flexibles, ce qui signifie que chaque implémentation (Google, Apple, Microsoft) a ses particularités. Tester avec des données réelles de différentes sources est indispensable.
