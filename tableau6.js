var Max=parseInt(prompt("saisir un nombre "));
var tab=Array(Max);
var a,b;
tab[0]=0;

for(i=1;i<=(Max-1);i++)
                        {b=0;
                         for (j=2;j<=Math.sqrt(i+1);j++)
                                                      {a=(i+1)%j;
                                                       if(a==0){b++;} 
                                                      }
                          if (b==0){tab[i]=1;}
                          else     {tab[i]=0;}                                                   
                       }
                                                     
console.log(tab);