var n;
var i=1;
var s=0;
do{n=parseInt(prompt("saisir un nombre"));
s=s+n;
i++;}while(n!=0);
alert("la somme de vos nombres"+s+"et la moyenne est:"+s/i);