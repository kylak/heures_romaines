# Présentation
Ce programme a pour objectif de donner les heures temporaires d'un jour (1ère heure, 2ème heure, etc.).

# Pour utiliser l'algorithme, deux manières.

0. Prendre connaissance de l'heure en minutes à laquelle se lève le soleil ainsi que de la durée du jour en minutes.  
Pour cela, le site [proxiti](https://www.proxiti.info/horaires_soleil.php?o=75056) peut aider.

## Première manière de procéder :  
1. Se rendre à l'adresse web https://jdoodle.com/a/5mpP.
2. Entrer dans la zone de texte nommée *CommandLine Arguments* l'heure en minutes à laquelle se lève le soleil, un espace, et puis la durée du jour en minutes (vous pouvez mettre de guillemets aux nombres que vous entrez ou ne pas en mettre).<br>
3. Appuyer sur le bouton *Execute*, le résultat devrait alors s'afficher dans la zone de texte nommée *Stdin Inputs*.<br>
#### S'il y a eu une erreur, vous pouvez recommencez la procédure en remplacant l'étape 1. par la 1b. que je met ci-dessous. 
1b. Copier le contenu du fichier [algo.java](https://github.com/kylak/heures_romaines/blob/9633c615ce4b4ca16d21d71536d8398c87e395ba/algo.java) et le coller dans la zone de texte du haut du site [jdoodle](https://www.jdoodle.com/online-java-compiler/) (avant de coller : supprimer ce que peut-être il y aurait dans cette zone de texte).<br>

## Deuxième manière de procéder :  
1. Avoir java d'installé et fonctionnel sur son ordinateur.<br>
2. Télécharger ce *repo* Github.<br>
3. Exécuter le programme algo.java en passant en premier argument l'heure en minutes à laquelle se lève le soleil, et en deuxième la durée du jour en minutes. <br><br>

# Exemple de l'utilisation du programme : 

![alt text](https://github.com/kylak/heures_romaines/blob/master/.img.png)
