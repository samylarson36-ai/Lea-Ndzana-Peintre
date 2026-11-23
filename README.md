Léa Ndzana, peintre

Projet d’entraînement : site portfolio d’une artiste peintre fictive à Douala. Le nom, les adresses, les téléphones, les tarifs et les personnes sont fictifs et ne correspondent à aucune entreprise réelle.

Pages

	•	index.html : Accueil : galerie de neuf toiles, atelier et formulaire de commande
	•	a-propos.html : Démarche, trois piliers et parcours de l’artiste
	•	commandes.html : Tarifs par format, déroulé d’une commande et FAQ

Fonctionnalités

	•	Galerie filtrable (mer, ville, nuit) avec agrandissement au clic
	•	Tableaux abstraits générés en SVG
	•	Formulaire de commande sur mesure (mailto:)
	•	Tarifs indicatifs par format
	•	Design responsive (mobile, tablette, ordinateur) avec menu burger
	•	Aucune dépendance : HTML, CSS et JavaScript natifs, polices Google Fonts

Structure

lea-ndzana-peintre/
├── index.html
├── css/style.css
├── js/main.js
├── img/            illustrations SVG
├── favicon.svg
└── README.md

Lancer en local

Ouvre index.html dans un navigateur. Pour un test plus proche de la production :

python3 -m http.server 8000

puis rends-toi sur http://localhost:8000.

Déployer

	•	Vercel : importe le dépôt, aucun réglage de build (site statique).
	•	GitHub Pages : Settings → Pages → branche main, dossier / (root).

Personnaliser

	•	Remplace l’adresse .example des formulaires par ton e-mail : attribut data-mail dans index.html.
	•	Les couleurs sont des variables au début de css/style.css : --ac (bleu cobalt) et --hero (fond du bandeau).
	•	Remplace les fichiers de img/ par de vraies photos en gardant les mêmes noms (adapte l’extension dans les balises <img> si besoin)
