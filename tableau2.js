var getIntegrer=function()
{
  let  taille=parseInt(prompt("saisir la taille de ton tableau"));
}
var InitTab=function(length)
{
  let  table= new Array(length);
}
var saisietab=funtion(tab,length)
{for(i=0;i<=length;i++)
    { tab[i]=prompt("saisir la valeur de la case"+" "+i);
    }
}
var AfficheTab=function(tab,length)
{for(i=0;i<=length;i++){console.log(tab[i]);}
}
 var RechercheTab=function(tab)
 {let rang=parseInt(prompt("saisir le rang du mot que vous avez cherché "));
 console.log(tab[rang]);
}
var InfoTab=function(tab,length)
{var Max=tab[0];
var S=0;
for(i=0;i<=length;i++)
     {
      if(tab[i]>=Max) {Max=tab[i];}
      S+=tab[i];
    }
    console.log("le maximun de ton tableau est"+Max+"le moyen de ton tableau est"+S/taille);
}
getIntegrer();
InitTab(taille);
saisietab(table,taille);
AfficheTab(table);    
