
/*Faire la saisie de 2 nombres entiers, puis la saisie d'un opérateur +, -, * ou /.
Si l'utilisateur entre un opérateur erroné, le programme affichera un message d'erreur.
Dans le cas contraire, le programme effectuera l'opération demandée
 (en prévoyant le cas d'erreur division par 0), puis affichera le résultat.*/
var nb1=parseInt(prompt("saisir le premier nombre"));
var nb2=parseInt(prompt("saisir le deuxieme nombre"));
var op=prompt("saisir un operateur");
var resultat;
if(op=="/"&&nb2==0)
   {alert("division impossible");}
else{switch(op)//comme l'operateur va avoir plusieur valeur je vais utiliser switch
    {case"+":
    resultat=nb1+nb2;
    break;
    case"-":
    resultat=nb1-nb2;
    break;
    case"*":
    resultat=nb1*nb2;
    break;
    case"/":
    resultat=nb1/nb2;
    break;
    default:
    alert("ereur");}
    alert("le resultat de"+" "+nb1+" "+op+" "+nb2+"="+resultat);
}
