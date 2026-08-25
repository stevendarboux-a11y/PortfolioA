---
title: "Corelab"
excerpt: "Plateforme de gestion de formations (LMS e-learning) développée avec la stack MERN"
icon: "🎓"
tags: [React, Node.js, Express, MongoDB, Docker, JWT]
tech: "React, Vite, Node.js, Express, MongoDB, JWT, Jest, Docker, Git, GitHub"
github: "https://github.com/stevendarboux-a11y/SlayLab"
demo: "https://slay-lab.vercel.app"
order: 5
---

## Description

Corelab est un LMS (Learning Management System) permettant de gérer des formations en ligne, avec un espace administrateur et un espace étudiant, développé en équipe avec la stack MERN.

## Fonctionnalités

- Espace administrateur pour la gestion des formations
- Espace étudiant avec suivi de la progression
- Authentification sécurisée par JWT et hachage des mots de passe (bcrypt)
- Infrastructure conteneurisée avec Docker Compose (frontend, backend, MongoDB)
- Suite de tests automatisés (Jest, Supertest)

## Technologies utilisées

- **Front-end:** React, Vite, JavaScript
- **Back-end:** Node.js, Express (API REST)
- **Base de données:** MongoDB
- **Authentification:** JWT, bcrypt
- **Tests:** Jest, Supertest
- **Infrastructure:** Docker, Docker Compose

## Accès à la démo

- **Espace admin :** `admin@corelab.dev` / `Admin1234!`
- **Espace étudiant :** `bob@corelab.dev` / `Student1234!`

> Le backend est hébergé gratuitement (Render) : la première requête peut prendre 30-50 secondes le temps que le serveur se réveille.

## Défis techniques

Le principal défi était de collaborer en équipe sur une architecture MERN complète, en assurant la cohérence entre le frontend React et l'API Express, tout en conteneurisant l'ensemble des services avec Docker pour garantir un environnement de développement reproductible entre les membres de l'équipe.

## Équipe

Projet réalisé en collaboration avec [Noémie](https://github.com/noemie-ta-ma) (Backend & Infra) et [Daloba](https://github.com/dalobaminthe) (Fullstack). Contribution personnelle centrée sur le frontend.
