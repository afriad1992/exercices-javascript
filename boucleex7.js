var b=0;
var a;
var N=parseInt(prompt("donner un nombre"));
/*pour tester un nombre si il est premier ou non il suffit de tester
 si il est divisible par les nombre inferieur a sa racine*/
for (i=2;i<=Math.sqrt(N);i++)
{ a=N%i;
if (a==0){b++;}   
}
if (b==0){console.log("le nombre que vous avez donnez est premier");}
else {console.log("le nombre que vous avez donnez n'est pas premier");}