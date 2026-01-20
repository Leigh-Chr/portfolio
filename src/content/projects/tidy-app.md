---
title: 'Tidy App'
shortDescription: 'Application desktop et CLI de rangement intelligent de fichiers avec support IA (Ollama local + OpenAI).'
thumbnail: '/images/projects/tidy-app-thumbnail.jpg'
fullImage: '/images/projects/tidy-app-full.jpg'
order: 5
links:
  repository: 'https://github.com/Leigh-Chr/tidy-app'
  website: 'https://leigh-chr.github.io/tidy-app/'
relatedSkills:
  [
    'javascript-typescript',
    'frontend-frameworks',
    'nodejs-backend',
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

Tidy App est un outil de rangement et renommage automatique de fichiers, disponible en application desktop (Windows, macOS, Linux) et en CLI. Le projet intègre l'intelligence artificielle pour suggérer des noms de fichiers pertinents et des structures de dossiers adaptées au contenu.

L'application extrait les métadonnées des fichiers (EXIF pour les images, propriétés PDF, documents Office) et permet de créer des templates de nommage dynamiques. Un système d'historique complet permet d'annuler toutes les opérations.

Le projet représente plus de 70 000 lignes de TypeScript, avec un backend Rust via Tauri 2.0.

## Objectifs, contexte, enjeu et risques

**Contexte** : Projet personnel né d'un besoin concret : après des années d'accumulation, mon dossier Téléchargements contenait plus de 3000 fichiers mal nommés. Les renommer manuellement aurait pris des heures.

**Problématique** : Les outils de renommage existants sont soit trop basiques (renommage séquentiel), soit trop complexes (expressions régulières). Aucun n'exploitait les métadonnées des fichiers ni l'IA pour suggérer des noms pertinents.

**Objectifs** : Créer un outil de rangement automatique qui combine extraction de métadonnées, templates personnalisables et suggestions IA pour des noms de fichiers pertinents.

**Risques identifiés** : Complexité du développement cross-platform (Windows, macOS, Linux), intégration de modèles IA locaux et distants, gestion sécurisée des opérations fichiers.

## Étapes – ce que j'ai fait

**Phase 1 - Choix technologiques** : Benchmark entre Electron et Tauri. Choix de Tauri 2.0 pour la légèreté (bundle de 15 Mo vs 150 Mo pour Electron) et les performances natives de Rust.

**Phase 2 - Moteur de renommage** : Développement du core en TypeScript avec extraction de métadonnées. Support de 12 formats différents (JPEG, PNG, PDF, DOCX, MP3, MP4, etc.). Système de templates avec plus de 30 variables disponibles.

**Phase 3 - Intégration IA** : Implémentation d'un système de prompts optimisés pour la suggestion de noms. Support d'Ollama pour le mode hors-ligne (confidentialité) et OpenAI pour de meilleurs résultats. Mise en cache des suggestions pour éviter les appels API redondants.

**Phase 4 - Sécurité et UX** : Système d'historique avec rollback complet. Prévisualisation avant exécution. Mode "dry run" pour tester sans modifier. Gestion des conflits de noms automatique.

## Compétences mobilisées

Ce projet m'a permis de mobiliser et développer des compétences variées : développement cross-platform avec Tauri/Rust, intégration de LLMs (Ollama, OpenAI), extraction de métadonnées de fichiers, et conception d'interfaces utilisateur intuitives.

## Résultats

- Découverte et maîtrise de Tauri 2.0 et Rust
- Compétences en intégration de LLMs (Ollama, OpenAI)
- Expertise en développement d'applications desktop cross-platform
- Application fonctionnelle pour Windows, macOS et Linux
- CLI publiée sur NPM
- Système d'historique complet permettant d'annuler toutes les opérations

## Lendemains du projet

### Futur immédiat

- Amélioration des performances sur les gros volumes de fichiers
- Extension du support de formats de métadonnées
- Documentation utilisateur complète

### À moyen terme

- Règles de rangement automatique basées sur des patterns
- Synchronisation avec des services cloud
- Mode batch pour le traitement de masse

### Aujourd'hui

- Le projet est en développement actif
- Les builds desktop sont disponibles pour les trois plateformes
- Le CLI est publié sur NPM

## Regard critique

**Ce qui a bien fonctionné** : Le choix de Tauri s'est révélé excellent : l'application fait moins de 20 Mo et démarre instantanément. Le système d'historique avec rollback a sauvé plusieurs fois des renommages accidentels pendant les tests.

**Ce que j'aurais fait différemment** : J'ai commencé avec une architecture trop couplée entre l'UI et le core. La refactorisation pour extraire une CLI a pris plus de temps que prévu. J'aurais dû penser "library first" dès le départ.

**Leçon apprise** : L'IA générative est impressionnante mais imprévisible. Il faut toujours prévoir des fallbacks et ne jamais exécuter automatiquement les suggestions sans validation utilisateur. La latence des appels API nécessite aussi une UX adaptée (spinners, suggestions progressives).
