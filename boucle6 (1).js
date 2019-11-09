
var mots=prompt("saisir un mot");
var cpt=0;//represente le nombre de voyelle
var ip=0;//  ip un nombre qui indique la position d'un caractère a partir de laquelle notrenouvelle chaine de caractere va commencer
var n=mots.length;// n le nombre de caractere de votre mots
while(ip<(n-1))//car la derniere position est egale a la longueur de la chaine plus 1
{ip=Math.min((Math.max(mots.indexOf("a"),-1)),(Math.max(mots.indexOf("e"),-1)),(Math.max((mots.indexOf("i")),-1)),(Math.max((mots.indexOf("o")),-1)),(Math.max((mots.indexOf("u")),-1)),(Math.max(mots.indexOf("y"),-1)));
if(ip!=-1){cpt++;//a chaque fois on trouve une lettre on incremente
           mots=mots.substr((ip+1),(n-ip-1));
          }
else     {break;
         } 
}
console.log("votre mots contient "+cpt+"lettre");


