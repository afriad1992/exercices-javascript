
var mots=prompt("saisir un mots");
var n=0;;
for (i=0;i<=mots.length;i++)
{if((mots[i]=="a")||(mots[i]=="e")||(mots[i]=="i")||(mots[i]=="o")||(mots[i]=="u")||(mots[i]=="y")||(mots[i]=="A")||(mots[i]=="E")||(mots[i]=="I")||(mots[i]=="O")||(mots[i]=="U")||(mots[i]=="Y"))
       {n++;}   
}
alert("le nombre de voyelles dans votre mots:"+n);
