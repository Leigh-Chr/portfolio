---
title: 'Cahnon'
shortDescription: 'Application desktop native pour auteurs de fiction, combinant éditeur de texte riche, bible narrative, timeline et outils de cohérence, construite avec Svelte 5, Tauri v2 et Rust.'
thumbnail: '/images/projects/cahnon-thumbnail.svg'
order: 6
links:
  repository: 'https://github.com/Leigh-Chr/cahnon'
relatedSkills:
  [
    'javascript-typescript',
    'frontend-frameworks',
    'databases',
    'api-architecture',
    'problem-solving',
    'adaptability',
    'veille-technologique',
  ]
context:
  period: '2026'
  role: 'Développeur Fullstack'
  company: 'Projet Personnel'
---

## Présentation

Cahnon est une application desktop dédiée aux auteurs de fiction, conçue pour organiser des scènes, maintenir la cohérence narrative et exporter des manuscrits propres. Le mot d'ordre : **"Write freely. Stay consistent."**

L'application propose un environnement d'écriture sans distraction couplé à des outils puissants d'organisation narrative : une **bible narrative** (personnages, lieux, objets, factions, concepts, glossaire) avec détection automatique dans le texte, une **timeline chronologique** avec détection de conflits, un système d'**arcs narratifs** avec suivi de statut narratif, et un **corkboard** pour visualiser les scènes comme des fiches.

Le projet représente environ **13 000 lignes de code Rust** pour le backend (plus **21 000 lignes de tests**) et **1 300 lignes TypeScript** pour la couche API frontend, avec **51 composants Svelte** et **25+ modules de base de données** SQLite. Chaque projet d'écriture tient dans un seul fichier `.cahnon` (une base SQLite) : portable, pas de cloud, données 100% locales.

L'architecture repose sur **Tauri v2** pour le shell natif desktop, **Svelte 5 avec le système de runes** pour la réactivité fine du frontend, **Rust** pour la logique métier et les opérations fichiers, et **TipTap/ProseMirror** pour l'éditeur de texte riche extensible.

## Objectifs, contexte, enjeu et risques

**Contexte** : Projet personnel né d'un constat en tant qu'auteur amateur : les outils d'écriture existants sont soit trop simplistes (traitement de texte classique), soit propriétaires et orientés cloud (Scrivener, Dabble), sans réelle solution desktop open source offrant à la fois un éditeur performant et des outils de gestion narrative avancés.

**Problématique** : Les romanciers et auteurs de séries gèrent des univers narratifs complexes — dizaines de personnages, chronologies entrelacées, arcs narratifs multiples. Sans outil dédié, les incohérences s'accumulent et la révision devient un cauchemar. Aucune solution open source ne combinait écriture, organisation et vérification de cohérence dans une application locale et respectueuse de la vie privée.

**Objectifs** : Créer une application desktop native, modulaire et non prescriptive, qui permette aux auteurs de commencer à écrire immédiatement puis de structurer progressivement leur manuscrit, avec des outils intelligents de détection d'incohérences et d'auto-liaison des éléments narratifs.

**Risques identifiés** : Complexité de l'intégration Tauri v2 (framework encore jeune), courbe d'apprentissage de Rust pour la logique métier, gestion de la synchronisation d'état entre le frontend Svelte et le backend Rust via IPC, et performance de l'éditeur TipTap avec de longs manuscrits.

## Étapes – ce que j'ai fait

**Phase 1 - Prototypage et choix technologiques** : Benchmark entre Electron et Tauri v2. Choix de Tauri pour la légèreté (bundle < 20 Mo), les performances natives de Rust et la sécurité CSP stricte. Prototypage de l'éditeur avec TipTap et ProseMirror pour valider le support des extensions personnalisées (annotations, auto-linking).

**Phase 2 - Architecture backend Rust** : Conception de la base de données SQLite avec 25+ tables (scènes, chapitres, bible, arcs, événements, annotations, snapshots, etc.). Développement de 20 modules de commandes Tauri couvrant tous les domaines fonctionnels. Mise en place du système de validation des entrées et du mécanisme de verrouillage de projet.

**Phase 3 - Frontend Svelte 5 et state management** : Implémentation de 51 composants Svelte (39 principaux + 12 primitives UI). Création d'un store centralisé basé sur les runes Svelte 5 (`AppState`) pour gérer l'état réactif. Développement de la couche API avec 9 modules domaine (manuscrit, bible, timeline, analytics, export, etc.).

**Phase 4 - Fonctionnalités avancées** : Développement du système de détection automatique des entrées de bible dans le texte avec liaison auto. Implémentation de la timeline avec détection de conflits chronologiques. Création du corkboard avec filtres par statut, point de vue et arc narratif. Système de snapshots avec comparaison et restauration de versions.

**Phase 5 - Qualité et robustesse** : Tests unitaires frontend (Vitest) et backend (cargo test). Configuration E2E avec WebdriverIO. Mise en place de Husky (pre-commit/pre-push), ESLint, Prettier, Knip et cargo clippy. Résolution de toutes les alertes d'analyse statique Codacy.

## Acteurs – les interactions

J'ai travaillé seul sur l'ensemble du projet. Conception de l'architecture Tauri/Rust/Svelte, développement du backend et du frontend, création de l'éditeur TipTap, modélisation de la base SQLite et mise en place de la chaîne de qualité : tout a été réalisé en autonomie.

## Résultats

### Pour moi

- Rust appris et pratiqué sérieusement (13k lignes de code + 21k de tests)
- Tauri v2 et l'architecture IPC frontend/backend : plus de secrets
- Svelte 5 avec le système de runes pour une réactivité granulaire
- TipTap/ProseMirror et les extensions d'éditeur de texte riche
- Conception de base SQLite complexe (25+ tables, relations N:M)
- Une application desktop architecturée de bout en bout

### Pour les utilisateurs

- Application desktop fonctionnelle pour Windows, macOS et Linux (bundle < 20 Mo)
- Données 100% locales dans un fichier unique `.cahnon` — aucun cloud, confidentialité totale
- Éditeur de texte riche avec modes focus, typewriter et compteur de mots
- Bible narrative complète (6 types d'entrées) avec détection et liaison automatique dans le texte
- Timeline avec détection de conflits et arcs narratifs avec suivi de statut
- Export multi-format : Markdown, texte brut, PDF, DOCX, JSON, CSV

## Lendemains du projet

### Futur immédiat

- Finalisation du mode démo avec projet exemple embarqué
- Amélioration des performances de l'éditeur sur les manuscrits longs (100k+ mots)
- Documentation utilisateur complète et tutoriels de prise en main

### À moyen terme

- GPS Narratif : 5 fonctionnalités d'intelligence narrative pour guider l'auteur
- Carte relationnelle interactive des personnages et entités
- Templates de structures narratives (voyage du héros, structure en trois actes)
- Analyse d'impact automatique lors de modifications de la bible

### Aujourd'hui

- Je continue à sortir des releases régulièrement
- La structure modulaire rend l'ajout de fonctionnalités assez indolore
- Les hooks git, le linting et les tests gardent le code stable

## Regard critique

**Ce qui a bien fonctionné** : Le choix de Tauri v2 avec Rust — les performances et la taille du bundle sont au rendez-vous. L'architecture modulaire du backend (25+ modules SQLite indépendants) m'a permis d'avancer vite sans casser ce qui existait. Le système de runes de Svelte 5 colle bien à un éditeur de texte temps réel où la réactivité doit être granulaire.

**Ce que j'aurais fait différemment** : J'aurais dû investir plus tôt dans les tests E2E pour une application desktop — les interactions IPC entre Svelte et Rust sont complexes à tester unitairement. J'aurais également conçu le schéma de base de données avec un système de migrations dès le départ plutôt que de le gérer après coup.

**Leçon apprise** : Développer une application desktop avec des technologies web (Tauri) demande de penser différemment qu'une webapp : gestion de l'état local, verrouillage de fichiers, récupération après crash, permissions système — autant de sujets qu'on ne croise jamais en développement web classique.
