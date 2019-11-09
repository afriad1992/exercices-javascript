/*Ecrivez un programme qui demande l'année de naissance à l'utilisateur. En réponse votre programme doit afficher 
l'âge de l'utilisateur et indiquer si l'utilisateur est majeur ou mineur.*/
var adn=parseInt(prompt("saisir votre année de naissance"));
var age=2019-adn;//on transforme l annéee de naissance en age
if(age>=18){alert("vous etes majeur et votre age est:"+" "+age);
           }
     else {alert("vous etes mineur et votre age est :"+ " "+age);
           }