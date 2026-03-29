# Portfolio — Arnold Darboux

Portfolio professionnel développé avec Jekyll et déployé sur GitHub Pages.

## Lien du site

[stevendarboux-a11y.github.io/PortfolioA](https://stevendarboux-a11y.github.io/PortfolioA)

## Fonctionnalités

- Pages : Accueil, Projets, À propos, Contact
- Fiches de projet détaillées
- Mode sombre / clair avec persistance (localStorage) et détection automatique des préférences système
- Design responsive (mobile, tablette, desktop)

## Technologies

- Jekyll (générateur de site statique)
- HTML, CSS, JavaScript (Vanilla)
- GitHub Pages

## Lancer le projet en local

**Prérequis :** Ruby, Bundler

```bash
git clone git@github.com:stevendarboux-a11y/PortfolioA.git
cd PortfolioA
bundle install
bundle exec jekyll serve --baseurl ""
```

Ouvrir [http://localhost:4000](http://localhost:4000)

> Note : `--baseurl ""` est nécessaire en local car le baseurl est configuré sur `/PortfolioA` pour GitHub Pages.

## Structure

```
PortfolioA/
├── _layouts/       # Layouts (default, home, about, page, project)
├── _includes/      # Header, footer
├── _pages/         # Pages statiques (about, contact, projets)
├── _projects/      # Fiches projets (markdown)
├── assets/
│   ├── css/        # Styles principaux
│   ├── js/         # Scripts (dark mode, smooth scroll)
│   └── img/        # Images
└── _config.yml     # Configuration Jekyll
```
