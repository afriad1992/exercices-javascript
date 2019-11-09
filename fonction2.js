
/*Ecrivez une fonction qui prend deux paramètres
:phrase de type string
lettre de type string
La fonction compte le nombre de fois ou lettre apparaît dans la phrase;*/
var lett=function()
{var lettre=prompt("saisir une lettre");
var phrase=prompt("saisir une phrase");
var n=0;;
for (i=0;i<=phrase.length;i++)
{if(phrase[i]==lettre){n++;}}// a chaque fois on trouve la lettre coisi on incremente le compteur n
console.log(n);
}