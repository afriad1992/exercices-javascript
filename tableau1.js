var taille=parseInt(prompt("saisir la taille de tone tableau"));
var tableau=Array(taille);
for(i=0;i<taille;i++)
{tableau[i]=prompt("saisir la valeur de la case"+" "+i);
}
for(i=0;i<taille;i++)
{console.log(tableau[i]);}
