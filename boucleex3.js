/*Ecrire un programme qui saisit deux nombres n1 et n2 et qui calcul ensuite la somme des entiers de n1 à n2.*/
var n1=parseInt(prompt("saisir le premier nombre"));
var n2=parseInt(prompt("saisir le deuxieme nombre"));
var s=0;
for (i=n1;i<=n2;i++){s+=i;//s represente la somme des entiers entre  n1 et n2//
                    }
console.log("la somme de votre intervale est"+s);