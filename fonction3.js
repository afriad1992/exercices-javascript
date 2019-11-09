
var multiple=function()// j ai transformé l ex du multiple en fonction
{var x=parseInt(prompt("saisir un nombre"));
var N=parseInt(prompt("saisir le nombre des premiers multuple"));
for(i=0;i<=N;i++){
console.log(+nb+" "+"*"+" "+i+"="+" "+nb*i);}
}
var somme=function()// jai transformé l ex du somme et myenne en fonction 
{var n;
    var i=1;
    var s=0;
    do{n=parseInt(prompt("saisir un nombre"));
    s=s+n;
    i++;}while(n!=0);
    alert("la somme de vos nombres"+s+"et la moyenne est:"+s/i);
}

var voyelles=function()// jai transformé l ex des voyelles en fonction 
{
    var mots=prompt("saisir un mots");
    var n=0;;
    for (i=0;i<=mots.length;i++)
    {if((mots[i]=="a")||(mots[i]=="e")||(mots[i]=="i")||(mots[i]=="o")||(mots[i]=="u")||(mots[i]=="y")||(mots[i]=="A")||(mots[i]=="E")||(mots[i]=="I")||(mots[i]=="O")||(mots[i]=="U")||(mots[i]=="Y"))
           {n++;}   
    }
    alert("le nombre de voyelles dans votre mots:"+n);
    
}
var caractere=function()// la meme fonction que la precedent sauf j' ai changer les variables
{var caractere=prompt("saisir un caractere");
var phrase=prompt("saisir une phrase");
var n=0;;
for (i=0;i<=phrase.length;i++)
{if(phrase[i]==caractere)
       {n++;}   
}
alert("le nombre de caractere dans votre phrase est:"+n);

}
var menu=function()// j ai introduit une fonction menu qui contient toutes les fonctions precedentes
{var option=prompt("1-multiple \n 2-Somme et moyen \n 3-Recherche des nombre de voyelle \n 4-Recherche le nombre de caractere");

switch(option)// ja i choisi switch car mon option prends plusieurs valeurs
{case"1":
multiple();
break;
case"2":
somme();
break;
case"3":
voyelles();
break;             
case"4":
caractere();
break;
default:
alert(erreur);
}
}
menu();