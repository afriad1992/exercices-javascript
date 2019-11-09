/*
    Créer une page HTML qui demande à l'utilisateur un prénom.
    La page doit continuer à demander des prénoms à l'utilisateur jusqu'à ce qu'il laisse le champ vide.
    Enfin, la page affiche sur la console le nombre de prénoms et les prénoms saisis.*/

var i=-1;
var list="";
var nom="";
while(nom!=null){
                 list=list+" "+nom;
                 i++;
                nom=prompt("donner votre nom N°"+i);
        
                }
console.log("vous avez saisi"+" "+i+" "+"nom qui sont"+" "+list);