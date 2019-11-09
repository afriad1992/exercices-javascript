


document.getElementById("form").addEventListener("submit",function(event){

    var filtre1=new RegExp("^[A-za-z]+$");
var filtre2=new RegExp("^[0-9]{5}$");
var filtre3=new RegExp(/^[_a-z0-9-]+(.\[_a-z0-9-])*@\+?[_a-z0-9-]+.\[A-za-z]+$/);

if(filre1.test(document.getElementById("noms").value)==false||document.getElementById("noms").validity.valueMissing){event.preventDefault();
    alert("veuillez renseigner le nom de la societé");}
if(!filtre1.test(document.getElementById("prénom").value)){alert("veuillez renseigner le nom du personne a contacter");}
if(!filtre2.test(document.getElementById("tf").value)) {alert(" le code postale doit comporter 5 chiffre au minumum");}
if(!filtre1.test(document.getElementById("vi").value)){alert("veuillez renseigner le nom de la ville");}
if(!filtre3.test(document.getElementById("tf").value));{alert("veuillez renseigner l'email");}

if(document.getElementById("technique").value!="choisissez")
{document.getElementById("technique").value+=document.getElementById("environnement").innerHTML;} 

         })
