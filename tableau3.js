var n=parseInt(prompt("saisir la taille de ton tableau"));
var tab=Array(n);
var temp;
for(i=0;i<n;i++){tab[i]=parseInt(prompt("donner la valeur de la cellule"+i));}
do{cpt=0;
    for(i=0;i<n-1;i++)
                      {if(tab[i]>=tab[i+1]){temp=tab[i];
                                               tab[i]=tab[i+1];
                                               tab[i+1]=temp;
                                               cpt++;
                                                }
                      }
                   
 }while(cpt!=0);
 console.log(tab);