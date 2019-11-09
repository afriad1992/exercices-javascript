//declaration de variable pour récupérer les valeurs dans les input

var formValid=document.getElementById("envoyer");
var lastname=document.getElementById("lastname");
var oublinoms=document.getElementById("oublinoms");
var persco=document.getElementById("percon");
var oublipersco=document.getElementById("oubliperco"); 
var ville=document.getElementById("ville");
var oubville=document.getElementById("oubliville");
var cd=document.getElementById("cd");
var oubcd=document.getElementById("oublicd");
var email=document.getElementById("mail");
var oubemail=document.getElementById("oubliemail");
var choix=document.getElementById("environnement");
var commentaire=document.getElementById("technique");
nomsValid=/^[A-Z]$/;
//regex de verification du formulaire
cdvalid=/^\d{5}$/;
emailvalid=/^\w+\.\w*@\w+\.\w{3}$/;  

formValid.addEventListener('click', validation);
function validation(event){
   //si le champ est vide
    if(lastname.validity.valueMissing){
       event.preventDefault();
       oublinoms.textContent="vous avez oubliez le nom de la societé";
       oublinoms.style.color="red";
    }else if(nomsValid.test((lastname.value))==false){
    event.preventDefault();
    oublinoms.textContent="format incorrect";
    oublinoms.style.color="orange";
   }
    
   if(persco.validity.valueMissing){
       event.preventDefault();
       oublipersco.textContent="vous avez oubliez le nom de la societé";
       oublipersco.style.color="red";
    }else if(nomsValid.test((persco.value))==false){
      event.preventDefault();
      oublipersco.textContent="format incorect";
      oublipersco.style.color="orange";
    }  
    if(ville.validity.valueMissing){
       event.preventDefault();
       oubville.textContent="vous avez oubliez le nom de la societé";
       oubville.style.color="red";
    }else if(nomsValid.test((ville.value))==false){
      event.preventDefault();
      oubville.textContent="format incoreect";
      oubville.style.color="orange";
      
    }
   
    if(cd.validity.valueMissing){
       event.preventDefault();
       oubcd.textContent="vous avez oubliez le code postal";
       oubcd.style.color="red";
    }else if(cdvalid.test(cd.value)==false){
        event.preventDefault();
        oubcd.textContent="entrer le code postale sur 5 chiffre s.v.p";
        oubcd.style.color="orange";  
    }

     
    if(email.validity.valueMissing){
       event.preventDefault();
       oubemail.textContent="vous avez oubliez l'email";
       oubemail.style.color="red";
    }else if(emailvalid.test(email.value)==false){
       event.preventDefault();
       oubemail.textContent="veuillez entrer un email valide";
       oubemail.style.color="orange";
        
    }
   }
   if(choix.value!="choisissez"){commentaire.value+=choix.value;}
   

