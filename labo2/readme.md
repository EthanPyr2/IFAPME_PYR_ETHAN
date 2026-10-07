# Portfolio - Ethan Pyr

Projet de site web statique multi-pages développé en HTML et SCSS par Ethan dans le cadre du labo 2. L'objectif était de concevoir un portfolio personnel présentant mon profil, mon parcours et mes compétences, en s'appuyant sur une architecture de styles modulaire et un outil de build moderne (Vite).

## Navigation du site

* `index.html` : Page d'accueil présentant mon profil, mon statut, les liens vers mes réseaux, le téléchargement de mon CV et un formulaire de contact.
* `project.html` : Page dédiée à mes projets (en cours de développement).
* `experience.html` : Page retraçant mon parcours sous forme de timeline (expériences professionnelles et formations).
* `stacks.html` : Page présentant mes compétences techniques, classées par catégorie (front-end, back-end, outils).

## Technologies utilisées

* HTML5 (balises sémantiques et attributs ARIA)
* SCSS (variables, mixins et partials chargés avec `@use`), compilé avec `sass-embedded`
* Vite (serveur de développement et build multi-pages)
* Police d'écriture importée depuis Google Fonts (Inter)
* Icônes Font Awesome

## Structure des dossiers

* `/` : Contient l'ensemble des fichiers HTML du projet ainsi que la configuration (`package.json`, `vite.config.js`).
* `/src/styles/main.scss` : Point d'entrée des styles, qui importe l'ensemble des partials.
* `/src/styles/abstract/` : Variables (couleurs, typographie) et mixins réutilisables.
* `/src/styles/base/` : Reset CSS.
* `/src/styles/layout/` : Styles de structure (header, footer, grille).
* `/src/styles/components/` : Styles des composants (boutons, cartes, hero, formulaire, compétences, expériences, projets).
* `/public/` : Dossier regroupant la photo de profil et le CV au format PDF.



## Note sur l'utilisation de l'IA

La structure du projet, l'architecture SCSS, la charte graphique et la page d'accueil ont été conçues et développées manuellement. Afin d'optimiser le temps de développement, les pages Projets et Expériences ont été réalisées dans un workflow assisté par IA avec Claude Code : l'outil a été utilisé pour accélérer l'intégration, en s'appuyant sur les composants, les variables et les conventions déjà en place. Le code produit a ensuite été relu, ajusté et validé pour rester cohérent avec le reste du site. La rédaction de ce fichier README a également été assistée par IA.

## Consultation du projet

Le projet est hébergé et accessible directement en ligne aux adresses suivantes :

* Lien de la démo : https://ethanpyr2.github.io/IFAPME_PYR_ETHAN/labo2/Portfolio/
* Lien du dépôt : https://github.com/EthanPyr2/IFAPME_PYR_ETHAN/tree/main/labo2/Portfolio
