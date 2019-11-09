/*

Ecrivez un programme qui demande un nombre à l'utilisateur puis qui teste si ce nombre est pair.
 Le programme doit afficher le résultat nombre pair ou nombre impair. Vous devez utiliser l'opérateur modulo % qui donne le reste d'une division. a%2 donne le reste de la division de a par 2, si ce reste est égal à zéro, a est divisible par 2.

*/

var nb=parseInt(prompt("saisir un nombre"));
if(nb%2==0)//on teste si il est divisible par2
         {alert("le nombre que vous avez choisi est paire");
        }
    else{alert("le nombre que vous avez choisi est impaire");
       }     