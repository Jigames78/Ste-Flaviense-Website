# Ste Flaviense Mayday - Site Web

Site web professionnel pour une entreprise de nettoyage industriel basée à Paris.

## 🚀 Démarrage rapide

### Prérequis
- Node.js (v14 ou supérieur)
- npm ou yarn

### Installation

1. Clonez le repository
```bash
git clone [votre-repo]
cd ste-flaviense-website
```

2. Installez les dépendances
```bash
npm install
```

3. Lancez le serveur de développement
```bash
npm start
```

Le site sera accessible sur `http://localhost:3000`

## 📦 Scripts disponibles

- `npm start` - Lance le serveur de développement
- `npm run build` - Crée une version de production
- `npm test` - Lance les tests
- `npm run eject` - Éjecte la configuration (irréversible)

## 🏗️ Structure du projet
```
ste-flaviense-website/
├── public/
│   ├── index.html
│   └── favicon.ico
├── src/
│   ├── components/
│   │   ├── Header.js
│   │   ├── Hero.js
│   │   ├── About.js
│   │   ├── Services.js
│   │   ├── Commitments.js
│   │   ├── Testimonials.js
│   │   ├── Contact.js
│   │   ├── Equipment.js
│   │   └── Footer.js
│   ├── assets/
│   │   └── data.js
│   ├── App.js
│   ├── index.js
│   └── index.css
├── package.json
└── README.md
```

## 🎨 Technologies utilisées

- **React 18** - Framework JavaScript
- **React Scripts 5** - Outils de build
- **CSS-in-JS** - Styling inline pour la flexibilité

## 📱 Sections du site

1. **Header** - Navigation fixe avec menu responsive
2. **Hero** - Section d'accueil avec titre principal
3. **About** - Présentation de l'entreprise avec statistiques
4. **Services** - Types de locaux nettoyés (6 catégories)
5. **Commitments** - Engagements de l'entreprise (4 piliers)
6. **Testimonials** - Témoignages clients et partenaires
7. **Contact** - Formulaire de contact et devis
8. **Equipment** - Équipements et produits utilisés
9. **Footer** - Liens et informations de contact

## 🔧 Personnalisation

### Modifier les données

Les données du site sont centralisées dans `src/assets/data.js` :
- Services
- Équipements
- Témoignages
- Clients

### Changer les couleurs

Les couleurs principales sont définies dans chaque composant :
- Couleur primaire : `#0f766e` (teal-700)
- Couleur secondaire : `#115e59` (teal-800)

## 📞 Contact

**Ste Flaviense Mayday**
- Téléphone : 01 42 29 70 45
- Email : info@Flaviense.fr
- Établie depuis : 1996

## 📄 Licence

Ce projet est privé et confidentiel.