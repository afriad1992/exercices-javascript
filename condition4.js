/*Un patron décide de calculer le montant de sa participation au prix du repas de ses employés de la façon suivante :

    si il est célibataire : participation de 20%
    si il est marié : participation de 25%
    si il a des enfants : participation de 10% supplémentaires par enfant
    la participation est plafonnée à 50%
    si le salaire mensuel est inférieur à 1200 €, la participation est majorée de 10%.*/

var N=parseInt(prompt("combien vous avez d'enfant"));
var situ=confirm("vous etes mariez");
var S=parseInt(prompt("combien votre salaire en euros"));
var par=0;// je vais introduire une variable qui va ajouter la participation a chaque fois la condition est realisé
if (situ==true){par+=25;}
else{par+=20;}
if(S<1200){par+=10;}
par+=N*10;
if(par>50){alert("la participation de votre patron pour votre repas est de 50%");}
else{alert("la participation de votre patron pour votre repas est de:"+par+"%");}

      