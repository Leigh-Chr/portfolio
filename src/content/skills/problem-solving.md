---
title: 'Résolution de problèmes'
category: 'human'
group: 'personal'
level: 8
icon: '🧩'
order: 8
relatedProjects: ['syren-platform', 'luce-platform', 'appstandard', 'tidy-app', 'cahnon']
summary: 'Approche méthodique pour analyser, décomposer et résoudre des problèmes techniques de manière efficace.'
---

## Ma Définition

La résolution de problèmes est le quotidien du développeur. L'émergence des outils d'IA assistée comme GitHub Copilot et Claude transforme l'approche du debugging en 2024 : ces assistants aident à identifier des patterns d'erreurs, suggèrent des solutions et accélèrent la recherche. Parallèlement, les pratiques d'observabilité (OpenTelemetry, distributed tracing) permettent de diagnostiquer des problèmes complexes dans les architectures distribuées. Chaque bug à corriger, chaque fonctionnalité à implémenter est un puzzle à résoudre. Face à un problème complexe, ma méthode est toujours la même : d'abord comprendre et reproduire le problème de manière isolée, puis le décomposer en sous-problèmes plus simples.

## Mes éléments de preuve

### Débogage multicouche dans l'IoT

Dans le contexte IoT de BH Technologies, les problèmes sont souvent multicouches : le bug peut venir du capteur physique, de la communication réseau LoRaWAN, du backend qui traite les données, ou du frontend qui les affiche. Cette complexité m'a appris à raisonner de manière systémique, à utiliser les logs stratégiquement et à ne pas faire d'hypothèses prématurées. J'utilise le débogage pas-à-pas, les breakpoints conditionnels, et parfois le "rubber duck debugging".

### Refonte des rapports Syren V3

Les rapports IoT de **[Syren V3](/projects/syren-platform)** étaient illisibles et généraient de nombreuses demandes de clarification. J'ai analysé le problème en observant comment les utilisateurs les consultaient, puis j'ai refait entièrement la mise en page : graphiques clairs, information structurée par priorité, exports PDF propres. Résultat : amélioration notable de la satisfaction et réduction significative des demandes d'explication.

### Implémentation des RRULE dans AppStandard

Sur **[AppStandard](/projects/appstandard)**, j'ai dû implémenter le parsing des règles de récurrence (RRULE) du standard RFC 5545. Ces règles peuvent être extrêmement complexes (récurrences avec exceptions, fuseaux horaires, limites). J'ai décomposé le problème en sous-parsers, écrit des tests exhaustifs, et itéré jusqu'à gérer tous les cas edge. Cette approche méthodique a permis de créer un parser robuste qui gère les fichiers .ics de Google, Apple et Outlook.

## Mon autocritique

Mon parcours en STI2D, orienté vers l'ingénierie, m'a formé à cette approche analytique dès le lycée. J'apprécie particulièrement les problèmes de performance : analyser des requêtes lentes, optimiser des algorithmes, réduire la consommation mémoire.

Mon conseil : toujours reproduire le problème de manière isolée avant de chercher une solution. Un bug qu'on ne peut pas reproduire est un bug qu'on ne peut pas vraiment corriger.

## Mon évolution dans cette compétence

Je souhaite approfondir les techniques de debugging avancées : profiling mémoire, analyse de performance, et observabilité (traces distribuées, métriques). Ces compétences sont essentielles pour maintenir des applications à grande échelle.

## Réalisations associées

- [Plateforme Syren](/projects/syren-platform) - Débogage IoT multicouche, refonte rapports
- [Plateforme Luce](/projects/luce-platform) - Diagnostic problèmes réseau LoRaWAN
- [AppStandard](/projects/appstandard) - Parsing RRULE complexe, architecture monorepo
- [Tidy App](/projects/tidy-app) - Intégration LLMs, gestion edge cases
- [Cahnon](/projects/cahnon) - Détection d'incohérences narratives, auto-linking dans l'éditeur
