# exercice-technique

**INSTRUCTIONS:**
> Réaliser un carousel. 
<hr>

# Table of Contents

* [Démo](#démo)
* [Fonctionnalités](#fonctionnalités) 
* [Contributeurs](#contributeurs)

# Démo

<a href="#">Voir la démo en ligne</a>

# Fonctionnalités

* utilisation d'un reset.css pour maximiser la compatibilité entre les navigateurs.

* Des flèches apparaissent sur les côtés de l'image au passage de la souris, et permettent de passer à l'image suivante.

* si la fenêtre du navigateur est trop étroite (<640px), le texte s'affiche en dessous de l'image.

* J'ai fait le choix de transformer les boutons demandés du côté droit en petites icônes cliquables situées en dessous de l'image en cours.

* Il est possible de choisir quels éléments du carousels doivent s'afficher ou non en retirant les argument "data-" de l'élément "netatmo-carousel" :
    * <b>data-siblings</b>, qui permet l'affichage des fleches au survol de la souris 
    * <b>data-auto</b>, qui automatise le défilement du carousel
    * <b>data-pagination</b>, qui affiche ou non les "pastilles" cliquables en bas du carousel
    * <b>data-alternate-blocks</b>, qui permet le placement automatique des elements textuels sur la droite du carousel, une slide sur deux.

* Pour l'aspect design, j'ai choisi de respecter la charte du site <a href="https://www.netatmo.com/fr-fr">Netatmo</a> : mêmes couleur et polices pour les titres et textes.

* Une légère animation sur le texte lorsqu'il apparait attire le regard de l'utilisateur vers celui-ci.

* Placer la souris au dessus du carousel stoppe temporairement le défilement automatique.

# Contributeurs

* Bruno Simon pour son <a href="https://github.com/brunosimon/reset-css">reset.css</a>